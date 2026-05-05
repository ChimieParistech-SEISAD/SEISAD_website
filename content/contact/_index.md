---
title: "Contact Us"
type: landing

design:
  spacing: "0"

sections:
  # ─────────────────────────────────────────────────────────
  # 0. GLOBAL STYLE (同步全站视觉规范 & 导航栏修正)
  # ─────────────────────────────────────────────────────────
  - block: markdown
    content:
      text: |
        <style>
          /* ===== 1. 框架间距与宽度修正 ===== */
          .blox-page-header, .main-content, main {
            padding-top: 0 !important;
            margin-top: 0 !important;
          }
          section.hbb-section {
            padding-top: 10px !important;
            padding-bottom: 10px !important;
          }
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

          /* ===== 2. 导航栏标准化 (同步主页) ===== */
          header, .page-header { background-color: #008a85 !important; padding: 0 !important; }
          .navbar-brand, .navbar-brand-mobile, .brand-logo { display: none !important; }
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
          .navbar-collapse { flex-grow: 1 !important; display: flex !important; justify-content: center !important; }
          .navbar-nav { flex-direction: row !important; align-items: center !important; }
          .nav-link {
            color: #ffffff !important;
            font-weight: bold !important;
            font-size: 1.1rem !important;
            padding: 0 1.5rem !important; 
          }
          .navbar-nav-btns { display: flex !important; align-items: center !important; margin-left: 2rem !important; }

          /* ===== 3. 统一标题横条 ===== */
          .main-title-container {
            background-color: #f0f9f8;
            border-top: 6px solid #008a85;
            padding: 2.5rem 1.5rem;
            margin: 0.5rem 0 3rem 0;
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

          /* ===== 4. Contact 页面专用对齐布局 ===== */
          .contact-grid {
            display: flex;
            gap: 50px;
            align-items: flex-start;
            margin-bottom: 60px;
          }
          .contact-info-column {
            flex: 0 0 40%;
            text-align: left; /* 强制左对齐 */
          }
          /* 核心对齐：消除标题的所有默认 margin/padding 偏离 */
          .contact-info-column h2 {
            font-size: 2rem;
            color: #008a85;
            font-weight: bold;
            margin: 0 0 25px 0 !important; /* 底部间距，左右为0 */
            padding: 0 !important;
          }
          .contact-details {
            font-size: 1.1rem;
            line-height: 1.8;
            color: #333;
            margin: 0 !important;
            padding: 0 !important;
          }
          .contact-details strong {
            display: block;
            margin-bottom: 5px;
            font-size: 1.2rem;
          }
          .contact-details a {
            color: #008a85 !important;
            text-decoration: underline;
            font-weight: bold;
          }
          
          .map-column {
            flex: 0 0 55%;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            border: 1px solid #eee;
          }
          .map-column iframe {
            width: 100%;
            height: 450px;
            border: 0;
            display: block;
          }

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

          /* 隐藏默认底部 */
          footer, .site-footer, .powered-by, .copyright { display: none !important; }

          @media (max-width: 900px) {
            .contact-grid { flex-direction: column; }
            .contact-info-column, .map-column { flex: 0 0 100%; width: 100%; }
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
            <span class="full-name">Get in Touch with Us</span>
            <div class="brand-name-bold">CONTACT US</div>
          </div>
        </div>
    design:
      full_width: true

  # ─────────────────────────────────────────────────────────
  # 2. CONTACT CONTENT (左右对齐布局)
  # ─────────────────────────────────────────────────────────
  - block: markdown
    content:
      text: |
        <div class="home-outer-wrapper">
          <div class="contact-grid">
            
            <!-- 左侧：文字信息 -->
            <div class="contact-info-column">
              <h2>Office Location</h2>
              <div class="contact-details">
                <strong>Institute of Chemistry for Life and Health Sciences (i-CLeHS)</strong>
                UMR 8060 / ENSCP – Chimie ParisTech<br><br>
                11 Rue Pierre et Marie Curie<br>
                75005 Paris, France<br><br>
                Email: <a href="mailto:anne.varenne@chimieparistech.psl.eu">anne.varenne@chimieparistech.psl.eu</a>
              </div>
            </div>

            <!-- 右侧：地图 -->
            <div class="map-column">
              <!-- 这里使用了 Google Maps 的 Iframe 嵌入代码 -->
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.591035540058!2d2.3421715768858223!3d48.846938901509915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671e600555555%3A0x63346e45f1b268f7!2sChimie%20ParisTech%20-%20PSL!5e0!3m2!1sen!2sfr!4v1700000000000!5m2!1sen!2sfr" 
                allowfullscreen="" 
                loading="lazy">
              </iframe>
            </div>

          </div>
        </div>
    design:
      full_width: true

  # ─────────────────────────────────────────────────────────
  # 3. CUSTOM FOOTER (全站同步)
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
