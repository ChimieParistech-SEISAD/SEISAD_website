---
title: Research
type: landing

sections:
  # ────────────────────────────────────────────────────────────────────────────
  # 0. 局部 CSS 样式表 (确保布局正常)
  # ────────────────────────────────────────────────────────────────────────────
  - block: markdown
    content:
      title: ""
      text: |
        <style>
          .themes-container {
            display: flex;
            justify-content: center;
            gap: 50px;
            max-width: 1200px;
            margin: 40px auto;
            flex-wrap: wrap;
          }
          .theme-card {
            flex: 0 1 300px;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px;
          }
          .theme-icon {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 32px;
            margin-bottom: 25px;
            color: #008a85;
            transition: transform 0.3s ease;
          }
          .theme-card:hover .theme-icon {
            transform: scale(1.1);
          }
          .theme-name { 
            font-size: 1.4rem; 
            font-weight: bold; 
            margin-bottom: 12px; 
            color: #1a202c; 
          }
          .theme-desc { 
            font-size: 1rem; 
            color: #4a5568; 
            line-height: 1.6; 
            text-align: center;
          }
        </style>
    design:
      full_width: true

  # ────────────────────────────────────────────────────────────────────────────
  # 1. Research Themes 内容区块
  # ────────────────────────────────────────────────────────────────────────────
  - block: markdown
    content:
      text: |
        <div style="text-align: center; margin: 40px 0 60px 0;">
          <h2 style="font-size: 2.8rem; font-weight: 700; color: #1a202c; margin-bottom: 10px;">Research Themes</h2>
          <p style="color: #666; font-size: 1.1rem;">Advancing diagnostics through multidisciplinary chemical innovation</p>
        </div>
        
        <div class="themes-container">
          <div class="theme-card">
            <div class="theme-icon" style="background: linear-gradient(135deg, #f0fdfa 0%, #ccfbf1 100%);">
              <i class="fas fa-flask"></i>
            </div>
            <div class="theme-name">Synthetic Methodologies</div>
            <div class="theme-desc">
              Focusing on new methodologies of synthesis and supported catalysis in <strong>microflow reactors</strong>, protein ligand libraries, and radio-labelling for advanced imaging.
            </div>
          </div>
          
          <div class="theme-card">
            <div class="theme-icon" style="background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%); color: #2563eb;">
              <i class="fas fa-bolt"></i>
            </div>
            <div class="theme-name">Sensors & Electroanalysis</div>
            <div class="theme-desc">
              Development of <strong>electrochemical sensors</strong> for biological markers, microelectrochemical surface patterning (SECM), and label-free detection of microRNAs.
            </div>
          </div>
          
          <div class="theme-card">
            <div class="theme-icon" style="background: linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%); color: #ea580c;">
              <i class="fas fa-microscope"></i>
            </div>
            <div class="theme-name">Imaging & Diagnosis</div>
            <div class="theme-desc">
              Preparation of targeted <strong>optical and MR imaging agents</strong>, functional MRI methods, and therapeutic follow-up of cancer in preclinical studies.
            </div>
          </div>
        </div>
    design:
      full_width: true
      spacing:
        padding: ["0", 0, "6rem", 0]
---

