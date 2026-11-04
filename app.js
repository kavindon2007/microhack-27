/**
 * MICROHACK'27 — Official Web Application Engine
 * 36 Hours National Level Hackathon
 * Centre for Edge and Embedded Intelligence, Easwari Engineering College & Microchip Technology
 */

(() => {
  'use strict';

  // --- Configuration & Event Data Store ---
  const EVENT_CONFIG = {
    name: "MICROHACK'27",
    fullName: "MICROHACK 2027",
    tagline: "36 HOURS NATIONAL LEVEL HACKATHON",
    edition: "National Edition",
    dates: "25 & 26 February 2027",
    targetDate: new Date("2027-02-25T08:00:00+05:30").getTime(),
    venue: "Geetham Auditorium",
    institution: "Easwari Engineering College",
    subInstitution: "An AUTONOMOUS Institution · Affiliated to ANNA UNIVERSITY · Ramapuram, Chennai",
    group: "SRM Group of Educational Institutions",
    organizer: "Centre for Edge and Embedded Intelligence (CEEI)",
    partner: "Microchip Technology",
    teamSize: "2 - 4 Members Per Team",
    minTeamSize: 2,
    maxTeamSize: 4,
    registrationFee: "FREE REGISTRATION",
    prizes: "Win Exciting Cash Prizes & Awards!",
    prizePool: "Exciting Cash Prizes",
    contacts: [
      { name: "Faculty / Student Coordinator", phone: "9840819389" },
      { name: "Helpdesk Coordinator", phone: "9962366414" }
    ],
    email: "microchip.coe@eec.srmrmp.edu.in",
    website: "https://srmeaswari.ac.in",
    socials: {
      facebook: "https://www.facebook.com/SRMeaswariOfficial",
      twitter: "https://twitter.com/srm_easwari",
      instagram: "https://www.instagram.com/srmeaswari",
      portal: "https://srmeaswari.ac.in"
    }
  };

  const TRACKS_DATA = [
    {
      id: "industry-5",
      number: "01",
      title: "Industry 5.0 & Smart Manufacturing",
      tagline: "Edge AI, Autonomous Industrial Robotics & Predictive Maintenance",
      icon: "precision_manufacturing",
      category: "Industrial Edge",
      accentColor: "#0db9f2",
      gradient: "from-blue-600 to-cyan-500",
      description: "Build intelligent embedded systems and edge AI modules for smart manufacturing, digital twins, and autonomous factory operations.",
      longDescription: "Modern Industry 5.0 requires ultra-low latency intelligence at the shop floor. Factory sensors generate gigabytes of telemetry every second, making cloud-only architectures slow, expensive, and fragile during network drops. Edge microcontrollers and DSCs bring machine intelligence directly to the point of sensing.",
      problem: "Unplanned industrial downtime costs manufacturers billions annually. Traditional predictive maintenance relies on periodic manual inspection or high-bandwidth cloud uploads. There is a critical need for real-time edge vibration, acoustics, and thermal analysis that predicts bearing failures, optimizes tool life, and orchestrates robotic cobots with sub-millisecond safety guarantees.",
      whyItMatters: "Deploying machine learning models directly onto resource-constrained microcontrollers eliminates data ingress costs, protects intellectual property, and guarantees deterministic real-time actuation for mission-critical industrial plants.",
      whatToBuild: [
        "Edge Predictive Maintenance: Real-time vibration and acoustic FFT anomaly detection on microcontrollers.",
        "Digital Twin Telemetry: Deterministic Modbus/MQTT edge gateway streaming equipment vitals.",
        "Automated Optical Inspection: Embedded TinyML computer vision for real-time assembly line defect sorting.",
        "Collaborative Robotics Safety: Sub-millisecond sensor fusion for cobot dynamic collision prevention.",
        "Energy Optimization: Dynamic load shedding and power-factor intelligence for high-draw machinery."
      ],
      successCriteria: [
        { label: "Edge Inference", value: "Real-time TinyML inference running locally on microcontroller without cloud dependence." },
        { label: "Hardware Interfacing", value: "Functional sensor integration (accelerometers, thermal, current transformers) via SPI/I2C/CAN." },
        { label: "Deterministic Latency", value: "< 5ms anomaly detection and emergency actuator cut-off." }
      ],
      stack: ["Microchip SAM E54", "PIC32MZ EF", "PolarFire SoC FPGA", "FreeRTOS", "TinyML", "MQTT"]
    },
    {
      id: "automotive",
      number: "02",
      title: "Automotive Embedded Systems",
      tagline: "AUTOSAR, CAN/LIN Bus, EV Battery Management & ADAS Sensors",
      icon: "directions_car",
      category: "Automotive & Mobility",
      accentColor: "#0d59f2",
      gradient: "from-indigo-600 to-blue-600",
      description: "Architect next-generation software-defined vehicle electronics, in-vehicle networking, and EV powertrain telemetry.",
      longDescription: "Automotive electronics are shifting toward centralized zonal controllers, real-time deterministic communication, and high-safety autonomous driver assistance systems (ADAS).",
      problem: "Electric Vehicles (EVs) require safe, highly accurate battery management systems (BMS) with real-time state-of-charge (SoC) and state-of-health (SoH) calculation, thermal runaway prevention, and deterministic CAN FD/LIN communication across multiple electronic control units (ECUs).",
      whyItMatters: "Automotive systems require ISO 26262 functional safety and sub-millisecond reaction times. A glitch in motor control or braking telemetry is catastrophic. Hardware-accelerated DSCs and certified transceivers are critical.",
      whatToBuild: [
        "Smart EV Battery Management System: Multi-cell voltage/temperature telemetry and thermal runaway warning.",
        "In-Vehicle Bus Network: Deterministic CAN FD / LIN communication between sensor clusters and master ECU.",
        "ADAS Edge Radar / Vision Fusion: Microcontroller-level object proximity alert with active braking trigger.",
        "Vehicle Telematics Gateway: Secure Over-The-Air (OTA) firmware integrity checking and drive diagnostics.",
        "Drive-by-Wire Actuation: Dual-redundant motor controller logic with hardware fault tolerance."
      ],
      successCriteria: [
        { label: "Network Protocol", value: "Correct implementation of CAN FD / LIN frames with checksum validation." },
        { label: "Safety Logic", value: "Fail-safe watchdog and fault-recovery states simulating ISO 26262 requirements." },
        { label: "BMS Precision", value: "Accurate cell balancing simulation and high-rate temperature differential alarms." }
      ],
      stack: ["Microchip dsPIC33 DSC", "ATA6561 CAN Transceiver", "MPLAB X IDE", "Embedded C/C++", "AUTOSAR Architecture"]
    },
    {
      id: "healthcare",
      number: "03",
      title: "Medical Imaging & Intelligent Healthcare Systems",
      tagline: "Point-of-Care Ultrasound, Biosensor Telemetry & Ultra-Low Power Diagnostics",
      icon: "medical_services",
      category: "Healthcare & MedTech",
      accentColor: "#13ecc8",
      gradient: "from-teal-600 to-emerald-500",
      description: "Design life-saving diagnostic edge hardware, point-of-care medical imaging algorithms, and wearable continuous vital signs monitors.",
      longDescription: "Rural and emergency healthcare relies heavily on portable point-of-care diagnostic devices. Transporting patients to centralized imaging facilities takes valuable hours when acute trauma or respiratory distress strikes.",
      problem: "Existing hospital diagnostic imaging equipment is bulky, power-hungry, and requires specialized operators. Wearable patient telemetry devices often suffer from noisy sensor data, high battery drain, and poor motion-artifact rejection.",
      whyItMatters: "Affordable, ultra-low-power edge diagnostic tools empower frontline healthcare workers, paramedics, and rural health clinics to detect cardiac anomalies, internal bleeding, and vital collapse within the critical golden hour.",
      whatToBuild: [
        "Point-of-Care Ultrasound Processing: Ultra-low latency edge beamforming and organ boundary enhancement.",
        "Continuous Vital Signs Patch: Multi-parameter ECG, PPG, and SpO2 sensor patch with low-noise analog front-end.",
        "Edge Arrhythmia Detection: Lightweight neural net for real-time cardiac arrhythmia classification.",
        "Non-Invasive Diagnostics: Optical and bioimpedance sensor processing for patient fluid monitoring.",
        "Smart ICU Infusion Pump: Closed-loop volumetric dosing with air-bubble detection and safety interlocks."
      ],
      successCriteria: [
        { label: "Signal Fidelity", value: "Effective analog front-end noise filtering and baseline wander removal." },
        { label: "Power Efficiency", value: "Demonstrated low-power sleep/wake states for wearable multi-day battery life." },
        { label: "Diagnostic Accuracy", value: "High sensitivity in arrhythmia and critical anomaly classification." }
      ],
      stack: ["Microchip SAM L22 (Ultra-Low Power)", "PIC32 Family", "Microchip Analog Front-End (AFE)", "BLE 5.2", "CMSIS-DSP"]
    }
  ];

  const TIMELINE_DATA = [
    {
      id: "launch",
      date: "10 NOV 2026",
      title: "Official Hackathon Launch",
      subtitle: "Announcements & Problem Statements Release",
      icon: "campaign",
      status: "completed",
      description: "Official launch of MICROHACK'27 by Centre for Edge and Embedded Intelligence in collaboration with Microchip Technology. Portal opens nationwide for track review and free team registration."
    },
    {
      id: "registration",
      date: "23 JAN 2027",
      title: "Registration Deadline & Submissions",
      subtitle: "Team Registration Closes & Round 1 Proposals Due",
      icon: "co_present",
      status: "active",
      description: "Final deadline for team registration (2-4 members) and submission of Round 1 project abstract / proposal (PPT). Ensure your team details and hardware choice are finalized."
    },
    {
      id: "hackathon",
      date: "25 & 26 FEB 2027",
      title: "Hackathon Day (36 Hours Non-Stop)",
      subtitle: "Build, Innovate & Present at Geetham Auditorium",
      icon: "memory",
      status: "highlight",
      description: "36 hours of rapid hardware and embedded software prototyping at Geetham Auditorium, Easwari Engineering College. Hardware kit access, 2 rounds of expert mentorship from Microchip engineers, and live prototyping.",
      schedule: [
        { time: "25 Feb · 08:00 AM", event: "Check-in, ID Badge & Hardware Kit Distribution" },
        { time: "25 Feb · 09:30 AM", event: "Grand Inauguration & Keynote by Microchip Leadership" },
        { time: "25 Feb · 11:00 AM", event: "36-Hour Hackathon Commences (Coding & Circuit Wire-up)" },
        { time: "25 Feb · 04:30 PM", event: "Mentorship Round 1: Edge Architecture & Feasibility Review" },
        { time: "26 Feb · 02:00 AM", event: "Midnight Debug Jam & Microchip Technical Support" },
        { time: "26 Feb · 11:00 AM", event: "Mentorship Round 2: Integration & Test Vectors Check" },
        { time: "26 Feb · 05:00 PM", event: "36-Hour Hack Concludes & Code Freeze" },
        { time: "26 Feb · 06:30 PM", event: "Final Pitch & Live Hardware Demos to Grand Jury" }
      ]
    },
    {
      id: "awards",
      date: "27 FEB 2027",
      title: "Winners Announcement & Celebration",
      subtitle: "Results, Grand Trophies, Awards & Recruitment Offers",
      icon: "emoji_events",
      status: "upcoming",
      description: "Valedictory Ceremony at Geetham Auditorium. Announcement of National Champions, Runner-ups, Track Winners, cash prize distribution, and Microchip recruitment fast-track interviews."
    }
  ];

  // --- Local Storage Management ---
  const STORAGE_KEYS = {
    REGISTRATION_DRAFT: "microhack_registration_draft",
    MY_TEAM: "microhack_my_team",
    MY_SUBMISSION: "microhack_my_submission"
  };

  const getSavedTeam = () => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.MY_TEAM)) || null;
    } catch {
      return null;
    }
  };

  const saveTeam = (teamData) => {
    try {
      localStorage.setItem(STORAGE_KEYS.MY_TEAM, JSON.stringify(teamData));
    } catch (e) {
      console.warn("Storage error:", e);
    }
  };

  const getSavedSubmission = () => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.MY_SUBMISSION)) || null;
    } catch {
      return null;
    }
  };

  const saveSubmission = (subData) => {
    try {
      localStorage.setItem(STORAGE_KEYS.MY_SUBMISSION, JSON.stringify(subData));
    } catch (e) {
      console.warn("Storage error:", e);
    }
  };

  // --- Router & Rendering Engine ---
  const getRoute = () => {
    const hash = window.location.hash.slice(1);
    if (!hash || hash === "") return "/";
    const clean = hash.split("?")[0];
    return clean.startsWith("/") ? clean : "/" + clean;
  };

  const navigateTo = (path) => {
    window.location.hash = path.startsWith("/") ? path : "/" + path;
  };

  // Countdown Calculation
  const getCountdownString = () => {
    const now = Date.now();
    const diff = EVENT_CONFIG.targetDate - now;
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true };
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    return { days, hours, minutes, seconds, isPast: false };
  };

  // --- Page Views ---

  // 1. HOME VIEW
  const renderHome = () => {
    const cd = getCountdownString();
    return `
      <div class="flex flex-col items-center overflow-x-hidden min-h-screen relative text-white">
        <!-- Hero Section -->
        <section class="relative w-full min-h-[85vh] flex flex-col justify-center pt-20 pb-16 overflow-hidden">
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] bg-gradient-to-r from-primary/20 via-accent-cyan/15 to-primary/20 blur-[130px] rounded-full opacity-60 pointer-events-none"></div>

          <div class="relative z-10 px-6 max-w-6xl mx-auto text-center">
            <!-- Badge -->
            <div class="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white/90 text-[11px] font-bold uppercase tracking-[0.25em] mb-8 shadow-[0_0_30px_rgba(13,89,242,0.2)] group hover:bg-white/10 hover:border-accent-cyan/30 transition-all">
              <span class="relative flex h-2 w-2">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-emerald opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-accent-emerald shadow-[0_0_10px_rgba(19,236,200,0.8)]"></span>
              </span>
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-accent-cyan transition-all">
                36 Hours National Level Hackathon · 25 &amp; 26 Feb 2027
              </span>
            </div>

            <!-- College & Partner Byline -->
            <div class="mb-4 text-xs sm:text-sm font-semibold tracking-widest text-slate-400 uppercase flex items-center justify-center gap-2 flex-wrap">
              <span>Centre for Edge &amp; Embedded Intelligence</span>
              <span class="text-accent-cyan">•</span>
              <span class="text-slate-200">Easwari Engineering College</span>
              <span class="text-accent-cyan">•</span>
              <span class="text-red-400 font-bold">Microchip Technology</span>
            </div>

            <!-- Title -->
            <h1 class="text-6xl sm:text-7xl md:text-8xl lg:text-[105px] font-black leading-tight tracking-tighter mb-6 select-none drop-shadow-2xl">
              <span class="text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-400 animate-shimmer block">
                MICROHACK<span class="text-accent-cyan font-mono">'27</span>
              </span>
            </h1>

            <!-- Subtitle Divider -->
            <div class="flex items-center justify-center gap-6 mb-8 opacity-90">
              <div class="hidden md:block h-px w-24 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
              <p class="text-base sm:text-lg md:text-xl font-bold tracking-[0.3em] text-cyan-200 uppercase text-shadow-glow">
                36 HOURS NATIONAL LEVEL HACKATHON
              </p>
              <div class="hidden md:block h-px w-24 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
            </div>

            <!-- Description -->
            <p class="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg font-light leading-relaxed mb-10">
              Join the nation's elite engineers at <strong class="text-white font-semibold">Geetham Auditorium</strong>. Build next-generation solutions in <strong class="text-accent-cyan font-medium">Industry 5.0</strong>, <strong class="text-primary font-medium">Automotive Embedded</strong>, and <strong class="text-accent-emerald font-medium">Medical Imaging AI</strong>.
            </p>

            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
              <a href="#/register" class="group relative w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-primary via-primary-hover to-accent-cyan text-white rounded-xl overflow-hidden font-bold text-sm tracking-wider uppercase transition-all duration-300 hover:scale-105 shadow-xl shadow-primary/30 flex items-center justify-center gap-3">
                <span class="material-symbols-outlined text-lg">app_registration</span>
                <span>Register Team (Free)</span>
                <span class="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </a>

              <a href="#/challenges" class="w-full sm:w-auto px-8 py-4 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-white font-bold text-sm tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2">
                <span class="material-symbols-outlined text-lg text-accent-cyan">grid_view</span>
                <span>Explore 3 Tracks</span>
              </a>

              <button onclick="window.MicroHack.openQRModal()" class="w-full sm:w-auto px-6 py-4 rounded-xl border border-accent-cyan/30 bg-accent-cyan/10 hover:bg-accent-cyan/20 text-accent-cyan font-bold text-sm tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2">
                <span class="material-symbols-outlined text-lg">qr_code_2</span>
                <span>Flyer QR</span>
              </button>
            </div>

            <!-- Countdown Timer Card -->
            <div class="max-w-xl mx-auto glass-premium rounded-2xl p-5 border border-white/10 mb-8">
              <div class="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-3 flex items-center justify-center gap-2">
                <span class="material-symbols-outlined text-sm text-accent-cyan">timer</span>
                <span>Hackathon Countdown · 25 Feb 2027</span>
              </div>
              <div class="grid grid-cols-4 gap-3 text-center">
                <div class="p-2.5 rounded-xl bg-white/5 border border-white/5">
                  <span class="block text-2xl sm:text-3xl font-black text-white font-mono" id="cd-days">${cd.days}</span>
                  <span class="text-[10px] uppercase font-semibold text-slate-400">Days</span>
                </div>
                <div class="p-2.5 rounded-xl bg-white/5 border border-white/5">
                  <span class="block text-2xl sm:text-3xl font-black text-white font-mono" id="cd-hours">${cd.hours}</span>
                  <span class="text-[10px] uppercase font-semibold text-slate-400">Hours</span>
                </div>
                <div class="p-2.5 rounded-xl bg-white/5 border border-white/5">
                  <span class="block text-2xl sm:text-3xl font-black text-white font-mono" id="cd-min">${cd.minutes}</span>
                  <span class="text-[10px] uppercase font-semibold text-slate-400">Mins</span>
                </div>
                <div class="p-2.5 rounded-xl bg-white/5 border border-white/5">
                  <span class="block text-2xl sm:text-3xl font-black text-accent-cyan font-mono" id="cd-sec">${cd.seconds}</span>
                  <span class="text-[10px] uppercase font-semibold text-slate-400">Secs</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Stats Grid Section -->
        <section class="w-full max-w-6xl mx-auto px-6 py-12">
          <div class="glass-premium rounded-3xl p-8 border border-white/10">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div class="p-4 border-r border-white/5 last:border-none">
                <span class="block text-3xl sm:text-4xl font-black text-white mb-1">36 Hours</span>
                <span class="text-xs uppercase font-bold tracking-wider text-slate-400">Non-Stop Hacking</span>
              </div>
              <div class="p-4 border-r border-white/5 last:border-none">
                <span class="block text-3xl sm:text-4xl font-black text-accent-cyan mb-1">2 - 4</span>
                <span class="text-xs uppercase font-bold tracking-wider text-slate-400">Members Per Team</span>
              </div>
              <div class="p-4 border-r border-white/5 last:border-none">
                <span class="block text-3xl sm:text-4xl font-black text-accent-emerald mb-1">FREE</span>
                <span class="text-xs uppercase font-bold tracking-wider text-slate-400">Registration</span>
              </div>
              <div class="p-4">
                <span class="block text-3xl sm:text-4xl font-black text-white mb-1">Geetham</span>
                <span class="text-xs uppercase font-bold tracking-wider text-slate-400">Auditorium Venue</span>
              </div>
            </div>
          </div>
        </section>

        <!-- Institutional & Partner Showcase -->
        <section class="w-full max-w-6xl mx-auto px-6 py-16">
          <div class="text-center mb-10">
            <span class="text-xs font-bold text-accent-cyan uppercase tracking-widest block mb-2">Powered &amp; Organized By</span>
            <h2 class="text-2xl sm:text-3xl font-black text-white uppercase italic">Collaborating Institutions &amp; Industry Leaders</h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <!-- Easwari -->
            <div class="glass rounded-2xl p-6 border border-white/10 hover:border-primary/40 transition-all flex flex-col justify-between">
              <div>
                <div class="h-14 flex items-center mb-4">
                  <img src="/assets/easwari-logo.svg" alt="Easwari Engineering College" class="h-12 w-auto max-w-full" />
                </div>
                <h3 class="text-lg font-bold text-white mb-1">Easwari Engineering College</h3>
                <p class="text-xs text-slate-400 leading-relaxed">
                  Autonomous Institution affiliated to Anna University, Ramapuram, Chennai. Premier engineering center under SRM Group.
                </p>
              </div>
              <div class="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-accent-cyan font-semibold">
                <span>Organizing Host</span>
                <span class="material-symbols-outlined text-sm">verified</span>
              </div>
            </div>

            <!-- Microchip Technology -->
            <div class="glass rounded-2xl p-6 border border-white/10 hover:border-microchip-red/40 transition-all flex flex-col justify-between">
              <div>
                <div class="h-14 flex items-center mb-4">
                  <img src="/assets/microchip-logo.svg" alt="Microchip Technology" class="h-10 w-auto max-w-full" />
                </div>
                <h3 class="text-lg font-bold text-white mb-1">Microchip Technology</h3>
                <p class="text-xs text-slate-400 leading-relaxed">
                  Global leader in smart, connected and secure embedded control solutions, microcontrollers, DSCs, and FPGAs.
                </p>
              </div>
              <div class="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-red-400 font-semibold">
                <span>Official Technology Partner</span>
                <span class="material-symbols-outlined text-sm">memory</span>
              </div>
            </div>

            <!-- CEEI -->
            <div class="glass rounded-2xl p-6 border border-white/10 hover:border-accent-emerald/40 transition-all flex flex-col justify-between">
              <div>
                <div class="h-14 flex items-center mb-4">
                  <img src="/assets/ceei-logo.svg" alt="Centre for Edge and Embedded Intelligence" class="h-12 w-auto max-w-full" />
                </div>
                <h3 class="text-lg font-bold text-white mb-1">Centre for Edge &amp; Embedded Intelligence</h3>
                <p class="text-xs text-slate-400 leading-relaxed">
                  Dedicated Centre of Excellence (COE) driving next-gen research in edge computing, embedded AI, and industrial IoT.
                </p>
              </div>
              <div class="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-accent-emerald font-semibold">
                <span>Centre of Excellence</span>
                <span class="material-symbols-outlined text-sm">psychology</span>
              </div>
            </div>
          </div>
        </section>

        <!-- Featured Problem Statement Tracks -->
        <section class="w-full max-w-6xl mx-auto px-6 py-16">
          <div class="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
            <div>
              <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-accent-cyan text-xs font-bold uppercase tracking-widest mb-3">
                <span class="material-symbols-outlined text-sm">terminal</span>
                <span>Hackathon Tracks</span>
              </div>
              <h2 class="text-3xl sm:text-5xl font-black text-white uppercase italic tracking-tight">
                3 Problem Statement Domains
              </h2>
            </div>
            <a href="#/challenges" class="text-xs font-bold uppercase tracking-wider text-accent-cyan hover:underline flex items-center gap-1">
              <span>View Full Problem Specifications</span>
              <span class="material-symbols-outlined text-sm">chevron_right</span>
            </a>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            ${TRACKS_DATA.map((t, idx) => `
              <div class="glass-premium rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between group hover:-translate-y-2 hover:shadow-2xl">
                <div>
                  <div class="flex items-center justify-between mb-6">
                    <div class="size-14 rounded-2xl bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white shadow-lg">
                      <span class="material-symbols-outlined text-3xl">${t.icon}</span>
                    </div>
                    <span class="text-xs font-mono font-bold px-3 py-1 rounded-full bg-white/5 text-slate-400 border border-white/10 uppercase">
                      Track ${t.number}
                    </span>
                  </div>

                  <h3 class="text-xl font-bold text-white mb-2 group-hover:text-accent-cyan transition-colors">
                    ${t.title}
                  </h3>
                  <p class="text-xs text-slate-400 mb-6 leading-relaxed line-clamp-3">
                    ${t.description}
                  </p>

                  <div class="space-y-2 mb-6">
                    <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Recommended Tech:</span>
                    <div class="flex flex-wrap gap-1.5">
                      ${t.stack.slice(0, 3).map(s => `
                        <span class="px-2 py-0.5 rounded-md bg-white/5 text-[10px] font-semibold text-slate-300 border border-white/5">
                          ${s}
                        </span>
                      `).join('')}
                    </div>
                  </div>
                </div>

                <a href="#/challenges/${t.id}" class="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 border border-white/10 transition-all group-hover:bg-primary group-hover:border-primary">
                  <span>View Track Details</span>
                  <span class="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
              </div>
            `).join('')}
          </div>
        </section>

        <!-- Official Timeline Roadmap Preview -->
        <section class="w-full max-w-6xl mx-auto px-6 py-16">
          <div class="text-center mb-16">
            <span class="text-xs font-bold text-accent-cyan uppercase tracking-widest block mb-2">Roadmap &amp; Deadlines</span>
            <h2 class="text-3xl sm:text-5xl font-black text-white uppercase italic tracking-tight">Official Timeline</h2>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            ${TIMELINE_DATA.map((item, idx) => `
              <div class="glass rounded-2xl p-6 border ${item.status === 'highlight' ? 'border-primary bg-primary/10 shadow-lg shadow-primary/20' : 'border-white/10'} relative flex flex-col justify-between">
                <div>
                  <div class="flex items-center justify-between mb-4">
                    <span class="size-10 rounded-xl ${item.status === 'highlight' ? 'bg-primary text-white' : 'bg-white/5 text-accent-cyan border border-white/10'} flex items-center justify-center">
                      <span class="material-symbols-outlined text-xl">${item.icon}</span>
                    </span>
                    <span class="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded ${item.status === 'completed' ? 'bg-emerald-500/10 text-emerald-400' : item.status === 'active' ? 'bg-amber-500/10 text-amber-400' : 'bg-white/5 text-slate-400'}">
                      ${item.status}
                    </span>
                  </div>
                  <div class="text-xs font-mono font-bold text-accent-cyan mb-1">${item.date}</div>
                  <h3 class="text-base font-bold text-white mb-2">${item.title}</h3>
                  <p class="text-xs text-slate-400 leading-relaxed">${item.subtitle}</p>
                </div>
                <div class="mt-4 pt-3 border-t border-white/5 text-[10px] text-slate-500">
                  Milestone 0${idx + 1}
                </div>
              </div>
            `).join('')}
          </div>

          <div class="text-center mt-10">
            <a href="#/schedule" class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-white transition-all">
              <span>View Detailed 36-Hour Schedule</span>
              <span class="material-symbols-outlined text-sm">schedule</span>
            </a>
          </div>
        </section>

        <!-- Bottom Banner / CTA -->
        <section class="w-full max-w-5xl mx-auto px-6 py-20 text-center">
          <div class="glass-premium rounded-3xl p-10 sm:p-14 border border-white/10 relative overflow-hidden">
            <div class="absolute -top-24 -left-24 size-60 bg-primary/20 rounded-full blur-[100px] pointer-events-none"></div>
            <div class="absolute -bottom-24 -right-24 size-60 bg-accent-cyan/20 rounded-full blur-[100px] pointer-events-none"></div>

            <div class="relative z-10 max-w-2xl mx-auto">
              <span class="text-xs font-bold text-accent-emerald uppercase tracking-widest block mb-3">No Registration Cost · Open Nationally</span>
              <h2 class="text-3xl sm:text-5xl font-black text-white uppercase italic tracking-tight mb-4">
                Ready to Build at MICROHACK'27?
              </h2>
              <p class="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                Form your squad (2 - 4 members), select your challenge statement, and prepare for 36 hours of non-stop embedded engineering at Geetham Auditorium.
              </p>
              <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="#/register" class="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-primary to-accent-cyan text-white font-black text-xs uppercase tracking-widest rounded-xl shadow-xl hover:brightness-110 transition-all">
                  Register Your Team
                </a>
                <button onclick="window.MicroHack.openQRModal()" class="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/15 text-white font-bold text-xs uppercase tracking-widest rounded-xl border border-white/15 transition-all flex items-center justify-center gap-2">
                  <span class="material-symbols-outlined text-base">qr_code</span>
                  <span>Scan Flyer QR</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    `;
  };

  // 2. GUIDELINES VIEW (Matching impact-nexus-26 typography & fluidity)
  const renderGuidelines = () => {
    return `
      <div class="relative min-h-screen overflow-hidden">
        <!-- Atmospheric Glowing Orbs -->
        <div class="absolute top-0 left-1/4 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] animate-pulse-slow pointer-events-none"></div>
        <div class="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-accent-cyan/10 rounded-full blur-[100px] animate-pulse-slow pointer-events-none" style="animation-delay: 2s;"></div>

        <div class="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-32">
          <!-- Header -->
          <div class="flex flex-col items-center text-center mb-24">
            <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-md">
              <span class="relative flex h-2 w-2">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Official Rulebook
            </div>
            <h1 class="text-6xl md:text-8xl font-black leading-none tracking-tighter mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500 uppercase italic drop-shadow-2xl py-2">
              Hackathon <br>Guidelines &amp; Rules
            </h1>
            <p class="text-slate-400 text-xl lg:text-2xl max-w-3xl font-light leading-relaxed">
              Follow these principles to build a winning project at MICROHACK'27. We value hardware innovation, embedded intelligence, and real-world impact.
            </p>
          </div>

          <!-- 4 Core Pillars Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <!-- Card 1 -->
            <div class="group h-full relative p-8 glass-premium rounded-3xl hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 border border-white/5 hover:border-primary/30">
              <div class="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"></div>
              <div class="relative z-10 flex flex-col h-full">
                <div class="mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/10">
                  <span class="material-symbols-outlined text-3xl">track_changes</span>
                </div>
                <h2 class="text-2xl font-black leading-tight tracking-tight text-white mb-4 whitespace-pre-line group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-accent-cyan transition-all duration-300">
                  Focus on the
                  Core Solution
                </h2>
                <p class="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                  Don't boil the ocean. Nail the primary embedded problem first and ensure the sensor-to-actuation journey is deterministic and reliable.
                </p>
              </div>
            </div>

            <!-- Card 2 -->
            <div class="group h-full relative p-8 glass-premium rounded-3xl hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 border border-white/5 hover:border-primary/30">
              <div class="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"></div>
              <div class="relative z-10 flex flex-col h-full">
                <div class="mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-cyan/20 to-accent-cyan/5 border border-accent-cyan/20 flex items-center justify-center text-accent-cyan group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-accent-cyan/10">
                  <span class="material-symbols-outlined text-3xl">account_tree</span>
                </div>
                <h2 class="text-2xl font-black leading-tight tracking-tight text-white mb-4 whitespace-pre-line group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-accent-cyan transition-all duration-300">
                  You Decide
                  the Hardware
                </h2>
                <p class="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                  Microchip dsPIC, SAM, PIC32, FPGAs, FreeRTOS, TinyML—it's your call. Use the embedded stack that maximizes your edge performance.
                </p>
              </div>
            </div>

            <!-- Card 3 -->
            <div class="group h-full relative p-8 glass-premium rounded-3xl hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 border border-white/5 hover:border-primary/30">
              <div class="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"></div>
              <div class="relative z-10 flex flex-col h-full">
                <div class="mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-emerald/20 to-accent-emerald/5 border border-accent-emerald/20 flex items-center justify-center text-accent-emerald group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-accent-emerald/10">
                  <span class="material-symbols-outlined text-3xl">volunteer_activism</span>
                </div>
                <h2 class="text-2xl font-black leading-tight tracking-tight text-white mb-4 whitespace-pre-line group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-accent-emerald transition-all duration-300">
                  Think About
                  Real-World Fit
                </h2>
                <p class="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                  Design for industrial durability, battery life, and safety. Industrial reliability isn't an afterthought; it's a critical requirement.
                </p>
              </div>
            </div>

            <!-- Card 4 -->
            <div class="group h-full relative p-8 glass-premium rounded-3xl hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 border border-white/5 hover:border-primary/30">
              <div class="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"></div>
              <div class="relative z-10 flex flex-col h-full">
                <div class="mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-microchip-red/20 to-microchip-red/5 border border-microchip-red/20 flex items-center justify-center text-red-400 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-microchip-red/10">
                  <span class="material-symbols-outlined text-3xl">co_present</span>
                </div>
                <h2 class="text-2xl font-black leading-tight tracking-tight text-white mb-4 whitespace-pre-line group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-red-400 transition-all duration-300">
                  Live Demo
                  Matters
                </h2>
                <p class="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                  Polish your pitch and test your circuits. Show live oscilloscope traces and hardware proof before Microchip technical architects.
                </p>
              </div>
            </div>
          </div>

          <!-- Evaluation Rubric Breakdown (ImpactNexus Glass Style) -->
          <div class="mt-28 glass-premium rounded-3xl p-8 md:p-14 border border-white/10 relative overflow-hidden">
            <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
            <div class="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none"></div>
            <div class="relative z-10">
              <div class="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <span class="text-xs font-bold text-accent-cyan uppercase tracking-widest block mb-2 font-mono">Official Rubric</span>
                  <h2 class="text-3xl sm:text-5xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 uppercase italic">
                    Judging Criteria (100 Pts)
                  </h2>
                </div>
                <span class="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-slate-300 self-start md:self-auto backdrop-blur-md">
                  Microchip &amp; CEEI Panel
                </span>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-accent-cyan/30 transition-all duration-300 flex gap-5">
                  <span class="text-4xl font-black text-accent-cyan font-mono tracking-tight shrink-0">30%</span>
                  <div>
                    <h4 class="text-lg font-black text-white mb-1.5 tracking-tight">Problem Fit &amp; Edge Innovation</h4>
                    <p class="text-xs text-slate-400 leading-relaxed font-light">
                      Originality of the concept, depth of domain understanding in Industry 5.0, Automotive, or Medical Imaging, and on-device compute value.
                    </p>
                  </div>
                </div>

                <div class="p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-primary/30 transition-all duration-300 flex gap-5">
                  <span class="text-4xl font-black text-primary font-mono tracking-tight shrink-0">25%</span>
                  <div>
                    <h4 class="text-lg font-black text-white mb-1.5 tracking-tight">Technical Hardware Execution</h4>
                    <p class="text-xs text-slate-400 leading-relaxed font-light">
                      Embedded firmware quality, Microchip microcontroller/DSC interfacing, sensor bus communication (CAN/SPI/I2C), and TinyML optimization.
                    </p>
                  </div>
                </div>

                <div class="p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-accent-emerald/30 transition-all duration-300 flex gap-5">
                  <span class="text-4xl font-black text-accent-emerald font-mono tracking-tight shrink-0">25%</span>
                  <div>
                    <h4 class="text-lg font-black text-white mb-1.5 tracking-tight">Feasibility &amp; Industrial Safety</h4>
                    <p class="text-xs text-slate-400 leading-relaxed font-light">
                      Power efficiency, real-time deterministic latency, fail-safe watchdog mechanisms, and alignment with industry standards (e.g. ISO 26262).
                    </p>
                  </div>
                </div>

                <div class="p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-purple-400/30 transition-all duration-300 flex gap-5">
                  <span class="text-4xl font-black text-purple-400 font-mono tracking-tight shrink-0">20%</span>
                  <div>
                    <h4 class="text-lg font-black text-white mb-1.5 tracking-tight">Live Hardware Demonstration</h4>
                    <p class="text-xs text-slate-400 leading-relaxed font-light">
                      Clarity of the live bench demonstration, signal stability, live sensor responsiveness, and confidence during technical defense with jury.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- FAQs Section -->
          <div class="mt-28 max-w-4xl mx-auto space-y-4">
            <div class="text-center mb-12">
              <span class="text-xs font-bold text-accent-cyan uppercase tracking-widest block mb-2 font-mono">Clarifications</span>
              <h2 class="text-3xl sm:text-4xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 uppercase italic">
                Frequently Asked Questions
              </h2>
            </div>

            <div class="glass-premium rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all">
              <h4 class="text-base font-bold text-white mb-2">Who is eligible to participate?</h4>
              <p class="text-sm text-slate-400 leading-relaxed font-light">
                Undergraduate, postgraduate, and diploma engineering students across India are eligible. Teams must consist strictly of 2 to 4 members.
              </p>
            </div>

            <div class="glass-premium rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all">
              <h4 class="text-base font-bold text-white mb-2">Can we bring our own hardware and dev boards?</h4>
              <p class="text-sm text-slate-400 leading-relaxed font-light">
                Yes! Teams are permitted and encouraged to bring their preferred microcontrollers, development boards (Microchip, Arduino, ESP32, STM32, Raspberry Pi, etc.), sensors, actuators, and laptops. Standard lab equipment and select Microchip boards will also be available on-site.
              </p>
            </div>

            <div class="glass-premium rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all">
              <h4 class="text-base font-bold text-white mb-2">Is accommodation provided for outstation teams?</h4>
              <p class="text-sm text-slate-400 leading-relaxed font-light">
                Yes, hostel accommodation and food during the 36-hour hackathon (25 &amp; 26 Feb 2027) at Easwari Engineering College, Ramapuram, Chennai can be arranged upon prior registration confirmation.
              </p>
            </div>

            <div class="glass-premium rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all">
              <h4 class="text-base font-bold text-white mb-2">What is the Round 1 submission format?</h4>
              <p class="text-sm text-slate-400 leading-relaxed font-light">
                Round 1 requires submitting an initial proposal / presentation (PPT/PDF) via Google Drive link explaining your problem formulation, system block diagram, component selection, and expected deliverables.
              </p>
            </div>
          </div>

          <!-- Ready to Pitch? CTA Card (Exact ImpactNexus Structure) -->
          <div class="mt-32 max-w-4xl mx-auto">
            <div class="relative glass-premium rounded-3xl p-10 md:p-16 text-center border border-white/10 overflow-hidden">
              <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
              <div class="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none"></div>
              <div class="relative z-10 flex flex-col items-center">
                <div class="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-8 backdrop-blur-md border border-white/10 shadow-xl">
                  <span class="material-symbols-outlined text-4xl text-white">download</span>
                </div>
                <h3 class="text-3xl font-bold text-white mb-4 tracking-tight">Ready to Pitch?</h3>
                <p class="text-slate-400 max-w-lg mx-auto mb-10 text-lg font-light leading-relaxed">
                  Grab our official presentation template. It includes the slide structure, guidelines, and tips for a winning pitch.
                </p>
                <div class="flex flex-col sm:flex-row gap-6 justify-center w-full">
                  <a href="#/submit" class="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-2xl backdrop-blur-md border border-white/10 transition-all hover:scale-105">
                    <span class="material-symbols-outlined">download</span>
                    Download PPT Template
                  </a>
                  <a href="#/register" class="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-primary-hover text-white font-bold rounded-2xl shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all hover:scale-105">
                    Register Team (Free)
                    <span class="material-symbols-outlined">arrow_forward</span>
                  </a>
                </div>
              </div>
            </div>

            <div class="mt-20 text-center">
              <h3 class="text-4xl lg:text-5xl font-black leading-tight tracking-tight italic text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500 uppercase opacity-50">
                Good luck. Build something awesome.
              </h3>
            </div>
          </div>
        </div>
      </div>
    `;
  };

  // 3. CHALLENGES VIEW (Matching impact-nexus-26 typography & fluidity)
  const renderChallenges = () => {
    return `
      <div class="relative min-h-screen overflow-hidden">
        <!-- Atmospheric Glowing Orbs -->
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[700px] bg-primary/10 rounded-full blur-[140px] animate-pulse-slow pointer-events-none"></div>

        <div class="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-32">
          <div class="flex flex-col items-center text-center mb-24">
            <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-md">
              <span class="relative flex h-2 w-2">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Problem Statements
            </div>
            <h1 class="text-6xl md:text-8xl font-black mb-8 tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500 uppercase italic drop-shadow-2xl py-2">
              Hackathon <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-cyan">Tracks</span>
            </h1>
            <p class="text-slate-400 text-xl md:text-2xl max-w-3xl mx-auto font-light leading-relaxed">
              Select one of the 3 official tracks defined for MICROHACK'27. Each track offers complex real-world engineering challenges designed in consultation with Microchip engineers.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            ${TRACKS_DATA.map(t => `
              <div class="glass-premium rounded-3xl p-8 border border-white/5 hover:border-primary/30 hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 flex flex-col justify-between group relative overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"></div>
                <div class="relative z-10">
                  <div class="flex items-center justify-between mb-8">
                    <div class="size-16 rounded-2xl bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform duration-300">
                      <span class="material-symbols-outlined text-3xl">${t.icon}</span>
                    </div>
                    <span class="text-xs font-mono font-bold px-3 py-1.5 rounded-full bg-white/5 text-accent-cyan border border-white/10">
                      Track ${t.number}
                    </span>
                  </div>

                  <span class="text-[10px] font-bold text-accent-cyan uppercase tracking-widest block mb-2">${t.category}</span>
                  <h3 class="text-2xl font-black leading-tight tracking-tight text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-accent-cyan transition-all duration-300">${t.title}</h3>
                  <p class="text-sm text-slate-400 font-light leading-relaxed mb-6">${t.description}</p>

                  <div class="border-t border-white/5 pt-4 mb-8 space-y-2.5">
                    <span class="text-[10px] uppercase font-bold text-slate-500 tracking-wider block">Key Focus Areas:</span>
                    <ul class="text-xs text-slate-300 space-y-1.5 font-light">
                      ${t.whatToBuild.slice(0, 3).map(item => `
                        <li class="flex items-start gap-2">
                          <span class="material-symbols-outlined text-accent-cyan text-sm shrink-0 mt-0.5">check_circle</span>
                          <span class="line-clamp-1">${item.split(':')[0]}</span>
                        </li>
                      `).join('')}
                    </ul>
                  </div>
                </div>

                <div class="relative z-10 flex flex-col gap-2.5">
                  <a href="#/challenges/${t.id}" class="w-full py-3.5 rounded-2xl bg-gradient-to-r from-primary to-primary-hover text-white font-bold text-xs uppercase tracking-wider text-center shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all hover:scale-[1.02]">
                    Full Problem Statement
                  </a>
                  <a href="#/register?track=${t.id}" class="w-full py-3 rounded-2xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white font-semibold text-xs text-center border border-white/10 transition-all hover:scale-[1.02]">
                    Register for this Track
                  </a>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  };

  // 4. CHALLENGE DETAIL VIEW
  const renderChallengeDetail = (trackId) => {
    const track = TRACKS_DATA.find(t => t.id === trackId) || TRACKS_DATA[0];

    return `
      <div class="max-w-6xl mx-auto px-6 py-12">
        <!-- Breadcrumb -->
        <div class="flex items-center gap-2 mb-8 text-xs text-slate-400 font-medium">
          <a href="#/challenges" class="hover:text-white transition-colors">Challenges</a>
          <span class="material-symbols-outlined text-xs">chevron_right</span>
          <span class="text-accent-cyan font-semibold">${track.title}</span>
        </div>

        <!-- Header -->
        <div class="glass-premium rounded-3xl p-8 sm:p-12 border border-white/10 mb-12 relative overflow-hidden">
          <div class="relative z-10 max-w-4xl">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-accent-cyan text-xs font-mono font-bold uppercase tracking-wider mb-4">
              <span>Track ${track.number}</span>
              <span>•</span>
              <span>${track.category}</span>
            </div>

            <h1 class="text-3xl sm:text-5xl font-black text-white uppercase italic tracking-tight mb-4">
              ${track.title}
            </h1>
            <p class="text-slate-300 text-base sm:text-lg font-light leading-relaxed mb-6">
              ${track.tagline}
            </p>

            <div class="flex flex-wrap gap-4 pt-2">
              <a href="#/register?track=${track.id}" class="px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-accent-cyan text-white text-xs font-black uppercase tracking-wider shadow-lg hover:brightness-110 transition-all">
                Register for Track ${track.number}
              </a>
              <a href="#/submit" class="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-bold uppercase tracking-wider border border-white/15 transition-all">
                Submit PPT Proposal
              </a>
            </div>
          </div>
        </div>

        <!-- Details Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div class="lg:col-span-2 space-y-8">
            <!-- Problem Context -->
            <div class="glass rounded-2xl p-8 border border-white/10">
              <h2 class="text-xl font-bold text-white uppercase italic mb-4 flex items-center gap-2">
                <span class="material-symbols-outlined text-accent-cyan">info</span>
                <span>The Engineering Challenge</span>
              </h2>
              <p class="text-slate-300 text-sm leading-relaxed mb-4">
                ${track.longDescription}
              </p>
              <div class="p-4 rounded-xl bg-white/5 border border-white/5 text-slate-400 text-xs leading-relaxed">
                <strong class="text-white block mb-1">Core Bottleneck:</strong>
                ${track.problem}
              </div>
            </div>

            <!-- What to Build -->
            <div class="glass rounded-2xl p-8 border border-white/10">
              <h2 class="text-xl font-bold text-white uppercase italic mb-4 flex items-center gap-2">
                <span class="material-symbols-outlined text-accent-emerald">build</span>
                <span>Expected Deliverables &amp; Prototypes</span>
              </h2>
              <ul class="space-y-3">
                ${track.whatToBuild.map((item, idx) => `
                  <li class="p-3.5 rounded-xl bg-white/5 border border-white/5 flex items-start gap-3 text-xs text-slate-300 leading-relaxed">
                    <span class="size-5 rounded-full bg-accent-cyan/20 text-accent-cyan flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                      ${idx + 1}
                    </span>
                    <span>${item}</span>
                  </li>
                `).join('')}
              </ul>
            </div>
          </div>

          <!-- Sidebar: Hardware & Rubric -->
          <div class="space-y-6">
            <div class="glass rounded-2xl p-6 border border-white/10">
              <h3 class="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <span class="material-symbols-outlined text-accent-cyan">memory</span>
                <span>Recommended Stack</span>
              </h3>
              <div class="flex flex-wrap gap-2">
                ${track.stack.map(s => `
                  <span class="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-semibold text-slate-200">
                    ${s}
                  </span>
                `).join('')}
              </div>
            </div>

            <div class="glass rounded-2xl p-6 border border-white/10">
              <h3 class="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <span class="material-symbols-outlined text-accent-emerald">checklist</span>
                <span>Success Criteria</span>
              </h3>
              <div class="space-y-3">
                ${track.successCriteria.map(sc => `
                  <div class="text-xs">
                    <span class="font-bold text-white block mb-0.5">${sc.label}</span>
                    <span class="text-slate-400">${sc.value}</span>
                  </div>
                `).join('')}
              </div>
            </div>

            <div class="glass rounded-2xl p-6 border border-white/10 text-center">
              <span class="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">Need Guidance?</span>
              <p class="text-xs text-slate-400 mb-4">Connect with Microchip student coordinators</p>
              <a href="mailto:${EVENT_CONFIG.email}" class="text-xs text-accent-cyan font-bold hover:underline block mb-2">
                ${EVENT_CONFIG.email}
              </a>
              <span class="text-xs text-slate-400">Call: ${EVENT_CONFIG.contacts[0].phone}</span>
            </div>
          </div>
        </div>
      </div>
    `;
  };

  // 5. SCHEDULE / TIMELINE VIEW
  const renderSchedule = () => {
    return `
      <div class="max-w-5xl mx-auto px-6 py-12">
        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-accent-cyan text-xs font-bold uppercase tracking-widest mb-4">
            <span class="material-symbols-outlined text-sm">calendar_month</span>
            <span>Milestones &amp; Run of Show</span>
          </div>
          <h1 class="text-4xl sm:text-6xl font-black text-white uppercase italic tracking-tight mb-4">
            Event Timeline
          </h1>
          <p class="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            From the initial nationwide launch to the 36-hour non-stop hackathon at Geetham Auditorium and the grand valedictory awards ceremony.
          </p>
        </div>

        <!-- 4 Key Poster Milestones -->
        <div class="mb-20">
          <h2 class="text-xl font-bold text-white uppercase italic tracking-wider mb-8 flex items-center gap-2">
            <span class="material-symbols-outlined text-accent-cyan">flag</span>
            <span>National Milestone Dates</span>
          </h2>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            ${TIMELINE_DATA.map((item, idx) => `
              <div class="glass-premium rounded-2xl p-6 border ${item.status === 'highlight' ? 'border-primary shadow-xl shadow-primary/20' : 'border-white/10'} flex gap-4">
                <div class="size-12 rounded-xl ${item.status === 'highlight' ? 'bg-primary text-white' : 'bg-white/5 text-accent-cyan border border-white/10'} flex items-center justify-center shrink-0">
                  <span class="material-symbols-outlined text-2xl">${item.icon}</span>
                </div>
                <div>
                  <div class="flex items-center gap-2 mb-1">
                    <span class="text-xs font-mono font-bold text-accent-cyan">${item.date}</span>
                    <span class="text-[9px] uppercase font-bold px-2 py-0.5 rounded ${item.status === 'completed' ? 'bg-emerald-500/10 text-emerald-400' : item.status === 'active' ? 'bg-amber-500/10 text-amber-400' : 'bg-white/5 text-slate-400'}">
                      ${item.status}
                    </span>
                  </div>
                  <h3 class="text-base font-bold text-white mb-1">${item.title}</h3>
                  <p class="text-xs text-slate-400 leading-relaxed">${item.description}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Detailed 36-Hour Hackathon Run of Show -->
        <div class="glass-premium rounded-3xl p-8 sm:p-12 border border-white/10">
          <div class="mb-8">
            <span class="text-xs font-bold text-accent-cyan uppercase tracking-widest block mb-1">25 &amp; 26 February 2027 · Geetham Auditorium</span>
            <h2 class="text-2xl sm:text-3xl font-black text-white uppercase italic">36-Hour Hackathon Breakdown</h2>
          </div>

          <div class="space-y-4">
            ${(TIMELINE_DATA.find(t => t.id === 'hackathon')?.schedule || []).map((slot, idx) => `
              <div class="p-4 rounded-xl bg-white/5 border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-white/10 transition-colors">
                <div class="flex items-center gap-3">
                  <span class="size-8 rounded-lg bg-primary/20 text-accent-cyan flex items-center justify-center text-xs font-mono font-bold shrink-0">
                    0${idx + 1}
                  </span>
                  <span class="text-sm font-bold text-white">${slot.event}</span>
                </div>
                <span class="text-xs font-mono text-slate-400 sm:text-right shrink-0">
                  ${slot.time}
                </span>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  };

  // 6. REGISTRATION VIEW
  const renderRegister = () => {
    const saved = getSavedTeam();
    const urlParams = new URLSearchParams(window.location.hash.split('?')[1] || '');
    const preselectedTrack = urlParams.get('track') || (saved ? saved.trackId : 'industry-5');

    return `
      <div class="max-w-3xl mx-auto px-6 py-12">
        <div class="text-center mb-10">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-emerald/10 border border-accent-emerald/20 text-accent-emerald text-xs font-bold uppercase tracking-widest mb-3">
            <span class="material-symbols-outlined text-sm">how_to_reg</span>
            <span>Free Registration</span>
          </div>
          <h1 class="text-3xl sm:text-5xl font-black text-white uppercase italic tracking-tight mb-2">
            Team Registration
          </h1>
          <p class="text-slate-400 text-xs sm:text-sm">
            MICROHACK'27 requires 2 to 4 members per team. There is zero registration fee.
          </p>
        </div>

        <div class="glass-premium rounded-3xl p-6 sm:p-10 border border-white/10">
          <form id="team-register-form" onsubmit="window.MicroHack.handleRegister(event)" class="space-y-6">
            <!-- Track Selection -->
            <div>
              <label class="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                Select Track / Domain *
              </label>
              <select id="reg-track" required class="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white text-sm focus:border-accent-cyan outline-none">
                ${TRACKS_DATA.map(t => `
                  <option value="${t.id}" class="bg-[#101622] text-white" ${t.id === preselectedTrack ? 'selected' : ''}>
                    Track ${t.number}: ${t.title}
                  </option>
                `).join('')}
              </select>
            </div>

            <!-- Team Name & College -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  Team Name *
                </label>
                <input type="text" id="reg-team-name" required value="${saved?.teamName || ''}" placeholder="e.g. EdgeInnovators" class="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white text-sm focus:border-accent-cyan outline-none placeholder:text-slate-500" />
              </div>
              <div>
                <label class="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  College &amp; Department *
                </label>
                <input type="text" id="reg-college" required value="${saved?.college || ''}" placeholder="e.g. Easwari Engineering College, CSE" class="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white text-sm focus:border-accent-cyan outline-none placeholder:text-slate-500" />
              </div>
            </div>

            <!-- Leader Details -->
            <div class="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-4">
              <span class="text-xs font-bold text-accent-cyan uppercase tracking-wider block">Team Leader (Member 1)</span>
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <input type="text" id="reg-leader-name" required value="${saved?.leaderName || ''}" placeholder="Leader Full Name *" class="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white text-xs focus:border-accent-cyan outline-none" />
                <input type="email" id="reg-leader-email" required value="${saved?.leaderEmail || ''}" placeholder="Leader Email Address *" class="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white text-xs focus:border-accent-cyan outline-none" />
                <input type="tel" id="reg-leader-phone" required value="${saved?.leaderPhone || ''}" placeholder="Phone (10 digits) *" class="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white text-xs focus:border-accent-cyan outline-none" />
              </div>
            </div>

            <!-- Member 2 -->
            <div class="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-4">
              <span class="text-xs font-bold text-slate-300 uppercase tracking-wider block">Team Member 2 *</span>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input type="text" id="reg-m2-name" required value="${saved?.m2Name || ''}" placeholder="Member 2 Full Name *" class="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white text-xs focus:border-accent-cyan outline-none" />
                <input type="email" id="reg-m2-email" required value="${saved?.m2Email || ''}" placeholder="Member 2 Email Address *" class="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white text-xs focus:border-accent-cyan outline-none" />
              </div>
            </div>

            <!-- Member 3 & 4 (Optional for 2-4 team size) -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div class="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-3">
                <span class="text-xs font-bold text-slate-400 uppercase tracking-wider block">Member 3 (Optional)</span>
                <input type="text" id="reg-m3-name" value="${saved?.m3Name || ''}" placeholder="Member 3 Full Name" class="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-xs focus:border-accent-cyan outline-none" />
                <input type="email" id="reg-m3-email" value="${saved?.m3Email || ''}" placeholder="Member 3 Email" class="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-xs focus:border-accent-cyan outline-none" />
              </div>

              <div class="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-3">
                <span class="text-xs font-bold text-slate-400 uppercase tracking-wider block">Member 4 (Optional)</span>
                <input type="text" id="reg-m4-name" value="${saved?.m4Name || ''}" placeholder="Member 4 Full Name" class="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-xs focus:border-accent-cyan outline-none" />
                <input type="email" id="reg-m4-email" value="${saved?.m4Email || ''}" placeholder="Member 4 Email" class="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-xs focus:border-accent-cyan outline-none" />
              </div>
            </div>

            <!-- Project Abstract / Summary -->
            <div>
              <label class="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                Preliminary Project Abstract / Idea (Brief)
              </label>
              <textarea id="reg-abstract" rows="3" placeholder="Briefly explain your concept, target problem, and planned hardware/software stack..." class="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white text-xs focus:border-accent-cyan outline-none placeholder:text-slate-500">${saved?.abstract || ''}</textarea>
            </div>

            <!-- Declaration Checkbox -->
            <div class="flex items-start gap-3">
              <input type="checkbox" id="reg-consent" required class="mt-1 size-4 rounded bg-white/5 border-white/20 text-primary" checked />
              <label for="reg-consent" class="text-xs text-slate-400 leading-relaxed">
                I confirm that all registered members are bona fide students and agree to participate in person at Geetham Auditorium, Easwari Engineering College on 25 &amp; 26 Feb 2027.
              </label>
            </div>

            <!-- Submit Button -->
            <button type="submit" class="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-accent-cyan text-white text-xs font-black uppercase tracking-widest hover:brightness-110 shadow-xl shadow-primary/25 transition-all">
              Confirm &amp; Register Team
            </button>
          </form>
        </div>
      </div>
    `;
  };

  // 7. SUBMIT VIEW (ROUND 1 PPT PROPOSAL)
  const renderSubmit = () => {
    const savedTeam = getSavedTeam();
    const savedSub = getSavedSubmission();

    return `
      <div class="max-w-2xl mx-auto px-6 py-12">
        <div class="text-center mb-10">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-accent-cyan text-xs font-bold uppercase tracking-widest mb-3">
            <span class="material-symbols-outlined text-sm">upload_file</span>
            <span>Round 1 Proposal</span>
          </div>
          <h1 class="text-3xl sm:text-5xl font-black text-white uppercase italic tracking-tight mb-2">
            Submit Proposal PPT
          </h1>
          <p class="text-slate-400 text-xs sm:text-sm">
            Provide your Google Drive link to your Round 1 presentation (PPT/PDF). Ensure link access is set to "Anyone with the link can view".
          </p>
        </div>

        <div class="glass-premium rounded-3xl p-6 sm:p-10 border border-white/10">
          <form id="submission-form" onsubmit="window.MicroHack.handleSubmit(event)" class="space-y-6">
            <div>
              <label class="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                Team Name *
              </label>
              <input type="text" id="sub-team-name" required value="${savedSub?.teamName || savedTeam?.teamName || ''}" placeholder="Registered Team Name" class="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white text-sm focus:border-accent-cyan outline-none" />
            </div>

            <div>
              <label class="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                Track / Problem Statement *
              </label>
              <select id="sub-track" required class="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white text-sm focus:border-accent-cyan outline-none">
                ${TRACKS_DATA.map(t => `
                  <option value="${t.id}" class="bg-[#101622] text-white">
                    Track ${t.number}: ${t.title}
                  </option>
                `).join('')}
              </select>
            </div>

            <div>
              <label class="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                Google Drive Link (PPT / PDF) *
              </label>
              <input type="url" id="sub-drive-link" required value="${savedSub?.driveLink || ''}" placeholder="https://drive.google.com/file/d/..." class="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white text-sm focus:border-accent-cyan outline-none placeholder:text-slate-500" />
              <span class="text-[10px] text-slate-400 mt-1 block">Make sure permissions are set to "Anyone on the internet with the link can view".</span>
            </div>

            <div>
              <label class="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                Hardware / Microcontroller Focus
              </label>
              <input type="text" id="sub-hardware" value="${savedSub?.hardware || ''}" placeholder="e.g. Microchip dsPIC33, SAM E54, or custom dev board" class="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white text-sm focus:border-accent-cyan outline-none placeholder:text-slate-500" />
            </div>

            <button type="submit" class="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-accent-cyan text-white text-xs font-black uppercase tracking-widest hover:brightness-110 shadow-xl shadow-primary/25 transition-all">
              Submit Final Proposal
            </button>
          </form>
        </div>
      </div>
    `;
  };

  // 8. MY SUBMISSIONS / MY TEAM VIEW
  const renderMySubmissions = () => {
    const team = getSavedTeam();
    const submission = getSavedSubmission();

    if (!team && !submission) {
      return `
        <div class="max-w-xl mx-auto px-6 py-20 text-center">
          <div class="glass-premium rounded-3xl p-10 border border-white/10">
            <span class="size-16 rounded-2xl bg-white/5 text-slate-400 flex items-center justify-center mx-auto mb-4">
              <span class="material-symbols-outlined text-3xl">inbox</span>
            </span>
            <h2 class="text-2xl font-black text-white uppercase italic mb-2">No Registration Found</h2>
            <p class="text-xs text-slate-400 mb-6">
              You haven't registered your team or submitted your Round 1 presentation yet.
            </p>
            <div class="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="#/register" class="px-6 py-3 rounded-xl bg-primary text-white text-xs font-bold uppercase tracking-wider">
                Register Team
              </a>
              <button onclick="window.MicroHack.openQRModal()" class="px-6 py-3 rounded-xl bg-white/10 text-slate-300 text-xs font-bold uppercase tracking-wider">
                Scan QR
              </button>
            </div>
          </div>
        </div>
      `;
    }

    return `
      <div class="max-w-3xl mx-auto px-6 py-12">
        <div class="text-center mb-10">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-3">
            <span class="material-symbols-outlined text-sm">verified</span>
            <span>Registration Verified</span>
          </div>
          <h1 class="text-3xl sm:text-5xl font-black text-white uppercase italic tracking-tight mb-2">
            My Team &amp; Submission
          </h1>
          <p class="text-slate-400 text-xs sm:text-sm">
            Overview of your MICROHACK'27 team roster, chosen track, and Round 1 proposal status.
          </p>
        </div>

        <div class="glass-premium rounded-3xl p-8 border border-white/10 space-y-8">
          <!-- Team Header -->
          <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 gap-4">
            <div>
              <span class="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Team Name</span>
              <h2 class="text-2xl font-black text-white">${team?.teamName || submission?.teamName || 'Your Team'}</h2>
              <span class="text-xs text-accent-cyan">${team?.college || 'Easwari Engineering College'}</span>
            </div>
            <div class="flex flex-col items-start sm:items-end">
              <span class="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Status</span>
              <span class="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-bold uppercase">
                ${submission ? 'Proposal Submitted' : 'Registration Confirmed'}
              </span>
            </div>
          </div>

          <!-- Roster -->
          <div>
            <h3 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Team Members</h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div class="p-3.5 rounded-xl bg-white/5 border border-white/5">
                <span class="text-[10px] uppercase font-bold text-accent-cyan block">Leader</span>
                <span class="text-white font-bold">${team?.leaderName || 'Leader Name'}</span>
                <span class="text-slate-400 block">${team?.leaderEmail || ''}</span>
              </div>
              <div class="p-3.5 rounded-xl bg-white/5 border border-white/5">
                <span class="text-[10px] uppercase font-bold text-slate-400 block">Member 2</span>
                <span class="text-white font-bold">${team?.m2Name || 'Member 2'}</span>
                <span class="text-slate-400 block">${team?.m2Email || ''}</span>
              </div>
              ${team?.m3Name ? `
                <div class="p-3.5 rounded-xl bg-white/5 border border-white/5">
                  <span class="text-[10px] uppercase font-bold text-slate-400 block">Member 3</span>
                  <span class="text-white font-bold">${team.m3Name}</span>
                </div>
              ` : ''}
              ${team?.m4Name ? `
                <div class="p-3.5 rounded-xl bg-white/5 border border-white/5">
                  <span class="text-[10px] uppercase font-bold text-slate-400 block">Member 4</span>
                  <span class="text-white font-bold">${team.m4Name}</span>
                </div>
              ` : ''}
            </div>
          </div>

          <!-- Submission Status -->
          <div class="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span class="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Proposal (PPT) Link</span>
              ${submission?.driveLink ? `
                <a href="${submission.driveLink}" target="_blank" rel="noopener noreferrer" class="text-xs text-accent-cyan font-bold hover:underline block truncate max-w-sm">
                  ${submission.driveLink}
                </a>
              ` : `
                <span class="text-xs text-amber-400 block">Not yet submitted</span>
              `}
            </div>

            <a href="#/submit" class="px-5 py-2.5 rounded-xl bg-primary text-white text-xs font-bold uppercase tracking-wider text-center">
              ${submission ? 'Update Proposal' : 'Submit PPT Now'}
            </a>
          </div>
        </div>
      </div>
    `;
  };

  // 9. HEALTH VIEW
  const renderHealth = () => {
    return `
      <div class="max-w-xl mx-auto px-6 py-20">
        <div class="glass-premium rounded-3xl p-8 border border-white/10">
          <div class="flex items-center gap-3 mb-6">
            <span class="size-3 rounded-full bg-emerald-400 animate-pulse"></span>
            <h1 class="text-xl font-bold text-white uppercase italic">Platform System Health</h1>
          </div>
          <div class="space-y-3 text-xs text-slate-300">
            <div class="flex justify-between py-2 border-b border-white/5">
              <span>App Status</span>
              <span class="text-emerald-400 font-bold">Operational (100%)</span>
            </div>
            <div class="flex justify-between py-2 border-b border-white/5">
              <span>Client Local Storage</span>
              <span class="text-emerald-400 font-bold">Ready</span>
            </div>
            <div class="flex justify-between py-2 border-b border-white/5">
              <span>Flyer Asset CDN</span>
              <span class="text-emerald-400 font-bold">Verified</span>
            </div>
            <div class="flex justify-between py-2 border-b border-white/5">
              <span>Event Date</span>
              <span class="text-white font-mono">25 &amp; 26 Feb 2027</span>
            </div>
            <div class="flex justify-between py-2">
              <span>Host Institution</span>
              <span class="text-white">Easwari Engineering College</span>
            </div>
          </div>
        </div>
      </div>
    `;
  };

  // 10. PRIVACY VIEW
  const renderPrivacy = () => {
    return `
      <div class="max-w-4xl mx-auto px-6 py-12">
        <div class="glass-premium rounded-3xl p-8 sm:p-12 border border-white/10 space-y-6 text-xs text-slate-300 leading-relaxed">
          <h1 class="text-3xl font-black text-white uppercase italic mb-4">Privacy &amp; Data Ethics Policy</h1>
          <p>
            MICROHACK'27, organized by the Centre for Edge and Embedded Intelligence, Easwari Engineering College, respects participant privacy. All participant contact details (emails, phone numbers, team rosters) are collected solely for event logistics, badge printing, and communication regarding competition updates.
          </p>
          <h3 class="text-sm font-bold text-white uppercase tracking-wider pt-2">Intellectual Property Ownership</h3>
          <p>
            All intellectual property (IP), source code, schematics, and designs developed during the hackathon belong 100% to the student participants. Neither Easwari Engineering College nor Microchip Technology claims any ownership over participant inventions.
          </p>
        </div>
      </div>
    `;
  };

  // 11. TERMS VIEW
  const renderTerms = () => {
    return `
      <div class="max-w-4xl mx-auto px-6 py-12">
        <div class="glass-premium rounded-3xl p-8 sm:p-12 border border-white/10 space-y-6 text-xs text-slate-300 leading-relaxed">
          <h1 class="text-3xl font-black text-white uppercase italic mb-4">Terms &amp; Code of Conduct</h1>
          <p>
            Participants are expected to adhere to the highest academic integrity standards. All code, circuit schematics, and TinyML models submitted must be the original work of team members.
          </p>
          <ul class="list-disc pl-5 space-y-2">
            <li>Teams must consist of 2 to 4 eligible students.</li>
            <li>Zero tolerance for harassment, discrimination, or unsportsmanlike conduct.</li>
            <li>Decisions of the Microchip jury and organizing committee are final.</li>
          </ul>
        </div>
      </div>
    `;
  };

  // 12. 404 NOT FOUND VIEW
  const renderNotFound = () => {
    return `
      <div class="max-w-md mx-auto px-6 py-24 text-center">
        <div class="glass-premium rounded-3xl p-10 border border-white/10">
          <span class="text-6xl font-black text-accent-cyan font-mono block mb-2">404</span>
          <h2 class="text-xl font-bold text-white uppercase italic mb-2">Signal Lost in Circuit</h2>
          <p class="text-xs text-slate-400 mb-6">The requested pathway does not exist on this embedded board.</p>
          <a href="#/" class="px-6 py-3 rounded-xl bg-primary text-white text-xs font-bold uppercase tracking-wider inline-block">
            Return to Launchpad
          </a>
        </div>
      </div>
    `;
  };

  // --- High-Performance Multi-Container Router (0ms Zero Delay Switching) ---
  let currentRoute = null;
  let isNavigating = false;
  const viewCache = {
    "/": true // Home view is pre-rendered in static HTML (#view-home)
  };

  const updateNavLinks = (route) => {
    document.querySelectorAll(".nav-link").forEach(link => {
      const target = link.getAttribute("data-route");
      if (target === route || (target !== "/" && route.startsWith(target))) {
        link.classList.add("text-primary", "font-bold");
        link.classList.remove("text-slate-300");
      } else {
        link.classList.remove("text-primary", "font-bold");
        link.classList.add("text-slate-300");
      }
    });

    const mobileMenu = document.getElementById("mobile-menu");
    if (mobileMenu && !mobileMenu.classList.contains("hidden")) {
      mobileMenu.classList.add("hidden");
    }
  };

  const renderApp = (force = false) => {
    const route = getRoute();
    if (!force && route === currentRoute) {
      window.scrollTo(0, 0);
      return;
    }

    updateNavLinks(route);
    window.scrollTo(0, 0);

    const appEl = document.getElementById("app");
    if (!appEl) return;

    // Determine target container and rendering function
    let targetId = "view-home";
    let renderFn = null;
    let cacheKey = route;

    if (route === "/" || route === "") {
      targetId = "view-home";
      renderFn = null; // already in static HTML
    } else if (route === "/guidelines") {
      targetId = "view-guidelines";
      renderFn = renderGuidelines;
    } else if (route === "/challenges") {
      targetId = "view-challenges";
      renderFn = renderChallenges;
    } else if (route.startsWith("/challenges/")) {
      const trackId = route.replace("/challenges/", "");
      targetId = "view-challenge-detail";
      renderFn = () => renderChallengeDetail(trackId);
      cacheKey = route;
    } else if (route === "/schedule") {
      targetId = "view-schedule";
      renderFn = renderSchedule;
    } else if (route === "/register") {
      targetId = "view-register";
      renderFn = renderRegister;
    } else if (route === "/submit") {
      targetId = "view-submit";
      renderFn = renderSubmit;
    } else if (route === "/my-submissions") {
      targetId = "view-my-submissions";
      renderFn = renderMySubmissions;
      cacheKey = null; // Always refresh with latest submissions
    } else if (route === "/health") {
      targetId = "view-other";
      renderFn = renderHealth;
    } else if (route === "/privacy") {
      targetId = "view-other";
      renderFn = renderPrivacy;
    } else if (route === "/terms") {
      targetId = "view-other";
      renderFn = renderTerms;
    } else {
      targetId = "view-other";
      renderFn = renderNotFound;
    }

    // Hide all view containers inside #app
    const allViews = appEl.querySelectorAll(".page-view");
    allViews.forEach(v => {
      v.style.display = "none";
    });

    let targetEl = document.getElementById(targetId);
    if (!targetEl) {
      targetEl = document.createElement("div");
      targetEl.id = targetId;
      targetEl.className = "page-view";
      appEl.appendChild(targetEl);
    }

    // Populate view if not yet cached or if dynamic
    if (renderFn && (!cacheKey || !viewCache[cacheKey])) {
      targetEl.innerHTML = `<div class="page-enter">${renderFn()}</div>`;
      if (cacheKey) viewCache[cacheKey] = true;
    }

    // Instantly display target view (0ms switch)
    targetEl.style.display = "block";
    currentRoute = route;
  };

  // Pre-warm static views in idle time so initial clicks are also 0ms instant
  const warmUpViews = () => {
    const list = [
      { id: "view-guidelines", fn: renderGuidelines, key: "/guidelines" },
      { id: "view-challenges", fn: renderChallenges, key: "/challenges" },
      { id: "view-schedule", fn: renderSchedule, key: "/schedule" },
      { id: "view-register", fn: renderRegister, key: "/register" },
      { id: "view-submit", fn: renderSubmit, key: "/submit" }
    ];
    list.forEach(item => {
      const el = document.getElementById(item.id);
      if (el && !viewCache[item.key]) {
        el.innerHTML = `<div class="page-enter">${item.fn()}</div>`;
        viewCache[item.key] = true;
      }
    });
  };

  // --- Smooth Toast Notification System ---
  const showToast = (title, message, type = "success") => {
    let container = document.getElementById("toast-container");
    if (!container) {
      container = document.createElement("div");
      container.id = "toast-container";
      document.body.appendChild(container);
    }
    const toast = document.createElement("div");
    const isSuccess = type === "success";
    toast.className = `toast-item glass-premium px-5 py-4 rounded-2xl border ${isSuccess ? 'border-accent-emerald/40 bg-emerald-950/90 text-emerald-300' : 'border-primary/40 bg-slate-900/90 text-white'} shadow-2xl flex items-start gap-3 min-w-[280px] max-w-sm pointer-events-auto`;
    toast.innerHTML = `
      <span class="material-symbols-outlined text-xl ${isSuccess ? 'text-accent-emerald' : 'text-primary'} mt-0.5 shrink-0">
        ${isSuccess ? 'check_circle' : 'info'}
      </span>
      <div class="flex-1">
        <h4 class="text-xs font-bold uppercase tracking-wider text-white">${title}</h4>
        <p class="text-xs text-slate-300 mt-0.5 leading-relaxed">${message}</p>
      </div>
    `;
    container.appendChild(toast);
    setTimeout(() => {
      toast.classList.add("toast-leave");
      setTimeout(() => toast.remove(), 260);
    }, 4000);
  };

  // --- Scroll-Reveal Observer ---
  const initScrollReveal = () => {
    if (!('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  };

  // --- Form & Action Handlers ---
  window.MicroHack = Object.assign(window.MicroHack || {}, {
    navigate: (route) => {
      const clean = route.startsWith("/") ? route : "/" + route;
      const targetHash = "#" + clean;
      if (window.location.hash === targetHash) {
        renderApp();
        return;
      }
      isNavigating = true;
      window.location.hash = targetHash;
      renderApp();
      setTimeout(() => { isNavigating = false; }, 60);
    },
    openQRModal: () => {
      const modal = document.getElementById("qr-modal");
      if (modal) {
        modal.style.display = "flex";
      }
    },
    closeQRModal: () => {
      const modal = document.getElementById("qr-modal");
      if (modal) {
        modal.style.display = "none";
      }
    },
    handleRegister: (e) => {
      e.preventDefault();
      const trackId = document.getElementById("reg-track").value;
      const teamName = document.getElementById("reg-team-name").value.trim();
      const college = document.getElementById("reg-college").value.trim();
      const leaderName = document.getElementById("reg-leader-name").value.trim();
      const leaderEmail = document.getElementById("reg-leader-email").value.trim();
      const leaderPhone = document.getElementById("reg-leader-phone").value.trim();
      const m2Name = document.getElementById("reg-m2-name").value.trim();
      const m2Email = document.getElementById("reg-m2-email").value.trim();
      const m3Name = document.getElementById("reg-m3-name")?.value.trim() || "";
      const m4Name = document.getElementById("reg-m4-name")?.value.trim() || "";
      const abstract = document.getElementById("reg-abstract")?.value.trim() || "";

      const teamData = {
        trackId,
        teamName,
        college,
        leaderName,
        leaderEmail,
        leaderPhone,
        m2Name,
        m2Email,
        m3Name,
        m4Name,
        abstract,
        registeredAt: new Date().toISOString()
      };

      saveTeam(teamData);
      delete viewCache["/my-submissions"];
      showToast("Registration Confirmed! 🎉", `Team "${teamName}" registered for MICROHACK'27. Proceeding to proposal dashboard.`, "success");
      setTimeout(() => {
        window.MicroHack.navigate("/my-submissions");
      }, 700);
    },
    handleSubmit: (e) => {
      e.preventDefault();
      const teamName = document.getElementById("sub-team-name").value.trim();
      const trackId = document.getElementById("sub-track").value;
      const driveLink = document.getElementById("sub-drive-link").value.trim();
      const hardware = document.getElementById("sub-hardware").value.trim();

      const subData = {
        teamName,
        trackId,
        driveLink,
        hardware,
        submittedAt: new Date().toISOString()
      };

      saveSubmission(subData);
      delete viewCache["/my-submissions"];
      showToast("Proposal Submitted! ⚡", "Round 1 PPT link recorded successfully. Your team profile is now updated.", "success");
      setTimeout(() => {
        window.MicroHack.navigate("/my-submissions");
      }, 700);
    }
  });

  // --- Global Event Delegation & Instant Click Router ---
  window._renderApp = renderApp;
  window.addEventListener("hashchange", () => {
    if (!isNavigating) {
      renderApp();
    }
  });

  // Catch all clicks on hash links across the entire document
  document.addEventListener("click", (e) => {
    const link = e.target.closest("a");
    if (!link) return;
    const href = link.getAttribute("href");
    if (href && href.startsWith("#/")) {
      e.preventDefault();
      window.MicroHack.navigate(href.slice(1));
    }
  });

  const initApp = () => {
    renderApp();
    // Warm up static views so every click is 0ms instant
    setTimeout(warmUpViews, 10);

    // Mobile Hamburger
    const menuBtn = document.getElementById("mobile-menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");
    if (menuBtn && mobileMenu) {
      menuBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        if (mobileMenu.style.display === "block") {
          mobileMenu.style.display = "none";
        } else {
          mobileMenu.style.display = "block";
        }
      });
      // Auto close mobile menu when link is clicked
      mobileMenu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
          mobileMenu.style.display = "none";
        });
      });
    }

    // Modal click-outside & Escape dismissal
    const qrModal = document.getElementById("qr-modal");
    if (qrModal) {
      qrModal.addEventListener("click", (e) => {
        if (e.target === qrModal) {
          window.MicroHack.closeQRModal();
        }
      });
    }
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        window.MicroHack.closeQRModal();
      }
    });

    // Live Countdown Interval
    setInterval(() => {
      const cd = getCountdownString();
      const d = document.getElementById("cd-days");
      const h = document.getElementById("cd-hours");
      const m = document.getElementById("cd-min");
      const s = document.getElementById("cd-sec");
      if (d) d.textContent = cd.days;
      if (h) h.textContent = cd.hours;
      if (m) m.textContent = cd.minutes;
      if (s) s.textContent = cd.seconds;
    }, 1000);

    // Interactive pointer glow sheen (DreamPi / ImpactNexus style)
    let rafId = null;
    let mouseX = window.innerWidth * 0.5;
    let mouseY = window.innerHeight * 0.3;
    const updateGlow = () => {
      rafId = null;
      document.documentElement.style.setProperty("--mx", `${mouseX}px`);
      document.documentElement.style.setProperty("--my", `${mouseY}px`);
    };
    window.addEventListener("pointermove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (rafId === null) {
        rafId = window.requestAnimationFrame(updateGlow);
      }
    }, { passive: true });
  };

  // Immediate Execution Guard (works whether DOM is loading, interactive, or complete)
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initApp);
  } else {
    initApp();
  }
})();

