import { projectDetails1 } from "./projectDetails1.js";
import { projectDetails2 } from "./projectDetails2.js";
import { projectDetails3 } from "./projectDetails3.js";

function renderProject(content, containerSelector) {
  const container = document.querySelector(`.${containerSelector}`);
  if (!container) {
    console.error(`Container with selector ${containerSelector} not found`);
    return;
  }
  container.innerHTML = "";

  // Render Title
  const heading = document.createElement("h2");
  heading.textContent = content.title || "Project Details";
  container.appendChild(heading);

  // Render description paragraphs
  if (content.description && Array.isArray(content.description)) {
    content.description.forEach((para) => {
      const p = document.createElement("p");
      p.textContent = para;
      container.appendChild(p);
    });
  }

  // Render Skills
  if (content.skills && Array.isArray(content.skills)) {
    const skillsDiv = document.createElement("div");
    skillsDiv.style.margin = "2rem 0 0";
    skillsDiv.innerHTML = `
      <hr class="divider"/>
      <h3>Skills Gained:</h3>
      <ul>${content.skills.map((skill) => `<li>${skill}</li>`).join("")}</ul>
    `;
    container.appendChild(skillsDiv);
  }

  // Render Modules
  const divider = document.createElement("hr");
  divider.classList.add("divider"); // use existing CSS class
  container.appendChild(divider);

  const modulesHeading = document.createElement("h2"); // or h3 if you prefer
  modulesHeading.textContent = "Modules & Highlights + Github Link";
  container.appendChild(modulesHeading);

  content.modules.forEach((module) => {
    const moduleDiv = document.createElement("div");
    moduleDiv.classList.add("module-list");

    // Module title and focus always render
    let moduleHTML = `
    <h3><a href="${module.link}" target="_blank">${module.title}</a></h3>
    <h4>Focus: ${module.focus}</h4>
  `;

    // Render Labs only if present
    if (module.labs && Array.isArray(module.labs) && module.labs.length > 0) {
      moduleHTML += `
      <h4>Labs:</h4>
      <ul>${module.labs.map((lab) => `<li>${lab}</li>`).join("")}</ul>
    `;
    }

    moduleDiv.innerHTML = moduleHTML;
    container.appendChild(moduleDiv);
  });

  // Render Tools
  if (content.tools && Array.isArray(content.tools)) {
    const toolsDiv = document.createElement("div");
    toolsDiv.classList.add("project-item");
    toolsDiv.innerHTML = `
      <hr class="divider"/>
      <h3>Tools & Framework Used</h3>
      <ul>${content.tools.map((tool) => `<li>${tool}</li>`).join("")}</ul>
    `;
    container.appendChild(toolsDiv);
  }

  // Render Insights
  if (content.insights && Array.isArray(content.insights)) {
    const insightsDiv = document.createElement("div");
    insightsDiv.classList.add("project-item");
    insightsDiv.innerHTML = `
      <hr class="divider"/>
      <h3>Output / Insight</h3>
      <ul>${content.insights.map((item) => `<li>${item}</li>`).join("")}</ul>
    `;
    container.appendChild(insightsDiv);
  }

  // Render Work Snaps
  if (content.images && Array.isArray(content.images)) {
    const imagesDiv = document.createElement("div");
    imagesDiv.classList.add("project-item");
    let imagesHTML = '<hr class="divider"/><h3>Work Snap</h3>';
    content.images.forEach((img) => {
      imagesHTML += `
        <h4>${img.title}</h4>
        <img src="${img.src}" ${img.fullWidth ? 'style="width:100%"' : ""} />
      `;
    });
    imagesDiv.innerHTML = imagesHTML;
    container.appendChild(imagesDiv);
  }
}

export { renderProject, projectDetails1, projectDetails2, projectDetails3 };
