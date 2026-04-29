---
title: "Contact"
type: landing

sections:
  # ────────────────────────────────────────────────────────────────────────────
  # 1. Page Styling (Ensures the layout stays wide and clean)
  # ────────────────────────────────────────────────────────────────────────────
  - block: markdown
    content:
      text: |
        <style>
          /* Forces the page to use the full width of the screen */
          .max-w-prose, .prose, .container, .mx-auto { 
            max-width: 100% !important; 
            width: 100% !important; 
          }
          .contact-link:hover {
            text-decoration: underline !important;
            color: #006b67 !important;
          }
        </style>

  # ────────────────────────────────────────────────────────────────────────────
  # 2. Office Location & Map Section
  # ────────────────────────────────────────────────────────────────────────────
  - block: markdown
    content:
      title: "Contact Us"
      text: |
        <div style="width: 85%; margin: 0 auto; text-align: left;">
          <div style="display: flex; flex-wrap: wrap; gap: 50px; align-items: flex-start; padding: 20px 0;">
            
            <div style="flex: 1; min-width: 350px;">
              <h3 style="color: #008a85; margin-bottom: 20px; font-weight: bold; font-size: 1.5rem;">
                Office Location
              </h3>
              
              <div style="line-height: 1.8; color: #4a5568; font-size: 1.1rem;">
                <strong style="font-size: 1.2rem; color: #2d3748;">
                  Institute of Chemistry for Life and Health Sciences (i-CLeHS)
                </strong><br>
                UMR 8060 / ENSCP – Chimie ParisTech<br><br>

                <div style="background: #f7fafc; padding: 15px; border-radius: 8px; border-left: 4px solid #008a85;">
                  11 Rue Pierre et Marie Curie<br>
                  75005 Paris, France
                </div>
              </div>

              <p style="margin-top: 25px;">
                <a href="https://www.google.com/maps/dir/?api=1&destination=11+Rue+Pierre+et+Marie+Curie+75005+Paris" 
                   target="_blank" 
                   class="contact-link"
                   style="color: #008a85; text-decoration: none; font-weight: 600; font-size: 1.1rem;">
                  👉 Get Directions on Google Maps
                </a>
              </p>
            </div>

            <div style="flex: 1.4; min-width: 350px;">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m12!1m3!1d2625.4382!2d2.3424!3d48.8452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671e62642967d%3A0x6e6e6e6e6e6e6e6e!2s11%20Rue%20Pierre%20et%20Marie%20Curie%2C%2075005%20Paris%2C%20France!5e0!3m2!1sen!2sfr!4v1700000000000" 
                width="100%" 
                height="450" 
                style="border:0; border-radius:15px; box-shadow: 0 10px 25px rgba(0,0,0,0.1);" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">
              </iframe>
            </div>

          </div>
        </div>
    design:
      full_width: true
      spacing:
        padding: ["3rem", "0", "5rem", "0"]
---
