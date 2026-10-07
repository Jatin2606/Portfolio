export interface ProjectDetail {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  summary: string;
  role: string;
  problem: string;
  solution: string;
  architecture: {
    overview: string;
    components: string[];
    dataFlow: string;
  };
  technicalHighlights: string[];
  concurrencyAndReliability?: string[];
  benchmarks?: {
    metric: string;
    value: string;
    details: string;
  }[];
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  department?: string;
  location: string;
  period: string;
  current?: boolean;
  type: string;
  highlights: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  technologies: string[];
}

export interface EducationItem {
  degree: string;
  specialization?: string;
  institution: string;
  location: string;
  period: string;
  gpa: string;
  maxGpa: string;
  status: string;
  coursework?: string[];
  awards?: string[];
}

export interface CertificationItem {
  name: string;
  issuer: string;
  link: string;
  badgeType: "credly" | "coursera" | "external";
  description?: string;
  skills?: string[];
}

export interface PublicationItem {
  title: string;
  conference: string;
  year: string;
  publisher: string;
  description: string;
  topics: string[];
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    usedIn: string[];
    level?: string;
  }[];
}

export const PERSONAL_INFO = {
  name: "Jatin Shivaprakash",
  role: "Software Engineer",
  subRole: "Backend · Distributed Systems · Cloud-Native & AI/MCP",
  location: "Gainesville, FL",
  email: "jatinshivaprakash43@gmail.com",
  phone: "+1 (352) 477-3386",
  github: "https://github.com/Jatin2606",
  linkedin: "https://www.linkedin.com/in/jatinshivaprakash/",
  resumePdfUrl: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/resume.pdf`,
  bioShort: "Software Engineer with 3+ years of experience in backend development, distributed systems, APIs, databases, and cloud-native applications across Thoughtworks and DXC Technology.",
  bioFull: [
    "I am a Software Engineer with 3+ years of experience specializing in backend systems, distributed architectures, APIs, databases, and cloud-native delivery. Currently pursuing an M.S. in Computer Science at the University of Florida.",
    "My professional journey progressed from developing production REST services and optimizing PostgreSQL at DXC Technology to owning backend features, secure integrations with Model Context Protocol (MCP) and Tool Calling, and deployment workflows at Thoughtworks.",
    "I bring strong problem solving, feature ownership, and cross-functional collaboration across QA, platform, and engineering teams, delivering reliable backend systems, secure integrations, scalable services, and production-ready cloud systems."
  ],
  stats: [
    { label: "Experience", value: "3+ Years", highlight: "Thoughtworks & DXC Technology" },
    { label: "Ledger Engine", value: "340 req/s", highlight: "56ms p99 Concurrency Safety" },
    { label: "Production Scale", value: "50K+ Req/Mo", highlight: "Docker, K8s, AWS & OpenTelemetry" },
    { label: "AI & Integrations", value: "MCP & RAG", highlight: "Model Context Protocol & pgvector" }
  ]
};

export const CERTIFICATIONS: CertificationItem[] = [
  {
    name: "AWS Academy Cloud Operations",
    issuer: "Amazon Web Services (AWS)",
    link: "https://www.credly.com/badges/a866c625-d153-4a57-8372-7b2a0de80e56/linked_in_profile",
    badgeType: "credly",
    description: "Cloud infrastructure provisioning, systems operations, automated deployments, monitoring, and security on AWS.",
    skills: ["AWS", "Cloud Operations", "EC2", "RDS", "CloudWatch", "Infrastructure Automation"]
  },
  {
    name: "Machine Learning Specialization",
    issuer: "DeepLearning.AI & Stanford University (Coursera)",
    link: "https://www.coursera.org/account/accomplishments/specialization/7QFYMGD6PKZY?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=s12n",
    badgeType: "coursera",
    description: "Supervised and unsupervised learning, deep neural networks, model optimization, feature engineering, and real-world ML workflows.",
    skills: ["Machine Learning", "Supervised Learning", "Deep Learning", "NumPy", "Scikit-Learn"]
  }
];

export const PUBLICATIONS: PublicationItem[] = [
  {
    title: "Disease Detection in Arecanut using Convolutional Neural Network",
    conference: "2024 International Conference on Advances in Computing, Communication and Applied Informatics (ACCAI)",
    year: "2024",
    publisher: "IEEE",
    description: "Developed and trained deep learning Convolutional Neural Network (CNN) models to classify stem infections (healthy trunk, stem bleeding, and stem cracking) with high accuracy for precision agriculture applications.",
    topics: ["Deep Learning", "CNNs", "Computer Vision", "Precision Agriculture", "IEEE ACCAI 2024"]
  }
];

export const PROJECTS: ProjectDetail[] = [
  {
    id: "ledgerflow",
    title: "LedgerFlow",
    subtitle: "Concurrency-Safe Payment Ledger Engine with Double-Entry Accounting",
    period: "Apr. 2026",
    role: "Backend Architect & Lead Developer",
    summary: "A high-performance payment ledger backend built with Python, FastAPI, SQLAlchemy, and PostgreSQL. Enforces immutable double-entry accounting rules across 3 core workflows (transaction posting, balance tracking, and ledger history), using PostgreSQL row-level locking and idempotency keys.",
    problem: "Financial and wallet services face dangerous double-spending bugs, negative account balances, and ledger desynchronization when processing high-volume concurrent transactions without strict ACID isolation.",
    solution: "Engineered an immutable double-entry ledger that records balanced debit/credit entries for every transaction. Implemented strict database row-level locking via PostgreSQL SELECT ... FOR UPDATE and idempotency keys to guarantee serializable safety without phantom reads or balance corruption.",
    architecture: {
      overview: "Layered domain-driven backend with distinct API route handlers, Pydantic schemas, SQLAlchemy ORM models, and transaction business logic enforcing double-entry invariants.",
      components: [
        "FastAPI Application: RESTful endpoints with OpenAPI schema documentation",
        "Transaction Validator: Verifies minimum two entries, balanced debits/credits, and matching currency",
        "Locking Engine: Orders account IDs deterministically before acquiring row-level locks to prevent deadlocks",
        "Idempotency Cache & Table: Prevents duplicate execution on network retries using client idempotency keys",
        "Automated Test & Benchmark Suite: Locust and k6 load generators validating 340 req/s under 50 concurrent users"
      ],
      dataFlow: "Client POST /api/v1/transactions with idempotency key → Verify idempotency → Deterministically sort account IDs → Acquire row-level locks (SELECT ... FOR UPDATE) → Validate debit/credit equality and balances → Commit atomic ledger entries → Return updated balances."
    },
    technicalHighlights: [
      "Built a payment ledger with Python, FastAPI, PostgreSQL, and REST APIs, implementing double-entry accounting across 3 core workflows: transaction posting, balance tracking, and ledger history.",
      "Implemented concurrency-safe posting with PostgreSQL row-level locking and idempotency keys, eliminating race conditions and overdrafts.",
      "Benchmarked the Dockerized service using pytest and Locust, sustaining 340 requests/second with 56 ms p99 latency.",
      "Structured comprehensive automated testing suites enforcing mathematical debit/credit zero-sum balance invariants."
    ],
    concurrencyAndReliability: [
      "Row-Level Locking: SELECT ... FOR UPDATE on target accounts preventing phantom reads",
      "Deadlock Prevention: Consistent deterministic ascending account ID lock ordering",
      "Network Idempotency: Unique client idempotency keys cached to prevent duplicate charges",
      "ACID Isolation: Atomic multi-row ledger commits with strict balance boundary validation"
    ],
    benchmarks: [
      { metric: "Peak Throughput", value: "340 req/s", details: "Sustained under Locust load generation" },
      { metric: "p99 Latency", value: "56 ms", details: "Measured under 50 concurrent users" },
      { metric: "Average Latency", value: "15 ms", details: "Across 6,750+ benchmark transactions" },
      { metric: "Error Rate", value: "0.00%", details: "Zero concurrency failures or data drift" }
    ],
    technologies: ["Python", "FastAPI", "PostgreSQL", "Docker", "SQLAlchemy", "Pydantic", "Locust", "pytest"],
    githubUrl: "https://github.com/Jatin2606/LedgerFlow",
    featured: true
  },
  {
    id: "feedfl",
    title: "FeedFL",
    subtitle: "AI-Powered Surplus Food Platform with Grounded RAG & PostGIS",
    period: "Jan. 2026 – Apr. 2026",
    role: "Full-Stack & AI Engineer",
    summary: "A production food surplus platform connecting providers with communities in need, engineered with Flutter iOS/Android, FastAPI, PostgreSQL, Supabase, pgvector semantic search, and PostGIS geospatial proximity filtering.",
    problem: "Food recovery networks require immediate discovery of perishable surplus within specific geographic radii, while users require natural language conversational guidance with grounded provider verification.",
    solution: "Engineered and tested a Flutter mobile app with role-based dashboards and a FastAPI backend pairing pgvector semantic vector search with PostGIS geospatial proximity search, Llama-3.1-8B and Mistral fallback routing, reducing query latency by 30% and setup by 40%.",
    architecture: {
      overview: "Hybrid retrieval backend pairing vector semantic embeddings with spatial SQL indexing and Supabase serverless edge compute.",
      components: [
        "Flutter Mobile Client: Role-based dashboards for surplus donors and community recipients",
        "FastAPI Service: REST endpoints handling intake, inventory, and query pipelines",
        "pgvector Semantic Index: Cosine similarity vector search over food provider inventories",
        "PostGIS Geo-Engine: ST_DWithin spatial bounding for proximity-based filtering",
        "Supabase & Edge Functions: Managed PostgreSQL, Edge Functions, and built-in Authentication"
      ],
      dataFlow: "User conversational query → FastAPI embeds text → PostGIS filters bounding perimeter → pgvector retrieves top-k semantic matches → Llama-3.1-8B generates grounded recommendations."
    },
    technicalHighlights: [
      "Developed a grounded RAG chatbot using pgvector Semantic Search with Llama-3.1-8B and Mistral-Small-3.1 fallback, delivering context-aware provider recommendations to 200+ users across 120 Palm Beach County food providers.",
      "Engineered and tested Flutter iOS/Android application with role-based dashboards and FastAPI backend using PostgreSQL, PostGIS, AWS EC2/RDS, Supabase, Edge Functions, and Authentication, reducing latency 30% and setup 40%."
    ],
    benchmarks: [
      { metric: "Query Latency", value: "-30%", details: "Reduced via PostGIS geospatial proximity indexing" },
      { metric: "Setup Time", value: "-40%", details: "Reduced through Supabase & Edge Functions migration" },
      { metric: "Active Scale", value: "200+ Users", details: "Over 120 food providers onboarded in Palm Beach County" }
    ],
    technologies: ["Flutter", "FastAPI", "PostgreSQL", "RAG", "pgvector", "PostGIS", "Supabase", "AWS (EC2, RDS)", "Edge Functions", "Python"],
    githubUrl: "https://github.com/Jatin2606",
    featured: true
  },
  {
    id: "distributed-community-platform",
    title: "Distributed Community Platform",
    subtitle: "High-Throughput Actor-Based Distributed Platform in Go with ProtoActor",
    period: "Aug. 2024 – Dec. 2024",
    role: "Distributed Systems Developer",
    summary: "A 3-layer distributed platform built in Go utilizing the ProtoActor framework and REST APIs. Features a clean separation of HTTP API handling, actor messaging, and simulation workloads to deliver concurrent execution under heavy loads.",
    problem: "Traditional monolithic web backends struggle with thread contention, blocking I/O, and complex state synchronization when handling thousands of concurrent user interactions.",
    solution: "Engineered an asynchronous, message-driven architecture using Go and ProtoActor. Deployed an EngineActor to manage global state and routing, decoupled UserActors for individual client sessions, and built a multi-process load simulator to evaluate responsiveness.",
    architecture: {
      overview: "3-layer distributed actor model cleanly separating external HTTP API ingress, internal actor mailboxes/message dispatch, and a standalone load simulation engine.",
      components: [
        "API Gateway Layer: Go HTTP route handlers parsing incoming REST requests and delegating to the actor system",
        "EngineActor: Central coordinator managing sub-actor lifecycles, user registries, and cross-actor routing",
        "UserActor: Isolated state machine for each connected entity, handling timeline aggregation and karma updates",
        "Simulator Engine: Multi-process client simulator generating thousands of synthetic user activities for stress testing"
      ],
      dataFlow: "Client HTTP Request → Go REST Handler translates to Actor Message → Context.Request to EngineActor → Dispatched to Target UserActor mailbox → Actor processes state update without locks → Synchronous response returned to HTTP client."
    },
    technicalHighlights: [
      "Engineered a 3-layer distributed platform in Go with ProtoActor and REST APIs, separating API handling, actor messaging, and simulation workloads to improve scalability and maintainability.",
      "Designed and load-tested REST APIs for community interactions, using actor-based concurrency and multi-process simulation to evaluate responsiveness under thousands of user activities."
    ],
    benchmarks: [
      { metric: "Concurrency Model", value: "ProtoActor", details: "Zero-mutex message passing in Go" },
      { metric: "Architecture", value: "3 Layers", details: "API Gateway, Actor Dispatch, Simulator" }
    ],
    technologies: ["Go", "ProtoActor", "REST APIs", "Distributed Systems", "Actor Model", "Concurrency", "Goroutines"],
    githubUrl: "https://github.com/Jatin2606/Reddit_clone",
    featured: false
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "thoughtworks",
    role: "Software Engineer",
    organization: "Thoughtworks",
    location: "USA",
    period: "Jun 2025 – Present",
    current: true,
    type: "Full-Time Industry Experience",
    highlights: [
      "Own backend transaction features with Python, FastAPI, PostgreSQL, Redis, and Kafka, delivering 10+ REST endpoints from requirements clarification through implementation, testing, integration, and production validation.",
      "Develop backend integrations using Model Context Protocol and Tool Calling, exposing authenticated internal service actions through validated interfaces while reducing integration handling time by 12%.",
      "Secure MCP-triggered service requests with OAuth 2.0, JWT, RBAC, and backend validation, enforcing permission-aware access, structured payloads, deterministic business rules, and consistent error handling across application integrations.",
      "Validate backend releases through pytest, Postman, API Testing, and Regression Testing, maintaining 78% automated coverage while verifying service behavior, permissions, integrations, and production deployment readiness.",
      "Deploy containerized backend services with Docker, Kubernetes, AWS, CI/CD, and OpenTelemetry, supporting 50K+ monthly API requests while partnering with platform engineers on reliability and observability.",
      "Streamline build-failure investigation with Jenkins, GitHub Actions, Structured Logging, and PyCharm AI Assistant, reducing triage time by 16% through faster diagnostics, deployment analysis, and runbook-driven troubleshooting."
    ],
    metrics: [
      { label: "Monthly API Traffic", value: "50K+ Requests" },
      { label: "Integration Handling", value: "-12% Time" },
      { label: "Automated Coverage", value: "78% Tested" },
      { label: "Build Triage", value: "-16% Time" }
    ],
    technologies: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "Kafka",
      "Model Context Protocol (MCP)",
      "Tool Calling",
      "OAuth 2.0",
      "JWT",
      "RBAC",
      "Docker",
      "Kubernetes",
      "AWS",
      "OpenTelemetry",
      "pytest",
      "Postman",
      "Jenkins",
      "GitHub Actions",
      "PyCharm AI Assistant"
    ]
  },
  {
    id: "dxc-technology",
    role: "Software Engineer",
    organization: "DXC Technology",
    location: "India",
    period: "Jun 2022 – Jul 2024",
    current: false,
    type: "Full-Time Industry Experience",
    highlights: [
      "Developed assigned customer and service-request features using Python, FastAPI, Pydantic, REST APIs, and Swagger, contributing 8+ endpoints while partnering with Business Analysts and QA to improve maintainability.",
      "Optimized PostgreSQL access for customer-history workflows using SQLAlchemy, SQL, Alembic, indexing, and pagination, reducing API response latency by 18% while improving transaction reliability across assigned modules.",
      "Implemented secure notification and synchronization services with JWT, OAuth 2.0, RBAC, Redis, Celery, and RabbitMQ, reducing repeated database requests by 14% across routine application workflows.",
      "Expanded release confidence using pytest, unit testing, Postman, integration testing, regression testing, Git, pull requests, and code reviews, reaching 74% automated coverage before scheduled application releases.",
      "Supported containerized application releases through Docker, Jenkins, Kubernetes, AWS, and CloudWatch across 3 environments, troubleshooting configuration issues and validating deployment health alongside DevOps engineers.",
      "Resolved production support issues using logging, monitoring, root-cause analysis, Jira, Agile/Scrum, and CI/CD troubleshooting while enhancing internal screens with React, TypeScript, HTML, and CSS."
    ],
    metrics: [
      { label: "API Response Latency", value: "-18% Reduced" },
      { label: "Database Requests", value: "-14% Repeated Hits" },
      { label: "Automated Coverage", value: "74% Reached" },
      { label: "Endpoints Delivered", value: "8+ Production Endpoints" }
    ],
    technologies: [
      "Python",
      "FastAPI",
      "Pydantic",
      "SQLAlchemy",
      "PostgreSQL",
      "Redis",
      "RabbitMQ",
      "Celery",
      "JWT",
      "OAuth 2.0",
      "Docker",
      "Kubernetes",
      "AWS",
      "CloudWatch",
      "Jenkins",
      "React",
      "TypeScript",
      "pytest",
      "Jira"
    ]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "Master of Science in Computer Science",
    institution: "University of Florida",
    location: "Gainesville, FL",
    period: "Aug 2024 – May 2026",
    gpa: "3.9",
    maxGpa: "4.00",
    status: "Graduating May 2026",
    coursework: [
      "Distributed Systems",
      "Advanced Database Systems",
      "Concurrency & Multithreading",
      "Machine Learning & AI",
      "Cloud Computing Architectures"
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Languages",
    description: "Core programming languages utilized across backend services, distributed systems, and scripting",
    skills: [
      { name: "Python", usedIn: ["thoughtworks", "dxc-technology", "ledgerflow", "feedfl"] },
      { name: "Java", usedIn: [] },
      { name: "Go", usedIn: ["distributed-community-platform"] },
      { name: "SQL", usedIn: ["thoughtworks", "dxc-technology", "ledgerflow", "feedfl"] },
      { name: "JavaScript", usedIn: ["dxc-technology"] },
      { name: "TypeScript", usedIn: ["dxc-technology"] }
    ]
  },
  {
    category: "Frontend",
    description: "Web and cross-platform mobile frameworks for interactive dashboards and user screens",
    skills: [
      { name: "React.js", usedIn: ["dxc-technology"] },
      { name: "Flutter", usedIn: ["feedfl"] },
      { name: "HTML", usedIn: ["dxc-technology"] },
      { name: "CSS", usedIn: ["dxc-technology"] }
    ]
  },
  {
    category: "Backend",
    description: "Frameworks, protocols, and data modeling tools for robust, high-performance web services",
    skills: [
      { name: "FastAPI", usedIn: ["thoughtworks", "dxc-technology", "ledgerflow", "feedfl"] },
      { name: "Django", usedIn: [] },
      { name: "Spring Boot", usedIn: [] },
      { name: "REST APIs", usedIn: ["thoughtworks", "dxc-technology", "ledgerflow", "feedfl"] },
      { name: "Pydantic", usedIn: ["thoughtworks", "dxc-technology", "ledgerflow"] },
      { name: "SQLAlchemy", usedIn: ["thoughtworks", "dxc-technology", "ledgerflow"] },
      { name: "OpenAPI/Swagger", usedIn: ["thoughtworks", "dxc-technology", "ledgerflow"] }
    ]
  },
  {
    category: "AI & Retrieval",
    description: "Model Context Protocol, agentic tool calling, vector search, and grounded RAG pipelines",
    skills: [
      { name: "RAG", usedIn: ["thoughtworks", "feedfl"] },
      { name: "LangChain", usedIn: ["thoughtworks"] },
      { name: "LangGraph", usedIn: ["thoughtworks"] },
      { name: "MCP (Model Context Protocol)", usedIn: ["thoughtworks"] },
      { name: "Tool Calling", usedIn: ["thoughtworks"] },
      { name: "Vector Search", usedIn: ["thoughtworks", "feedfl"] },
      { name: "Hybrid Retrieval", usedIn: ["thoughtworks"] },
      { name: "Semantic Search", usedIn: ["thoughtworks", "feedfl"] },
      { name: "HITL (Human-in-the-Loop)", usedIn: ["thoughtworks"] }
    ]
  },
  {
    category: "Databases",
    description: "Relational, document, vector, and geospatial database engines",
    skills: [
      { name: "PostgreSQL", usedIn: ["thoughtworks", "dxc-technology", "ledgerflow", "feedfl"] },
      { name: "MongoDB", usedIn: [] },
      { name: "MySQL", usedIn: [] },
      { name: "pgvector", usedIn: ["thoughtworks", "feedfl"] },
      { name: "PostGIS", usedIn: ["feedfl"] },
      { name: "Query Optimization", usedIn: ["dxc-technology"] }
    ]
  },
  {
    category: "Distributed Systems",
    description: "Event streaming, in-memory caching, message queues, and distributed concurrency controls",
    skills: [
      { name: "Kafka", usedIn: ["thoughtworks"] },
      { name: "Redis", usedIn: ["thoughtworks", "dxc-technology"] },
      { name: "RabbitMQ", usedIn: ["dxc-technology"] },
      { name: "Celery", usedIn: ["dxc-technology"] },
      { name: "Distributed Systems", usedIn: ["thoughtworks", "distributed-community-platform"] },
      { name: "Idempotency", usedIn: ["thoughtworks", "ledgerflow"] }
    ]
  },
  {
    category: "Cloud & DevOps",
    description: "Cloud providers, containerization, deployment pipelines, and operational observability",
    skills: [
      { name: "AWS", usedIn: ["thoughtworks", "dxc-technology", "feedfl"] },
      { name: "EC2", usedIn: ["feedfl"] },
      { name: "RDS", usedIn: ["feedfl"] },
      { name: "Azure", usedIn: [] },
      { name: "Docker", usedIn: ["thoughtworks", "dxc-technology", "ledgerflow"] },
      { name: "Kubernetes", usedIn: ["thoughtworks", "dxc-technology"] },
      { name: "CI/CD", usedIn: ["thoughtworks", "dxc-technology"] },
      { name: "Jenkins", usedIn: ["thoughtworks", "dxc-technology"] },
      { name: "GitHub Actions", usedIn: ["thoughtworks"] },
      { name: "OpenTelemetry", usedIn: ["thoughtworks"] },
      { name: "CloudWatch", usedIn: ["dxc-technology"] }
    ]
  },
  {
    category: "Testing & Security",
    description: "Automated test suites, regression verification, and identity access management",
    skills: [
      { name: "pytest", usedIn: ["thoughtworks", "dxc-technology", "ledgerflow"] },
      { name: "Postman", usedIn: ["thoughtworks", "dxc-technology"] },
      { name: "RAGAS", usedIn: ["thoughtworks"] },
      { name: "API Testing", usedIn: ["thoughtworks", "dxc-technology"] },
      { name: "Integration Testing", usedIn: ["thoughtworks", "dxc-technology"] },
      { name: "Regression Testing", usedIn: ["thoughtworks", "dxc-technology"] },
      { name: "OAuth 2.0", usedIn: ["thoughtworks", "dxc-technology"] },
      { name: "JWT", usedIn: ["thoughtworks", "dxc-technology"] },
      { name: "RBAC", usedIn: ["thoughtworks", "dxc-technology"] }
    ]
  },
  {
    category: "Tools & Engineering Practices",
    description: "Developer tooling, root-cause diagnostics, and Agile collaboration workflows",
    skills: [
      { name: "PyCharm", usedIn: ["thoughtworks"] },
      { name: "Git", usedIn: ["thoughtworks", "dxc-technology", "ledgerflow", "feedfl"] },
      { name: "Jira", usedIn: ["dxc-technology"] },
      { name: "Agile / Scrum", usedIn: ["dxc-technology"] },
      { name: "Pull Requests", usedIn: ["dxc-technology"] },
      { name: "Code Reviews", usedIn: ["dxc-technology"] },
      { name: "Root-Cause Analysis", usedIn: ["dxc-technology"] }
    ]
  }
];
