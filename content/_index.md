---
title: 'SEISAD'
date: 2024-01-01
type: landing

design:
  spacing: "0"

sections:
  # ────────────────────────────────────────────────────────────────────────────
  # 0. 全局样式引擎：一站式解决所有排版问题
  # ────────────────────────────────────────────────────────────────────────────
  - block: markdown
    content:
      title: ""
      text: |
        <style>
          /* 1. 彻底解除主题宽度限制 */
          .max-w-prose, .prose, .container, .mx-auto { max-width: 100% !important; width: 100% !important; }
          .hbb-section { padding: 0 !important; }
          .hbb-section div[class*="py-"] { padding-top: 1rem !important; padding-bottom: 1rem !important; }

          /* 2. 核心：修复 Research Themes 居中对齐 */
          #research-themes .row {
            display: flex !important;
            justify-content: center !important; /* 强制三项整体居中 */
            max-width: 1200px !important; 
            margin: 0 auto !important;
          }
          #research-themes .feature-item {
            text-align: center !important; /* 文字居中 */
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important; /* 图标居中 */
            padding: 0 30px !important;
          }
          #research-themes .feature-icon { margin: 0 auto 1.5rem auto !important; }

          /* 3. 核心：机构名称不换行 */
          .institute-tagline {
            white-space: nowrap !important;
            display: inline-block !important;
            font-size: 1.4rem !important;
            letter-spacing: 2px !important;
            font-family: 'Palatino', serif;
            font-style: italic;
            color: #444;
            padding: 0 10px;
          }
        </style>
    design:
      full_width: true

  # ────────────────────────────────────────────────────────────────────────────
  # 1. Logo 区域
  # ────────────────────────────────────────────────────────────────────────────
  - block: markdown
    content:
      text: |
        <div style="display: flex; justify-content: center; align-items: center; gap: 80px; width: 90%; max-width: 1200px; margin: 0 auto; padding: 30px 0;">
          <img src="media/chimie.png" style="height: 100px; width: auto;">
          <img src="media/iclehs.png" style="height: 120px; width: auto;">
          <img src="media/cnrs.png" style="height: 100px; width: auto;">
        </div>
        <div style="text-align: center; border-top: 1px solid #eee; padding-top: 20px; margin-bottom: 10px;">
          <span class="institute-tagline">— INSTITUTE OF CHEMISTRY FOR LIFE & HEALTH SCIENCES —</span>
        </div>
    design:
      full_width: true
      spacing:
        padding: ["1rem", 0, "1rem", 0]
  
  # ────────────────────────────────────────────────────────────────────────────
  # 2. 实验室合照
  # ────────────────────────────────────────────────────────────────────────────
  - block: markdown
    content:
      text: |
        <div style="width: 85%; max-width: 1500px; margin: 0 auto;">
          <img src="media/AA3A0511.JPG" style="width: 100%; height: auto; display: block; border-radius: 12px; box-shadow: 0 8px 25px rgba(0,0,0,0.12);">
        </div>
    design:
      full_width: true
      spacing:
        padding: ["0.5rem", 0, "2rem", 0]
    
  # ────────────────────────────────────────────────────────────────────────────
  # 3. 团队介绍文字
  # ────────────────────────────────────────────────────────────────────────────
  - block: markdown
    content:
      title: "SEISAD"
      text: |
        <div style="max-width: 1300px; margin: 0 auto; text-align: justify; line-height: 1.8; font-size: 1.1rem; color: #222;">
          <span style="float: left; font-size: 70px; line-height: 60px; padding-top: 4px; padding-right: 15px; font-family: Georgia; color: #008a85; font-weight: bold;">A</span>ctually, the Team develops projects aimed at elaborating processes and tools for the early detection of pathological signals using chemical and analytical methodologies. The main prospections are related to: (i) new methodologies of synthesis and supported catalysis in mini – and continuous microflow reactors, synthesis of libraries of molecules as ligands of proteins, development of new radio-labelling methodologies for imaging; (ii) electrochemical sensors for biological systems and for screening biological markers, molecular materials for electroanalysis and electrocatalysis, microelectrochemical patterning of surfaces using scanning electrochemical microscopy, label-free electrochemical detection of microRNAs ; (iii) preparation of targeted optical and MR imaging agents, development of molecular magnetic resonance imaging MRI methods & functional imaging methods for the characterization and therapeutic follow-up of cancer in preclinics and (iv) characterization of new nano-supports and selective objects : peptide nanotubes, aptamers, nanobodies, design and characterization of original biocompatible nano-objects and quantitative characterization of their non-covalent interactions, development of miniaturized total analysis systems for applications ranging from environmental control to in-vitro medical diagnosis.
        </div>
    design:
      full_width: true
      background:
        color: "#f8fafc" 
      spacing:
        padding: ["3rem", 0, "4rem", 0]
  
  # ────────────────────────────────────────────────────────────────────────────
  # 4. 研究主题 (Research Themes)
  # ────────────────────────────────────────────────────────────────────────────
  - block: features
    id: research-themes
    content:
      title: "Research Themes"
      items:
        - name: "Synthetic methodologies"
          description: "Development of new synthetic methodologies"
          icon: flask
        - name: "Sensors"
          description: "Development of new electrochemical sensors"
          icon: bolt
        - name: "Imaging"
          description: "Development of new imaging agents"
          icon: microscope
    design:
      full_width: true
      columns: '3'
      spacing:
        padding: ["1.5rem", 0, "5rem", 0]

---
