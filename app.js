const projects = [
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
    description:
      'Operator dashboard for monitoring and controlling bipedal robot locomotion in industrial environments.',
    summary:
      'Logofolio gives field operators a single dashboard for locomotion state, mission progress, and safety interlocks. Bipedal platforms introduce balance and terrain variables that traditional fleet UIs rarely surface well. Control affordances distinguish observation, assisted teleop, and autonomous modes with explicit state transitions. The dashboard reads as an industrial tool—dense when needed, quiet when the robot is stable.',
    metadata: [
      { label: 'Industry', value: 'Robotics' },
      { label: 'Technology', value: 'Motion Control UI' },
      { label: 'Current Company', value: 'Boston Dynamics' },
      { label: 'Role', value: 'Senior UX Designer' },
      { label: 'Platform', value: 'Operator Console' },
      { label: 'Tools', value: 'Figma, ProtoPie' },
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

const lockIcon = `<svg class="project-item-lock-icon" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
  <path d="M8.5 2C6.71 2 5.25 3.45 5.25 5.25V7.25H4.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h9c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25h-.75V5.25C11.75 3.45 10.29 2 8.5 2zm0 1.5c.97 0 1.75.78 1.75 1.75v2H6.75V5.25c0-.97.78-1.75 1.75-1.75z"/>
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

function renderHeroPanelContent(image, project, index, { revealOnScroll = false } = {}) {
  if (image?.src) {
    return `<img
          src="${image.src}"
          alt="${image.alt || `${project.name} — gallery image ${index + 1}`}"
          width="1200"
          height="577"
          loading="lazy"
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

  return `${project.description} The ${project.name} engagement focused on clarity and reducing cognitive load for expert users. Research and iteration shaped the layout into a calm, dependable interface.`;
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

function getProjectIcons(project) {
  return project.icon === 'sketchbook' ? sketchbookIcons : folderIcons;
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
let selectedId = 'affera';

const projectListEl = document.getElementById('project-list');
const projectNumberEl = document.getElementById('project-number');
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
const projectDescStickyEl = document.getElementById('project-desc-sticky');
const mainContentEl = document.getElementById('main-content');
const filterButtons = document.querySelectorAll('.filter-pill');

let projectIntroLastScrollTop = 0;
let projectIntroStickyResizeTimer;
let projectIntroStickyVisible = false;
let mobileChromeHidden = false;
let mobileChromeLastScrollTop = 0;

const MOBILE_CHROME_SCROLL_THRESHOLD = 8;
let stickyHeaderAlignResizeObserver;
let stickyHeaderExpandedSourceHeight = null;

const PROJECT_INTRO_STICKY_ENTER_OFFSET = 1;
const STICKY_HEADER_HEIGHT_OFFSET = 27;
const STICKY_HEADER_MOBILE_HEIGHT_OFFSET = 0;
const PROJECT_TITLE_FIT_MIN = 12;
const PROJECT_SUBHEAD_FIT_MIN = 12;
const PROJECT_SUBHEAD_FIT_MIN_MOBILE = 20;
const PROJECT_SUBHEAD_MOBILE_MQ = window.matchMedia('(max-width: 560px)');
const PROJECT_SUBHEAD_FIT_MAX_MOBILE = 38;

let projectTitleLastFitWidth = -1;
let projectTitleLastFitName = '';
let projectTitleFitGeneration = 0;

let projectSubheadLastFitWidth = -1;
let projectSubheadLastFitText = '';
let projectSubheadLastFitMode = '';
let projectSubheadFitGeneration = 0;

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

function splitProjectSubheadText(text) {
  const normalized = text.trim().replace(/\s+/g, ' ');
  if (!normalized) return ['', ''];

  const sentenceMatch = normalized.match(/^(.+?[.!?])\s+(.+)$/);
  if (sentenceMatch) {
    const [, first, second] = sentenceMatch;
    if (first.length >= normalized.length * 0.2 && second.length >= normalized.length * 0.15) {
      return [first.trim(), second.trim()];
    }
  }

  const words = normalized.split(' ');
  if (words.length < 2) return [normalized, ''];

  const target = normalized.length / 2;
  let bestIndex = 1;
  let bestDiff = Infinity;

  for (let i = 1; i < words.length; i += 1) {
    const line1 = words.slice(0, i).join(' ');
    const diff = Math.abs(line1.length - target);
    if (diff < bestDiff) {
      bestDiff = diff;
      bestIndex = i;
    }
  }

  return [words.slice(0, bestIndex).join(' '), words.slice(bestIndex).join(' ')];
}

function normalizeProjectSubheadText(text) {
  return text.trim().replace(/\s+/g, ' ');
}

function renderProjectSubhead(el, text) {
  if (!el) return;

  const normalized = normalizeProjectSubheadText(text);
  const mode = getProjectSubheadFitMode();
  el.dataset.subheadSource = text;
  el.dataset.subheadFitMode = mode;
  el.classList.toggle('project-desc--wrap', mode === 'mobile');
  el.replaceChildren();

  if (!normalized) return;

  if (mode === 'mobile') {
    const row = document.createElement('span');
    row.className = 'project-desc-line';

    const inner = document.createElement('span');
    inner.className = 'project-desc-line__text';
    inner.textContent = normalized;

    row.appendChild(inner);
    el.appendChild(row);
    return;
  }

  const [line1, line2] = splitProjectSubheadText(text);
  [line1, line2].forEach((lineText) => {
    if (!lineText) return;

    const row = document.createElement('span');
    row.className = 'project-desc-line';

    const inner = document.createElement('span');
    inner.className = 'project-desc-line__text';
    inner.textContent = lineText;

    row.appendChild(inner);
    el.appendChild(row);
  });
}

function ensureProjectSubheadRendered(el, text) {
  const mode = getProjectSubheadFitMode();
  const needsRender =
    !el.querySelector('.project-desc-line') ||
    el.dataset.subheadSource !== text ||
    el.dataset.subheadFitMode !== mode;

  if (needsRender) {
    renderProjectSubhead(el, text);
  }
}

function measureProjectSubheadMaxLineWidth(subhead, fontSizePx) {
  subhead.style.fontSize = `${fontSizePx}px`;
  const lines = subhead.querySelectorAll('.project-desc-line__text');
  let maxWidth = 0;

  lines.forEach((line) => {
    maxWidth = Math.max(maxWidth, line.getBoundingClientRect().width);
  });

  return maxWidth;
}

function measureProjectSubheadHorizontalOverflow(subhead, fontSizePx, availableWidth) {
  subhead.style.fontSize = `${fontSizePx}px`;
  subhead.style.width = `${availableWidth}px`;
  subhead.style.maxWidth = `${availableWidth}px`;

  let maxWidth = Math.ceil(subhead.scrollWidth);
  subhead.querySelectorAll('.project-desc-line__text').forEach((line) => {
    maxWidth = Math.max(maxWidth, Math.ceil(line.scrollWidth), Math.ceil(line.getBoundingClientRect().width));
  });

  return Math.max(0, maxWidth - availableWidth);
}

function fitProjectIntroSubheadMobile({ force = false } = {}) {
  if (!projectDescEl) return;

  const sourceText = projectDescEl.dataset.subheadSource?.trim() || projectDescEl.textContent.trim();
  if (!sourceText) return;

  ensureProjectSubheadRendered(projectDescEl, sourceText);

  const generation = ++projectSubheadFitGeneration;
  const availableWidth = Math.round(getProjectTitleFitWidth());
  if (availableWidth <= 0) return;
  if (
    !force &&
    availableWidth === projectSubheadLastFitWidth &&
    sourceText === projectSubheadLastFitText &&
    getProjectSubheadFitMode() === projectSubheadLastFitMode
  ) {
    return;
  }

  const subhead = projectDescEl;
  const computedMax = Math.round(parseFloat(getComputedStyle(subhead).fontSize)) || PROJECT_SUBHEAD_FIT_MAX_MOBILE;
  let min = PROJECT_SUBHEAD_FIT_MIN_MOBILE;
  let max = Math.max(PROJECT_SUBHEAD_FIT_MIN_MOBILE, Math.min(PROJECT_SUBHEAD_FIT_MAX_MOBILE, computedMax));
  let best = min;

  while (min <= max) {
    if (generation !== projectSubheadFitGeneration) return;

    const mid = Math.floor((min + max) / 2);
    const overflow = measureProjectSubheadHorizontalOverflow(subhead, mid, availableWidth);
    if (overflow <= 0) {
      best = mid;
      min = mid + 1;
    } else {
      max = mid - 1;
    }
  }

  if (generation !== projectSubheadFitGeneration) return;

  let fittedSize = best;
  while (
    fittedSize > PROJECT_SUBHEAD_FIT_MIN_MOBILE &&
    measureProjectSubheadHorizontalOverflow(subhead, fittedSize, availableWidth) > 0
  ) {
    fittedSize -= 1;
  }

  if (generation !== projectSubheadFitGeneration) return;

  subhead.style.fontSize = `${fittedSize}px`;
  subhead.style.width = `${availableWidth}px`;
  subhead.style.maxWidth = `${availableWidth}px`;
  projectSubheadLastFitWidth = availableWidth;
  projectSubheadLastFitText = sourceText;
  projectSubheadLastFitMode = getProjectSubheadFitMode();
}

function fitProjectIntroSubhead({ force = false } = {}) {
  if (!projectDescEl) return;

  const sourceText = projectDescEl.dataset.subheadSource?.trim() || projectDescEl.textContent.trim();
  if (!sourceText) return;

  if (getProjectSubheadFitMode() === 'mobile') {
    fitProjectIntroSubheadMobile({ force });
    return;
  }

  ensureProjectSubheadRendered(projectDescEl, sourceText);

  const generation = ++projectSubheadFitGeneration;
  const availableWidth = Math.round(getProjectTitleFitWidth());
  if (availableWidth <= 0) return;
  if (
    !force &&
    availableWidth === projectSubheadLastFitWidth &&
    sourceText === projectSubheadLastFitText &&
    getProjectSubheadFitMode() === projectSubheadLastFitMode
  ) {
    return;
  }

  const subhead = projectDescEl;
  subhead.style.width = '';
  let min = PROJECT_SUBHEAD_FIT_MIN;
  let max = Math.max(PROJECT_SUBHEAD_FIT_MIN, availableWidth);
  let best = min;

  while (min <= max) {
    if (generation !== projectSubheadFitGeneration) return;

    const mid = Math.floor((min + max) / 2);
    const width = measureProjectSubheadMaxLineWidth(subhead, mid);
    if (Math.ceil(width) <= availableWidth) {
      best = mid;
      min = mid + 1;
    } else {
      max = mid - 1;
    }
  }

  if (generation !== projectSubheadFitGeneration) return;

  let fittedSize = best;
  while (
    fittedSize > PROJECT_SUBHEAD_FIT_MIN &&
    Math.ceil(measureProjectSubheadMaxLineWidth(subhead, fittedSize)) > availableWidth
  ) {
    fittedSize -= 1;
  }

  if (generation !== projectSubheadFitGeneration) return;

  subhead.style.fontSize = `${fittedSize}px`;
  subhead.style.maxWidth = 'none';
  projectSubheadLastFitWidth = availableWidth;
  projectSubheadLastFitText = sourceText;
  projectSubheadLastFitMode = getProjectSubheadFitMode();
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
    fitProjectIntroSubhead({ force });
  });
}

function refitProjectIntroTitle() {
  projectTitleLastFitWidth = -1;
  projectTitleLastFitName = '';
  projectTitleFitGeneration += 1;
  projectSubheadLastFitWidth = -1;
  projectSubheadLastFitText = '';
  projectSubheadLastFitMode = '';
  projectSubheadFitGeneration += 1;
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      fitProjectIntroTitle({ force: true });
      fitProjectIntroSubhead({ force: true });
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
  fitProjectIntroSubhead({ force: true });

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

  window.addEventListener('resize', () => scheduleProjectTitleFit());

  const handleSubheadMobileMqChange = () => {
    projectSubheadLastFitWidth = -1;
    projectSubheadLastFitText = '';
    projectSubheadLastFitMode = '';
    scheduleProjectTitleFit({ force: true });
  };

  if (typeof PROJECT_SUBHEAD_MOBILE_MQ.addEventListener === 'function') {
    PROJECT_SUBHEAD_MOBILE_MQ.addEventListener('change', handleSubheadMobileMqChange);
  } else if (typeof PROJECT_SUBHEAD_MOBILE_MQ.addListener === 'function') {
    PROJECT_SUBHEAD_MOBILE_MQ.addListener(handleSubheadMobileMqChange);
  }

  const runForcedFit = () => {
    fitProjectIntroTitle({ force: true });
    fitProjectIntroSubhead({ force: true });
  };
  const barlowCondensedLoad = document.fonts?.load?.('800 16px "Barlow Condensed"');
  const barlowLoad = document.fonts?.load?.('500 16px Barlow');
  const subheadLoad = document.fonts?.load?.('600 16px "Saira Extra Condensed"');
  if (barlowCondensedLoad) {
    barlowCondensedLoad.then(runForcedFit).catch(runForcedFit);
  }
  if (barlowLoad) {
    barlowLoad.then(runForcedFit).catch(runForcedFit);
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

function shouldCacheStickyHeaderExpandedHeight() {
  if (isSidebarCollapsed()) return false;
  if (document.body.classList.contains('sidebar-desktop-closing')) return false;

  const threshold =
    parseInt(
      getComputedStyle(document.documentElement).getPropertyValue('--sidebar-filter-wrap-threshold'),
      10
    ) || 388;

  return getSidebarWidthPx() >= threshold;
}

function syncStickyHeaderAlignHeight() {
  if (!sidebarEl) return;

  if (isSidebarCollapsed()) {
    if (isSidebarMobileDropdown() && sidebarHeader) {
      const height = measureSidebarHeaderSourceHeight();
      if (height != null) {
        applyStickyHeaderAlignHeight(height);
      }
      return;
    }

    if (stickyHeaderExpandedSourceHeight != null) {
      applyStickyHeaderAlignHeight(stickyHeaderExpandedSourceHeight);
    }
    return;
  }

  if (!sidebarFiltersEl) return;

  const height = measureSidebarHeaderSourceHeight();
  if (height != null) {
    if (shouldCacheStickyHeaderExpandedHeight()) {
      stickyHeaderExpandedSourceHeight = height;
    }
    applyStickyHeaderAlignHeight(stickyHeaderExpandedSourceHeight ?? height);
  }
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

  window.addEventListener('resize', syncStickyHeaderAlignHeight);
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
    return;
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
  window.addEventListener('resize', () => {
    window.clearTimeout(projectIntroStickyResizeTimer);
    projectIntroStickyResizeTimer = window.setTimeout(() => {
      syncStickyHeaderAlignHeight();
      syncProjectIntroStickyFromScroll();
    }, 120);
  });
  syncProjectIntroStickyFromScroll();
}

function syncSketchbookProjectChrome(project) {
  const sketchbook = isSketchbookProject(project);

  mainContentEl?.classList.toggle('is-sketchbook-project', sketchbook);

  if (stickyHeaderHostEl) {
    stickyHeaderHostEl.hidden = sketchbook;
    if (sketchbook) {
      setProjectIntroStickyVisible(false, { instant: true });
    }
  }
}

function syncProjectIntroStickyContent(project) {
  if (!project) return;

  if (projectTitleStickyEl) projectTitleStickyEl.textContent = project.name;
  if (projectDescStickyEl) projectDescStickyEl.textContent = project.description;
}

function sortProjectsAlphabetically(list) {
  return [...list].sort((a, b) =>
    a.name.localeCompare(b.name, undefined, { sensitivity: 'base' })
  );
}

function projectMatchesFilter(project, filter) {
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

  return sortProjectsAlphabetically(filtered);
}

function formatProjectDisplayNumber(index) {
  return String(index + 1).padStart(2, '0');
}

function getProjectDisplayNumber(projectId) {
  const index = getFilteredProjects().findIndex((project) => project.id === projectId);
  if (index === -1) return '01';
  return formatProjectDisplayNumber(index);
}

function getProjectListLabel(project) {
  return project.tag ?? project.category;
}

function renderProjectListItem(project) {
  const icons = getProjectIcons(project);
  const isActive = project.id === selectedId;
  const categoryMarkup = isActive
    ? '<img class="project-item-starburst" src="assets/sunburst.svg" alt="" width="19" height="19" decoding="async" aria-hidden="true" />'
    : `<span class="text-list project-item-category">${getProjectListLabel(project)}</span>`;

  return `
    <div class="project-item${isActive ? ' active' : ''}${project.icon === 'sketchbook' ? ' project-item--sketchbook' : ''}" data-id="${project.id}" role="button" tabindex="0">
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

function bindProjectListItems() {
  projectListEl.querySelectorAll('.project-item').forEach((item) => {
    item.addEventListener('click', (e) => {
      if (e.target.closest('.project-item-info')) return;
      selectProject(item.dataset.id);
    });
    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        if (e.target.closest('.project-item-info')) return;
        selectProject(item.dataset.id);
      }
    });
  });
}

function renderProjectList() {
  projectListEl.innerHTML = getFilteredProjects()
    .map((project) => renderProjectListItem(project))
    .join('');

  bindProjectListItems();
  bindProjectInfoTooltips();
  scheduleProjectListLabelCollisionCheck();
  syncMobileProjectTabLabel();
  refreshCustomScrollbar(projectListEl);
}

function shouldSkipProjectListKeyboardNav(event) {
  const target = event.target;
  if (!(target instanceof Element)) return true;
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
  const filtered = getFilteredProjects();
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
  const filtered = getFilteredProjects();
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
  window.addEventListener('resize', repositionProjectInfoTooltip);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') hideProjectInfoTooltip();
  });

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
    renderMetadata(project.metadata, project.summary ?? project.description);
    if (isSketchbookProject(project)) {
      setDetailView('images');
    } else {
    const showImages = viewBtnImage?.getAttribute('aria-pressed') === 'true';
    setDetailView(showImages ? 'images' : 'text');
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
  resetProjectIntroScroll();
  selectedId = id;
  syncSketchbookProjectChrome(project);
  projectNumberEl.textContent = getProjectDisplayNumber(id);
  renderProjectTitle(projectTitleEl, project.name);
  renderProjectSubhead(projectDescEl, project.description);
  refitProjectIntroTitle();
  syncProjectIntroStickyContent(project);
  updateProjectAccess(project);
  renderGallery(project);
  renderProjectList();
  syncMobileProjectTabLabel();
  syncProjectNextCta();

  if (isSidebarMobileDropdown() && !isSidebarCollapsed()) {
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

  if (projectNumberEl) {
    projectNumberEl.textContent = getProjectDisplayNumber(selectedId);
  }
    renderProjectList();
  syncProjectNextCta();
}

filterButtons.forEach((btn) => {
  btn.addEventListener('click', () => setFilter(btn.dataset.filter));
});

document.addEventListener('keydown', (e) => {
  if (e.key !== 'ArrowUp' && e.key !== 'ArrowDown') return;
  if (shouldSkipProjectListKeyboardNav(e)) return;

  const direction = e.key === 'ArrowUp' ? -1 : 1;
  const moved = navigateFilteredProject(direction);

  if (moved || e.target.closest('.project-list, .project-item')) {
    e.preventDefault();
  }
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
  applyTheme('dark');
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
const topBannerShellEl = document.getElementById('top-banner-shell');
const sidebarMobilePanelContentEl = document.getElementById('sidebar-mobile-panel-content');
const sidebarReopenTab = document.getElementById('sidebar-reopen-tab');
const bodyEl = document.querySelector('.body');
const SIDEBAR_MIN = 220;
const SIDEBAR_MAX_RATIO = 0.55;
const SIDEBAR_SNAP_THRESHOLD = 10;
const SIDEBAR_SNAP_ESCAPE = 10;
const SIDEBAR_COLLAPSED_KEY = 'sidebar-collapsed';
const SIDEBAR_COLLAPSE_MQ = window.matchMedia('(min-width: 901px)');
const SIDEBAR_MOBILE_MQ = window.matchMedia('(max-width: 560px)');
const SIDEBAR_MOBILE_PANEL_MS = 1000;
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

  window.addEventListener('resize', scheduleProjectListLabelCollisionCheck);
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

  if (!isSidebarCollapsed() && !isSidebarMobileDropdown()) {
    setSidebarWidth(defaultWidth);
  }

  return defaultWidth;
}

function isSidebarCollapsed() {
  return document.body.classList.contains('sidebar-collapsed');
}

function isSidebarMobileDropdown() {
  return SIDEBAR_MOBILE_MQ.matches;
}

function isSidebarCollapseEnabled() {
  return true;
}

function isPortfolioEntryFromLanding() {
  return document.documentElement.classList.contains('is-portfolio-entry');
}

function shouldSidebarStartCollapsed() {
  return isSidebarMobileDropdown() && isPortfolioEntryFromLanding();
}

function syncMobileProjectTabLabel() {
  if (!sidebarHeaderLabel) return;

  if (!isSidebarMobileDropdown()) {
    sidebarHeaderLabel.textContent = 'Projects';
    sidebarProjectCountPill?.setAttribute('hidden', '');
    return;
  }

  sidebarHeaderLabel.textContent = 'View all projects';

  if (!sidebarProjectCountPill) return;

  const count = getFilteredProjects().length;
  sidebarProjectCountPill.textContent = `${count} Project${count === 1 ? '' : 's'}`;

  if (isSidebarCollapsed()) {
    sidebarProjectCountPill.removeAttribute('hidden');
  } else {
    sidebarProjectCountPill.setAttribute('hidden', '');
  }
}

function setSidebarPanelToggleX(isX) {
  document.body.classList.toggle('sidebar-panel-toggle-x', isX);
}

function syncSidebarCollapseUi() {
  const collapsed = isSidebarCollapsed() && isSidebarCollapseEnabled();

  if (isSidebarMobileDropdown()) {
    setSidebarPanelToggleX(false);
  }

  document.body.classList.toggle('sidebar-collapsed', collapsed);
  sidebarCollapseBtn?.setAttribute('aria-expanded', collapsed ? 'false' : 'true');

  if (sidebarCollapseBtn) {
    sidebarCollapseBtn.setAttribute(
      'aria-label',
      isSidebarMobileDropdown()
        ? collapsed
          ? 'Show projects list'
          : 'Hide projects list'
        : document.body.classList.contains('sidebar-panel-toggle-x')
          ? 'Close projects panel'
          : 'Collapse projects panel'
    );
  }

  if (sidebarReopenTab) {
    sidebarReopenTab.hidden = isSidebarMobileDropdown() || !collapsed;
    sidebarReopenTab.setAttribute('aria-hidden', sidebarReopenTab.hidden ? 'true' : 'false');
    sidebarReopenTab.setAttribute('aria-label', 'Open projects panel');
  }

  if (sidebarResizer) {
    const disabled = collapsed || !isSidebarCollapseEnabled() || isSidebarMobileDropdown();
    sidebarResizer.setAttribute('aria-hidden', disabled ? 'true' : 'false');
    sidebarResizer.tabIndex = disabled ? -1 : 0;
  }

  syncMobileProjectTabLabel();
}

function waitForMobilePanelTransition() {
  return new Promise((resolve) => {
    const targets = [headerShellEl, topBannerShellEl, sidebarEl, sidebarHeader, sidebarMobilePanelContentEl, mainContentEl].filter(Boolean);
    if (!targets.length) {
      resolve();
      return;
    }

    let settled = false;
    const finish = () => {
      if (settled) return;
      settled = true;
      targets.forEach((target) => target.removeEventListener('transitionend', onEnd));
      resolve();
    };

    const onEnd = (event) => {
      if (!targets.includes(event.target)) return;
      if (
        event.propertyName !== 'transform'
        && event.propertyName !== 'opacity'
        && event.propertyName !== 'max-height'
        && event.propertyName !== 'top'
        && event.propertyName !== 'height'
        && event.propertyName !== 'padding-top'
        && event.propertyName !== 'clip-path'
        && event.propertyName !== '-webkit-clip-path'
      ) {
        return;
      }
      finish();
    };

    targets.forEach((target) => target.addEventListener('transitionend', onEnd));
    window.setTimeout(finish, SIDEBAR_MOBILE_PANEL_MS + 80);
  });
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

function waitForMobilePanelCloseTransitions() {
  return Promise.all([
    waitForMobilePanelTransition(),
    waitForElementPropertyTransition(mainContentEl, 'transform'),
    waitForElementPropertyTransition(sidebarHeader, 'padding-top'),
  ]);
}

function waitForMobilePanelLayoutSettle() {
  return new Promise((resolve) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(resolve);
    });
  });
}

function measureMobileSidebarRowHeight() {
  if (!sidebarHeader) return 64;

  const height = Math.round(sidebarHeader.getBoundingClientRect().height);
  return height > 0 ? height : 64;
}

function syncMobileSidebarRowHeight() {
  document.documentElement.style.setProperty(
    '--sidebar-mobile-row-height',
    `${measureMobileSidebarRowHeight()}px`
  );
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
    'sidebar-mobile-panel-expanded',
    'sidebar-mobile-panel-handoff'
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

  syncMobileSidebarRowHeight();

  document.body.classList.add('sidebar-mobile-panel-handoff');
  document.body.classList.add('sidebar-collapsed');
  endMobilePanelPhase('sidebar-mobile-panel-closing');
  localStorage.setItem(SIDEBAR_COLLAPSED_KEY, 'true');

  const inflowHeight = sidebarEl ? sidebarEl.offsetHeight : measureMobileSidebarRowHeight();
  document.documentElement.style.setProperty('--sidebar-mobile-inflow-offset', `${inflowHeight}px`);

  await waitForMobilePanelLayoutSettle();

  document.body.classList.remove('sidebar-mobile-panel-handoff');
  document.documentElement.style.removeProperty('--sidebar-mobile-inflow-offset');
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

function collapseSidebar() {
  if (!isSidebarCollapseEnabled() || isSidebarCollapsed()) return;
  if (document.body.classList.contains('sidebar-desktop-closing')) return;

  if (isSidebarMobileDropdown()) {
    collapseSidebarMobileAnimated();
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

    collapseSidebar();
  });

  sidebarHeader?.addEventListener('click', () => {
    if (!isSidebarMobileDropdown()) return;
    toggleSidebarMobileDropdown();
  });

  sidebarReopenTab?.addEventListener('click', expandSidebar);

  const handleCollapseMqChange = () => {
    if (!SIDEBAR_COLLAPSE_MQ.matches) {
      const current = getSidebarWidthPx();
      if (!Number.isNaN(current) && current > 0) {
        previousSidebarWidth = current;
      }
      document.body.classList.add('sidebar-collapsed');
      setSidebarPanelToggleX(false);
      localStorage.setItem(SIDEBAR_COLLAPSED_KEY, 'true');
    }

    syncSidebarCollapseUi();
    syncStickyHeaderAlignHeight();
    projectTitleLastFitWidth = -1;
    scheduleProjectTitleFit();
    scheduleProjectListLabelCollisionCheck();
  };

  if (typeof SIDEBAR_COLLAPSE_MQ.addEventListener === 'function') {
    SIDEBAR_COLLAPSE_MQ.addEventListener('change', handleCollapseMqChange);
  } else if (typeof SIDEBAR_COLLAPSE_MQ.addListener === 'function') {
    SIDEBAR_COLLAPSE_MQ.addListener(handleCollapseMqChange);
  }

  const handleMobileMqChange = () => {
    clearMobilePanelAnimationState();
    sidebarMobilePanelAnimating = false;
    setMobileChromeHidden(false);

    if (isSidebarMobileDropdown() && !isSidebarCollapsed()) {
      collapseSidebar();
    }

    syncSidebarCollapseUi();
    syncStickyHeaderAlignHeight();
    projectTitleLastFitWidth = -1;
    projectSubheadLastFitWidth = -1;
    projectSubheadLastFitText = '';
    projectSubheadLastFitMode = '';
    scheduleProjectTitleFit({ force: true });
    scheduleProjectListLabelCollisionCheck();
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
  if (isSidebarCollapsed()) return getSidebarWidthPx();

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
  if (isSidebarCollapsed()) return;
  setSidebarWidth(resolveSidebarDragWidth(clientX));
}

sidebarResizer.addEventListener('mousedown', (e) => {
  if (isSidebarCollapsed()) return;
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
  if (isSidebarCollapsed()) return;

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

window.addEventListener('resize', () => {
  if (isSidebarCollapsed()) return;

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
      && previousDefault
      && getSidebarWidthPx() === previousDefault
    ) {
      setSidebarWidth(sidebarDefaultWidth);
    }
  });
}

const PORTFOLIO_ENTRY_KEY = 'portfolio-entry-from-landing';
const PORTFOLIO_BURST_REVEAL_KEY = 'portfolio-entry-burst-reveal';
const PORTFOLIO_BURST_SCALE_KEY = 'portfolio-entry-burst-scale';
const PORTFOLIO_ENTRY_MS = 920;
const PORTFOLIO_BURST_ENTRY_MS = 920;

function initPortfolioEntryAnimation() {
  const root = document.documentElement;
  if (!root.classList.contains('is-portfolio-entry')) return;

  const burstReveal = root.classList.contains('is-portfolio-burst-entry');
  let burstScale = null;

  try {
    burstScale = parseFloat(sessionStorage.getItem(PORTFOLIO_BURST_SCALE_KEY));
    sessionStorage.removeItem(PORTFOLIO_ENTRY_KEY);
    sessionStorage.removeItem(PORTFOLIO_BURST_REVEAL_KEY);
    sessionStorage.removeItem(PORTFOLIO_BURST_SCALE_KEY);
  } catch (_) {}

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    root.classList.remove('is-portfolio-entry');
    root.classList.remove('is-portfolio-burst-entry');
    return;
  }

  const revealBurst = document.querySelector('.portfolio-entry-reveal-burst');
  if (burstReveal && revealBurst && Number.isFinite(burstScale) && burstScale > 0) {
    revealBurst.style.setProperty('--entry-burst-scale', String(burstScale));
  }

  const finish = () => {
    root.classList.remove('is-portfolio-entry');
    root.classList.remove('is-portfolio-burst-entry');
    root.classList.remove('is-portfolio-entry-animate');
  };

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      root.classList.add('is-portfolio-entry-animate');
    });
  });

  window.setTimeout(finish, burstReveal ? PORTFOLIO_BURST_ENTRY_MS : PORTFOLIO_ENTRY_MS);
}

initPortfolioEntryAnimation();
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

let footerMarqueeResizeTimer;
window.addEventListener('resize', () => {
  window.clearTimeout(footerMarqueeResizeTimer);
  footerMarqueeResizeTimer = window.setTimeout(() => {
    populateFooterMarquee();
    if (typeof populateTopBannerMarquee === 'function') {
      populateTopBannerMarquee();
    }
    syncStickyHeaderAlignHeight();
  }, 120);
});

populateFooterMarquee();

const viewToggleEls = document.querySelectorAll('.view-toggle');
const viewBtnImage = document.getElementById('view-btn-image');
const viewBtnList = document.getElementById('view-btn-list');
const viewBtnImageSticky = document.getElementById('view-btn-image-sticky');
const viewBtnListSticky = document.getElementById('view-btn-list-sticky');
const projectGallery = document.getElementById('project-gallery');
const projectText = document.getElementById('project-text');

const GALLERY_IMAGE_COUNT = 10;
const SKETCHBOOK_GALLERY_IMAGE_COUNT = GALLERY_IMAGE_COUNT * 4;

const SKETCHBOOK_PANEL_HEIGHTS = ['h-sm', 'h-md', 'h-lg', 'h-xl', 'h-md', 'h-lg', 'h-sm', 'h-xl', 'h-md', 'h-lg'];

function isSketchbookProject(project) {
  return project?.icon === 'sketchbook' || project?.id === 'sketchbook';
}

function getSketchbookPanelHeightClass(index) {
  return SKETCHBOOK_PANEL_HEIGHTS[index % SKETCHBOOK_PANEL_HEIGHTS.length];
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
  if (project.gallery?.length) return project.gallery;

  const count = isSketchbookProject(project) ? SKETCHBOOK_GALLERY_IMAGE_COUNT : GALLERY_IMAGE_COUNT;

  return Array.from({ length: count }, (_, index) => ({
    alt: `${project.name} — gallery image ${index + 1}`,
    caption: galleryImageCaptions[index % galleryImageCaptions.length],
  }));
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

  const images = getProjectGalleryImages(project);
  const sketchbookLayout = isSketchbookProject(project);

  projectGallery.classList.toggle('project-gallery--sketchbook', sketchbookLayout);

  projectGallery.innerHTML = images
    .map((image, index) => {
      const panelClasses = sketchbookLayout
        ? `hero-panel hero-panel--sketchbook hero-panel--${getSketchbookPanelHeightClass(index)}`
        : 'hero-panel';

      return `
    <div class="gallery-item${sketchbookLayout ? ' gallery-item--sketchbook' : ''}"${sketchbookLayout ? ` data-gallery-index="${index}"` : ''}>
      <div class="${panelClasses}">
        ${renderHeroPanelContent(image, project, index, { revealOnScroll: !image?.src })}
      </div>
      ${image.caption ? `<p class="text-caption gallery-caption">${image.caption}</p>` : ''}
    </div>
  `;
    })
    .join('');

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

  document.addEventListener('keydown', (event) => {
    if (!isSketchbookLightboxOpen()) return;

    if (event.key === 'Escape') {
      event.preventDefault();
      closeSketchbookLightbox();
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      navigateSketchbookLightbox(-1);
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      navigateSketchbookLightbox(1);
    }
  });
}

function setDetailView(mode) {
  const project = projects.find((p) => p.id === selectedId);
  const showImages = isSketchbookProject(project) ? true : mode === 'images';

  mainContentEl?.setAttribute('data-detail-view', mode);

  projectGallery.classList.toggle('is-hidden', !showImages);
  projectGallery.hidden = !showImages;

  projectText.classList.toggle('is-hidden', showImages);
  projectText.hidden = showImages;

  viewToggleEls.forEach((toggle) => toggle.setAttribute('data-view', mode));
  viewBtnImage?.setAttribute('aria-pressed', showImages);
  viewBtnList?.setAttribute('aria-pressed', !showImages);
  viewBtnImageSticky?.setAttribute('aria-pressed', showImages);
  viewBtnListSticky?.setAttribute('aria-pressed', !showImages);

  if (showImages) {
    requestAnimationFrame(() => initGalleryPlaceholderReveal());
  }

  syncStickyHeaderAlignHeight();
}

function initEmailLink(refreshCursor) {
  const emailLink = document.getElementById('email-link');
  if (!emailLink) return;

  const emailText = emailLink.querySelector('.email-link-text');
  const email = emailLink.dataset.email || 'hello@tedpio.design';
  let copiedTimeout;

  emailLink.addEventListener('click', async (e) => {
    e.preventDefault();
    if (emailLink.classList.contains('is-copied')) return;

    try {
      await navigator.clipboard.writeText(email);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = email;
      textarea.setAttribute('readonly', '');
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }

    emailLink.classList.add('is-copied');
    emailText.textContent = 'Copied to clipboard';
    refreshCursor?.();

    clearTimeout(copiedTimeout);
    copiedTimeout = setTimeout(() => {
      emailLink.classList.remove('is-copied');
      emailText.textContent = email;
      refreshCursor?.();
    }, 1000);
  });
}

viewBtnImage?.addEventListener('click', () => setDetailView('images'));
viewBtnList?.addEventListener('click', () => setDetailView('text'));
viewBtnImageSticky?.addEventListener('click', () => setDetailView('images'));
viewBtnListSticky?.addEventListener('click', () => setDetailView('text'));

setDetailView('images');

projectLockSubmitEl?.addEventListener('click', attemptProjectUnlock);
projectLockPasswordEl?.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    attemptProjectUnlock();
  }
});

initTheme();
const refreshCursor = initCustomCursor();

function initMobileBrowserUiInset() {
  if (!window.matchMedia('(max-width: 560px)').matches) return;

  const sync = () => {
    const viewport = window.visualViewport;
    if (!viewport) return;

    const obscured = Math.max(0, window.innerHeight - viewport.height - viewport.offsetTop);
    const inset = Math.round(obscured);
    document.documentElement.style.setProperty('--mobile-browser-ui-inset', `${inset}px`);
  };

  sync();
  window.visualViewport?.addEventListener('resize', sync);
  window.visualViewport?.addEventListener('scroll', sync);
  window.addEventListener('resize', sync);
  window.addEventListener('orientationchange', sync);
}

initMobileBrowserUiInset();
initEmailLink(refreshCursor);
renderProjectList();
selectProject('affera');
initProjectIntroScroll();
initStickyHeaderAlignHeightSync();
initProjectListLabelCollisionSync();
initProjectTitleFit();
initCustomScrollbars();
initSketchbookLightbox();
