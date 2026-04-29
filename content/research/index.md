---
title: Research Themes
type: landing

sections:
  - block: markdown
    content:
      title: ""
      text: |
        <style>
          /* 1. 核心修复：彻底破除主题窄屏限制 (全站统一) */
          .max-w-prose, .prose, .container, .mx-auto { 
            max-width: 100% !important; 
            width: 100% !important; 
          }

          /* 2. 统一大标题样式 */
          .section-title-custom {
            text-align: center;
            font-size: 2.5rem;
            font-weight: bold;
            color: #333;
            margin-top: 60px;
            margin-bottom: 50px;
          }

          /* 3. 容器：设为 1400px 保持全站对齐 */
          .themes-section-wrapper {
            width: 95%;
            max-width: 1400px;
            margin: 0 auto;
          }

          /* 4. 网格布局：一行三个 */
          .themes-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr); /* 强制三列 */
            gap: 30px;
          }

          .theme-card {
            background: #ffffff;
            padding: 40px 30px;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.05);
            transition: all 0.3s ease;
            border-top: 5px solid #008a85; /* 改为顶部色条，更有设计感 */
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            height: 100%; /* 高度统一 */
          }

          .theme-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 35px rgba(0,0,0,0.1);
          }

          .theme-icon {
            font-size: 3.5rem;
            color: #008a85;
            margin-bottom: 25px;
          }

          .theme-name {
            font-size: 1.5rem;
            font-weight: bold;
            color: #2d3748;
            margin-bottom: 18px;
            min-height: 3.5rem; /* 保证标题两行时高度对齐 */
            display: flex;
            align-items: center;
          }

          .theme-desc {
            font-size: 1.05rem;
            color: #4a5568;
            line-height: 1.7;
          }

          /* 响应式：平板变 2 列，手机变 1 列 */
          @media (max-width: 1024px) {
            .themes-grid { grid-template-columns: 1fr 1fr; }
          }
          @media (max-width: 768px) {
            .themes-grid { grid-template-columns: 1fr; }
          }
        </style>

        <div class="themes-section-wrapper">
          <h2 class="section-title-custom">Research Themes</h2>
          
          <div class="themes-grid">
            <!-- Theme 1 -->
            <div class="theme-card">
              <div class="theme-icon"><i class="fas fa-flask"></i></div>
              <div class="theme-name">Synthetic Methodologies</div>
              <div class="theme-desc">
                Development of new synthetic methodologies and supported catalysis in mini- and continuous microflow reactors.
              </div>
            </div>
            
            <!-- Theme 2 -->
            <div class="theme-card">
              <div class="theme-icon"><i class="fas fa-bolt"></i></div>
              <div class="theme-name">Sensors</div>
              <div class="theme-desc">
                Design and application of electrochemical sensors for biological markers and label-free detection techniques.
              </div>
            </div>
            
            <!-- Theme 3 -->
            <div class="theme-card">
              <div class="theme-icon"><i class="fas fa-microscope"></i></div>
              <div class="theme-name">Imaging</div>
              <div class="theme-desc">
                Elaboration of targeted optical and MR imaging agents for cancer diagnosis and preclinical therapeutic follow-up.
              </div>
            </div>
          </div>
        </div>
    design:
      full_width: true
      spacing:
        padding: ["0", "0", "5rem", "0"]
---
