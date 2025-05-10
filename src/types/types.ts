export interface IProjects {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  gallery: string[];
  category: string;
  technologies: string[];
  features: string[];
  challenges: string[];
  solutions: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
}

export interface IBlog {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  image: string;
  category: string;
  tags: string[];
}
