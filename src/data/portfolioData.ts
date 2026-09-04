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
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    usedIn: string[]; // references project or experience IDs
    level?: string;
  }[];
}

export const PERSONAL_INFO = {
  name: "Jatin Shivaprakash",
  role: "Software Engineer",
  subRole: "Backend, Full-Stack & AI Systems",
  location: "Gainesville, Florida",
  email: "jatin.shivaprk@gmail.com",
  phone: "+1 (352) 709-2606",
  github: "https://github.com/Jatin2606",
  linkedin: "https://www.linkedin.com/in/jatin-shivaprakash-8a1667234/",
  resumePdfUrl: "/resume.pdf",
  availability: "Open to Full-Time Opportunities (Starting May 2026 / Immediate)",
  bioShort: "Master's student in Computer Science at the University of Florida (3.9 GPA) specializing in high-concurrency backend services, distributed systems, RAG / semantic search architectures, and performant web applications.",
  bioFull: [
    "I am a backend-focused Software Engineer and Master's student in Computer Science at the University of Florida (GPA: 3.9 / 4.00). My core expertise lies in designing concurrency-safe backend architectures, low-latency RESTful APIs, distributed ledger systems, and production AI/RAG search pipelines.",
    "At the University of Florida, I have engineered IoT backend services optimizing GPS sensor battery life by ~50% for wildlife research, as well as production full-stack mobile systems integrating pgvector semantic search and open-weight LLMs (Llama 3.1 & Mistral). Previously at Axisxi, I architected high-throughput REST APIs and Redis caching layers supporting 40,000+ requests/day.",
    "I am passionate about solving tough engineering challenges: eliminating race conditions in transactional ledgers, designing idempotent APIs, tuning database query execution plans, and bridging cutting-edge language models with grounded enterprise knowledge."
  ],
  stats: [
    { label: "UF M.S. GPA", value: "3.9 / 4.00", highlight: "Top Academic Standing" },
    { label: "Ledger Benchmark", value: "340 req/s", highlight: "56ms p99 Latency (0.00% errors)" },
    { label: "Daily Production Scale", value: "40k+ req/day", highlight: "Redis Caching & DRF APIs" },
    { label: "Device Optimization", value: "~50%", highlight: "Battery & Storage Extended" }
  ]
};

export const PROJECTS: ProjectDetail[] = [
  {
    id: "ledgerflow",
    title: "LedgerFlow",
    subtitle: "Concurrency-Safe Payment Ledger Engine with Double-Entry Accounting",
    period: "Apr. 2026",
    role: "Backend Architect & Lead Developer",
    summary: "A high-performance payment ledger backend built with FastAPI, SQLAlchemy, and PostgreSQL. Enforces immutable double-entry accounting rules, row-level locking concurrency control, and idempotent transaction posting.",
    problem: "Financial and wallet services face dangerous double-spending bugs, negative account balances, and ledger desynchronization when processing high-volume concurrent transactions without strict ACID isolation.",
    solution: "Engineered an immutable double-entry ledger that records balanced debit/credit entries for every transaction. Implemented strict database row-level locking via PostgreSQL SELECT ... FOR UPDATE and idempotency keys to guarantee serializable safety without phantom reads or balance corruption.",
    architecture: {
      overview: "Layered domain-driven backend with distinct API route handlers, Pydantic schemas, SQLAlchemy ORM models, and transaction business logic enforcing double-entry invariants.",
      components: [
        "FastAPI Application: RESTful endpoints with OpenAPI schema documentation",
        "Transaction Validator: Verifies minimum two entries, balanced debits/credits, and matching currency",
        "Locking Engine: Orders account IDs deterministically before acquiring row-level locks to prevent deadlocks",
        "Idempotency Cache & Table: Prevents duplicate execution on network retries using client idempotency keys",
        "Automated Test & Benchmark Suite: Locust and k6 headless load generators with synthetic account data seeding"
      ],
      dataFlow: "Client POST /api/v1/transactions with idempotency key → Verify idempotency → Deterministically sort account IDs → Acquire row-level locks (SELECT ... FOR UPDATE) → Validate debit/credit equality and balances → Commit atomic ledger entries → Return updated balances."
    },
    technicalHighlights: [
      "Designed an immutable double-entry ledger where every monetary flow requires balanced debit and credit entries, ensuring mathematical auditability.",
      "Implemented PostgreSQL row-level locks (SELECT ... FOR UPDATE) to ensure concurrency safety and prevent race conditions or balance overdrafts under heavy load.",
      "Engineered idempotency-key middleware and database records allowing clients to safely retry failed network requests without duplicate ledger postings.",
      "Constructed comprehensive automated testing with Pytest and load testing with Locust and k6."
    ],
    concurrencyAndReliability: [
      "Deterministic Lock Ordering: Accounts are sorted by ID before locking to prevent database deadlocks under bidirectional concurrent transfers.",
      "ACID Isolation: All debit and credit entries succeed together or rollback completely.",
      "Zero-Error Benchmark: Maintained 0.00% error rate across 6,757 requests at 50 concurrent virtual users."
    ],
    benchmarks: [
      { metric: "Peak Throughput", value: "340.51 req/s", details: "Tested at 50 concurrent users via Locust" },
      { metric: "p99 Latency", value: "56 ms", details: "99% of transactions complete within 56ms" },
      { metric: "Average Latency", value: "15 ms", details: "Sub-20ms average latency under 50 concurrent users" },
      { metric: "Error Rate", value: "0.00%", details: "Zero dropped or failed transactions across all load stages" }
    ],
    technologies: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "Docker", "REST APIs", "Pytest", "Locust", "k6", "Pydantic"],
    githubUrl: "https://github.com/Jatin2606/LedgerFlow",
    featured: true
  },
  {
    id: "uf-nestmate",
    title: "Full Stack Housing Platform (UF NestMate)",
    subtitle: "Intelligent Student Housing Discovery & Roommate Recommendation Web Platform",
    period: "Jan. 2025 – Apr. 2025",
    role: "Backend Software Engineer",
    summary: "Full-stack web application designed for incoming and international students to discover off-campus apartments and compatible roommates via multi-criteria spatial filters, Google Maps integration, and NLP review summarization.",
    problem: "International and out-of-state students relocating to Gainesville often struggle to evaluate off-campus apartments and roommate compatibility without being physically present, facing scattered reviews and complex commute logistics.",
    solution: "Engineered high-performance RESTful APIs in Go with multi-dimensional filtering (pricing, rating, commute distance to UF campus, cleanliness preferences). Integrated Google Maps API for spatial exploration and applied NLP sentiment analysis to extract concise pros/cons from hundreds of student reviews.",
    architecture: {
      overview: "Microservice-ready architecture featuring a compiled Go REST backend serving a responsive React single-page frontend with Google Maps SDK and NLP summarizer.",
      components: [
        "Go Backend: High-speed HTTP router with customized query filter pipeline",
        "React Frontend: Interactive single-page UI with dynamic property cards and interactive map overlays",
        "NLP Summarizer: Text analysis pipeline extracting key attributes (cleanliness, noise level, amenities) from user reviews",
        "Spatial Filter Engine: Distance calculations optimizing apartment recommendations based on university proximity"
      ],
      dataFlow: "Student specifies budget, amenities, and campus proximity → Go API processes filtered queries across normalized records → Google Maps renders pinpoint locations → NLP engine delivers synthesized sentiment summary."
    },
    technicalHighlights: [
      "Built and deployed a full-stack platform serving 1,000+ users to find housing and roommates via personalized preferences.",
      "Engineered RESTful APIs in Go with filtering by rating, area, name, and university proximity, boosting search precision by 40%.",
      "Integrated Google Maps API for interactive visual radius searches and off-campus commuting calculations.",
      "Implemented NLP text processing to condense qualitative student reviews into clear, actionable apartment summaries."
    ],
    benchmarks: [
      { metric: "Active Users", value: "1,000+", details: "International and domestic students served during onboarding" },
      { metric: "Search Precision", value: "+40%", details: "Improvement in matching relevant apartments via multi-criteria filtering" }
    ],
    technologies: ["Go", "React", "NLP", "Google Maps API", "REST APIs", "JavaScript", "HTML/CSS"],
    githubUrl: "https://github.com/Jatin2606/UF-NestMate",
    featured: true
  },
  {
    id: "feedfl",
    title: "FeedFL",
    subtitle: "Production RAG Chatbot & Food Provider Platform with pgvector Semantic Search",
    period: "Jan. 2026 – Apr. 2026",
    role: "Full-Stack & AI Software Engineer",
    summary: "A production community assistance and food provider discovery platform featuring role-based Flutter mobile dashboards, a RAG chatbot powered by pgvector semantic vector search, and a FastAPI + PostGIS geospatial backend.",
    problem: "Over 120 food providers and hundreds of residents in Palm Beach County required a fast, intuitive way to locate food assistance, check eligibility, and query hours without long phone queues or navigating outdated directories.",
    solution: "Engineered an end-to-end platform with role-based Flutter mobile apps and an intelligent RAG chatbot. Indexed provider metadata with pgvector for semantic search, configured Llama-3.1-8B with Mistral-Small-3.1 fallback, and utilized PostGIS for real-time proximity filtering.",
    architecture: {
      overview: "Multi-tier AI architecture with Flutter mobile apps connected to a FastAPI backend, pgvector semantic search engine, and PostGIS geospatial database hosted on Supabase.",
      components: [
        "Flutter Mobile Client: Role-based iOS and Android dashboards onboarding 200+ users and 120 food providers",
        "FastAPI Service: High-performance asynchronous REST endpoints for authentication and query dispatch",
        "RAG Semantic Pipeline: pgvector cosine similarity search with Llama-3.1-8B and Mistral-Small-3.1 fallback",
        "PostGIS Geospatial Engine: Spatial distance indexing cutting query latency up to 30%",
        "Supabase Infrastructure: Managed PostgreSQL, Edge Functions, and built-in auth cutting setup time by 40%"
      ],
      dataFlow: "User asks conversational food query on Flutter app → FastAPI embeds text and queries pgvector for semantic similarity → PostGIS filters nearest providers → Llama-3.1 / Mistral generates grounded answer → Returned in sub-second latency."
    },
    technicalHighlights: [
      "Built a production Flutter iOS/Android app with role-based dashboards, onboarding 200+ users and 120 food providers in Palm Beach County.",
      "Designed a RAG chatbot with pgvector semantic search and Llama-3.1-8B / Mistral-Small-3.1 fallback for grounded provider recommendations.",
      "Architected a FastAPI + PostgreSQL backend with normalized schema and PostGIS proximity search, cutting query latency up to 30%.",
      "Migrated backend from AWS (EC2, RDS) to Supabase, using managed PostgreSQL, Edge Functions, and built-in auth to cut setup time 40%."
    ],
    benchmarks: [
      { metric: "Query Latency", value: "-30%", details: "Reduced via PostGIS geospatial proximity indexing" },
      { metric: "Setup Time", value: "-40%", details: "Reduced through Supabase & Edge Functions migration" },
      { metric: "Active Scale", value: "200+ Users", details: "Over 120 food providers onboarded in Palm Beach County" }
    ],
    technologies: ["FastAPI", "PostgreSQL", "pgvector", "PostGIS", "Supabase", "Flutter", "Llama-3.1-8B", "Mistral-Small-3.1", "AWS (EC2, RDS)", "Edge Functions", "Python"],
    githubUrl: "https://github.com/Jatin2606",
    featured: true
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "uf-wildlife",
    role: "Backend Software Engineer",
    organization: "University of Florida",
    department: "Wildlife Ecology and Conservation Department",
    location: "Gainesville, FL",
    period: "Jul. 2026 – Present",
    current: true,
    type: "Research & Systems Engineering",
    highlights: [
      "Implemented a Node.js scheduling service for Snapper GPS tracking devices, improving battery longevity and storage utilization by ~50%.",
      "Designed REST APIs to process JSON-based configuration updates and dynamically control device wake/sleep intervals based on environmental telemetry.",
      "Enhanced backend reliability and data integrity by testing, debugging, and maintaining robust communication protocols between the server and embedded GPS firmware."
    ],
    metrics: [
      { label: "Battery & Storage Life", value: "~50% Extended" },
      { label: "Protocol", value: "JSON / REST" }
    ],
    technologies: ["Node.js", "REST APIs", "JSON Configuration", "Embedded GPS Firmware", "SnapperGPS", "Git"]
  },
  {
    id: "uf-food-rag",
    role: "Software Engineer",
    organization: "University of Florida",
    department: "FeedFL Platform",
    location: "Gainesville, FL",
    period: "Jan. 2026 – Apr. 2026",
    current: false,
    type: "Production App & AI Systems",
    highlights: [
      "Built a production Flutter iOS/Android application with role-based dashboards, successfully onboarding 200+ users and 120 food providers across Palm Beach County.",
      "Designed and deployed a RAG (Retrieval-Augmented Generation) chatbot utilizing pgvector semantic vector search with Llama-3.1-8B and Mistral-Small-3.1 fallback for grounded food provider recommendations.",
      "Architected a FastAPI + PostgreSQL backend featuring a normalized relational schema and PostGIS geospatial proximity search, cutting query latency up to 30%.",
      "Migrated backend infrastructure from AWS (EC2, RDS) to Supabase, utilizing managed PostgreSQL, Edge Functions, and built-in auth to reduce infrastructure setup time by 40%."
    ],
    metrics: [
      { label: "Query Latency", value: "-30% Reduction" },
      { label: "Setup Time", value: "-40% Faster" },
      { label: "Scale", value: "200+ Users, 120 Providers" }
    ],
    technologies: [
      "FastAPI",
      "PostgreSQL",
      "pgvector",
      "PostGIS",
      "Supabase",
      "Flutter",
      "Llama-3.1-8B",
      "Mistral-Small-3.1",
      "AWS (EC2, RDS)",
      "Edge Functions"
    ]
  },
  {
    id: "axisxi",
    role: "Software Engineer",
    organization: "Axisxi",
    location: "Bengaluru, Karnataka",
    period: "Jun. 2023 – Jul. 2024",
    current: false,
    type: "Full-Time Industry Experience",
    highlights: [
      "Built 10+ RESTful API endpoints in Java/Spring Boot and Python/Django REST Framework for authentication, secure data retrieval, and transaction workflows, serving 3,000+ active users.",
      "Optimized MySQL schemas and tuned slow queries through index optimization and query refactoring, cutting average response time by ~30% on critical high-traffic endpoints.",
      "Integrated Redis caching layer and third-party REST APIs to alleviate database read pressure and improve reliability, supporting 40,000+ requests/day in production.",
      "Shipped features in a fast-paced Agile team using Docker and CI/CD pipelines, authoring unit and integration tests and diagnosing production issues across platforms."
    ],
    metrics: [
      { label: "Daily Throughput", value: "40,000+ Req/Day" },
      { label: "Response Time", value: "~30% Faster" },
      { label: "User Base", value: "3,000+ Users" }
    ],
    technologies: [
      "Python",
      "Django REST Framework",
      "Java",
      "Spring Boot",
      "MySQL",
      "Redis",
      "Docker",
      "CI/CD",
      "REST APIs",
      "Agile"
    ]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "Master of Science (M.S.) in Computer Science",
    institution: "University of Florida",
    location: "Gainesville, FL",
    period: "Aug. 2024 – May 2026",
    gpa: "3.9",
    maxGpa: "4.00",
    status: "Candidate (Graduating May 2026)",
    coursework: [
      "Distributed Systems",
      "Advanced Database Systems",
      "Concurrency & Multithreading",
      "Machine Learning & AI",
      "Cloud Computing Architectures"
    ]
  },
  {
    degree: "Bachelor of Technology (B.Tech) in Computer Science",
    specialization: "Specialization in Big Data Analytics",
    institution: "SRM Institute of Science and Technology",
    location: "Kattankulathur, TN",
    period: "Sept. 2020 – May 2024",
    gpa: "8.55",
    maxGpa: "10.00",
    status: "Graduated",
    coursework: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Database Management Systems",
      "Big Data Analytics",
      "Computer Networks"
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Programming Languages",
    description: "Core languages used across backend systems, concurrent programming, and scripting",
    skills: [
      { name: "Python", usedIn: ["ledgerflow", "uf-food-rag", "axisxi"] },
      { name: "SQL", usedIn: ["ledgerflow", "uf-food-rag", "axisxi"] },
      { name: "Go", usedIn: ["uf-nestmate"] },
      { name: "TypeScript", usedIn: ["uf-wildlife"] },
      { name: "JavaScript", usedIn: ["uf-wildlife", "uf-nestmate"] },
      { name: "Java", usedIn: ["axisxi"] },
      { name: "C++", usedIn: [] },
      { name: "Pony", usedIn: [] }
    ]
  },
  {
    category: "Backend & APIs",
    description: "Frameworks, protocols, and architectures for robust web services",
    skills: [
      { name: "FastAPI", usedIn: ["ledgerflow", "uf-food-rag"] },
      { name: "Django REST Framework", usedIn: ["axisxi"] },
      { name: "Spring Boot", usedIn: ["axisxi"] },
      { name: "Node.js", usedIn: ["uf-wildlife"] },
      { name: "REST APIs", usedIn: ["ledgerflow", "uf-nestmate", "uf-wildlife", "axisxi"] },
      { name: "SQLAlchemy", usedIn: ["ledgerflow"] },
      { name: "Pydantic", usedIn: ["ledgerflow"] }
    ]
  },
  {
    category: "Databases & Vector Storage",
    description: "Relational, in-memory, spatial, and vector database engines",
    skills: [
      { name: "PostgreSQL", usedIn: ["ledgerflow", "uf-food-rag"] },
      { name: "pgvector", usedIn: ["uf-food-rag"] },
      { name: "PostGIS", usedIn: ["uf-food-rag"] },
      { name: "Redis", usedIn: ["axisxi"] },
      { name: "MySQL", usedIn: ["axisxi"] },
      { name: "MongoDB", usedIn: [] }
    ]
  },
  {
    category: "AI & Machine Learning",
    description: "Generative AI, retrieval architectures, and applied machine learning",
    skills: [
      { name: "RAG Architectures", usedIn: ["uf-food-rag"] },
      { name: "Semantic Search", usedIn: ["uf-food-rag"] },
      { name: "Llama-3.1-8B", usedIn: ["uf-food-rag"] },
      { name: "Mistral-Small-3.1", usedIn: ["uf-food-rag"] },
      { name: "LangChain", usedIn: [] },
      { name: "NLP", usedIn: ["uf-nestmate"] },
      { name: "scikit-learn", usedIn: [] },
      { name: "Pandas & NumPy", usedIn: [] }
    ]
  },
  {
    category: "Cloud & Infrastructure",
    description: "Containerization, cloud providers, and deployment platforms",
    skills: [
      { name: "Docker", usedIn: ["ledgerflow", "axisxi"] },
      { name: "AWS (EC2, RDS)", usedIn: ["uf-food-rag"] },
      { name: "Supabase", usedIn: ["uf-food-rag"] },
      { name: "Edge Functions", usedIn: ["uf-food-rag"] },
      { name: "Vercel", usedIn: [] },
      { name: "Render", usedIn: [] },
      { name: "CI/CD", usedIn: ["axisxi"] }
    ]
  },
  {
    category: "Engineering Disciplines & Tools",
    description: "Distributed systems concepts, benchmarking, testing, and observability",
    skills: [
      { name: "Concurrency Control", usedIn: ["ledgerflow"] },
      { name: "Row-Level Locking", usedIn: ["ledgerflow"] },
      { name: "Distributed Systems", usedIn: ["ledgerflow", "uf-food-rag"] },
      { name: "Pytest", usedIn: ["ledgerflow"] },
      { name: "Locust & k6", usedIn: ["ledgerflow"] },
      { name: "Postman", usedIn: ["ledgerflow", "axisxi"] },
      { name: "Git", usedIn: ["ledgerflow", "uf-nestmate", "uf-wildlife", "axisxi"] },
      { name: "Power BI & Tableau", usedIn: [] }
    ]
  }
];
