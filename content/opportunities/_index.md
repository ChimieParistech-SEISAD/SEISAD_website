---
title: "Opportunities"
type: landing

design:
  spacing: "0"

sections:
  # ─────────────────────────────────────────────────────────
  # 0. GLOBAL STYLE (包含所有样式定义)
  # ─────────────────────────────────────────────────────────
  - block: markdown
    content:
      text: |
        <style>
          /* 全局布局修正 */
          .blox-page-header, .main-content, main { padding-top: 0 !important; margin-top: 0 !important; }
          section.hbb-section { padding-top: 10px !important; padding-bottom: 10px !important; }
          .home-outer-wrapper { width: 95%; max-width: 1400px; margin: 0 auto; clear: both; }

          /* 导航栏样式 */
          header, .page-header { background-color: #008a85 !important; padding: 0 !important; }
          .navbar-brand, .brand-logo { display: none !important; }
          .navbar { background-color: #008a85 !important; min-height: 60px; padding: 0 2rem !important; }
          .nav-link { color: #ffffff !important; font-weight: bold !important; font-size: 1.5rem !important; padding: 0 1.5rem !important; }

          /* 标题条 */
          .main-title-container { background-color: #f0f9f8; border-top: 6px solid #008a85; padding: 2.5rem 1.5rem; margin: 0.5rem 0 2rem 0; text-align: center; border-radius: 0 0 8px 8px; }
          .brand-name-bold { font-size: 2.6rem; color: #008a85; font-weight: 900; letter-spacing: 4px; }

          /* 卡片样式 */
          .opp-card { background: #ffffff; border-radius: 16px; border: 1px solid #e2e8f0; margin-bottom: 40px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.05); }
          .opp-header { background: #008a85; color: white; padding: 25px 35px; display: flex; justify-content: space-between; align-items: center; }
          .opp-header.closed { background: #718096; } /* 已关闭职位的颜色 */
          
          .opp-badge { background: #ffffff; color: #008a85; padding: 5px 15px; border-radius: 20px; font-weight: bold; font-size: 0.9rem; }
          .opp-badge-closed { background: #e2e8f0; color: #4a5568; padding: 5px 15px; border-radius: 20px; font-weight: bold; font-size: 0.9rem; }
          
          .opp-body { padding: 35px; }
          .opp-section-title { font-size: 1.3rem; font-weight: bold; color: #008a85 !important; margin: 25px 0 12px 0; }
          .opp-text { font-size: 1.1rem; color: #444; line-height: 1.7; }
          .opp-list { padding-left: 20px; margin: 15px 0; list-style-type: disc !important; }
          .opp-list li { margin-bottom: 10px; color: #444; }

          /* 按钮样式 */
          .btn-container { display: flex; gap: 15px; margin-top: 30px; flex-wrap: wrap; }
          .apply-btn { background: #008a85; color: white !important; padding: 12px 25px; border-radius: 8px; font-weight: bold; text-decoration: none !important; }
          .download-btn { background: #6c757d; color: white !important; padding: 12px 25px; border-radius: 8px; font-weight: bold; text-decoration: none !important; }
          .apply-btn:hover, .download-btn:hover { opacity: 0.9; }

          /* 底部样式 */
          .custom-footer-container { background-color: #008a85; color: #ffffff; padding: 1.5rem 0 !important; width: 100vw; position: relative; left: 50%; right: 50%; margin-left: -50vw; margin-right: -50vw; margin-top: 50px; }
          footer, .site-footer { display: none !important; }
        </style>

  # ─────────────────────────────────────────────────────────
  # 1. TITLE BAR
  # ─────────────────────────────────────────────────────────
  - block: markdown
    content:
      text: |
        <div class="home-outer-wrapper">
          <div class="main-title-container">
            <span style="font-size: 1.5rem; font-weight: bold; color: #718096; letter-spacing: 2px;">OPPORTUNITIES</span>
            <div class="brand-name-bold">JOIN OUR TEAM</div>
          </div>
        </div>

  # ─────────────────────────────────────────────────────────
  # 2. OPPORTUNITIES CONTENT
  # ─────────────────────────────────────────────────────────
  - block: markdown
    content:
      text: |
        <div class="home-outer-wrapper">
          
          <!-- 职位 1: 开放状态 -->
          <div class="opp-card">
            <div class="opp-header">
              <span style="font-size:1.6rem; font-weight:bold;">PhD Position: NIR-II Semiconductor Quantum Dots and Theranostics</span>
              <span class="opp-badge">Status: Open</span>
            </div>
            <div class="opp-body">
              <div class="opp-section-title">Project Description</div>
              <p class="opp-text">This project focuses on developing high-performance silver chalcogenide quantum dots for the second near-infrared window (NIR-II). The candidate will work on microwave-assisted synthesis, surface engineering for biocompatibility, and preclinical validation.</p>
              <div class="opp-section-title">Requirements</div>
              <ul class="opp-list">
                <li>Master's degree in Chemistry, Materials Science, or Biomedical Engineering.</li>
                <li>Background in colloidal synthesis and optical spectroscopy.</li>
                <li>Fluent in English with strong scientific rigor.</li>
              </ul>
              <div style="margin-top:10px; font-size:0.9rem; color:#666;">Expected start date: Oct 2026 | Deadline: 31 May 2026</div>
              
              <!-- 按钮区域 -->
              <div class="btn-container">
                <a href="mailto:bich-thuy.doan@chimieparistech.psl.eu;zijun.wang@chimieparistech.psl.eu?subject=Application for PhD: NIR-II Quantum Dots" class="apply-btn">Apply via Email</a>
                <a href="/media/PhD ENSCP NPs SWIR theranostics-20260424.pdf" target="_blank" class="download-btn">Download PDF Description</a>
              </div>
            </div>
          </div>

          <!-- 职位 2: 已关闭 -->
          <div class="opp-card" style="opacity: 0.8;">
            <div class="opp-header closed">
              <span style="font-size:1.6rem; font-weight:bold;">PhD Position in Bio-Sensing</span>
              <span class="opp-badge-closed">Status: Closed</span>
            </div>
            <div class="opp-body">
              <div class="opp-section-title" style="color:#718096 !important;">Project Description</div>
              <p class="opp-text">The candidate will work on developing a new generation of electrochemical sensors for early detection of neurological biomarkers.</p>
              <div style="margin-top:20px; color:#e53e3e; font-weight:bold;">This position is no longer accepting applications.</div>
            </div>
          </div>

          <!-- 职位 3: 已关闭 -->
          <div class="opp-card" style="opacity: 0.8;">
            <div class="opp-header closed">
              <span style="font-size:1.6rem; font-weight:bold;">Postdoctoral Fellowship</span>
              <span class="opp-badge-closed">Status: Closed</span>
            </div>
            <div class="opp-body">
              <div class="opp-section-title" style="color:#718096 !important;">Project Description</div>
              <p class="opp-text">Focus on the synthesis and preclinical evaluation of bimodal MRI/Optical imaging agents for cancer theranostics.</p>
              <div style="margin-top:20px; color:#e53e3e; font-weight:bold;">This position is no longer accepting applications.</div>
            </div>
          </div>

        </div>

  # ─────────────────────────────────────────────────────────
  # 3. CUSTOM FOOTER
  # ─────────────────────────────────────────────────────────
  - block: markdown
    content:
      text: |
        <div class="custom-footer-container">
          <div class="home-outer-wrapper">
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 40px; padding: 20px 0;">
              <div>
                <h3 style="color:white; border-bottom:2px solid rgba(255,255,255,0.3); display:inline-block;">Address</h3>
                <p style="font-size:0.85rem; color:white; margin-top:10px;">Chimie ParisTech - PSL University<br>11 Rue Pierre et Marie Curie, 75005 Paris</p>
              </div>
              <div>
                <h3 style="color:white; border-bottom:2px solid rgba(255,255,255,0.3); display:inline-block;">Contact</h3>
                <p style="font-size:0.85rem; color:white; margin-top:10px;">Email: <a href="mailto:contact@seisad.com" style="color:white;">contact@seisad.com</a></p>
              </div>
              <div>
                <h3 style="color:white; border-bottom:2px solid rgba(255,255,255,0.3); display:inline-block;">Links</h3>
                <p style="font-size:0.85rem; color:white; margin-top:10px;"><a href="https://psl.eu/" style="color:white;">PSL University</a></p>
              </div>
            </div>
          </div>
        </div>
---
