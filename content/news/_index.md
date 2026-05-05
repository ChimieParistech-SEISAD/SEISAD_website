---
title: "News"
type: landing

design:
  spacing: "0"

sections:
  # ─────────────────────────────────────────────────────────
  # 0. GLOBAL STYLE (同步全站视觉规范)
  # ─────────────────────────────────────────────────────────
  - block: markdown
    content:
      text: |
        <style>
          /* ===== 1. 框架间距修正 ===== */
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

          /* ===== 2. 导航栏标准化 (修正 SEISAD 显现和图标挤压问题) ===== */
          header, .page-header {
            background-color: #008a85 !important;
            padding: 0 !important;
          }
          
          /* 强制隐藏左侧所有的 Brand/Logo 文本 */
          .navbar-brand, .navbar-brand-mobile, .brand-logo {
            display: none !important;
          }
          
          .navbar {
            background-color: #008a85 !important;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1) !important;
            min-height: 60px;
            padding: 0 2rem !important; /* 给导航栏左右留出安全边距 */
          }
          
          /* 导航栏容器：使用 space-between 让中间菜单居中，两侧撑开 */
          .navbar > .container, .navbar > .container-xl {
            display: flex !important;
            justify-content: space-between !important; 
            max-width: 1400px !important; /* 与内容宽度一致 */
          }
          
          /* 中间菜单部分 */
          .navbar-collapse {
            flex-grow: 1 !important;
            display: flex !important;
            justify-content: center !important; /* 确保菜单项整体在中间 */
          }
          
          .navbar-nav {
            flex-direction: row !important;
            align-items: center !important;
          }
          
          .nav-item {
            display: flex !important;
            align-items: center !important;
          }
          
          .nav-link {
            color: #ffffff !important;
            font-weight: bold !important;
            font-size: 1.5rem !important; /* 稍微调小一点，防止在小屏幕挤压 */
            /* 关键：通过 padding 统一单词间的物理间距 */
            padding: 0 1.5rem !important; 
            transition: background-color 0.3s;
          }
          
          .nav-link:hover {
            background-color: rgba(255, 255, 255, 0.15) !important;
            border-radius: 4px;
          }
          
          /* 右侧图标部分 (搜索、月亮) */
          .navbar-nav-btns {
            display: flex !important;
            align-items: center !important;
            margin-left: 2rem !important; /* 强制与 "Contact" 保持距离 */
          }
          
          .navbar-nav-btns .nav-link {
            padding: 0 0.8rem !important; /* 图标之间的间距小一点 */
          }
          
          /* 针对移动端的微调：如果屏幕太小，隐藏图标或调整 */
          @media (max-width: 768px) {
            .nav-link { padding: 0 0.8rem !important; font-size: 0.9rem !important; }
          }
          /* ===== 3. 统一标题横条样式 ===== */
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
          }

          /* ===== 4. 新闻卡片专项样式 ===== */
          .news-item {
            display: flex;
            gap: 30px;
            background: #ffffff;
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.05);
            margin-bottom: 30px;
            border-left: 6px solid #008a85; /* 加粗左边框 */
            transition: all 0.3s ease;
          }
          .news-item:hover {
            transform: translateX(10px);
            box-shadow: 0 6px 25px rgba(0,0,0,0.1);
          }
          .news-date {
            min-width: 140px;
            font-weight: 900;
            color: #008a85;
            font-size: 1.2rem;
            border-right: 2px solid #f0f0f0;
            padding-right: 20px;
            display: flex;
            align-items: center;
          }
          .news-content { flex: 1; }
          .news-tag {
            display: inline-block;
            background: #e9f5f5;
            color: #008a85;
            padding: 3px 12px;
            border-radius: 4px;
            font-size: 0.85rem;
            font-weight: bold;
            text-transform: uppercase;
            margin-bottom: 12px;
          }
          .news-title {
            font-size: 1.4rem;
            font-weight: bold;
            color: #222;
            margin-bottom: 12px;
            line-height: 1.3;
          }
          .news-text { color: #555; line-height: 1.8; font-size: 1.05rem; }

          /* ===== 5. 全宽自定义页脚 ===== */
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
            margin-top: 60px;
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
          .footer-column p, .footer-column li { font-size: 0.85rem; color: rgba(255,255,255,0.95) !important; }
          .footer-column a { color: #ffffff !important; text-decoration: underline; }

          /* 隐藏系统默认 */
          footer, .site-footer, .powered-by, .copyright { display: none !important; }

          @media (max-width: 768px) {
            .news-item { flex-direction: column; gap: 15px; }
            .news-date { border-right: none; border-bottom: 2px solid #f0f0f0; padding-bottom: 10px; min-width: auto; }
            .footer-grid { grid-template-columns: 1fr; text-align: center; }
          }
        </style>

  # ─────────────────────────────────────────────────────────
  # 1. TITLE BAR (视觉一致性)
  # ─────────────────────────────────────────────────────────
  - block: markdown
    content:
      text: |
        <div class="home-outer-wrapper">
          <div class="main-title-container">
            <span class="full-name">Latest Updates & Events</span>
            <div class="brand-name-bold">NEWS</div>
          </div>
        </div>
    design:
      full_width: true

  # ─────────────────────────────────────────────────────────
  # 2. NEWS LIST
  # ─────────────────────────────────────────────────────────
  - block: markdown
    content:
      text: |
        <div class="home-outer-wrapper">

          <!-- News Item 1 -->
          <div class="news-item">
            <div class="news-date">May 2024</div>
            <div class="news-content">
              <span class="news-tag">Publication</span>
              <div class="news-title">New paper published in Nature Communications</div>
              <div class="news-text">Our latest work on microfluidic platforms for cancer cell analysis is now online. Congratulations to all the team members involved!</div>
            </div>
          </div>

          <!-- News Item 2 -->
          <div class="news-item">
            <div class="news-date">Mar 2024</div>
            <div class="news-content">
              <span class="news-tag">Award</span>
              <div class="news-title">Best Poster Award at the MicroTAS Conference</div>
              <div class="news-text">Xingyuan XU received the Best Poster Award for his presentation on AI-driven sensing methodologies.</div>
            </div>
          </div>

          <!-- News Item 3 -->
          <div class="news-item">
            <div class="news-date">Jan 2024</div>
            <div class="news-content">
              <span class="news-tag">Grant</span>
              <div class="news-title">ANR Project Funding Secured</div>
              <div class="news-text">We are excited to announce that our project on "Luminescent Nanoprobes" has been funded by the ANR for the next three years.</div>
            </div>
          </div>

        </div>
    design:
      full_width: true

  # ─────────────────────────────────────────────────────────
  # 3. CUSTOM FOOTER (完全同步主页)
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
                <ul style="list-style:none; padding:0;">
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
