---
title: Contact
type: landing

sections:
  # ────────────────────────────────────────────────────────────────────────────
  # 1. Layout Patch (CSS)
  # ────────────────────────────────────────────────────────────────────────────
  - block: markdown
    content:
      text: |
        <style>
          /* Force break theme prose constraints */
          .max-w-prose, .prose, .container, .mx-auto { 
            max-width: 100% !important; 
            width: 100% !important; 
          }
          /* Tighten space between navbar and content */
          .blox-page-header { margin-bottom: 0 !important; }
        </style>
    
  # ────────────────────────────────────────────────────────────────────────────
  # 2. Contact Content (80% Centered)
  # ────────────────────────────────────────────────────────────────────────────
  - block: markdown
    content:
      title: "Contact Us"
      text: |
        <div style="width: 80%; margin: 0 auto; text-align: left;">
          <div style="display: flex; flex-wrap: wrap; gap: 50px; align-items: flex-start; padding: 10px 0;">
            
            <div style="flex: 1; min-width: 350px;">
              <h3 style="color: #008a85; margin-bottom: 25px; font-weight: bold;">Office Location</h3>
              
              <div style="display: flex; gap: 15px; margin-bottom: 35px;">
                <div style="flex-shrink: 0; width: 25px; text-align: center;">
                  <i class="fas fa-map-marker-alt" style="color: #008a85; font-size: 1.3rem; margin-top: 5px;"></i>
                </div>
                
                <div style="line-height: 1.8; text-align: left;">
                  <strong style="font-size: 1.15rem; color: #2d3748; display: block;">Institute of Chemistry for Life and Health Sciences (i-CLeHS)</strong>
                  <span style="color: #4a5568; font-weight: 500; display: block;">UMR 8060 / ENSCP – Chimie ParisTech</span>
                  <br>
                  <div style="font-size: 1.1rem; color: #1a202c;">
                    11 Rue Pierre et Marie Curie<br>
                    75005 Paris, France
                  </div>
                </div>
              </div>

              <a href="https://www.google.com/maps/dir/?api=1&destination=11+Rue+Pierre+et+Marie+Curie+75005+Paris" target="_blank" style="display: inline-block; padding: 14px 28px; background-color: #008a85; color: white; border-radius: 8px; text-decoration: none; font-weight: 600; transition: 0.3s; box-shadow: 0 4px 12px rgba(0,138,133,0.2);">
                <i class="fas fa-directions" style="margin-right: 10px;"></i>Get Directions
              </a>
            </div>

            <div style="flex: 1.4; min-width: 350px;">
              <div style="border-radius: 20px; overflow: hidden; box-shadow: 0 15px 35px rgba(0,0,0,0.12); border: 1px solid #eee;">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.647144211118!2d2.34185737691882!3d48.84586200158223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671e626428781%3A0x5395669e4695e783!2s11%20Rue%20Pierre%20et%20Marie%20Curie%2C%2075005%20Paris!5e0!3m2!1sen!2sfr!4v1714390000000!5m2!1sen!2sfr" 
                  width="100%" 
                  height="450" 
                  style="border:0; display: block;" 
                  allowfullscreen="" 
                  loading="lazy">
                </iframe>
              </div>
            </div>

          </div>
        </div>
    design:
      full_width: true
      spacing:
        padding: ["0.5rem", 0, "5rem", 0]
---
