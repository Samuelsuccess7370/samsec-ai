export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  imageUrl: string;
  content?: string;
  featured?: boolean;
}

export interface Tool {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  affiliateLink: string;
  iconUrl: string;
  rating: number;
}

export enum RoutePath {
  HOME = '/',
  BLOG = '/blog',
  TOOLS = '/tools',
  MONEY = '/make-money',
  CONTACT = '/contact',
  ABOUT = '/about',
  DISCLAIMER = '/disclaimer',
  TERMS = '/terms',
  PRIVACY = '/privacy',
}