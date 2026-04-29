---
title: "News"
type: landing

sections:
  - block: markdown
    content:
      title: ""
      text: |
        <style>
          /* 1. 彻底破除主题窄屏限制 */
          .max-w-prose, .prose, .container, .mx-auto { 
            max-width: 100% !important; 
            width: 100% !important; 
          }

          /* 2. 统一大容器 */
          .news-container {
            width: 95%;
            max-width: 1400px;
            margin: 0 auto;
            padding-bottom: 50px;
            text-align: left;
          }

          .section-title-custom {
            text-align: center;
            font-size: 2.5rem;
            font-weight: bold;
            color: #333;
            margin-top: 60px;
            margin-bottom: 50px;
          }

          /* 3. 新闻卡片设计 */
          .news-item {
            display: flex;
            gap: 30px;
            background: #ffffff;
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.05);
            margin-bottom: 30px;
            border-left: 5px solid #008a85;
            transition: all 0.3s ease;
          }
          .news-item:hover {
            transform: translateX(10px);
            box-shadow: 0 6px 25px rgba(0,0,0,0.1);
          }

          .news-date {
            min-width: 120px;
            font-weight: bold;
            color: #008a85;
            font-size: 1.1rem;
            border-right: 1px solid #eee;
            padding-right: 20px;
          }

          .news-content {
            flex: 1;
          }

          .news-tag {
            display: inline-block;
            background: #e9f5f5;
            color: #008a85;
            padding: 2px 10px;
            border-radius: 4px;
            font-size: 0.8rem;
            font-weight: bold;
            text-transform: uppercase;
            margin-bottom: 10px;
          }

          .news-title {
            font-size: 1.3rem;
            font-weight: bold;
            color: #222;
            margin-bottom: 10px;
          }

          .news-text {
            color: #555;
            line-height: 1.6;
          }

          @media (max-width: 768px) {
            .news-item { flex-direction: column; gap: 10px; }
            .news-date { border-right: none; border-bottom: 1px solid #eee; padding-bottom: 5px; }
          }
        </style>

        <h2 class="section-title-custom">Latest News</h2>

        <div class="news-container">

          <!-- 新闻 1 -->
          <div class="news-item">
            <div class="news-date">May 2024</div>
            <div class="news-content">
              <span class="news-tag">Publication</span>
              <div class="news-title">New paper published in Nature Communications</div>
              <div class="news-text">Our latest work on microfluidic platforms for cancer cell analysis is now online. Congratulations to all the team members involved!</div>
            </div>
          </div>

          <!-- 新闻 2 -->
          <div class="news-item">
            <div class="news-date">Mar 2024</div>
            <div class="news-content">
              <span class="news-tag">Award</span>
              <div class="news-title">Best Poster Award at the MicroTAS Conference</div>
              <div class="news-text">Xingyuan XU received the Best Poster Award for his presentation on AI-driven sensing methodologies.</div>
            </div>
          </div>

          <!-- 新闻 3 -->
          <div class="news-item">
            <div class="news-date">Jan 2024</div>
            <div class="news-content">
              <span class="news-tag">Grant</span>
              <div class="news-title">ANR Project Funding Secured</div>
              <div class="news-text">We are excited to announce that our project on "Luminescent Nanoprobes" has been funded by the ANR for the next three years.</div>
            </div>
          </div>

        </div>

    design:
      full_width: true
      spacing:
        padding: ["0", 0, "4rem", 0]
---
