---
title: 'SEISAD'
date: 2026-04-26
type: landing

design:
  spacing: "0"

sections:
  # ────────────────────────────────────────────────────────────────────────────
  # 0. 终极 CSS 样式表 (放在最前面，控制全场)
  # ────────────────────────────────────────────────────────────────────────────
  - block: markdown
    content:
      title: ""
      text: |
        <style>
          /* 1. 彻底解除所有外层容器的宽度限制 */
          .max-w-prose, .prose, .container, .mx-auto, .blox-markdown { 
            max-width: 100% !important; 
            width: 100% !important; 
          }
          .hbb-section { padding: 0 !important; }

          /* 2. 机构名称：强制不换行，字号加大 */
          .institute-title {
            white-space: nowrap !important;
            display: inline-block !important;
            font-size: 1.6rem !important;
            font-weight: 500;
            letter-spacing: 2px;
            font-family: 'Palatino', serif;
            font-style: italic;
            color: #333;
          }

          /* 3. 自定义 Research Themes 容器：确保三项绝对居中且不散开 */
          .themes-container {
            display: flex;
            justify-content: center; /* 水平居中 */
            gap: 80px;               /* 三个图标之间的间距 */
            max-width: 1200px;       /* 限制总宽度，防止散到屏幕两边 */
            margin: 40px auto;       /* 整体居中 */
            flex-wrap: wrap;
          }
          .theme-card {
            flex: 0 1 280px;         /* 固定宽度，确保对齐 */
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .theme-icon {
            background-color: #f0fdfa;
            color: #008a85;
            width: 60px;
            height: 60px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 24px;
            margin-bottom: 20px;
          }
          .theme-name { font-size: 1.25rem; font-weight: bold; margin-bottom: 8px; color: #111; }
          .theme-desc { font-size: 0.95rem; color: #666; line-height: 1.4; }
        </style>
    design:
      full_width: true

  # ────────────────────────────────────────────────────────────────────────────
  # 1. Logo Bar (解决换行、间距、居中)
  # ────────────────────────────────────────────────────────────────────────────
  - block: markdown
    content:
      text: |
        <!-- 第一行：Logo -->
        <div style="display: flex; justify-content: center; align-items: center; gap: 60px; padding: 40px 0 20px 0;">
          <img src="media/chimie.png" style="height: 100px; width: auto;">
          <img src="media/iclehs.png" style="height: 100px; width: auto;">
          <img src="media/cnrs.png" style="height: 100px; width: auto;">
        </div>
        <!-- 第二行：文字 -->
        <div style="text-align: center; border-top: 1px solid #eee; padding-top: 25px;">
          <div style="font-weight: bold; font-size: 1.1rem;">— INSTITUTE OF CHEMISTRY FOR LIFE & HEALTH SCIENCES —
          </div>
          <div style="margin-top: 6px; color: #666;">Synthesis, Electrochemistry, Imaging and Analytical Systems for Diagnosis Team (SEISAD)
          </div>
        </div>
    design:
      full_width: true

  # ────────────────────────────────────────────────────────────────────────────
  # 2. Group Photo
  # ────────────────────────────────────────────────────────────────────────────
  - block: markdown
    content:
      text: |
        <div style="width: 85%; max-width: 1500px; margin: 30px auto;">
          <img src="media/AA3A0511.JPG" style="width: 100%; height: auto; display: block; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.12);">
        </div>
    design:
      full_width: true

  # ────────────────────────────────────────────────────────────────────────────
  # 3. SEISAD Description
  # ────────────────────────────────────────────────────────────────────────────
  - block: markdown
    content:
      title: "SEISAD"
      text: |
        <div style="max-width: 1200px; margin: 0 auto; text-align: justify; line-height: 1.8; font-size: 1.1rem; color: #222;">
          <span style="float: left; font-size: 70px; line-height: 60px; padding-top: 4px; padding-right: 15px; font-family: Georgia; color: #008a85; font-weight: bold;">A</span>ctually, the Team develops projects aimed at elaborating processes and tools for the early detection of pathological signals using chemical and analytical methodologies. The main prospections are related to: (i) new methodologies of synthesis and supported catalysis in mini – and continuous microflow reactors, synthesis of libraries of molecules as ligands of proteins, development of new radio-labelling methodologies for imaging; (ii) electrochemical sensors for biological systems and for screening biological markers, molecular materials for electroanalysis and electrocatalysis, microelectrochemical patterning of surfaces using scanning electrochemical microscopy, label-free electrochemical detection of microRNAs ; (iii) preparation of targeted optical and MR imaging agents, development of molecular magnetic resonance imaging MRI methods & functional imaging methods for the characterization and therapeutic follow-up of cancer in preclinics and (iv) characterization of new nano-supports and selective objects : peptide nanotubes, aptamers, nanobodies, design and characterization of original biocompatible nano-objects and quantitative characterization of their non-covalent interactions, development of miniaturized total analysis systems for applications ranging from environmental control to in-vitro medical diagnosis.
        </div>
    design:
      full_width: true
      background:
        color: "#f8fafc" 
      spacing:
        padding: ["3rem", 0, "4rem", 0]

  # ────────────────────────────────────────────────────────────────────────────
  # 4. Research Themes (弃用不听话的 features 组件，直接手写以确保 100% 对齐)
  # ────────────────────────────────────────────────────────────────────────────
  - block: markdown
    content:
      text: |
        <div style="text-align: center; margin-top: 60px;">
          <h2 style="font-size: 2.5rem; font-weight: 600; margin-bottom: 20px;">Research Themes</h2>
        </div>
        
        <div class="themes-container">
          <!-- 项目 1 -->
          <div class="theme-card">
            <div class="theme-icon"><i class="fas fa-flask"></i></div>
            <div class="theme-name">Synthetic methodologies</div>
            <div class="theme-desc">Development of new synthetic methodologies</div>
          </div>
          
          <!-- 项目 2 -->
          <div class="theme-card">
            <div class="theme-icon"><i class="fas fa-bolt"></i></div>
            <div class="theme-name">Sensors</div>
            <div class="theme-desc">Development of new electrochemical sensors</div>
          </div>
          
          <!-- 项目 3 -->
          <div class="theme-card">
            <div class="theme-icon"><i class="fas fa-microscope"></i></div>
            <div class="theme-name">Imaging</div>
            <div class="theme-desc">Development of new imaging agents</div>
          </div>
        </div>
    design:
      full_width: true
      spacing:
        padding: ["0", 0, "6rem", 0]

---
