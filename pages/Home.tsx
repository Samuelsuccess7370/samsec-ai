import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, TrendingUp, Cpu, ChevronRight, CheckCircle, Smartphone, Globe, Sparkles, Star } from 'lucide-react';
import { BLOG_POSTS, TOOLS, COMING_SOON_TOOLS } from '../services/mockData';
import { Section, Container, GradientText, GlassCard } from '../components/ui/Layouts';
import AdUnit from '../components/AdUnit';
import ToolCard from '../components/ToolCard';
import { RoutePath } from '../types';

const HeroSection = () => (
  <section className="relative min-h-[90vh] flex items-center justify-center pt-20 pb-32 overflow-hidden">
    {/* Refined Background Effects */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(109,40,217,0.15),transparent_50%)]" />
    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 brightness-100 contrast-150 mix-blend-overlay"></div>
    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    
    <Container className="relative z-10 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/5 border border-white/10 text-secondary text-[11px] font-bold tracking-[0.2em] uppercase mb-8 backdrop-blur-md shadow-lg shadow-black/50">
          <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
          The Authority on AI Income
        </span>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.1] mb-8 tracking-tight">
          Discover AI Tools <br />
          <span className="text-white">That</span> <GradientText>Generate Income</GradientText>
        </h1>
        
        <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl mb-12 font-light leading-relaxed">
          We test and reveal powerful AI tools, automation platforms, and digital systems used to make money online globally.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to={RoutePath.TOOLS} className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-cyan-50 transition-all flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.4)]">
            Explore Tools <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link to={RoutePath.MONEY} className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm">
            Start Earning
          </Link>
        </div>
      </motion.div>
    </Container>
  </section>
);

const ToolOfTheWeek = () => {
  const featuredTool = TOOLS[0]; // Highlighting the first tool (Systeme.io)

  return (
    <section className="relative z-30 -mt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex items-center gap-2 mb-4 justify-center md:justify-start pl-2">
            <Sparkles className="text-amber-400 w-5 h-5 animate-pulse" />
            <span className="text-sm font-bold uppercase tracking-widest text-amber-400 text-shadow-sm">Editor's Choice of the Week</span>
      </div>
      <GlassCard className="relative overflow-hidden border-secondary/30 shadow-[0_0_50px_-10px_rgba(6,182,212,0.15)] group">
            {/* Background Image/Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 via-transparent to-primary/5 opacity-100" />
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-secondary/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-secondary/20 transition-colors duration-700" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12 p-2 md:p-6">
                {/* Image Container */}
                <div className="w-24 h-24 md:w-40 md:h-40 rounded-2xl bg-black/50 border border-white/10 flex items-center justify-center p-4 shadow-2xl flex-shrink-0 backdrop-blur-sm">
                    <img src={featuredTool.iconUrl} alt={featuredTool.name} className="w-full h-full object-cover rounded-lg" />
                </div>
                
                {/* Content */}
                <div className="flex-grow text-center md:text-left space-y-4">
                    <div className="flex items-center justify-center md:justify-start gap-3">
                         <span className="px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-xs font-bold uppercase tracking-wider text-secondary">{featuredTool.category}</span>
                         <div className="flex items-center gap-1 text-amber-400 text-sm font-bold bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                            <Star className="w-3.5 h-3.5 fill-current" /> {featuredTool.rating}
                         </div>
                    </div>
                    
                    <div>
                        <h3 className="text-3xl md:text-5xl font-display font-bold text-white mb-2">{featuredTool.name}</h3>
                        <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl">{featuredTool.description}</p>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start pt-2">
                        <a href={featuredTool.affiliateLink} className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-secondary to-blue-600 text-white font-bold rounded-lg hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all flex items-center justify-center gap-2 group transform hover:-translate-y-0.5">
                            Try It Free <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <span className="text-sm text-gray-400 font-mono border-l border-white/10 pl-4 ml-2">{featuredTool.price}</span>
                    </div>
                </div>
            </div>
      </GlassCard>
    </section>
  );
};

const Home = () => {
  return (
    <div className="bg-background">
      <HeroSection />
      
      <ToolOfTheWeek />
      
      {/* 2. Featured AI Tools Section */}
      <Section className="relative z-20 pt-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 px-2">
            <div>
               <h2 className="text-3xl font-display font-bold mb-2">Featured <GradientText>Platforms</GradientText></h2>
               <p className="text-gray-400 text-sm">Hand-picked tools verified for monetization.</p>
            </div>
            <Link to={RoutePath.TOOLS} className="hidden md:flex items-center text-sm font-bold text-secondary hover:text-white transition-colors">
                View Full Directory <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TOOLS.slice(1).map((tool) => (
            <ToolCard key={tool.id} tool={tool} featured={tool.rating >= 4.9} />
          ))}
          {/* Add first tool back if needed, or keeping it exclusive to spotlight */}
          <ToolCard tool={TOOLS[0]} featured={true} /> 
        </div>
      </Section>

      <AdUnit format="horizontal" />

      {/* 3. Make Money with AI Section */}
      <Section className="bg-surface/30 border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-32 bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
        <Container>
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div>
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
                  Turn <span className="text-white">Technology</span> into <GradientText>Revenue</GradientText>
                </h2>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  The digital economy has shifted. You no longer need extensive coding skills or large teams to build wealth. By leveraging the right AI stack, you can automate:
                </p>
                
                <div className="space-y-4 mb-10">
                   {[
                     "Faceless Content Creation & Distribution",
                     "High-Ticket Affiliate Marketing Systems",
                     "Automated Customer Support Agencies",
                     "SaaS Micro-Tool Development"
                   ].map((item, i) => (
                     <div key={i} className="flex items-center gap-4 group">
                       <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-secondary/50 transition-colors">
                          <CheckCircle className="w-5 h-5 text-secondary" />
                       </div>
                       <span className="text-gray-300 font-medium">{item}</span>
                     </div>
                   ))}
                </div>
                
                <Link to={RoutePath.MONEY} className="inline-flex items-center text-white border-b border-secondary pb-1 hover:text-secondary transition-colors font-bold tracking-wide">
                  Read the Strategy Guides <ChevronRight className="w-4 h-4 ml-2" />
                </Link>
             </div>
             
             <div className="grid grid-cols-2 gap-4">
                <GlassCard className="aspect-square flex flex-col items-center justify-center text-center p-6 bg-gradient-to-br from-white/5 to-transparent">
                   <Globe className="w-10 h-10 text-primary mb-4" />
                   <h3 className="font-bold text-white mb-1">Global Reach</h3>
                   <p className="text-xs text-gray-500">Operate from anywhere in the world.</p>
                </GlassCard>
                <GlassCard className="aspect-square flex flex-col items-center justify-center text-center p-6 translate-y-8 bg-gradient-to-br from-white/5 to-transparent">
                   <Cpu className="w-10 h-10 text-secondary mb-4" />
                   <h3 className="font-bold text-white mb-1">Zero Code</h3>
                   <p className="text-xs text-gray-500">No technical barriers to entry.</p>
                </GlassCard>
                <GlassCard className="aspect-square flex flex-col items-center justify-center text-center p-6 bg-gradient-to-br from-white/5 to-transparent">
                   <TrendingUp className="w-10 h-10 text-accent mb-4" />
                   <h3 className="font-bold text-white mb-1">Scalable</h3>
                   <p className="text-xs text-gray-500">Decouple time from money.</p>
                </GlassCard>
                <GlassCard className="aspect-square flex flex-col items-center justify-center text-center p-6 translate-y-8 bg-gradient-to-br from-white/5 to-transparent">
                   <Smartphone className="w-10 h-10 text-white mb-4" />
                   <h3 className="font-bold text-white mb-1">Mobile First</h3>
                   <p className="text-xs text-gray-500">Manage your empire from a phone.</p>
                </GlassCard>
             </div>
           </div>
        </Container>
      </Section>

      {/* 5. Tools Coming Soon */}
      <Section>
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-display font-bold mb-4">In The <span className="text-gray-500">Lab</span></h2>
            <p className="text-gray-400">
              We are currently testing these tools for quality, reliability, and monetization potential. 
              Full reviews dropping soon.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 opacity-80">
            {COMING_SOON_TOOLS.map((tool) => (
               <ToolCard key={tool.id} tool={tool} comingSoon={true} />
            ))}
            {/* Placeholder for layout balance */}
            <GlassCard className="flex items-center justify-center border-dashed border-white/10 bg-transparent">
               <span className="text-xs text-gray-600 uppercase tracking-widest">More Incoming...</span>
            </GlassCard>
          </div>
        </Container>
      </Section>

      {/* 6. Blog Preview Section */}
      <Section className="bg-black relative">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-2">Latest <span className="text-primary">Intelligence</span></h2>
            <p className="text-gray-400">Daily drops on AI money-making strategies.</p>
          </div>
          <Link to={RoutePath.BLOG} className="hidden md:flex items-center text-secondary hover:text-white transition-colors text-sm font-bold uppercase tracking-wider">
            Read The Blog <ChevronRight className="ml-1 w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.slice(0, 3).map((post) => (
            <Link to={`/blog/${post.id}`} key={post.id} className="block group cursor-pointer">
              <div className="rounded-2xl overflow-hidden mb-5 relative h-64 border border-white/5">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 left-4 z-20">
                   <span className="bg-black/60 backdrop-blur text-white text-[10px] px-3 py-1.5 rounded-full border border-white/10 uppercase tracking-wider font-bold">
                     {post.category}
                   </span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center text-xs text-gray-500 space-x-3 font-mono">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 bg-gray-500 rounded-full" />
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-secondary transition-colors leading-tight font-display">
                  {post.title}
                </h3>
                <p className="text-gray-400 text-sm line-clamp-2 leading-relaxed">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-12 md:hidden flex justify-center">
           <Link to={RoutePath.BLOG} className="w-full text-center py-4 rounded-lg border border-white/10 text-white font-bold">View All Posts</Link>
        </div>
      </Section>

      {/* 7. Email/Newsletter Capture */}
      <Section>
        <Container>
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#0f0f0f] to-[#151515] border border-white/10 p-8 md:p-20 text-center">
             <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
             {/* Decorative glows */}
             <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full pointer-events-none"></div>
             <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/10 blur-[100px] rounded-full pointer-events-none"></div>

             <div className="relative z-10 max-w-2xl mx-auto">
               <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-white">Join for new AI tools <br/> & income resources</h2>
               <p className="text-gray-400 mb-10 text-lg">
                 Get our verified list of paying affiliate programs and automated workflow blueprints. Sent weekly. Zero spam.
               </p>
               
               <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                 <input 
                   type="email" 
                   placeholder="enter@email.com" 
                   className="flex-1 px-6 py-4 rounded-full bg-black/50 backdrop-blur border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-secondary transition-colors text-center sm:text-left"
                 />
                 <button className="px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-gray-200 transition-colors shadow-lg shadow-white/10">
                   Subscribe
                 </button>
               </form>
               <p className="text-gray-600 text-xs mt-6">
                 By subscribing, you agree to our Privacy Policy. Join 25,000+ creators.
               </p>
             </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default Home;