---
title: "Publications"
type: landing

design:
  spacing: "0"

sections:
  # ─────────────────────────────────────────────────────────
  # 0. GLOBAL STYLE & NAVIGATION (全站视觉规范同步)
  # ─────────────────────────────────────────────────────────
  - block: markdown
    content:
      text: |
        <style>
          /* 1. 框架与容器修正 */
          .blox-page-header, .main-content, main { padding-top: 0 !important; margin-top: 0 !important; }
          section.hbb-section { padding-top: 10px !important; padding-bottom: 10px !important; }
          .max-w-prose, .prose, .container, .mx-auto { max-width: 100% !important; width: 100% !important; }
          .home-outer-wrapper { width: 95%; max-width: 1400px; margin: 0 auto; clear: both; }

          /* 2. 导航栏标准化 (同步全站) */
          header, .page-header { background-color: #008a85 !important; padding: 0 !important; }
          .navbar-brand, .navbar-brand-mobile, .brand-logo { display: none !important; }
          .navbar { background-color: #008a85 !important; box-shadow: 0 2px 8px rgba(0,0,0,0.1) !important; min-height: 60px; padding: 0 2rem !important; }
          .navbar > .container, .navbar > .container-xl { display: flex !important; justify-content: space-between !important; max-width: 1400px !important; }
          .navbar-collapse { flex-grow: 1 !important; display: flex !important; justify-content: center !important; }
          .nav-link { color: #ffffff !important; font-weight: bold !important; font-size: 1.1rem !important; padding: 0 1.5rem !important; }
          .navbar-nav-btns { display: flex !important; align-items: center !important; margin-left: 2rem !important; }

          /* 3. 统一标题横条 */
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

          /* 4. Publication 卡片与年份样式 */
          .year-header {
            font-size: 2.2rem;
            color: #333;
            font-weight: 900;
            margin: 40px 0 25px 0 !important;
            padding-bottom: 10px;
            border-bottom: 3px solid #eee;
            text-align: left;
          }
          .pub-card {
            background: #ffffff;
            padding: 25px;
            border-radius: 12px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.05);
            border-left: 6px solid #008a85;
            margin-bottom: 25px;
            transition: transform 0.2s;
            text-align: left;
            position: relative;
          }
          .pub-card:hover { transform: translateY(-3px); box-shadow: 0 6px 20px rgba(0,0,0,0.1); }
          
          /* 编号样式 */
          .pub-number {
            font-weight: 900;
            color: #008a85;
            margin-right: 10px;
            font-size: 1.2rem;
          }

          .pub-title { font-size: 1.2rem; font-weight: bold; color: #222; line-height: 1.4; margin-bottom: 10px; }
          .pub-authors { font-size: 1rem; color: #444; margin-bottom: 8px; line-height: 1.5; }
          .pub-meta { font-size: 0.95rem; color: #666; margin-bottom: 15px; font-style: italic; }
          .pub-doi { color: #d32f2f !important; text-decoration: none; font-size: 0.9rem; }
          .pub-doi:hover { text-decoration: underline; }

          /* 5. 全宽页脚 */
          .custom-footer-container {
            background-color: #008a85; color: #ffffff; padding: 1.5rem 0 !important; 
            width: 100vw; position: relative; left: 50%; right: 50%; margin-left: -50vw; margin-right: -50vw; margin-bottom: -50px; margin-top: 60px;
          }
          .footer-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 40px; }
          footer, .site-footer { display: none !important; }

          @media (max-width: 900px) { .footer-grid { grid-template-columns: 1fr; text-align: center; } }
        </style>

  # ─────────────────────────────────────────────────────────
  # 1. 顶部标题横条
  # ─────────────────────────────────────────────────────────
  - block: markdown
    content:
      text: |
        <div class="home-outer-wrapper">
          <div class="main-title-container">
            <span style="font-size:1.5rem; font-weight:bold; color:#718096; text-transform:uppercase; letter-spacing:2px; display:block; margin-bottom:0.8rem;">Our Scientific Contributions</span>
            <div class="brand-name-bold">PUBLICATIONS</div>
          </div>
        </div>
    design:
      full_width: true

  # ─────────────────────────────────────────────────────────
  # 2. 论文列表 (2018-2026)
  # ─────────────────────────────────────────────────────────
  - block: markdown
    content:
      text: |
        <div class="home-outer-wrapper">

        <!-- 2026-2022 占位 -->
        <h2 class="year-header">2023</h2>
        <div class="pub-card">
        <span class="pub-title"><span class="pub-number">42.</span> Three in One: In Vitro and In Vivo Evaluation of Anticancer Activity of a Theranostic Agent...</span>
        <div class="pub-authors">S. Boumati, A. Sour, V. Heitz, J. Seguin, G. Beitz, Y. Kaga, M. Jakubaszek, J. Karges, G. Gasser, N. Mignet, and B. Doan</div>
        <div class="pub-meta">ACS Applied Bio Materials, 2023, 6 (11), 4791–4804.</div>
        <a class="pub-doi" href="https://doi.org/10.1021/acsabm.3c00565" target="_blank">https://doi.org/10.1021/acsabm.3c00565</a>
        </div>

        <!-- 2021 模块 -->
        <h2 class="year-header">2021</h2>
        <div class="pub-card">
        <span class="pub-title"><span class="pub-number">41.</span> Protein-protected metal nanoclusters as diagnostic and therapeutic platforms for biomedical applications.</span>
        <div class="pub-authors">IMAN ZARE, DANIEL M. CHEVRIER, ANNA CIFUENTES-RIUS, et al.</div>
        <div class="pub-meta">Materials Today 2021</div>
        <a class="pub-doi" href="https://doi.org/10.1016/j.mattod.2020.10.027" target="_blank">https://doi.org/10.1016/j.mattod.2020.10.027</a>
        </div>
        <!-- (此处可以继续添加2021的其他文章) -->

        <!-- 2020 模块 -->
        <h2 class="year-header">2020</h2>
        <div class="pub-card">
        <span class="pub-title"><span class="pub-number">11.</span> A maltol-containing Ruthenium Polypyridyl Complex as a Potential Anticancer Agent.</span>
        <div class="pub-authors">A. NOTARO, M. JAKUBASZEK, S. KOCH, et al.</div>
        <div class="pub-meta">Chem. Eur. J. 26 (2020) 4997-5009</div>
        <a class="pub-doi" href="https://doi.org/10.1002/chem.201904877" target="_blank">https://doi.org/10.1002/chem.201904877</a>
        </div>

        <!-- 2019 模块 -->
        <h2 class="year-header">2019</h2>
        <div class="pub-card">
        <span class="pub-title"><span class="pub-number">24.</span> Integrated microfluidic device for the separation, decomposition and detection of low molecular weight S-nitrosothiols.</span>
        <div class="pub-authors">G. F. DUARTE-JUNIOR, A. ISMAIL, S. GRIVEAU, et al.</div>
        <div class="pub-meta">The Analyst 144 (2019) 180-185</div>
        <a class="pub-doi" href="http://doi.org/10.1039/C8AN00757H" target="_blank">http://doi.org/10.1039/C8AN00757H</a>
        </div>

        <!-- 2018 模块 -->
        <h2 class="year-header">2018</h2>
        <div class="pub-card">
        <span class="pub-title"><span class="pub-number">41.</span> Colorimetric immunoassays for the screening and specificity evaluation of molecules disturbing VEGFs/VEGFRs interactions.</span>
        <div class="pub-authors">L. TRAPIELLA-ALFONSO, S. BROUSSY, W-Q LIU, et al.</div>
        <div class="pub-meta">Anal. Biochem. 2018</div>
        <a class="pub-doi" href="http://doi.org/10.1016/j.ab.2017.12.029" target="_blank">http://doi.org/10.1016/j.ab.2017.12.029</a>
        </div>

        </div>

  # ─────────────────────────────────────────────────────────
  # 3. 自定义页脚 (全站同步)
  # ─────────────────────────────────────────────────────────
  - block: markdown
    content:
      text: |
        <div class="custom-footer-container">
        <div class="home-outer-wrapper">
        <div class="footer-grid">
        <div class="footer-column"><h3>Address</h3><p>Chimie ParisTech - PSL University<br>i-CLeHS (CNRS UMR 8060)<br>11 Rue Pierre et Marie Curie<br>75005 Paris, France</p></div>
        <div class="footer-column"><h3>Contact</h3><p>Tel: +33 1 XX XX XX XX<br>Email: contact@seisad.com</p></div>
        <div class="footer-column"><h3>Quick Links</h3><ul style="list-style:none; padding:0;"><li><a href="https://psl.eu/" style="color:white;">PSL University</a></li><li><a href="https://www.cnrs.fr/" style="color:white;">CNRS</a></li></ul></div>
        </div>
        </div>
        </div>
    design:
      full_width: true
---
