// projectdetails1.js
export const projectDetails1 = {
  title: "Project Details",
  description: [
    `This project is a compilation of hands-on cybersecurity labs completed during the Cisco Cyber Threat Management course. It covers the full spectrum of threat management from policy creation and compliance mapping to digital forensics, incident response, vulnerability assessment, and disaster recovery planning.`,
    `The labs are structured into six modules, each focusing on a specific domain of cybersecurity. These projects simulate real-world scenarios faced by security analysts, incident responders, and governance officers, providing practical experience with industry tools, frameworks, and best practices.`,
  ],
  skills: [
    "Policy writing & compliance mapping",
    "Network diagnostics & protocol analysis",
    "Threat intelligence & malware investigation",
    "Vulnerability assessment & CVSS interpretation",
    "Risk management & control implementation",
    "Incident response & digital forensics",
    "Disaster recovery planning & testing",
  ],
  modules: [
    {
      title: "Module 1: Governance and Compliance",
      link: "https://github.com/kre-tikaa/cisco_cyber_threat_management_course_projects/blob/main/Module1_Governance_and_Compliance",
      focus: "Policies, compliance, and cybersecurity ethics",
      labs: [
        "Develop Cybersecurity Policies and Procedures",
        "Recommend Security Measures to Meet Compliance Requirements",
        "Create Your Personal Code of Ethical Conduct",
      ],
    },
    {
      title: "Module 2: Network Security Testing",
      link: "https://github.com/kre-tikaa/cisco_cyber_threat_management_course_projects/blob/main/Module2_Network_Security_Testing",
      focus: "Policies, compliance, and cybersecurity ethics",
      labs: [
        "Use Diagnostic Commands (Packet Tracer)",
        "Compare Telnet and SSH Traffic (Wireshark)",
      ],
    },
    {
      title: "Module 3: Threat Intelligence",
      link: "https://github.com/kre-tikaa/cisco_cyber_threat_management_course_projects/blob/main/Module3_Threat_Intelligence",
      focus:
        "Threat actor analysis, CVEs, threat feeds, and cybersecurity reports",
      labs: [
        "Evaluate Cybersecurity Reports",
        "Identify Relevant Threat Intelligence",
      ],
    },
    {
      title: "Module 4: Endpoint Vulnerability Assessment",
      link: "https://github.com/kre-tikaa/cisco_cyber_threat_management_course_projects/blob/main/Module4_Endpoint_Vulnerability_Assessment",
      focus:
        "Reading vulnerability assessment reports, CVSS analysis, and remediation",
      labs: ["Evaluate Vulnerabilities (NCATS Cyber Hygiene Report)"],
    },
    {
      title: "Module 5: Risk Management and Security Controls",
      link: "https://github.com/kre-tikaa/cisco_cyber_threat_management_course_projects/blob/main/Module5_Risk_Management_and_Security_Controls",
      focus:
        "Risk analysis, threat prioritization, and layered security implementation",
      labs: [
        "Risk Management",
        "Risk Analysis",
        "Security Controls Implementation",
      ],
    },
    {
      title: "Module 6: Digital Forensics and Incident Response",
      link: "https://github.com/kre-tikaa/cisco_cyber_threat_management_course_projects/blob/main/Module6_Digital_Forensics_and_Incident_Response",
      focus:
        "Malware analysis, evidence gathering, recovery planning, and handling real-world incidents",
      labs: [
        "Gather System Information After an Incident",
        "Attack Analysis",
        "Incident Handling",
        "Packet Tracer – Investigate Disaster Recovery",
        "Recommend Disaster Recovery Measures",
      ],
    },
  ],
  tools: [
    "Cisco Packet Tracer",
    "Wireshark",
    "ANY.RUN Malware Sandbox",
    "MITRE ATT&CK Framework",
    "CVSS & CVE Databases",
    "TFTP Backup/Restore",
    "VirusTotal, Cisco Talos",
    "Risk Analysis Metrics (ALE, SLE, ARO)",
    "Linux Terminal for log analysis",
  ],
  insights: [
    "Strengthened policy adoption and compliance by creating clear, actionable security policies.",
    "Improved network security posture by identifying risks in unencrypted Telnet sessions and implementing SSH as a secure alternative.",
    "Enhanced threat detection capabilities by mapping malware behavior to MITRE ATT&CK tactics, enabling more accurate incident classification.",
  ],
  images: [
    { title: "Wireshark", src: "./project-details-img/Picture1.png" },
    {
      title: "VirusTotal",
      src: "./project-details-img/Picture2.png",
      fullWidth: true,
    },
    { title: "Risk Analysis", src: "./project-details-img/Picture3.png" },
  ],
};
