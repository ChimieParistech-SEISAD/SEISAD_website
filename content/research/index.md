---
title: Research Themes
type: landing

design:
  spacing: "0"

sections:
  # ─────────────────────────────────────────────────────────
  # 0. GLOBAL STYLE (同步主页全站规范)
  # ─────────────────────────────────────────────────────────
  - block: markdown
    content:
      text: |
        <style>
          /* ===== 1. 消除框架间距与缩放限制 ===== */
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

          /* 统一大容器 (1400px) */
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

          /* ===== 3. 统一标题横条 (解决顶部贴紧问题) ===== */
          .main-title-container {
            background-color: #f0f9f8;
            border-top: 6px solid #008a85;
            padding: 2.5rem 1.5rem;
            margin: 0.5rem 0 3rem 0; /* 底部留出 3rem 间距 */
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

          /* ===== 4. Research 专用模块样式 ===== */
          .theme-module {
            display: flex;
            background: #ffffff;
            border-radius: 16px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.06);
            margin-bottom: 50px;
            overflow: hidden;
            transition: transform 0.3s ease;
            border: 1px solid #eee;
          }
          .theme-module:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 40px rgba(0,0,0,0.1);
          }
          .theme-left {
            width: 40%;
            padding: 40px;
            background: #fcfcfc;
            display: flex;
            flex-direction: column;
            border-right: 1px solid #eee;
          }
          .theme-label {
            font-size: 1.8rem;
            font-weight: bold;
            color: #008a85;
            margin-bottom: 25px;
            line-height: 1.2;
          }
          .theme-img-container {
            width: 100%;
            height: 250px;
            overflow: hidden;
            border-radius: 10px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          }
          .theme-img-container img { width: 100%; height: 100%; object-fit: cover; }
          .theme-right { width: 60%; padding: 40px; display: flex; flex-direction: column; justify-content: center; }
          .theme-detailed-desc { font-size: 1.1rem; color: #444; line-height: 1.8; margin-bottom: 30px; }
          .theme-contact {
            background: #f0f9f8;
            padding: 15px 20px;
            border-radius: 8px;
            border-left: 4px solid #008a85;
            font-size: 0.95rem;
          }
          .theme-contact a { color: #008a85 !important; text-decoration: underline; }
          .contact-title { font-weight: bold; color: #333; margin-bottom: 5px; display: block; }

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
          .footer-column p, .footer-column li { font-size: 0.85rem; color: rgba(255,255,255,0.95) !important; }
          .footer-column a { color: #ffffff !important; text-decoration: underline; }

          /* 隐藏系统默认 */
          footer, .site-footer, .powered-by, .copyright { display: none !important; }

          @media (max-width: 900px) {
            .theme-module { flex-direction: column; }
            .theme-left, .theme-right { width: 100%; }
            .theme-left { border-right: none; border-bottom: 1px solid #eee; }
            .footer-grid { grid-template-columns: 1fr; text-align: center; }
          }
        </style>

  # ─────────────────────────────────────────────────────────
  # 1. TITLE BAR (视觉一致性 + 解决贴顶问题)
  # ─────────────────────────────────────────────────────────
  - block: markdown
    content:
      text: |
        <div class="home-outer-wrapper">
          <div class="main-title-container">
            <span class="full-name">Our Core Scientific Domains</span>
            <div class="brand-name-bold">RESEARCH THEMES</div>
          </div>
        </div>
    design:
      full_width: true

  # ─────────────────────────────────────────────────────────
  # 2. RESEARCH MODULES
  # ─────────────────────────────────────────────────────────
  - block: markdown
    content:
      text: |
        <div class="home-outer-wrapper">
          
          <!-- 主题 1 -->
          <div class="theme-module">
            <div class="theme-left">
              <div class="theme-label">Synthetic Methodologies</div>
              <div class="theme-img-container">
                <img src="/SEISAD_website/media/Synthetic Methodologies.jpg" alt="Synthetic Methodologies">
              </div>
            </div>
            <div class="theme-right">
              <div class="theme-detailed-desc">
                Our group is dedicated to the transition from traditional batch chemistry to advanced <strong>continuous microflow systems</strong>. This research focuses on the development of innovative synthetic methodologies that leverage the high heat and mass transfer rates of microreactors. By integrating heterogeneous catalysis with flow chemistry, we aim to achieve sustainable and scalable chemical processes.
              </div>
              <div class="theme-contact">
                <span class="contact-title">Contact Person:</span>
                <div>Dr. Christian Girard</div>
                <div>Dr. Laura Trapiella</div>
                <div>Dr. Zijun Wang</div>
              </div>
            </div>
          </div>

          <!-- 主题 2 -->
          <div class="theme-module">
            <div class="theme-left">
              <div class="theme-label"> Electrochemical BioSensors</div>
              <div class="theme-img-container">
                <img src="/SEISAD_website/media/biosensor.jpg" alt="Sensors">
              </div>
            </div>
            <div class="theme-right">
              <div class="theme-detailed-desc">
                We design and engineer highly sensitive <strong>electrochemical and optical sensors</strong> for clinical diagnostics. Our work involves the surface functionalization of electrodes with nanomaterials to enable label-free detection of biological markers. These platforms are designed for early-stage detection of cardiovascular diseases and metabolic disorders.
              </div>
              <div class="theme-contact">
                <span class="contact-title">Contact Person:</span>
                <div>Prof. Anne Varenne</div>
                <div>Prof. Sophie Griveau</div>
                <div>Dr. Cyrine Slim</div>
                <div>Dr. Fanny d'Orlyé</div>
              </div>
            </div>
          </div>

          <!-- 主题 3 -->
          <div class="theme-module">
            <div class="theme-left">
              <div class="theme-label">Bio-imaging & Phototherapy</div>
              <div class="theme-img-container">
                <img src="/SEISAD_website/media/Imaging.png" alt="Imaging">
              </div>
            </div>
            <div class="theme-right">
              <div class="theme-detailed-desc">
                Our research in imaging focuses on the creation of <strong>multi-modal theranostic agents</strong>. By combining MRI with optical fluorescence, we develop probes that can visualize tumors and deliver therapeutic effects. These agents are evaluated in preclinical models to monitor drug distribution and therapeutic response in real-time.
              </div>
              <div class="theme-contact">
                <span class="contact-title">Contact Person:</span>
                <div>Dr. Bich-Thuy Doan</div>
                <div>Dr. Zijun Wang</div>
              </div>
            </div>
          </div>

        </div>
    design:
      full_width: true

  # ─────────────────────────────────────────────────────────
  # 3. CUSTOM FOOTER (完全同步)
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
