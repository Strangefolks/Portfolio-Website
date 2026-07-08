const projects = [
  {
    id: 'showreel',
    name: 'Showreel',
    tag: '2026',
    icon: 'showreel',
    category: 'Portfolio',
    summary:
      'Showreel gathers highlights from product, brand, and creative work into a single reel. Clips span med-tech interfaces, identity systems, and personal art — chosen to show range without flattening context. Each segment is a doorway into a fuller case study elsewhere in the portfolio. The reel is meant as orientation, not replacement, for the projects below.',
    metadata: [
      { label: 'Format', value: 'Video Reel' },
      { label: 'Scope', value: 'Product & Brand' },
      { label: 'Current Company', value: 'Personal' },
      { label: 'Role', value: 'Designer' },
      { label: 'Timeline', value: '2026' },
      { label: 'Duration', value: '3:24' },
    ],
    videoCaption:
      'Description: A curated sampling of product, brand, and art work from recent engagements.',
    videoUrl: 'assets/showreel.mp4',
  },
  {
    id: 'affera',
    number: '01',
    name: 'Affera',
    category: 'Med-Tech',
    tag: '3D Mapping Software',
    filter: 'product',
    description:
      'Software that creates a 3D map of the electrical activity in the heart. Used to treat atrial fibrillation.',
    summary:
      'Affera maps cardiac electrical signals into a navigable 3D model that guides ablation during atrial fibrillation procedures. The interface had to surface complex electrophysiology data without overwhelming clinicians in high-stakes cath lab environments. We iterated on viewport layouts, signal overlays, and annotation tools through shadowing and prototype testing with mapping specialists. The result is a workstation experience that supports precision therapy while keeping cognitive load manageable across long cases.',
    metadata: [
      { label: 'Industry', value: 'Electrophysiology' },
      { label: 'Technology', value: '3D Cardiac Mapping' },
      { label: 'Current Company', value: 'Affera [ Medtronic ]' },
      { label: 'Role', value: 'Lead Product Designer' },
      { label: 'Timeline', value: '2019–2023' },
      { label: 'Platform', value: 'Desktop Workstation' },
    ],
  },
  {
    id: 'surgeon-console',
    number: '02',
    name: 'Surgeon Console',
    category: 'Med-Tech',
    tag: 'Surgical Robotics UI',
    filter: 'product',
    locked: true,
    description:
      'Intuitive control interface for robotic-assisted surgical systems, enabling precision and reduced operator fatigue.',
    summary:
      'The Surgeon Console redesign focused on tactile clarity and spatial orientation for robotic instrument control. Haptic feedback cues and instrument state needed to feel immediate even when latency was unavoidable. We mapped surgeon workflows across setup, docking, and active procedure phases to prioritize the right controls at each moment. The final UI balances dense capability with a calm visual language that supports focus under pressure.',
    metadata: [
      { label: 'Industry', value: 'Medical Robotics' },
      { label: 'Technology', value: 'Haptic Feedback UI' },
      { label: 'Current Company', value: 'Intuitive Surgical' },
      { label: 'Role', value: 'Senior UX Designer' },
      { label: 'Timeline', value: '2020–2022' },
      { label: 'Team', value: '4 Designers, 8 Engineers' },
    ],
  },
  {
    id: 'boston-dynamics',
    number: '03',
    name: 'Boston Dynamics',
    category: 'Branding',
    filter: 'brand',
    description:
      'Brand identity and digital experience for next-generation mobile robotics platforms.',
    summary:
      'Boston Dynamics needed a brand system that could scale from research demos to enterprise product launches. We defined typography, motion principles, and photography direction that reflect mechanical precision without feeling cold. The digital experience translates robot capability into clear narratives for technical and non-technical audiences alike. The work establishes a visual language as agile as the platforms it represents.',
    metadata: [
      { label: 'Industry', value: 'Robotics' },
      { label: 'Technology', value: 'Autonomous Systems' },
      { label: 'Current Company', value: 'Boston Dynamics' },
      { label: 'Role', value: 'Brand Designer' },
      { label: 'Timeline', value: '2021' },
      { label: 'Deliverables', value: 'Brand System, Web' },
    ],
  },
  {
    id: 'third-pole',
    number: '04',
    name: 'Third Pole',
    category: 'Med-Tech',
    tag: 'Embedded Generator UI',
    filter: 'product',
    locked: true,
    description:
      'Cardiovascular therapeutic device platform with real-time monitoring and treatment delivery.',
    summary:
      'Third Pole pairs a therapeutic delivery system with live physiological monitoring in a single clinical workflow. The product UI had to communicate treatment progress, safety thresholds, and device status with zero ambiguity. We structured screens around the care team’s decision points rather than hardware subsystems alone. The platform reads as trustworthy and legible in environments where seconds and clarity both matter.',
    metadata: [
      { label: 'Industry', value: 'Cardiology' },
      { label: 'Technology', value: 'Therapeutic Devices' },
      { label: 'Current Company', value: 'Third Pole Therapeutics' },
      { label: 'Role', value: 'Product Designer' },
      { label: 'Timeline', value: '2022–Present' },
      { label: 'Status', value: 'FDA Submission' },
    ],
  },
  {
    id: 'voltalabs',
    number: '05',
    name: 'Voltalabs',
    category: 'Med-Tech',
    tag: 'DNA Sequencing UI',
    filter: 'product',
    description:
      'Electrophysiology mapping software for complex cardiac arrhythmia procedures.',
    summary:
      'Voltalabs software visualizes intracardiac signals to help electrophysiologists localize arrhythmia sources during ablation. Signal density and noise made default views easy to misread without careful visual encoding. Interaction patterns prioritize speed when switching between acquisition, review, and annotation modes. The interface aims for analytical depth without sacrificing the calm needed in procedure-long use.',
    metadata: [
      { label: 'Industry', value: 'Electrophysiology' },
      { label: 'Technology', value: 'Signal Processing' },
      { label: 'Current Company', value: 'Voltalabs' },
      { label: 'Role', value: 'UX Lead' },
      { label: 'Timeline', value: '2018–2021' },
      { label: 'Tools', value: 'Figma, Unity' },
    ],
  },
  {
    id: 'preform-cloud',
    number: '06',
    name: 'PreForm Cloud',
    category: 'Cloud Software',
    tag: 'Cloud Software',
    filter: 'product',
    description:
      'Cloud-based 3D printing preparation and fleet management platform for enterprise manufacturing.',
    summary:
      'PreForm Cloud brings print preparation, queue management, and fleet oversight into one browser-based workspace. Enterprise users needed to move between individual job tuning and multi-site production visibility without context switching. We designed dashboards, job detail flows, and permission-aware views for operators and administrators. The result supports distributed manufacturing teams with a cohesive, scalable SaaS experience.',
    metadata: [
      { label: 'Industry', value: 'Additive Manufacturing' },
      { label: 'Technology', value: 'Cloud SaaS' },
      { label: 'Current Company', value: 'Formlabs' },
      { label: 'Role', value: 'Product Designer' },
      { label: 'Platform', value: 'Web Application' },
      { label: 'Stack', value: 'React, Node.js' },
    ],
  },
  {
    id: 'sketchbook',
    number: '07',
    name: 'Sketchbook',
    category: 'Art',
    filter: 'art',
    icon: 'sketchbook',
    description:
      'Personal collection of exploratory sketches, concept art, and visual design experiments.',
    summary:
      'Sketchbook gathers informal studies that sit outside client deliverables but inform how I think about form and interface. Pages mix pen sketches, digital color explorations, and quick layout thumbnails from unrelated briefs. The collection tracks recurring themes: contrast, rhythm, and how small compositional choices change readability. Nothing here is polished for production; it is a working archive of visual curiosity.',
    metadata: [
      { label: 'Industry', value: 'Creative' },
      { label: 'Technology', value: 'Digital Illustration' },
      { label: 'Current Company', value: 'Personal' },
      { label: 'Role', value: 'Creator' },
      { label: 'Medium', value: 'Pen & Digital' },
      { label: 'Format', value: 'Personal Archive' },
    ],
  },
  {
    id: 'wash-cure-l',
    number: '08',
    name: 'Wash & Cure L',
    category: '3D Printing',
    tag: '3D Printer Embedded UI',
    filter: 'product',
    description:
      'Post-processing hardware interface for automated resin part washing and UV curing workflows.',
    summary:
      'Wash & Cure L guides operators through automated wash and cure cycles on a compact embedded touchscreen. Hardware constraints limited resolution and touch target size, so every screen had to earn its place. We simplified cycle selection, progress feedback, and error recovery into a linear, glanceable flow. The UI feels physical and direct—more appliance than application—matching the device’s benchtop role.',
    metadata: [
      { label: 'Industry', value: 'Additive Manufacturing' },
      { label: 'Technology', value: 'Hardware UI' },
      { label: 'Current Company', value: 'Formlabs' },
      { label: 'Role', value: 'Industrial Designer' },
      { label: 'Timeline', value: '2019–2020' },
      { label: 'Platform', value: 'Embedded Touchscreen' },
    ],
  },
  {
    id: 'form-auto',
    number: '09',
    name: 'Form Auto',
    category: '3D Printing',
    tag: 'Cloud Software',
    filter: 'product',
    description:
      'Automated print job scheduling and material management system for production 3D printing.',
    summary:
      'Form Auto orchestrates job scheduling, resin inventory, and printer utilization for production environments. Operators needed confidence that queued work would finish on time without babysitting individual machines. We mapped exception paths—material swaps, failed prints, maintenance windows—into clear status surfaces and recovery actions. Automation rules stay visible and editable so teams trust the system rather than override it constantly.',
    metadata: [
      { label: 'Industry', value: 'Additive Manufacturing' },
      { label: 'Technology', value: 'Automation' },
      { label: 'Current Company', value: 'Formlabs' },
      { label: 'Role', value: 'Product Designer' },
      { label: 'Timeline', value: '2021–2023' },
      { label: 'Team', value: '2 Designers, 6 Engineers' },
    ],
  },
  {
    id: 'brainboy-mdt',
    number: '10',
    name: 'BrainBox',
    category: 'Med-Tech',
    tag: 'MRI Annotation Software',
    filter: 'product',
    description:
      'Multi-disciplinary team collaboration platform for neurosurgical planning and case review.',
    summary:
      'BrainBox connects surgeons, radiologists, and planners around shared neurosurgical cases in the cloud. Case review demanded synchronized imaging, annotations, and discussion threads across web and tablet form factors. We structured permissions and presentation modes for live tumor boards versus async preparation. The platform reduces friction when distributed teams need one authoritative view of a complex plan.',
    metadata: [
      { label: 'Industry', value: 'Neurosurgery' },
      { label: 'Technology', value: 'Cloud Collaboration' },
      { label: 'Current Company', value: 'Brainlab' },
      { label: 'Role', value: 'UX Designer' },
      { label: 'Platform', value: 'Web & Tablet' },
      { label: 'Timeline', value: '2020–2022' },
    ],
  },
  {
    id: 'prism-mapping',
    number: '11',
    name: 'Prism Mapping',
    category: 'Cloud Software',
    filter: 'product',
    locked: true,
    description:
      'Real-time 3D electrical mapping interface for guiding catheter ablation during complex arrhythmia cases.',
    summary:
      'Prism Mapping renders live electrical data as a spatial model physicians navigate during catheter ablation. Latency and data density required careful layering so signal updates never obscured anatomical context. We prototyped viewport modes, catheter tracking overlays, and annotation shortcuts with electrophysiology teams in simulated cases. The experience targets confident navigation through some of the most cognitively demanding moments in the lab.',
    metadata: [
      { label: 'Industry', value: 'Electrophysiology' },
      { label: 'Technology', value: '3D Electrical Mapping' },
      { label: 'Current Company', value: 'Prism Medical' },
      { label: 'Role', value: 'Lead Product Designer' },
      { label: 'Timeline', value: '2021–2024' },
      { label: 'Status', value: 'Clinical Trial' },
    ],
  },
  {
    id: 'atlas-robotics',
    number: '12',
    name: 'Logofolio',
    category: 'Branding',
    tag: 'Graphic Design',
    filter: 'brand',
    icon: 'logofolio',
    description:
      'A catalog of logo and identity marks across med-tech, robotics, manufacturing, and consumer brands.',
    summary:
      'Logofolio indexes identity work as a systematic grid—one mark per tile with company, service, and industry context beneath each square. The layout treats every logo as an archive record: numbered, labeled, and easy to scan. It mirrors how identity systems are documented in brand guidelines—modular, precise, and built for reference rather than narrative.',
    metadata: [
      { label: 'Industry', value: 'Branding' },
      { label: 'Technology', value: 'Identity Design' },
      { label: 'Current Company', value: 'Personal Archive' },
      { label: 'Role', value: 'Brand Designer' },
      { label: 'Format', value: 'Logo Catalog' },
      { label: 'Count', value: '60 Marks' },
    ],
  },
  {
    id: 'pulse-cath',
    number: '14',
    name: 'Pulse Cath',
    category: 'Med-Tech',
    tag: 'Generator Embedded UI',
    filter: 'product',
    description:
      'Catheter lab workflow software for tracking device inventory and procedure milestones in real time.',
    summary:
      'Pulse Cath tracks device inventory, implant steps, and procedure milestones inside active cath lab workflows. Nurses and techs needed updates without leaving sterile field awareness or breaking scrub rhythm. We prioritized large-type milestones, scan-friendly inventory states, and minimal modal interruption. The software sits adjacent to high-stakes work—legible, fast, and difficult to misread in motion.',
    metadata: [
      { label: 'Industry', value: 'Interventional Cardiology' },
      { label: 'Technology', value: 'Clinical Workflow' },
      { label: 'Current Company', value: 'Medtronic' },
      { label: 'Role', value: 'Product Designer' },
      { label: 'Timeline', value: '2019–2022' },
      { label: 'Platform', value: 'Cath Lab Workstation' },
    ],
  },
  {
    id: 'fleet-cloud',
    number: '15',
    name: 'Fleet Cloud',
    category: 'Cloud Software',
    tag: '3D Printing Cloud Software',
    filter: 'product',
    description:
      'Enterprise dashboard for managing distributed 3D printer fleets across multiple production sites.',
    summary:
      'Fleet Cloud aggregates printer status, utilization, and job health across geographically distributed production sites. Administrators needed roll-up metrics with the ability to inspect a single machine in seconds. We designed alert triage, site comparison views, and maintenance scheduling that respect role-based access. The dashboard supports scale—many printers, many locations—without collapsing into unreadable noise.',
    metadata: [
      { label: 'Industry', value: 'Additive Manufacturing' },
      { label: 'Technology', value: 'Fleet Management' },
      { label: 'Current Company', value: 'Formlabs' },
      { label: 'Role', value: 'UX Lead' },
      { label: 'Platform', value: 'Web Dashboard' },
      { label: 'Team', value: '3 Designers, 12 Engineers' },
    ],
  },
  {
    id: 'terra-forms',
    number: '16',
    name: 'Oak & Spade',
    category: 'Branding',
    filter: 'brand',
    description:
      'Generative landscape studies exploring form, light, and material through digital sculpture.',
    summary:
      'Oak & Spade is a series of generative landscape studies built through procedural modeling and deliberate lighting choices. Each piece explores how surface texture and horizon line shift emotional weight without figurative subject matter. Color palettes move from mineral neutrals to saturated atmospheric gradients across the set. Twelve studies document incremental experiments in composition rather than a single finished narrative.',
    metadata: [
      { label: 'Industry', value: 'Creative' },
      { label: 'Technology', value: 'Generative Art' },
      { label: 'Current Company', value: 'Personal' },
      { label: 'Role', value: 'Creator' },
      { label: 'Medium', value: '3D Rendering' },
      { label: 'Series', value: '12 Studies' },
    ],
  },
  {
    id: 'surgical-view',
    number: '18',
    name: 'Surgical View',
    category: 'Cloud Software',
    filter: 'product',
    description:
      'Immersive visualization system for robotic surgery with multi-angle camera feeds and instrument tracking.',
    summary:
      'Surgical View unifies multi-angle camera feeds and instrument tracking into an OR display optimized for robotic cases. Surgeons shift gaze constantly; the layout had to preserve spatial relationships between views without visual competition. We tested picture-in-picture hierarchies, edge enhancement, and latency indicators with clinical advisors. The system supports immersion in the operative field while keeping critical instrument state always readable.',
    metadata: [
      { label: 'Industry', value: 'Medical Robotics' },
      { label: 'Technology', value: 'Surgical Visualization' },
      { label: 'Current Company', value: 'Intuitive Surgical' },
      { label: 'Role', value: 'Senior UX Designer' },
      { label: 'Platform', value: 'OR Display System' },
      { label: 'Team', value: '5 Designers, 15 Engineers' },
    ],
  },
  {
    id: 'field-notes',
    number: '20',
    name: 'North Fence',
    category: 'Branding',
    filter: 'brand',
    description:
      'Visual diary of industrial design observations, material studies, and interface sketch explorations.',
    summary:
      'North Fence collects on-site sketches and material observations from factory visits, transit, and everyday objects. Pages mix quick perspective drawings with notes on joinery, texture, and affordance. Several spreads explore how physical controls suggest digital interaction patterns worth borrowing. It documents how industrial context shapes my product thinking over time.',
    metadata: [
      { label: 'Industry', value: 'Creative' },
      { label: 'Technology', value: 'Industrial Sketching' },
      { label: 'Current Company', value: 'Personal' },
      { label: 'Role', value: 'Creator' },
      { label: 'Medium', value: 'Pen & Ink' },
      { label: 'Format', value: 'Sketch Journal' },
    ],
  },
  {
    id: 'photography',
    number: '21',
    name: 'Photo',
    category: 'Art',
    tag: 'Art',
    filter: 'art',
    description:
      'Personal photography exploring light, composition, and everyday scenes across film and digital formats.',
    summary:
      'This photography series tracks how light and framing change ordinary scenes across film and digital capture. I alternate between slow film stocks and digital workflows to compare grain, color response, and cropping discipline. Subjects are mostly urban and domestic—windows, sidewalks, incidental geometry—rather than staged portraits. The work stays personal and ongoing, parallel to client-facing design practice.',
    metadata: [
      { label: 'Industry', value: 'Creative' },
      { label: 'Technology', value: 'Photo' },
      { label: 'Current Company', value: 'Personal' },
      { label: 'Role', value: 'Creator' },
      { label: 'Medium', value: 'Film & Digital' },
      { label: 'Format', value: 'Ongoing Series' },
    ],
  },
  {
    id: 'king',
    number: '22',
    name: 'King',
    category: 'Art',
    tag: 'Designer Toy',
    filter: 'art',
    description:
      'Visual study blending portraiture, symbolism, and graphic composition into a single narrative image.',
    summary:
      'King is a single-image study combining portraiture, symbolic objects, and graphic framing into one narrative composition. Color blocking and figure-ground relationships were pushed deliberately toward poster-like clarity. Symbolic elements were chosen to collide rather than harmonize, forcing a second read of the scene. It sits apart from product work—pure visual authorship and compositional risk.',
    metadata: [
      { label: 'Industry', value: 'Creative' },
      { label: 'Technology', value: 'Digital Art' },
      { label: 'Current Company', value: 'Personal' },
      { label: 'Role', value: 'Creator' },
      { label: 'Medium', value: 'Mixed Media' },
      { label: 'Timeline', value: '2022' },
    ],
  },
  {
    id: 'bcn-01',
    number: '23',
    name: 'BCN-01',
    category: 'Art',
    tag: 'Book Design',
    filter: 'art',
    description:
      'Barcelona street and architecture series capturing texture, color, and urban rhythm in the city.',
    summary:
      'BCN-01 documents Barcelona street facades, tile work, and pedestrian rhythm through a cohesive color study. Shots favor texture and repeating geometry over landmark tourism framing. Warm Mediterranean light and shadow patterns become the through-line across neighborhoods and scales. It is travel photography filtered through a designer’s eye for pattern and palette.',
    metadata: [
      { label: 'Industry', value: 'Creative' },
      { label: 'Technology', value: 'Photo' },
      { label: 'Current Company', value: 'Personal' },
      { label: 'Role', value: 'Creator' },
      { label: 'Medium', value: 'Street Photo' },
      { label: 'Timeline', value: '2023' },
    ],
  },
];

const lockIcon = `<svg class="project-item-lock-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.2" aria-hidden="true">
  <rect x="3.75" y="7" width="8.5" height="6.25" rx="1"/>
  <path d="M5.5 7V5.25a3 3 0 0 1 6 0V7" stroke-linecap="round"/>
</svg>`;

const infoIcon = `<svg class="project-item-info-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.2" aria-hidden="true">
  <circle cx="8" cy="8" r="6.25"/>
  <path d="M8 7.25V11" stroke-linecap="round"/>
  <circle cx="8" cy="5.15" r="0.65" fill="currentColor" stroke="none"/>
</svg>`;

const heroPlaceholderIcon = `<svg class="hero-placeholder-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
  <rect x="3" y="3" width="18" height="18" rx="2"/>
  <circle cx="8.5" cy="8.5" r="1.5"/>
  <path d="M21 15l-5-5L5 21"/>
</svg>`;

const logofolioHeroPlaceholderIcon = `<svg class="hero-placeholder-icon logofolio-hero__icon" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
  <rect x="10" y="12" width="14" height="14" rx="2"/>
  <rect x="28" y="12" width="14" height="14" rx="2"/>
  <rect x="46" y="12" width="8" height="14" rx="2"/>
  <rect x="10" y="34" width="14" height="14" rx="2"/>
  <rect x="28" y="34" width="14" height="14" rx="2"/>
  <rect x="46" y="34" width="8" height="14" rx="2"/>
</svg>`;

function renderHeroPanelContent(image, project, index, { revealOnScroll = false, eagerLoad = false } = {}) {
  if (image?.src) {
    return `<img
          src="${image.src}"
          alt="${image.alt || `${project.name} — gallery image ${index + 1}`}"
          width="1200"
          height="577"
          loading="${eagerLoad ? 'eager' : 'lazy'}"
          decoding="async"
        />`;
  }

  const label = image?.alt || `${project.name} — gallery image ${index + 1}`;
  const revealClass = revealOnScroll ? ' is-scroll-reveal-pending' : '';
  return `<div class="hero-placeholder${revealClass}" role="img" aria-label="${label}">${heroPlaceholderIcon}</div>`;
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function formatProjectSummaryLead(summary) {
  if (!summary) return '';
  const trimmed = summary.trim();
  const hasTrailingPeriod = trimmed.endsWith('.');
  const textWithoutPeriod = hasTrailingPeriod ? trimmed.slice(0, -1) : trimmed;
  const words = escapeHtml(textWithoutPeriod).trim().split(/\s+/).filter(Boolean);
  if (words.length === 0) {
    return hasTrailingPeriod ? '<span class="summary-period">.</span>' : '';
  }
  const lead = words.slice(0, Math.min(3, words.length)).join(' ');
  const rest = words.slice(3).join(' ');
  const period = hasTrailingPeriod ? '<span class="summary-period">.</span>' : '';
  if (!rest) return `<span class="text-strong summary-lead">${lead}</span>${period}`;
  return `<span class="text-strong summary-lead">${lead}</span> ${rest}${period}`;
}

function getProjectInfoText(project) {
  if (project.info?.text) return project.info.text;

  const lead = project.description ?? project.summary ?? '';
  if (!lead) return '';

  return `${lead} The ${project.name} engagement focused on clarity and reducing cognitive load for expert users. Research and iteration shaped the layout into a calm, dependable interface.`;
}

function getProjectInfoImage(project) {
  if (project.info?.image) {
    const image = project.info.image;
    return typeof image === 'string' ? { src: image, alt: project.name } : image;
  }

  return { alt: `${project.name} — project preview` };
}

const folderIcons = {
  outline: `<img class="project-item-icon icon-outline" src="assets/folder-static.svg" alt="" width="27" height="21" decoding="async" aria-hidden="true" />`,
  closed: `<img class="project-item-icon icon-closed" src="assets/folder-hovered.svg" alt="" width="28" height="21" decoding="async" aria-hidden="true" />`,
  open: `<img class="project-item-icon icon-open" src="assets/folder-selected.svg" alt="" width="28" height="21" decoding="async" aria-hidden="true" />`,
};

const sketchbookIcons = {
  outline: `<img class="project-item-icon icon-outline" src="assets/sketchbook.svg" alt="" width="26" height="26" decoding="async" aria-hidden="true" />`,
  closed: `<img class="project-item-icon icon-closed" src="assets/sketchbook.svg" alt="" width="26" height="26" decoding="async" aria-hidden="true" />`,
  open: `<img class="project-item-icon icon-open" src="assets/sketchbook.svg" alt="" width="26" height="26" decoding="async" aria-hidden="true" />`,
};

const showreelIconSvg = `<svg class="project-item-icon showreel-item-icon" viewBox="0 0 30 19" fill="none" aria-hidden="true">
  <g class="showreel-icon-body">
    <path d="M20.5835 10.6667L27.9827 15.5996C28.0894 15.6705 28.2133 15.7113 28.3413 15.7174C28.4693 15.7235 28.5965 15.6948 28.7095 15.6343C28.8225 15.5738 28.9169 15.4839 28.9828 15.374C29.0486 15.2641 29.0834 15.1383 29.0835 15.0102V3.39922C29.0835 3.27458 29.0507 3.15215 28.9883 3.04427C28.9258 2.93639 28.8361 2.84689 28.728 2.78481C28.6199 2.72272 28.4974 2.69025 28.3728 2.69068C28.2481 2.6911 28.1258 2.7244 28.0182 2.78722L20.5835 7.12505" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M17.75 0.75H3.58333C2.01853 0.75 0.75 2.01853 0.75 3.58333V14.9167C0.75 16.4815 2.01853 17.75 3.58333 17.75H17.75C19.3148 17.75 20.5833 16.4815 20.5833 14.9167V3.58333C20.5833 2.01853 19.3148 0.75 17.75 0.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <g class="showreel-icon-reel">
    <g transform="translate(10.5164 9.2044)">
      <g class="showreel-icon-reel-rotator">
        <circle cx="0" cy="-4.0598" r="1.06864" fill="currentColor"/>
        <circle cx="0" cy="4.0598" r="1.06864" fill="currentColor"/>
        <circle cx="4.0601" cy="0" r="1.06864" fill="currentColor"/>
        <circle cx="-4.0596" cy="0" r="1.06864" fill="currentColor"/>
        <circle cx="0" cy="0" r="1.7199" stroke="currentColor" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="0" cy="0" r="6.59131" stroke="currentColor" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
    </g>
  </g>
</svg>`;

const showreelIcons = {
  outline: showreelIconSvg,
  closed: showreelIconSvg,
  open: showreelIconSvg,
};

function getProjectIcons(project) {
  if (project.icon === 'sketchbook') return sketchbookIcons;
  if (project.icon === 'showreel') return showreelIcons;
  return folderIcons;
}

const PROJECT_LOCK_PASSWORD = 'tedp';

const unlockedProjects = new Set(
  JSON.parse(sessionStorage.getItem('unlocked-projects') || '[]')
);

function saveUnlockedProjects() {
  sessionStorage.setItem('unlocked-projects', JSON.stringify([...unlockedProjects]));
}

function isProjectUnlocked(project) {
  return !project.locked || unlockedProjects.has(project.id);
}

function unlockProject(projectId) {
  unlockedProjects.add(projectId);
  saveUnlockedProjects();
}
let activeFilter = 'all';
let selectedId = 'showreel';

const projectListEl = document.getElementById('project-list');
const projectNumberEl = document.getElementById('project-number');
const projectNumberStickyEl = document.getElementById('project-number-sticky');
const projectTitleEl = document.getElementById('project-title');
const projectDescEl = document.getElementById('project-desc');
const projectSummaryEl = document.getElementById('project-summary');
const metadataRowEl = document.getElementById('metadata-row');
const metadataRowCompactEl = document.getElementById('metadata-row-compact');
const projectLockGateEl = document.getElementById('project-lock-gate');
const projectLockPasswordEl = document.getElementById('project-lock-password');
const projectLockSubmitEl = document.getElementById('project-lock-submit');
const projectLockErrorEl = document.getElementById('project-lock-error');
const projectIntroEl = document.querySelector('.project-intro');
const stickyHeaderHostEl = document.getElementById('sticky-header-host');
const stickyHeaderEl = document.getElementById('sticky-header');
const sidebarEl = document.querySelector('.sidebar');
const sidebarFiltersEl = document.querySelector('.sidebar .filters');
const projectTitleStickyEl = document.getElementById('project-title-sticky');
const mainContentEl = document.getElementById('main-content');
const filterButtons = document.querySelectorAll('.filter-pill');

let projectIntroLastScrollTop = 0;
let mobileChromeLastScrollTop = 0;
let layoutResizeTimer;
let layoutResizeSyncBound = false;

function scheduleLayoutResizeSync() {
  window.clearTimeout(layoutResizeTimer);
  layoutResizeTimer = window.setTimeout(() => {
    populateFooterMarquee();
    syncProjectIntroStickyFromScroll();
  }, 120);
}

function bindLayoutResizeSync() {
  if (layoutResizeSyncBound) return;

  layoutResizeSyncBound = true;
  window.addEventListener('resize', scheduleLayoutResizeSync);
}
let projectIntroStickyVisible = false;
let mobileChromeHidden = false;

const MOBILE_CHROME_SCROLL_THRESHOLD = 8;
const PROJECT_LIST_TAP_MOVE_THRESHOLD = 10;
let stickyHeaderAlignResizeObserver;

const PROJECT_INTRO_STICKY_ENTER_OFFSET = 1;
const STICKY_HEADER_HEIGHT_OFFSET = 27;
const STICKY_HEADER_MOBILE_HEIGHT_OFFSET = 0;
const PROJECT_TITLE_FIT_MIN = 12;
const PROJECT_SUBHEAD_MOBILE_MQ = window.matchMedia('(max-width: 560px)');

let projectTitleLastFitWidth = -1;
let projectTitleLastFitName = '';
let projectTitleFitGeneration = 0;

function getProjectSubheadFitMode() {
  return PROJECT_SUBHEAD_MOBILE_MQ.matches ? 'mobile' : 'desktop';
}

function getProjectTitleFitWidth() {
  const titleBlock = projectTitleEl?.closest('.title-block');
  const titleBlockWidth = titleBlock?.clientWidth ?? 0;
  if (titleBlockWidth > 0) return titleBlockWidth;

  if (getProjectSubheadFitMode() === 'mobile' && mainContentEl) {
    return mainContentEl.clientWidth;
  }

  return 0;
}

function getProjectTitleName(el = projectTitleEl) {
  return el?.dataset.titleSource?.trim() || el?.textContent.trim() || '';
}

function renderProjectTitle(el, name) {
  if (!el) return;

  const text = name.trim();
  el.dataset.titleSource = text;
  el.classList.add('project-title--interactive');
  el.setAttribute('aria-label', text);
  el.replaceChildren();

  if (!text) return;

  [...text].forEach((char, index) => {
    const span = document.createElement('span');
    span.className = 'project-title-char';
    span.setAttribute('aria-hidden', 'true');
    span.dataset.charIndex = String(index);
    span.textContent = char === ' ' ? '\u00a0' : char;
    el.appendChild(span);
  });
}

function measureProjectTitleWidth(title, fontSizePx) {
  title.style.maxWidth = 'none';
  title.style.fontSize = `${fontSizePx}px`;
  return title.getBoundingClientRect().width;
}

function normalizeProjectSubheadText(text) {
  return (text ?? '').trim().replace(/\s+/g, ' ');
}

function getProjectSubheadSourceText(el) {
  if (!el) return '';
  return (
    normalizeProjectSubheadText(el.dataset.subheadSource) ||
    normalizeProjectSubheadText(el.textContent)
  );
}

function renderProjectSubhead(el, text) {
  if (!el) return;

  const normalized = normalizeProjectSubheadText(text);
  el.dataset.subheadSource = normalized;
  el.replaceChildren();
  el.hidden = !normalized;

  if (!normalized) return;

  const inner = document.createElement('span');
  inner.className = 'project-desc-line__text';
  inner.textContent = normalized;
  el.appendChild(inner);
}

function ensureProjectSubheadRendered(el, text) {
  const normalized = normalizeProjectSubheadText(text);
  const needsRender =
    !el.querySelector('.project-desc-line__text') ||
    el.dataset.subheadSource !== normalized;

  if (needsRender) {
    renderProjectSubhead(el, normalized);
  }
}

function resetProjectIntroSubheadSize() {
  if (!projectDescEl) return;

  const sourceText = getProjectSubheadSourceText(projectDescEl);
  if (!sourceText) return;

  ensureProjectSubheadRendered(projectDescEl, sourceText);
  projectDescEl.style.removeProperty('font-size');
  projectDescEl.style.removeProperty('width');
  projectDescEl.style.removeProperty('max-width');
}

function fitProjectIntroSubhead() {
  resetProjectIntroSubheadSize();
}

function fitProjectIntroTitle({ force = false } = {}) {
  if (!projectTitleEl) return;

  const generation = ++projectTitleFitGeneration;
  const availableWidth = Math.round(getProjectTitleFitWidth());
  const name = getProjectTitleName();
  if (availableWidth <= 0 || !name) return;
  if (!force && availableWidth === projectTitleLastFitWidth && name === projectTitleLastFitName) return;

  const title = projectTitleEl;
  let min = PROJECT_TITLE_FIT_MIN;
  let max = Math.max(PROJECT_TITLE_FIT_MIN, availableWidth);
  let best = min;

  while (min <= max) {
    if (generation !== projectTitleFitGeneration) return;

    const mid = Math.floor((min + max) / 2);
    const width = measureProjectTitleWidth(title, mid);
    if (Math.ceil(width) <= availableWidth) {
      best = mid;
      min = mid + 1;
    } else {
      max = mid - 1;
    }
  }

  if (generation !== projectTitleFitGeneration) return;

  let fittedSize = best;
  while (
    fittedSize > PROJECT_TITLE_FIT_MIN &&
    Math.ceil(measureProjectTitleWidth(title, fittedSize)) > availableWidth
  ) {
    fittedSize -= 1;
  }

  if (generation !== projectTitleFitGeneration) return;

  title.style.fontSize = `${fittedSize}px`;
  title.style.maxWidth = 'none';
  projectTitleLastFitWidth = availableWidth;
  projectTitleLastFitName = name;
}

let projectTitleFitObserver;
let projectTitleFitObservedWidth = -1;

function scheduleProjectTitleFit({ force = false } = {}) {
  requestAnimationFrame(() => {
    fitProjectIntroTitle({ force });
    fitProjectIntroSubhead();
  });
}

function refitProjectIntroTitle() {
  projectTitleLastFitWidth = -1;
  projectTitleLastFitName = '';
  projectTitleFitGeneration += 1;
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      fitProjectIntroTitle({ force: true });
      fitProjectIntroSubhead();
    });
  });
}

function initProjectTitleRipple() {
  if (!projectTitleEl || projectTitleEl.dataset.rippleInit === 'true') return;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (reducedMotion.matches) return;

  projectTitleEl.dataset.rippleInit = 'true';

  let rippleRaf = 0;

  const getTitleChars = () => projectTitleEl.querySelectorAll('.project-title-char');

  const resetTitleChars = () => {
    getTitleChars().forEach((char) => {
      char.style.transform = '';
    });
  };

  const applyTitleRipple = (clientX, clientY) => {
    const chars = getTitleChars();
    if (!chars.length) return;

    let nearestIndex = 0;
    let nearestDist = Infinity;

    chars.forEach((char, index) => {
      const rect = char.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const dist = Math.hypot(clientX - centerX, clientY - (rect.top + rect.height / 2));
      if (dist < nearestDist) {
        nearestDist = dist;
        nearestIndex = index;
      }
    });

    chars.forEach((char, index) => {
      const rect = char.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dist = Math.hypot(clientX - centerX, clientY - centerY);
      const influence = Math.max(0, 1 - dist / 110);
      const wave = Math.sin((index - nearestIndex) * 0.85 + dist * 0.035) * influence;
      const lift = wave * 3.5;
      const scale = 1 + influence * 0.035;

      char.style.transform = `translate3d(0, ${lift.toFixed(2)}px, 0) scale(${scale.toFixed(4)})`;
    });
  };

  projectTitleEl.addEventListener('mousemove', (event) => {
    cancelAnimationFrame(rippleRaf);
    rippleRaf = requestAnimationFrame(() => {
      applyTitleRipple(event.clientX, event.clientY);
    });
  });

  projectTitleEl.addEventListener('mouseleave', () => {
    cancelAnimationFrame(rippleRaf);
    resetTitleChars();
  });
}

function initProjectTitleFit() {
  if (!projectTitleEl.querySelector('.project-title-char')) {
    renderProjectTitle(projectTitleEl, getProjectTitleName());
  }

  initProjectTitleRipple();
  fitProjectIntroTitle({ force: true });
  fitProjectIntroSubhead();

  const fitWidthSource = projectIntroEl || mainContentEl;
  if (fitWidthSource && typeof ResizeObserver !== 'undefined') {
    projectTitleFitObserver = new ResizeObserver((entries) => {
      let widthChanged = false;

      for (const entry of entries) {
        const width = Math.round(entry.contentRect.width);
        if (width <= 0) continue;
        if (width !== projectTitleFitObservedWidth) {
          projectTitleFitObservedWidth = width;
          widthChanged = true;
        }
      }

      if (widthChanged) scheduleProjectTitleFit();
    });
    projectTitleFitObserver.observe(fitWidthSource);
  }

  registerViewportSync(() => scheduleProjectTitleFit());

  const handleSubheadMobileMqChange = () => {
    scheduleProjectTitleFit({ force: true });
  };

  if (typeof PROJECT_SUBHEAD_MOBILE_MQ.addEventListener === 'function') {
    PROJECT_SUBHEAD_MOBILE_MQ.addEventListener('change', handleSubheadMobileMqChange);
  } else if (typeof PROJECT_SUBHEAD_MOBILE_MQ.addListener === 'function') {
    PROJECT_SUBHEAD_MOBILE_MQ.addListener(handleSubheadMobileMqChange);
  }

  const runForcedFit = () => {
    fitProjectIntroTitle({ force: true });
    fitProjectIntroSubhead();
  };
  const titleLoad = document.fonts?.load?.('700 16px Barlow');
  const subheadLoad = document.fonts?.load?.('500 16px Barlow');
  if (titleLoad) {
    titleLoad.then(runForcedFit).catch(runForcedFit);
  }
  if (subheadLoad) {
    subheadLoad.then(runForcedFit).catch(runForcedFit);
  }
  if (document.fonts?.ready) {
    document.fonts.ready.then(runForcedFit);
  }
}

function getStickyHeaderHeightOffset() {
  return isSidebarMobileDropdown() ? STICKY_HEADER_MOBILE_HEIGHT_OFFSET : STICKY_HEADER_HEIGHT_OFFSET;
}

function measureSidebarHeaderSourceHeight() {
  if (!sidebarEl) return null;

  if (isSidebarMobileDropdown() && sidebarHeader) {
    if (isSidebarCollapsed()) {
      return 0;
    }

    const height = Math.round(sidebarHeader.getBoundingClientRect().height);
    return height > 0 ? height : null;
  }

  if (!sidebarFiltersEl) return null;

  const height = Math.round(
    sidebarFiltersEl.getBoundingClientRect().bottom - sidebarEl.getBoundingClientRect().top
  );

  return height > 0 ? height : null;
}

function applyStickyHeaderAlignHeight(sourceHeight) {
  document.documentElement.style.setProperty(
    '--sticky-header-align-height',
    `${Math.max(0, sourceHeight - getStickyHeaderHeightOffset())}px`
  );
}

function getStickyHeaderFixedHeight() {
  return (
    getComputedStyle(document.documentElement).getPropertyValue('--sticky-header-fixed-height').trim()
    || '54px'
  );
}

function syncStickyHeaderAlignHeight() {
  if (!sidebarEl) return;

  if (isSidebarMobileDropdown()) {
    /* Collapsed mobile project view: use fixed single-row chrome (sidebar header is hidden) */
    if (isSidebarCollapsed()) {
      document.documentElement.style.setProperty('--sticky-header-align-height', getStickyHeaderFixedHeight());
      return;
    }

    if (sidebarHeader) {
      const height = measureSidebarHeaderSourceHeight();
      if (height != null) {
        applyStickyHeaderAlignHeight(height);
      }
    }
    return;
  }

  /* Desktop/tablet: fixed height from CSS — do not mirror sidebar filter height */
  document.documentElement.style.setProperty('--sticky-header-align-height', getStickyHeaderFixedHeight());
}

function initStickyHeaderAlignHeightSync() {
  syncStickyHeaderAlignHeight();

  if (typeof ResizeObserver !== 'undefined') {
    stickyHeaderAlignResizeObserver = new ResizeObserver(() => syncStickyHeaderAlignHeight());
    if (sidebarEl) stickyHeaderAlignResizeObserver.observe(sidebarEl);
    if (sidebarFiltersEl) stickyHeaderAlignResizeObserver.observe(sidebarFiltersEl);
    if (sidebarHeader) stickyHeaderAlignResizeObserver.observe(sidebarHeader);
    if (metadataRowCompactEl) stickyHeaderAlignResizeObserver.observe(metadataRowCompactEl);
  }

  registerViewportSync(syncStickyHeaderAlignHeight);
  if (document.fonts?.ready) {
    document.fonts.ready.then(syncStickyHeaderAlignHeight);
  }
}

function isMobilePanelChromeActive() {
  return (
    sidebarMobilePanelAnimating
    || document.body.classList.contains('sidebar-mobile-panel-expanded')
    || document.body.classList.contains('sidebar-mobile-panel-opening')
    || document.body.classList.contains('sidebar-mobile-panel-closing')
  );
}

function isMobileChromeHideEnabled() {
  if (!isSidebarMobileDropdown() || !isSidebarCollapsed()) return false;
  if (isMobilePanelChromeActive()) return false;
  if (!document.body.classList.contains('is-bottom-banner-hidden')) return false;

  return true;
}

function setMobileChromeHidden(hidden) {
  if (mobileChromeHidden === hidden) return;

  mobileChromeHidden = hidden;
  document.body.classList.toggle('is-mobile-chrome-hidden', hidden);

  requestAnimationFrame(() => {
    syncProjectIntroStickyFromScroll();
    syncStickyHeaderAlignHeight();
  });
}

function syncMobileChromeHiddenFromScroll() {
  if (!mainContentEl) return;

  if (!isMobileChromeHideEnabled()) {
    if (mobileChromeHidden) setMobileChromeHidden(false);
    mobileChromeLastScrollTop = mainContentEl.scrollTop;
    return;
  }

  const scrollTop = mainContentEl.scrollTop;
  const delta = scrollTop - mobileChromeLastScrollTop;

  if (scrollTop <= 0) {
    setMobileChromeHidden(false);
  } else if (delta < -MOBILE_CHROME_SCROLL_THRESHOLD) {
    setMobileChromeHidden(false);
  } else if (delta > MOBILE_CHROME_SCROLL_THRESHOLD) {
    setMobileChromeHidden(true);
  }

  mobileChromeLastScrollTop = scrollTop;
}

function onMainContentScroll() {
  if (!mainContentEl) return;

  projectIntroLastScrollTop = mainContentEl.scrollTop;
  syncMobileChromeHiddenFromScroll();
  syncProjectIntroStickyFromScroll();
}

function getMainScrollportTop() {
  return mainContentEl?.getBoundingClientRect().top ?? 0;
}

function isProjectIntroBottomAboveScrollport() {
  if (!mainContentEl || !projectIntroEl || projectIntroEl.hidden) return false;

  const scrollportTop = getMainScrollportTop();
  const introBottom = projectIntroEl.getBoundingClientRect().bottom;
  return introBottom <= scrollportTop + PROJECT_INTRO_STICKY_ENTER_OFFSET;
}

function syncProjectIntroStickyFromScroll() {
  if (!mainContentEl || !stickyHeaderHostEl || stickyHeaderHostEl.hidden) return;

  const project = projects.find((p) => p.id === selectedId);
  if (isSketchbookProject(project)) return;

  const shouldShow = isProjectIntroBottomAboveScrollport();
  setProjectIntroStickyVisible(shouldShow);
}

function setProjectIntroStickyVisible(isVisible, { instant = false } = {}) {
  if (!stickyHeaderHostEl || !stickyHeaderEl) return;
  if (projectIntroStickyVisible === isVisible) return;

  projectIntroStickyVisible = isVisible;

  stickyHeaderHostEl.classList.toggle('sticky-header-host--active', isVisible);
  stickyHeaderEl.classList.toggle('sticky-header--visible', isVisible);
  stickyHeaderHostEl.setAttribute('aria-hidden', isVisible ? 'false' : 'true');

  if (instant) {
    stickyHeaderEl.classList.toggle('sticky-header--instant', true);
    requestAnimationFrame(() => {
      stickyHeaderEl?.classList.remove('sticky-header--instant');
    });
  }
}

function resetProjectIntroScroll() {
  setProjectIntroStickyVisible(false, { instant: true });
  setMobileChromeHidden(false);
  if (mainContentEl) {
    mainContentEl.scrollTop = 0;
    projectIntroLastScrollTop = 0;
    mobileChromeLastScrollTop = 0;
  }
  requestAnimationFrame(() => syncProjectIntroStickyFromScroll());
}

function initProjectIntroScroll() {
  if (!mainContentEl || !projectIntroEl || !stickyHeaderHostEl) return;

  projectIntroLastScrollTop = mainContentEl.scrollTop;
  mobileChromeLastScrollTop = mainContentEl.scrollTop;
  mainContentEl.addEventListener('scroll', onMainContentScroll, { passive: true });
  bindLayoutResizeSync();
  syncProjectIntroStickyFromScroll();
}

function isSketchbookProject(project) {
  return project?.icon === 'sketchbook' || project?.id === 'sketchbook';
}

function isLogofolioProject(project) {
  return project?.icon === 'logofolio' || project?.id === 'atlas-robotics';
}

function isShowreelProject(project) {
  return project?.icon === 'showreel' || project?.id === 'showreel';
}

function isSpecialGalleryProject(project) {
  return isSketchbookProject(project) || isLogofolioProject(project);
}

function shouldShowThemeCards(project) {
  return !isSketchbookProject(project) && !isLogofolioProject(project) && !isShowreelProject(project);
}

function syncSpecialGalleryChrome(project) {
  const sketchbook = isSketchbookProject(project);
  const logofolio = isLogofolioProject(project);
  const showreel = isShowreelProject(project);

  mainContentEl?.classList.toggle('is-sketchbook-project', sketchbook);
  mainContentEl?.classList.toggle('is-logofolio-project', logofolio);
  mainContentEl?.classList.toggle('is-showreel-project', showreel);
  stickyHeaderEl?.classList.toggle('sticky-header--logofolio', logofolio);

  if (stickyHeaderHostEl) {
    stickyHeaderHostEl.hidden = sketchbook;

    if (sketchbook) {
      setProjectIntroStickyVisible(false, { instant: true });
    } else if (logofolio) {
      syncLogofolioColorModeChrome();
      requestAnimationFrame(() => syncProjectIntroStickyFromScroll());
    } else if (showreel) {
      requestAnimationFrame(() => syncProjectIntroStickyFromScroll());
    } else {
      mainContentEl?.classList.remove('is-logofolio-mono', 'is-logofolio-color');
      mainContentEl?.removeAttribute('data-logofolio-color-mode');
    }
  }
}

function syncProjectIntroStickyContent(project) {
  if (!project) return;

  if (projectTitleStickyEl) projectTitleStickyEl.textContent = project.name;
}

function sortProjectsAlphabetically(list) {
  return [...list].sort((a, b) =>
    a.name.localeCompare(b.name, undefined, { sensitivity: 'base' })
  );
}

function projectMatchesFilter(project, filter) {
  if (isShowreelProject(project)) {
    return filter === 'all';
  }
  if (filter === 'product') {
    return project.category === 'Med-Tech' || project.category === 'Cloud Software';
  }
  if (filter === 'brand') {
    return project.category === 'Branding';
  }
  if (filter === 'art') {
    return project.category === 'Art';
  }
  return true;
}

function getFilteredProjects() {
  const filtered =
    activeFilter === 'all'
      ? projects
      : projects.filter((project) => projectMatchesFilter(project, activeFilter));

  const sorted = sortProjectsAlphabetically(filtered);

  if (activeFilter === 'all') {
    const showreelIndex = sorted.findIndex((project) => project.id === 'showreel');
    if (showreelIndex > 0) {
      const [showreelProject] = sorted.splice(showreelIndex, 1);
      sorted.unshift(showreelProject);
    }
  }

  return sorted;
}

function formatProjectDisplayNumber(index) {
  return String(index + 1).padStart(2, '0');
}

function getProjectDisplayNumber(projectId) {
  const index = getFilteredProjects().findIndex((project) => project.id === projectId);
  if (index === -1) return '01';
  return formatProjectDisplayNumber(index);
}

function syncProjectNumberDisplay(projectId = selectedId) {
  const displayNumber = getProjectDisplayNumber(projectId);
  if (projectNumberEl) projectNumberEl.textContent = displayNumber;
  if (projectNumberStickyEl) projectNumberStickyEl.textContent = displayNumber;
}

function getProjectListLabel(project) {
  return project.tag ?? project.category;
}

function isTouchProjectListUi() {
  return window.matchMedia('(hover: none), (pointer: coarse)').matches;
}

const showreelListPlayIcon = `<svg class="showreel-list-preview__play-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
  <path d="M8 5V19L19 12L8 5Z" fill="currentColor"/>
</svg>`;

function renderShowreelListItem(project, isActive) {
  return `
    <div class="project-item project-item--showreel${isActive ? ' active' : ''}" data-id="${project.id}" role="button" tabindex="${isTouchProjectListUi() ? '-1' : '0'}">
      <span class="showreel-list-label">
        ${showreelIconSvg}
        <span class="text-list project-item-name">${project.name}</span>
      </span>
      <span class="showreel-list-preview" aria-hidden="true">
        ${showreelListPlayIcon}
      </span>
    </div>
  `;
}

function renderProjectListItem(project) {
  const isActive = project.id === selectedId;
  if (project.icon === 'showreel') {
    return renderShowreelListItem(project, isActive);
  }

  const icons = getProjectIcons(project);
  const categoryMarkup = isActive
    ? '<img class="project-item-starburst" src="assets/sunburst.svg" alt="" width="19" height="19" decoding="async" aria-hidden="true" />'
    : `<span class="text-list project-item-category">${getProjectListLabel(project)}</span>`;

  return `
    <div class="project-item${isActive ? ' active' : ''}${project.icon === 'sketchbook' ? ' project-item--sketchbook' : ''}${project.icon === 'showreel' ? ' project-item--showreel' : ''}" data-id="${project.id}" role="button" tabindex="${isTouchProjectListUi() ? '-1' : '0'}">
      <span class="project-item-label">
        <span class="project-item-icons" aria-hidden="true">
          ${icons.outline}
          ${icons.closed}
          ${icons.open}
        </span>
        <span class="project-item-text">
          <span class="text-list project-item-name">${project.name}</span>
          ${project.description ? `<span class="text-list-meta project-item-desc" aria-hidden="true">${project.description}</span>` : ''}
        </span>
      </span>
      <span class="project-item-meta">
        ${project.locked ? `<span class="project-item-lock" aria-label="Private project">${lockIcon}</span>` : ''}
        ${categoryMarkup}
        <span class="project-item-info" data-project-id="${project.id}" aria-label="Project info">${infoIcon}</span>
      </span>
    </div>
  `;
}

function getNavigableProjects() {
  return getFilteredProjects();
}

function activateProjectListItem(projectId) {
  const project = projects.find((p) => p.id === projectId);
  if (!project) return;

  selectProject(projectId);
}

let projectListTouchBound = false;
let projectListTouchStartX = 0;
let projectListTouchStartY = 0;
let projectListTouchMoved = false;
let projectListTouchScrollTop = 0;

function getProjectListScrollContainer() {
  return projectListEl?.closest('.project-list-viewport') || projectListEl;
}

function bindProjectListTouchSelection() {
  if (!projectListEl || projectListTouchBound || !isTouchProjectListUi()) return;

  projectListTouchBound = true;

  projectListEl.addEventListener(
    'touchstart',
    (event) => {
      const touch = event.changedTouches[0];
      if (!touch) return;

      projectListTouchStartX = touch.clientX;
      projectListTouchStartY = touch.clientY;
      projectListTouchMoved = false;

      const scrollEl = getProjectListScrollContainer();
      projectListTouchScrollTop = scrollEl?.scrollTop ?? 0;
    },
    { passive: true }
  );

  projectListEl.addEventListener(
    'touchmove',
    (event) => {
      const touch = event.touches[0];
      if (!touch) return;

      if (
        Math.abs(touch.clientX - projectListTouchStartX) > PROJECT_LIST_TAP_MOVE_THRESHOLD
        || Math.abs(touch.clientY - projectListTouchStartY) > PROJECT_LIST_TAP_MOVE_THRESHOLD
      ) {
        projectListTouchMoved = true;
      }
    },
    { passive: true }
  );

  projectListEl.addEventListener(
    'touchend',
    (event) => {
      const item = event.target.closest('.project-item');
      if (!item) return;
      if (event.target.closest('.project-item-info')) return;

      const scrollEl = getProjectListScrollContainer();
      const scrolled = scrollEl && scrollEl.scrollTop !== projectListTouchScrollTop;

      if (projectListTouchMoved || scrolled) return;

      event.preventDefault();
      activateProjectListItem(item.dataset.id, item);
    },
    { passive: false }
  );
}

function bindProjectListItems() {
  bindProjectListTouchSelection();

  const touchUi = isTouchProjectListUi();

  projectListEl.querySelectorAll('.project-item').forEach((item) => {
    if (touchUi) {
      item.addEventListener('click', (e) => {
        e.preventDefault();
      });
    } else {
      item.addEventListener('click', (e) => {
        if (e.target.closest('.project-item-info')) return;
        activateProjectListItem(item.dataset.id, item);
      });
    }

    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        if (e.target.closest('.project-item-info')) return;
        activateProjectListItem(item.dataset.id, item);
      }
    });
  });

  bindProjectNavHint();
}

const PROJECT_NAV_HINT_DELAY_MS = 2000;
let projectNavHintEl;
let projectNavHintTimer = 0;
let projectNavHintAnchor = null;
let projectNavHintBound = false;

function canShowProjectNavHint() {
  if (isTouchProjectListUi()) return false;
  if (document.body.classList.contains('sidebar-collapsed')) return false;
  if (
    document.body.classList.contains('is-about-open')
    || document.body.classList.contains('is-profile-open')
    || document.body.classList.contains('is-copyright-open')
  ) {
    return false;
  }
  return true;
}

function ensureProjectNavHint() {
  if (projectNavHintEl) return projectNavHintEl;

  projectNavHintEl = document.createElement('p');
  projectNavHintEl.id = 'project-nav-hint';
  projectNavHintEl.className = 'tooltip tooltip--pill project-nav-hint';
  projectNavHintEl.setAttribute('role', 'status');
  projectNavHintEl.setAttribute('aria-live', 'polite');
  projectNavHintEl.innerHTML =
    'Use <span class="project-nav-hint__keys" aria-hidden="true">↑ ↓</span> to change projects';
  document.body.appendChild(projectNavHintEl);
  return projectNavHintEl;
}

function hideProjectNavHint() {
  if (projectNavHintTimer) {
    window.clearTimeout(projectNavHintTimer);
    projectNavHintTimer = 0;
  }
  projectNavHintAnchor = null;
  projectNavHintEl?.classList.remove('is-visible');
}

function positionProjectNavHint(item) {
  const tooltip = ensureProjectNavHint();
  const rect = item.getBoundingClientRect();
  const margin = 8;

  tooltip.style.bottom = 'auto';
  tooltip.style.right = 'auto';

  const centerX = rect.left + rect.width / 2;
  const tooltipWidth = tooltip.offsetWidth || 0;
  const tooltipHeight = tooltip.offsetHeight || 0;
  const clampedX = Math.max(
    margin + tooltipWidth / 2,
    Math.min(centerX, window.innerWidth - margin - tooltipWidth / 2)
  );

  let top = rect.top - margin;
  let transform = 'translate(-50%, -100%)';

  if (top - tooltipHeight < margin) {
    top = rect.bottom + margin;
    transform = 'translate(-50%, 0)';
  }

  tooltip.style.left = `${clampedX}px`;
  tooltip.style.top = `${top}px`;
  tooltip.style.transform = transform;
}

function showProjectNavHint(item) {
  if (!canShowProjectNavHint()) return;
  const tooltip = ensureProjectNavHint();
  tooltip.classList.add('is-visible');
  positionProjectNavHint(item);
  projectNavHintAnchor = item;
}

function scheduleProjectNavHint(item) {
  hideProjectNavHint();
  if (!canShowProjectNavHint()) return;

  projectNavHintAnchor = item;
  projectNavHintTimer = window.setTimeout(() => {
    projectNavHintTimer = 0;
    if (projectNavHintAnchor === item) {
      showProjectNavHint(item);
    }
  }, PROJECT_NAV_HINT_DELAY_MS);
}

function bindProjectNavHint() {
  if (!projectNavHintBound) {
    projectNavHintBound = true;

    projectListEl.addEventListener('scroll', hideProjectNavHint, { passive: true });

    projectListEl.addEventListener('mouseleave', hideProjectNavHint);

    projectListEl.addEventListener('mousemove', (event) => {
      if (!projectNavHintEl?.classList.contains('is-visible')) return;
      if (event.target.closest('.project-item-info')) return;
      hideProjectNavHint();
    });
  }

  projectListEl.querySelectorAll('.project-item').forEach((item) => {
    if (item.dataset.navHintBound === 'true') return;
    item.dataset.navHintBound = 'true';

    item.addEventListener('mouseenter', () => {
      scheduleProjectNavHint(item);
    });

    item.addEventListener('mouseleave', () => {
      hideProjectNavHint();
    });
  });
}

function renderProjectList() {
  projectListEl.innerHTML = getFilteredProjects()
    .map((project) => renderProjectListItem(project))
    .join('');

  bindProjectListItems();
  bindProjectInfoTooltips();
  syncProjectListLoadEntryStagger();
  scheduleProjectListLabelCollisionCheck();
  syncMobileProjectTabLabel();
  refreshCustomScrollbar(projectListEl);
}

function shouldSkipProjectListKeyboardNav(event) {
  const target = event.target;
  if (!(target instanceof Element)) return true;
  if (isShowreelLightboxOpen() || isSketchbookLightboxOpen()) return true;
  if (target.closest('.sidebar-resizer, .sidebar-collapse-btn, .sidebar-reopen-tab')) return true;

  const tag = target.tagName;
  if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return true;
  if (target.isContentEditable) return true;

  return false;
}

function focusAndScrollProjectItem(projectId) {
  const item = projectListEl.querySelector(`.project-item[data-id="${projectId}"]`);
  if (!item) return;

  item.scrollIntoView({ block: 'nearest' });
  item.focus({ preventScroll: true });
}

function setProjectListKeyboardNav(isNavigating) {
  projectListEl.classList.toggle('is-keyboard-navigating', isNavigating);
}

function navigateFilteredProject(direction) {
  const filtered = getNavigableProjects();
  if (filtered.length === 0) return false;

  const currentIndex = filtered.findIndex((p) => p.id === selectedId);
  const nextIndex =
    currentIndex === -1
      ? direction < 0
        ? filtered.length - 1
        : 0
      : (currentIndex + direction + filtered.length) % filtered.length;

  setProjectListKeyboardNav(true);
  selectProject(filtered[nextIndex].id);
  requestAnimationFrame(() => focusAndScrollProjectItem(selectedId));
  return true;
}

function getNextFilteredProject() {
  const filtered = getNavigableProjects();
  if (filtered.length <= 1) return null;

  const currentIndex = filtered.findIndex((p) => p.id === selectedId);
  const nextIndex =
    currentIndex === -1 ? 0 : (currentIndex + 1 + filtered.length) % filtered.length;

  return filtered[nextIndex];
}

const projectNextCtaEl = document.getElementById('project-next-cta');
const projectNextCtaBtnEl = document.getElementById('project-next-cta-btn');
const projectNextCtaNameEl = document.getElementById('project-next-cta-name');

function syncProjectNextCta() {
  if (!projectNextCtaEl || !projectNextCtaBtnEl || !projectNextCtaNameEl) return;

  const nextProject = getNextFilteredProject();
  if (!nextProject) {
    projectNextCtaEl.classList.add('is-hidden');
    projectNextCtaEl.hidden = true;
    return;
  }

  projectNextCtaNameEl.textContent = nextProject.name;
  projectNextCtaBtnEl.setAttribute('aria-label', `View next project: ${nextProject.name}`);
  projectNextCtaEl.classList.remove('is-hidden');
  projectNextCtaEl.hidden = false;
}

projectNextCtaBtnEl?.addEventListener('click', () => {
  navigateFilteredProject(1);
});

let projectInfoTooltipEl;
let projectInfoTooltipsBound = false;
let activeProjectInfoAnchor = null;

function ensureProjectInfoTooltip() {
  if (projectInfoTooltipEl) return projectInfoTooltipEl;

  projectInfoTooltipEl = document.createElement('div');
  projectInfoTooltipEl.id = 'project-info-tooltip';
  projectInfoTooltipEl.className = 'tooltip tooltip--card project-info-tooltip';
  projectInfoTooltipEl.innerHTML = `
    <div class="project-info-tooltip-image"></div>
    <div class="project-info-tooltip-copy">
      <span class="text-summary summary-label"></span>
      <p class="text-summary summary-body"></p>
    </div>
  `;
  document.body.appendChild(projectInfoTooltipEl);
  initCustomScrollbars(projectInfoTooltipEl);
  return projectInfoTooltipEl;
}

function positionProjectInfoTooltip(anchorEl) {
  const tooltip = ensureProjectInfoTooltip();
  const rect = anchorEl.getBoundingClientRect();
  const margin = 12;
  const tooltipWidth = 260;
  const gap = 20;
  let left = rect.right + gap;
  let top = rect.top + rect.height / 2;

  if (left + tooltipWidth > window.innerWidth - margin) {
    left = rect.left - gap - tooltipWidth;
  }

  tooltip.style.left = `${left}px`;
  tooltip.style.top = `${top}px`;

  const width = tooltip.offsetWidth || tooltipWidth;
  const height = tooltip.offsetHeight;
  const halfHeight = height / 2;

  left = Math.max(margin, Math.min(left, window.innerWidth - margin - width));
  top = Math.max(margin + halfHeight, Math.min(top, window.innerHeight - margin - halfHeight));

  tooltip.style.left = `${left}px`;
  tooltip.style.top = `${top}px`;
}

function showProjectInfoTooltip(anchorEl, project) {
  const tooltip = ensureProjectInfoTooltip();
  const imageWrap = tooltip.querySelector('.project-info-tooltip-image');
  imageWrap.innerHTML = renderHeroPanelContent(getProjectInfoImage(project), project, 0);
  tooltip.querySelector('.summary-label').textContent = 'Summary:';
  tooltip.querySelector('.summary-body').innerHTML = formatProjectSummaryLead(
    getProjectInfoText(project)
  );
  positionProjectInfoTooltip(anchorEl);
  activeProjectInfoAnchor = anchorEl;
  tooltip.classList.add('is-visible');
  refreshCustomScrollbar(tooltip.querySelector('.project-info-tooltip-copy'));
}

function hideProjectInfoTooltip() {
  activeProjectInfoAnchor = null;
  if (projectInfoTooltipEl) {
    projectInfoTooltipEl.classList.remove('is-visible');
  }
}

function bindProjectInfoTooltips() {
  projectListEl.querySelectorAll('.project-item-info').forEach((infoEl) => {
    const project = projects.find((p) => p.id === infoEl.dataset.projectId);
    if (!project) return;

    infoEl.addEventListener('mouseenter', () => {
      showProjectInfoTooltip(infoEl, project);
    });

    infoEl.addEventListener('mouseleave', (e) => {
      const tooltip = ensureProjectInfoTooltip();
      if (e.relatedTarget === tooltip || tooltip.contains(e.relatedTarget)) return;
      hideProjectInfoTooltip();
    });

    infoEl.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  });

  if (projectInfoTooltipsBound) return;
  projectInfoTooltipsBound = true;

  const tooltip = ensureProjectInfoTooltip();

  tooltip.addEventListener('mouseenter', () => {
    if (activeProjectInfoAnchor?.isConnected) {
      tooltip.classList.add('is-visible');
    }
  });

  tooltip.addEventListener('mouseleave', (e) => {
    if (e.relatedTarget?.closest('.project-item-info')) return;
    hideProjectInfoTooltip();
  });

  const repositionProjectInfoTooltip = () => {
    if (!projectInfoTooltipEl?.classList.contains('is-visible')) return;
    if (activeProjectInfoAnchor?.isConnected) {
      positionProjectInfoTooltip(activeProjectInfoAnchor);
      return;
    }
    hideProjectInfoTooltip();
  };

  window.addEventListener('scroll', repositionProjectInfoTooltip, true);
  registerViewportSync(repositionProjectInfoTooltip);

  document.addEventListener('mousedown', (e) => {
    if (!projectInfoTooltipEl?.classList.contains('is-visible')) return;
    if (projectInfoTooltipEl.contains(e.target)) return;
    if (e.target.closest('.project-item-info')) return;
    hideProjectInfoTooltip();
  });
}

const metadataIcons = {
  Industry: `<svg class="meta-icon" width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.2" aria-hidden="true"><path d="M2 12V5.8L7 2.8l5 3V12" stroke-linejoin="round"/><path d="M5.25 12V8.75h3.5V12" stroke-linejoin="round"/></svg>`,
  Technology: `<svg class="meta-icon" width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.2" aria-hidden="true"><rect x="2.75" y="2.75" width="8.5" height="8.5" rx="1.2"/><path d="M5 5h4M5 7h4M5 9h2.5" stroke-linecap="round"/><path d="M2.75 5.5H1.5M2.75 8.5H1.5M11.25 5.5h1.25M11.25 8.5h1.25M5.5 2.75V1.5M8.5 2.75V1.5M5.5 11.25V12.5M8.5 11.25V12.5" stroke-linecap="round"/></svg>`,
  'Current Company': `<svg class="meta-icon" width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.2" aria-hidden="true"><rect x="2" y="4.5" width="10" height="7.5" rx="1"/><path d="M4.75 4.5V3.75a2.25 2.25 0 014.5 0V4.5" stroke-linejoin="round"/><path d="M7 7.25v2.25" stroke-linecap="round"/></svg>`,
  Role: `<svg class="meta-icon" width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.2" aria-hidden="true"><circle cx="7" cy="4.75" r="2"/><path d="M3 12c0-2.21 1.79-3.5 4-3.5s4 1.29 4 3.5" stroke-linecap="round"/></svg>`,
  Timeline: `<svg class="meta-icon" width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.2" aria-hidden="true"><rect x="2" y="3" width="10" height="9" rx="1"/><path d="M4.5 2v2M9.5 2v2M2 5.75h10" stroke-linecap="round"/><path d="M5 8.25h1.75l2.5-2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  Platform: `<svg class="meta-icon" width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.2" aria-hidden="true"><rect x="1.5" y="2.5" width="11" height="7.5" rx="1"/><path d="M4.5 12h5" stroke-linecap="round"/><path d="M7 10v2" stroke-linecap="round"/></svg>`,
  Team: `<svg class="meta-icon" width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.2" aria-hidden="true"><circle cx="4.75" cy="4.75" r="1.75"/><circle cx="9.75" cy="5.25" r="1.5"/><path d="M1.75 12c0-1.66 1.35-2.75 3-2.75s3 1.09 3 2.75M8.25 12c0-1.38 1.12-2.25 2.25-2.25.78 0 1.48.3 2 1" stroke-linecap="round"/></svg>`,
  Deliverables: `<svg class="meta-icon" width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.2" aria-hidden="true"><path d="M3 4.5l4-2 4 2v5.5l-4 2-4-2V4.5z" stroke-linejoin="round"/><path d="M7 6.5v5M3 4.5l4 2 4-2" stroke-linejoin="round"/></svg>`,
  Status: `<svg class="meta-icon" width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.2" aria-hidden="true"><circle cx="7" cy="7" r="5"/><circle cx="7" cy="7" r="1.25" fill="currentColor" stroke="none"/><path d="M7 4.25V7" stroke-linecap="round"/></svg>`,
  Tools: `<svg class="meta-icon" width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.2" aria-hidden="true"><path d="M8.25 2.75l3 3-5.5 5.5H2.75V9.25L8.25 2.75z" stroke-linejoin="round"/><path d="M6.75 4.25l3 3" stroke-linecap="round"/></svg>`,
  Stack: `<svg class="meta-icon" width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.2" aria-hidden="true"><path d="M7 2.5L12 5 7 7.5 2 5 7 2.5z" stroke-linejoin="round"/><path d="M2 8l5 2.5L12 8" stroke-linecap="round" stroke-linejoin="round"/><path d="M2 10.5l5 2.5L12 10.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  Medium: `<svg class="meta-icon" width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.2" aria-hidden="true"><path d="M8.5 2.5l2 2-5.75 5.75a1.5 1.5 0 01-2.12 0l-.38-.38a1.5 1.5 0 010-2.12L8.5 2.5z" stroke-linejoin="round"/><path d="M7.25 3.75l3 3" stroke-linecap="round"/></svg>`,
  Format: `<svg class="meta-icon" width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.2" aria-hidden="true"><path d="M4 1.75h4.17L12 5.58v6.67a1.25 1.25 0 01-1.25 1.25H4A1.25 1.25 0 012.75 11.25V3A1.25 1.25 0 014 1.75z" stroke-linejoin="round"/><path d="M9.25 1.75V5h3.75" stroke-linejoin="round"/></svg>`,
  Series: `<svg class="meta-icon" width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.2" aria-hidden="true"><rect x="2" y="2" width="4" height="4" rx=".75"/><rect x="8" y="2" width="4" height="4" rx=".75"/><rect x="2" y="8" width="4" height="4" rx=".75"/><rect x="8" y="8" width="4" height="4" rx=".75"/></svg>`,
};

const metadataIconFallback = `<svg class="meta-icon" width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.2" aria-hidden="true"><circle cx="7" cy="7" r="2.25"/><path d="M7 4.5V2.75M7 11.25V9.5M4.5 7H2.75M11.25 7H9.5" stroke-linecap="round"/></svg>`;

function getMetadataIcon(label) {
  return metadataIcons[label] || metadataIconFallback;
}

function renderMetadataItem(m) {
  return `
    <div class="meta-item meta-item--icon">
      <div class="meta-label-row">
        <span class="meta-icon-wrap" aria-hidden="true">${getMetadataIcon(m.label)}</span>
        <span class="text-summary meta-label">${m.label}</span>
      </div>
      <span class="text-summary meta-value">${m.value}</span>
    </div>
  `;
}

function renderSummary(summary) {
  if (!projectSummaryEl) return;
  projectSummaryEl.innerHTML = `
    <span class="text-summary summary-label">Summary:</span>
    <p class="text-summary summary-body">${formatProjectSummaryLead(summary)}</p>
  `;
}

function renderShowreelVideo(project) {
  if (!projectSummaryEl) return;

  const videoUrl = project?.videoUrl;
  const label = escapeHtml(`${project?.name || 'Showreel'} video`);

  if (videoUrl) {
    projectSummaryEl.innerHTML = `
      <div class="showreel-video-wrap">
        <video class="showreel-video" controls playsinline preload="metadata" aria-label="${label}">
          <source src="${escapeHtml(videoUrl)}" type="video/mp4">
        </video>
      </div>
    `;
  } else {
    projectSummaryEl.innerHTML = `
      <div class="showreel-video-wrap showreel-video-wrap--empty" role="status">
        <p class="text-caption">Video unavailable.</p>
      </div>
    `;
  }

  if (metadataRowEl) metadataRowEl.innerHTML = '';
  if (metadataRowCompactEl) metadataRowCompactEl.innerHTML = '';
  requestAnimationFrame(() => syncStickyHeaderAlignHeight());
}

function pauseShowreelVideo() {
  const video = projectSummaryEl?.querySelector('.showreel-video');
  if (video instanceof HTMLVideoElement) {
    video.pause();
  }
}

function renderMetadata(metadata, summary) {
  renderSummary(summary);
  metadataRowEl.innerHTML = metadata.map(renderMetadataItem).join('');

  const compactItems = metadata.slice(0, 2);
  if (metadataRowCompactEl) {
    metadataRowCompactEl.innerHTML = compactItems.map(renderMetadataItem).join('');
  }

  requestAnimationFrame(() => syncStickyHeaderAlignHeight());
}

function updateProjectAccess(project) {
  const unlocked = isProjectUnlocked(project);

  projectLockGateEl.classList.toggle('is-hidden', unlocked);
  projectLockGateEl.hidden = unlocked;
  mainContentEl?.classList.toggle('is-project-locked', !unlocked);
  if (!unlocked) setProjectIntroStickyVisible(false, { instant: true });

  if (unlocked) {
    projectLockErrorEl.classList.add('is-hidden');
    if (isShowreelProject(project)) {
      renderShowreelVideo(project);
      projectGallery.classList.add('is-hidden');
      projectGallery.hidden = true;
    } else {
      renderMetadata(project.metadata, project.summary ?? project.description);
      showProjectGallery();
    }
    requestAnimationFrame(() => syncProjectIntroStickyFromScroll());
  } else {
    projectGallery.classList.add('is-hidden');
    projectGallery.hidden = true;
    projectText.classList.add('is-hidden');
    projectText.hidden = true;
    projectLockPasswordEl.value = '';
    projectLockErrorEl.classList.add('is-hidden');
  }
}

function attemptProjectUnlock() {
  const project = projects.find((p) => p.id === selectedId);
  if (!project || !project.locked) return;

  if (projectLockPasswordEl.value === PROJECT_LOCK_PASSWORD) {
    unlockProject(project.id);
    updateProjectAccess(project);
    return;
  }

  projectLockErrorEl.classList.remove('is-hidden');
}

function selectProject(id) {
  const project = projects.find((p) => p.id === id);
  if (!project) return;

  closeSketchbookLightbox();
  closeShowreelLightbox();
  closeProjectInfoPanel();
  pauseShowreelVideo();
  resetProjectIntroScroll();
  selectedId = id;
  syncSpecialGalleryChrome(project);
  syncProjectNumberDisplay(id);
  renderProjectTitle(projectTitleEl, project.name);
  renderProjectSubhead(projectDescEl, project.description);
  refitProjectIntroTitle();
  syncProjectIntroStickyContent(project);
  updateProjectAccess(project);
  renderGallery(project);
  renderProjectList();
  syncMobileProjectTabLabel();
  syncProjectNextCta();

  if (!isSidebarCollapsed() && (isSidebarMobileDropdown() || isSidebarOverlayPanelOnly())) {
    collapseSidebar();
  }

  refreshCustomScrollbar(mainContentEl);
}

function setFilter(filter) {
  activeFilter = filter;

  filterButtons.forEach((btn) => {
    const isActive = btn.dataset.filter === filter;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-selected', isActive);
  });

  syncProjectNumberDisplay();
    renderProjectList();
  syncProjectNextCta();
}

filterButtons.forEach((btn) => {
  btn.addEventListener('click', () => setFilter(btn.dataset.filter));
});

projectListEl.addEventListener('mousemove', () => {
  setProjectListKeyboardNav(false);
});

const themeToggle = document.getElementById('theme-toggle');
const themeToggleTooltip = document.getElementById('theme-toggle-tooltip');

function getTheme() {
  return document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
}

function applyTheme(theme) {
  const root = document.documentElement;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const commitTheme = () => {
    root.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  const label = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
  themeToggle.setAttribute('aria-label', label);
  if (themeToggleTooltip) themeToggleTooltip.textContent = label;
  renderProjectList();
  };

  if (prefersReducedMotion) {
    commitTheme();
    return;
  }

  if (typeof document.startViewTransition === 'function') {
    document.startViewTransition(commitTheme);
    return;
  }

  root.classList.add('is-theme-transitioning');
  commitTheme();
  window.setTimeout(() => root.classList.remove('is-theme-transitioning'), 520);
}

function initTheme() {
  let theme = 'light';
  try {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark' || saved === 'light') theme = saved;
  } catch (_) {}
  applyTheme(theme);
}

themeToggle.addEventListener('click', () => {
  applyTheme(getTheme() === 'dark' ? 'light' : 'dark');
});

const sidebarResizer = document.getElementById('sidebar-resizer');
const sidebarCollapseBtn = document.getElementById('sidebar-collapse-btn');
const sidebarHeader = document.getElementById('sidebar-header');
const sidebarHeaderLabel = document.getElementById('sidebar-header-label');
const sidebarProjectCountPill = document.getElementById('sidebar-project-count-pill');
const headerShellEl = document.getElementById('header-shell');
const sidebarMobilePanelContentEl = document.getElementById('sidebar-mobile-panel-content');
const sidebarReopenTabs = document.querySelectorAll('.sidebar-reopen-tab');
const bodyEl = document.querySelector('.body');
const SIDEBAR_MIN = 220;
const SIDEBAR_MAX_RATIO = 0.5;
const SIDEBAR_SNAP_THRESHOLD = 10;
const SIDEBAR_SNAP_ESCAPE = 10;
const SIDEBAR_COLLAPSED_KEY = 'sidebar-collapsed';
const SIDEBAR_COLLAPSE_MQ = window.matchMedia('(min-width: 901px)');
const SIDEBAR_OVERLAY_MQ = window.matchMedia('(max-width: 900px)');
const SIDEBAR_MOBILE_MQ = window.matchMedia('(max-width: 560px)');
const SIDEBAR_MOBILE_PANEL_MS = 400;
const PROJECT_LABEL_COLLISION_THRESHOLD = 2;

let previousSidebarWidth = null;
let sidebarDefaultWidth = null;
let sidebarSnapActive = false;
let sidebarSnapStartX = 0;
let sidebarMobilePanelAnimating = false;

let projectListLabelCollisionRaf = 0;
let projectListLabelCollisionObserver;

function getProjectItemTextBounds(el) {
  const rect = el.getBoundingClientRect();
  if (rect.width === 0 || rect.height === 0) return null;

  const textNode = el.childNodes[0];
  if (textNode?.nodeType === Node.TEXT_NODE && textNode.textContent.length > 0) {
    const range = document.createRange();
    range.selectNodeContents(textNode);
    const textRect = range.getBoundingClientRect();
    if (textRect.width > 0) return textRect;
  }

  return rect;
}

function projectListRowHasLabelCollision(item) {
  const nameEl = item.querySelector('.project-item-name');
  if (!nameEl) return false;

  const nameBounds = getProjectItemTextBounds(nameEl);
  if (!nameBounds) return false;

  const nameRight = nameBounds.right;

  const categoryEl = item.querySelector('.project-item-category');
  const starburstEl = item.querySelector('.project-item-starburst');
  const labelEl = categoryEl ?? starburstEl;
  if (labelEl) {
    const labelBounds = starburstEl
      ? starburstEl.getBoundingClientRect()
      : getProjectItemTextBounds(categoryEl) ?? categoryEl.getBoundingClientRect();
    if (labelBounds.width > 0) {
      if (labelBounds.left - nameRight <= PROJECT_LABEL_COLLISION_THRESHOLD) {
        return true;
      }
    }
  }

  const lockEl = item.querySelector('.project-item-lock');
  if (lockEl && getComputedStyle(lockEl).display !== 'none') {
    const lockRect = lockEl.getBoundingClientRect();
    if (lockRect.width > 0 && lockRect.left - nameRight <= PROJECT_LABEL_COLLISION_THRESHOLD) {
      return true;
    }
  }

  return false;
}

function detectProjectListLabelCollisions() {
  if (!projectListEl) return;

  projectListEl.classList.remove('project-list--labels-collapsed');

  const items = projectListEl.querySelectorAll('.project-item');
  let hasCollision = false;

  for (const item of items) {
    if (projectListRowHasLabelCollision(item)) {
      hasCollision = true;
      break;
    }
  }

  projectListEl.classList.toggle('project-list--labels-collapsed', hasCollision);
}

function scheduleProjectListLabelCollisionCheck() {
  if (projectListLabelCollisionRaf) return;
  projectListLabelCollisionRaf = requestAnimationFrame(() => {
    projectListLabelCollisionRaf = 0;
    detectProjectListLabelCollisions();
  });
}

function initProjectListLabelCollisionSync() {
  scheduleProjectListLabelCollisionCheck();

  if (typeof ResizeObserver !== 'undefined') {
    projectListLabelCollisionObserver = new ResizeObserver(() => scheduleProjectListLabelCollisionCheck());
    if (sidebarEl) projectListLabelCollisionObserver.observe(sidebarEl);
    if (projectListEl) projectListLabelCollisionObserver.observe(projectListEl);
  }

  registerViewportSync(scheduleProjectListLabelCollisionCheck);
  if (document.fonts?.ready) {
    document.fonts.ready.then(scheduleProjectListLabelCollisionCheck);
  }
}

function getSidebarWidthPx() {
  return parseInt(
    getComputedStyle(document.documentElement).getPropertyValue('--sidebar-width'),
    10
  );
}

function measureSidebarOneLineTagsWidth() {
  const pills = filterButtons.length ? [...filterButtons] : [];
  const rootStyle = getComputedStyle(document.documentElement);
  const wrapThreshold =
    parseInt(rootStyle.getPropertyValue('--sidebar-filter-wrap-threshold'), 10) || 388;

  if (!pills.length) {
    return wrapThreshold + 1;
  }

  const gap = rootStyle.getPropertyValue('--filter-pill-gap').trim() || '7.5px';
  const probe = document.createElement('div');
  probe.setAttribute('aria-hidden', 'true');
  Object.assign(probe.style, {
    position: 'fixed',
    left: '-10000px',
    top: '0',
    visibility: 'hidden',
    pointerEvents: 'none',
    display: 'flex',
    flexWrap: 'nowrap',
    alignItems: 'stretch',
    gap,
    width: 'max-content',
  });

  pills.forEach((pill) => {
    const clone = pill.cloneNode(true);
    clone.style.width = 'auto';
    clone.style.minWidth = '0';
    clone.style.maxWidth = 'none';
    clone.style.flex = '0 0 auto';
    probe.appendChild(clone);
  });

  document.body.appendChild(probe);
  const rowWidth = Math.ceil(probe.getBoundingClientRect().width);
  document.body.removeChild(probe);

  const filtersStyle = sidebarFiltersEl ? getComputedStyle(sidebarFiltersEl) : null;
  const horizontalPadding = filtersStyle
    ? parseFloat(filtersStyle.paddingLeft) + parseFloat(filtersStyle.paddingRight)
    : 32;

  return Math.max(rowWidth + horizontalPadding, wrapThreshold + 1);
}

function refreshSidebarDefaultWidth() {
  const measured = clampSidebarWidth(measureSidebarOneLineTagsWidth());
  sidebarDefaultWidth = measured;
  document.documentElement.style.setProperty('--sidebar-width-default', `${measured}px`);
  return measured;
}

function getSidebarDefaultWidth() {
  if (sidebarDefaultWidth) return sidebarDefaultWidth;

  const fromCss = parseInt(
    getComputedStyle(document.documentElement).getPropertyValue('--sidebar-width-default'),
    10
  );
  return !Number.isNaN(fromCss) && fromCss > 0 ? fromCss : 388;
}

function applySidebarDefaultWidthOnLoad() {
  const defaultWidth = refreshSidebarDefaultWidth();

  if (!isSidebarCollapsed() && !isSidebarOverlayPanel()) {
    setSidebarWidth(defaultWidth);
  }

  return defaultWidth;
}

function isSidebarCollapsed() {
  return document.body.classList.contains('sidebar-collapsed');
}

function isSidebarOverlayPanel() {
  return SIDEBAR_OVERLAY_MQ.matches;
}

function isSidebarOverlayPanelOnly() {
  return isSidebarOverlayPanel() && !isSidebarMobileDropdown();
}

function isSidebarMobileDropdown() {
  return SIDEBAR_MOBILE_MQ.matches;
}

function isSidebarCollapseEnabled() {
  return true;
}

function isPortfolioEntryFromLanding() {
  const root = document.documentElement;
  return (
    root.classList.contains('is-portfolio-entry')
    || root.classList.contains('is-portfolio-load-entry')
  );
}

function shouldSidebarStartCollapsed() {
  return isSidebarOverlayPanel();
}

function syncMobileProjectTabLabel() {
  if (!sidebarHeaderLabel) return;

  sidebarHeaderLabel.textContent = 'Projects';
  sidebarProjectCountPill?.setAttribute('hidden', '');
}

function setSidebarPanelToggleX(isX) {
  document.body.classList.toggle('sidebar-panel-toggle-x', isX);
}

function syncSidebarLayoutMode() {
  document.body.classList.toggle('sidebar-overlay-panel', isSidebarOverlayPanelOnly());
}

function syncSidebarCollapseUi() {
  const collapsed = isSidebarCollapsed() && isSidebarCollapseEnabled();

  if (isSidebarMobileDropdown()) {
    setSidebarPanelToggleX(false);
  }

  document.body.classList.toggle('sidebar-collapsed', collapsed);
  syncSidebarLayoutMode();
  if (collapsed) hideProjectNavHint();
  sidebarCollapseBtn?.setAttribute('aria-expanded', collapsed ? 'false' : 'true');

  if (sidebarCollapseBtn) {
    sidebarCollapseBtn.setAttribute(
      'aria-label',
      isSidebarMobileDropdown() || isSidebarOverlayPanelOnly()
        ? collapsed
          ? 'Show projects list'
          : 'Hide projects list'
        : document.body.classList.contains('sidebar-panel-toggle-x')
          ? 'Close projects panel'
          : 'Collapse projects panel'
    );
  }

  if (sidebarReopenTabs.length) {
    const showReopen = collapsed && isSidebarCollapseEnabled();
    sidebarReopenTabs.forEach((tab) => {
      tab.hidden = !showReopen;
      tab.setAttribute('aria-hidden', tab.hidden ? 'true' : 'false');
      tab.setAttribute('aria-label', 'Open projects panel');
    });
  }

  if (sidebarResizer) {
    const disabled = collapsed || !isSidebarCollapseEnabled() || isSidebarOverlayPanel();
    sidebarResizer.setAttribute('aria-hidden', disabled ? 'true' : 'false');
    sidebarResizer.tabIndex = disabled ? -1 : 0;
  }

  syncMobileProjectTabLabel();
}

function waitForMobilePanelTransition() {
  return waitForElementPropertyTransition(sidebarEl, 'transform', SIDEBAR_MOBILE_PANEL_MS + 80);
}

function waitForMobilePanelCloseTransitions() {
  return waitForMobilePanelTransition();
}

function waitForElementPropertyTransition(element, propertyName, fallbackMs = SIDEBAR_MOBILE_PANEL_MS + 80) {
  return new Promise((resolve) => {
    if (!element) {
      resolve();
      return;
    }

    let settled = false;
    const finish = () => {
      if (settled) return;
      settled = true;
      element.removeEventListener('transitionend', onEnd);
      resolve();
    };

    const onEnd = (event) => {
      if (event.target === element && event.propertyName === propertyName) {
        finish();
      }
    };

    element.addEventListener('transitionend', onEnd);
    window.setTimeout(finish, fallbackMs);
  });
}

function endMobilePanelPhase(phaseClass) {
  document.body.classList.remove(phaseClass, `${phaseClass}-active`);
}

function clearMobilePanelAnimationState() {
  document.body.classList.remove(
    'sidebar-mobile-panel-opening',
    'sidebar-mobile-panel-opening-active',
    'sidebar-mobile-panel-closing',
    'sidebar-mobile-panel-closing-active',
    'sidebar-mobile-panel-expanded'
  );
}

async function expandSidebarMobileAnimated() {
  if (!isSidebarMobileDropdown() || !isSidebarCollapsed() || sidebarMobilePanelAnimating) return;

  sidebarMobilePanelAnimating = true;
  setMobileChromeHidden(false);
  document.body.classList.add('sidebar-mobile-panel-opening');
  document.body.classList.remove('sidebar-collapsed');
  syncMobileProjectTabLabel();
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      document.body.classList.add('sidebar-mobile-panel-opening-active');
    });
  });

  await waitForMobilePanelTransition();

  endMobilePanelPhase('sidebar-mobile-panel-opening');
  document.body.classList.add('sidebar-mobile-panel-expanded');
  localStorage.setItem(SIDEBAR_COLLAPSED_KEY, 'false');
  sidebarMobilePanelAnimating = false;
  syncSidebarCollapseUi();
  syncStickyHeaderAlignHeight();
  projectTitleLastFitWidth = -1;
  scheduleProjectTitleFit();
  scheduleProjectListLabelCollisionCheck();
}

async function collapseSidebarMobileAnimated() {
  if (!isSidebarMobileDropdown() || isSidebarCollapsed() || sidebarMobilePanelAnimating) return;

  sidebarMobilePanelAnimating = true;
  setMobileChromeHidden(false);
  document.body.classList.remove('sidebar-mobile-panel-expanded');
  document.body.classList.add('sidebar-mobile-panel-closing');
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      document.body.classList.add('sidebar-mobile-panel-closing-active');
    });
  });

  await waitForMobilePanelCloseTransitions();

  endMobilePanelPhase('sidebar-mobile-panel-closing');
  document.body.classList.add('sidebar-collapsed');
  localStorage.setItem(SIDEBAR_COLLAPSED_KEY, 'true');
  sidebarMobilePanelAnimating = false;
  syncSidebarCollapseUi();
  syncStickyHeaderAlignHeight();
  projectTitleLastFitWidth = -1;
  scheduleProjectTitleFit();
  scheduleProjectListLabelCollisionCheck();
}

function toggleSidebarMobileDropdown() {
  if (!isSidebarMobileDropdown() || sidebarMobilePanelAnimating) return;

  if (isSidebarCollapsed()) {
    expandSidebarMobileAnimated();
  } else {
    collapseSidebarMobileAnimated();
  }
}

function collapseSidebarOverlayInstant() {
  if (isSidebarCollapsed()) return;

  clearMobilePanelAnimationState();
  document.body.classList.remove('sidebar-mobile-panel-expanded');
  document.body.classList.add('sidebar-collapsed');
  setSidebarPanelToggleX(false);
  localStorage.setItem(SIDEBAR_COLLAPSED_KEY, 'true');
  syncSidebarCollapseUi();
  syncStickyHeaderAlignHeight();
  projectTitleLastFitWidth = -1;
  scheduleProjectTitleFit({ force: true });
  scheduleProjectListLabelCollisionCheck();
}

function expandSidebarOverlayInstant() {
  if (!isSidebarCollapsed()) return;

  document.body.classList.remove('sidebar-collapsed');
  setSidebarPanelToggleX(false);
  localStorage.setItem(SIDEBAR_COLLAPSED_KEY, 'false');
  syncSidebarCollapseUi();
  syncStickyHeaderAlignHeight();
  projectTitleLastFitWidth = -1;
  scheduleProjectTitleFit();
  scheduleProjectListLabelCollisionCheck();
}

function toggleSidebarOverlayPanel() {
  if (isSidebarCollapsed()) {
    expandSidebarOverlayInstant();
  } else {
    collapseSidebarOverlayInstant();
  }
}

function collapseSidebar() {
  if (!isSidebarCollapseEnabled() || isSidebarCollapsed()) return;
  if (document.body.classList.contains('sidebar-desktop-closing')) return;

  if (isSidebarMobileDropdown()) {
    collapseSidebarMobileAnimated();
    return;
  }

  if (isSidebarOverlayPanelOnly()) {
    collapseSidebarOverlayInstant();
    return;
  }

  const current = getSidebarWidthPx();
  if (!Number.isNaN(current) && current > 0) {
    previousSidebarWidth = current;
  }

  document.body.classList.add('sidebar-desktop-closing');
  setSidebarPanelToggleX(false);
  syncSidebarCollapseUi();
  projectTitleLastFitWidth = -1;
  scheduleProjectTitleFit({ force: true });

  const closeDurationSec = parseFloat(
    getComputedStyle(document.documentElement).getPropertyValue('--sidebar-desktop-duration')
  );
  const closeFallbackMs = Number.isFinite(closeDurationSec) ? closeDurationSec * 1000 + 80 : 400;

  Promise.all([
    waitForElementPropertyTransition(sidebarEl, 'transform', closeFallbackMs),
    waitForElementPropertyTransition(sidebarEl, 'width', closeFallbackMs),
    waitForElementPropertyTransition(mainContentEl, '--main-inline-padding', closeFallbackMs),
  ]).then(() => {
    document.body.classList.remove('sidebar-desktop-closing');
    document.body.classList.add('sidebar-collapsed');
    localStorage.setItem(SIDEBAR_COLLAPSED_KEY, 'true');
    syncSidebarCollapseUi();
    syncStickyHeaderAlignHeight();

    projectTitleLastFitWidth = -1;
    scheduleProjectTitleFit();
    scheduleProjectListLabelCollisionCheck();
  });
}

function expandSidebar() {
  if (!isSidebarCollapsed()) return;
  if (document.body.classList.contains('sidebar-desktop-opening')) return;

  if (isSidebarMobileDropdown()) {
    expandSidebarMobileAnimated();
    return;
  }

  if (isSidebarOverlayPanelOnly()) {
    expandSidebarOverlayInstant();
    return;
  }

  const restoreWidth = previousSidebarWidth || getSidebarDefaultWidth();
  const clamped = clampSidebarWidth(restoreWidth);

  const startDesktopOpening = () => {
    document.body.classList.add('sidebar-desktop-opening');
    document.documentElement.style.setProperty('--sidebar-width', `${clamped}px`);
    document.body.classList.remove('sidebar-collapsed');
    localStorage.setItem(SIDEBAR_COLLAPSED_KEY, 'false');
    syncSidebarCollapseUi();

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.body.classList.add('sidebar-desktop-opening-active');
      });
    });

    const openDurationSec = parseFloat(
      getComputedStyle(document.documentElement).getPropertyValue('--sidebar-desktop-duration')
    );
    const openFallbackMs = Number.isFinite(openDurationSec) ? openDurationSec * 1000 + 80 : 400;

    Promise.all([
      waitForElementPropertyTransition(sidebarEl, 'transform', openFallbackMs),
      waitForElementPropertyTransition(sidebarEl, 'width', openFallbackMs),
      waitForElementPropertyTransition(mainContentEl, '--main-inline-padding', openFallbackMs),
    ]).then(() => {
      document.body.classList.remove('sidebar-desktop-opening');
      document.body.classList.remove('sidebar-desktop-opening-active');
      localStorage.setItem('sidebar-width', String(clamped));
      syncStickyHeaderAlignHeight();

      projectTitleLastFitWidth = -1;
      scheduleProjectTitleFit();
      scheduleProjectListLabelCollisionCheck();
    });
  };

  setSidebarPanelToggleX(true);
  syncSidebarCollapseUi();
  requestAnimationFrame(() => startDesktopOpening());
}

function initSidebarCollapse() {
  // Measure while the sidebar is still expanded — zero-width layout inflates filter height.
  syncStickyHeaderAlignHeight();

  if (shouldSidebarStartCollapsed()) {
    const savedWidth = parseInt(localStorage.getItem('sidebar-width'), 10);
    previousSidebarWidth =
      !Number.isNaN(savedWidth) && savedWidth > 0 ? savedWidth : previousSidebarWidth;
    document.body.classList.add('sidebar-collapsed');
    setSidebarPanelToggleX(false);
  } else {
    setSidebarPanelToggleX(true);
  }

  syncSidebarCollapseUi();

  if (isSidebarMobileDropdown() && !isSidebarCollapsed()) {
    document.body.classList.add('sidebar-mobile-panel-expanded');
  }

  sidebarCollapseBtn?.addEventListener('click', (event) => {
    event.stopPropagation();

    if (isSidebarMobileDropdown()) {
      toggleSidebarMobileDropdown();
      return;
    }

    if (isSidebarOverlayPanel()) {
      toggleSidebarOverlayPanel();
      return;
    }

    collapseSidebar();
  });

  sidebarReopenTabs.forEach((tab) => tab.addEventListener('click', expandSidebar));

  const handleSidebarLayoutMqChange = () => {
    document.body.classList.remove(
      'sidebar-desktop-opening',
      'sidebar-desktop-opening-active',
      'sidebar-desktop-closing'
    );
    clearMobilePanelAnimationState();
    sidebarMobilePanelAnimating = false;
    setMobileChromeHidden(false);

    if (!SIDEBAR_COLLAPSE_MQ.matches) {
      const current = getSidebarWidthPx();
      if (!Number.isNaN(current) && current > 0) {
        previousSidebarWidth = current;
      }
      document.body.classList.add('sidebar-collapsed');
      setSidebarPanelToggleX(false);
      localStorage.setItem(SIDEBAR_COLLAPSED_KEY, 'true');
    }

    if (isSidebarMobileDropdown() && !isSidebarCollapsed()) {
      collapseSidebar();
    }

    syncSidebarCollapseUi();
    syncStickyHeaderAlignHeight();
    projectTitleLastFitWidth = -1;
    scheduleProjectTitleFit({ force: true });
    scheduleProjectListLabelCollisionCheck();
  };

  if (typeof SIDEBAR_COLLAPSE_MQ.addEventListener === 'function') {
    SIDEBAR_COLLAPSE_MQ.addEventListener('change', handleSidebarLayoutMqChange);
  } else if (typeof SIDEBAR_COLLAPSE_MQ.addListener === 'function') {
    SIDEBAR_COLLAPSE_MQ.addListener(handleSidebarLayoutMqChange);
  }

  if (typeof SIDEBAR_OVERLAY_MQ.addEventListener === 'function') {
    SIDEBAR_OVERLAY_MQ.addEventListener('change', handleSidebarLayoutMqChange);
  } else if (typeof SIDEBAR_OVERLAY_MQ.addListener === 'function') {
    SIDEBAR_OVERLAY_MQ.addListener(handleSidebarLayoutMqChange);
  }

  const handleMobileMqChange = () => {
    handleSidebarLayoutMqChange();
  };

  if (typeof SIDEBAR_MOBILE_MQ.addEventListener === 'function') {
    SIDEBAR_MOBILE_MQ.addEventListener('change', handleMobileMqChange);
  } else if (typeof SIDEBAR_MOBILE_MQ.addListener === 'function') {
    SIDEBAR_MOBILE_MQ.addListener(handleMobileMqChange);
  }
}

const mobileProjectNav = document.getElementById('mobile-project-nav');
const mobileProjectPrev = document.getElementById('mobile-project-prev');
const mobileProjectNext = document.getElementById('mobile-project-next');

function syncMobileProjectNavVisibility() {
  if (!mobileProjectNav) return;
  mobileProjectNav.setAttribute('aria-hidden', isSidebarMobileDropdown() ? 'false' : 'true');
}

function initMobileProjectNav() {
  syncMobileProjectNavVisibility();

  mobileProjectPrev?.addEventListener('click', () => navigateFilteredProject(-1));
  mobileProjectNext?.addEventListener('click', () => navigateFilteredProject(1));

  const handleMobileNavMqChange = () => syncMobileProjectNavVisibility();

  if (typeof SIDEBAR_MOBILE_MQ.addEventListener === 'function') {
    SIDEBAR_MOBILE_MQ.addEventListener('change', handleMobileNavMqChange);
  } else if (typeof SIDEBAR_MOBILE_MQ.addListener === 'function') {
    SIDEBAR_MOBILE_MQ.addListener(handleMobileNavMqChange);
  }
}

function clampSidebarWidth(width) {
  const max = Math.max(SIDEBAR_MIN, bodyEl.clientWidth * SIDEBAR_MAX_RATIO);
  return Math.min(Math.max(width, SIDEBAR_MIN), max);
}

function setSidebarWidth(width) {
  if (isSidebarCollapsed() || isSidebarOverlayPanel()) return getSidebarWidthPx();

  const clamped = clampSidebarWidth(width);
  document.documentElement.style.setProperty('--sidebar-width', `${clamped}px`);
  localStorage.setItem('sidebar-width', String(clamped));
  syncStickyHeaderAlignHeight();
  projectTitleLastFitWidth = -1;
  scheduleProjectTitleFit();
  scheduleProjectListLabelCollisionCheck();
  return clamped;
}

function startResize() {
  sidebarSnapActive = false;
  sidebarSnapStartX = 0;
  document.body.classList.add('is-resizing');
  sidebarResizer.classList.add('is-dragging');
}

function stopResize() {
  sidebarSnapActive = false;
  sidebarSnapStartX = 0;
  document.body.classList.remove('is-resizing');
  sidebarResizer.classList.remove('is-dragging');
}

function resolveSidebarDragWidth(clientX) {
  const bodyRect = bodyEl.getBoundingClientRect();
  const targetWidth = clampSidebarWidth(clientX - bodyRect.left);
  const defaultWidth = getSidebarDefaultWidth();

  if (!sidebarSnapActive) {
    if (Math.abs(targetWidth - defaultWidth) <= SIDEBAR_SNAP_THRESHOLD) {
      sidebarSnapActive = true;
      sidebarSnapStartX = clientX;
      return defaultWidth;
    }
    return targetWidth;
  }

  if (Math.abs(clientX - sidebarSnapStartX) >= SIDEBAR_SNAP_ESCAPE) {
    sidebarSnapActive = false;
    return targetWidth;
  }

  return defaultWidth;
}

function resizeFromPointer(clientX) {
  if (isSidebarCollapsed() || isSidebarOverlayPanel()) return;
  setSidebarWidth(resolveSidebarDragWidth(clientX));
}

sidebarResizer.addEventListener('mousedown', (e) => {
  if (isSidebarCollapsed() || isSidebarOverlayPanel()) return;
    e.preventDefault();
  startResize();

  function onMouseMove(event) {
    resizeFromPointer(event.clientX);
  }

  function onMouseUp() {
    stopResize();
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  }

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
});

sidebarResizer.addEventListener('keydown', (e) => {
  if (isSidebarCollapsed() || isSidebarOverlayPanel()) return;

  const step = e.shiftKey ? 32 : 8;
  const current = getSidebarWidthPx();

  if (e.key === 'ArrowLeft') {
    e.preventDefault();
    setSidebarWidth(current - step);
  } else if (e.key === 'ArrowRight') {
    e.preventDefault();
    setSidebarWidth(current + step);
  }
});

registerViewportSync(() => {
  if (isSidebarCollapsed() || isSidebarOverlayPanel()) return;

  const current = getSidebarWidthPx();
  if (!Number.isNaN(current)) {
    setSidebarWidth(current);
  }
});

applySidebarDefaultWidthOnLoad();

if (document.fonts?.ready) {
  document.fonts.ready.then(() => {
    const previousDefault = sidebarDefaultWidth;
    refreshSidebarDefaultWidth();
    if (
      !isSidebarCollapsed()
      && !isSidebarMobileDropdown()
      && !isSidebarOverlayPanel()
      && previousDefault
      && getSidebarWidthPx() === previousDefault
    ) {
      setSidebarWidth(sidebarDefaultWidth);
    }
  });
}

const PORTFOLIO_ENTRY_KEY = 'portfolio-entry-from-landing';
const PORTFOLIO_WHITE_ENTRY_KEY = 'portfolio-entry-white';
const PORTFOLIO_LOAD_ENTRY_MS = 1200;

function syncProjectListLoadEntryStagger() {
  const root = document.documentElement;
  if (!root.classList.contains('is-portfolio-load-entry') || !projectListEl) return;

  projectListEl.querySelectorAll('.project-item').forEach((item, index) => {
    item.style.setProperty('--load-entry-item-index', String(index));
  });
}

function finishPortfolioLoadEntry(root) {
  root.classList.remove('is-portfolio-load-entry');
  root.classList.remove('is-portfolio-load-entry-animate');
  root.classList.remove('is-portfolio-entry');
  root.classList.remove('is-portfolio-white-entry');
  root.classList.remove('is-portfolio-entry-animate');
  delete root.dataset.portfolioEntryAnimateAt;
}

async function initPortfolioLoadEntry() {
  const root = document.documentElement;
  if (!root.classList.contains('is-portfolio-load-entry')) return;

  try {
    sessionStorage.removeItem(PORTFOLIO_ENTRY_KEY);
    sessionStorage.removeItem(PORTFOLIO_WHITE_ENTRY_KEY);
  } catch (_) {}

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    finishPortfolioLoadEntry(root);
    return;
  }

  const isWhiteEntry = root.classList.contains('is-portfolio-white-entry');

  root.classList.remove('is-portfolio-load-entry-animate');
  root.classList.remove('is-portfolio-entry-animate');
  root.dataset.portfolioEntryAnimateAt = String(Date.now());
  syncProjectListLoadEntryStagger();

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      root.classList.add('is-portfolio-load-entry-animate');
      if (isWhiteEntry) {
        root.classList.add('is-portfolio-entry-animate');
      }
    });
  });

  window.setTimeout(() => {
    finishPortfolioLoadEntry(root);
  }, isWhiteEntry ? PORTFOLIO_LOAD_ENTRY_MS : PORTFOLIO_LOAD_ENTRY_MS - 40);
}
initSidebarCollapse();
initMobileProjectNav();

const footerShell = document.getElementById('footer-shell');
const footerMarqueeTrack = document.getElementById('footer-marquee-track');

// Must match --s in .footer-marquee-segment (tile repeats every 4 * --s).
const FOOTER_WAVE_TILE = 80;

function alignFooterMarqueeWidth(width) {
  return Math.max(FOOTER_WAVE_TILE, Math.ceil(width / FOOTER_WAVE_TILE) * FOOTER_WAVE_TILE);
}

function buildMarqueeSegment(targetWidth, track, segmentClass) {
  const segment = document.createElement('div');
  segment.className = segmentClass;
  segment.style.width = `${alignFooterMarqueeWidth(targetWidth)}px`;
  track.appendChild(segment);
  return segment;
}

function populateMarqueeTrack(track, shell, segmentClass) {
  if (!track) return;

  const marquee = track.parentElement;
  const width = marquee?.clientWidth || shell?.clientWidth || window.innerWidth;
  if (width <= 0) return;

  track.innerHTML = '';

  buildMarqueeSegment(width, track, segmentClass);
  const segmentB = buildMarqueeSegment(width, track, segmentClass);
  segmentB.setAttribute('aria-hidden', 'true');
}

function populateFooterMarquee() {
  populateMarqueeTrack(footerMarqueeTrack, footerShell, 'footer-marquee-segment');
}

populateFooterMarquee();
bindLayoutResizeSync();

const projectInfoBtnEl = document.getElementById('project-info-btn');
const projectInfoBtnStickyEl = document.getElementById('project-info-btn-sticky');
const projectInfoPanelHostEl = document.getElementById('project-info-panel-host');
const projectInfoPanelEl = document.getElementById('project-info-panel');
const projectInfoPanelCloseEl = document.getElementById('project-info-panel-close');
const projectInfoPanelImageEl = document.getElementById('project-info-panel-image');
const projectInfoPanelSummaryEl = document.getElementById('project-info-panel-summary');
const projectInfoPanelProseEl = document.getElementById('project-info-panel-prose');
const projectInfoPanelBodyEl = document.getElementById('project-info-panel-body');

let projectInfoPanelOpen = false;

function isProjectInfoPanelOpen() {
  return projectInfoPanelOpen;
}

function getProjectInfoParagraphs(project) {
  const name = project.name;
  return [
    `Discovery for ${name} started with stakeholder interviews, workflow shadowing, and a review of existing artifacts to understand where teams felt friction versus confidence.`,
    `Concept exploration moved quickly from sketches into clickable prototypes so we could test navigation, terminology, and information hierarchy before committing to visual polish.`,
    `Usability sessions surfaced patterns in how expert users scan dense interfaces—what they need at a glance versus what belongs in secondary panels or progressive disclosure.`,
    `Visual design balanced credibility in clinical or enterprise contexts with enough warmth that the product felt approachable during long sessions of use.`,
    `Component specs documented default, hover, focus, empty, and error states so engineering could implement consistently across breakpoints and input modalities.`,
    `Developer handoff included annotated flows, spacing tokens, and acceptance notes tied to research findings so implementation decisions stayed traceable.`,
    `After launch, feedback from telemetry and follow-up interviews informed refinements to layout density, copy, and the moments where users needed clearer system status.`,
  ];
}

function renderProjectInfoPanelProse(project) {
  return getProjectInfoParagraphs(project)
    .map((paragraph) => `<p class="text-summary summary-body project-info-panel__paragraph">${escapeHtml(paragraph)}</p>`)
    .join('');
}

function updateProjectInfoPanelContent(project) {
  if (!projectInfoPanelEl || !project) return;

  if (projectInfoPanelImageEl) {
    projectInfoPanelImageEl.innerHTML = renderHeroPanelContent(getProjectInfoImage(project), project, 0);
  }
  if (projectInfoPanelSummaryEl) {
    projectInfoPanelSummaryEl.innerHTML = formatProjectSummaryLead(getProjectInfoText(project));
  }
  if (projectInfoPanelProseEl) {
    projectInfoPanelProseEl.innerHTML = renderProjectInfoPanelProse(project);
  }
  refreshCustomScrollbar(projectInfoPanelBodyEl);
}

function setProjectInfoPanelExpanded(isExpanded) {
  projectInfoBtnEl?.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
  projectInfoBtnStickyEl?.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
}

function getProjectInfoPanelEdgeInset() {
  if (!projectInfoPanelEl) return 4;

  const value = getComputedStyle(projectInfoPanelEl)
    .getPropertyValue('--project-info-panel-edge-inset')
    .trim();
  const parsed = Number.parseFloat(value);
  return Number.isFinite(parsed) ? parsed : 4;
}

function syncProjectInfoPanelBounds() {
  if (!projectInfoPanelHostEl || !mainContentEl) return;

  const mainRect = mainContentEl.getBoundingClientRect();
  const edgeInset = getProjectInfoPanelEdgeInset();
  const isMobilePanel = window.matchMedia('(max-width: 560px)').matches;

  document.documentElement.style.setProperty(
    '--project-info-panel-host-top',
    `${Math.max(0, mainRect.top)}px`
  );
  document.documentElement.style.setProperty(
    '--project-info-panel-host-right',
    `${Math.max(0, window.innerWidth - mainRect.right)}px`
  );
  document.documentElement.style.setProperty(
    '--project-info-panel-host-bottom',
    `${Math.max(0, window.innerHeight - mainRect.bottom)}px`
  );
  document.documentElement.style.setProperty(
    '--project-info-panel-host-left',
    `${Math.max(0, mainRect.left)}px`
  );

  const panelWidth = Math.min(
    560,
    mainRect.width * 0.5,
    Math.max(240, mainRect.width - edgeInset * 2)
  );

  if (isMobilePanel) {
    document.documentElement.style.removeProperty('--project-info-panel-width');
  } else {
    document.documentElement.style.setProperty('--project-info-panel-width', `${panelWidth}px`);
  }
}

function openProjectInfoPanel() {
  const project = projects.find((p) => p.id === selectedId);
  if (!project || !isProjectUnlocked(project) || !projectInfoPanelEl || !projectInfoPanelHostEl) return;

  updateProjectInfoPanelContent(project);
  syncProjectInfoPanelBounds();

  projectInfoPanelOpen = true;
  projectInfoPanelHostEl.hidden = false;
  projectInfoPanelHostEl.setAttribute('aria-hidden', 'false');
  document.body.classList.add('is-project-info-panel-open');
  setProjectInfoPanelExpanded(true);

  requestAnimationFrame(() => {
    syncProjectInfoPanelBounds();
    projectInfoPanelEl.classList.add('is-visible');
    refreshCustomScrollbar(projectInfoPanelBodyEl);
  });
}

function closeProjectInfoPanel() {
  if (!projectInfoPanelEl || !projectInfoPanelHostEl || !projectInfoPanelOpen) return;

  projectInfoPanelOpen = false;
  projectInfoPanelEl.classList.remove('is-visible');
  document.body.classList.remove('is-project-info-panel-open');
  setProjectInfoPanelExpanded(false);

  window.setTimeout(() => {
    if (projectInfoPanelOpen || !projectInfoPanelHostEl) return;
    projectInfoPanelHostEl.hidden = true;
    projectInfoPanelHostEl.setAttribute('aria-hidden', 'true');
  }, 560);
}

function toggleProjectInfoPanel() {
  if (isProjectInfoPanelOpen()) {
    closeProjectInfoPanel();
  } else {
    openProjectInfoPanel();
  }
}

function initProjectInfoPanel() {
  if (!projectInfoPanelEl) return;

  const handleInfoButtonClick = (event) => {
    const button = event.target.closest('#project-info-btn, #project-info-btn-sticky');
    if (!button) return;

    event.preventDefault();
    toggleProjectInfoPanel();
  };

  mainContentEl?.addEventListener('click', handleInfoButtonClick);
  projectInfoPanelCloseEl?.addEventListener('click', closeProjectInfoPanel);

  const schedulePanelBoundsSync = () => {
    if (!projectInfoPanelOpen) return;
    requestAnimationFrame(syncProjectInfoPanelBounds);
  };

  registerViewportSync(schedulePanelBoundsSync);

  if (typeof ResizeObserver !== 'undefined' && mainContentEl) {
    const panelBoundsObserver = new ResizeObserver(schedulePanelBoundsSync);
    panelBoundsObserver.observe(mainContentEl);
    if (sidebarEl) panelBoundsObserver.observe(sidebarEl);
  }
}

const logofolioToggleEls = document.querySelectorAll('.view-toggle--logofolio');
const logofolioBtnMono = document.getElementById('logofolio-btn-mono');
const logofolioBtnColor = document.getElementById('logofolio-btn-color');
const logofolioBtnMonoSticky = document.getElementById('logofolio-btn-mono-sticky');
const logofolioBtnColorSticky = document.getElementById('logofolio-btn-color-sticky');
const projectGallery = document.getElementById('project-gallery');
const projectText = document.getElementById('project-text');

let logofolioColorMode = 'mono';

const GALLERY_IMAGE_COUNT = 10;
const SKETCHBOOK_GALLERY_IMAGE_COUNT = GALLERY_IMAGE_COUNT * 4;

const PROJECT_THEME_CARDS = [
  { title: 'Design Strategy', summary: 'Problem framing, research synthesis, and direction-setting before pixels.' },
  { title: 'User Testing', summary: 'Prototype validation with target users in realistic task scenarios.' },
  { title: 'Rapid Prototyping', summary: 'High-fidelity flows and interaction models built for fast iteration.' },
  { title: 'Developer Handoff', summary: 'Specs, component notes, and QA support for clean implementation.' },
];

const THEME_CARD_MARKS = [
  '<svg class="theme-card__mark" viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="21" fill="none" stroke="currentColor" stroke-width="3.5"/></svg>',
  '<svg class="theme-card__mark" viewBox="0 0 64 64" aria-hidden="true"><rect x="14" y="24" width="36" height="5" rx="1.5" fill="currentColor"/><rect x="14" y="34" width="28" height="5" rx="1.5" fill="currentColor"/><rect x="14" y="44" width="20" height="5" rx="1.5" fill="currentColor"/></svg>',
  '<svg class="theme-card__mark" viewBox="0 0 64 64" aria-hidden="true"><path d="M32 16V48M16 32H48" stroke="currentColor" stroke-width="4.5" stroke-linecap="square"/></svg>',
  '<svg class="theme-card__mark" viewBox="0 0 64 64" aria-hidden="true"><rect x="16" y="16" width="14" height="14" rx="2" fill="currentColor"/><rect x="34" y="16" width="14" height="14" rx="2" fill="currentColor"/><rect x="16" y="34" width="14" height="14" rx="2" fill="currentColor"/><rect x="34" y="34" width="14" height="14" rx="2" fill="currentColor"/></svg>',
];

const SKETCHBOOK_PANEL_HEIGHTS = ['h-sm', 'h-md', 'h-lg', 'h-xl', 'h-md', 'h-lg', 'h-sm', 'h-xl', 'h-md', 'h-lg'];

const LOGOFOLIO_ITEM_COUNT = 60;
const LOGOFOLIO_COLUMN_COUNT = 3;
const LOGOFOLIO_ROW_COUNT = 20;

const LOGOFOLIO_SUMMARY_PLACEHOLDER =
  'This identity system centers on a modular wordmark built for clinical and digital touchpoints. Color, spacing, and secondary marks were defined to scale across product, packaging, and investor materials.';

const LOGOFOLIO_SAMPLE_ENTRIES = [
  { company: 'Medtronic', industry: 'Med-tech' },
  { company: 'Altera', industry: 'Cardiovascular' },
  { company: 'Formlabs', industry: 'Additive Manufacturing' },
  { company: 'Brainlab', industry: 'Neurosurgery' },
  { company: 'Prism Medical', industry: 'Electrophysiology' },
  { company: 'Boston Dynamics', industry: 'Robotics' },
  { company: 'Nothing', industry: 'Consumer Tech' },
  { company: 'Stripe', industry: 'Fintech' },
  { company: 'Aesop', industry: 'Retail' },
  { company: 'Patagonia', industry: 'Apparel' },
  { company: 'Sonos', industry: 'Audio' },
  { company: 'WHOOP', industry: 'Wearables' },
  { company: 'Rivian', industry: 'Automotive' },
  { company: 'Oculus', industry: 'VR / AR' },
  { company: 'Peloton', industry: 'Fitness' },
  { company: 'Square', industry: 'Payments' },
  { company: 'Allbirds', industry: 'Footwear' },
  { company: 'Warby Parker', industry: 'Eyewear' },
  { company: 'Casper', industry: 'Home' },
  { company: 'Away', industry: 'Travel' },
];

const LOGOFOLIO_LOGO_MARKS = [
  '<svg class="logofolio-tile__mark" viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="21" fill="none" stroke="currentColor" stroke-width="3.5"/></svg>',
  '<svg class="logofolio-tile__mark" viewBox="0 0 64 64" aria-hidden="true"><rect x="18" y="18" width="28" height="28" rx="3" fill="currentColor" transform="rotate(45 32 32)"/></svg>',
  '<svg class="logofolio-tile__mark" viewBox="0 0 64 64" aria-hidden="true"><rect x="14" y="24" width="36" height="5" rx="1.5" fill="currentColor"/><rect x="14" y="34" width="28" height="5" rx="1.5" fill="currentColor"/><rect x="14" y="44" width="20" height="5" rx="1.5" fill="currentColor"/></svg>',
  '<svg class="logofolio-tile__mark" viewBox="0 0 64 64" aria-hidden="true"><circle cx="24" cy="32" r="12" fill="currentColor"/><circle cx="40" cy="32" r="12" fill="none" stroke="currentColor" stroke-width="3.5"/></svg>',
  '<svg class="logofolio-tile__mark" viewBox="0 0 64 64" aria-hidden="true"><path d="M32 14L50 48H14L32 14Z" fill="currentColor"/></svg>',
  '<svg class="logofolio-tile__mark" viewBox="0 0 64 64" aria-hidden="true"><path d="M32 16V48M16 32H48" stroke="currentColor" stroke-width="4.5" stroke-linecap="square"/></svg>',
  '<svg class="logofolio-tile__mark" viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="18" fill="none" stroke="currentColor" stroke-width="3.5"/><circle cx="32" cy="32" r="5" fill="currentColor"/></svg>',
  '<svg class="logofolio-tile__mark" viewBox="0 0 64 64" aria-hidden="true"><path d="M18 42L32 18L46 42H18Z" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linejoin="round"/></svg>',
  '<svg class="logofolio-tile__mark" viewBox="0 0 64 64" aria-hidden="true"><rect x="16" y="16" width="14" height="14" rx="2" fill="currentColor"/><rect x="34" y="16" width="14" height="14" rx="2" fill="currentColor"/><rect x="16" y="34" width="14" height="14" rx="2" fill="currentColor"/><rect x="34" y="34" width="14" height="14" rx="2" fill="currentColor"/></svg>',
  '<svg class="logofolio-tile__mark" viewBox="0 0 64 64" aria-hidden="true"><path d="M32 12L52 22V42L32 52L12 42V22L32 12Z" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linejoin="round"/></svg>',
  '<svg class="logofolio-tile__mark" viewBox="0 0 64 64" aria-hidden="true"><path d="M14 40C24 24 40 24 50 40" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"/></svg>',
  '<svg class="logofolio-tile__mark" viewBox="0 0 64 64" aria-hidden="true"><rect x="14" y="20" width="36" height="24" rx="4" fill="none" stroke="currentColor" stroke-width="3.5"/><path d="M22 32H42" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/></svg>',
  '<svg class="logofolio-tile__mark" viewBox="0 0 64 64" aria-hidden="true"><path d="M20 44L32 16L44 44H28L32 34L36 44H20Z" fill="currentColor"/></svg>',
  '<svg class="logofolio-tile__mark" viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="28" r="10" fill="currentColor"/><path d="M18 46C22 38 54 38 58 46" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/></svg>',
  '<svg class="logofolio-tile__mark" viewBox="0 0 64 64" aria-hidden="true"><path d="M16 32H48M32 16V48" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/><circle cx="32" cy="32" r="18" fill="none" stroke="currentColor" stroke-width="3.5"/></svg>',
  '<svg class="logofolio-tile__mark" viewBox="0 0 64 64" aria-hidden="true"><path d="M16 46L32 18L48 46Z" fill="none" stroke="currentColor" stroke-width="3.5"/><path d="M22 38H42" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/></svg>',
  '<svg class="logofolio-tile__mark" viewBox="0 0 64 64" aria-hidden="true"><rect x="18" y="18" width="28" height="28" fill="none" stroke="currentColor" stroke-width="3.5"/><rect x="24" y="24" width="16" height="16" fill="currentColor"/></svg>',
  '<svg class="logofolio-tile__mark" viewBox="0 0 64 64" aria-hidden="true"><path d="M18 22H46V28H18V22ZM18 36H38V42H18V36Z" fill="currentColor"/></svg>',
  '<svg class="logofolio-tile__mark" viewBox="0 0 64 64" aria-hidden="true"><path d="M32 14A18 18 0 1 1 32 50A18 18 0 1 1 32 14Z" fill="none" stroke="currentColor" stroke-width="3.5"/><path d="M32 22V42" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/></svg>',
  '<svg class="logofolio-tile__mark" viewBox="0 0 64 64" aria-hidden="true"><path d="M14 32C14 22 22 16 32 16C42 16 50 22 50 32C50 42 42 48 32 48" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/></svg>',
];

function getLogofolioLogoMark(index) {
  return LOGOFOLIO_LOGO_MARKS[index % LOGOFOLIO_LOGO_MARKS.length];
}

function getSketchbookPanelHeightClass(index) {
  return SKETCHBOOK_PANEL_HEIGHTS[index % SKETCHBOOK_PANEL_HEIGHTS.length];
}

function getLogofolioEntries(project) {
  if (project?.logofolio?.length) return project.logofolio.slice(0, LOGOFOLIO_ITEM_COUNT);

  return Array.from({ length: LOGOFOLIO_ITEM_COUNT }, (_, index) => {
    const sample = LOGOFOLIO_SAMPLE_ENTRIES[index % LOGOFOLIO_SAMPLE_ENTRIES.length];
    return { ...sample };
  });
}

const LOGOFOLIO_VINTAGE_PALETTE = [
  '#3D5244',
  '#4A6350',
  '#5C6B52',
  '#9B4E3C',
  '#A65D47',
  '#7A4A3A',
  '#C4A35A',
  '#B8956B',
  '#8B7355',
  '#5A6B7D',
  '#4E6070',
  '#6B7F8C',
  '#B07D7D',
  '#A87B7B',
  '#9E7373',
  '#6D5A4E',
  '#556B5E',
  '#7D6B5A',
  '#8C6B5C',
  '#627A72',
];

function getLogofolioSwatchColors(tileIndex) {
  const palette = LOGOFOLIO_VINTAGE_PALETTE;
  const paletteLength = palette.length;

  return Array.from({ length: 5 }, (_, swatchIndex) => {
    const index = (tileIndex * 3 + swatchIndex * 7) % paletteLength;
    return palette[index];
  });
}

function renderLogofolioMetaRow(label, value) {
  const summaryClass = label === 'Summary' ? ' logofolio-meta-row--summary' : '';
  return `
    <div class="logofolio-meta-row${summaryClass}">
      <span class="text-label meta-label">${label}</span>
      <span class="text-ui-sm meta-value">${value}</span>
    </div>
  `;
}

function renderLogofolioMetaSplitRow(leftLabel, leftValue, rightLabel, rightValue) {
  return `
    <div class="logofolio-meta-row logofolio-meta-row--split">
      <div class="logofolio-meta-split__cell logofolio-meta-split__cell--start">
        <span class="text-label meta-label">${leftLabel}</span>
        <span class="text-ui-sm meta-value">${leftValue}</span>
      </div>
      <div class="logofolio-meta-split__cell logofolio-meta-split__cell--end">
        <span class="text-label meta-label">${rightLabel}</span>
        <span class="text-ui-sm meta-value">${rightValue}</span>
      </div>
    </div>
  `;
}

function renderLogofolioTileContent(entry, project, index) {
  if (entry?.src) {
    return `<img
      class="logofolio-tile__image"
      src="${entry.src}"
      alt="${escapeHtml(entry.alt || `${entry.company} logo`)}"
      loading="lazy"
      decoding="async"
    />`;
  }

  const label = escapeHtml(entry?.company || `${project.name} — logo ${index + 1}`);
  return `<div class="logofolio-tile__placeholder" role="img" aria-label="${label}">${getLogofolioLogoMark(index)}</div>`;
}

function getLogofolioHeroImage(project) {
  if (project?.logofolioHero?.src) return project.logofolioHero;
  if (project?.gallery?.[0]?.src) return project.gallery[0];
  return null;
}

function renderLogofolioHero(project, { eagerLoad = false } = {}) {
  const heroImage = getLogofolioHeroImage(project);
  const label = heroImage?.alt || `${project.name} — hero`;

  const frameContent = heroImage?.src
    ? `<img
      src="${heroImage.src}"
      alt="${escapeHtml(heroImage.alt || label)}"
      loading="${eagerLoad ? 'eager' : 'lazy'}"
      decoding="async"
    />`
    : `<div class="hero-placeholder is-scroll-reveal-pending" role="img" aria-label="${escapeHtml(label)}">${logofolioHeroPlaceholderIcon}</div>`;

  return `
    <div class="logofolio-hero">
      <div class="logofolio-hero__frame hero-panel">
        ${frameContent}
      </div>
    </div>
  `;
}

function renderLogofolioGalleryItem(entry, project, index) {
  const number = String(index + 1).padStart(2, '0');
  const swatchColors = getLogofolioSwatchColors(index);
  const frameBg = swatchColors[0];
  const markColor = swatchColors[1];

  return `
    <article class="gallery-item gallery-item--logofolio">
      <div class="logofolio-tile">
        <span class="logofolio-tile__number text-label">${number}</span>
        <div class="logofolio-tile__frame" style="--logofolio-frame-bg: ${frameBg}; --logofolio-mark-color: ${markColor};">
          ${renderLogofolioTileContent(entry, project, index)}
        </div>
      </div>
      <div class="logofolio-meta-box">
        <div class="logofolio-meta">
          ${renderLogofolioMetaSplitRow('Company', entry.company, 'Industry', entry.industry)}
          ${renderLogofolioMetaRow('Summary', entry.summary || LOGOFOLIO_SUMMARY_PLACEHOLDER)}
        </div>
      </div>
    </article>
  `;
}

const galleryImageCaptions = [
  'Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Description: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  'Description: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
  'Description: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
  'Description: Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.',
  'Description: Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
  'Description: Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.',
  'Description: Consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt.',
  'Description: Ut labore et dolore magnam aliquam quaerat voluptatem ut enim ad minima.',
  'Description: Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse.',
];

function getProjectGalleryImages(project) {
  if (isShowreelProject(project)) return [];
  if (project.gallery?.length) return project.gallery;

  const count = isSketchbookProject(project) ? SKETCHBOOK_GALLERY_IMAGE_COUNT : GALLERY_IMAGE_COUNT;

  return Array.from({ length: count }, (_, index) => ({
    alt: `${project.name} — gallery image ${index + 1}`,
    caption: galleryImageCaptions[index % galleryImageCaptions.length],
  }));
}

function renderThemeCardsRow() {
  const cards = PROJECT_THEME_CARDS.map((theme, index) => `
      <article class="theme-card">
        <div class="theme-card__frame">
          <div class="theme-card__placeholder" aria-hidden="true">
            ${THEME_CARD_MARKS[index % THEME_CARD_MARKS.length]}
          </div>
        </div>
        <div class="theme-card__meta-box">
          <div class="theme-card__meta">
            <div class="theme-card__title text-ui-sm">${escapeHtml(theme.title)}</div>
            <p class="text-caption theme-card__summary">${escapeHtml(theme.summary)}</p>
          </div>
        </div>
      </article>
    `).join('');

  return `<div class="theme-cards-row">${cards}</div>`;
}

function renderGalleryMediaFooter(caption, copyUrl) {
  const safeCaption = escapeHtml(caption || '');
  const safeCopyUrl = escapeHtml(copyUrl || '');

  return `
    <footer class="gallery-media-footer">
      <button type="button" class="gallery-copy-link text-ui-sm" data-copy-url="${safeCopyUrl}" aria-label="Copy link">
        <span class="gallery-copy-link__label">Copy link</span>
      </button>
      ${safeCaption ? `<p class="text-caption gallery-caption">${safeCaption}</p>` : ''}
    </footer>
  `;
}

function copyGalleryLink(text) {
  if (navigator.clipboard?.writeText) {
    return navigator.clipboard.writeText(text).catch(() => copyTextFallback(text));
  }

  return Promise.resolve(copyTextFallback(text));
}

function bindGalleryCopyLinks(root = projectGallery) {
  if (!root) return;

  root.querySelectorAll('.gallery-copy-link:not([data-copy-bound])').forEach((button) => {
    button.dataset.copyBound = 'true';
    const labelEl = button.querySelector('.gallery-copy-link__label');
    const defaultLabel = labelEl?.textContent?.trim() || 'Copy link';
    let copiedTimeout;

    const showCopiedState = () => {
      button.classList.add('is-copied');
      if (labelEl) labelEl.textContent = 'Copied';
      clearTimeout(copiedTimeout);
      copiedTimeout = window.setTimeout(() => {
        button.classList.remove('is-copied');
        if (labelEl) labelEl.textContent = defaultLabel;
      }, 1000);
    };

    button.addEventListener('click', (event) => {
      event.preventDefault();
      if (button.classList.contains('is-copied')) return;
      const url = button.dataset.copyUrl || window.location.href;
      showCopiedState();
      void copyGalleryLink(url);
    });
  });
}

let galleryPlaceholderRevealObserver;

function initGalleryPlaceholderReveal() {
  if (!projectGallery || projectGallery.hidden) return;

  galleryPlaceholderRevealObserver?.disconnect();

  const placeholders = projectGallery.querySelectorAll('.hero-placeholder.is-scroll-reveal-pending:not(.is-revealed)');
  if (!placeholders.length) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion || typeof IntersectionObserver === 'undefined') {
    placeholders.forEach((placeholder) => placeholder.classList.add('is-revealed'));
    return;
  }

  galleryPlaceholderRevealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-revealed');
        galleryPlaceholderRevealObserver.unobserve(entry.target);
      });
    },
    {
      root: mainContentEl,
      rootMargin: '0px 0px -6% 0px',
      threshold: 0.08,
    }
  );

  placeholders.forEach((placeholder) => galleryPlaceholderRevealObserver.observe(placeholder));
}

function renderGallery(project = projects.find((p) => p.id === selectedId)) {
  if (!projectGallery || !project) return;

  const sketchbookLayout = isSketchbookProject(project);
  const logofolioLayout = isLogofolioProject(project);
  const showreelLayout = isShowreelProject(project);
  const eagerLoad = isPortfolioEntryFromLanding();

  projectGallery.classList.toggle('project-gallery--sketchbook', sketchbookLayout);
  projectGallery.classList.toggle('project-gallery--logofolio', logofolioLayout);
  projectGallery.classList.toggle('project-gallery--showreel', showreelLayout);

  if (showreelLayout) {
    projectGallery.innerHTML = '';
    return;
  }

  if (logofolioLayout) {
    const entries = getLogofolioEntries(project);
    const gridItems = entries
      .map((entry, index) => renderLogofolioGalleryItem(entry, project, index))
      .join('');

    projectGallery.innerHTML = `
      <div class="logofolio-gallery-layout">
        ${renderLogofolioHero(project, { eagerLoad })}
        <div class="logofolio-gallery-grid">
          ${gridItems}
        </div>
      </div>
    `;
  } else {
    const images = getProjectGalleryImages(project);
    const themeCards = shouldShowThemeCards(project) ? renderThemeCardsRow() : '';

    projectGallery.innerHTML =
      themeCards +
      images
        .map((image, index) => {
          const panelClasses = sketchbookLayout
            ? `hero-panel hero-panel--sketchbook hero-panel--${getSketchbookPanelHeightClass(index)}`
            : 'hero-panel';

          return `
    <div class="gallery-item${sketchbookLayout ? ' gallery-item--sketchbook' : ''}"${sketchbookLayout ? ` data-gallery-index="${index}"` : ''}>
      <div class="${panelClasses}"${sketchbookLayout ? ' role="button" tabindex="0"' : ''}>
        ${renderHeroPanelContent(image, project, index, { revealOnScroll: !image?.src, eagerLoad })}
      </div>
      ${!sketchbookLayout && image.caption ? `<p class="text-caption gallery-caption">${image.caption}</p>` : ''}
    </div>
  `;
        })
        .join('');
  }

  bindGalleryCopyLinks(projectGallery);
  initGalleryPlaceholderReveal();
  refreshCustomScrollbar(mainContentEl);
}

const sketchbookLightboxEl = document.getElementById('sketchbook-lightbox');
const sketchbookLightboxBackdropEl = document.getElementById('sketchbook-lightbox-backdrop');
const sketchbookLightboxCloseEl = document.getElementById('sketchbook-lightbox-close');
const sketchbookLightboxPrevEl = document.getElementById('sketchbook-lightbox-prev');
const sketchbookLightboxNextEl = document.getElementById('sketchbook-lightbox-next');
const sketchbookLightboxContentEl = document.getElementById('sketchbook-lightbox-content');
const sketchbookLightboxCounterEl = document.getElementById('sketchbook-lightbox-counter');

let sketchbookLightboxIndex = 0;
let sketchbookLightboxScrollTop = 0;
let sketchbookLightboxTriggerEl = null;

function isSketchbookLightboxOpen() {
  return Boolean(sketchbookLightboxEl && !sketchbookLightboxEl.hidden);
}

function renderSketchbookLightboxFigure(image, project, index) {
  if (!sketchbookLightboxContentEl) return;

  if (image?.src) {
    sketchbookLightboxContentEl.innerHTML = `<img
      class="sketchbook-lightbox__image"
      src="${image.src}"
      alt="${escapeHtml(image.alt || `${project.name} — gallery image ${index + 1}`)}"
      decoding="async"
    />`;
    return;
  }

  const label = escapeHtml(image?.alt || `${project.name} — gallery image ${index + 1}`);
  sketchbookLightboxContentEl.innerHTML = `<div class="sketchbook-lightbox__placeholder hero-placeholder is-revealed" role="img" aria-label="${label}">${heroPlaceholderIcon}</div>`;
}

function updateSketchbookLightboxCounter(index, total) {
  if (!sketchbookLightboxCounterEl) return;
  sketchbookLightboxCounterEl.textContent = `Image: ${index + 1}/${total}`;
}

function updateSketchbookLightboxImage(index) {
  const project = projects.find((p) => p.id === selectedId);
  if (!project || !isSketchbookProject(project)) return;

  const images = getProjectGalleryImages(project);
  if (!images.length) return;

  const normalizedIndex = ((index % images.length) + images.length) % images.length;
  sketchbookLightboxIndex = normalizedIndex;
  renderSketchbookLightboxFigure(images[normalizedIndex], project, normalizedIndex);
  updateSketchbookLightboxCounter(normalizedIndex, images.length);
}

function lockSketchbookLightboxScroll() {
  if (!mainContentEl) return;
  sketchbookLightboxScrollTop = mainContentEl.scrollTop;
  document.body.classList.add('is-sketchbook-lightbox-open');
}

function unlockSketchbookLightboxScroll() {
  document.body.classList.remove('is-sketchbook-lightbox-open');
  if (mainContentEl) {
    mainContentEl.scrollTop = sketchbookLightboxScrollTop;
  }
}

function openSketchbookLightbox(index, triggerEl = null) {
  if (!sketchbookLightboxEl) return;

  const project = projects.find((p) => p.id === selectedId);
  if (!project || !isSketchbookProject(project)) return;

  sketchbookLightboxTriggerEl = triggerEl;
  updateSketchbookLightboxImage(index);
  lockSketchbookLightboxScroll();

  sketchbookLightboxEl.hidden = false;
  sketchbookLightboxEl.setAttribute('aria-hidden', 'false');
  sketchbookLightboxCloseEl?.focus();
}

function closeSketchbookLightbox() {
  if (!sketchbookLightboxEl || sketchbookLightboxEl.hidden) return;

  sketchbookLightboxEl.hidden = true;
  sketchbookLightboxEl.setAttribute('aria-hidden', 'true');
  unlockSketchbookLightboxScroll();

  if (sketchbookLightboxTriggerEl instanceof HTMLElement) {
    sketchbookLightboxTriggerEl.focus({ preventScroll: true });
  }
  sketchbookLightboxTriggerEl = null;
}

function navigateSketchbookLightbox(direction) {
  if (!isSketchbookLightboxOpen()) return;
  updateSketchbookLightboxImage(sketchbookLightboxIndex + direction);
}

function initSketchbookLightbox() {
  if (!projectGallery || !sketchbookLightboxEl) return;

  projectGallery.addEventListener('click', (event) => {
    if (!projectGallery.classList.contains('project-gallery--sketchbook')) return;

    const panel = event.target.closest('.gallery-item--sketchbook .hero-panel');
    if (!panel) return;

    const item = panel.closest('.gallery-item--sketchbook');
    if (!item) return;

    const index = Number.parseInt(item.dataset.galleryIndex ?? '', 10);
    if (Number.isNaN(index)) return;

    event.preventDefault();
    openSketchbookLightbox(index, panel);
  });

  sketchbookLightboxBackdropEl?.addEventListener('click', closeSketchbookLightbox);
  sketchbookLightboxCloseEl?.addEventListener('click', (event) => {
    event.preventDefault();
    closeSketchbookLightbox();
  });
  sketchbookLightboxPrevEl?.addEventListener('click', (event) => {
    event.stopPropagation();
    navigateSketchbookLightbox(-1);
  });
  sketchbookLightboxNextEl?.addEventListener('click', (event) => {
    event.stopPropagation();
    navigateSketchbookLightbox(1);
  });

  sketchbookLightboxEl.addEventListener('click', (event) => {
    if (event.target === sketchbookLightboxEl) {
      closeSketchbookLightbox();
    }
  });
}

const showreelLightboxEl = document.getElementById('showreel-lightbox');
const showreelLightboxBackdropEl = document.getElementById('showreel-lightbox-backdrop');
const showreelLightboxCloseEl = document.getElementById('showreel-lightbox-close');
const showreelLightboxContentEl = document.getElementById('showreel-lightbox-content');
const showreelLightboxCaptionEl = document.getElementById('showreel-lightbox-caption');
const showreelLightboxTitleEl = document.getElementById('showreel-lightbox-title');

let showreelLightboxScrollTop = 0;
let showreelLightboxTriggerEl = null;
let showreelLightboxVideoEl = null;

function getShowreelProject() {
  return projects.find((project) => isShowreelProject(project));
}

function isShowreelLightboxOpen() {
  return Boolean(showreelLightboxEl && !showreelLightboxEl.hidden);
}

function renderShowreelLightboxVideo(project) {
  if (!showreelLightboxContentEl) return;

  if (project?.videoUrl) {
    showreelLightboxContentEl.innerHTML = `<video
      class="showreel-lightbox__video"
      src="${escapeHtml(project.videoUrl)}"
      controls
      playsinline
      preload="metadata"
      aria-label="${escapeHtml(project.name)} video"
    ></video>`;
    showreelLightboxVideoEl = showreelLightboxContentEl.querySelector('.showreel-lightbox__video');
    return;
  }

  showreelLightboxVideoEl = null;
  const label = escapeHtml(`${project?.name || 'Showreel'} video`);
  showreelLightboxContentEl.innerHTML = `<div class="showreel-lightbox__placeholder hero-placeholder is-revealed" role="img" aria-label="${label}">${heroPlaceholderIcon}</div>`;
}

function lockShowreelLightboxScroll() {
  if (!mainContentEl) return;
  showreelLightboxScrollTop = mainContentEl.scrollTop;
  document.body.classList.add('is-showreel-lightbox-open');
}

function unlockShowreelLightboxScroll() {
  document.body.classList.remove('is-showreel-lightbox-open');
  if (mainContentEl) {
    mainContentEl.scrollTop = showreelLightboxScrollTop;
  }
}

function pauseShowreelLightboxVideo() {
  if (!(showreelLightboxVideoEl instanceof HTMLVideoElement)) return;
  showreelLightboxVideoEl.pause();
  showreelLightboxVideoEl.currentTime = 0;
}

function openShowreelLightbox(triggerEl = null) {
  if (!showreelLightboxEl) return;

  const project = getShowreelProject();
  if (!project) return;

  closeSketchbookLightbox();
  showreelLightboxTriggerEl = triggerEl;
  renderShowreelLightboxVideo(project);

  if (showreelLightboxTitleEl) {
    showreelLightboxTitleEl.textContent = project.name;
  }

  if (showreelLightboxCaptionEl) {
    showreelLightboxCaptionEl.textContent = project.videoCaption || '';
  }

  lockShowreelLightboxScroll();
  showreelLightboxEl.hidden = false;
  showreelLightboxEl.setAttribute('aria-hidden', 'false');
  showreelLightboxCloseEl?.focus();
}

function closeShowreelLightbox() {
  if (!showreelLightboxEl || showreelLightboxEl.hidden) return;

  pauseShowreelLightboxVideo();
  showreelLightboxEl.hidden = true;
  showreelLightboxEl.setAttribute('aria-hidden', 'true');
  unlockShowreelLightboxScroll();

  if (showreelLightboxContentEl) {
    showreelLightboxContentEl.innerHTML = '';
  }
  showreelLightboxVideoEl = null;

  if (showreelLightboxTriggerEl instanceof HTMLElement) {
    showreelLightboxTriggerEl.focus({ preventScroll: true });
  }
  showreelLightboxTriggerEl = null;
}

function initShowreelLightbox() {
  if (!showreelLightboxEl) return;

  showreelLightboxBackdropEl?.addEventListener('click', closeShowreelLightbox);
  showreelLightboxCloseEl?.addEventListener('click', (event) => {
    event.preventDefault();
    closeShowreelLightbox();
  });

  showreelLightboxEl.addEventListener('click', (event) => {
    if (event.target === showreelLightboxEl) {
      closeShowreelLightbox();
    }
  });
}

function setLogofolioColorMode(mode) {
  if (mode !== 'mono' && mode !== 'color') return;

  logofolioColorMode = mode;
  const isColor = mode === 'color';
  const project = projects.find((p) => p.id === selectedId);

  if (isLogofolioProject(project)) {
    mainContentEl?.classList.toggle('is-logofolio-mono', !isColor);
    mainContentEl?.classList.toggle('is-logofolio-color', isColor);
    mainContentEl?.setAttribute('data-logofolio-color-mode', mode);
  }

  logofolioToggleEls.forEach((toggle) => toggle.setAttribute('data-view', mode));
  logofolioBtnMono?.setAttribute('aria-pressed', !isColor);
  logofolioBtnColor?.setAttribute('aria-pressed', isColor);
  logofolioBtnMonoSticky?.setAttribute('aria-pressed', !isColor);
  logofolioBtnColorSticky?.setAttribute('aria-pressed', isColor);
}

function syncLogofolioColorModeChrome() {
  setLogofolioColorMode(logofolioColorMode);
}

function showProjectGallery() {
  projectGallery.classList.remove('is-hidden');
  projectGallery.hidden = false;
  projectText.classList.add('is-hidden');
  projectText.hidden = true;
  requestAnimationFrame(() => initGalleryPlaceholderReveal());
  syncStickyHeaderAlignHeight();
}

logofolioBtnMono?.addEventListener('click', () => setLogofolioColorMode('mono'));
logofolioBtnColor?.addEventListener('click', () => setLogofolioColorMode('color'));
logofolioBtnMonoSticky?.addEventListener('click', () => setLogofolioColorMode('mono'));
logofolioBtnColorSticky?.addEventListener('click', () => setLogofolioColorMode('color'));

showProjectGallery();
setLogofolioColorMode('mono');
initProjectInfoPanel();

projectLockSubmitEl?.addEventListener('click', attemptProjectUnlock);
projectLockPasswordEl?.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    attemptProjectUnlock();
  }
});

function initGlobalKeyboardHandlers() {
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      if (isShowreelLightboxOpen()) {
        event.preventDefault();
        closeShowreelLightbox();
        return;
      }

      if (isSketchbookLightboxOpen()) {
        event.preventDefault();
        closeSketchbookLightbox();
        return;
      }

      if (isProjectInfoPanelOpen()) {
        closeProjectInfoPanel();
        return;
      }

      if (projectInfoTooltipEl?.classList.contains('is-visible')) {
        hideProjectInfoTooltip();
      }

      return;
    }

    if (isSketchbookLightboxOpen()) {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        navigateSketchbookLightbox(-1);
        return;
      }

      if (event.key === 'ArrowRight') {
        event.preventDefault();
        navigateSketchbookLightbox(1);
      }

      return;
    }

    if (event.key !== 'ArrowUp' && event.key !== 'ArrowDown') return;
    if (shouldSkipProjectListKeyboardNav(event)) return;

    const direction = event.key === 'ArrowUp' ? -1 : 1;
    const moved = navigateFilteredProject(direction);

    if (moved || event.target.closest('.project-list, .project-item')) {
      event.preventDefault();
    }
  });
}

initTheme();
const refreshCursor = initCustomCursor();

function initMobileBrowserUiInset() {
  if (!window.matchMedia('(max-width: 900px)').matches) return;

  const sync = () => {
    const viewport = window.visualViewport;
    if (!viewport) return;

    const obscured = Math.max(0, window.innerHeight - viewport.height - viewport.offsetTop);
    const inset = Math.round(obscured);
    document.documentElement.style.setProperty('--mobile-browser-ui-inset', `${inset}px`);
  };

  sync();
  registerViewportSync(sync);
}

initMobileBrowserUiInset();
initEmailLink(refreshCursor);
renderProjectList();
selectProject('showreel');
initProjectIntroScroll();
initStickyHeaderAlignHeightSync();
initProjectListLabelCollisionSync();
initProjectTitleFit();
initCustomScrollbars();
initSketchbookLightbox();
initShowreelLightbox();
initGlobalKeyboardHandlers();
void initPortfolioLoadEntry();
