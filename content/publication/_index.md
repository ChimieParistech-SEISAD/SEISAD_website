---
title: "Publications"
type: landing

sections:
  - block: markdown
    content:
      title: ""
      text: |
        <style>
          /* 1. 彻底破除主题窄屏限制 */
          .max-w-prose, .prose, .container, .mx-auto { 
            max-width: 100% !important; 
            width: 100% !important; 
          }

          /* 2. 标题样式 */
          .section-title-custom {
            text-align: center;
            font-size: 2.2rem;
            font-weight: bold;
            color: #333;
            margin-top: 60px;
            margin-bottom: 40px;
          }

          /* 3. 容器宽度控制：1400px */
          .pub-container {
            width: 95%;
            max-width: 1400px;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            gap: 20px;
          }

          /* 4. 论文卡片样式 */
          .pub-card {
            background: #ffffff;
            padding: 25px;
            border-radius: 12px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.05);
            border-left: 6px solid #008a85;
            transition: transform 0.2s;
            text-align: left;
          }
          .pub-card:hover {
            transform: translateY(-3px);
            box-shadow: 0 6px 20px rgba(0,0,0,0.1);
          }

          .pub-title {
            display: block;
            font-size: 1.25rem;
            font-weight: bold;
            color: #222;
            line-height: 1.4;
            margin-bottom: 10px;
          }

          .pub-authors {
            font-size: 1.05rem;
            color: #444;
            margin-bottom: 8px;
          }
          .pub-authors strong {
            color: #008a85;
          }

          .pub-meta {
            font-size: 0.95rem;
            color: #666;
            margin-bottom: 15px;
          }

          .pub-links {
            display: flex;
            gap: 12px;
          }
          .pub-btn {
            display: inline-flex;
            align-items: center;
            padding: 6px 16px;
            background: #f0f0f0 !important;
            color: #333 !important;
            border-radius: 6px;
            font-size: 0.85rem;
            font-weight: 500;
            text-decoration: none !important;
          }
          .pub-btn:hover {
            background: #008a85 !important;
            color: white !important;
          }
        </style>

        <h2 class="section-title-custom">Selected Publications</h2>

        <div class="pub-container">
          <!-- 论文卡片开始 -->
          <div class="pub-card">
            <span class="pub-title">
              Three in One: In Vitro and In Vivo Evaluation of Anticancer Activity of a Theranostic Agent that Combines Magnetic Resonance Imaging, Optical Bioimaging, and Photodynamic Therapy Capabilities
            </span>
            <div class="pub-authors">
              S. Boumati, A. Sour, V. Heitz, J. Seguin, G. Beitz, Y. Kaga, M. Jakubaszek, J. Karges, G. Gasser, N. Mignet, and <strong>B. Doan</strong>
            </div>
            <div class="pub-meta">
              <em>ACS Applied Bio Materials</em>, 2023, <strong>6</strong> (11), 4791–4804.
              <br>
              DOI: <a href="https://doi.org/10.1021/acsabm.3c00565" target="_blank">10.1021/acsabm.3c00565</a>
            </div>
            <div class="pub-links">
              <a class="pub-btn" href="https://doi.org/10.1021/acsabm.3c00565" target="_blank">View Article</a>
              <a class="pub-btn" style="background:#e9f5f5 !important; color:#008a85 !important;" href="https://pubs.acs.org/doi/pdf/10.1021/acsabm.3c00565" target="_blank">PDF</a>
            </div>
          </div>
          <!-- 论文卡片结束 -->
        </div>

    design:
      full_width: true
      spacing:
        padding: ["0", 0, "4rem", 0]
---
