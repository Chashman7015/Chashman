/**
 * Chashman — Portfolio Data
 * Sourced from Chashman-cv-final.pdf
 */

export const profile = {
  name: "CHASHMAN",
  role: "Mechatronics & Control Engineer",
  tagline: "I engineer realities where steel, code, and current collide.",
  subtagline:
    "PLC whisperer. Signal architect. Builder of machines that think in millimeters and microseconds.",
  location: "Lahore, Pakistan",
  email: "chashman7015@gmail.com",
  phone: "+92-341-5810670",
  linkedin: "#",
  github: "#",
  availability: "Open to frontier engineering roles",
  summary:
    "Mechatronics & Control Engineering graduate from UET Lahore with hands-on expertise in PLC programming (Ladder Logic & FBD), HMI design, and SCADA systems. Currently engineering a real-time interlocking signaling system at Pakistan Railways using TIA Portal and Siemens PLCs. Lives where industrial automation, sensor fusion, and machine learning intersect.",
};

export const stats = [
  { value: "4+", label: "Years Engineering" },
  { value: "40+", label: "Lever Controls Shipped" },
  { value: "90%", label: "Robot Navigation Accuracy" },
  { value: "3.26", label: "CGPA / 4.00" },
];

export const skillGroups = [
  {
    title: "Industrial Automation & Control",
    icon: "Cpu",
    accent: "magenta",
    skills: [
      "PLC Programming — Ladder Logic",
      "Function Block Diagrams",
      "HMI Design & Configuration",
      "SCADA Systems & Real-Time Monitoring",
      "DCS Fundamentals",
      "Process Control & Optimization",
      "Safety Interlocks",
      "Alarm Management",
    ],
  },
  {
    title: "Instrumentation & Mechanical",
    icon: "Gauge",
    accent: "cyan",
    skills: [
      "Sensors & Transducers",
      "Actuators",
      "Pneumatic & Hydraulic Systems",
      "Control Valves",
      "Conveyor Systems",
      "Flow / Pressure / Temperature Measurement",
    ],
  },
  {
    title: "Software & Programming",
    icon: "Code2",
    accent: "violet",
    skills: [
      "Python",
      "C",
      "MATLAB / Simulink",
      "Machine Learning",
      "Data Analysis",
      "SolidWorks — 3D CAD",
      "AutoCAD — 2D",
      "P&ID Reading",
    ],
  },
];

export const projects = [
  {
    id: "01",
    title: "Tharparkar Railway Signaling System",
    category: "Industrial Automation",
    year: "2026",
    description:
      "A real-time PLC-based interlocking control system for Pakistan Railways. Programmed ladder logic and FBDs for lever positions, track circuits, point & lock interfaces, and signal feedback networks across Systems A & B in TIA Portal.",
    highlights: [
      "40-lever HMI dashboard in EasyBuilder Pro",
      "Mutex logic preventing conflicting lever states",
      "Safety relay blocks with ON/OFF timers",
      "Cross-PLC I/O over PoE Ethernet",
    ],
    tech: ["TIA Portal", "Siemens LOGO! 8", "EasyBuilder Pro", "FBD", "Ladder Logic"],
    accent: "magenta",
  },
  {
    id: "02",
    title: "Human-Aware Mobile Robot Navigation",
    category: "ML / Computer Vision",
    year: "2024 — 2025",
    description:
      "An ML-based autonomous navigation system fusing real-time sensor data with computer vision for dynamic obstacle avoidance. Achieved 90% navigation accuracy in cluttered, human-occupied environments.",
    highlights: [
      "Real-time sensor fusion pipeline",
      "Computer vision obstacle detection",
      "Adaptive decision-making engine",
      "90% navigation accuracy benchmark",
    ],
    tech: ["Python", "OpenCV", "ML", "Sensor Fusion", "Embedded Systems"],
    accent: "cyan",
  },
  {
    id: "03",
    title: "Automatic Traffic Light Control System",
    category: "PLC / SCADA",
    year: "2024",
    description:
      "Programmed a PLC using Function Block Diagrams for automated traffic control with normal and emergency operating modes. Designed an HMI for real-time status display and integrated SCADA for centralized visualization and alarm management.",
    highlights: [
      "Normal & emergency mode switching",
      "Real-time HMI status display",
      "SCADA data logging & trend analysis",
      "Centralized alarm management",
    ],
    tech: ["PLC", "FBD", "SCADA", "HMI"],
    accent: "violet",
  },
  {
    id: "04",
    title: "Automatic Bottle Repositioning System",
    category: "Hydraulics / Pneumatics",
    year: "2023",
    description:
      "Designed actuator-sensor logic for automated repositioning on industrial conveyor belts using pneumatic sequencing. Implemented safety interlocking, sensor-based position feedback, and fail-safe mechanisms for continuous operation.",
    highlights: [
      "Pneumatic actuator sequencing",
      "Safety interlocking logic",
      "Sensor-based position feedback",
      "Fail-safe continuous operation",
    ],
    tech: ["Pneumatics", "Sensors", "Actuators", "Conveyor Systems"],
    accent: "magenta",
  },
];

export const experience = [
  {
    role: "Graduate Engineer Trainee — Automation & Control",
    company: "Pakistan Railways, Signal Workshops",
    location: "Lahore, Pakistan",
    period: "Apr 2026 — Present",
    current: true,
    description:
      "Engineering the PLC-based Tharparkar Railway Signaling Project — a real-time interlocking control system. Designed a 40-lever HMI dashboard in EasyBuilder Pro with simulation inputs for both Systems A & B, and implemented mutex logic to prevent simultaneous conflicting lever states.",
    tags: ["TIA Portal", "Siemens PLC", "EasyBuilder Pro", "Safety Relays"],
  },
  {
    role: "Robotics & AI Instructor",
    company: "Punjab Group of Colleges",
    location: "Lahore, Pakistan",
    period: "Aug 2025 — Jan 2026",
    current: false,
    description:
      "Delivered instruction in robotics, AI fundamentals, and microcontroller-based systems to engineering students. Developed a structured curriculum and lab exercises covering sensor integration, robot kinematics, and autonomous system design.",
    tags: ["Robotics", "AI", "Microcontrollers", "Curriculum Design"],
  },
  {
    role: "Research Intern — Machine Learning",
    company: "NUST",
    location: "Islamabad, Pakistan",
    period: "Jun — Jul 2023",
    current: false,
    description:
      "Conducted ML research on brain tumor segmentation using the BraTS'23 dataset, covering data preprocessing, model training, and evaluation. Contributed to an academic publication with detailed technical documentation and reproducible results.",
    tags: ["ML", "BraTS'23", "Segmentation", "Research"],
  },
  {
    role: "STEM & Robotics Instructor",
    company: "MechaBotix",
    location: "Lahore, Pakistan",
    period: "Jun 2022",
    current: false,
    description:
      "Taught the fundamentals of robotics, sensors, and automation. Guided students through prototype development using microcontrollers and sensor modules, igniting early engineering curiosity.",
    tags: ["Robotics", "Sensors", "Mentoring"],
  },
];

export const education = {
  degree: "BE Mechatronics & Control Engineering",
  institution: "University of Engineering & Technology, Lahore",
  period: "Nov 2021 — Jun 2025",
  cgpa: "3.26 / 4.00",
  accreditation: "HEC Recognized · PEC Accredited",
  coursework: [
    "Control Systems",
    "Industrial Automation & PLCs",
    "Instrumentation & Measurement",
    "Hydraulics & Pneumatics",
    "Embedded Systems",
    "Process Control",
    "Computer-Aided Design",
  ],
};

export const leadership = [
  {
    role: "PR Secretary",
    org: "Mechatronics Club, UET Lahore",
    period: "2024 — 2025",
    description:
      "Managed event communication, outreach, and student engagement for technical exhibitions and workshops.",
  },
  {
    role: "Director Technical",
    org: "Mechatronics Club, UET Lahore",
    period: "2023 — 2024",
    description:
      "Led project demonstrations at LSM Exhibition'23, YES Week'23, and Trust School Exhibition'23; coordinated technical teams.",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
