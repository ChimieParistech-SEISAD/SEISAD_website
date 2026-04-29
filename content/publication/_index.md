---
title: "Publications"
type: landing

sections:
  # ────────────────────────────────────────────────────────────────────────────
  # 1. Styling Block (CRITICAL: This hides the code and creates the visual cards)
  # ────────────────────────────────────────────────────────────────────────────
  - block: markdown
    content:
      text: |
        <style>
          /* This section ensures the HTML below turns into professional cards */
          .pub-grid {
            display: flex;
            flex-direction: column;
            gap: 20px;
            width: 90%;
            margin: 0 auto;
          }
          .pub-card {
            background: #ffffff;
            padding: 25px;
            border-radius: 8px;
            box-shadow: 0 2px 12px rgba(0,0,0,0.08);
            border-left: 5px solid #008a85;
            text-align: left;
          }
          .pub-title {
            font-size: 1.2rem;
            font-weight: bold;
            display: block;
            margin-bottom: 8px;
            color: #2d3748;
          }
          .pub-authors {
            color: #4a5568;
            margin-bottom: 8px;
          }
          .pub-meta {
            font-size: 0.95rem;
            color: #718096;
            margin-bottom: 15px;
          }
          .pub-links {
            display: flex;
            gap: 10px;
          }
          .pub-btn {
            padding: 6px 14px;
            background: #008a85 !important;
            color: white !important;
            border-radius: 4px;
            text-decoration: none !important;
            font-size: 0.85rem;
            font-weight: 600;
            display: inline-block;
          }
          .btn-pdf {
            background: #4a5568 !important;
          }
        </style>

  # ────────────────────────────────────────────────────────────────────────────
  # 2. The Publication Entry
  # ────────────────────────────────────────────────────────────────────────────
  - block: markdown
    content:
      title: "Selected Publications"
      text: |
        <div class="pub-grid">
          <div class="pub-card">
            <span class="pub-title">
              Three in One: In Vitro and In Vivo Evaluation of Anticancer Activity of a Theranostic Agent that Combines Magnetic Resonance Imaging, Optical Bioimaging, and Photodynamic Therapy Capabilities
            </span>
            
            <div class="pub-authors">
              S. Boumati, A. Sour, V. Heitz, J. Seguin, G. Beitz, Y. Kaga, M. Jakubaszek, J. Karges, G. Gasser, N. Mignet, and <strong>B. Doan</strong>
            </div>
            
            <div class="pub-meta">
              <em>ACS Applied Bio Materials</em>, 2023, <strong>6</strong> (11), 4791–4804.<br>
              DOI: <a href="https://doi.org/10.1021/acsabm.3c00565" target="_blank" style="color: #008a85; text-decoration: underline;">10.1021/acsabm.3c00565</a>
            </div>
            
            <div class="pub-links">
              <a href="https://doi.org/10.1021/acsabm.3c00565" target="_blank" class="pub-btn">
                View Article
              </a>
              <a href="https://pubs.acs.org/doi/pdf/10.1021/acsabm.3c00565" target="_blank" class="pub-btn btn-pdf">
                PDF
              </a>
            </div>
          </div>
        </div>
    design:
      spacing:
        padding: ["2rem", 0, "2rem", 0]
---
