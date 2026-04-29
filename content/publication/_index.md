title: "Publications"
type: landing

sections:
  - block: markdown
    content:
      title: "" # 将原标题留空，我们在下面用自定义 HTML 写，以便控制位置
      text: |
        <style>
          /* 1. 彻底破除主题窄屏限制 (与成员页一致) */
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
            border-left: 6px solid #008a85; /* 左侧色条，呼应成员页主题色 */
            transition: transform 0.2s;
          }
          .pub-card:hover {
            transform: translateY(-3px);
            box-shadow: 0 6px 20px rgba(0,0,0,0.1);
          }

          /* 论文标题 */
          .pub-title {
            display: block;
            font-size: 1.25rem;
            font-weight: bold;
            color: #222;
            line-height: 1.4;
            margin-bottom: 10px;
          }

          /* 作者 */
          .pub-authors {
            font-size: 1.05rem;
            color: #444;
            margin-bottom: 8px;
          }
          .pub-authors strong {
            color: #008a85; /* 高亮自己的名字 */
          }

          /* 期刊、DOI等元数据 */
          .pub-meta {
            font-size: 0.95rem;
            color: #666;
            margin-bottom: 15px;
          }

          /* 按钮样式 */
          .pub-links {
            display: flex;
            gap: 12px;
          }
          .pub-btn {
            display: inline-flex;
            align-items: center;
            padding: 6px 16px;
            background: #f0f0f0;
            color: #333 !important;
            border-radius: 6px;
            font-size: 0.85rem;
            font-weight: 500;
            text-decoration: none !important;
            transition: all 0.3s;
          }
          .pub-btn:hover {
            background: #008a85;
            color: white !important;
          }
          .pub-btn-pdf {
            background: #e9f5f5;
            color: #008a85 !important;
          }
        </style>

        <h2 class="section-title-custom">Selected Publications</h2>

        <div class="pub-container">
          <!-- 论文 1 -->
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
              <a class="pub-btn" href="https://doi.org/10.1021/acsabm.3c00565" target="_blank">
                <i class="fas fa-external-link-alt" style="margin-right:5px"></i> View Article
              </a>
              <a class="pub-btn pub-btn-pdf" href="https://pubs.acs.org/doi/pdf/10.1021/acsabm.3c00565" target="_blank">
                <i class="fas fa-file-pdf" style="margin-right:5px"></i> PDF
              </a>
            </div>
          </div>
          
          <!-- 你可以在这里继续添加更多的 <div class="pub-card">...</div> -->
          
        </div>

    design:
      full_width: true
      spacing:
        padding: ["0", 0, "4rem", 0]
