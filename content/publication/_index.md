---
title: "Publications"
type: landing

design:
  spacing: "0"

sections:
  # ─────────────────────────────────────────────────────────
  # 0. GLOBAL STYLE (同步主页全站规范 & 导航栏修正)
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

          /* 2. 导航栏标准化 (彻底隐藏 SEISAD, 修复图标位置) */
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
            padding: 22px;
            border-radius: 12px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.05);
            border-left: 6px solid #008a85;
            margin-bottom: 20px;
            text-align: left;
          }
          .pub-number { font-weight: 900; color: #008a85; margin-right: 12px; font-size: 1.1rem; }
          .pub-content { font-size: 1.05rem; color: #222; line-height: 1.6; }
          .pub-doi { color: #d32f2f !important; text-decoration: none; font-size: 0.95rem; display: block; margin-top: 8px; }
          .pub-doi:hover { text-decoration: underline; }

          /* 5. 底部页脚全宽背景同步自首页 */
          .custom-footer-container {
            background-color: #008a85; color: #ffffff; padding: 1.5rem 0 !important; 
            width: 100vw; position: relative; left: 50%; right: 50%; margin-left: -50vw; margin-right: -50vw; margin-bottom: -50px; margin-top: 60px;
          }
          .footer-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 40px; }
          .footer-column h3 { color: #ffffff !important; font-size: 1.1rem; margin-bottom: 1.2rem; font-weight: bold; border-bottom: 2px solid rgba(255,255,255,0.3); display: inline-block; padding-bottom: 5px; }
          .footer-column p, .footer-column li, .footer-column { font-size: 0.85rem; line-height: 1.5; color: rgba(255,255,255,0.95) !important; }
          .footer-column a { color: #ffffff !important; text-decoration: underline; }
          .footer-column ul { list-style: none; padding: 0; }
          footer, .site-footer, .powered-by, .copyright { display: none !important; }

          @media (max-width: 900px) { .footer-grid { grid-template-columns: 1fr; text-align: center; } }
        </style>

  # ─────────────────────────────────────────────────────────
  # 1. 标题条
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

  # ─────────────────────────────────────────────────────────
  # 2. 论文列表 (Transcribed from images)
  # ─────────────────────────────────────────────────────────
  - block: markdown
    content:
      text: |
        <div class="home-outer-wrapper">

        <!-- 2021 -->
        <h2 class="year-header">2021</h2>
        <div class="pub-card"><div class="pub-content"><span class="pub-number">5.</span> C. GUERRA, A. RINGUEDE, M.I. AZOCAR... Corrosion analysis of AISI 430 stainless steel in the presence of Escherichia coli and Staphylococcus aureus. <strong>Corrosion Science</strong> 181 (2021) 109204.</div><a class="pub-doi" href="https://doi.org/10.1016/j.corsci.2020.109204" target="_blank">https://doi.org/10.1016/j.corsci.2020.109204</a></div>
        <div class="pub-card"><div class="pub-content"><span class="pub-number">4.</span> M. LÓPEZ MUJICA, Y. ZHANG, F. BÉDIOUI... Non-amplified impedimetric genosensor for quantification of miRNA-21 based on the use of reduced graphene oxide modified with chitosan. <strong>Microchemical Journal</strong> 160 (2021) 105596.</div><a class="pub-doi" href="https://doi.org/10.1016/j.microc.2020.105596" target="_blank">https://doi.org/10.1016/j.microc.2020.105596</a></div>
        <div class="pub-card"><div class="pub-content"><span class="pub-number">3.</span> KHAN M., BOUMATI S. ARIB C... Doxorubicin (DOX) Gadolinium-Gold-Complex: A New Way to Tune Hybrid Nanorods as Theranostic Agent. <strong>International Journal of Nanomedicine</strong> 2021, 16:2219-2236.</div><a class="pub-doi" href="https://doi.org/10.2147/IJN.S295809" target="_blank">https://doi.org/10.2147/IJN.S295809</a></div>
        <div class="pub-card"><div class="pub-content"><span class="pub-number">2.</span> FERNANDO ESPINOLA-PORTILLA, ORACIO SERRANO-TORRES... Superparamagnetic iron oxide nanoparticles functionalized with a binary alkoxysilane array... <strong>New Journal of Chemistry</strong> 2021, 45, 3600-3609.</div><a class="pub-doi" href="https://doi.org/10.1039/D0NJ05227B" target="_blank">https://doi.org/10.1039/D0NJ05227B</a></div>
        <div class="pub-card"><div class="pub-content"><span class="pub-number">1.</span> IMAN ZARE, DANIEL M. CHEVRIER... Protein-protected metal nanoclusters as diagnostic and therapeutic platforms for biomedical applications. <strong>Materials Today</strong> 2021.</div><a class="pub-doi" href="https://doi.org/10.1016/j.mattod.2020.10.027" target="_blank">https://doi.org/10.1016/j.mattod.2020.10.027</a></div>

        <!-- 2020 -->
        <h2 class="year-header">2020</h2>
        <div class="pub-card"><div class="pub-content"><span class="pub-number">11.</span> A. NOTARO, M. JAKUBASZEK, S. KOCH... A maltol-containing Ruthenium Polypyridyl Complex as a Potential Anticancer Agent. <strong>Chem. Eur. J.</strong> 26 (2020) 4997-5009.</div><a class="pub-doi" href="https://doi.org/10.1002/chem.201904877" target="_blank">https://doi.org/10.1002/chem.201904877</a></div>
        <div class="pub-card"><div class="pub-content"><span class="pub-number">10.</span> A. NOTARO, A FREI, R RUBBIANI... A Ruthenium(II) Complex Containing a Redox-Active Semiquinonate Ligand as Potential Chemotherapeutic Agent. <strong>J. Med Chem.</strong> 63 (2020)5568-5584.</div><a class="pub-doi" href="https://doi.org/10.1021/acs.jmedchem.0c00431" target="_blank">https://doi.org/10.1021/acs.jmedchem.0c00431</a></div>
        <div class="pub-card"><div class="pub-content"><span class="pub-number">9.</span> M. LÓPEZ MUJICA, Y. ZHANG, F. BÉDIOUI... Label-free graphene oxide-based SPR genosensor for the quantification of microRNA21. <strong>Analytical & Bioanalytical Chem.</strong> 412 (2020) 3539-3546.</div><a class="pub-doi" href="https://doi.org/10.1007/s00216-020-02593-w" target="_blank">https://doi.org/10.1007/s00216-020-02593-w</a></div>

        <!-- 2019 -->
        <h2 class="year-header">2019</h2>
        <div class="pub-card"><div class="pub-content"><span class="pub-number">24.</span> G. F. DUARTE-JUNIOR, A. ISMAIL, S. GRIVEAU... Integrated microfluidic device for the separation, decomposition and detection of low molecular weight S-nitrosothiols. <strong>The Analyst</strong> 144 (2019) 180-185.</div><a class="pub-doi" href="http://doi.org/10.1039/C8AN00757H" target="_blank">http://doi.org/10.1039/C8AN00757H</a></div>
        <div class="pub-card"><div class="pub-content"><span class="pub-number">23.</span> S. CONDON, C. CANNES & F. BEDIOUI. Cobalt-Salen catalyzed electroreductive alkylation of activated olefins. <strong>J. Chemistry</strong>, 2019.</div><a class="pub-doi" href="https://doi.org/10.1155/2019/9832639" target="_blank">https://doi.org/10.1155/2019/9832639</a></div>
        <div class="pub-card"><div class="pub-content"><span class="pub-number">22.</span> C. SLIM, N. TLILI, C. RICHARD... Amperometric detection of diclofenac at a nano-structured multi-wall carbon nanotubes sensing films. <strong>Inorg. Chem. Comm.</strong> 107 (2019) 107454.</div><a class="pub-doi" href="https://doi.org/10.1016/j.inoche.2019.107454" target="_blank">https://doi.org/10.1016/j.inoche.2019.107454</a></div>

        <!-- 2018 -->
        <h2 class="year-header">2018</h2>
        <div class="pub-card"><div class="pub-content"><span class="pub-number">41.</span> L. TRAPIELLA-ALFONSO, S. BROUSSY, W-Q LIU... Colorimetric immunoassays for the screening and specificity evaluation of molecules disturbing VEGFs/VEGFRs interactions. <strong>Anal. Biochem.</strong> 2018.</div><a class="pub-doi" href="http://doi.org/10.1016/j.ab.2017.12.029" target="_blank">http://doi.org/10.1016/j.ab.2017.12.029</a></div>
        <div class="pub-card"><div class="pub-content"><span class="pub-number">40.</span> V. BALDIM, F. BEDIOUI, N. MIGNET... The enzyme-like catalytic activity of cerium oxide nanoparticles and its dependency on Ce3+ surface area concentration. <strong>Nanoscale</strong> 10 (2018) 6971-6980.</div><a class="pub-doi" href="https://doi.org/10.1039/C8NR00325D" target="_blank">https://doi.org/10.1039/C8NR00325D</a></div>
        <div class="pub-card"><div class="pub-content"><span class="pub-number">39.</span> A. CALMET, N. VEJAR, X. GONZALEZ... Electrochemical behavior of stainless steels for sudomotor dysfunction applications. <strong>Electroanalysis</strong> 30 (2018) 162-169.</div><a class="pub-doi" href="https://doi.org/10.1002/elan.201700464" target="_blank">https://doi.org/10.1002/elan.201700464</a></div>
        <div class="pub-card"><div class="pub-content"><span class="pub-number">38.</span> F. BEDIOUI, V. LAIR, S. GRIVEAU... Electrochemical behavior of electrode materials (nickel and stainless steels) for sudomotor dysfunction applications: a review. <strong>Electroanalysis</strong> 30 (2018) 2525-2534.</div><a class="pub-doi" href="https://doi.org/10.1002/elan.201800439" target="_blank">https://doi.org/10.1002/elan.201800439</a></div>

        </div>

  # ─────────────────────────────────────────────────────────
  # 3. CUSTOM FOOTER (EXACT REPLICA FROM HOME CODE)
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
                <p>Tel: +33 1 XX XX XX XX<br>Email:</strong <a href="mailto:contact@seisad.com">contact@seisad.com</a><br>Twitter: <a href="https://twitter.com/MakeOwnable" target="_blank">@MakeOwnable</a></p>
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
