import { BlogPost, Tool } from '../types';

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Arbitrage 2.0: Using Gemini 3 to Spot Market Inefficiencies',
    excerpt: 'How to leverage the latest Gemini models to analyze cross-exchange crypto prices in real-time for automated profit.',
    category: 'Trading',
    date: 'Oct 24, 2025',
    readTime: '5 min read',
    imageUrl: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&q=80&w=800',
    featured: true,
  },
  {
    id: '2',
    title: 'Automated Faceless YouTube Channels: The 2026 Blueprint',
    excerpt: 'Stop filming yourself. Here is the complete tech stack for generating high-retention video content automatically.',
    category: 'Content Creation',
    date: 'Oct 23, 2025',
    readTime: '8 min read',
    imageUrl: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '3',
    title: 'AI SaaS: Building Micro-Tools for Passive Income',
    excerpt: 'You do not need to be a senior engineer. How to prompt-engineer your way to a functional SaaS product.',
    category: 'Development',
    date: 'Oct 22, 2025',
    readTime: '6 min read',
    imageUrl: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '4',
    title: 'The Rise of AI Copywriting Agencies',
    excerpt: 'Why manual copywriting is dead and how to scale an agency using autonomous agents.',
    category: 'Business',
    date: 'Oct 21, 2025',
    readTime: '4 min read',
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '5',
    title: 'Prompt Engineering for High Ticket Sales',
    excerpt: 'Train AI bots to close deals for you while you sleep. The ethical guide to automated sales.',
    category: 'Sales',
    date: 'Oct 20, 2025',
    readTime: '7 min read',
    imageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800',
  },
];

export const TOOLS: Tool[] = [
  {
    id: 'systeme',
    name: 'Systeme.io',
    description: 'The world’s easiest all-in-one marketing platform. Build funnels, send emails, and manage affiliates.',
    price: 'Free Forever Plan',
    category: 'Marketing',
    // ------------------------------------------------------------------
    // ACTION REQUIRED: Paste your Systeme.io affiliate link below
    // ------------------------------------------------------------------
    affiliateLink: 'https://systeme.io/?sa=sa02629787227d3ce36dab138ae31e4258831a372e', 
    iconUrl: 'https://images.unsplash.com/photo-1560472355-536de3962603?auto=format&fit=crop&q=80&w=200',
    rating: 5.0,
  },
  {
    id: 'marketingblocks',
    name: 'MarketingBlocks',
    description: 'AI-powered "Human-like" all-in-one marketing assistant. Creates landing pages, ads, and copy in seconds.',
    price: 'Free Trial',
    category: 'AI Assistant',
    // ------------------------------------------------------------------
    // ACTION REQUIRED: Paste your MarketingBlocks link below
    // ------------------------------------------------------------------
    affiliateLink: 'https://marketingblocks.ai/special-deal', 
    iconUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=200',
    rating: 4.9,
  },
  {
    id: 'jasper',
    name: 'Jasper AI',
    description: 'Enterprise-grade AI content platform for marketing teams to scale content production.',
    price: '$39/mo',
    category: 'Copywriting',
    // ------------------------------------------------------------------
    // ACTION REQUIRED: Paste your Jasper link below
    // ------------------------------------------------------------------
    affiliateLink: 'https://jasper.ai?fpr=YOUR_ID', 
    iconUrl: 'https://images.unsplash.com/photo-1664575602276-acd073f104c1?auto=format&fit=crop&q=80&w=200',
    rating: 4.8,
  },
  {
    id: 'midjourney',
    name: 'Midjourney',
    description: 'The highest quality AI image generator for creating stunning visuals and art.',
    price: '$10/mo',
    category: 'Design',
    // ------------------------------------------------------------------
    // ACTION REQUIRED: Paste your Midjourney/Design tool link below
    // ------------------------------------------------------------------
    affiliateLink: 'https://midjourney.com', 
    iconUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=200',
    rating: 4.9,
  },
];

export const COMING_SOON_TOOLS: Tool[] = [
  {
    id: 'cs1',
    name: 'VideoGen X',
    description: 'Next-gen text-to-video platform with lip-sync.',
    price: 'TBA',
    category: 'Video',
    affiliateLink: '#',
    iconUrl: '',
    rating: 0,
  },
  {
    id: 'cs2',
    name: 'AutoAgent 5',
    description: 'Autonomous sales agents for eCommerce.',
    price: 'TBA',
    category: 'Automation',
    affiliateLink: '#',
    iconUrl: '',
    rating: 0,
  }
];
