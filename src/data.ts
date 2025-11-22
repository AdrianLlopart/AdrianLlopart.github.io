export interface MediaLinks {
  videoUrl?: string;
  websiteUrl?: string;
  pdfUrl?: string;
}

export interface BaseItem extends MediaLinks {
  title: string;
  description: string;
  date: string;
  tags: string[];
}

export interface Project extends BaseItem {
  id: string;
  type: 'project' | 'paper' | 'video';
  link?: string; // Keeping for backward compatibility or simple links
}

export interface Experience extends MediaLinks {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string; // "Present" or date
  description: string;
  tags: string[];
  location?: string;
  relatedProjectIds?: string[];
  longDescription?: string;
  logoUrl?: string;
}

export interface Education extends MediaLinks {
  id: string;
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
  description: string;
  tags: string[];
  relatedProjectIds?: string[];
  longDescription?: string;
  logoUrl?: string;
}

export interface Research extends BaseItem {
  publication?: string;
  authors?: string[];
}

export const projects: Project[] = [
  {
    id: "deep-researcher",
    title: "Deep Researcher Agent",
    description: "An autonomous agent capable of conducting deep research on given topics, summarizing findings, and generating reports.",
    date: "2025-10-15",
    tags: ["AI", "Agents", "Python", "NLP"],
    type: "project",
    websiteUrl: "https://github.com/AdrianLlopart/deep-researcher"
  },
  {
    id: "voice-pipeline",
    title: "Voice to Text & Text to Voice Pipeline",
    description: "A robust pipeline for converting voice to text and vice versa, optimized for low latency and high accuracy.",
    date: "2025-09-01",
    tags: ["Audio", "Speech Processing", "Python"],
    type: "project"
  },
  {
    id: "kino-platform",
    title: "Kino Management Platform",
    description: "Full-stack application for managing film production workflows, featuring real-time collaboration.",
    date: "2025-01-10",
    tags: ["Web Dev", "React", "Firebase", "Full Stack"],
    type: "project"
  },
  {
    id: "yolo-demo",
    title: "Demo: Real-time Object Detection",
    description: "Video demonstration of YOLOv8 integration in a custom video processing pipeline.",
    date: "2024-11-05",
    tags: ["Computer Vision", "Video", "Demo"],
    type: "video",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Placeholder
  }
];

export const research: Research[] = [
  {
    title: "Advanced Acoustic Simulation",
    description: "Research paper on simulating complex acoustic environments for testing audio processing algorithms.",
    date: "2025-06-20",
    tags: ["Research", "Audio", "Simulation"],
    publication: "International Conference on Acoustics",
    pdfUrl: "https://arxiv.org/pdf/sample.pdf" // Placeholder
  }
];

export const work: Experience[] = [
  {
    id: "tech-corp",
    company: "Tech Corp",
    role: "Senior Software Engineer",
    startDate: "2023-01",
    endDate: "Present",
    description: "Leading the development of AI-driven tools.",
    longDescription: "At Tech Corp, I led a team of 5 engineers to build the next generation of AI tools. We focused on scalability and performance...",
    tags: ["Leadership", "AI", "System Design"],
    location: "San Francisco, CA",
    relatedProjectIds: ["deep-researcher", "voice-pipeline"]
  },
  {
    id: "startup-inc",
    company: "Startup Inc",
    role: "Full Stack Developer",
    startDate: "2021-06",
    endDate: "2022-12",
    description: "Built the MVP and scaled the platform to 10k users.",
    longDescription: "I was the first engineer at Startup Inc. I built the entire stack from scratch using React and Node.js...",
    tags: ["React", "Node.js", "AWS"],
    location: "Remote",
    relatedProjectIds: ["kino-platform"]
  }
];

export const education: Education[] = [
  {
    id: "uni-tech",
    institution: "University of Technology",
    degree: "M.S. in Computer Science",
    startDate: "2019",
    endDate: "2021",
    description: "Specialized in Artificial Intelligence and Machine Learning.",
    longDescription: "My Master's thesis focused on Reinforcement Learning in multi-agent environments...",
    tags: ["AI", "ML", "Computer Vision"],
    relatedProjectIds: ["yolo-demo"],
    pdfUrl: "papers/phd_thesis.pdf"
  },
  {
    id: "state-uni",
    institution: "State University",
    degree: "B.S. in Computer Engineering",
    startDate: "2015",
    endDate: "2019",
    description: "Graduated with Honors.",
    tags: ["Engineering", "Software"]
  }
];

export const bio = "I am Adrian Llopart, a software engineer and researcher specializing in AI, Audio Processing, and Full Stack Development. I love building tools that solve complex problems.";
