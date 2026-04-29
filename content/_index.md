---
title: 'SEISAD'
type: landing

design:
  spacing: "0"

sections:
  # ────────────────────────────────────────────────────────────────────────────
  # 0. Global Style Injection (Combined Styles)
  # ────────────────────────────────────────────────────────────────────────────
  - block: markdown
    content:
      text: |
        <style>
          /* 1. Navbar: Height, Font, and Removing Grey Layers */
          .navbar { 
            background-color: #008a85 !important; 
            box-shadow: none !important; 
            border: none !important;
            padding: 25px 0 !important; /* Increased Height */
          }
          .navbar-brand {
            color: #ffffff !important;
            font-size: 1.6rem !important;
            font-weight: bold !important;
            margin-left: 60px !important; /* SEISAD shifted right */
          }
          .navbar-nav .nav-link { 
            color: #ffffff !important; 
            font-weight: 700 !important; 
            font-size: 1.25rem !important; /* Increased Font Size */
            margin: 0 15px !important; /* Horizontal Spacing */
          }
          .navbar-nav .nav-item.active .nav-link, .navbar-nav .nav-link:hover {
            background-color: #ffffff !important;
            color: #008a85 !important;
            border-radius: 5px;
          }
          .navbar-brand, .nav-link i, .nav-link svg { color: #ffffff !important; }

          /* 2. Full-Width Layout */
          .max-w-prose, .prose { max-width: 100% !important; }
          .hbb-section { padding: 0 !important; }

          /* 3. Automatic 3-Second Slider Logic */
          .slider-container {
            width: 100%;
            overflow: hidden;
            position: relative;
            height: 600px;
            background: #fff;
          }
          .slider-wrapper {
            display: flex;
            width: 300%; /* 3 images */
            height: 100%;
            animation: auto-slide 9s infinite; /* 3s per image */
          }
          .slider-wrapper img {
            width: 33.333%;
            height: 100%;
            object-fit: cover;
          }
          @keyframes auto-slide {
            0% { transform: translateX(0); }
            30% { transform: translateX(0); } /* Hold 3s */
            33% { transform: translateX(-33.333%); }
            63% { transform: translateX(-33.333%); } /* Hold 3s */
            66% { transform: translateX(-66.666%); }
            96% { transform: translateX(-66.666%); } /* Hold 3s */
            100% { transform: translateX(0); }
          }

          /* 4. Footer Logo Bar: No grey line, even distribution */
          .footer-logo-bar {
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            padding: 100px 5%;
            background-color: #ffffff !important;
            border: none !important;
          }
        </style>

  # ────────────────────────────────────────────────────────────────────────────
  # 1. Slider & Main Title
  # ────────────────────────────────────────────────────────────────────────────
  - block: markdown
    content:
      text: |
        <div class="slider-container">
          <div class="slider-wrapper">
            <img src="media/AA3A0511.JPG" alt="Group Photo 1">
            <img src="media/AA3A0511.JPG" alt="Lab Work 2" style="filter: hue-rotate(45deg);"> 
            <img src="media/AA3A0511.JPG" alt="Equipment 3" style="filter: brightness(0.8);">
          </div>
        </div>
        <div style="text-align: center; padding: 40px 20px; background: #fff;">
          <h2 style="color: #2d3748; font-weight: bold; font-size: 1.5rem; letter-spacing: 0.5px;">
            — Synthesis, Electrochemistry, Imaging and Analytical Systems for Diagnosis Team (SEISAD) —
          </h2>
        </div>
    design:
      full_width: true

  # ────────────────────────────────────────────────────────────────────────────
  # 2. Research Description
  # ────────────────────────────────────────────────────────────────────────────
  - block: markdown
    content:
      title: "Our Research"
      text: |
        <div style="max-width: 1100px; margin: 0 auto; text-align: justify; line-height: 1.8; font-size: 1.1rem; color: #222; padding: 0 20px;">
          <span style="float: left; font-size: 70px; line-height: 60px; padding-top: 4px; padding-right: 15px; font-family: Georgia; color: #008a85; font-weight: bold;">A</span>ctually, the Team develops projects aimed at elaborating processes and tools for the early detection of pathological signals using chemical and analytical methodologies. The main research directions focus on: (i) new synthetic methodologies and supported catalysis in mini- and continuous microflow reactors, protein ligand library synthesis, and advanced radiolabeling for imaging; (ii) electrochemical sensors for biological markers, molecular materials for electrocatalysis, and label-free detection of microRNAs via scanning electrochemical microscopy (SECM); (iii) development of targeted optical and MR imaging agents, functional MRI methods for characterization, and therapeutic follow-up of cancer in preclinical models; and (iv) characterization of new nano-supports and selective objects such as peptide nanotubes, nanobodies, and biocompatible nano-objects for medical diagnosis and environmental control.
        </div>
    design:
      full_width: true
      background:
        color: "#ffffff"
      spacing:
        padding: ["5rem", 0, "5rem", 0]

  # ────────────────────────────────────────────────────────────────────────────
  # 3. Logo Bar
  # ────────────────────────────────────────────────────────────────────────────
  - block: markdown
    content:
      text: |
        <div class="footer-logo-bar">
          <img src="media/chimie.png" style="height: 100px; width: auto; object-fit: contain;">
          <img src="media/iclehs.png" style="height: 70px; width: auto; object-fit: contain;">
          <img src="media/cnrs.png" style="height: 80px; width: auto; object-fit: contain;">
        </div>
    design:
      full_width: true
---
