---
title: "Publications"
type: landing

sections:
  # ────────────────────────────────────────────────────────────────────────────
  # 1. Styling (Ensures consistency with the rest of your site)
  # ────────────────────────────────────────────────────────────────────────────
  - block: markdown
    content:
      text: |
        <style>
          .max-w-prose, .prose, .container, .mx-auto { 
            max-width: 100% !important; 
            width: 100% !important; 
          }
          
          .pub-grid {
            display: flex;
            flex-direction: column;
            gap: 20px;
            width: 80%;
            margin: 0 auto;
          }

          .pub-card {
            background: #ffffff;
            padding: 25px;
            border-radius: 12px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.05);
            text-align: left; /* Strict left alignment */
            border-left: 5px solid #008a85; /* Visual accent matching SEISAD theme */
          }

          .pub-title {
            font-size: 1.25rem;
            font-weight: bold;
            color: #2d3748;
            margin-bottom: 10px;
            line-height: 1.4;
          }

          .pub-authors {
            font-size: 1.05rem;
            color: #4a5568;
            margin-bottom: 8px;
          }

          .pub-meta {
            font-size: 0.95rem;
            color: #718096;
            font-style: italic;
            margin-bottom: 15px;
          }

          .pub-links {
            display: flex;
            gap: 15px;
          }

          .pub-btn {
            display: inline-block;
            padding: 8px 16px;
            background-color: #008a85;
            color: white !important;
            border-radius: 6px;
            text-decoration: none;
            font-size: 0.9rem;
            font-weight: 600;
            transition: 0.3s;
          }

          .pub-btn:hover {
            background-color: #006b67;
            box-shadow: 0 4px 10px rgba(0,138,133,0.2);
          }
        </style>

  # ────────────────────────────────────────────────────────────────────────────
  # 2. Publication Entry
  # ────────────────────────────────────────────────────────────────────────────
  - block: markdown
    content:
      title: "Selected Publications"
      text: |
        <div class="pub-grid">
          
          <div class="pub-card">
            <div class="pub-authors">
              S. Boumati, A. Sour, V. Heitz, J. Seguin, G. Beitz, Y. Kaga, M. Jakubaszek, J. Karges, G. Gasser, N. Mignet, and <strong>B. Doan</strong>.
            </div>
            
            <div class="pub-title">
              "Three in One: In Vitro and In Vivo Evaluation of Anticancer Activity of a Theranostic Agent that Combines Magnetic Resonance Imaging, Optical Bioimaging, and Photodynamic Therapy Capabilities."
            </div>
            
            <div class="pub-meta">
              <em>ACS Applied Bio Materials</em>, 2023, <strong>6</strong> (11), 4791–4804. 
              <br>
              DOI: <a href="https://doi.org/10.1021/acsabm.3c00565" target="_blank" style="color: #008a85; text-decoration: underline;">10.1021/acsabm.3c00565</a>
            </div>
            
            <div class="pub-links">
              <a href="https://doi.org/10.1021/acsabm.3c00565" target="_blank" class="pub-btn">
                <i class="fas fa-external-link-alt"></i> View Article
              </a>
              <a href="https://pubs.acs.org/doi/pdf/10.1021/acsabm.3c00565" target="_blank" class="pub-btn" style="background-color: #4a5568;">
                <i class="fas fa-file-pdf"></i> PDF
              </a>
            </div>
          </div>

        </div>
    design:
      full_width: true
      spacing:
        padding: ["3rem", 0, "5rem", 0]
---
