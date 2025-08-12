import { operationAssociate } from "./operationAssociate.js";
import { contentCreator } from "./contentCreator.js";
import { frontendIntern } from "./frontendIntern.js";

function renderProject(content, containerSelector) {
  const container = document.querySelector(`.${containerSelector}`);
  if (!container) {
    console.error(`Container with selector ${containerSelector} not found`);
    return;
  }
  container.innerHTML = "";

  // Render heading
  const heading = document.createElement("h2");
  heading.textContent = content.title || "Work Details";
  container.appendChild(heading);

  // Render intro and skills
  if (content.introParagraph || content.softSkills || content.technicalSkills) {
    const intro = document.createElement("p");
    intro.textContent = content.introParagraph || "";

    const skillsDiv = document.createElement("div");
    skillsDiv.style.margin = "2rem 0 0";
    skillsDiv.innerHTML = `
      <hr class="divider"/>
      ${
        content.softSkills
          ? `<h3>Soft Skills Gained:</h3><p>${content.softSkills}</p>`
          : ""
      }
      ${
        content.technicalSkills
          ? `<h3>Technical Skills Gained:</h3><p>${content.technicalSkills}</p>`
          : ""
      }
    `;

    container.appendChild(intro);
    container.appendChild(skillsDiv);
  }

  // Render responsibilities
  if (content.responsibilities) {
    const respDiv = document.createElement("div");
    respDiv.classList.add("project-item");

    if (
      Array.isArray(content.responsibilities) &&
      content.responsibilities[0]?.title &&
      content.responsibilities[0]?.points
    ) {
      let responsibilitiesHTML =
        '<hr class="divider"/><h4>Key Responsibilities</h4><ul>';
      content.responsibilities.forEach((section) => {
        responsibilitiesHTML += `<li><strong>${section.title}</strong><ul>`;
        section.points.forEach((point) => {
          responsibilitiesHTML += `<li>${point}</li>`;
        });
        responsibilitiesHTML += "</ul></li>";
      });
      responsibilitiesHTML += "</ul>";
      respDiv.innerHTML = responsibilitiesHTML;
    } else if (Array.isArray(content.responsibilities)) {
      respDiv.innerHTML = `
        <hr class="divider"/>
        <h4>Key Responsibilities</h4>
        <ul>${content.responsibilities
          .map((item) => `<li>${item}</li>`)
          .join("")}</ul>
      `;
    }

    container.appendChild(respDiv);
  }

  // Render impactAchievement if any
  if (content.impactAchievement) {
    const impactDiv = document.createElement("div");
    impactDiv.classList.add("project-item");
    impactDiv.innerHTML = `
      <hr class="divider"/>
      <h4>Impact and Achievement</h4>
      <ul>${content.impactAchievement
        .map((item) => `<li>${item}</li>`)
        .join("")}</ul>
    `;
    container.appendChild(impactDiv);
  }

  // Render multiple projects if any
  if (content.projects && Array.isArray(content.projects)) {
    content.projects.forEach((project) => {
      const projDiv = document.createElement("div");
      projDiv.classList.add("project-item");

      const respHTML = project.responsibilities
        .map((item) => `<li>${item}</li>`)
        .join("");
      let snapsHTML = "";
      if (project.workSnap && Array.isArray(project.workSnap)) {
        project.workSnap.forEach((img) => {
          const style = img.style ? `style="${img.style}"` : "";
          snapsHTML += `<img src="${img.src}" alt="${img.alt}" ${style} />`;
        });
      }

      projDiv.innerHTML = `
        <hr class="divider"/>
        <h3>${project.title}</h3>
        <div class="project-meta">
          <span class="year">${project.year}</span>
          <span class="category">${project.category}</span>
        </div>
        <h4>Key Responsibilities</h4>
        <ul>${respHTML}</ul>
        <h4>Work Snap</h4>
        <div>${snapsHTML}</div>
      `;

      container.appendChild(projDiv);
    });
  }

  // Render single workSnap if present
  if (content.workSnap && !Array.isArray(content.workSnap)) {
    const snapDiv = document.createElement("div");
    snapDiv.classList.add("project-item");
    snapDiv.innerHTML = `
      <hr class="divider"/>
      <h4>Work Snap</h4>
      <img src="${content.workSnap.src}" alt="${content.workSnap.alt}" style="${content.workSnap.style}" />
    `;
    container.appendChild(snapDiv);
  }

  // Render challenges if present
  if (content.challenges && Array.isArray(content.challenges)) {
    const challengesDiv = document.createElement("div");
    challengesDiv.classList.add("project-item");
    let challengesHTML =
      '<hr class="divider"/><h3>Challenges Faced & How I Solved Them</h3><ul>';
    content.challenges.forEach((challenge) => {
      challengesHTML += `<li><strong>${challenge.title}:</strong> ${challenge.description}</li>`;
    });
    challengesHTML += "</ul>";
    challengesDiv.innerHTML = challengesHTML;
    container.appendChild(challengesDiv);
  }
}

// Export if using modules
export { renderProject, operationAssociate, contentCreator, frontendIntern };
