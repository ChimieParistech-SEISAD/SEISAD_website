---
title: "Opportunities"
type: landing

sections:
  - block: markdown
    content:
      title: ""
      text: |
        <style>
          /* 1. 强力破除宽度限制 */
          .max-w-prose, .container, .mx-auto { 
            max-width: 100% !important; 
            width: 100% !important; 
          }
          .opp-outer-wrapper {
            width: 95%;
            max-width: 1400px;
            margin: 0 auto;
            padding-bottom: 60px;
          }
          .section-title-custom {
            text-align: center;
            font-size: 2.8rem;
            font-weight: bold;
            color: #333;
            margin-top: 50px;
            margin-bottom: 40px;
          }
          /* 2. 卡片整体设计 */
          .opp-card {
            background: #ffffff;
            border-radius: 16px;
            border: 1px solid #e2e8f0;
            margin-bottom: 40px;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            box-shadow: 0 10px 30px rgba(0,0,0,0.05);
            text-align: left;
          }
          .opp-header {
            background: #008a85;
            color: white;
            padding: 25px 35px;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .opp-badge {
            background: #ffffff;
            color: #008a85;
            padding: 5px 15px;
            border-radius: 20px;
            font-weight: bold;
            font-size: 0.9rem;
          }
          .opp-body { padding: 35px; }
          .opp-section-title {
            font-size: 1.3rem;
            font-weight: bold;
            color: #008a85;
            margin: 25px 0 12px 0;
            display: flex;
            align-items: center;
            gap: 10px;
          }
          .opp-section-title:first-child { margin-top: 0; }
          .opp-text { font-size: 1.1rem; color: #444; line-height: 1.7; }
          .opp-list { padding-left: 20px; margin: 10px 0; }
          .opp-list li { margin-bottom: 10px; font-size: 1.05rem; color: #444; list-style: disc; }
          .apply-btn {
            display: inline-block;
            background: #008a85;
            color: white !important;
            padding: 12px 30px;
            border-radius: 8px;
            text-decoration: none !important;
            font-weight: bold;
            margin-top: 25px;
          }
        </style>

        <div class="opp-outer-wrapper">
          <h2 class="section-title-custom">Join Our Team</h2>

          <!-- PhD Position -->
          <div class="opp-card">
            <div class="opp-header">
              <span style="font-size:1.6rem; font-weight:bold;">PhD Position in Bio-Sensing</span>
              <span class="opp-badge">Status: Open</span>
            </div>
            <div class="opp-body">
              <div class="opp-section-title"><i class="fas fa-info-circle"></i> Project Description</div>
              <p class="opp-text">The candidate will work on developing a new generation of electrochemical sensors for early detection of neurological biomarkers.</p>
              
              <div class="opp-section-title"><i class="fas fa-check-square"></i> Requirements</div>
              <ul class="opp-list">
                <li>Master's degree in Analytical Chemistry, Materials Science, or Bioengineering.</li>
                <li>Experience with electrochemistry is highly desirable.</li>
                <li>Fluent in English (written and spoken).</li>
              </ul>
              <a href="mailto:anne.varenne@chimieparistech.psl.eu" class="apply-btn">Apply for PhD</a>
            </div>
          </div>

          <!-- Postdoc Position -->
          <div class="opp-card">
            <div class="opp-header">
              <span style="font-size:1.6rem; font-weight:bold;">Postdoctoral Fellowship</span>
              <span class="opp-badge">Status: Open</span>
            </div>
            <div class="opp-body">
              <div class="opp-section-title"><i class="fas fa-info-circle"></i> Project Description</div>
              <p class="opp-text">Focus on the synthesis and preclinical evaluation of bimodal MRI/Optical imaging agents for cancer theranostics.</p>
              
              <div class="opp-section-title"><i class="fas fa-check-square"></i> Requirements</div>
              <ul class="opp-list">
                <li>PhD in Organic Chemistry or Molecular Imaging.</li>
                <li>Proven track record of high-quality publications.</li>
                <li>Self-motivated and multidisciplinary mindset.</li>
              </ul>
              <a href="mailto:zijun.wang@chimieparistech.psl.eu" class="apply-btn">Apply for Postdoc</a>
            </div>
          </div>
        </div>

    design:
      full_width: true
      spacing:
        padding: ["0", 0, "4rem", 0]
---
