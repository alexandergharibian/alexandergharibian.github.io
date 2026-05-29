export interface SiteConfig {
  title: string;
  description: string;
  lang: string;
  author: string;
  siteLogo: string;
  navLinks: { text: string; href: string }[];
  socialLinks: { text: string; href: string }[];
  socialImage: string;
  canonicalURL?: string;
}

export interface SiteContent {
  hero: HeroProps;
  experience: ExperienceProps[];
  projects: ProjectProps[];
  about: AboutProps;
}

export interface HeroProps {
  name: string;
  specialty: string;
  summary: string;
  email: string;
}

export interface ExperienceLink {
  text: string;
  href: string;
}

export type ExperienceSummaryPart = string | ExperienceLink;

export type ExperienceBullet = string | ExperienceSummaryPart[];

export interface ExperienceProps {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  summary: ExperienceBullet[];
}

export interface ProjectVideoProps {
  mp4: string;
  webm?: string;
}

export interface ProjectProps {
  name: string;
  summary: string;
  image: string;
  video?: ProjectVideoProps;
  linkPreview?: string;
  linkPreviewLabel?: string;
  linkSource?: string;
  linkSourceLabel?: string;
}

export interface AboutProps {
  description: string;
  image: string;
}

export interface HeaderProps {
  siteLogo: string;
  navLinks: { text: string; href: string }[];
}

export const SITE_CONFIG: SiteConfig = {
  title: "Alexander Gharibian — Senior Software Engineer",
  author: "Alexander Gharibian",
  description:
    "Senior Software Engineer in Boston, MA. Building agentic recommendations and homepage personalization at Spotify. Backend systems, ML ranking, and cloud infrastructure at scale.",
  lang: "en",
  siteLogo: "/alex-small.jpeg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/alexandergharibian" },
    { text: "Github", href: "https://github.com/alexandergharibian" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://alexandergharibian.com",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Alexander Gharibian",
    specialty: "Senior Software Engineer",
    summary:
      "Senior Software Engineer based in Boston, MA. At Spotify, I build agentic recommendation systems and large-scale homepage personalization—shipping features used by hundreds of millions of listeners, from LLM-powered experiences to high-throughput ranking backends on GCP.",
    email: "alexandergharibian@gmail.com",
  },
  experience: [
    {
      company: "Spotify",
      position: "Senior Engineer, Agentic Recommendations",
      startDate: "February 2025",
      endDate: "Present",
      summary: [
        [
          "Architected the foundation for how agentic recommendations work across Spotify, letting users reshape their homepage in real-time through natural-language prompts; launched as ",
          {
            text: "Taste Profile",
            href: "https://newsroom.spotify.com/2026-03-13/taste-profile-beta-announcement/",
          },
          " (announced by the Co-CEO at SXSW)",
        ],
        "Led strategy, prototyping, and productionization across 30-to-1 agentic workstreams, validated through 5 live user experiments",
        "Built and shipped an agentic homepage carousel that turns a user's natural-language prompt into personalized recommendations, using an LLM to classify intent and orchestrate concurrent calls to Spotify search and recommendation tools; results stream at 3x the baseline rate, powered by Gemini, Braintrust, LangChain, gRPC, and Pub/Sub",
      ],
    },
    {
      company: "Spotify",
      position: "Senior Engineer, Homepage Personalization",
      startDate: "February 2024",
      endDate: "February 2025",
      summary: [
        [
          "Drove rollout of Spotify's ",
          {
            text: "redesigned feed-based homepage",
            href: "https://newsroom.spotify.com/2023-03-08/new-home-page-scroll-clips-previews/",
          },
          " as engineering point of contact for Home Personalization, coordinating cross-org A/B tests and go-to-market strategy to launch to 500M+ MAUs",
        ],
        "Designed and shipped a next-gen gRPC-based homepage ranker backend that cut infrastructure costs by 80%+ on Spotify's second-costliest GKE namespace while scoring and ranking hundreds of candidates per user at sub-250ms p99 latency, saving $1M+/year",
        "Lifted below-the-fold consumption 3% and podcast discovery 9% with a new ML ranking model, driving tens of millions of incremental streams at Spotify's scale",
      ],
    },
    {
      company: "Spotify",
      position: "Engineer II, Homepage Personalization",
      startDate: "May 2022",
      endDate: "February 2024",
      summary: [
        "Authored two cross-org RFCs defining implementation strategies to unify Spotify's homepage ranking across mobile and non-mobile platforms, driving adoption discussions with leadership across Home and partner product orgs",
      ],
    },
    {
      company: "Capital One",
      position: "Senior Associate Software Engineer",
      startDate: "July 2020",
      endDate: "May 2022",
      summary: [
        "Led a team of 3 to ship Secured Card balance-check and security-deposit-payment flows in Capital One's call-center agent website",
        "Built Go-based AWS Lambda orchestration APIs powering credit-limit increases for millions of Secured Card customers",
        "Cut Secured Card test-data setup from 15 minutes to 30 seconds by building an automated end-to-end framework that provisions pre-conditioned accounts and integrates with CI/CD pipelines",
      ],
    },
    {
      company: "Capital One",
      position: "Associate Software Engineer",
      startDate: "August 2019",
      endDate: "July 2020",
      summary: [
        "Saved $10M/year by co-developing the core logic of an AWS Lambda, EMR, and Spark-powered decision engine that adjusts business credit card APRs from payment behavior, replacing a legacy on-prem system",
        "Shipped a Java Spring Boot API and Vue.js-based call-center tile surfacing remaining statement balance, unlocking a new bill-payment path for customers",
      ],
    },
    {
      company: "Red Hat",
      position: "Performance Engineering Intern",
      startDate: "Summer 2018",
      endDate: "",
      summary: [
        "Built an OpenCV + TensorFlow handwritten-digit demo for Machine Learning Container Creator (MLCC), a one-command CLI for installing ML packages into Docker containers on Red Hat OSes; presented to Red Hat employees and executives",
      ],
    },
    {
      company: "Red Hat",
      position: "Software Engineering Intern",
      startDate: "Summer 2017",
      endDate: "",
      summary: [
        [
          "Built the fetch feature for ",
          {
            text: "Linchpin",
            href: "https://github.com/CentOS-PaaS-SIG/linchpin",
          },
          " (open-source multi-cloud provisioning CLI/Python API, 225k+ downloads), enabling users to pull remote topology configurations locally and restore prior sessions",
        ],
      ],
    },
  ],
  projects: [
    {
      name: "Spotify Taste Profile",
      summary:
        "Spotify's next step in transparent personalization—listeners review and shape how their taste drives the homepage across music, podcasts, and audiobooks. Announced at SXSW in March 2026; I architected the agentic foundation that lets users reshape their homepage through natural-language prompts.",
      linkPreview:
        "https://newsroom.spotify.com/2026-03-13/taste-profile-beta-announcement/",
      linkPreviewLabel: "Announcement",
      image: "/taste-profile-poster.jpg",
      video: {
        mp4: "/taste-profile.mp4",
        webm: "/taste-profile.webm",
      },
    },
  ],
  about: {
    description: `
      Hi, I'm Alexander Gharibian, a Senior Software Engineer based in Boston, MA.

      I work at Spotify on agentic recommendations and homepage personalization. Recently I've helped launch Taste Profile and agentic homepage experiences, driven Spotify's redesigned feed-based homepage to 500M+ MAUs, and built ranking infrastructure that cuts cost while improving discovery at scale. Before Spotify, I led backend teams at Capital One shipping financial products used by millions of customers.

      I'm an AWS Certified Solutions Architect Associate with a background in backend systems (Go, Java, Python), cloud infrastructure, and ML-powered products. When I'm not coding, I enjoy guitar and piano, skiing, rowing, and cycling. I'm fluent in English and Armenian, and I hold a B.S. in Computer Science from Purdue University with a concentration in Systems Programming and Software Engineering and a Certificate in Entrepreneurship.
    `,
    image: "/alex-big.jpeg",
  },
};

