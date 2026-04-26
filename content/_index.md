---
title: 'SEISAD'
date: 2024-01-01
type: landing

design:
  spacing: "0"

sections:
  # 0. 全局样式补丁 (核心逻辑在这里)
  - block: markdown
    content:
      title: ""
      text: |
        <style>
          /* 1. 破除容器限制 */
          .max-w-prose, .prose { max-width: 100% !important; }
          .hbb-section .container, .hbb-section .mx-auto { max-width: 100% !important; }
          
          /* 2. 强制 Research Themes 居中并增加中间空隙 */
          .hbb-section .row { 
            justify-content: center !important; 
            display: flex !important;
            flex-wrap: wrap;
          }
          .feature-item { 
            margin: 0 40px !important; /* 这里控制三个图中间的空隙 */
            max-width: 300px !important;
          }
          
          /* 3. 统一页面主宽度 */
          .content-wrapper { 
            width: 95%; 
            max-width: 1400px; 
            margin: 0 auto; 
          }
        </style>
    design:
      full_width: true

  # 1. Logo Bar (解决中间空一些、居中、Institute大小问题)
  - block: markdown
    content:
      text: |
        <div class="content-wrapper" style="display: flex; justify-content: space-around; align-items: center; padding: 30px 0;">
          <img src="media/chimie.png" style="height: 100px; width: auto;">
          <img src="media/iclehs.png" style="height: 120px; width: auto;">
          <img src="media/cnrs.png" style="height: 100px; width: auto;">
        </div>
        <div class="content-wrapper" style="text-align: center; color: #444; border-top: 1px solid #eee; padding-top: 25px; margin-top: 10px;">
          <span style="font-size: 1.5rem; font-weight: 500; letter-spacing: 3px; text-transform: uppercase; font-family: 'Palatino', serif; font-style: italic;">
            — Institute of Chemistry for Life & Health Sciences —
          </span>
        </div>
    design:
      full_width: true
      spacing:
        padding: ["1rem", 0, "1rem", 0] # 缩小了上下空隙
  
  # 2. Group Photo
  - block: markdown
    content:
      text: |
        <div style="width: 80%; max-width: 1500px; margin: 0 auto;">
          <img src="media/AA3A0511.JPG" style="width: 100%; height: auto; display: block; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.12);">
        </div>
    design:
      full_width: true
      spacing:
        padding: ["0", 0, "3rem", 0]
    
  # 3. Description (文字介绍)
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
        padding: ["3rem", 0, "5rem", 0] # 缩小了顶部空隙 (从5rem降到3rem)
  
  # 4. Research Themes (解决歪了、上面空、中间空)
  - block: features
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
      columns: '3' # 强制设为3列
      spacing:
        padding: ["2rem", 0, "5rem", 0] # 大幅缩小了标题上方的空隙

---
