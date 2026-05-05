---
title: "Contact Us"
type: landing

design:
  spacing: "0"

sections:
  # ─────────────────────────────────────────────────────────
  # 0. GLOBAL STYLE (全站感官一致性样式：导航栏、标题、页脚)
  # ─────────────────────────────────────────────────────────
  - block: markdown
    content:
      text: |
        <style>
          /* 1. 彻底解决框架间距 */
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

          /* 2. 导航栏标准化 (彻底同步主页) */
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
          .nav-link {
            color: #ffffff !important;
            font-weight: bold !important;
            font-size: 1.1rem !important;
            padding: 0 1.5rem !important; 
          }
          .navbar-nav-btns { display: flex !important; align-items: center !important; margin-left: 2rem !important; }

          /* 3. 统一标题横条 (解决贴顶) */
          .main-title-container {
            background-color: #f0f9f8;
            border-top: 6px solid #008a85;
            padding: 2.5rem 1.5rem;
            margin: 0.5rem 0 3rem 0;
            text-align: center;
            box-shadow: 0 4px 15px rgba(0,0,0,0.03);
            border-radius: 0 0 8px 8px;
          }
          .brand-name-bold {
            font-size: 2.6rem;
            color: #008a85;
            font-weight: 900;
            letter-spacing: 4px;
            line-height: 1;
          }

          /* 4. Contact 页面对齐控制 */
          .contact-grid-wrapper {
            display: flex;
            gap: 60px;
            align-items: flex-start;
          }
          .contact-info-column {
            flex: 0 0 40%;
          }
          /* 关键对齐：确保绿色标题与下方文字垂直对齐 */
          .contact-info-column h2 {
            font-size: 2rem;
            color: #008a85;
            font-weight: bold;
            margin: 0 0 25px 0 !important; /* 强制左边距为0，底部留白 */
            padding: 0 !important;
            text-align: left;
          }
          .contact-details-box {
            font-size: 1.1rem;
            line-height: 1.8;
            color: #333;
            text-align: left;
          }
          .map-column-wrapper {
            flex: 0 0 55%;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            border: 1px solid #eee;
          }

          /* 5. 页脚全宽背景同步 */
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
          footer, .site-footer { display: none !important; }

          @media (max-width: 900px) {
            .contact-grid-wrapper { flex-direction: column; }
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
            <span style="font-size:1.5rem; font-weight:bold; color:#718096; text-transform:uppercase; letter-spacing:2px; display:block; margin-bottom:0.8rem;">Get in Touch</span>
            <div class="brand-name-bold">CONTACT US</div>
          </div>
        </div>
    design:
      full_width: true

  # ─────────────────────────────────────────────────────────
  # 2. CONTACT CONTENT (解决 Office Location 对齐问题)
  # ─────────────────────────────────────────────────────────
  - block: markdown
    content:
      text: |
        <div class="home-outer-wrapper">
          <div class="contact-grid-wrapper">
            <div class="contact-info-column">
              <h2>Office Location</h2>
              <div class="contact-details-box">
                <strong style="font-size:1.2rem; display:block; margin-bottom:8px;">Institute of Chemistry for Life and Health Sciences (i-CLeHS)</strong>
                UMR 8060 / ENSCP – Chimie ParisTech<br><br>
                11 Rue Pierre et Marie Curie<br>
                75005 Paris, France<br><br>
                Email: <a href="mailto:anne.varenne@chimieparistech.psl.eu" style="color:#008a85; font-weight:bold; text-decoration:underline;">anne.varenne@chimieparistech.psl.eu</a>
              </div>
            </div>
            <div class="map-column-wrapper">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.591035540058!2d2.3421715768858223!3d48.846938901509915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671e600555555%3A0x63346e45f1b268f7!2sChimie%20ParisTech%20-%20PSL!5e0!3m2!1sen!2sfr!4v1700000000000!5m2!1sen!2sfr" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
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
                <h3 style="color:white; border-bottom:2px solid rgba(255,255,255,0.3); padding-bottom:5px; margin-bottom:1.2rem;">Address</h3>
                <p style="font-size:0.85rem; line-height:1.5;">Chimie ParisTech - PSL University<br>i-CLeHS (CNRS UMR 8060)<br>11 Rue Pierre et Marie Curie<br>75005 Paris, France</p>
              </div>
              <div class="footer-column">
                <h3 style="color:white; border-bottom:2px solid rgba(255,255,255,0.3); padding-bottom:5px; margin-bottom:1.2rem;">Contact</h3>
                <p style="font-size:0.85rem; line-height:1.5;">Tel: +33 1 XX XX XX XX<br>Email: <a href="mailto:contact@seisad.com" style="color:white; text-decoration:underline;">contact@seisad.com</a></p>
              </div>
              <div class="footer-column">
                <h3 style="color:white; border-bottom:2px solid rgba(255,255,255,0.3); padding-bottom:5px; margin-bottom:1.2rem;">Quick Links</h3>
                <ul style="list-style:none; padding:0; font-size:0.85rem;">
                  <li><a href="https://psl.eu/" style="color:white; text-decoration:underline;">PSL University</a></li>
                  <li><a href="https://www.cnrs.fr/" style="color:white; text-decoration:underline;">CNRS</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    design:
      full_width: true
---
