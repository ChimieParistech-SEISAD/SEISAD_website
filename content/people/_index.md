---
title: "People"
type: landing

sections:
#  ────────────────────────────────────────────────────────────────────────────
  # 0. 强力宽度补丁与人员样式
  # ────────────────────────────────────────────────────────────────────────────
  - block: markdown
    content:
      title: ""
      text: |
        <style>
          /* 1. 彻底破除主题的“窄屏”限制 */
          .max-w-prose, .prose, .container, .mx-auto { 
            max-width: 100% !important; 
            width: 100% !important; 
          }

          /* 2. 人员网格：设为 1400px 宽，且一行两列 */
          .people-grid {
            display: grid;
            grid-template-columns: 1fr 1fr; /* 一行两个 */
            gap: 50px;
            width: 90%;
            max-width: 1400px;
            margin: 0 auto;
          }
          
          /* 3. 卡片样式：确保左图右字不换行 */
          .person-card {
            display: flex;
            align-items: flex-start;
            gap: 30px; /* 图和字之间的间距 */
            background: #ffffff;
            padding: 20px;
            border-radius: 12px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.05);
            min-height: 220px;
          }
          
          /* 图片样式 */
          .person-img {
            width: 180px;  /* 调大了一点照片 */
            height: 220px;
            object-fit: cover;
            border-radius: 8px;
            flex-shrink: 0; /* 防止图片被文字挤扁 */
            background: #eee; /* 图片没加载出来时的占位色 */
          }

          /* 文字信息 */
          .person-info { text-align: left; flex: 1; }
          .person-name { font-size: 1.6rem; font-weight: bold; margin-bottom: 8px; color: #008a85; }
          .person-title { font-style: italic; color: #555; margin-bottom: 12px; font-size: 1rem; border-bottom: 1px solid #eee; padding-bottom: 5px; }
          .person-bio { font-size: 0.95rem; line-height: 1.6; color: #444; margin-bottom: 15px; }
          
          /* 联系方式图标 */
          .person-links { font-size: 0.9rem; color: #555; }
          .person-links div { margin-bottom: 5px; display: flex; align-items: center; }
          /* 这里手动写图标，防止 FontAwesome 没加载 */
          .icon-box { width: 25px; color: #008a85; display: inline-block; font-weight: bold; }
          .person-links a { color: #008a85; text-decoration: none; }
          .person-links a:hover { text-decoration: underline; }

          @media (max-width: 1000px) {
            .people-grid { grid-template-columns: 1fr; } /* 屏幕窄时变一列 */
          }
        </style>
    design:
      full_width: true

  # 
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
