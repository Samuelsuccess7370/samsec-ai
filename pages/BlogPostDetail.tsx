import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BLOG_POSTS } from '../services/mockData';
import { Container, GlassCard, GradientText } from '../components/ui/Layouts';
import { ArrowLeft, Calendar, Clock, Tag, User, ShieldCheck, Target } from 'lucide-react';
import AdUnit from '../components/AdUnit';
import { RoutePath } from '../types';

const BlogPostDetail = () => {
  const { id } = useParams();
  
  // Scroll to top when ID changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const post = BLOG_POSTS.find(p => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen pt-24 pb-12 bg-background flex items-center justify-center">
        <Container className="text-center">
            <h1 className="text-4xl font-display font-bold mb-4">404</h1>
            <p className="text-gray-400 mb-8">Signal lost. Post not found.</p>
            <Link to={RoutePath.BLOG} className="text-secondary hover:text-white transition-colors">Return to Base</Link>
        </Container>
      </div>
    );
  }

  // Related posts logic: Exclude current, sort by same category preference
  const relatedPosts = BLOG_POSTS
    .filter(p => p.id !== post.id)
    .sort((a, b) => {
        if (a.category === post.category && b.category !== post.category) return -1;
        if (a.category !== post.category && b.category === post.category) return 1;
        return 0;
    })
    .slice(0, 3);

  return (
    <div className="pt-24 pb-12 min-h-screen bg-background">
      <Container className="max-w-4xl mx-auto">
        {/* Navigation */}
        <Link to={RoutePath.BLOG} className="inline-flex items-center text-gray-400 hover:text-secondary mb-8 transition-colors group">
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" /> 
          Back to Intelligence
        </Link>

        {/* Article Header */}
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm text-gray-400 mb-6 font-mono">
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-secondary">
                <Tag className="w-3 h-3" /> {post.category}
            </span>
            <span className="flex items-center gap-1.5">
                <Calendar className="w-3 h-3" /> {post.date}
            </span>
            <span className="flex items-center gap-1.5">
                <Clock className="w-3 h-3" /> {post.readTime}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-8 leading-tight text-white">
            {post.title}
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed border-l-2 border-secondary pl-6">
            {post.excerpt}
          </p>
        </header>

        {/* Featured Image */}
        <div className="rounded-2xl overflow-hidden mb-12 border border-white/10 shadow-2xl shadow-primary/5">
          <img src={post.imageUrl} alt={post.title} className="w-full h-auto object-cover max-h-[600px]" />
        </div>

        {/* Content Body */}
        <article className="prose prose-invert prose-lg max-w-none mb-16 prose-headings:font-display prose-a:text-secondary hover:prose-a:text-white prose-img:rounded-xl">
           {/* Fallback content since mock data only has excerpts */}
           <div className="space-y-6 text-gray-300">
               <p>
                 In the rapidly evolving landscape of <strong>{post.category}</strong>, staying ahead of the curve is not just an advantage—it's a necessity for survival in the digital economy. This article explores the cutting-edge strategies that top earners are using right now to leverage AI tools like <em>Gemini</em> and <em>GPT-4</em>.
               </p>
               <h3>The Paradigm Shift</h3>
               <p>
                 Traditional income models trade time for money. AI flips this equation. By leveraging autonomous agents, we can now decouple productivity from human hours. The key lies in selecting the right tech stack that aligns with your specific goals in {post.category}.
               </p>
               
               <AdUnit format="horizontal" className="my-12" />
               
               <h3>Execution Strategy</h3>
               <p>
                 Here is the blueprint for implementing this system:
               </p>
               <ul>
                 <li><strong>Identify Leaks:</strong> Find where manual labor is slowing you down.</li>
                 <li><strong>Automate:</strong> Use tools to replace repetitive tasks.</li>
                 <li><strong>Scale:</strong> Reinvest the saved time into high-leverage activities.</li>
               </ul>
               <p>
                 The barrier to entry has never been lower, but the ceiling has never been higher. Start building your fleet of digital workers today.
               </p>
           </div>
        </article>
        
        {/* About the Author Section */}
        <GlassCard className="mb-20 p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start border-l-4 border-l-secondary/50">
          <div className="flex-shrink-0 mx-auto md:mx-0">
             <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-secondary shadow-[0_0_30px_rgba(6,182,212,0.2)] relative group">
                {/* Techy avatar placeholder */}
                <img 
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fit=crop&w=300&h=300" 
                  alt="Samuel - SamSec AI" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0" 
                />
                <div className="absolute inset-0 bg-secondary/10 group-hover:bg-transparent transition-colors"></div>
             </div>
             <div className="flex justify-center mt-4 space-x-2">
                <span className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 cursor-pointer transition-colors"><ShieldCheck className="w-4 h-4 text-gray-400" /></span>
                <span className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 cursor-pointer transition-colors"><Target className="w-4 h-4 text-gray-400" /></span>
             </div>
          </div>
          
          <div className="flex-grow">
             <div className="flex items-center gap-2 mb-2">
                <User className="w-4 h-4 text-secondary" />
                <span className="text-xs font-bold uppercase tracking-widest text-secondary">About the Author</span>
             </div>
             <h3 className="text-2xl font-display font-bold mb-4 text-white">SamSec AI <span className="text-gray-500 text-lg font-sans font-normal">| Future of Wealth</span></h3>
             
             <p className="text-gray-300 mb-4 leading-relaxed">
               Founded by <strong>Samuel</strong>, a tech-driven creator and cybersecurity enthusiast, SamSec AI shares practical methods for making money online using artificial intelligence, automation, and global digital opportunities.
             </p>
             
             <div className="bg-white/5 rounded-xl p-5 mb-6 border border-white/5">
               <h4 className="font-bold text-white mb-2 text-xs uppercase tracking-wider flex items-center gap-2">
                 <Target className="w-3 h-3 text-primary" /> Our Mission
               </h4>
               <p className="text-gray-400 text-sm italic">
                 To help everyday people leverage AI tools and the internet to create real income streams, build digital skills, and achieve financial independence.
               </p>
             </div>

             <div className="mb-6">
                <h4 className="font-bold text-white mb-3 text-xs uppercase tracking-wider">Expertise & Content</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-sm text-gray-400">
                   {['AI Money Tools', 'Online Side Hustles', 'Affiliate Income Systems', 'Automation & Business', 'Future Tech Opportunities'].map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-secondary rounded-full shadow-[0_0_5px_#06b6d4]"></div> 
                        {item}
                      </li>
                   ))}
                </ul>
             </div>
             
             <p className="text-gray-500 text-xs border-t border-white/5 pt-4">
               Practical, beginner-friendly, and results-focused — no fluff, no fake hype.
             </p>
          </div>
        </GlassCard>

        <hr className="border-white/10 mb-16" />

        {/* Related Posts Section */}
        <section>
          <div className="flex items-center gap-2 mb-8">
            <div className="h-8 w-1 bg-secondary rounded-full"></div>
            <h2 className="text-3xl font-display font-bold">Related <GradientText>Intel</GradientText></h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map(rp => (
              <GlassCard key={rp.id} className="flex flex-col h-full group p-0" hoverEffect={true}>
                 <Link to={`/blog/${rp.id}`} className="flex flex-col h-full p-6">
                    <div className="relative h-40 -mx-6 -mt-6 mb-4 overflow-hidden">
                       <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10" />
                       <img src={rp.imageUrl} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={rp.title} />
                       <div className="absolute top-2 left-2 z-20">
                         <span className="text-[10px] font-bold uppercase tracking-wider bg-black/80 backdrop-blur text-white px-2 py-1 rounded border border-white/10">
                           {rp.category}
                         </span>
                       </div>
                    </div>
                    
                    <h3 className="text-lg font-bold mb-2 group-hover:text-secondary transition-colors line-clamp-2 leading-tight">
                        {rp.title}
                    </h3>
                    
                    <div className="mt-auto pt-4 flex items-center justify-between text-xs text-gray-500 border-t border-white/5 w-full">
                       <span>{rp.date}</span>
                       <span>{rp.readTime}</span>
                    </div>
                 </Link>
              </GlassCard>
            ))}
          </div>
        </section>

      </Container>
    </div>
  );
};

export default BlogPostDetail;