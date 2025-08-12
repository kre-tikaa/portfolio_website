export const frontendIntern = {
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
};
