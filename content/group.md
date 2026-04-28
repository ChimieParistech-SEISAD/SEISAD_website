---
title: "Group Members"
type: landing

sections:

# ───────────────────────── CSS ─────────────────────────
- block: markdown
  content:
    text: |
      <style>
        .max-w-prose, .prose, .container, .mx-auto { 
          max-width: 100% !important; 
          width: 100% !important; 
        }

        .people-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          width: 90%;
          max-width: 1400px;
          margin: 0 auto;
        }

        .person-card {
          display: flex;
          gap: 30px;
          background: #fff;
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.05);
        }

        .person-img {
          width: 120px;
          height: 160px;
          object-fit: cover;
          border-radius: 8px;
          flex-shrink: 0;
        }

        .person-name { font-size: 1.4rem; font-weight: bold; color: #008a85; }
        .person-title { font-style: italic; margin-bottom: 10px; }
        .person-bio { font-size: 0.95rem; margin-bottom: 10px; }

        .icon-box { width: 25px; display: inline-block; }
      </style>

# ───────────────────────── Permanent ─────────────────────────
- block: markdown
  content:
    title: "Permanent Members"
    text: |
      <div id="permanent-container" class="people-grid"></div>

# ───────────────────────── Students ─────────────────────────
- block: markdown
  content:
    title: "Students & Researchers"
    text: |
      <div id="students-container" class="people-grid"></div>

# ───────────────────────── JS ─────────────────────────
- block: markdown
  content:
    text: |
      <script src="/js/people.js"></script>

---
