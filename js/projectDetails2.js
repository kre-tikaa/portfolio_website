// projectDetails2.js
export const projectDetails2 = {
  title: "Cisco Networking Basics – Packet Tracer Labs",
  description: [
    `This project is a compilation of hands-on networking labs completed during the Cisco Networking Basics course. It covers foundational concepts such as IP addressing, LAN/WAN configuration, routing, and essential network services like DHCP, NAT, HTTP, and FTP.`,
    `The labs simulate real-world networking scenarios, providing practical experience with network setup, device configuration, packet analysis, and troubleshooting using Cisco Packet Tracer.`,
  ],
  skills: [
    "LAN & WAN configuration",
    "IPv4 addressing (static/DHCP)",
    "Network troubleshooting & diagnostics",
    "Routing basics & NAT configuration",
    "Packet analysis in simulation mode",
    "Service configuration (HTTP, FTP, DHCP)",
    "MAC & IP address interpretation",
  ],
  modules: [
    {
      title: "Lab 1: Configure a Wireless Router and Client",
      link: "https://github.com/kre-tikaa/cisco_network_basics_projects/blob/main/Lab1_Packet_Tracer_Configure_a_Wireless_Router_and_Client.pdf",
      focus:
        "Connect and configure a home wireless router, set up wired/wireless clients, and verify internet connectivity.",
    },
    {
      title: "Lab 2: Connect to a Web Server",
      link: "https://github.com/kre-tikaa/cisco_network_basics_projects/blob/main/Lab2_Packet_Tracer_Connect_to_a_Web_Server.pdf",
      focus:
        "Test connectivity to a web server using both IP address and domain name.",
    },
    {
      title: "Lab 3: Configure DHCP on a Wireless Router",
      link: "https://github.com/kre-tikaa/cisco_network_basics_projects/blob/main/Lab3_Packet_Tracer_Configure_DHCP_on_a_Wireless_Router.pdf",
      focus:
        "Modify DHCP settings and configure multiple clients to obtain IP addresses automatically.",
    },
    {
      title: "Lab 4: Examine NAT on a Wireless Router",
      link: "https://github.com/kre-tikaa/cisco_network_basics_projects/blob/main/Lab4_Packet_Tracer_Examine_NAT_on_a_Wireless_Router.pdf",
      focus:
        "Observe NAT translation process and how private IPs are mapped to public IPs for internet access.",
    },
    {
      title: "Lab 5: Identify MAC and IP Addresses",
      link: "https://github.com/kre-tikaa/cisco_network_basics_projects/blob/main/Lab5_Packet_Tracer_Identify_MAC_and_IP_Addresses.pdf",
      focus:
        "Inspect Ethernet frames and IP packets for local and remote communications.",
    },
    {
      title: "Lab 6: Observe Traffic Flow in a Routed Network",
      link: "https://github.com/kre-tikaa/cisco_network_basics_projects/blob/main/Lab6_Packet_Tracer_Observe_Traffic_Flow_in_a_Routed_Network.pdf",
      focus:
        "Compare network traffic in unrouted vs. routed LANs to understand performance benefits.",
    },
    {
      title: "Lab 7: Create a LAN",
      link: "https://github.com/kre-tikaa/cisco_network_basics_projects/blob/main/Lab7_Packet_Tracer_Create_a_LAN.pdf",
      focus:
        "Build a LAN topology, configure IPv4 addressing, and verify device connectivity.",
    },
    {
      title: "Lab 8: Observe Web Request",
      link: "https://github.com/kre-tikaa/cisco_network_basics_projects/blob/main/Lab8_Packet_Tracer_Observe_Web_Request.pdf",
      focus: "Capture and analyze HTTP traffic between client and server.",
    },
    {
      title: "Lab 9: Use FTP Services",
      link: "https://github.com/kre-tikaa/cisco_network_basics_projects/blob/main/Lab9_Packet_Tracer_Use_FTP_Services.pdf",
      focus: "Upload, download, rename, and delete files using FTP commands.",
    },
    {
      title: "Lab 10: Use Telnet and SSH",
      link: "https://github.com/kre-tikaa/cisco_network_basics_projects/blob/main/Lab10_Packet_Tracer_Use_Telnet_and_SSH.pdf",
      focus: "Using Telnet & SSH for accessing remote device",
    },
  ],
  tools: [
    "Cisco Packet Tracer",
    "Networking Protocols: DHCP, NAT, ICMP, HTTP, FTP",
    "Command-line tools: ping, ipconfig, tracert, ftp",
    "Packet Tracer Simulation Mode",
  ],
  insights: [
    "Identified End devices and Router's MAC address and IP address for different network communication",
    "Improved troubleshooting skills by identifying DNS issues and fixing connectivity errors.",
    "Developed an understanding of packet flow and ARP behavior in routed and unrouted environments.",
    "Gained practical experience configuring DHCP, HTTP, and FTP services.",
  ],
  images: [
    {
      title: "DHCP Topology",
      src: "./project-details-img/Picture7.png",
    },
    {
      title: "Use PING",
      src: "./project-details-img/Picture6.png",
    },
    {
      title: "Identify MAC and IP address",
      src: "./project-details-img/Picture8.png",
    },
  ],
};
