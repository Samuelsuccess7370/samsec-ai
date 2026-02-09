import React from 'react';
import { BLOG_POSTS } from '../services/mockData';
import { Section, Container, GlassCard, GradientText } from '../components/ui/Layouts';
import { Link } from 'react-router-dom';
import AdUnit from '../components/AdUnit';

const Blog = () => {
  return (
    <div className="pt-24 pb-12 min-h-screen bg-background">
      <Container>
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
            Intelligence <GradientText>Center</GradientText>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Deep dives into automated revenue models, prompt engineering, and the future of work.
          </p>
        </div>

        <AdUnit format="horizontal" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
             {BLOG_POSTS.map((post) => (
               <GlassCard key={post.id} className="flex flex-col md:flex-row gap-6 p-0 md:p-0 overflow-hidden group">
                  <div className="w-full md:w-2/5 h-64 md:h-auto overflow-hidden">
                    <img 
                      src={post.imageUrl} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6 md:py-8 md:pr-8 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-3 text-xs">
                      <span className="text-secondary font-bold uppercase tracking-wider">{post.category}</span>
                      <span className="text-gray-500">•</span>
                      <span className="text-gray-500">{post.date}</span>
                    </div>
                    <Link to={`/blog/${post.id}`} className="block">
                        <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{post.title}</h2>
                    </Link>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                    <Link to={`/blog/${post.id}`} className="text-white text-sm font-bold border-b border-white/20 pb-0.5 inline-block self-start hover:border-white transition-colors">Read Article</Link>
                  </div>
               </GlassCard>
             ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <GlassCard>
              <h3 className="font-display font-bold text-lg mb-4">Trending Topics</h3>
              <div className="flex flex-wrap gap-2">
                {['Crypto', 'SaaS', 'Youtube Automation', 'Prompt Engineering', 'Affiliate Marketing', 'No-Code'].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-white/5 hover:bg-white/10 rounded-full text-xs text-gray-300 cursor-pointer transition-colors border border-white/5">
                    #{tag}
                  </span>
                ))}
              </div>
            </GlassCard>

            <AdUnit format="rectangle" />

            <div className="bg-gradient-to-br from-primary to-violet-900 rounded-xl p-6 text-center">
               <h3 className="font-bold text-xl mb-2">SamSec Daily</h3>
               <p className="text-sm text-white/80 mb-4">Get the top 3 AI money moves every morning.</p>
               <input type="email" placeholder="Email address" className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 text-white placeholder-white/50 text-sm mb-2" />
               <button className="w-full py-2 bg-white text-primary font-bold text-sm rounded hover:bg-gray-100 transition-colors">Join Free</button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Blog;