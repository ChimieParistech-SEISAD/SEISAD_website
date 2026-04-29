---
title: "Group Members"
type: landing

sections:
  # ────────────────────────────────────────────────────────────────────────────
  # 1. Permanent Members
  # ────────────────────────────────────────────────────────────────────────────
  - block: markdown
    content:
      title: "" 
      text: |
        <style>
          /* 彻底破除主题窄屏限制 */
          .max-w-prose, .prose, .container, .mx-auto { 
            max-width: 100% !important; 
            width: 100% !important; 
          }

          /* 自定义居中标题：位置下移 */
          .section-title-custom {
            text-align: center;
            font-size: 2.8rem;
            font-weight: bold;
            color: #333;
            margin-top: 70px;    /* 标题下移距离 */
            margin-bottom: 50px;
          }

          /* 大宽屏网格布局：一行两个 */
          .people-grid {
            display: grid;
            grid-template-columns: 1fr 1fr; 
            gap: 40px;
            width: 95%;
            max-width: 1400px; /* 增加宽度 */
            margin: 0 auto;
          }

          .person-card {
            display: flex;
            align-items: flex-start;
            gap: 25px;
            background: #ffffff;
            padding: 25px;
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.06);
            min-height: 220px;
          }

          .person-img {
            width: 140px;
            height: 185px;
            object-fit: cover;
            border-radius: 8px;
            flex-shrink: 0;
            background: #f0f0f0;
          }

          .person-info { text-align: left; flex: 1; }
          .person-name { font-size: 1.6rem; font-weight: bold; color: #008a85; margin-bottom: 5px; }
          .person-title { font-style: italic; color: #555; font-size: 1rem; margin-bottom: 12px; border-bottom: 1px solid #eee; padding-bottom: 5px; }
          .person-bio { font-size: 0.95rem; line-height: 1.6; color: #444; margin-bottom: 15px; }

          .person-links { font-size: 0.9rem; }
          .person-links div { margin-bottom: 6px; display: flex; align-items: center; gap: 10px; }
          .person-links i { color: #008a85; width: 18px; text-align: center; }
          .person-links a { color: #008a85; text-decoration: none; font-weight: 500; }
          .person-links a:hover { text-decoration: underline; }

          /* 响应式：平板以下变一列 */
          @media (max-width: 1100px) {
            .people-grid { grid-template-columns: 1fr; max-width: 700px; }
          }
        </style>

        <h2 class="section-title-custom">Permanent Members</h2>

        <div class="people-grid">
          <div class="person-card">
            <img src="/SEISAD_website/media/people/xxx.jpg" class="person-img" alt="Anne Varenne">
            <div class="person-info">
              <div class="person-name">Prof. Anne Varenne</div>
              <div class="person-title">Head of SEISAD, Professor</div>
              <div class="person-bio">Specialist in electrochemistry and surface analysis.</div>
              <div class="person-links">
                <div><i class="fas fa-envelope"></i> <a href="mailto:anne.varenne@chimieparistech.psl.eu">Email</a></div>
                <div><i class="fas fa-phone"></i> <span>+33 x xx xx xx xx</span></div>
                <div><i class="fas fa-file-pdf"></i> <a href="https://www.chimieparistech.psl.eu/wp-content/uploads/2021/02/annevarenne-notice-biographique.pdf" target="_blank">Full CV</a></div>
              </div>
            </div>
          </div>

          <div class="person-card">
            <img src="/SEISAD_website/media/people/ZijunWang.jpg" class="person-img" alt="Zijun Wang">
            <div class="person-info">
              <div class="person-name">Dr. Zijun Wang</div>
              <div class="person-title">Junior Professor (CPJ)</div>
              <div class="person-bio">Research on luminescent nanomaterials and bioapplications.</div>
              <div class="person-links">
                <div><i class="fas fa-envelope"></i> <a href="mailto:zijun.wang@chimieparistech.psl.eu">Email</a></div>
                <div><i class="fas fa-graduation-cap"></i> <a href="https://scholar.google.com/citations?user=h7Bt-MkAAAAJ&hl=en" target="_blank">Google Scholar</a></div>
                <div><i class="fas fa-file-pdf"></i> <a href="https://www.chimieparistech.psl.eu/wp-content/uploads/2026/02/i-clehs-seisad-zijun-wang.pdf" target="_blank">Full CV</a></div>
              </div>
            </div>
          </div>
        </div>

    design:
      full_width: true
      spacing:
        padding: ["0", 0, "4rem", 0]

  # ────────────────────────────────────────────────────────────────────────────
  # 2. Students & Researchers
  # ────────────────────────────────────────────────────────────────────────────
  - block: markdown
    content:
      title: "" 
      text: |
        <h2 class="section-title-custom">Students & Researchers</h2>
        <div class="people-grid">
          <div class="person-card">
            <img src="/SEISAD_website/media/people/XingyuanXu.png" class="person-img" alt="Xingyuan XU">
            <div class="person-info">
              <div class="person-name">Xingyuan XU</div>
              <div class="person-title">PhD Student</div>
              <div class="person-bio">Working on AI.</div>
              <div class="person-links">
                <div><i class="fas fa-envelope"></i> <a href="mailto:xingyuan.xu@chimieparistech.psl.eu">Email</a></div>
                <div><i class="fab fa-linkedin"></i> <a href="https://www.linkedin.com/in/xingyuan-xu-a125293a9/" target="_blank">LinkedIn</a></div>
              </div>
            </div>
          </div>
        </div>
    design:
      full_width: true
      background:
        color: "#f8fafc"
      spacing:
        padding: ["2rem", 0, "8rem", 0]
---
