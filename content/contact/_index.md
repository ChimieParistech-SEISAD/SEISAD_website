---
title: Contact
type: landing

sections:
  # ────────────────────────────────────────────────────────────────────────────
  # 1. Layout Patch (Ensuring Full Width)
  # ────────────────────────────────────────────────────────────────────────────
  - block: markdown
    content:
      text: |
        <style>
          /* 彻底突破窄屏限制 - Force Full Width for all lines */
          .max-w-prose, .prose, .container, .mx-auto { 
            max-width: 100% !important; 
            width: 100% !important; 
          }
          
          /* Ensuring the contact wrapper uses the new available width */
          .full-width-contact-wrapper {
            display: flex; 
            flex-wrap: wrap; 
            gap: 50px; 
            align-items: flex-start; 
            padding: 20px 0;
            width: 100%;
          }
        </style>

  # ────────────────────────────────────────────────────────────────────────────
  # 2. Contact Content
  # ────────────────────────────────────────────────────────────────────────────
  - block: markdown
    content:
      title: "Contact Us"
      text: |
        <div class="full-width-contact-wrapper">
          
          <div style="flex: 1; min-width: 450px;">
            <h3 style="color: #008a85; margin-bottom: 25px; font-weight: 700;">Office Location</h3>
            
            <div style="display: flex; align-items: flex-start; gap: 20px; margin-bottom: 40px;">
              <div style="flex-shrink: 0; width: 30px;">
                <i class="fas fa-map-marker-alt" style="color: #008a85; margin-top: 8px; font-size: 1.5rem;"></i>
              </div>
              
              <div style="text-align: left; line-height: 2; width: 100%;">
                <strong style="font-size: 1.25rem; color: #2d3748; display: block; width: 100%;">Institute of Chemistry for Life and Health Sciences (i-CLeHS)</strong>
                <span style="color: #4a5568; font-weight: 500; font-size: 1.1rem; display: block; width: 100%;">UMR 8060 / ENSCP – Chimie ParisTech</span>
                <br>
                <div style="font-size: 1.15rem; color: #1a202c; width: 100%;">
                  11 Rue Pierre et Marie Curie, 75005 Paris, France
                </div>
              </div>
            </div>

            <a href="https://www.google.com/maps/dir/?api=1&destination=11+Rue+Pierre+et+Marie+Curie+75005+Paris" target="_blank" style="display: inline-block; padding: 16px 32px; background-color: #008a85; color: white; border-radius: 8px; text-decoration: none; font-weight: 700; transition: 0.3s; box-shadow: 0 4px 15px rgba(0,138,133,0.3);">
              <i class="fas fa-directions" style="margin-right: 12px;"></i>Get Directions
            </a>
          </div>

          <div style="flex: 1.2; min-width: 350px;">
            <div style="border-radius: 20px; overflow: hidden; box-shadow: 0 15px 45px rgba(0,0,0,0.1); border: 1px solid #eee;">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m12!1m3!1d2625.617180415354!2d2.341883376891034!3d48.84641100154087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671e3e6015b3b%3A0x6b779c13b6323a6c!2s11%20Rue%20Pierre%20et%20Marie%20Curie%2C%2075005%20Paris%2C%20France!5e0!3m2!1sen!2sfr!4v1700000000000" 
                width="100%" 
                height="500" 
                style="border:0; display: block;" 
                allowfullscreen="" 
                loading="lazy">
              </iframe>
            </div>
          </div>

        </div>
    design:
      full_width: true
      spacing:
        padding: ["3rem", 0, "6rem", 0]
---
