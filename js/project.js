// js/projects.js

const projects = [
  {
    title: "Cisco Cyber Threat Management Projects",
    year: 2025,
    category: "Hands-on Labs and Case Studies",
    description:
      "This project is a compilation of hands-on cybersecurity labs completed during the Cisco Cyber Threat Management course. It covers the full spectrum of threat management from policy creation and compliance mapping to digital forensics, incident response, vulnerability assessment, and disaster recovery planning.",
    link: "projectDetails1.html",
    linkText: "View more",
  },
  {
    title: "Cisco Network Basics Packet Tracer Projects",
    year: 2025,
    category: "Hands-on Labs and Case Studies",
    description:
      "This project is a compilation of hands-on networking labs completed during the Cisco Networking Basics course. It covers foundational concepts such as IP addressing, LAN/WAN configuration, routing, and essential network services like DHCP, NAT, HTTP, and FTP.",
    link: "projectDetails2.html",
    linkText: "View more",
  },
  {
    title: "Google Cybersecurity Projects",
    year: 2025,
    category: "Hands-on Labs and Case Studies",
    description:
      "This project contains a series of hands-on security documentation projects and technical exercises completed as part of the Google Cybersecurity Certificate program. Each file demonstrates applied skills in areas like risk assessment, incident response, SQL filtering, Linux security, and automation using Python.",
    link: "projectDetails3.html",
    linkText: "View More",
  },
];

function generateProjects() {
  const container = document.getElementById("projects-container");
  container.innerHTML = ""; // Clear existing content if any

  projects.forEach((project) => {
    const projectItem = document.createElement("div");
    projectItem.classList.add("project-item");

    projectItem.innerHTML = `
      <div class="project-details">
        <h3>${project.title}</h3>
        <div class="project-meta">
          <span class="year">${project.year}</span>
          <span class="category">${project.category}</span>
        </div>
        <p>${project.description}</p>
        <div class="view-more">
          <a href="${project.link}">${project.linkText}</a>
        </div>
        </div>
    `;

    container.appendChild(projectItem);
  });
}

// Run the function once the DOM is loaded
document.addEventListener("DOMContentLoaded", generateProjects);
