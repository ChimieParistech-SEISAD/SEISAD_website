---
title: "Group Members"
type: landing

sections:
  # ────────────────────────────────────────────────────────────────────────────
  # 0. CSS Styles
  # ────────────────────────────────────────────────────────────────────────────
  - block: markdown
    content:
      title: ""
      text: |
        <style>
          /* Move section up */
          #permanent-members { margin-top: -60px !important; }
          .blox-page-header { margin-bottom: 0 !important; padding-bottom: 0 !important; }

          /* Global Width */
          .max-w-prose, .prose, .container, .mx-auto { 
            max-width: 100% !important; 
            width: 100% !important; 
          }

          /* People Grid */
          .people-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 40px;
            width: 90%;
            max-width: 1300px;
            margin: 0 auto;
          }
          
          .person-card {
            display: flex;
            align-items: flex-start;
            gap: 25px;
            background: #ffffff;
            padding: 20px;
            border-radius: 12px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.05);
          }
          
          .person-img {
            width: 130px; 
            height: 170px;
            object-fit: cover;
            border-radius: 8px;
            flex-shrink: 0;
            background: #eee;
          }

          .person-info { text-align: left; flex: 1; }
          .person-name { font-size: 1.5rem; font-weight: bold; margin-bottom: 5px; color: #008a85; }
          .person-title { font-style: italic; color: #666; margin-bottom: 10px; font-size: 0.95rem; border-bottom: 1px solid #f0f0f0; padding-bottom: 5px; }
          .person-bio { font-size: 0.9rem; line-height: 1.5; color: #444; margin-bottom: 12px; }
          
          .person-links { font-size: 0.85rem; color: #555; }
          .person-links div { margin-bottom: 4px; display: flex; align-items: center; gap: 8px; }
          .person-links i { color: #008a85; width: 16px; }
          .person-links a { color: #008a85; text-decoration: none; }

          @media (max-width: 1000px) {
            .people-grid { grid-template-columns: 1fr; }
          }
        </style>
    design:
      full_width: true

  # ────────────────────────────────────────────────────────────────────────────
  # 1. Permanent Members
  # ────────────────────────────────────────────────────────────────────────────
  - block: markdown
    content:
      title: "Permanent Members"
      text: |
        <div id="permanent-members" class="people-grid">
          <div class="person-card">
            <img src="/SEISAD_website/media/people/xxx.jpg" class="person-img" alt="Anne Varenne">
            <div class="person-info">
              <div class="person-name">Prof. Anne Varenne</div>
              <div class="person-title">Head of SEISAD, Professor</div>
              <div class="person-bio">Specialist in electrochemistry and surface analysis. Leading the design of new imaging agents.</div>
              <div class="person-links">
                <div><i class="fas fa-envelope"></i> <a href="mailto:anne.varenne@chimieparistech.psl.eu">Email</a></div>
                <div><i class="fas fa-file-alt"></i> <a href="#">CV</a></div>
              </div>
            </div>
          </div>
          <div class="person-card">
            <img src="/SEISAD_website/media/people/ZijunWang.jpg" class="person-img" alt="Zijun Wang">
            <div class="person-info">
              <div class="person-name">Dr. Zijun Wang</div>
              <div class="person-title">Junior Professor (CPJ)</div>
              <div class="person-bio">Research on luminescent nanomaterials and nano-bio interface engineering.</div>
              <div class="person-links">
                <div><i class="fas fa-envelope"></i> <a href="mailto:zijun.wang@chimieparistech.psl.eu">Email</a></div>
                <div><i class="fas fa-graduation-cap"></i> <a href="https://scholar.google.com/citations?user=h7Bt-MkAAAAJ" target="_blank">Scholar</a></div>
              </div>
            </div>
          </div>
        </div>
    design:
      full_width: true
      spacing:
        padding: ["0", 0, "3rem", 0]

  # ────────────────────────────────────────────────────────────────────────────
  # 2. Students & Researchers
  # ────────────────────────────────────────────────────────────────────────────
  - block: markdown
    content:
      title: "Students & Researchers"
      text: |
        <div class="people-grid">
          <div class="person-card">
            <img src="/SEISAD_website/media/people/XingyuanXu.png" class="person-img" alt="Xingyuan XU">
            <div class="person-info">
              <div class="person-name">Xingyuan XU</div>
              <div class="person-title">PhD Student</div>
              <div class="person-bio">Focusing on synthesis of libraries of molecules as ligands.</div>
              <div class="person-links">
                <div><i class="fas fa-envelope"></i> <a href="mailto:xingyuan.xu@chimieparistech.psl.eu">Email</a></div>
                <div><i class="fab fa-linkedin"></i> <a href="https://www.linkedin.com/in/xingyuan-xu-a125293a9/">LinkedIn</a></div>
              </div>
            </div>
          </div>
        </div>
    design:
      full_width: true
      background:
        color: "#f8fafc"
      spacing:
        padding: ["3rem", 0, "5rem", 0]
---
