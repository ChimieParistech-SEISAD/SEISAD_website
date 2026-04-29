---
title: "Group Members"
type: landing

sections:
  # ────────────────────────────────────────────────────────────────────────────
  # 1. Permanent Members
  # ────────────────────────────────────────────────────────────────────────────
  - block: markdown
    content:
      # 标题留空，我们在 text 里面用自定义 HTML 渲染标题以控制位置
      title: "" 
      text: |
        <style>
          /* 标题居中并下移 */
          .section-title-custom {
            text-align: center;
            font-size: 2.5rem;
            font-weight: bold;
            color: #333;
            margin-top: 60px;    /* 控制标题下移的距离 */
            margin-bottom: 40px; /* 标题与内容之间的间距 */
          }

          /* 强制双列网格 */
          .people-grid {
            display: grid;
            grid-template-columns: 1fr 1fr; /* 关键：一行两列 */
            gap: 30px;
            width: 95%;
            max-width: 1200px;
            margin: 0 auto;
          }

          .person-card {
            display: flex;
            align-items: flex-start;
            gap: 20px;
            background: #ffffff;
            padding: 20px;
            border-radius: 12px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.05);
          }

          .person-img {
            width: 120px;
            height: 150px;
            object-fit: cover;
            border-radius: 8px;
            flex-shrink: 0;
          }

          .person-info { text-align: left; flex: 1; }
          .person-name { font-size: 1.4rem; font-weight: bold; color: #008a85; margin-bottom: 5px; }
          .person-title { font-style: italic; color: #666; font-size: 0.9rem; margin-bottom: 8px; }
          .person-bio { font-size: 0.85rem; line-height: 1.5; color: #444; }

          /* 手机端自动回退到一列 */
          @media (max-width: 768px) {
            .people-grid { grid-template-columns: 1fr; }
          }
        </style>

        <h2 class="section-title-custom">Permanent Members</h2>

        <div id="permanent-members" class="people-grid">
          <div class="person-card">
            <img src="/SEISAD_website/media/people/xxx.jpg" class="person-img" alt="Anne Varenne">
            <div class="person-info">
              <div class="person-name">Prof. Anne Varenne</div>
              <div class="person-title">Head of SEISAD, Professor</div>
              <div class="person-bio">Specialist in electrochemistry and surface analysis. Leading the design of new imaging agents.</div>
              <div class="person-links" style="margin-top:10px; font-size:0.85rem;">
                <i class="fas fa-envelope"></i> <a href="mailto:anne.varenne@chimieparistech.psl.eu">Email</a>
              </div>
            </div>
          </div>

          <div class="person-card">
            <img src="/SEISAD_website/media/people/ZijunWang.jpg" class="person-img" alt="Zijun Wang">
            <div class="person-info">
              <div class="person-name">Dr. Zijun Wang</div>
              <div class="person-title">Junior Professor (CPJ)</div>
              <div class="person-bio">Research on luminescent nanomaterials and nano-bio interface engineering.</div>
              <div class="person-links" style="margin-top:10px; font-size:0.85rem;">
                <i class="fas fa-graduation-cap"></i> <a href="https://scholar.google.com/citations?user=h7Bt-MkAAAAJ" target="_blank">Scholar</a>
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
      title: "" # 同样留空
      text: |
        <h2 class="section-title-custom">Students & Researchers</h2>
        <div class="people-grid">
          <div class="person-card">
            <img src="/SEISAD_website/media/people/XingyuanXu.png" class="person-img" alt="Xingyuan XU">
            <div class="person-info">
              <div class="person-name">Xingyuan XU</div>
              <div class="person-title">PhD Student</div>
              <div class="person-bio">Focusing on synthesis of libraries of molecules as ligands.</div>
              <div class="person-links" style="margin-top:10px; font-size:0.85rem;">
                <i class="fab fa-linkedin"></i> <a href="https://www.linkedin.com/in/xingyuan-xu-a125293a9/">LinkedIn</a>
              </div>
            </div>
          </div>
          
          </div>
    design:
      full_width: true
      background:
        color: "#f8fafc"
      spacing:
        padding: ["2rem", 0, "5rem", 0]
---
