---
title: Research Themes
type: landing

sections:
  - block: markdown
    content:
      title: ""
      text: |
        <style>
          /* 1. 彻底打破主题容器限制 */
          .max-w-prose, .prose, .container, .mx-auto { 
            max-width: 100% !important; 
            width: 100% !important; 
          }

          /* 2. 定义我们的 1400px 居中容器 */
          .custom-outer-wrapper {
            width: 100%;
            padding: 40px 0;
          }
          
          .themes-section-wrapper {
            width: 90%;
            max-width: 1400px;
            margin: 0 auto;
            text-align: center;
          }

          /* 3. 网格布局：3列 */
          .themes-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 30px;
            margin-top: 40px;
          }

          .theme-card {
            background: #ffffff;
            padding: 40px 30px;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.08);
            border-top: 5px solid #008a85;
            display: flex;
            flex-direction: column;
            align-items: center;
            height: 100%;
            transition: transform 0.3s ease;
          }

          .theme-card:hover {
            transform: translateY(-10px);
          }

          .theme-icon {
            font-size: 3.5rem;
            color: #008a85;
            margin-bottom: 20px;
          }

          .theme-name {
            font-size: 1.5rem;
            font-weight: bold;
            color: #2d3748;
            margin-bottom: 15px;
          }

          .theme-desc {
            font-size: 1.05rem;
            color: #4a5568;
            line-height: 1.6;
          }

          /* 标题样式：由于主题会自动生成一个标题，我们把它的样式也改了 */
          h1 { text-align: center; font-size: 2.8rem !important; margin-bottom: 40px !important; }

          /* 移动端适配 */
          @media (max-width: 900px) {
            .themes-grid { grid-template-columns: 1fr; }
          }
        </style>

        <div class="custom-outer-wrapper">
          <div class="themes-section-wrapper">
            <div class="themes-grid">
              <!-- 卡片 1 -->
              <div class="theme-card">
                <div class="theme-icon"><i class="fas fa-flask"></i></div>
                <div class="theme-name">Synthetic Methodologies</div>
                <div class="theme-desc">Development of new synthetic methodologies and supported catalysis in mini- and continuous microflow reactors.</div>
              </div>
              <!-- 卡片 2 -->
              <div class="theme-card">
                <div class="theme-icon"><i class="fas fa-bolt"></i></div>
                <div class="theme-name">Sensors</div>
                <div class="theme-desc">Design and application of electrochemical sensors for biological markers and label-free detection techniques.</div>
              </div>
              <!-- 卡片 3 -->
              <div class="theme-card">
                <div class="theme-icon"><i class="fas fa-microscope"></i></div>
                <div class="theme-name">Imaging</div>
                <div class="theme-desc">Elaboration of targeted optical and MR imaging agents for cancer diagnosis and preclinical therapeutic follow-up.</div>
              </div>
            </div>
          </div>
        </div>
    design:
      full_width: true
      spacing:
        padding: ["0", "0", "5rem", "0"]
---
