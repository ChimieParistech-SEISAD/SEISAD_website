---
title: Research Themes
type: landing

sections:
  - block: markdown
    content:
      title: ""
      text: |
        <style>
          /* 1. 全站统一宽度控制 */
          .max-w-prose, .prose, .container, .mx-auto { 
            max-width: 100% !important; 
            width: 100% !important; 
          }

          .research-outer-container {
            width: 95%;
            max-width: 1400px;
            margin: 0 auto;
            padding-bottom: 50px;
          }

          /* 2. 模块布局：垂直排列的三个大 Row */
          .theme-module {
            display: flex;
            background: #ffffff;
            border-radius: 16px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.06);
            margin-bottom: 50px;
            overflow: hidden; /* 确保图片圆角 */
            transition: transform 0.3s ease;
            border: 1px solid #eee;
          }
          
          .theme-module:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 40px rgba(0,0,0,0.1);
          }

          /* 左侧栏：标题 + 图片 */
          .theme-left {
            width: 40%;
            padding: 40px;
            background: #fcfcfc;
            display: flex;
            flex-direction: column;
            border-right: 1px solid #eee;
          }

          .theme-label {
            font-size: 1.8rem;
            font-weight: bold;
            color: #008a85;
            margin-bottom: 25px;
            text-align: left;
            line-height: 1.2;
          }

          .theme-img-container {
            width: 100%;
            height: 250px; /* 固定高度，保持整齐 */
            overflow: hidden;
            border-radius: 10px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          }

          .theme-img-container img {
            width: 100%;
            height: 100%;
            object-fit: cover; /* 图片自动裁剪填充 */
          }

          /* 右侧栏：详细描述 + 联系方式 */
          .theme-right {
            width: 60%;
            padding: 40px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: left;
          }

          .theme-detailed-desc {
            font-size: 1.1rem;
            color: #444;
            line-height: 1.8;
            margin-bottom: 30px;
          }

          /* 联系人信息卡片 */
          .theme-contact {
            background: #f0f9f8;
            padding: 15px 20px;
            border-radius: 8px;
            border-left: 4px solid #008a85;
            font-size: 0.95rem;
          }

          .theme-contact i {
            color: #008a85;
            margin-right: 8px;
            width: 18px;
          }

          .contact-title {
            font-weight: bold;
            color: #333;
            margin-bottom: 5px;
            display: block;
          }

          /* 响应式：手机端变回垂直 */
          @media (max-width: 900px) {
            .theme-module { flex-direction: column; }
            .theme-left, .theme-right { width: 100%; }
            .theme-left { border-right: none; border-bottom: 1px solid #eee; }
          }
        </style>

        <div class="research-outer-container">
          
          <!-- 主题 1 -->
          <div class="theme-module">
            <div class="theme-left">
              <div class="theme-label">Synthetic <br>Methodologies</div>
              <div class="theme-img-container">
                <img src="/media/Synthetic Methodologies.jpg" alt="Synthetic Methodologies">
              </div>
            </div>
            <div class="theme-right">
              <div class="theme-detailed-desc">
                Our group is dedicated to the transition from traditional batch chemistry to advanced <strong>continuous microflow systems</strong>. This research focuses on the development of innovative synthetic methodologies that leverage the high heat and mass transfer rates of microreactors. By integrating heterogeneous catalysis with flow chemistry, we aim to achieve sustainable and scalable chemical processes, reducing waste and enhancing reaction safety for complex molecular synthesis.
              </div>
              <div class="theme-contact">
                <span class="contact-title">Contact Person:</span>
                <div><i class="fas fa-user"></i> Prof. Anne Varenne</div>
                <div><i class="fas fa-envelope"></i> <a href="mailto:anne.varenne@chimieparistech.psl.eu">anne.varenne@chimieparistech.psl.eu</a></div>
              </div>
            </div>
          </div>

          <!-- 主题 2 -->
          <div class="theme-module">
            <div class="theme-left">
              <div class="theme-label">Sensors & <br>Diagnostics</div>
              <div class="theme-img-container">
                <img src="/media/biosensor.jpg" alt="Sensors">
              </div>
            </div>
            <div class="theme-right">
              <div class="theme-detailed-desc">
                We design and engineer highly sensitive <strong>electrochemical and optical sensors</strong> for clinical diagnostics. Our work involves the surface functionalization of electrodes with nanomaterials to enable label-free detection of biological markers. These platforms are specifically designed for early-stage detection of cardiovascular diseases and metabolic disorders, providing rapid, point-of-care solutions with high specificity and low detection limits.
              </div>
              <div class="theme-contact">
                <span class="contact-title">Contact Person:</span>
                <div><i class="fas fa-user"></i> Dr. Zijun Wang</div>
                <div><i class="fas fa-envelope"></i> <a href="mailto:zijun.wang@chimieparistech.psl.eu">zijun.wang@chimieparistech.psl.eu</a></div>
              </div>
            </div>
          </div>

          <!-- 主题 3 -->
          <div class="theme-module">
            <div class="theme-left">
              <div class="theme-label">Advanced <br>Bio-imaging</div>
              <div class="theme-img-container">
                <img src="/media/Imaging.png" alt="Imaging">
              </div>
            </div>
            <div class="theme-right">
              <div class="theme-detailed-desc">
                Our research in imaging focuses on the creation of <strong>multi-modal theranostic agents</strong>. By combining Magnetic Resonance Imaging (MRI) with optical fluorescence, we develop probes that can not only visualize tumors with high spatial resolution but also deliver therapeutic effects. These agents are evaluated in preclinical models to monitor drug distribution and therapeutic response in real-time, bridging the gap between diagnosis and therapy.
              </div>
              <div class="theme-contact">
                <span class="contact-title">Contact Person:</span>
                <div><i class="fas fa-user"></i> Dr. B. Doan</div>
                <div><i class="fas fa-envelope"></i> <a href="mailto:b.doan@example.com">b.doan@chimieparistech.psl.eu</a></div>
              </div>
            </div>
          </div>

        </div>

    design:
      full_width: true
      spacing:
        padding: ["0", "0", "5rem", "0"]
---
