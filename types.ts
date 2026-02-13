
export interface Product {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  price: string;
  originalPrice: string;
  features: string[];
  modules: { title: string; desc: string }[];
  bonuses: { title: string; value: string }[];
  lemonSqueezyLink: string;
  selarLink: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Tool {
  id: string;
  name: string;
  description: string;
  price: string;
  affiliateLink: string;
  category: string;
  rating: number;
  iconUrl?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  category: string;
  date: string;
  readTime: string;
}

export interface Resource {
  id: string;
  name: string;
  description: string;
  link: string;
  category: string;
  isPremium?: boolean;
}

export enum RoutePath {
  HOME = '/',
  SYSTEM = '/system', // Formerly products
  ABOUT = '/about',
  CONTACT = '/contact',
  PRIVACY = '/privacy',
  TERMS = '/terms',
  REFUNDS = '/refund-policy',
  DISCLAIMER = '/disclaimer',
  BLOG = '/blog',
  TOOLS = '/tools',
  RESOURCES = '/resources'
}
