// js/experience.js

const experiences = [
  {
    title: "Operation Associate",
    period: "Nov 2024 - Present",
    company: "KarmaOps",
    companyUrl: "https://www.linkedin.com/company/karmaops/posts/?feedView=all",
    description: `As a Operation Associate, I work in Quality Assurance (QA) as a part of
MarginGeek, I ensured the accuracy and profitability of product leads by
conducting detailed product matching, data verification, and
profitability analysis.`,
    moreLink: "operation-associate.html",
  },
  {
    title: "Content Creator",
    period: "Apr 2023 - Oct 2024",
    company: "Biblionepal",
    companyUrl: "https://www.biblionepal.com/",
    description: `As a Content Creator at Biblionepal, I was responsible for crafting engaging and visually appealing content. My role combined creativity, research, and audience interaction to produce social media content that resonated with book lovers and strengthened the store’s online presence.`,
    moreLink: "content-creator.html",
  },
  {
    title: "Frontend Developer Intern",
    period: "Jan 2024 - Apr 2024",
    company: "Darse Technologies",
    companyUrl: "https://www.linkedin.com/company/darsetech/",
    description: `During my frontend development internship, I worked on multiple
real-world projects for upgrading my skills related to coding that involved building interactive user interfaces,
buidling data driven visual tools and integrating headless CMS for dynamic content management.`,
    moreLink: "frontend-intern.html",
  },
  // Add more experience objects here as needed
];

// Function to render experience cards dynamically
function renderExperiences() {
  const container = document.getElementById("experience-grid");
  container.innerHTML = ""; // Clear existing content

  experiences.forEach((exp) => {
    const card = document.createElement("div");
    card.classList.add("experience-card");

    card.innerHTML = `
      <h3>${exp.title}</h3>
      <p class="meta">
        ${exp.period} &nbsp; | &nbsp;
        <a href="${exp.companyUrl}" target="_blank">${exp.company}</a>
      </p>
      <p class="desc">${exp.description}</p>
      <div class="view-more">
        <a href="${exp.moreLink}">View more</a>
      </div>
    `;

    container.appendChild(card);
  });
}

// Run the rendering once DOM content is loaded
document.addEventListener("DOMContentLoaded", renderExperiences);
