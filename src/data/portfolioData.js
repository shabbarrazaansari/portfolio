export const portfolioData = {
  personal: {
    name: "Shabbar Ansari",
    title: "Full Stack Developer",
    subtitle: "API Integration Specialist",
    bio: "Full Stack Developer with hands-on experience building B2B and B2C e-commerce platforms. I focus on backend APIs, React-based UIs, and seamless third-party service integrations that ship on time and scale.",
    taglines: [
      "Building scalable full-stack web applications.",
      "Specializing in API integrations & backend systems.",
      "Turning ideas into production-ready products.",
      "React · Next.js · Node.js · MongoDB · AWS"
    ],
    contact: {
      email: "shabbaransari98@gmail.com",
      phone: "+91 8090012101",
      linkedin: "http://linkedin.com/in/shabbaransari",
      github: "https://github.com/shabbarrazaansari"
    }
  },

  skills: [
    { category: "Languages", icon: "code", items: ["JavaScript", "TypeScript", "Python", "C++"] },
    { category: "Frontend", icon: "layout", items: ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"] },
    { category: "Backend", icon: "server", items: ["Node.js", "Express.js", "REST APIs"] },
    { category: "Databases", icon: "database", items: ["MySQL", "MongoDB", "Sequelize"] },
    { category: "Cloud & Tools", icon: "cloud", items: ["AWS", "Git", "GitHub", "Postman"] },
    { category: "Integrations", icon: "plug", items: ["Razorpay", "PhonePe", "DTDC", "Delhivery", "Shopify", "WooCommerce"] }
  ],

  projects: [
    {
      id: 1,
      title: "Claude Skool — AI SaaS Platform",
      description: "A production-grade AI-powered SaaS platform built with Next.js and Claude AI. Features user authentication, subscription management, and interactive AI-driven learning modules.",
      technologies: ["Next.js", "Claude AI", "TypeScript", "Tailwind CSS", "Stripe"],
      live: "https://claude-skool-saas.vercel.app/",
      github: null,
      featured: true,
      color: "#64ffda"
    },
    {
      id: 2,
      title: "AutoBid Free — Auction Platform",
      description: "A real-time bidding and auction web application with live updates, user dashboards, and automated bid management. Clean UI with smooth UX flows for buyers and sellers.",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      live: "https://autobidfree-l.vercel.app/",
      github: null,
      featured: true,
      color: "#f97316"
    },
    {
      id: 3,
      title: "Group Chat App",
      description: "Real-time group messaging application with room creation, admin management, and live notifications. Built with an MVC architecture and Socket.io for instant messaging.",
      technologies: ["Node.js", "Express.js", "Socket.io", "MongoDB"],
      live: null,
      github: "https://github.com/shabbarrazaansari/chatAppbackend",
      featured: false,
      color: "#a78bfa"
    },
    {
      id: 4,
      title: "Expense Tracker",
      description: "Full-featured expense management app with Razorpay payment integration, JWT-based authentication, budget analytics, and ORM-backed MySQL persistence.",
      technologies: ["React", "Node.js", "Express.js", "MySQL", "Sequelize", "Razorpay"],
      live: null,
      github: "https://github.com/shabbarrazaansari/chatAppbackend",
      featured: false,
      color: "#fb7185"
    }
  ],

  experience: [
    {
      id: 1,
      company: "Codenia Technologies LLP",
      position: "Full Stack Developer",
      period: "May 2024 – Present",
      type: "Full-time",
      responsibilities: [
        "Built and maintained B2B & B2C e-commerce platforms serving thousands of users",
        "Integrated shipping APIs: DTDC, Delhivery, XpressBees for automated order fulfillment",
        "Connected marketplace APIs: WooCommerce, Amazon, Shopify for multi-channel selling",
        "Implemented PhonePe wallet gateway for seamless in-app payments"
      ]
    },
    {
      id: 2,
      company: "IBM",
      position: "Software Engineering Intern",
      period: "Aug 2022 – Oct 2022",
      type: "Internship",
      responsibilities: [
        "Developed and tested RESTful APIs using Node.js, Express.js, and MySQL",
        "Collaborated with senior engineers on backend service architecture",
        "Wrote API documentation and integration test cases"
      ]
    }
  ]
};

export default portfolioData;
