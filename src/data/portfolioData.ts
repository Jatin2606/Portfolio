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
  subRole: "Backend · Distributed Systems · AI & Agentic RAG",
  location: "Gainesville, FL",
  email: "jatinshivaprakash43@gmail.com",
  phone: "+1 (352) 477-3386",
  github: "https://github.com/Jatin2606",
  linkedin: "https://www.linkedin.com/in/jatins26622/",
  resumePdfUrl: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/resume.pdf`,
  bioShort: "Software Engineer with 3+ years of experience in backend development, distributed systems, cloud-native delivery, and AI-enabled applications across Thoughtworks and DXC Technology.",
  bioFull: [
    "I am a Software Engineer with 3+ years of experience specializing in backend systems, distributed architectures, cloud-native delivery, and AI-enabled applications. Currently pursuing an M.S. in Computer Science at the University of Florida.",
    "My professional experience progressed from building high-throughput REST APIs, database optimization, and Celery/RabbitMQ microservices at DXC Technology to Kafka-driven transaction services, governed RAG knowledge search, and Agentic RAG with LangGraph and human-in-the-loop controls at Thoughtworks.",
    "I bring end-to-end feature ownership, rigorous testing (pytest, RAGAS, Postman), containerized delivery (Docker, Kubernetes, AWS), and production observability (OpenTelemetry, CloudWatch) to deliver reliable backend systems and scalable AI capabilities."
  ],
  stats: [
    { label: "Experience", value: "3+ Years", highlight: "Thoughtworks & DXC Technology" },
    { label: "Ledger Engine", value: "340 req/s", highlight: "56ms p99 Concurrency Safety" },
    { label: "Distributed Systems", value: "Go / ProtoActor", highlight: "3-Layer Actor Architecture" },
    { label: "Enterprise AI", value: "Agentic RAG", highlight: "LangGraph, HITL & pgvector" }
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
    id: "distributed-community-platform",
    title: "Distributed Community Platform",
    subtitle: "High-Throughput Actor-Based Distributed Platform in Go with ProtoActor",
    period: "Aug. 2024 – Dec. 2024",
    role: "Distributed Systems Developer",
    summary: "A 3-layer distributed platform built in Go utilizing the ProtoActor framework and REST APIs. Features a clean separation of HTTP API handling, actor messaging, and simulation workloads to deliver concurrent execution under heavy loads.",
    problem: "Traditional monolithic web backends struggle with thread contention, blocking I/O, and complex state synchronization when handling thousands of concurrent user interactions such as posts, votes, comments, and karma recalculations.",
    solution: "Engineered an asynchronous, message-driven architecture using Go and ProtoActor. Deployed an EngineActor to manage global state and routing, decoupled UserActors for individual client sessions, and built a multi-process load simulator to evaluate responsiveness under thousands of user activities and validate distributed execution.",
    architecture: {
      overview: "3-layer distributed actor model cleanly separating external HTTP API ingress, internal actor mailboxes/message dispatch, and a standalone load simulation engine.",
      components: [
        "API Gateway Layer: Go HTTP route handlers parsing incoming REST requests and delegating to the actor system",
        "EngineActor: Central coordinator managing sub-actor lifecycles, user registries, and cross-actor routing",
        "UserActor: Isolated state machine for each connected entity, handling timeline aggregation and karma updates",
        "Simulator Engine: Multi-process client simulator generating thousands of synthetic user activities for stress testing",
        "In-Memory State & Mailboxes: Asynchronous non-blocking message queues guaranteeing single-threaded execution per actor"
      ],
      dataFlow: "Client HTTP Request → Go REST Handler translates to Actor Message → Context.Request to EngineActor → Dispatched to Target UserActor mailbox → Actor processes state update without locks → Synchronous response returned to HTTP client."
    },
    technicalHighlights: [
      "Engineered a 3-layer distributed platform in Go with ProtoActor and REST APIs, separating API handling, actor messaging, and simulation workloads to improve scalability and maintainability.",
      "Designed and load-tested REST APIs for community interactions, using actor-based concurrency and multi-process simulation to evaluate responsiveness under thousands of user activities.",
      "Eliminated shared-memory locking contention by leveraging isolated actor state and asynchronous message-passing mailboxes.",
      "Constructed a comprehensive synthetic simulation suite validating distributed execution and latency under high concurrency."
    ],
    concurrencyAndReliability: [
      "Actor-Isolated State: Zero mutexes or shared memory between concurrent users; state mutations occur sequentially within the actor's dedicated mailbox loop.",
      "Supervisor Hierarchies: ProtoActor supervision strategies with automatic actor restart and failure isolation.",
      "Asynchronous Messaging: Non-blocking tell and request-response patterns preventing HTTP worker thread starvation."
    ],
    benchmarks: [
      { metric: "Concurrency Model", value: "ProtoActor", details: "Zero-mutex message passing in Go" },
      { metric: "Architecture", value: "3 Layers", details: "API Gateway, Actor Dispatch, Simulator" },
      { metric: "Load Simulation", value: "1,000s Users", details: "Multi-process concurrent activity load tested" },
      { metric: "Throughput", value: "Sub-10ms", details: "Low-latency in-memory message processing" }
    ],
    technologies: ["Go", "ProtoActor", "REST APIs", "Distributed Systems", "Actor Model", "Concurrency", "Goroutines", "HTTP Handlers"],
    githubUrl: "https://github.com/Jatin2606/Reddit_clone",
    featured: true
  },
  {
    id: "feedfl",
    title: "FeedFL — RAG Knowledge Search",
    subtitle: "AI-Powered Food Recovery Engine with pgvector & Hybrid Retrieval",
    period: "Jan. 2026 – Apr. 2026",
    role: "Backend & AI Engineer",
    summary: "A production food surplus platform connecting providers with communities in need, powered by FastAPI, PostgreSQL, Supabase, pgvector semantic search, and PostGIS geospatial proximity filtering.",
    problem: "Food recovery networks require immediate discovery of perishable surplus within specific geographic radii, while users require natural language conversational guidance.",
    solution: "Architected a dual-retrieval pipeline combining PostGIS geospatial queries with pgvector semantic vector search, paired with LLM fallback routing for grounded provider recommendations.",
    architecture: {
      overview: "Hybrid retrieval backend pairing vector semantic embeddings with spatial SQL indexing and serverless edge compute.",
      components: [
        "FastAPI Service: REST endpoints handling intake, inventory, and query pipelines",
        "pgvector Semantic Index: Cosine similarity vector search over food provider inventories",
        "PostGIS Geo-Engine: ST_DWithin spatial bounding for proximity-based filtering",
        "Supabase Edge Functions: Serverless event handlers triggering real-time notifications"
      ],
      dataFlow: "User query → FastAPI generates text embeddings → PostGIS filters bounding perimeter → pgvector retrieves top-k semantic matches → LLM synthesizes grounded recommendation."
    },
    technicalHighlights: [
      "Built a scalable RESTful API in FastAPI and PostgreSQL connecting food providers with surplus meals to people in need.",
      "Designed a RAG chatbot using pgvector semantic search with Llama-3.1-8B and Mistral fallback for grounded recommendations.",
      "Architected PostGIS geospatial proximity search cutting query latency up to 30%, and migrated to Supabase cutting setup time by 40%."
    ],
    benchmarks: [
      { metric: "Query Latency", value: "-30%", details: "Reduced via PostGIS geospatial proximity indexing" },
      { metric: "Setup Time", value: "-40%", details: "Reduced through Supabase & Edge Functions migration" },
      { metric: "Active Scale", value: "200+ Users", details: "Over 120 food providers onboarded in Palm Beach County" }
    ],
    technologies: ["FastAPI", "PostgreSQL", "pgvector", "PostGIS", "Supabase", "Flutter", "Python"],
    githubUrl: "https://github.com/Jatin2606",
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
      "Build backend transaction services with Python, FastAPI, PostgreSQL, Redis, and Kafka, delivering 10+ REST endpoints while owning requirements clarification, implementation, testing, integration, and production validation across client workflows.",
      "Develop governed RAG knowledge search with LangChain, Supabase, pgvector, Hybrid Retrieval, and Reranking, improving retrieval time by 15% while enabling permission-aware citations and structured discovery for operations teams.",
      "Extend operations approval workflows with Agentic RAG, LangGraph, Tool Calling, HITL, and RBAC, integrating 5 governed actions with retries, Structured Outputs, and auditable execution controls.",
      "Validate backend and RAG releases using pytest, Postman, RAGAS, and Golden Datasets, maintaining 66% automated coverage across API behavior, retrieval quality, access controls, and regression checks.",
      "Deploy containerized services using Docker, Kubernetes, AWS, CI/CD, and OpenTelemetry across 3 environments, partnering with platform engineers to troubleshoot releases, trace failures, and verify production health.",
      "Create AI-assisted release intelligence using Jenkins, GitHub Actions, Structured Logging, and operational telemetry, reducing build-failure triage time 14% by correlating tests, deployment events, runbooks, and incidents."
    ],
    metrics: [
      { label: "Retrieval Speed", value: "+15% Faster" },
      { label: "Governed Actions", value: "5 with HITL & RBAC" },
      { label: "Automated Coverage", value: "66% API & RAG" },
      { label: "Triage Time", value: "-14% Build-Failure" }
    ],
    technologies: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "Kafka",
      "LangChain",
      "LangGraph",
      "Agentic RAG",
      "Supabase",
      "pgvector",
      "Docker",
      "Kubernetes",
      "AWS",
      "OpenTelemetry",
      "pytest",
      "Postman",
      "RAGAS",
      "GitHub Actions",
      "Jenkins"
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
      "Expanded release confidence using pytest, unittest, Postman, integration testing, regression testing, Git, pull requests, and code reviews, reaching 78% automated coverage before scheduled application releases.",
      "Supported containerized application releases through Docker, Jenkins, Kubernetes, AWS, and CloudWatch across 3 environments, troubleshooting configuration issues and validating deployment health alongside DevOps engineers.",
      "Resolved production support issues using logging, monitoring, root-cause analysis, Jira, Agile/Scrum, and CI/CD troubleshooting while enhancing internal screens with React, TypeScript, HTML, and CSS."
    ],
    metrics: [
      { label: "API Response Latency", value: "-18% Reduced" },
      { label: "Database Requests", value: "-14% Repeated Hits" },
      { label: "Automated Coverage", value: "78% Reached" },
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
    category: "Languages & Frontend",
    description: "Core programming languages and frontend technologies used across distributed backends and applications",
    skills: [
      { name: "Python", usedIn: ["thoughtworks", "dxc-technology", "ledgerflow"] },
      { name: "Java", usedIn: [] },
      { name: "Go", usedIn: ["distributed-community-platform"] },
      { name: "JavaScript", usedIn: ["dxc-technology"] },
      { name: "TypeScript", usedIn: ["dxc-technology"] },
      { name: "C++", usedIn: [] },
      { name: "SQL", usedIn: ["thoughtworks", "dxc-technology", "ledgerflow"] },
      { name: "React.js", usedIn: ["dxc-technology"] },
      { name: "HTML", usedIn: ["dxc-technology"] },
      { name: "CSS", usedIn: ["dxc-technology"] }
    ]
  },
  {
    category: "Backend & APIs",
    description: "Frameworks, protocols, and data modeling tools for scalable service architectures",
    skills: [
      { name: "FastAPI", usedIn: ["thoughtworks", "dxc-technology", "ledgerflow"] },
      { name: "Spring Boot", usedIn: [] },
      { name: "REST APIs", usedIn: ["thoughtworks", "dxc-technology", "ledgerflow", "distributed-community-platform"] },
      { name: "Pydantic", usedIn: ["dxc-technology", "ledgerflow"] },
      { name: "SQLAlchemy", usedIn: ["dxc-technology", "ledgerflow"] },
      { name: "OpenAPI/Swagger", usedIn: ["dxc-technology", "ledgerflow"] }
    ]
  },
  {
    category: "AI & Retrieval",
    description: "RAG architectures, agent workflows, vector embeddings, and ML evaluation",
    skills: [
      { name: "RAG", usedIn: ["thoughtworks"] },
      { name: "Agentic RAG", usedIn: ["thoughtworks"] },
      { name: "LangGraph", usedIn: ["thoughtworks"] },
      { name: "LangChain", usedIn: ["thoughtworks"] },
      { name: "Tool Calling", usedIn: ["thoughtworks"] },
      { name: "HITL (Human-in-the-Loop)", usedIn: ["thoughtworks"] },
      { name: "Hybrid Retrieval", usedIn: ["thoughtworks"] },
      { name: "RAGAS", usedIn: ["thoughtworks"] },
      { name: "NLP", usedIn: [] },
      { name: "scikit-learn", usedIn: [] },
      { name: "Pandas", usedIn: [] }
    ]
  },
  {
    category: "Databases & Search",
    description: "Relational, document, spatial, and vector database engines",
    skills: [
      { name: "PostgreSQL", usedIn: ["thoughtworks", "dxc-technology", "ledgerflow"] },
      { name: "MongoDB", usedIn: [] },
      { name: "MySQL", usedIn: [] },
      { name: "Supabase", usedIn: ["thoughtworks"] },
      { name: "pgvector", usedIn: ["thoughtworks"] },
      { name: "PostGIS", usedIn: [] },
      { name: "Query Optimization", usedIn: ["dxc-technology"] }
    ]
  },
  {
    category: "Distributed Systems & Messaging",
    description: "Event-driven messaging, caching, queueing, and distributed concurrency controls",
    skills: [
      { name: "Kafka", usedIn: ["thoughtworks"] },
      { name: "Redis", usedIn: ["thoughtworks", "dxc-technology"] },
      { name: "RabbitMQ", usedIn: ["dxc-technology"] },
      { name: "Celery", usedIn: ["dxc-technology"] },
      { name: "Distributed Systems", usedIn: ["thoughtworks", "distributed-community-platform"] },
      { name: "Event-Driven Architecture", usedIn: ["thoughtworks"] },
      { name: "Idempotency", usedIn: ["ledgerflow"] }
    ]
  },
  {
    category: "Cloud, DevOps & Observability",
    description: "Container orchestration, cloud services, CI/CD pipelines, and telemetry",
    skills: [
      { name: "AWS", usedIn: ["thoughtworks", "dxc-technology"] },
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
    description: "Automated test suites, security protocols, and identity authorization",
    skills: [
      { name: "pytest", usedIn: ["thoughtworks", "dxc-technology", "ledgerflow"] },
      { name: "Postman", usedIn: ["thoughtworks", "dxc-technology"] },
      { name: "API Testing", usedIn: ["thoughtworks", "dxc-technology"] },
      { name: "Integration Testing", usedIn: ["thoughtworks", "dxc-technology"] },
      { name: "Regression Testing", usedIn: ["thoughtworks", "dxc-technology"] },
      { name: "OAuth 2.0", usedIn: ["dxc-technology"] },
      { name: "JWT", usedIn: ["dxc-technology"] },
      { name: "RBAC", usedIn: ["thoughtworks", "dxc-technology"] }
    ]
  },
  {
    category: "Tools & Engineering Practices",
    description: "Version control, Agile delivery workflows, and quality engineering",
    skills: [
      { name: "Git", usedIn: ["thoughtworks", "dxc-technology", "ledgerflow", "distributed-community-platform"] },
      { name: "Jira", usedIn: ["dxc-technology"] },
      { name: "Agile", usedIn: ["dxc-technology"] },
      { name: "Scrum", usedIn: ["dxc-technology"] },
      { name: "Pull Requests", usedIn: ["dxc-technology"] },
      { name: "Code Reviews", usedIn: ["dxc-technology"] },
      { name: "Root-Cause Analysis", usedIn: ["dxc-technology"] }
    ]
  }
];
