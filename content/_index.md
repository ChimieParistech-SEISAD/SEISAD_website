---
title: 'SEISAD'
type: landing

design:
  spacing: "0"

sections:
  # ────────────────────────────────────────────────────────────────────────────
  # 0. 核心 CSS 优化 (包含导航栏控制)
  # ────────────────────────────────────────────────────────────────────────────
  - block: markdown
    content:
      text: |
        <style>
          /* 导航栏：背景深青色 */
          .navbar { background-color: #008a85 !important; }
          /* 导航文字：平时白色 */
          .navbar-nav .nav-link { color: #ffffff !important; font-weight: 700 !important; }
          /* 导航文字：悬停或点击激活时背景变白，文字变青色 */
          .navbar-nav .nav-item.active .nav-link, .navbar-nav .nav-link:hover {
            background-color: #ffffff !important;
            color: #008a85 !important;
            border-radius: 5px;
          }
          /* 站点名字和图标：白色 */
          .navbar-brand, .nav-link i { color: #ffffff !important; }
          
          /* 移除 Markdown 默认宽度限制 */
          .max-w-prose, .prose { max-width: 100% !important; }
        </style>

        <div style="width: 100%; margin: 0 auto; text-align: center;">
          <img src="media/AA3A0511.JPG" style="width: 100%; height: auto; display: block; border-radius: 0 0 15px 15px;">
          <h2 style="margin-top: 30px; color: #2d3748; font-weight: bold; font-size: 1.4rem;">
            — Synthesis, Electrochemistry, Imaging and Analytical Systems for Diagnosis Team (SEISAD) —
          </h2>
        </div>
    design:
      full_width: true
      spacing:
        padding: ["0", 0, "2rem", 0]

  # ────────────────────────────────────────────────────────────────────────────
  # 1. Group Photo (紧贴导航栏下方)
  # ────────────────────────────────────────────────────────────────────────────
  - block: markdown
    content:
      text: |
        <div style="width: 70%; background-color: #ffffff;">
          <img src="media/AA3A0511.JPG" style="width: 70%; height: auto; display: block;">
          
          <div style="text-align: center; padding: 40px 20px; font-weight: bold; font-size: 1.4rem; color: #2d3748; letter-spacing: 0.5px;">
            — Synthesis, Electrochemistry, Imaging and Analytical Systems for Diagnosis Team (SEISAD) —
          </div>
        </div>
    design:
      full_width: true

  # ────────────────────────────────────────────────────────────────────────────
  # 2. SEISAD Description (主体内容)
  # ────────────────────────────────────────────────────────────────────────────
  - block: markdown
    content:
      title: "Our research"
      text: |
        <div style="max-width: 1100px; margin: 0 auto; text-align: justify; line-height: 1.8; font-size: 1.1rem; color: #222; padding: 0 20px;">
          <span style="float: left; font-size: 70px; line-height: 60px; padding-top: 4px; padding-right: 15px; font-family: Georgia; color: #008a85; font-weight: bold;">A</span>ctually, the Team develops projects aimed at elaborating processes and tools for the early detection of pathological signals using chemical and analytical methodologies. The main prospections are related to: (i) new methodologies of synthesis and supported catalysis in mini – and continuous microflow reactors, synthesis of libraries of molecules as ligands of proteins, development of new radio-labelling methodologies for imaging; (ii) electrochemical sensors for biological systems and for screening biological markers, molecular materials for electroanalysis and electrocatalysis, microelectrochemical patterning of surfaces using scanning electrochemical microscopy, label-free electrochemical detection of microRNAs ; (iii) preparation of targeted optical and MR imaging agents, development of molecular magnetic resonance imaging MRI methods & functional imaging methods for the characterization and therapeutic follow-up of cancer in preclinics and (iv) characterization of new nano-supports and selective objects : peptide nanotubes, aptamers, nanobodies, design and characterization of original biocompatible nano-objects and quantitative characterization of their non-covalent interactions, development of miniaturized total analysis systems for applications ranging from environmental control to in-vitro medical diagnosis.
        </div>
    design:
      full_width: true
      background:
        color: "#f8fafc" 
      spacing:
        padding: ["5rem", 0, "5rem", 0]

  # ────────────────────────────────────────────────────────────────────────────
  # 3. Logo Bar (等距平铺在页面最下方)
  # ────────────────────────────────────────────────────────────────────────────
  - block: markdown
    content:
      text: |
        <div class="footer-logo-bar">
          <img src="media/chimie.png" style="height: 90px; width: auto; filter: brightness(1.05);">
          <img src="media/iclehs.png" style="height: 100px; width: auto;">
          <img src="media/cnrs.png" style="height: 90px; width: auto; filter: contrast(1.1);">
        </div>
    design:
      full_width: true
---
