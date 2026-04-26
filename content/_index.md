---
title: 'SEISAD'
date: 2024-01-01
type: landing

design:
  spacing: "0"

sections:
  # 0. 终极 CSS 补丁 (解决所有对齐和空隙问题)
  - block: markdown
    content:
      title: ""
      text: |
        <style>
          /* 1. 彻底解除所有容器宽度限制 */
          .max-w-prose, .prose, .container, .mx-auto { max-width: 100% !important; width: 100% !important; }
          .hbb-section { padding-top: 0 !important; padding-bottom: 0 !important; }
          
          /* 2. 解决 Research Themes 歪掉的问题：强制图标项目水平居中 */
          .hbb-section section[id*="features"] .row,
          .hbb-section section#research-themes .row {
            display: flex !important;
            justify-content: center !important;
            max-width: 1200px !important;
            margin: 0 auto !important;
          }
          .hbb-section .feature-item {
            margin: 0 50px !important; /* 调整图标之间的间距 */
            flex: none !important;
            width: 250px !important;
          }

          /* 3. 解决“空隙太大”：强行砍掉所有默认的上下间距 */
          .hbb-section { padding-top: 0 !important; padding-bottom: 0 !important; }
          .hbb-section div[class*="py-"], .hbb-section div[class*="my-"] { padding-top: 0.5rem !important; padding-bottom: 0.5rem !important; }
          
          /* 4. 机构名称强制不换行 */
          .institute-tagline {
            white-space: nowrap !important; /* 强制不换行 */
            display: inline-block !important;
            font-size: 1.4rem !important;
            letter-spacing: 2px !important;
          }
        </style>
    design:
      full_width: true

  # 1. Logo Bar (解决换行和居中)
  - block: markdown
    content:
      text: |
        <div style="display: flex; justify-content: space-evenly; align-items: center; width: 80%; max-width: 1200px; margin: 0 auto; padding: 20px 0;">
          <img src="media/chimie.png" style="height: 100px; width: auto;">
          <img src="media/iclehs.png" style="height: 120px; width: auto;">
          <img src="media/cnrs.png" style="height: 100px; width: auto;">
        </div>
        <div style="text-align: center; color: #444; border-top: 1px solid #eee; padding-top: 15px; margin-top: 5px;">
          <span class="institute-tagline" style="font-weight: 500; text-transform: uppercase; font-family: 'Palatino', serif; font-style: italic;">
            — Institute of Chemistry for Life & Health Sciences —
          </span>
        </div>
    design:
      full_width: true
      spacing:
        padding: ["1rem", 0, "0.5rem", 0]
  
  # 2. Group Photo (紧贴上面)
  - block: markdown
    content:
      text: |
        <div style="width: 85%; max-width: 1500px; margin: 0 auto;">
          <img src="media/AA3A0511.JPG" style="width: 100%; height: auto; display: block; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.12);">
        </div>
    design:
      full_width: true
      spacing:
        padding: ["0.5rem", 0, "1rem", 0]
    
  # 3. Description (文字介绍，砍掉底部空隙)
  - block: markdown
    content:
      title: "SEISAD"
      text: |
        <div style="max-width: 1300px; margin: 0 auto; text-align: justify; line-height: 1.8; font-size: 1.1rem;">
          <span style="float: left; font-size: 70px; line-height: 60px; padding-top: 4px; padding-right: 15px; font-family: Georgia; color: #008a85; font-weight: bold;">A</span>ctually, the Team develops projects aimed at elaborating processes and tools for the early detection of pathological signals using chemical and analytical methodologies. The main prospections are related to: (i) new methodologies of synthesis and supported catalysis in mini – and continuous microflow reactors, synthesis of libraries of molecules as ligands of proteins, development of new radio-labelling methodologies for imaging; (ii) electrochemical sensors for biological systems and for screening biological markers, molecular materials for electroanalysis and electrocatalysis, microelectrochemical patterning of surfaces using scanning electrochemical microscopy, label-free electrochemical detection of microRNAs ; (iii) preparation of targeted optical and MR imaging agents, development of molecular magnetic resonance imaging MRI methods & functional imaging methods for the characterization and therapeutic follow-up of cancer in preclinics and (iv) characterization of new nano-supports and selective objects : peptide nanotubes, aptamers, nanobodies, design and characterization of original biocompatible nano-objects and quantitative characterization of their non-covalent interactions, development of miniaturized total analysis systems for applications ranging from environmental control to in-vitro medical diagnosis.
        </div>
    design:
      full_width: true
      background:
        color: "#f8fafc" 
      spacing:
        padding: ["2rem", 0, "1rem", 0] # 缩小了空隙
  
# 4. Research Themes
  - block: features
    id: research-themes # 增加这个 ID
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

---
