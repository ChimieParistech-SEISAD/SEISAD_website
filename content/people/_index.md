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
          /* 1. 彻底打破窄屏限制 - Force full width */
          .max-w-prose, .prose, .container, .mx-auto { 
            max-width: 100% !important; 
            width: 100% !important; 
          }

          .section-title-custom {
            text-align: center;
            font-size: 2.8rem;
            font-weight: bold;
            color: #333;
            margin-top: 50px;
            margin-bottom: 40px;
          }

          /* 2. 调整网格宽度 - Wider Grid */
          .people-grid {
            display: grid;
            grid-template-columns: 1fr 1fr; 
            gap: 40px;
            width: 95%;
            max-width: 1400px; /* 从 1200px 增加到 1400px */
            margin: 0 auto;
          }

          /* 3. 让卡片内容更舒展 */
          .person-card {
            display: flex;
            align-items: flex-start;
            gap: 25px;
            background: #ffffff;
            padding: 25px;
            border-radius: 12px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.05);
            min-height: 200px;
          }

          .person-img {
            width: 140px; /* 稍微调大头像 */
            height: 180px;
            object-fit: cover;
            border-radius: 8px;
            flex-shrink: 0;
          }

          .person-info { text-align: left; flex: 1; }
          .person-name { font-size: 1.6rem; font-weight: bold; color: #008a85; margin-bottom: 8px; }
          .person-title { font-style: italic; color: #555; font-size: 1rem; margin-bottom: 12px; border-bottom: 1px solid #eee; padding-bottom: 5px; }
          .person-bio { font-size: 0.95rem; line-height: 1.6; color: #444; }

          @media (max-width: 1100px) {
            .people-grid { grid-template-columns: 1fr; max-width: 700px; }
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
              <div class="person-links" style="margin-top:15px; font-size:0.9rem;">
                <i class="fas fa-envelope" style="color:#008a85"></i> <a href="mailto:anne.varenne@chimieparistech.psl.eu">anne.varenne@chimieparistech.psl.eu</a>
              </div>
            </div>
          </div>

          <div class="person-card">
            <img src="/SEISAD_website/media/people/ZijunWang.jpg" class="person-img" alt="Zijun Wang">
            <div class="person-info">
              <div class="person-name">Dr. Zijun Wang</div>
              <div class="person-title">Junior Professor (CPJ)</div>
              <div class="person-bio">Research on luminescent nanomaterials and nano-bio interface engineering.</div>
              <div class="person-links" style="margin-top:15px; font-size:0.9rem;">
                <i class="fas fa-graduation-cap" style="color:#008a85"></i> <a href="https://scholar.google.com/citations?user=h7Bt-MkAAAAJ" target="_blank">Google Scholar</a>
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
        <h2 class="section-title-custom" style="margin-top: 80px;">Students & Researchers</h2>
        <div class="people-grid">
          <div class="person-card">
            <img src="/SEISAD_website/media/people/XingyuanXu.png" class="person-img" alt="Xingyuan XU">
            <div class="person-info">
              <div class="person-name">Xingyuan XU</div>
              <div class="person-title">PhD Student</div>
              <div class="person-bio">Focusing on synthesis of libraries of molecules as ligands.</div>
              <div class="person-links" style="margin-top:15px; font-size:0.9rem;">
                <i class="fab fa-linkedin" style="color:#008a85"></i> <a href="https://www.linkedin.com/in/xingyuan-xu-a125293a9/">LinkedIn</a>
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
