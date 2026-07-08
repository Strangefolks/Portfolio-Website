(function initFluidRippleModule() {
  const CONFIG = {
    resolutionScale: 0.35,
    maxResolution: 384,
    damping: 0.984,
    spread: 0.42,
    splashRadius: 0.022,
    splashStrengthBase: 0.08,
    splashStrengthMax: 0.42,
    splashSpeedFactor: 0.018,
    splashMinSpeed: 0.4,
    displayIntensity: 1.35,
    displayOpacity: 0.55,
    simStepsPerFrame: 1,
  };

  const DESKTOP_MQ = window.matchMedia('(hover: hover) and (pointer: fine) and (min-width: 561px)');
  const REDUCED_MOTION_MQ = window.matchMedia('(prefers-reduced-motion: reduce)');

  function isFluidRippleEnabled() {
    return DESKTOP_MQ.matches && !REDUCED_MOTION_MQ.matches;
  }

  function createShader(gl, type, source) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      gl.deleteShader(shader);
      return null;
    }
    return shader;
  }

  function createProgram(gl, vsSource, fsSource) {
    const vs = createShader(gl, gl.VERTEX_SHADER, vsSource);
    const fs = createShader(gl, gl.FRAGMENT_SHADER, fsSource);
    if (!vs || !fs) return null;

    const program = gl.createProgram();
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    gl.deleteShader(vs);
    gl.deleteShader(fs);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      gl.deleteProgram(program);
      return null;
    }
    return program;
  }

  const VERTEX_SHADER = `
    attribute vec2 a_pos;
    varying vec2 v_uv;
    void main() {
      v_uv = a_pos * 0.5 + 0.5;
      gl_Position = vec4(a_pos, 0.0, 1.0);
    }
  `;

  const SIM_FRAGMENT_SHADER = `
    precision highp float;
    varying vec2 v_uv;
    uniform sampler2D u_prev;
    uniform sampler2D u_curr;
    uniform vec2 u_texelSize;
    uniform float u_damping;
    uniform float u_spread;
    void main() {
      float prev = texture2D(u_prev, v_uv).r;
      float curr = texture2D(u_curr, v_uv).r;
      float north = texture2D(u_curr, v_uv + vec2(0.0, u_texelSize.y)).r;
      float south = texture2D(u_curr, v_uv - vec2(0.0, u_texelSize.y)).r;
      float east = texture2D(u_curr, v_uv + vec2(u_texelSize.x, 0.0)).r;
      float west = texture2D(u_curr, v_uv - vec2(u_texelSize.x, 0.0)).r;
      float lap = north + south + east + west - 4.0 * curr;
      float next = (2.0 * curr - prev + u_spread * lap) * u_damping;
      gl_FragColor = vec4(next, 0.0, 0.0, 1.0);
    }
  `;

  const SPLASH_FRAGMENT_SHADER = `
    precision highp float;
    varying vec2 v_uv;
    uniform sampler2D u_buffer;
    uniform vec2 u_splashPos;
    uniform float u_splashRadius;
    uniform float u_splashStrength;
    void main() {
      float height = texture2D(u_buffer, v_uv).r;
      float dist = distance(v_uv, u_splashPos);
      float splash = exp(-(dist * dist) / (u_splashRadius * u_splashRadius)) * u_splashStrength;
      gl_FragColor = vec4(height + splash, 0.0, 0.0, 1.0);
    }
  `;

  const DISPLAY_FRAGMENT_SHADER = `
    precision highp float;
    varying vec2 v_uv;
    uniform sampler2D u_height;
    uniform vec2 u_texelSize;
    uniform vec3 u_rippleColor;
    uniform float u_intensity;
    uniform float u_opacity;
    void main() {
      float center = texture2D(u_height, v_uv).r;
      float left = texture2D(u_height, v_uv - vec2(u_texelSize.x, 0.0)).r;
      float right = texture2D(u_height, v_uv + vec2(u_texelSize.x, 0.0)).r;
      float up = texture2D(u_height, v_uv + vec2(0.0, u_texelSize.y)).r;
      float down = texture2D(u_height, v_uv - vec2(0.0, u_texelSize.y)).r;
      vec2 gradient = vec2(right - left, up - down);
      float slope = length(gradient) * u_intensity;
      float crest = abs(center) * u_intensity;
      float alpha = clamp((slope * 0.65 + crest * 0.45) * u_opacity, 0.0, 0.72);
      vec3 color = u_rippleColor * (0.35 + crest * 0.65);
      gl_FragColor = vec4(color, alpha);
    }
  `;

  function getThemeRippleColor() {
    const theme = document.documentElement.getAttribute('data-theme');
    const isDark = theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches);

    if (document.body.classList.contains('landing-page')) {
      return isDark ? [0.72, 0.82, 1.0] : [0.0, 0.37, 1.0];
    }

    return isDark ? [0.65, 0.78, 1.0] : [0.0, 0.37, 1.0];
  }

  function createFluidRipple() {
    const canvas = document.createElement('canvas');
    canvas.className = 'fluid-ripple-canvas';
    canvas.setAttribute('aria-hidden', 'true');

    const grain = document.querySelector('.site-grain');
    if (grain) {
      document.body.insertBefore(canvas, grain);
    } else {
      document.body.appendChild(canvas);
    }

    const gl =
      canvas.getContext('webgl', {
        alpha: true,
        antialias: false,
        depth: false,
        stencil: false,
        preserveDrawingBuffer: false,
        powerPreference: 'low-power',
      }) ||
      canvas.getContext('experimental-webgl', {
        alpha: true,
        antialias: false,
        depth: false,
        stencil: false,
        preserveDrawingBuffer: false,
      });

    if (!gl) {
      canvas.remove();
      return null;
    }

    const simProgram = createProgram(gl, VERTEX_SHADER, SIM_FRAGMENT_SHADER);
    const splashProgram = createProgram(gl, VERTEX_SHADER, SPLASH_FRAGMENT_SHADER);
    const displayProgram = createProgram(gl, VERTEX_SHADER, DISPLAY_FRAGMENT_SHADER);

    if (!simProgram || !splashProgram || !displayProgram) {
      canvas.remove();
      return null;
    }

    const quadBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, quadBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);

    function bindQuad(program) {
      const loc = gl.getAttribLocation(program, 'a_pos');
      gl.bindBuffer(gl.ARRAY_BUFFER, quadBuffer);
      gl.enableVertexAttribArray(loc);
      gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    }

    function createSimTarget(width, height) {
      const texture = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);

      const framebuffer = gl.createFramebuffer();
      gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);

      return { texture, framebuffer, width, height };
    }

    let simWidth = 0;
    let simHeight = 0;
    let buffers = [];
    let prevIdx = 0;
    let currIdx = 1;
    let scratchIdx = 2;

    function clearBuffer(index) {
      gl.bindFramebuffer(gl.FRAMEBUFFER, buffers[index].framebuffer);
      gl.viewport(0, 0, simWidth, simHeight);
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
    }

    function resizeSimBuffers() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const cssWidth = window.innerWidth;
      const cssHeight = window.innerHeight;
      canvas.width = Math.round(cssWidth * dpr);
      canvas.height = Math.round(cssHeight * dpr);
      canvas.style.width = `${cssWidth}px`;
      canvas.style.height = `${cssHeight}px`;

      const nextWidth = Math.max(
        64,
        Math.min(CONFIG.maxResolution, Math.round(cssWidth * CONFIG.resolutionScale))
      );
      const nextHeight = Math.max(
        64,
        Math.min(CONFIG.maxResolution, Math.round(cssHeight * CONFIG.resolutionScale))
      );

      if (nextWidth === simWidth && nextHeight === simHeight) return;

      simWidth = nextWidth;
      simHeight = nextHeight;

      buffers.forEach((buffer) => {
        gl.deleteTexture(buffer.texture);
        gl.deleteFramebuffer(buffer.framebuffer);
      });

      buffers = [createSimTarget(simWidth, simHeight), createSimTarget(simWidth, simHeight), createSimTarget(simWidth, simHeight)];
      prevIdx = 0;
      currIdx = 1;
      scratchIdx = 2;
      clearBuffer(prevIdx);
      clearBuffer(currIdx);
      clearBuffer(scratchIdx);
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    }

    resizeSimBuffers();

    const pendingSplashes = [];
    let lastPointerX = 0.5;
    let lastPointerY = 0.5;
    let rafId = 0;
    let running = true;

    function queueSplash(x, y, strength) {
      pendingSplashes.push({ x, y, strength });
    }

    function onPointerMove(event) {
      const rect = canvas.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = 1 - (event.clientY - rect.top) / rect.height;

      const dx = (x - lastPointerX) * rect.width;
      const dy = (y - lastPointerY) * rect.height;
      const speed = Math.hypot(dx, dy);

      if (speed >= CONFIG.splashMinSpeed) {
        const strength = Math.min(
          CONFIG.splashStrengthMax,
          CONFIG.splashStrengthBase + speed * CONFIG.splashSpeedFactor
        );
        queueSplash(x, y, strength);
      }

      lastPointerX = x;
      lastPointerY = y;
    }

    function runSplashPass() {
      if (!pendingSplashes.length) return;

      gl.useProgram(splashProgram);
      bindQuad(splashProgram);
      gl.uniform1i(gl.getUniformLocation(splashProgram, 'u_buffer'), 0);
      gl.uniform1f(gl.getUniformLocation(splashProgram, 'u_splashRadius'), CONFIG.splashRadius);

      let srcIdx = currIdx;
      let dstIdx = scratchIdx;

      while (pendingSplashes.length) {
        const splash = pendingSplashes.shift();

        gl.bindFramebuffer(gl.FRAMEBUFFER, buffers[dstIdx].framebuffer);
        gl.viewport(0, 0, simWidth, simHeight);
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, buffers[srcIdx].texture);
        gl.uniform2f(gl.getUniformLocation(splashProgram, 'u_splashPos'), splash.x, splash.y);
        gl.uniform1f(gl.getUniformLocation(splashProgram, 'u_splashStrength'), splash.strength);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

        const swap = srcIdx;
        srcIdx = dstIdx;
        dstIdx = swap;
      }

      if (srcIdx !== currIdx) {
        currIdx = srcIdx;
        scratchIdx = dstIdx;
      }
    }

    function runSimStep() {
      gl.useProgram(simProgram);
      bindQuad(simProgram);
      gl.uniform2f(gl.getUniformLocation(simProgram, 'u_texelSize'), 1 / simWidth, 1 / simHeight);
      gl.uniform1f(gl.getUniformLocation(simProgram, 'u_damping'), CONFIG.damping);
      gl.uniform1f(gl.getUniformLocation(simProgram, 'u_spread'), CONFIG.spread);
      gl.uniform1i(gl.getUniformLocation(simProgram, 'u_prev'), 0);
      gl.uniform1i(gl.getUniformLocation(simProgram, 'u_curr'), 1);

      gl.bindFramebuffer(gl.FRAMEBUFFER, buffers[scratchIdx].framebuffer);
      gl.viewport(0, 0, simWidth, simHeight);
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, buffers[prevIdx].texture);
      gl.activeTexture(gl.TEXTURE1);
      gl.bindTexture(gl.TEXTURE_2D, buffers[currIdx].texture);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

      const nextPrevIdx = currIdx;
      currIdx = scratchIdx;
      scratchIdx = prevIdx;
      prevIdx = nextPrevIdx;
    }

    function renderDisplay() {
      const heightBuffer = buffers[currIdx];
      const rippleColor = getThemeRippleColor();

      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);

      gl.useProgram(displayProgram);
      bindQuad(displayProgram);
      gl.uniform2f(gl.getUniformLocation(displayProgram, 'u_texelSize'), 1 / simWidth, 1 / simHeight);
      gl.uniform3fv(gl.getUniformLocation(displayProgram, 'u_rippleColor'), rippleColor);
      gl.uniform1f(gl.getUniformLocation(displayProgram, 'u_intensity'), CONFIG.displayIntensity);
      gl.uniform1f(gl.getUniformLocation(displayProgram, 'u_opacity'), CONFIG.displayOpacity);
      gl.uniform1i(gl.getUniformLocation(displayProgram, 'u_height'), 0);
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, heightBuffer.texture);
      gl.enable(gl.BLEND);
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      gl.disable(gl.BLEND);
    }

    function tick() {
      rafId = 0;
      if (!running || document.hidden) return;

      runSplashPass();
      for (let i = 0; i < CONFIG.simStepsPerFrame; i += 1) {
        runSimStep();
      }
      renderDisplay();
      rafId = requestAnimationFrame(tick);
    }

    function start() {
      if (rafId || document.hidden) return;
      rafId = requestAnimationFrame(tick);
    }

    function stop() {
      running = false;
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = 0;
      }
    }

    function resume() {
      if (running) return;
      running = true;
      start();
    }

    function onVisibilityChange() {
      if (document.hidden) {
        if (rafId) {
          cancelAnimationFrame(rafId);
          rafId = 0;
        }
      } else {
        start();
      }
    }

    function onResize() {
      resizeSimBuffers();
    }

    document.addEventListener('mousemove', onPointerMove, { passive: true });
    document.addEventListener('visibilitychange', onVisibilityChange);
    window.addEventListener('resize', onResize);

    if (typeof registerViewportSync === 'function') {
      registerViewportSync(onResize);
    }

    const themeObserver = new MutationObserver(() => {
      if (!rafId && running && !document.hidden) start();
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    start();

    return {
      destroy() {
        stop();
        themeObserver.disconnect();
        document.removeEventListener('mousemove', onPointerMove);
        document.removeEventListener('visibilitychange', onVisibilityChange);
        window.removeEventListener('resize', onResize);
        buffers.forEach((buffer) => {
          gl.deleteTexture(buffer.texture);
          gl.deleteFramebuffer(buffer.framebuffer);
        });
        gl.deleteBuffer(quadBuffer);
        gl.deleteProgram(simProgram);
        gl.deleteProgram(splashProgram);
        gl.deleteProgram(displayProgram);
        canvas.remove();
      },
      pause: stop,
      resume,
    };
  }

  let activeRipple = null;

  function mountFluidRipple() {
    if (!isFluidRippleEnabled()) {
      if (activeRipple) {
        activeRipple.destroy();
        activeRipple = null;
      }
      return;
    }

    if (activeRipple) return;
    activeRipple = createFluidRipple();
  }

  function bindEligibilityListeners() {
    const sync = () => mountFluidRipple();
    DESKTOP_MQ.addEventListener('change', sync);
    REDUCED_MOTION_MQ.addEventListener('change', sync);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      mountFluidRipple();
      bindEligibilityListeners();
    });
  } else {
    mountFluidRipple();
    bindEligibilityListeners();
  }
})();
