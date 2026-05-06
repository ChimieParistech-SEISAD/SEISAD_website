---
title: "Opportunities"
type: landing

design:
  spacing: "0"

sections:
  # ─────────────────────────────────────────────────────────
  # 0. GLOBAL STYLE (同步主页的全局样式与导航栏)
  # ─────────────────────────────────────────────────────────
  - block: markdown
    content:
      text: |
        <style>
          /* ===== 1. 暴力消除框架自带间距 ===== */
          .blox-page-header, .main-content, main {
            padding-top: 0 !important;
            margin-top: 0 !important;
          }

          section.hbb-section {
            padding-top: 10px !important;
            padding-bottom: 10px !important;
          }

          /* 统一容器宽度 */
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

          /* ===== 2. 导航栏标准化 ===== */
          header, .page-header {
            background-color: #008a85 !important;
            padding: 0 !important;
          }
          
          .navbar-brand, .navbar-brand-mobile, .brand-logo {
            display: none !important;
          }
          
          .navbar {
            background-color: #008a85 !important;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1) !important;
            min-height: 60px;
            padding: 0 2rem !important;
          }
          
          .navbar > .container, .navbar > .container-xl {
            display: flex !important;
            justify-content: space-between !important; 
            max-width: 1400px !important;
          }
          
          .navbar-collapse {
            flex-grow: 1 !important;
            display: flex !important;
            justify-content: center !important;
          }
          
          .navbar-nav {
            flex-direction: row !important;
            align-items: center !important;
          }
          
          .nav-link {
            color: #ffffff !important;
            font-weight: bold !important;
            font-size: 1.5rem !important;
            padding: 0 1.5rem !important; 
            transition: background-color 0.3s;
          }
          
          .nav-link:hover {
            background-color: rgba(255, 255, 255, 0.15) !important;
            border-radius: 4px;
          }

          /* ===== 3. 居中标题横条 ===== */
          .main-title-container {
            background-color: #f0f9f8;
            border-top: 6px solid #008a85;
            padding: 2.5rem 1.5rem;
            margin: 0.5rem 0 2rem 0;
            text-align: center;
            box-shadow: 0 4px 15px rgba(0,0,0,0.03);
            border-radius: 0 0 8px 8px;
          }
          .full-name {
            font-size: 1.5rem;
            font-weight: bold;
            color: #718096;
            text-transform: uppercase;
            letter-spacing: 2px;
            display: block;
            margin-bottom: 0.8rem;
          }
          .brand-name-bold {
            font-size: 2.6rem;
            color: #008a85;
            font-weight: 900;
            letter-spacing: 4px;
            line-height: 1;
          }

          /* ===== 4. Opportunities 专用卡片样式 ===== */
          .opp-card {
            background: #ffffff;
            border-radius: 16px;
            border: 1px solid #e2e8f0;
            margin-bottom: 40px;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          }
          .opp-header {
            background: #008a85;
            color: white;
            padding: 25px 35px;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          /* 默认状态 Badge */
          .opp-badge {
            background: #ffffff;
            color: #008a85;
            padding: 5px 15px;
            border-radius: 20px;
            font-weight: bold;
            font-size: 0.9rem;
          }
          /* 已关闭状态 Badge */
          .opp-badge-closed {
            background: #e2e8f0;
            color: #718096;
            padding: 5px 15px;
            border-radius: 20px;
            font-weight: bold;
            font-size: 0.9rem;
          }

          .opp-body { padding: 35px; }
          .opp-section-title {
            font-size: 1.3rem;
            font-weight: bold;
            color: #008a85 !important;
            margin: 25px 0 12px 0;
            display: flex !important;
            align-items: center;
            gap: 10px;
          }
          .opp-text { font-size: 1.1rem; color: #444; line-height: 1.7; }
          .opp-list { padding-left: 20px; margin: 15px 0; }
          .opp-list li { margin-bottom: 10px; font-size: 1.05rem; color: #444; list-style-type: disc !important; }
          
          /* 按钮样式 */
          .apply-btn {
            display: inline-block;
            background: #008a85;
            color: white !important;
            padding: 12px 25px;
            border-radius: 8px;
            text-decoration: none !important;
            font-weight: bold;
            margin-top: 25px;
            margin-right: 10px;
            transition: opacity 0.3s;
          }
          .download-btn {
            display: inline-block;
            background: #6c757d; /* 灰色区分 */
            color: white !important;
            padding: 12px 25px;
            border-radius: 8px;
            text-decoration: none !important;
            font-weight: bold;
            margin-top: 25px;
            transition: opacity 0.3s;
          }
          .apply-btn:hover, .download-btn:hover { opacity: 0.9; color: white !important; }
          
          .btn-disabled {
            background: #cbd5e0 !important;
            cursor: not-allowed;
          }

          /* ===== 5. 自定义底部 ===== */
          .custom-footer-container {
            background-color: #008a85; 
            color: #ffffff;            
            padding: 1.5rem 0 !important; 
            width: 100vw;
            position: relative;
            left: 50%;
            right: 50%;
            margin-left: -50vw;
            margin-right: -50vw;
            margin-top: 50px;
            margin-bottom: -50px; 
          }
          .footer-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 40px; }
          .footer-column h3 {
            color: #ffffff !important;
            font-size: 1.1rem;
            margin-bottom: 1.2rem;
            font-weight: bold;
            border-bottom: 2px solid rgba(255,255,255,0.3);
            display: inline-block;
            padding-bottom: 5px;
          }
          .footer-column p, .footer-column li {
            font-size: 0.85rem;
            line-height: 1.5;
            color: rgba(255,255,255,0.95) !important;
          }
          .footer-column a { color: #ffffff !important; text-decoration: underline; }
          .footer-column ul { list-style: none; padding: 0; }

          /* ===== 6. 隐藏系统默认底部 ===== */
          footer, .site-footer, .powered-by, .copyright {
            display: none !important;
          }

          @media (max-width: 768px) {
            .footer-grid { grid-template-columns: 1fr; text-align: center; }
            .opp-header { flex-direction: column; align-items: flex-start; gap: 10px; }
            .apply-btn, .download-btn { display: block; margin-right: 0; text-align: center; }
          }
        </style>

  # ─────────────────────────────────────────────────────────
  # 1. TITLE BAR
  # ─────────────────────────────────────────────────────────
  - block: markdown
    content:
      text: |
        <div class="home-outer-wrapper">
          <div class="main-title-container">
            <span class="full-name">Opportunities</span>
            <div class="brand-name-bold">JOIN OUR TEAM</div>
          </div>
        </div>
    design:
      full_width: true

  # ─────────────────────────────────────────────────────────
  # 2. OPPORTUNITIES CONTENT
  # ─────────────────────────────────────────────────────────
  - block: markdown
    content:
      text: |
        <div class="home-outer-wrapper">
          
          <!-- 1. ACTIVE POSITION: NIR-II Quantum Dots -->
          <!-- 1. ACTIVE POSITION: NIR-II Quantum Dots -->
          <div class="opp-card">
            <div class="opp-header">
              <span style="font-size:1.6rem; font-weight:bold;">PhD Position: NIR-II Semiconductor Quantum Dots and Theranostics</span>
              <span class="opp-badge">Status: Open</span>
            </div>
            <div class="opp-body">
              <div class="opp-section-title">Project Description</div>
              <p class="opp-text">This project focuses on developing high-performance silver chalcogenide quantum dots for the second near-infrared window (NIR-II). The candidate will work on microwave-assisted synthesis, surface engineering for biocompatibility, and preclinical validation (in vitro/in vivo) for multimodal imaging (Fluorescence/MRI) and cancer therapy.</p>
              <div class="opp-section-title">Requirements</div>
              <ul class="opp-list">
                <li>Master's degree in Chemistry, Materials Science, or Biomedical Engineering.</li>
                <li>Background in colloidal synthesis, optical spectroscopy (UV-Vis/PL), and characterization (TEM, XRD).</li>
                <li>Motivation for multidisciplinary research at the interface of chemistry and biology.</li>
                <li>Fluent in English with strong scientific rigor.</li>
              </ul>
              <div style="margin-top:10px; font-size:0.9rem; color:#666;">Expected start date: Oct 2026 | Deadline: 31 May 2026</div>
              
<div class="btn-group" style="margin-top: 25px;">
<a href="mailto:bich-thuy.doan@chimieparistech.psl.eu;zijun.wang@chimieparistech.psl.eu?subject=Application for PhD: NIR-II Quantum Dots" class="apply-btn">Apply via Email</a>
<a href="/media/PhD ENSCP NPs SWIR theranostics-20260424.pdf" target="_blank" class="download-btn">Download PDF Description</a>
</div>
            </div>
          </div>

          <!-- 2. CLOSED POSITION: Bio-Sensing -->
          <div class="opp-card" style="opacity: 0.8;">
            <div class="opp-header" style="background: #718096;">
              <span style="font-size:1.6rem; font-weight:bold;">PhD Position in Bio-Sensing</span>
              <span class="opp-badge-closed">Status: Closed</span>
            </div>
            <div class="opp-body">
              <div class="opp-section-title" style="color: #718096 !important;">Project Description</div>
              <p class="opp-text">The candidate will work on developing a new generation of electrochemical sensors for early detection of neurological biomarkers.</p>
              <div class="opp-section-title" style="color: #718096 !important;">Requirements</div>
              <ul class="opp-list">
                <li>Master's degree in Analytical Chemistry or Bioengineering.</li>
                <li>Experience with electrochemistry is highly desirable.</li>
              </ul>
              <div class="apply-btn btn-disabled">Applications Closed</div>
            </div>
          </div>

          <!-- 3. CLOSED POSITION: Postdoc -->
          <div class="opp-card" style="opacity: 0.8;">
            <div class="opp-header" style="background: #718096;">
              <span style="font-size:1.6rem; font-weight:bold;">Postdoctoral Fellowship</span>
              <span class="opp-badge-closed">Status: Closed</span>
            </div>
            <div class="opp-body">
              <div class="opp-section-title" style="color: #718096 !important;">Project Description</div>
              <p class="opp-text">Focus on the synthesis and preclinical evaluation of bimodal MRI/Optical imaging agents for cancer theranostics.</p>
              <div class="opp-section-title" style="color: #718096 !important;">Requirements</div>
              <ul class="opp-list">
                <li>PhD in Organic Chemistry or Molecular Imaging.</li>
                <li>Proven track record of high-quality publications.</li>
              </ul>
              <div class="apply-btn btn-disabled">Applications Closed</div>
            </div>
          </div>

        </div>
    design:
      full_width: true

  # ─────────────────────────────────────────────────────────
  # 3. CUSTOM FOOTER
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
                <p>Tel: +33 1 XX XX XX XX<br>Email: <a href="mailto:contact@seisad.com">contact@seisad.com</a><br>Twitter: <a href="https://twitter.com/MakeOwnable" target="_blank">@MakeOwnable</a></p>
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
