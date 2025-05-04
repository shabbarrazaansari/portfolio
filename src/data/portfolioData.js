export const portfolioData = {
  personal: {
    name: "Shabbar Ansari",
    title: "Full Stack Developer | API Integration Specialist",
    bio: "Full Stack Developer experienced in building B2B and B2C e-commerce platforms with a focus on backend APIs, React-based UIs, and third-party service integration.",
    tagline: "Building scalable, full-stack web applications with modern tools.",
    contact: {
      email: "shabbaransari98@gmail.com",
      phone: "+91 809001210",
      linkedin: "http://linkedin.com/in/shabbar-ansari-050660212"
    }
  },
  
  skills: [
    {
      category: "Languages",
      items: ["JavaScript", "TypeScript", "Python", "C++"]
    },
    {
      category: "Frontend",
      items: ["HTML", "CSS", "Bootstrap", "React"]
    },
    {
      category: "Backend",
      items: ["Node.js", "Express.js"]
    },
    {
      category: "Databases",
      items: ["MySQL", "MongoDB"]
    },
    {
      category: "Dev Tools",
      items: ["Git", "GitHub", "Postman"]
    },
    {
      category: "Cloud",
      items: ["AWS"]
    }
  ],
  
  projects: [
    {
      id: 1,
      title: "Group Chat App",
      description: "Real-time messaging, group creation, admin management, built with MVC structure.",
      technologies: ["Node.js", "Express.js", "Socket.io", "MongoDB"],
      github: "https://github.com/shabbarrazaansari/chatAppbackend",
      image: "/images/chat-app.svg"
    },
    {
      id: 2,
      title: "Expense Tracker",
      description: "Expense management with Razorpay integration, JWT authentication, and Sequelize ORM.",
      technologies: ["React", "Node.js", "Express.js", "MySQL", "Sequelize"],
      github: "https://github.com/shabbarrazaansari/chatAppbackend",
      image: "/images/expense-tracker.svg"
    }
  ],
  
  experience: [
    {
      id: 1,
      company: "Codenia Technologies LLP",
      position: "Full Stack Developer",
      period: "May 2024 – Present",
      responsibilities: [
        "Built and maintained e-commerce platforms",
        "Integrated APIs (DTDC, Delhivery, XpressBees, WooCommerce, Amazon, Shopify)",
        "Added PhonePe wallet gateway"
      ]
    },
    {
      id: 2,
      company: "IBM",
      position: "Intern",
      period: "Aug 2022 – Oct 2022",
      responsibilities: [
        "Developed RESTful APIs using Node.js, Express.js, MySQL"
      ]
    }
  ]
};

export default portfolioData;