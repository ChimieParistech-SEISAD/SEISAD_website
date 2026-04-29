title: "Contact"
type: landing

sections:
  - block: markdown
    content:
      title: "" # 留空，我们在下面自定义标题
      text: |
        <style>
          /* 1. 彻底破除主题窄屏限制 (全站统一) */
          .max-w-prose, .prose, .container, .mx-auto { 
            max-width: 100% !important; 
            width: 100% !important; 
          }

          /* 2. 标题样式对齐 */
          .section-title-custom {
            text-align: center;
            font-size: 2.5rem;
            font-weight: bold;
            color: #333;
            margin-top: 60px;
            margin-bottom: 40px;
          }

          /* 3. 1400px 居中容器 */
          .contact-wrapper {
            width: 95%;
            max-width: 1400px;
            margin: 0 auto;
            display: flex;
            flex-wrap: wrap;
            gap: 50px;
            align-items: center;
            padding-bottom: 60px;
          }

          /* 4. 左侧文字区域 */
          .contact-info {
            flex: 1;
            min-width: 350px;
            font-size: 1.15rem;
            line-height: 1.8;
            color: #444;
          }
          
          .contact-info h3 {
            font-size: 1.8rem;
            margin-bottom: 20px;
            color: #008a85;
          }

          .contact-item {
            display: flex;
            align-items: flex-start;
            margin-bottom: 15px;
          }
          .contact-item i {
            color: #008a85;
            margin-right: 15px;
            margin-top: 5px;
            font-size: 1.2rem;
            width: 20px;
            text-align: center;
          }

          /* 5. 右侧地图区域 */
          .contact-map {
            flex: 1.2;
            min-width: 400px;
          }
          .map-frame {
            border: 0;
            border-radius: 20px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            width: 100%;
            height: 450px;
          }

          /* 响应式调整 */
          @media (max-width: 900px) {
            .contact-wrapper { flex-direction: column; text-align: center; }
            .contact-item { justify-content: center; }
            .contact-map { width: 100%; min-width: 100%; }
          }
        </style>

        <h2 class="section-title-custom">Contact Us</h2>

        <div class="contact-wrapper">
          
          <!-- 左侧：联系信息 -->
          <div class="contact-info">
            <h3>Office Location</h3>
            <div class="contact-item">
              <i class="fas fa-university"></i>
              <span>
                <strong>Institute of Chemistry for Life and Health Sciences (i-CLeHS)</strong><br>
                UMR 8060 / ENSCP – Chimie ParisTech
              </span>
            </div>
            
            <div class="contact-item">
              <i class="fas fa-map-marker-alt"></i>
              <span>
                11 Rue Pierre et Marie Curie<br>
                75005 Paris, France
              </span>
            </div>

            <div class="contact-item">
              <i class="fas fa-envelope"></i>
              <span>
                <a href="mailto:anne.varenne@chimieparistech.psl.eu" style="color: #008a85; text-decoration: none;">anne.varenne@chimieparistech.psl.eu</a>
              </span>
            </div>
          </div>

          <!-- 右侧：地图 -->
          <div class="contact-map">
            <iframe
              class="map-frame"
              src="https://www.google.com/maps?q=11+Rue+Pierre+et+Marie+Curie,+75005+Paris&output=embed"
              loading="lazy">
            </iframe>
          </div>

        </div>
    design:
      full_width: true
      spacing:
        padding: ["0", 0, "4rem", 0]
