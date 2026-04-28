---
title: "People"
type: landing

sections:
  # ────────────────────────────────────────────────────────────────────────────
  # 0. 人员页面专用样式 (控制一行两人，左图右字)
  # ────────────────────────────────────────────────────────────────────────────
  - block: markdown
    content:
      title: ""
      text: |
        <style>
          /* 整个网格：一行两列 */
          .people-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 40px;
            max-width: 1200px;
            margin: 0 auto;
          }
          
          /* 单个人员卡片：左图右字 */
          .person-card {
            display: flex;
            align-items: flex-start;
            gap: 20px;
            background: #fff;
            padding: 15px;
            border-radius: 10px;
            transition: transform 0.2s;
          }
          
          .person-card:hover { transform: translateY(-5px); }

          /* 照片样式 */
          .person-img {
            width: 150px;
            height: 180px;
            object-fit: cover;
            border-radius: 6px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
            flex-shrink: 0;
          }

          /* 文字信息样式 */
          .person-info { text-align: left; }
          .person-name { font-size: 1.4rem; font-weight: bold; margin-bottom: 5px; color: #008a85; }
          .person-title { font-style: italic; color: #666; margin-bottom: 10px; font-size: 0.95rem; }
          .person-bio { font-size: 0.9rem; line-height: 1.5; color: #444; margin-bottom: 10px; }
          
          /* 联系方式图标样式 */
          .person-links { font-size: 0.85rem; color: #555; }
          .person-links i { width: 20px; color: #008a85; margin-right: 5px; }
          .person-links a { color: #008a85; text-decoration: none; }
          
          /* 移动端自动变一列 */
          @media (max-width: 768px) {
            .people-grid { grid-template-columns: 1fr; }
          }
        </style>
    design:
      full_width: true

  # ────────────────────────────────────────────────────────────────────────────
  # 1. Permanent Members (永久成员)
  # ────────────────────────────────────────────────────────────────────────────
  - block: markdown
    content:
      title: "Permanent Members"
      text: |
        <div class="people-grid">
          
          <!-- 成员 1 -->
          <div class="person-card">
            <img src="media/people/Zijun Wang.jpg" class="person-img" alt="Name">
            <div class="person-info">
              <div class="person-name">Prof. Jean Dupont</div>
              <div class="person-title">Director of SEISAD Team</div>
              <div class="person-bio">Specialist in electrochemistry and surface analysis. Leading the design of new imaging agents.</div>
              <div class="person-links">
                <div><i class="fas fa-envelope"></i> <a href="mailto:jean.dupont@chimieparistech.psl.eu">Email</a></div>
                <div><i class="fas fa-phone"></i> +33 1 23 45 67 89</div>
                <div><i class="fas fa-globe"></i> <a href="#" target="_blank">Personal Website</a></div>
              </div>
            </div>
          </div>

          <!-- 成员 2 -->
          <div class="person-card">
            <img src="media/people/Zijun Wang.jpg" class="person-img" alt="Name">
            <div class="person-info">
              <div class="person-name">Dr. Marie Curie</div>
              <div class="person-title">Associate Professor</div>
              <div class="person-bio">Expert in radio-labelling methodologies and molecular magnetic resonance imaging.</div>
              <div class="person-links">
                <div><i class="fas fa-envelope"></i> <a href="mailto:marie.curie@example.com">Email</a></div>
                <div><i class="fas fa-phone"></i> +33 1 98 76 54 32</div>
                <div><i class="fas fa-globe"></i> <a href="#" target="_blank">Google Scholar</a></div>
              </div>
            </div>
          </div>

        </div>
    design:
      full_width: true
      spacing:
        padding: ["3rem", 0, "3rem", 0]

  # ────────────────────────────────────────────────────────────────────────────
  # 2. Students & Researchers (学生与研究员)
  # ────────────────────────────────────────────────────────────────────────────
  - block: markdown
    content:
      title: "Students & Researchers"
      text: |
        <div class="people-grid">
          
          <!-- 学生 1 -->
          <div class="person-card">
            <img src="media/people/Xingyuan Xu.png" class="person-img" alt="Student Name">
            <div class="person-info">
              <div class="person-name">Alice Smith</div>
              <div class="person-title">PhD Student (3rd Year)</div>
              <div class="person-bio">Working on electrochemical sensors for biological markers.</div>
              <div class="person-links">
                <div><i class="fas fa-envelope"></i> <a href="mailto:alice.smith@example.com">Email</a></div>
                <div><i class="fas fa-globe"></i> <a href="#">LinkedIn</a></div>
              </div>
            </div>
          </div>

          <!-- 学生 2 -->
          <div class="person-card">
            <img src="media/people/Xingyuan Xu.png" class="person-img" alt="Student Name">
            <div class="person-info">
              <div class="person-name">Bob Johnson</div>
              <div class="person-title">Master Student</div>
              <div class="person-bio">Focusing on synthesis of libraries of molecules as ligands.</div>
              <div class="person-links">
                <div><i class="fas fa-envelope"></i> <a href="mailto:bob.johnson@example.com">Email</a></div>
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
