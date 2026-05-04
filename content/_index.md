---
title: 'SEISAD'
type: landing

design:
  spacing: "0"

sections:
  # ─────────────────────────────────────────────────────────
  # 0. GLOBAL STYLE (核心：统一 spacing system)
  # ─────────────────────────────────────────────────────────
  - block: markdown
    content:
      text: |
        <style>
          /* ===== NAVBAR BACKGROUND ===== */
          .navbar {
            background-color: #008a85 !important; 
          }
          .navbar-brand, .nav-link, .search-icon {
            color: white !important;
          }
    
          /* ===== 1. GLOBAL WIDTH ===== */
          .max-w-prose, .prose, .container, .mx-auto { 
            max-width: 85% !important; 
            width: 85% !important; 
          }

          /* ===== 2. REMOVE HUGE DEFAULT SPACING ===== */
          .blox-page-header {
            margin-bottom: 0 !important;
            padding-bottom: 0 !important;
          }

          .hbb-section {
            padding-top: 1rem !important;
            padding-bottom: 1rem !important;
          }

          /* ===== 3. SPACING SYSTEM (统一间距标准) ===== */
          :root {
            --space-xs: 0.5rem;
            --space-sm: 1rem;
            --space-md: 1.5rem;
            --space-lg: 2.5rem;
          }

          /* ===== 4. SLIDER ===== */
          .slider-container {
            width: 100%;
            height: 520px;
            overflow: hidden;
            position: relative;
            margin: var(--space-sm) 0 var(--space-md) 0;
          }

          .slider-wrapper {
            display: flex;
            width: 300%;
            height: 100%;
            animation: slide-loop 12s infinite;
          }

          .slider-wrapper img {
            width: 33.333%;
            height: 100%;
            object-fit: cover;
          }

          @keyframes slide-loop {
            0% { transform: translateX(0); }
            28% { transform: translateX(0); }
            33% { transform: translateX(-33.33%); }
            61% { transform: translateX(-33.33%); }
            66% { transform: translateX(-66.66%); }
            95% { transform: translateX(-66.66%); }
            100% { transform: translateX(0); }
          }

          /* ===== 5. TITLE ===== */
          .main-title {
            text-align: center;
            padding: var(--space-xs) 0;
            font-size: 1.5rem;
            font-weight: bold;
            color: #2d3748;
            letter-spacing: 1px;
          }

          /* ===== 6. TEXT BLOCK ===== */
          .research-text {
            text-align: justify;
            line-height: 1.8;
            font-size: 1.08rem;
            color: #222;
          }

          /* ===== 7. LOGO BAR ===== */
          .logo-bar {
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            padding: var(--space-lg) 0;
            border-top: 1px solid #f0f0f0;
            margin-top: var(--space-md);
          }
        </style>

  # ─────────────────────────────────────────────────────────
  # 1. TITLE + SLIDER
  # ─────────────────────────────────────────────────────────
  - block: markdown
    content:
      text: |
        <div class="main-title">
          — Synthesis, Electrochemistry, Imaging and Analytical Systems for Diagnosis Team (SEISAD) —
        </div>

        <div class="slider-container">
          <div class="slider-wrapper">
            <img src="media/AA3A0511.JPG">
            <img src="media/AA3A0511.JPG" style="filter: brightness(0.9);">
            <img src="media/AA3A0511.JPG" style="filter: brightness(0.85);">
          </div>
        </div>
    design:
      full_width: true

  # ─────────────────────────────────────────────────────────
  # 2. RESEARCH
  # ─────────────────────────────────────────────────────────
  - block: markdown
    content:
      title: "Our Research"
      text: |
        <div class="research-text">
          <span style="float:left; font-size:60px; line-height:50px; padding-right:15px; color:#008a85; font-weight:bold;">A</span>
          ctually, the Team develops projects aimed at elaborating processes and tools for the early detection of pathological signals using chemical and analytical methodologies. The main research directions focus on: (i) new synthetic methodologies and supported catalysis in mini- and continuous microflow reactors, protein ligand library synthesis, and advanced radiolabeling for imaging; (ii) electrochemical sensors for biological markers, molecular materials for electrocatalysis, and label-free detection of microRNAs via scanning electrochemical microscopy (SECM); (iii) development of targeted optical and MR imaging agents, functional MRI methods for characterization, and therapeutic follow-up of cancer in preclinical models; and (iv) characterization of new nano-supports and selective objects such as peptide nanotubes, nanobodies, and biocompatible nano-objects for medical diagnosis and environmental control.
        </div>
    design:
      full_width: true
      spacing:
        padding: ["1rem", "0", "1.5rem", "0"]

  # ─────────────────────────────────────────────────────────
  # 3. LOGO BAR
  # ─────────────────────────────────────────────────────────
  - block: markdown
    content:
      text: |
        <div class="logo-bar">
          <img src="media/seisad.png" style="height:80px;">
          <img src="media/chimie.png" style="height:100px;">
          <img src="media/iclehs.png" style="height:75px;">
          <img src="media/cnrs.png" style="height:80px;">
        </div>
    design:
      full_width: true
---
