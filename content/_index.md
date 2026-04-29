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
          /* 1. Remove standard block margins and header gaps */
          .hbb-section { padding-top: 0 !important; padding-bottom: 0 !important; }
          .blox-page-header { margin-bottom: 0 !important; }
          
          /* 2. Global Width Patch */
          .max-w-prose, .prose, .container, .mx-auto { 
            max-width: 85% !important; 
            width: 85% !important; 
          }
          
          /* 3. Slider Logic (Unchanged) */
          .slider-container { width: 100%; overflow: hidden; position: relative; height: 550px; }
          .slider-wrapper { display: flex; width: 300%; height: 100%; animation: slide-loop 12s infinite; }
          .slider-wrapper img { width: 33.333%; height: 100%; object-fit: cover; }
          @keyframes slide-loop {
            0% { transform: translateX(0); }
            28% { transform: translateX(0); }
            33% { transform: translateX(-33.33%); }
            61% { transform: translateX(-33.33%); }
            66% { transform: translateX(-66.66%); }
            95% { transform: translateX(-66.66%); }
            100% { transform: translateX(0); }
          }
        </style>

  # ────────────────────────────────────────────────────────────────────────────
  # 1. Slider & Main Title (Tightened)
  # ────────────────────────────────────────────────────────────────────────────
  - block: markdown
    content:
      text: |
        <div style="text-align: center; padding: 10px 0 20px 0; background: #fff;">
          <h2 style="color: #2d3748; font-weight: bold; font-size: 1.8rem; letter-spacing: 1px; margin: 0;">
            — Synthesis, Electrochemistry, Imaging and Analytical Systems for Diagnosis Team (SEISAD) —
          </h2>
        </div> 
        <div class="slider-container">
          <div class="slider-wrapper">
            <img src="media/AA3A0511.JPG" alt="Slide 1">
            <img src="media/AA3A0511.JPG" alt="Slide 2" style="filter: brightness(0.8);">
            <img src="media/AA3A0511.JPG" alt="Slide 3" style="filter: sepia(0.3);">
          </div>
        </div>
    design:
      full_width: true
      spacing:
        padding: ["0", "0", "0", "0"] # Remove all theme section padding

  # ────────────────────────────────────────────────────────────────────────────
  # 2. Research Description (Tightened)
  # ────────────────────────────────────────────────────────────────────────────
  - block: markdown
    content:
      title: "Our Research"
      text: |
        <div style="text-align: justify; line-height: 1.6; font-size: 1.1rem; color: #222; margin-top: -20px;">
          <span style="float: left; font-size: 60px; line-height: 50px; padding-top: 4px; padding-right: 15px; font-family: Georgia; color: #008a85; font-weight: bold;">A</span>ctually, the Team develops projects aimed at elaborating processes and tools for the early detection of pathological signals using chemical and analytical methodologies. The main research directions focus on: (i) new synthetic methodologies and supported catalysis in mini- and continuous microflow reactors, protein ligand library synthesis, and advanced radiolabeling for imaging; (ii) electrochemical sensors for biological markers, molecular materials for electrocatalysis, and label-free detection of microRNAs via scanning electrochemical microscopy (SECM); (iii) development of targeted optical and MR imaging agents, functional MRI methods for characterization, and therapeutic follow-up of cancer in preclinical models; and (iv) characterization of new nano-supports and selective objects such as peptide nanotubes, nanobodies, and biocompatible nano-objects for medical diagnosis and environmental control.
        </div>
    design:
      full_width: true
      spacing:
        padding: ["1.5rem", "0", "1.5rem", "0"] # Reduced from 3rem to 1.5rem

  # ────────────────────────────────────────────────────────────────────────────
  # 3. Logo Bar (Tightened)
  # ────────────────────────────────────────────────────────────────────────────
  - block: markdown
    content:
      text: |
        <div style="display: flex; justify-content: space-evenly; align-items: center; padding: 30px 5%; width: 100%; border-top: 1px solid #f0f0f0;">
          <img src="media/chimie.png" style="height: 90px; width: auto; object-fit: contain;">
          <img src="media/iclehs.png" style="height: 70px; width: auto; object-fit: contain;">
          <img src="media/cnrs.png" style="height: 75px; width: auto; object-fit: contain;">
        </div>
    design:
      full_width: true
      spacing:
        padding: ["0", "0", "1rem", "0"]
---
