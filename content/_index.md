---
title: 'SEISAD'
type: landing

design:
  spacing: "0"

sections:
  # ─────────────────────────────────────────────────────────
  # 0. GLOBAL STYLE (重构宽度控制逻辑)
  # ─────────────────────────────────────────────────────────
  - block: markdown
    content:
      text: |
        <style>
          /* ===== 1. 彻底解决缩放问题的容器逻辑 ===== */
          .max-w-prose, .prose, .container, .mx-auto { 
            max-width: 100% !important; 
            width: 100% !important; 
          }

          .home-outer-wrapper {
            width: 95%;
            max-width: 1400px;
            margin: 0 auto;
            clear: both;
          }

          /* ===== 2. 顶部导航栏 (保持之前的样式) ===== */
          header, .page-header, .blox-page-header {
            background-color: #008a85 !important;
            padding: 0 !important;
            margin: 0 !important;
          }
          .navbar {
            background-color: #008a85 !important;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1) !important;
            margin: 0 !important;
            padding: 0 !important; 
            border: none !important;
            min-height: 60px; 
          }
          .navbar-brand { display: none !important; }
          .navbar-nav { height: 100%; align-items: stretch !important; flex-direction: row !important; }
          .nav-item { display: flex !important; align-items: stretch !important; height: 60px !important; }
          .nav-link {
            color: #ffffff !important;
            font-weight: bold !important;
            font-size: 1.05rem !important;
            padding: 0 1.5rem !important; 
            display: flex !important;
            align-items: center !important; 
            justify-content: center !important;
            height: 60px !important; 
            transition: background-color 0.3s ease;
            background-color: transparent !important;
          }
          .nav-link:hover, .nav-link.active:hover {
            background-color: rgba(255, 255, 255, 0.2) !important;
          }

          /* ===== 3. 重新设计的居中标题 (顶部横条) ===== */
          .main-title-container {
            background-color: #f0f9f8;
            border-top: 6px solid #008a85;
            padding: 2.5rem 1.5rem;
            margin: 2.5rem 0; /* 这里的左右margin由wrapper控制 */
            text-align: center;
            box-shadow: 0 4px 15px rgba(0,0,0,0.03);
            border-radius: 0 0 8px 8px;
          }
          .full-name {
            font-size: 1rem;
            color: #718096;
            text-transform: uppercase;
            letter-spacing: 2px;
            display: block;
            margin-bottom: 1rem;
            line-height: 1.4;
          }
          .brand-name-bold {
            font-size: 2.6rem;
            color: #008a85;
            font-weight: 900;
            letter-spacing: 4px;
            line-height: 1;
          }

          /* ===== 4. 轮播图 SLIDER ===== */
          .slider-container {
            width: 100%;
            height: 520px;
            overflow: hidden;
            position: relative;
            margin: 1.5rem 0;
          }
          .slider-wrapper {
            display: flex;
            width: 300%;
            height: 100%;
            animation: slide-loop 12s infinite;
          }
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

          /* ===== 5. 研究内容文本 ===== */
          .research-text {
            text-align: justify;
            line-height: 1.8;
            font-size: 1.08rem;
            color: #222;
          }

          /* ===== 6. Logo 栏 ===== */
          .logo-bar {
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            padding: 3rem 0;
            border-top: 1px solid #f0f0f0;
            margin-top: 2rem;
          }

          /* ===== 7. 自定义底部 (全宽背景+容器居中) ===== */
          .custom-footer-container {
            background-color: #008a85; 
            color: #ffffff;            
            padding: 4rem 0 !important; 
            width: 100vw;
            position: relative;
            left: 50%;
            right: 50%;
            margin-left: -50vw;
            margin-right: -50vw;
          }
          .footer-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr); 
            gap: 40px;
          }
          .footer-column h3 {
            color: #ffffff !important;
            font-size: 1.4rem;
            margin-bottom: 1.2rem;
            font-weight: bold;
            border-bottom: 2px solid rgba(255,255,255,0.3);
            display: inline-block;
            padding-bottom: 5px;
          }
          .footer-column a { color: #ffffff !important; text-decoration: underline; }
          .footer-column ul { list-style: none; padding: 0; }

          /* ===== 8. 隐藏系统默认底部 ===== */
          footer.site-footer, .site-footer, footer, .powered-by, .copyright {
            display: none !important;
          }

          @media (max-width: 768px) {
            .footer-grid { grid-template-columns: 1fr; text-align: center; }
            .slider-container { height: 300px; }
          }
        </style>

  # ─────────────────────────────────────────────────────────
  # 1. TITLE + SLIDER
  # ─────────────────────────────────────────────────────────
  - block: markdown
    content:
      text: |
        <div class="home-outer-wrapper">
          <div class="main-title-container">
            <span class="full-name">Synthesis, Electrochemistry, Imaging and Analytical Sciences for Diagnostics</span>
            <div class="brand-name-bold">SEISAD</div>
          </div>
          <div class="slider-container">
            <div class="slider-wrapper">
              <img src="media/AA3A0511.JPG">
              <img src="media/AA3A0511.JPG" style="filter: brightness(0.9);">
              <img src="media/AA3A0511.JPG" style="filter: brightness(0.85);">
            </div>
          </div>
        </div>
    design:
      full_width: true

  # ─────────────────────────────────────────────────────────
  # 2. RESEARCH
  # ─────────────────────────────────────────────────────────
  - block: markdown
    content:
      text: |
        <div class="home-outer-wrapper">
          <h2 style="text-align:center; font-size:2rem; font-weight:bold; color:#333; margin: 2rem 0;">Our Research</h2>
          <div class="research-text">
            <span style="float:left; font-size:60px; line-height:50px; padding-right:15px; color:#008a85; font-weight:bold;">A</span>
            ctually, the Team develops projects aimed at elaborating processes and tools for the early detection of pathological signals using chemical and analytical methodologies. The main research directions focus on: (i) new synthetic methodologies and supported catalysis in mini- and continuous microflow reactors, protein ligand library synthesis, and advanced radiolabeling for imaging; (ii) electrochemical sensors for biological markers, molecular materials for electrocatalysis, and label-free detection of microRNAs via scanning electrochemical microscopy (SECM); (iii) development of targeted optical and MR imaging agents, functional MRI methods for characterization, and therapeutic follow-up of cancer in preclinical models; and (iv) characterization of new nano-supports and selective objects such as peptide nanotubes, nanobodies, and biocompatible nano-objects for medical diagnosis and environmental control.
          </div>
        </div>
    design:
      full_width: true

  # ─────────────────────────────────────────────────────────
  # 3. LOGO BAR
  # ─────────────────────────────────────────────────────────
  - block: markdown
    content:
      text: |
        <div class="home-outer-wrapper">
          <div class="logo-bar">
            <img src="media/seisad.png" style="height:80px;">
            <img src="media/chimie.png" style="height:100px;">
            <img src="media/iclehs.png" style="height:75px;">
            <img src="media/cnrs.png" style="height:80px;">
          </div>
        </div>
    design:
      full_width: true

  # ─────────────────────────────────────────────────────────
  # 4. CUSTOM FOOTER
  # ─────────────────────────────────────────────────────────
  - block: markdown
    content:
      text: |
        <div class="custom-footer-container">
          <div class="home-outer-wrapper">
            <div class="footer-grid">
              <div class="footer-column">
                <h3>Address</h3>
                <p>Chimie ParisTech - PSL University<br>i-CLeHS (CNRS UMR 8060)<br>11 Rue Pierre et Marie Curie<br>75005 Paris, France</p>
              </div>
              <div class="footer-column">
                <h3>Contact</h3>
                <p><strong>Tel:</strong> +33 1 XX XX XX XX<br><strong>Email:</strong> <a href="mailto:contact@seisad.com">contact@seisad.com</a><br><strong>Twitter:</strong> <a href="https://twitter.com/MakeOwnable" target="_blank">@MakeOwnable</a></p>
              </div>
              <div class="footer-column">
                <h3>Quick Links</h3>
                <ul>
                  <li><a href="https://www.chimieparistech.psl.eu/" target="_blank">Chimie ParisTech</a></li>
                  <li><a href="https://www.cnrs.fr/" target="_blank">CNRS</a></li>
                  <li><a href="https://psl.eu/" target="_blank">PSL University</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    design:
      full_width: true
---
