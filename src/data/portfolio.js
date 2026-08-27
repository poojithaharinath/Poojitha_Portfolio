export const portfolioData = {
  personal: {
    name: "Bollu Poojitha",
    title: "AI Engineer & RAG Systems Architect",
    roleTitles: [
      "AI Engineer",
      "RAG Systems Architect",
      "Generative AI Engineer",
      "Full-Stack Developer"
    ],
    location: "Tirupati, Andhra Pradesh, India",
    phone: "+91 9010526462",
    email: "poojithaharinatha@gmail.com",
    linkedin: "https://linkedin.com/in/bollu-poojitha",
    github: "https://github.com/poojithaharinath",
    resumeUrl: "/resume.pdf",
    valueProposition: "Architecting production-ready Generative AI systems, high-accuracy RAG pipelines, and cloud-native automation layers to solve complex enterprise data challenges."
  },
  stats: [
    { label: "Document Lookup Time", value: "-60%", description: "Achieved via custom LangChain RAG pipeline" },
    { label: "Admin Overhead Saved", value: "80%", description: "Automated via Teams & Graph API workflows" },
    { label: "Post-Quantum Cryptography", value: "Kyber & Falcon", description: "Secured EMI medical blockchain framework" },
    { label: "Academic Excellence", value: "8.45 CGPA", description: "Master of Technology in CSE" }
  ],
  about: {
    summary: `AI Engineer specializing in Generative AI system design, Retrieval-Augmented Generation (RAG) architectures, and cloud-based automation. Hands-on experience designing document-processing pipelines, vector search architectures, and LLM integration layers using Python, LangChain, and GCP services. Strong foundation in scalable system design, data engineering, and full-stack delivery (React.js, FastAPI, SQL). Focused on translating AI architecture decisions — model selection, retrieval strategy, embedding storage, prompt design — into production-ready, secure solutions.`
  },
  skills: [
    {
      category: "Cloud & Architecture",
      icon: "Cloud",
      items: [
        "Google Cloud Platform (GCP)",
        "AWS (S3, CloudFront)",
        "System & Solution Architecture",
        "Vector Database Design (Chroma, FAISS)",
        "RAG Architecture",
        "Scalable Pipeline Design"
      ]
    },
    {
      category: "AI & Generative AI",
      icon: "Brain",
      items: [
        "LLM Integration",
        "Prompt Engineering",
        "LangChain",
        "Gemini API",
        "Azure OpenAI",
        "Semantic Search"
      ]
    },
    {
      category: "Programming & Data",
      icon: "Code2",
      items: [
        "Python",
        "PySpark",
        "NumPy",
        "Pandas",
        "SQL",
        "MySQL",
        "PostgreSQL",
        "ETL Pipelines",
        "Data Transformation"
      ]
    },
    {
      category: "Web & Full Stack",
      icon: "Globe",
      items: [
        "React.js",
        "FastAPI",
        "Node.js",
        "REST APIs",
        "JavaScript",
        "HTML5/CSS3"
      ]
    },
    {
      category: "Automation & Workflows",
      icon: "Workflow",
      items: [
        "Power Automate",
        "Microsoft Graph API",
        "Microsoft Planner",
        "n8n",
        "Streamlit"
      ]
    },
    {
      category: "Dev Tools & Practices",
      icon: "Wrench",
      items: [
        "Git & GitHub",
        "VS Code",
        "PyCharm",
        "Agile / JIRA",
        "Postman",
        "JSON"
      ]
    }
  ],
  experience: [
    {
      role: "Junior AI Engineer",
      company: "Hithlaksh Solutions Private Limited",
      period: "April 2025 – Present",
      type: "Full-time",
      location: "India",
      highlights: [
        "Built AI-powered web applications integrating Python backends with React.js frontends and MySQL databases for enterprise data workflows.",
        "Collaborated in Agile sprints to gather requirements, design AI features, and deliver production-ready components on schedule.",
        "Developed and maintained technical documentation, performed code reviews via GitHub, and ensured UI/UX responsiveness.",
        "Contributed AI engineering insights, including architecture and tooling recommendations, to product planning sessions."
      ],
      tags: ["Python", "React.js", "MySQL", "AI Workflows", "Agile"]
    },
    {
      role: "Software Developer Intern",
      company: "Adrasti",
      period: "May 2025 – Jul 2025",
      type: "Internship",
      location: "India",
      highlights: [
        "Enhanced interactive 3D web systems for e-commerce platforms, contributing to scalable, user-facing product features.",
        "Supported system testing, debugging, and performance optimization across client web systems."
      ],
      tags: ["3D Web Components", "JavaScript", "Performance Optimization", "Testing"]
    },
    {
      role: "AI & Automation Intern",
      company: "Hithlaksh Solutions Private Limited",
      period: "Aug 2024 – Jan 2025",
      type: "Internship",
      location: "India",
      highlights: [
        "Developed Python-based automation solutions to process data and streamline real-time workflows.",
        "Integrated REST APIs to enable automation and seamless data flow across systems.",
        "Collaborated with cross-functional teams on coding, debugging, testing, and SDLC practices."
      ],
      tags: ["Python", "REST APIs", "Automation", "SDLC"]
    }
  ],
  projects: [
    {
      id: "rag-assistant",
      title: "Multi-Format AI Data Assistant & RAG Pipeline",
      featured: true,
      subtitle: "Production-grade multi-document indexing & conversational Q&A system",
      category: "Generative AI / RAG",
      summary: "Production-ready RAG assistant to process, index, and intelligently analyze multi-format enterprise documents (PDF, Excel, Word).",
      impactStats: [
        { label: "Lookup Speedup", value: "60% Reduction" },
        { label: "Doc Support", value: "PDF, Excel, Docx" },
        { label: "Retrieval", value: "FAISS & Chroma" }
      ],
      highlights: [
        "Built an intuitive Streamlit frontend supporting multi-file uploads and real-time conversational Q&A — reduced document lookup time by 60%.",
        "Designed document preprocessing/chunking architecture with LangChain for structured (Excel) and unstructured (PDF/Docx) content.",
        "Integrated Gemini API for high-accuracy text embeddings and contextual response generation.",
        "Architected vector storage/retrieval layer (Chroma/FAISS) for ultra-fast semantic search across enterprise corpora."
      ],
      tech: ["Python", "Streamlit", "LangChain", "Gemini API", "Chroma", "FAISS", "Vector DBs"],
      github: "https://github.com/poojithaharinath",
      demo: "https://github.com/poojithaharinath"
    },
    {
      id: "meeting-intelligence",
      title: "Enterprise Meeting Intelligence & Automation System",
      featured: true,
      subtitle: "Automated transcript extraction, LLM summarization & Planner task sync",
      category: "AI Automation & Enterprise",
      summary: "End-to-end automated system to capture, process, and extract intelligence from Microsoft Teams meetings.",
      impactStats: [
        { label: "Admin Overhead", value: "80% Reduction" },
        { label: "Integration", value: "Teams & Planner" },
        { label: "Summarizer", value: "Microsoft Copilot" }
      ],
      highlights: [
        "Power Automate flows + Microsoft Graph API to auto-retrieve .vtt transcripts upon meeting completion.",
        "LLM-based summarization to auto-generate meeting summaries, key decisions, and action items.",
        "Auto-created and assigned tasks in Microsoft Planner from extracted action items.",
        "Reduced post-meeting admin overhead by 80%, completely eliminating manual meeting documentation."
      ],
      tech: ["Power Automate", "Microsoft Graph API", "Cloud Flows", "Microsoft Planner", "Copilot", "LLMs"],
      github: "https://github.com/poojithaharinath",
      demo: "https://github.com/poojithaharinath"
    },
    {
      id: "raisely-salesforce",
      title: "Raisely to Salesforce Data Integration Automation",
      featured: false,
      category: "Cloud & Data Engineering",
      summary: "Automated sync of donor and fundraising data from Raisely to Salesforce CRM.",
      highlights: [
        "Power Automate flows connecting MariaDB to Salesforce via On-premises Data Gateway.",
        "Engineered data mapping for Contacts, Accounts, Campaigns, Opportunities, and Payments.",
        "Worked with Azure Data Factory and Azure Databricks for enterprise data processing & validation."
      ],
      tech: ["Power Automate", "MariaDB", "Azure Data Factory", "Azure Databricks", "SQL", "Salesforce API"],
      github: "https://github.com/poojithaharinath",
      demo: "https://github.com/poojithaharinath"
    },
    {
      id: "ai-workflow-assistant",
      title: "AI Workflow Assistant & Digital Automation",
      featured: false,
      category: "Workflow Automation",
      summary: "Automated gold loan digital processes for India Infoline using AI-driven workflow assistants.",
      highlights: [
        "Designed and implemented automated business workflows using n8n and Power Automate.",
        "Built intelligent pipelines for data capture, validation, and distribution across business systems, drastically reducing manual processing."
      ],
      tech: ["n8n", "Power Automate", "Python", "REST APIs", "SQL"],
      github: "https://github.com/poojithaharinath",
      demo: "https://github.com/poojithaharinath"
    },
    {
      id: "quantum-blockchain",
      title: "Quantum-Safe Blockchain Framework for Electronic Medical Info",
      featured: false,
      category: "Blockchain & Security",
      summary: "Quantum-resistant blockchain framework securing Electronic Medical Information against future cryptographic threats.",
      highlights: [
        "Implemented Kyber and Falcon post-quantum cryptographic algorithms for authentication and data integrity.",
        "Achieved quantum-resistant security with minimal computational and communication overhead."
      ],
      tech: ["Python", "Blockchain", "Kyber Algorithm", "Falcon Algorithm", "Cryptography"],
      github: "https://github.com/poojithaharinath",
      demo: "https://github.com/poojithaharinath"
    }
  ],
  education: [
    {
      degree: "Master of Technology (M.Tech)",
      field: "Computer Science and Engineering",
      institution: "Siddartha Educational Academy Group of Institutions, Tirupati",
      period: "Jun 2024 – May 2026",
      score: "CGPA: 8.45 / 10",
      details: "Relevant Coursework: Advanced Algorithms, Machine Learning, Cloud Computing, Advanced Database Management Systems, Software Engineering Principles."
    },
    {
      degree: "Bachelor of Technology (B.Tech)",
      field: "Computer Science and Engineering",
      institution: "Siddartha Educational Academy Group of Institutions, Tirupati",
      period: "Jun 2020 – May 2024",
      score: "CGPA: 8.34 / 10",
      details: "Relevant Coursework: Data Structures & Algorithms, Object-Oriented Programming, DBMS, Operating Systems, Computer Networks."
    },
    {
      degree: "Intermediate (MPC)",
      field: "Mathematics, Physics, Chemistry",
      institution: "Sri Chaitanya Junior College, Tirupati",
      period: "Jun 2018 – May 2020",
      score: "CGPA: 8.98 / 10",
      details: "State board higher secondary education with focus on advanced mathematics and sciences."
    }
  ]
};
