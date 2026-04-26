---
title: 'SEISAD'
date: 2024-01-01
type: landing

design:
  spacing: "0" # 减少段落间距，由内部 padding 控制

sections:
  # 0. 全局样式注入 (只需在这里写一次，对后面所有 section 都生效)
  - block: markdown
    content:
      title: ""
      text: |
        <style>
          /* 彻底破除容器限制 */
          .max-w-prose, .prose { max-width: 100% !important; }
          .hbb-section .container, .hbb-section .mx-auto { max-width: 100% !important; }
          
          /* 统一的页面主宽度限制，建议设为 1400px 左右 */
          .content-wrapper { 
            width: 90%; 
            max-width: 1400px; 
            margin: 0 auto; 
          }
        </style>
    design:
      full_width: true

  # 1. Logo Bar 
  - block: markdown
    content:
      text: |
        <!-- 使用 space-evenly 让间距更均匀，解决不居中的感觉 -->
        <div class="content-wrapper" style="display: flex; justify-content: space-evenly; align-items: center; padding: 40px 0;">
          <img src="media/chimie.png" style="height: 120px; width: auto; object-fit: contain;">
          <img src="media/iclehs.png" style="height: 140px; width: auto; object-fit: contain;">
          <img src="media/cnrs.png" style="height: 110px; width: auto; object-fit: contain;">
        </div>
        <!-- 强化机构名称的视觉效果 -->
        <div class="content-wrapper" style="text-align: center; color: #444; border-top: 1px solid #eee; padding-top: 25px; margin-top: 10px;">
          <span style="font-size: 1.3rem; font-weight: 500; letter-spacing: 2px; text-transform: uppercase; font-family: 'Palatino', serif; font-style: italic;">
            — Institute of Chemistry for Life & Health Sciences —
          </span>
        </div>
    design:
      full_width: true
      spacing:
        padding: ["2rem", 0, "2rem", 0]
  
  # 2. Group Photo (适当调大，更有冲击力)
  - block: markdown
    content:
      text: |
        <div style="width: 85%; max-width: 1600px; margin: 0 auto;">
          <img src="media/AA3A0511.JPG" style="width: 100%; height: auto; display: block; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.15);">
        </div>
    design:
      full_width: true
      spacing:
        padding: ["0", 0, "4rem", 0]
    
  # 3. Description (文字区域不建议太宽，否则很难阅读，控制在 1300px 最舒适)
  - block: markdown
    content:
      title: "SEISAD"
      text: |
        <div style="max-width: 1300px; margin: 0 auto; text-align: justify; line-height: 1.9; font-size: 1.1rem; color: #333;">
          <span style="float: left; font-size: 75px; line-height: 60px; padding-top: 4px; padding-right: 15px; font-family: Georgia; color: #008a85; font-weight: bold;">A</span>ctually, the Team develops projects aimed at elaborating processes and tools for the early detection of pathological signals using chemical and analytical methodologies. The main prospections are related to: (i) new methodologies of synthesis and supported catalysis in mini – and continuous microflow reactors, synthesis of libraries of molecules as ligands of proteins, development of new radio-labelling methodologies for imaging; (ii) electrochemical sensors for biological systems and for screening biological markers, molecular materials for electroanalysis and electrocatalysis, microelectrochemical patterning of surfaces using scanning electrochemical microscopy, label-free electrochemical detection of microRNAs ; (iii) preparation of targeted optical and MR imaging agents, development of molecular magnetic resonance imaging MRI methods & functional imaging methods for the characterization and therapeutic follow-up of cancer in preclinics and (iv) characterization of new nano-supports and selective objects : peptide nanotubes, aptamers, nanobodies, design and characterization of original biocompatible nano-objects and quantitative characterization of their non-covalent interactions, development of miniaturized total analysis systems for applications ranging from environmental control to in-vitro medical diagnosis.
        </div>
    design:
      full_width: true
      background:
        color: "#f8fafc" 
      spacing:
        padding: ["5rem", 0, "5rem", 0]
  
  # 4. Research Themes (这个组件会自动适应宽度)
  - block: features
    content:
      title: "Research Themes"
      items:
        - name: "Synthetic methodologies"
          description: "Development of new synthetic and/or radio-labelling methodologies"
          icon: flask
        - name: "Sensors"
          description: "Development of new electrochemical sensors"
          icon: bolt
        - name: "Imaging"
          description: "Development of new optical and MR imaging agents"
          icon: microscope
    design:
      full_width: true
      columns: '1'
      spacing:
        padding: ["5rem", 0, "5rem", 0]

---
