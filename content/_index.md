---
title: 'SEISAD'
type: landing

design:
  spacing: "0"

sections:
  # ────────────────────────────────────────────────────────────────────────────
  # 0. Core Logic & Width Patch
  # ────────────────────────────────────────────────────────────────────────────
  - block: markdown
    content:
      text: |
        <style>
          /* 1. Global Width: Expand content to full screen width */
          .max-w-prose, .prose, .container, .mx-auto { 
            max-width: 100% !important; 
            width: 100% !important; 
          }
          
          /* 2. Automatic Slider Logic: 4s per image (12s total loop) */
          .slider-container {
            width: 100%;
            overflow: hidden;
            position: relative;
            height: 600px;
          }
          .slider-wrapper {
            display: flex;
            width: 300%;
            height: 100%;
            animation: slide-loop 12s infinite; /* 3 images * 4 seconds */
          }
          .slider-wrapper img {
            width: 33.333%;
            height: 100%;
            object-fit: cover;
          }
          @keyframes slide-loop {
            0% { transform: translateX(0); }
            28% { transform: translateX(0); }     /* Hold Image 1 */
            33% { transform: translateX(-33.33%); }
            61% { transform: translateX(-33.33%); } /* Hold Image 2 */
            66% { transform: translateX(-66.66%); }
            95% { transform: translateX(-66.66%); } /* Hold Image 3 */
            100% { transform: translateX(0); }
          }

          /* 3. Wide Text Layout: Maximizing horizontal space */
          .wide-text-container {
            width: 95%; 
            max-width: 1800px; 
            margin: 0 auto; 
            text-align: justify; 
            line-height: 1.6; 
            font-size: 1.15rem; 
            color: #222;
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
            <img src="media/AA3A0511.JPG" alt="Slide 1">
            <img src="media/AA3A0511.JPG" alt="Slide 2" style="filter: brightness(0.8);">
            <img src="media/AA3A0511.JPG" alt="Slide 3" style="filter: sepia(0.3);">
          </div>
        </div>
        <div style="text-align: center; padding: 40px 20px; background: #fff;">
          <h2 style="color: #2d3748; font-weight: bold; font-size: 1.6rem; letter-spacing: 1px;">
            — Synthesis, Electrochemistry, Imaging and Analytical Systems for Diagnosis Team (SEISAD) —
          </h2>
        </div>
    design:
      full_width: true

  # ────────────────────────────────────────────────────────────────────────────
  # 2. Research Description (Ultra-Wide Mode)
  # ────────────────────────────────────────────────────────────────────────────
  - block: markdown
    content:
      title: "Our Research"
      text: |
        <div class="wide-text-container">
          <span style="float: left; font-size: 60px; line-height: 50px; padding-top: 4px; padding-right: 15px; font-family: Georgia; color: #008a85; font-weight: bold;">A</span>ctually, the Team develops projects aimed at elaborating processes and tools for the early detection of pathological signals using chemical and analytical methodologies. The main research directions focus on: (i) new synthetic methodologies and supported catalysis in mini- and continuous microflow reactors, protein ligand library synthesis, and advanced radiolabeling for imaging; (ii) electrochemical sensors for biological markers, molecular materials for electrocatalysis, and label-free detection of microRNAs via scanning electrochemical microscopy (SECM); (iii) development of targeted optical and MR imaging agents, functional MRI methods for characterization, and therapeutic follow-up of cancer in preclinical models; and (iv) characterization of new nano-supports and selective objects such as peptide nanotubes, nanobodies, and biocompatible nano-objects for medical diagnosis and environmental control.
        </div>
    design:
      full_width: true
      background:
        color: "#ffffff"
      spacing:
        padding: ["3rem", "2rem", "3rem", "2rem"]

  # ────────────────────────────────────────────────────────────────────────────
  # 3. Logo Bar
  # ────────────────────────────────────────────────────────────────────────────
  - block: markdown
    content:
      text: |
        <div class="footer-logo-bar" style="display: flex; justify-content: space-evenly; align-items: center; padding: 60px 5%; width: 100%; border-top: 1px solid #f0f0f0;">
          <img src="media/chimie.png" style="height: 90px; width: auto; object-fit: contain;">
          <img src="media/iclehs.png" style="height: 100px; width: auto; object-fit: contain;">
          <img src="media/cnrs.png" style="height: 85px; width: auto; object-fit: contain;">
        </div>
    design:
      full_width: true
---
