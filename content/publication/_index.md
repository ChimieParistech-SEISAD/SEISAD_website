---
title: "Publications"
type: landing

sections:
  # ────────────────────────────────────────────────────────────────────────────
  # 1. Styling (Improved for scannability and layout)
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
            gap: 24px;
            width: 90%;
            max-width: 1100px;
            margin: 0 auto;
          }

          .pub-card {
            background: #ffffff;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.08);
            text-align: left;
            border-left: 6px solid #008a85; /* Brand accent */
            transition: transform 0.2s ease;
          }

          .pub-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 15px rgba(0,0,0,0.12);
          }

          .pub-title {
            font-size: 1.3rem;
            font-weight: 700;
            color: #1a202c;
            margin-bottom: 12px;
            line-height: 1.3;
            display: block;
          }

          .pub-authors {
            font-size: 1.05rem;
            color: #4a5568;
            margin-bottom: 10px;
            line-height: 1.5;
          }

          .pub-meta {
            font-size: 0.95rem;
            color: #718096;
            margin-bottom: 20px;
            border-top: 1px solid #edf2f7;
            padding-top: 10px;
          }

          .pub-links {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
          }

          .pub-btn {
            display: inline-flex;
            align-items: center;
            padding: 8px 16px;
            background-color: #008a85;
            color: white !important;
            border-radius: 4px;
            text-decoration: none !important;
            font-size: 0.85rem;
            font-weight: 600;
            transition: background 0.2s;
          }

          .pub-btn i {
            margin-right: 8px;
          }

          .pub-btn:hover {
            background-color: #006b67;
          }

          .btn-pdf {
            background-color: #4a5568;
          }
          
          .btn-pdf:hover {
            background-color: #2d3748;
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
            <span class="pub-title">
              Three in One: In Vitro and In Vivo Evaluation of Anticancer Activity of a Theranostic Agent that Combines Magnetic Resonance Imaging, Optical Bioimaging, and Photodynamic Therapy Capabilities
            </span>
            
            <div class="pub-authors">
              S. Boumati, A. Sour, V. Heitz, J. Seguin, G. Beitz, Y. Kaga, M. Jakubaszek, J. Karges, G. Gasser, N. Mignet, and <strong>B. Doan</strong>
            </div>
            
            <div class="pub-meta">
              <em>ACS Applied Bio Materials</em>, 2023, <strong>6</strong> (11), 4791–4804.
              <br>
              DOI: <a href="https://doi.org/10.1021/acsabm.3c00565" target="_blank" style="color: #008a85; font-weight: 500;">10.1021/acsabm.3c00565</a>
            </div>
            
            <div class="pub-links">
              <a href="https://doi.org/10.1021/acsabm.3c00565" target="_blank" class="pub-btn">
                <i class="fas fa-external-link-alt"></i> View Article
              </a>
              <a href="https://pubs.acs.org/doi/pdf/10.1021/acsabm.3c00565" target="_blank" class="pub-btn btn-pdf">
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
