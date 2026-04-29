---
title: Research Themes
type: landing

sections:
  # ────────────────────────────────────────────────────────────────────────────
  # 1. 顶部标语 (解决两行显示问题)
  # ────────────────────────────────────────────────────────────────────────────
  # ────────────────────────────────────────────────────────────────────────────
  # Research Themes Section
  # ────────────────────────────────────────────────────────────────────────────
  - block: markdown
    content:
      title: "" # Title handled inside text for better positioning
      text: |
        <style>
          /* Container logic for 80% centering */
          .themes-section-wrapper {
            width: 80%;
            margin: 0 auto;
            text-align: center;
          }

          .themes-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 30px;
            margin-top: 40px;
          }

          .theme-card {
            background: #ffffff;
            padding: 40px 30px;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.05);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            border-bottom: 4px solid transparent;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .theme-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 35px rgba(0,0,0,0.1);
            border-bottom: 4px solid #008a85;
          }

          .theme-icon {
            font-size: 3rem;
            color: #008a85;
            margin-bottom: 20px;
          }

          .theme-name {
            font-size: 1.4rem;
            font-weight: bold;
            color: #2d3748;
            margin-bottom: 15px;
          }

          .theme-desc {
            font-size: 1rem;
            color: #4a5568;
            line-height: 1.6;
            text-align: center;
          }

          .research-header {
            margin-bottom: 20px;
          }

          .research-header h2 {
            font-size: 2.5rem;
            font-weight: bold;
            color: #333;
          }
          
          /* Ensuring icons and text align perfectly */
          .theme-card * {
            text-align: center;
          }
        </style>

        <div class="themes-section-wrapper">
          <div class="research-header">
            <h2>Research Themes</h2>
          </div>
          
          <div class="themes-grid">
            <div class="theme-card">
              <div class="theme-icon"><i class="fas fa-flask"></i></div>
              <div class="theme-name">Synthetic Methodologies</div>
              <div class="theme-desc">
                Development of new synthetic methodologies and supported catalysis in mini- and continuous microflow reactors.
              </div>
            </div>
            
            <div class="theme-card">
              <div class="theme-icon"><i class="fas fa-bolt"></i></div>
              <div class="theme-name">Sensors</div>
              <div class="theme-desc">
                Design and application of electrochemical sensors for biological markers and label-free detection techniques.
              </div>
            </div>
            
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
        # Standard spacing to give the section breathing room
        padding: ["5rem", "0", "5rem", "0"]
---
