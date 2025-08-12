import { projectDetails1 } from "./projectDetails1.js";

function renderProject(projectData, containerId) {
  const container = document.getElementById(containerId);

  // Title & Description
  const title = `<h2>${projectData.title}</h2>`;
  const desc = projectData.description.map((p) => `<p>${p}</p>`).join("");

  // Skills
  const skills = `
    <hr class="divider" />
    <h3 style="margin-top: 2rem">Skills Gained:</h3>
    <ul>${projectData.skills.map((skill) => `<li>${skill}</li>`).join("")}</ul>
  `;

  // Modules
  const modulesHTML = projectData.modules
    .map(
      (module) => `
    <div class="module-list">
      <h3><a href="${module.link}" target="_blank">${module.title}</a></h3>
      <h4>Focus: ${module.focus}</h4>
      <h4>Labs:</h4>
      <ul>${module.labs.map((lab) => `<li>${lab}</li>`).join("")}</ul>
    </div>
  `
    )
    .join("");

  // Tools
  const tools = `
    <hr class="divider" />
    <h3>Tools & Framework Used</h3>
    <ul>${projectData.tools.map((tool) => `<li>${tool}</li>`).join("")}</ul>
  `;

  // Insights
  const insights = `
    <hr class="divider" />
    <h3>Output / Insight</h3>
    <ul>${projectData.insights
      .map((insight) => `<li>${insight}</li>`)
      .join("")}</ul>
  `;

  // Images
  const images = `
    <hr class="divider" />
    <h3>Work Snap</h3>
    ${projectData.images
      .map(
        (img) => `
      <h4>${img.title}</h4>
      <img src="${img.src}" ${img.fullWidth ? 'style="width:100%"' : ""} />
    `
      )
      .join("")}
  `;

  container.innerHTML = `
    <section class="project-list">
      ${title}
      ${desc}
      <div class="project-item">
        <div class="project-details">
          ${skills}
          <hr class="divider" />
          <h3>Modules & Highlights + Github Link</h3>
          ${modulesHTML}
          ${tools}
          ${insights}
          ${images}
        </div>
      </div>
    </section>
  `;
}

// Example usage
renderProject(projectDetails1, "project-container");
// renderProject(projectDetails2, "project-container-2");
