// Data for work experiences
const workExperienceData = {
  operationAssociate: {
    introParagraph: `As a Operation Associate, I work in Quality Assurance (QA) as a part of
MarginGeek, I ensured the accuracy and profitability of product leads by
conducting detailed product matching, data verification, and
profitability analysis. This role required precision, analytical skills,
and a deep understanding of e-commerce product data, contributing
directly to delivering high-value recommendations for clients.`,

    softSkills: `Attention to detail, Analytical thinking, and Problem-solving skills,
Time management and Task prioritization abilities, Effective
communication and collaboration within a remote team environment,
Adaptability to changing processes, Confident decision-making under
uncertainty`,

    technicalSkills: `Proficient in Google Sheets (advanced formulas, data validation,
conditional formatting), Conversion Factor calculations, skilled in
product matching using e-commerce platforms such as Amazon and
supplier websites, VPN usage for region-specific research, ASIN
management`,

    responsibilities: [
      {
        title: "Product Matching & Verification",
        points: [
          "Identify and confirm product matches across multiple platforms using strict matching rules.",
          "Classify matches into “Confirmed Match,” “Match Can’t Confirm,” “Uncertain Match,” or “Not a Match.”",
          "Investigate discrepancies via 3rd party websites when needed.",
        ],
      },
      {
        title: "Data Validation & Analysis",
        points: [
          "Verify and calculate Conversion Factors (CF) to ensure accurate pricing and packaging comparisons.",
          "Conduct volume checks using ProfitGuru, adjusting figures for seller count and product variants.",
          "Analyze profitability metrics (Gross Profit, ROI, Revenue, Gross Margin) against batch cutoffs.",
        ],
      },
      {
        title: "Quality Control & Reporting",
        points: [
          "Maintain precision and recall standards in QA decisions to ensure high-quality output.",
          "Prepare final QA reports, including batch summaries and recommendations.",
        ],
      },
      {
        title: "Tools & Communication",
        points: [
          "Utilize Google Sheets, VPN, Chrome Todoist extension, and web browsers for QA tasks.",
          "Communicate with the team on progress, batch starts/completions, and issues requiring clarification.",
        ],
      },
      {
        title: "Continuous Learning",
        points: [
          "Stay updated on evolving QA processes and product trends through team discussions and document reviews.",
        ],
      },
    ],

    workSnap: {
      src: "./operation-associate-images/Picture1.png",
      alt: "operation-associate-work-snap",
      style: "width: 100%",
    },
  },

  contentCreator: {
    introParagraph: `As a Content Creator at Biblionepal, a local bookstore, I was
responsible for crafting engaging and visually appealing content to
promote books and reading culture. My role combined creativity,
research, and audience interaction to produce social media content that
resonated with book lovers and strengthened the store’s online presence.`,

    softSkills: `Creativity & Storytelling, Time Management, Collaboration & Communication, Adaptability, Research Skills`,

    technicalSkills: `Meta Business Suite, Canva, Video Editing Tools, Hashtag & Trend Optimization, Basic Analytics Tracking`,

    responsibilities: [
      "Created engaging photo and video content (reels) for Instagram and TikTok to promote bookstore offerings and connect with book enthusiasts.",
      "Researched trending book-related content to develop original, creative ideas tailored to the store’s audience.",
      "Engaged with customers to understand their reading preferences, incorporating insights into personalized recommendation videos.",
      "Planned content schedules in advance in Meta Business Suite, capturing and editing reels/photos ahead of posting deadlines to ensure consistency and avoid last-minute pressure.",
      "Used Canva to design visually appealing graphics and layouts for social media content.",
      "Assisted in recommending books through social media content, aligning suggestions with customer preferences. And, listing it in Excel Sheet along with book's rating, synopsis, genre and value for money.",
    ],

    impactAchievement: [
      "Successfully grew the bookstore’s online community by increasing followers on Instagram and TikTok.",
      "Enhanced customer engagement through interactive reels, book recommendations, and audience-focused content.",
      "Expanded reach to a wider audience by leveraging trending topics, sounds, and hashtags.",
      "Built stronger connections with customers by actively engaging in comments, messages, and feedback, fostering brand loyalty.",
    ],
  },

  frontendIntern: {
    introParagraph: `During my frontend development internship, I worked on multiple
real-world projects that involved building interactive user interfaces,
managing content, and optimizing web performance. My contributions
spanned across different areas of frontend development, including
integrating headless CMS for dynamic content management, implementing
SEO enhancements, and building data-driven visual tools. Below are the
key projects I contributed to Joshinani Web Application and the
Visualization Toolkit along with my roles and responsibilities in each.`,

    softSkills: `Time Management, Collaboration & Communication, Attention to Details,
Adaptability, Analytical Thinking Problem-solving, Debugging`,

    technicalSkills: `Reactjs, Nextjs, Github, TailwindCSS, Strapi, Content Management,
Nodejs`,

    projects: [
      {
        title:
          "Joshinani Project - Enhancing restaurant visibility through web development and content management",
        year: "2024",
        category: "Strapi & OpenGraph Implementation",
        responsibilities: [
          "Integrated Strapi (Headless CMS) to manage dynamic content and create scalable APIs.",
          "Configured content types and data relationships in Strapi for seamless backend-frontend interaction.",
          "Implemented OpenGraph meta tags to enhance SEO and enable rich social media sharing.",
          "Developed responsive UI components using React and Next.js, based on design wireframes.",
          "Wrote clean, reusable, and maintainable code using core frontend technologies: HTML, CSS, and JavaScript.",
          "Collaborated with team members via GitHub, managing code through push, pull, and merge operations.",
          "Resolved merge conflicts and ensured smooth integration of features into the development branch.",
        ],
        workSnap: [
          {
            src: "./frontend-work-images/Picture9.png",
            alt: "Strapi Implementation",
          },
          {
            src: "./frontend-work-images/Picture5.png",
            alt: "OpenGraph Implementation",
          },
          {
            src: "./frontend-work-images/Picture7.png",
            alt: "OpenGraph Implementation",
          },
        ],
      },
      {
        title:
          "Visualization Toolkit - Transforming raw data into meaningful insights through interactive charts",
        year: "2024",
        category: "Data Visualization",
        responsibilities: [
          "Converted JSON and CSV datasets into interactive charts using the Apache ECharts library.",
          "Designed visualizations to help users identify patterns, trends, anomalies, and correlations in large datasets.",
          "Created a user-friendly interface for non-technical users to explore and interpret big data visually.",
          "Built responsive and interactive components using HTML, CSS, JavaScript, and React.",
          "Ensured performance and scalability when handling large data inputs by optimizing chart rendering.",
          "Compared project functionality with similar tools like One Charts and Creately to identify improvement areas.",
          "Followed a modular, reusable component structure for efficient development and future scaling.",
          "Used GitHub for managing branches, pushing/pulling updates, and resolving merge conflicts.",
          "Tested data integrity and chart responsiveness across multiple devices and browsers.",
        ],
        workSnap: [
          { src: "/frontend-work-images/Picture12.png", alt: "content-upload" },
          {
            src: "./frontend-work-images/Picture13.png",
            alt: "data-visualization",
            style: "width: 90%",
          },
          {
            src: "./frontend-work-images/Picture14.png",
            alt: "data-visualization",
            style: "width: 90%",
          },
          {
            src: "./frontend-work-images/Picture15.png",
            alt: "data-visualization",
            style: "width: 90%",
          },
        ],
      },
    ],

    challenges: [
      {
        title: "Merge Conflicts",
        description:
          "I regularly encountered merge conflicts during collaborative development. I resolved by reviewing carefully, learning about github commands syncing with teammates, and maintaining clean commit histories.",
      },
      {
        title: "Inconsistent Data",
        description:
          "There were a lot of inconsistency while uploading data in visualization toolkit. I solved data inconsistency by writing codes for validation and sanitization of data.",
      },
      {
        title: "Responsive Design Issues",
        description:
          "Fixed mobile layout problems with custom media queries and rigorous cross-browser/device testing.",
      },
    ],
  },
};

// Render function
function renderWorkExperience(contentKey) {
  const content = workExperienceData[contentKey];
  const container = document.querySelector(".project-list");
  container.innerHTML = ""; // clear previous content

  const heading = document.createElement("h2");
  heading.textContent = "Work Details";
  container.appendChild(heading);

  // Intro paragraph
  const intro = document.createElement("p");
  intro.textContent = content.introParagraph;
  intro.style.marginBottom = "2rem";
  container.appendChild(intro);

  // Soft Skills
  const softDiv = document.createElement("div");
  softDiv.style.margin = "2rem 0 2rem 0";
  softDiv.innerHTML = `
    <hr class="divider"/>
    <h3>Soft Skills Gained:</h3>
    <p>${content.softSkills}</p>
    <h3>Technical Skills Gained:</h3>
    <p>${content.technicalSkills}</p>
  `;
  container.appendChild(softDiv);

  // Specific rendering logic per content type
  if (contentKey === "operationAssociate") {
    // Responsibilities with nested lists
    const respDiv = document.createElement("div");
    respDiv.classList.add("project-item");

    let responsibilitiesHTML =
      '    <hr class="divider"/><h4>Key Responsibilites</h4><ul>';
    content.responsibilities.forEach((section) => {
      responsibilitiesHTML += `<li><strong>${section.title}</strong><ul>`;
      section.points.forEach((point) => {
        responsibilitiesHTML += `<li>${point}</li>`;
      });
      responsibilitiesHTML += "</ul></li>";
    });
    responsibilitiesHTML += "</ul>";

    respDiv.innerHTML = `
      ${responsibilitiesHTML}
      <hr class="divider"/>
      <h4>Work Snap</h4>
      <img src="${content.workSnap.src}" alt="${content.workSnap.alt}" style="${content.workSnap.style}" />
    `;

    container.appendChild(respDiv);
  } else if (contentKey === "contentCreator") {
    // Responsibilities and Impact & Achievement lists
    const respDiv = document.createElement("div");
    respDiv.classList.add("project-item");

    const responsibilitiesHTML = `
      <hr class="divider"/>
      <h4>Key Responsibilites</h4>
      <ul>
        ${content.responsibilities.map((item) => `<li>${item}</li>`).join("")}
      </ul>
      <hr class="divider"/>
      <h4>Impact and Achievement</h4>
      <ul>
        ${content.impactAchievement.map((item) => `<li>${item}</li>`).join("")}
      </ul>
    `;
    respDiv.innerHTML = responsibilitiesHTML;
    container.appendChild(respDiv);
  } else if (contentKey === "frontendIntern") {
    // Projects
    content.projects.forEach((project) => {
      const projDiv = document.createElement("div");
      projDiv.classList.add("project-item");

      const respHTML = project.responsibilities
        .map((item) => `<li>${item}</li>`)
        .join("");

      let snapsHTML = "";
      project.workSnap.forEach((img) => {
        const style = img.style ? `style="${img.style}"` : "";
        snapsHTML += `<img src="${img.src}" alt="${img.alt}" ${style} />`;
      });

      projDiv.innerHTML = `
        <hr class="divider"/>
        <h3>${project.title}</h3>
        <div class="project-meta">
          <span class="year">${project.year}</span>
          <span class="category">${project.category}</span>
        </div>
        <h4>Key Responsibilites</h4>
        <ul>${respHTML}</ul>
        <h4>Work Snap</h4>
        <div>${snapsHTML}</div>
      `;

      container.appendChild(projDiv);
    });

    // Challenges
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
