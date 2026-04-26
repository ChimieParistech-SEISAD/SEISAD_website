---
title: 'SEISAD'
date: 2024-01-01
type: landing

design:
  spacing: "0"

sections:
  # 0. 终极样式补丁：解决全屏、对齐、空隙、换行
  - block: markdown
    content:
      title: ""
      text: |
        <style>
          /* 1. 基础布局：解除主题自带的窄屏限制 */
          .max-w-prose, .prose, .container, .mx-auto { max-width: 100% !important; width: 100% !important; }
          
          /* 2. 间距控制：彻底杀掉组件自带的巨大上下空隙 */
          .hbb-section { padding: 0 !important; }
          .hbb-section div[class*="py-"] { padding-top: 1rem !important; padding-bottom: 1rem !important; }

          /* 3. Research Themes 专项对齐补丁 (核心修复) */
          /* 限制这三个项目的总宽度，并强制在页面正中间聚拢 */
          #research-themes .row {
            display: flex !important;
            justify-content: center !important;
            max-width: 1100px !important; 
            margin: 0 auto !important;
            float: none !important;
          }
          /* 强制项目内部所有内容（图标、标题、描述）中心对齐 */
          #research-themes .feature-item {
            text-align: center !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            padding: 0 20px !important;
          }
          /* 修正图标位置 */
          #research-themes .feature-icon { margin: 0 auto 1rem auto !important; }

          /* 4. 机构名称：强制不换行并美化 */
          .institute-tagline {
            white-space: nowrap !important;
            display: inline-block !important;
            font-size: 1.4rem !important;
            letter-spacing: 2px !important;
            font-family: 'Palatino', serif;
            font-style: italic;
            color: #444;
          }
        </style>
    design:
      full_width: true

  # 1. Logo Bar
  - block: markdown
    content:
      text: |
        <div style="display: flex; justify-content: space-around; align-items: center; width: 85%; max-width: 1200px; margin: 0 auto; padding: 25px 0;">
          <img src="media/chimie.png" style="height: 100px; width: auto;">
          <img src="media/iclehs.png" style="height: 120px; width: auto;">
          <img src="media/cnrs.png" style="height: 100px; width: auto;">
        </div>
        <div style="text-align: center; border-top: 1px solid #eee; padding-top: 20px; margin-top: 5px;">
          <span class="institute-tagline">— INSTITUTE OF CHEMISTRY FOR LIFE & HEALTH SCIENCES —</span>
        </div>
    design:
      full_width: true
      spacing:
        padding: ["1rem", 0, "1rem", 0]
  
  # 2. Group Photo
  - block: markdown
    content:
      text: |
        <div style="width: 85%; max-width: 1500px; margin: 0 auto;">
          <img src="media/AA3A0511.JPG" style="width: 100%; height: auto; display: block; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.12);">
        </div>
    design:
      full_width: true
      spacing:
        padding: ["1rem", 0, "1rem", 0]
    
  # 3. Description (文字介绍)
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
        padding: ["3rem", 0, "3rem", 0]
  
  # 4. Research Themes (解决歪斜、空隙)
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
        padding: ["2rem", 0, "5rem", 0]
