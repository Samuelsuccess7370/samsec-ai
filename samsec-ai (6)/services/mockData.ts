
import { Product, FaqItem, BlogPost, Tool, Resource } from '../types';

export const MAIN_PRODUCT: Product = {
  id: 'samsec-ai-income-system',
  title: 'SamSec AI Income Infrastructure',
  subtitle: 'The Operating System for Modern Digital Leverage',
  description: 'A comprehensive technical framework for engineering autonomous income nodes. We provide the architectural protocols required to deploy AI agents and capture revenue in high-CPM global markets.',
  price: '$29.00',
  originalPrice: '$99.00',
  features: [
    'Complete AI Income Blueprint',
    'Step-by-Step System Setup',
    'Global Income Strategies',
    'Automation Workflows',
    'Beginner-Friendly Guidance'
  ],
  modules: [
    { title: 'Protocol 01: Infrastructure Setup', desc: 'Configuring your secure digital environment and establishing the foundation for automated income nodes.' },
    { title: 'Protocol 02: The Neural Stack', desc: 'Orchestrating Gemini, GPT-4, and Midjourney to handle high-volume technical and creative output.' },
    { title: 'Protocol 03: Global Market Access', desc: 'Bypassing regional limitations to tap into Tier-1 economic zones (USA, UK, EU) from anywhere.' },
    { title: 'Protocol 04: Cognitive Automation', desc: 'Using AI to engineer high-retention faceless assets that operate 24/7 without manual intervention.' },
    { title: 'Protocol 05: Revenue Pipeline Ops', desc: 'Integrating automated payment gateways and connecting your system to global currency streams.' },
    { title: 'Protocol 06: Scaling & Redundancy', desc: 'Building a fleet of income-generating agents to ensure system resilience and exponential growth.' }
  ],
  bonuses: [
    { title: 'Enterprise Prompt Architecture', value: '$97 Value' },
    { title: 'Proprietary System Updates', value: 'Lifetime Integration' }
  ],
  lemonSqueezyLink: 'https://store.lemonsqueezy.com/checkout/buy/YOUR_LINK_HERE',
  selarLink: 'https://selar.co/YOUR_LINK_HERE',
};

export const FAQS: FaqItem[] = [
  {
    question: "Is this for beginners with zero experience?",
    answer: "Yes. The system is engineered for zero-to-one execution. We focus on teaching the 'infrastructure skills' of the future—no prior tech background is required, only the ability to follow a step-by-step blueprint."
  },
  {
    question: "What exactly am I building?",
    answer: "You are building automated digital assets (YouTube channels, affiliate nodes, AI-driven content systems) that run on autonomous agents. You are building a real income system, not just selling a product."
  },
  {
    question: "Do I need to show my face?",
    answer: "Never. This is a faceless infrastructure protocol. We focus on 'automation-based income' where AI agents perform the work. Your privacy is paramount."
  },
  {
    question: "How does 'Global Access' work?",
    answer: "We teach you how to architect your digital presence to operate in high-income countries like the USA and UK, regardless of where you are physically located (Nigeria, India, Philippines, etc.)."
  },
  {
    question: "Is there a guarantee?",
    answer: "Yes. We offer a 7-Day Satisfaction Guarantee. If you do not find value in the system, you can request a refund within 7 days."
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'ai-arbitrage-2026',
    title: 'The AI Arbitrage Economy: Capturing Global Value',
    excerpt: 'How autonomous systems are redefining wealth creation by leveraging digital nodes across international borders.',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000',
    category: 'Economy',
    date: 'Jan 15, 2026',
    readTime: '6 min read'
  },
  {
    id: 'agentic-workflows',
    title: 'Engineering Agentic Workflows for Faceless Income',
    excerpt: 'A deep dive into the technical stack required to replace manual content creation with autonomous AI cycles.',
    imageUrl: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1000',
    category: 'Automation',
    date: 'Jan 10, 2026',
    readTime: '10 min read'
  }
];

export const TOOLS: Tool[] = [
  {
    id: 'gemini-pro',
    name: 'Gemini 3 Pro',
    description: 'The primary engine for complex reasoning and system-wide content orchestration.',
    price: 'Free / $20/mo',
    affiliateLink: 'https://gemini.google.com/',
    category: 'AI Engines',
    rating: 4.9,
    iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg'
  }
];

export const RESOURCES: Resource[] = [
  {
    id: 'res-infrastructure',
    name: 'Cloud Nodes',
    description: 'Global hosting and IP solutions for maintaining a secure Tier-1 digital footprint.',
    link: '#',
    category: 'Infrastructure',
    isPremium: true
  }
];
