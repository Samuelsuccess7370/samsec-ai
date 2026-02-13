
import React, { useState } from 'react';
import { BLOG_POSTS } from '../services/mockData';
import { Container, GlassCard, GradientText } from '../components/ui/Layouts';
import { Loader2, CheckCircle2 } from 'lucide-react';
import AdUnit from '../components/AdUnit';

const Blog = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSidebarSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || status === 'loading') return;
    
    setStatus('loading');
    
    try {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer re_XNgHMZcE_Q9RV93ppRAuC1Qf7JMqLDKfo',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'SamSec AI <support@samsec.com.ng>',
          to: [email],
          subject: 'Welcome to SamSec Daily',
          html: '<p>You are now subscribed to SamSec Daily. Access granted.</p>'
        }),
      });
      setStatus('success');
      setEmail('');
    } catch (err) {
      console.error(err);
      setStatus('idle');
    }
  };

  const fallbackImage = "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=1200";

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
                      onError={(e) => {
                        e.currentTarget.src = fallbackImage;
                      }}
                    />
                  </div>
                  <div className="p-6 md:py-8 md:pr-8 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-3 text-xs">
                      <span className="text-secondary font-bold uppercase tracking-wider">{post.category}</span>
                      <span className="text-gray-500">•</span>
                      <span className="text-gray-500">{post.date}</span>
                    </div>
                    <a href={`#/blog/${post.id}`} className="block">
                        <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{post.title}</h2>
                    </a>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                    <a href={`#/blog/${post.id}`} className="text-white text-sm font-bold border-b border-white/20 pb-0.5 inline-block self-start hover:border-white transition-colors">Read Article</a>
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

            <div className="bg-gradient-to-br from-primary to-violet-900 rounded-xl p-6 text-center shadow-xl shadow-primary/10 border border-white/10">
               <h3 className="font-bold text-xl mb-2 text-black">SamSec Daily</h3>
               <p className="text-sm text-black/70 mb-6">Get the top 3 AI money moves every morning.</p>
               
               {status === 'success' ? (
                 <div className="bg-white/10 rounded-lg p-4 flex items-center justify-center gap-2 text-white font-bold animate-in fade-in zoom-in duration-300">
                    <CheckCircle2 className="w-5 h-5 text-secondary" />
                    <span className="text-xs">Access granted. Check your email.</span>
                 </div>
               ) : (
                 <form onSubmit={handleSidebarSubmit} className="space-y-3">
                   <input 
                    required
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email address" 
                    className="w-full px-4 py-3 rounded-lg bg-black/20 border border-black/10 text-black placeholder-black/50 text-sm focus:outline-none focus:border-black/30 transition-all" 
                   />
                   <button 
                    disabled={status === 'loading'}
                    className="w-full py-3 bg-black text-white font-bold text-sm rounded-lg hover:shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 uppercase tracking-widest"
                   >
                     {status === 'loading' ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Join Free'}
                   </button>
                 </form>
               )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Blog;
