---
title: "Contact Us"
type: landing

design:
  spacing: "0"

sections:
  # ─────────────────────────────────────────────────────────
  # 0. GLOBAL STYLE (同步规范 & 修正对齐)
  # ─────────────────────────────────────────────────────────
  - block: markdown
    content:
      text: |
        <style>
          .blox-page-header, .main-content, main { padding-top: 0 !important; margin-top: 0 !important; }
          section.hbb-section { padding-top: 10px !important; padding-bottom: 10px !important; }
          .max-w-prose, .prose, .container, .mx-auto { max-width: 100% !important; width: 100% !important; }
          .home-outer-wrapper { width: 95%; max-width: 1400px; margin: 0 auto; clear: both; }

          header, .page-header { background-color: #008a85 !important; padding: 0 !important; }
          .navbar-brand, .navbar-brand-mobile, .brand-logo { display: none !important; }
          .navbar { background-color: #008a85 !important; box-shadow: 0 2px 8px rgba(0,0,0,0.1) !important; min-height: 60px; padding: 0 2rem !important; }
          .nav-link { color: #ffffff !important; font-weight: bold !important; font-size: 1.5rem !important; padding: 0 1.5rem !important; }

          .main-title-container {
            background-color: #f0f9f8;
            border-top: 6px solid #008a85;
            padding: 2.5rem 1.5rem;
            margin: 0.5rem 0 3rem 0;
            text-align: center;
            box-shadow: 0 4px 15px rgba(0,0,0,0.03);
            border-radius: 0 0 8px 8px;
          }
          .brand-name-bold { font-size: 2.6rem; color: #008a85; font-weight: 900; letter-spacing: 4px; line-height: 1; }

          .contact-grid-wrapper { display: flex; flex-wrap: wrap; gap: 40px; align-items: flex-start; }
          .contact-info-column { flex: 1; min-width: 320px; text-align: left; }
          .contact-info-column h2 {
            font-size: 2.2rem;
            color: #008a85;
            font-weight: bold;
            margin: 0 0 25px 0 !important;
            padding: 0 !important;
            border: none !important;
          }
          .contact-details-box { font-size: 1.15rem; line-height: 1.8; color: #333; }
          .map-column-wrapper { 
            flex: 1.5; 
            min-width: 320px; 
            border-radius: 16px; 
            overflow: hidden; 
            box-shadow: 0 10px 30px rgba(0,0,0,0.1); 
            border: 1px solid #eee;
          }

          .custom-footer-container {
            background-color: #008a85 !important; 
            color: #ffffff !important;            
            padding: 2rem 0 !important; 
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
            font-size: 1.2rem !important;
            margin-bottom: 1.2rem !important;
            font-weight: bold !important;
            border-bottom: 2px solid rgba(255,255,255,0.3) !important;
            display: inline-block !important;
            padding-bottom: 5px !important;
          }
          .footer-column p, .footer-column li { font-size: 0.9rem !important; color: rgba(255,255,255,0.95) !important; }
          .footer-column a { color: #ffffff !important; text-decoration: underline !important; }
          footer, .site-footer, .powered-by, .copyright { display: none !important; }

          @media (max-width: 900px) {
            .footer-grid { grid-template-columns: 1fr; text-align: center; }
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
            <span style="font-size:1.3rem; font-weight:bold; color:#718096; text-transform:uppercase; letter-spacing:2px; display:block; margin-bottom:0.5rem;">Get in Touch</span>
            <div class="brand-name-bold">CONTACT US</div>
          </div>
        </div>

  # ─────────────────────────────────────────────────────────
  # 2. CONTACT CONTENT (增加带 Marker 定位的地图)
  # ─────────────────────────────────────────────────────────
  - block: markdown
    content:
      text: |
        <div class="home-outer-wrapper">
          <div class="contact-grid-wrapper">
            <div class="contact-info-column">
              <h2>Office Location</h2>
              <div class="contact-details-box">
                <strong style="font-size:1.3rem; display:block; margin-bottom:12px; color: #002e5b;">Institute of Chemistry for Life and Health Sciences (i-CLeHS)</strong>
                UMR 8060 / ENSCP – Chimie ParisTech<br><br>
                11 Rue Pierre et Marie Curie<br>
                75005 Paris, France<br><br>
                <strong>Email:</strong> <a href="mailto:anne.varenne@chimieparistech.psl.eu" style="color:#008a85; font-weight:bold;">anne.varenne@chimieparistech.psl.eu</a>
              </div>
            </div>
            <div class="map-column-wrapper">
              <!-- 精准 Marker 定位地址：11 Rue Pierre et Marie Curie -->
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.591!2d2.342!3d48.847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671e600555555%3A0x63346e45f1b268f7!2s11%20Rue%20Pierre%20et%20Marie%20Curie%2C%2075005%20Paris%2C%20France!5e0!3m2!1sen!2sfr!4v1715670000000!5m2!1sen!2sfr" 
                width="100%" 
                height="450" 
                style="border:0; display:block;" 
                allowfullscreen="" 
                loading="lazy">
              </iframe>
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
                <p>Email: <a href="mailto:anne.varenne@chimieparistech.psl.eu">anne.varenne@chimieparistech.psl.eu</a><br>Web: <a href="https://www.chimieparistech.psl.eu/" target="_blank">chimieparistech.psl.eu</a></p>
              </div>
              <div class="footer-column">
                <h3>Quick Links</h3>
                <ul style="list-style:none; padding:0;">
                  <li><a href="https://www.cnrs.fr/" target="_blank">CNRS</a></li>
                  <li><a href="https://psl.eu/" target="_blank">PSL University</a></li>
                  <li><a href="https://i-clehs.fr/" target="_blank">i-CLeHS Institute</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
---
