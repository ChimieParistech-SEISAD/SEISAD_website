---
title: 'SEISAD'
type: landing

design:
  spacing: "0"

sections:
  # ─────────────────────────────────────────────────────────
  # 0. GLOBAL STYLE
  # ─────────────────────────────────────────────────────────
  - block: markdown
    content:
      text: |
        <style>
          /* ===== 1. 全局顶部导航栏彻底变绿 ===== */
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
          /* ===== 2. 删除左上角文字 (SEISAD) ===== */
          .navbar-brand {
            display: none !important;
          }
          /* 导航布局修正 */
          .navbar-nav {
            height: 100%;
            align-items: stretch !important; 
            flex-direction: row !important; 
          }
          .nav-item {
            display: flex !important;
            align-items: stretch !important;
            height: 60px !important;
          }
          /* ===== 3. 导航文字样式 ===== */
          .nav-link {
            color: #ffffff !important;
            opacity: 1 !important;
            font-weight: bold !important;
            font-size: 1.3rem !important;
            padding: 0 1.5rem !important; 
            display: flex !important;
            align-items: center !important; 
            justify-content: center !important;
            height: 60px !important; 
            transition: background-color 0.3s ease;
            border-radius: 0 !important;
            background-color: transparent !important;
          }
          .nav-link:hover, 
          .navbar-nav .nav-item .nav-link:hover,
          .navbar-nav .nav-item .nav-link.active:hover {
            background-color: rgba(255, 255, 255, 0.2) !important;
            color: #ffffff !important;
            text-decoration: none !important;
          }
          .navbar-nav .nav-item .nav-link.active {
            background-color: transparent !important;
            color: #ffffff !important;
          }
          /* ===== 4. 页面宽度设置 ===== */
          .max-w-prose, .prose, .container, .mx-auto { 
            max-width: 85% !important; 
            width: 85% !important; 
          }
          /* ===== 5. 间距系统 ===== */
          :root {
            --space-xs: 0.5rem;
            --space-sm: 1rem;
            --space-md: 1.5rem;
            --space-lg: 2.5rem;
          }
          .hbb-section {
            padding-top: 1rem !important;
            padding-bottom: 1rem !important;
          }
          /* ===== 6. 轮播图 SLIDER ===== */
          .slider-container {
            width: 100%;
            height: 666px;
            overflow: hidden;
            position: relative;
            margin: var(--space-sm) 0 var(--space-md) 0;
          }
          .slider-wrapper {
            display: flex;
            width: 300%;
            height: 100%;
            animation: slide-loop 12s infinite;
          }
          .slider-wrapper img {
            width: 33.333%;
            height: 100%;
            object-fit: cover;
          }
          @keyframes slide-loop {
            0% { transform: translateX(0); }
            28% { transform: translateX(0); }
            33% { transform: translateX(-33.33%); }
            61% { transform: translateX(-33.33%); }
            66% { transform: translateX(-66.66%); }
            95% { transform: translateX(-66.66%); }
            100% { transform: translateX(0); }
          }
          /* ===== 7. 重新设计的标题区块 (居中 + 顶部横条) ===== */
          .main-title-container {
            background-color: #f0f9f8; /* 极浅的薄荷绿底色 */
            border-top: 6px solid #008a85; /* 顶部深绿色装饰横条 */
            padding: 2.5rem 1.5rem; /* 增加上下内边距，让呼吸感更足 */
            margin: 2.5rem auto;
            max-width: 85%;
            text-align: center; /* 彻底居中 */
            box-shadow: 0 4px 15px rgba(0,0,0,0.03); /* 淡淡的投影 */
            border-radius: 0 0 8px 8px; /* 顶部是平的，底部加一点点微圆角更精致 */
          }

          .full-name {
            font-size: 1.4rem;
            font-weight: bold;
            color: #718096; /* 灰蓝色，显得比较高级 */
            text-transform: uppercase; /* 全称大写 */
            letter-spacing: 2px; /* 增加字间距，显得大气 */
            display: block;
            margin-bottom: 1rem;
            line-height: 1.4;
          }

          .brand-name-bold {
            font-size: 2.6rem; /* 进一步放大简称 */
            color: #008a85;
            font-weight: 900;
            letter-spacing: 4px; /* 缩写字母拉开距离，非常有设计感 */
            margin: 0;
            line-height: 1;
          }
          /* ===== 8. 底部署名栏 ===== */
          .logo-bar {
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            padding: var(--space-lg) 0;
            border-top: 1px solid #f0f0f0;
            margin-top: var(--space-md);
          }
          /* ===== 9. CUSTOM FOOTER STYLE ===== */
          .custom-footer-container {
            background-color: #008a85; 
            color: #ffffff;            
            padding: 4rem 10% !important; 
            margin-top: 0;
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
            max-width: 1200px;
            margin: 0 auto;
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
          .footer-column p, .footer-column li {
            font-size: 0.95rem;
            line-height: 1.6;
            color: rgba(255,255,255,0.9);
          }
          .footer-column a {
            color: #ffffff !important;
            text-decoration: underline;
            text-underline-offset: 3px;
            transition: opacity 0.2s;
          }
          .footer-column a:hover {
            opacity: 0.7;
          }
          .footer-column ul {
            list-style: none;
            padding: 0;
            margin: 0;
          }
          .footer-column ul li {
            margin-bottom: 8px;
          }

          /* ===== 10. 彻底隐藏系统默认底部 (CC图标、Hugo署名等) ===== */
          footer.site-footer, 
          .site-footer, 
          footer, 
          .powered-by, 
          .copyright {
            display: none !important;
          }

          @media (max-width: 768px) {
            .footer-grid {
              grid-template-columns: 1fr;
              text-align: center;
            }
            .footer-column h3 {
              display: block;
            }
          }
        </style>

  # ─────────────────────────────────────────────────────────
  # 1. TITLE + SLIDER
  # ─────────────────────────────────────────────────────────
  - block: markdown
    content:
      text: |
        <div class="main-title-container">
          <span class="full-name">Synthesis, Electrochemistry, Imaging and Analytical Sciences for Diagnostics</span>
          <div class="brand-name-bold">SEISAD </div>
        </div>
        <div class="slider-container">
          <div class="slider-wrapper">
            <img src="media/AA3A0511.JPG">
            <img src="media/AA3A0511.JPG" style="filter: brightness(0.9);">
            <img src="media/AA3A0511.JPG" style="filter: brightness(0.85);">
          </div>
        </div>
    design:
      full_width: true

  # ─────────────────────────────────────────────────────────
  # 2. RESEARCH
  # ─────────────────────────────────────────────────────────
  - block: markdown
    content:
      title: "Our Research"
      text: |
        <div class="research-text">
          <span style="float:left; font-size:60px; line-height:50px; padding-right:15px; color:#008a85; font-weight:bold;">A</span>
          ctually, the Team develops projects aimed at elaborating processes and tools for the early detection of pathological signals using chemical and analytical methodologies. The main research directions focus on: (i) new synthetic methodologies and supported catalysis in mini- and continuous microflow reactors, protein ligand library synthesis, and advanced radiolabeling for imaging; (ii) electrochemical sensors for biological markers, molecular materials for electrocatalysis, and label-free detection of microRNAs via scanning electrochemical microscopy (SECM); (iii) development of targeted optical and MR imaging agents, functional MRI methods for characterization, and therapeutic follow-up of cancer in preclinical models; and (iv) characterization of new nano-supports and selective objects such as peptide nanotubes, nanobodies, and biocompatible nano-objects for medical diagnosis and environmental control.
        </div>
    design:
      full_width: true
      spacing:
        padding: ["1rem", "0", "1.5rem", "0"]

  # ─────────────────────────────────────────────────────────
  # 3. LOGO BAR
  # ─────────────────────────────────────────────────────────
  - block: markdown
    content:
      text: |
        <div class="logo-bar">
          <img src="media/seisad.png" style="height:80px;">
          <img src="media/chimie.png" style="height:100px;">
          <img src="media/iclehs.png" style="height:75px;">
          <img src="media/cnrs.png" style="height:80px;">
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
    design:
      full_width: true
      spacing:
        padding: ["0", "0", "0", "0"]
---
