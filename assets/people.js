document.addEventListener("DOMContentLoaded", function () {

  fetch("/data/people.json")
    .then(response => response.json())
    .then(data => {

      function renderPeople(list, containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        list.forEach(p => {
          const card = document.createElement("div");
          card.className = "person-card";

          card.innerHTML = `
            <img src="${p.image}" class="person-img" alt="${p.name}">
            <div class="person-info">
              <div class="person-name">${p.name}</div>
              <div class="person-title">${p.title}</div>
              <div class="person-bio">${p.bio}</div>

              <div class="person-links">
                ${p.email ? `
                  <div><span class="icon-box">✉</span> 
                  <a href="mailto:${p.email}">${p.email}</a></div>` : ''}

                ${p.phone ? `
                  <div><span class="icon-box">☎</span> ${p.phone}</div>` : ''}

                ${p.cv ? `
                  <div><span class="icon-box">🌐</span> 
                  <a href="${p.cv}" target="_blank" rel="noopener noreferrer">CV</a></div>` : ''}

                ${p.scholar ? `
                  <div><span class="icon-box">🎓</span> 
                  <a href="${p.scholar}" target="_blank" rel="noopener noreferrer">
                  Google Scholar</a></div>` : ''}

                ${p.linkedin ? `
                  <div><span class="icon-box">in</span> 
                  <a href="${p.linkedin}" target="_blank">LinkedIn</a></div>` : ''}
              </div>
            </div>
          `;

          container.appendChild(card);
        });
      }

      renderPeople(data.permanent, "permanent-container");
      renderPeople(data.students, "students-container");

    })
    .catch(err => console.error("JSON load error:", err));
});
