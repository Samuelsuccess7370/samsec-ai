
import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Check, Zap, Layers, Globe, ShieldCheck, 
  Lock, Database, Users, Cpu, CreditCard, Activity, Rocket, Shield, DollarSign, Mail, Star, Quote,
  Workflow, Bot, ExternalLink, MapPin
} from 'lucide-react';
import { Section, Container, GradientText, GlassCard } from '../components/ui/Layouts';
import EmailCapture from '../components/EmailCapture';
import { RoutePath } from '../types';
import { MAIN_PRODUCT } from '../services/mockData';

const MotionDiv = motion.div as any;

// --- VISUAL COMPONENTS ---

const DashboardMockup = () => (
  <MotionDiv 
    initial={{ opacity: 0, y: 50, rotateX: 10 }}
    animate={{ opacity: 1, y: 0, rotateX: 0 }}
    transition={{ duration: 1, delay: 0.2 }}
    className="relative mx-auto mt-12 md:mt-16 max-w-5xl perspective-1000 group px-2 md:px-0"
  >
    <div className="absolute inset-0 bg-secondary/20 blur-[40px] md:blur-[100px] rounded-full opacity-30 md:opacity-50 group-hover:opacity-70 transition-opacity duration-700" />
    <div className="relative bg-[#09090b] border border-white/10 rounded-xl shadow-2xl overflow-hidden transform transition-transform duration-700 hover:scale-[1.01]">
      <div className="h-10 bg-[#121214] border-b border-white/5 flex items-center px-4 gap-2 justify-between md:justify-start">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
        </div>
        <div className="ml-0 md:ml-4 px-3 py-1 bg-black rounded text-[9px] text-gray-500 font-mono w-auto md:w-64 border border-white/5 flex items-center justify-between gap-3 md:gap-0">
            <span className="truncate max-w-[120px] md:max-w-none">samsec_system_v2.4_active</span>
            <span className="text-green-500 whitespace-nowrap">● Online</span>
        </div>
      </div>
      <div className="flex flex-col md:grid md:grid-cols-12 h-auto md:h-[450px]">
        {/* Sidebar - hidden on mobile */}
        <div className="hidden md:flex col-span-2 bg-[#0c0c0e] border-r border-white/5 p-4 flex-col gap-4">
           <div className="h-8 w-8 bg-white/5 rounded flex items-center justify-center border border-white/5"><Activity className="w-4 h-4 text-secondary" /></div>
           <div className="h-8 w-8 bg-transparent rounded flex items-center justify-center opacity-40"><Globe className="w-4 h-4 text-white" /></div>
           <div className="h-8 w-8 bg-transparent rounded flex items-center justify-center opacity-40"><Database className="w-4 h-4 text-white" /></div>
           <div className="mt-auto h-8 w-8 bg-transparent rounded flex items-center justify-center opacity-40"><Zap className="w-4 h-4 text-white" /></div>
        </div>
        
        {/* Main Content Area */}
        <div className="w-full md:col-span-10 p-4 md:p-6 bg-[#09090b] relative">
           <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
           
           <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 mb-6">
              {/* Revenue - Spans 2 cols on mobile for emphasis */}
              <div className="col-span-2 md:col-span-1 bg-[#121214] border border-white/5 p-4 rounded-lg relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-2 opacity-10"><DollarSign className="w-8 h-8 text-white" /></div>
                 <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">System Revenue</p>
                 <h3 className="text-xl md:text-2xl font-display font-bold text-white tracking-tight">$12,450.00</h3>
                 <div className="mt-2 text-[10px] text-green-400 flex items-center gap-1">+24% Arbitrage Gain</div>
              </div>
              
              {/* Node Status */}
              <div className="bg-[#121214] border border-white/5 p-4 rounded-lg">
                 <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Active AI Nodes</p>
                 <h3 className="text-lg md:text-2xl font-display font-bold text-white tracking-tight">4 Nodes</h3>
                 <div className="mt-2 text-[10px] text-secondary flex items-center gap-1">Autonomous Ops</div>
              </div>
              
              {/* Market Status */}
              <div className="bg-[#121214] border border-white/5 p-4 rounded-lg">
                 <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Target Market</p>
                 <h3 className="text-lg md:text-2xl font-display font-bold text-white tracking-tight">Global T1</h3>
                 <div className="mt-2 text-[10px] text-gray-500 flex items-center gap-1">USA / UK Pipeline</div>
              </div>
           </div>
           
           <div className="bg-[#121214] border border-white/5 rounded-lg p-4 md:p-6 h-40 md:h-64 relative overflow-hidden flex items-end">
              <div className="flex items-end justify-between w-full h-32 md:h-40 gap-1 md:gap-2">
                 {[40, 65, 50, 80, 75, 95, 85, 100, 90, 110, 130, 150].map((h, i) => (
                    <MotionDiv 
                       key={i}
                       initial={{ height: 0 }}
                       animate={{ height: `${h / 1.5}%` }}
                       transition={{ duration: 1, delay: i * 0.05 }}
                       className="w-full bg-gradient-to-t from-secondary/10 to-secondary/50 rounded-t-sm border-t border-secondary/50"
                    />
                 ))}
              </div>
           </div>
        </div>
      </div>
    </div>
  </MotionDiv>
);

// --- SECTIONS ---

const Hero = () => (
  <section className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-10 md:pt-32 md:pb-12 overflow-hidden bg-[#020202]">
    <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-30" />
    <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-secondary/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />
    <Container className="relative z-10 w-full">
      <div className="max-w-5xl mx-auto text-center">
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/5 border border-white/10 mb-6 md:mb-8 mx-auto hover:bg-white/10 transition-colors backdrop-blur-md">
            <span className="flex h-1.5 w-1.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
            </span>
            <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.25em] text-gray-300">Global AI Infrastructure v2.4 Active</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] md:leading-[1] mb-6 tracking-tighter text-white">
            Deploy AI Income <br />
            <GradientText>Infrastructure.</GradientText>
          </h1>

          {/* CLARITY RESULT LINE */}
          <p className="max-w-3xl mx-auto text-white text-base md:text-xl mb-6 font-medium leading-relaxed px-4 md:px-2">
             Build a real AI-powered income system from scratch — <span className="text-gray-400">even if you’re starting with zero experience.</span>
          </p>
          
          <p className="max-w-2xl mx-auto text-gray-500 text-xs md:text-base mb-8 md:mb-10 font-light leading-relaxed px-6">
            The definitive operating system for modern digital leverage. Architect autonomous nodes, 
            capture global revenue, and exit the manual labor economy.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-8 px-4">
            <a 
              href={`#${RoutePath.SYSTEM}`}
              className="w-full sm:w-auto px-12 py-4 md:py-5 bg-white text-black rounded-sm font-bold text-xs uppercase tracking-[0.2em] transition-all duration-300 hover:shadow-[0_0_50px_rgba(255,255,255,0.3)] hover:-translate-y-1 flex items-center justify-center gap-3 group"
            >
              Get Instant System Access <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a 
              href="#after-join"
              className="w-full sm:w-auto px-12 py-4 md:py-5 bg-transparent border border-white/20 text-white rounded-sm font-bold text-xs uppercase tracking-[0.2em] transition-all duration-300 hover:bg-white hover:text-black hover:border-transparent flex items-center justify-center gap-3"
            >
               View Protocols <Layers className="w-4 h-4" />
            </a>
          </div>

          {/* TRUST STRIP BELOW CTA */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[9px] md:text-xs text-gray-400 uppercase tracking-widest font-bold px-4">
            <span className="flex items-center gap-1.5"><Check className="w-3 h-3 text-secondary" /> Instant Access</span>
            <span className="flex items-center gap-1.5"><Lock className="w-3 h-3 text-secondary" /> Secure Checkout</span>
            <span className="flex items-center gap-1.5"><Globe className="w-3 h-3 text-secondary" /> Works Worldwide</span>
            <span className="flex items-center gap-1.5"><Zap className="w-3 h-3 text-secondary" /> Beginner Friendly</span>
          </div>

        </MotionDiv>
      </div>
      <DashboardMockup />
    </Container>
  </section>
);

const AfterPurchase = () => (
  <Section id="after-join" className="bg-[#050505] border-y border-white/5 py-16 md:py-24">
    <Container>
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-2xl md:text-4xl font-display font-bold text-white mb-4 tracking-tight">System Initialization Process</h2>
        <p className="text-gray-500 uppercase tracking-widest text-[10px] font-bold">From Purchase to Deployment</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {[
          { icon: Mail, title: "01. Instant Delivery", desc: "Receive the complete system blueprint and access protocols directly to your email immediately after purchase." },
          { icon: Rocket, title: "02. Node Configuration", desc: "Follow the step-by-step blueprints to deploy your first autonomous income node. Zero coding required." },
          { icon: Globe, title: "03. Global Scaling", desc: "Activate your revenue pipelines in Tier-1 markets (USA/UK) and begin scaling via multiple AI agents." }
        ].map((item, i) => (
          <GlassCard key={i} className="text-center p-8 md:p-10 hover:border-secondary/30 transition-all">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <item.icon className="w-7 h-7 md:w-8 md:h-8 text-secondary" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-white mb-3 tracking-tight">{item.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
          </GlassCard>
        ))}
      </div>
    </Container>
  </Section>
);

const PremiumTestimonials = () => {
  const testimonials = [
    {
      name: "James T.",
      location: "London, UK",
      quote: "The automated node setup took me 2 hours. My first revenue signal hit 48 hours later. This isn't a course, it's a weapons-grade financial tool.",
      role: "System Architect"
    },
    {
      name: "Sarah J.",
      location: "Austin, TX",
      quote: "I’ve tried dropshipping, SMAA, everything. This is the only system that actually decouples time from money. Pure leverage.",
      role: "Digital Nomad"
    },
    {
      name: "Michael R.",
      location: "Lagos, NG",
      quote: "Finally a system that works for us in non-US countries. The payment protocols are a lifesaver. I'm earning in USD from home.",
      role: "Freelancer"
    },
    {
      name: "David K.",
      location: "Sydney, AU",
      quote: "The prompt engineering bonus alone is worth double the price. It's not just information, it's an entire operating system.",
      role: "Agency Owner"
    }
  ];

  return (
    <Section className="bg-[#020202] py-24 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>

      <Container>
        <div className="text-center mb-20">
           <MotionDiv 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/10 border border-secondary/20 text-secondary text-[10px] font-bold uppercase tracking-[0.2em] rounded mb-6 shadow-[0_0_20px_rgba(34,211,238,0.15)]"
           >
              Verified Intel
           </MotionDiv>
           <h2 className="text-4xl md:text-6xl font-display font-bold text-white tracking-tight mb-6">
              System <GradientText>Feedback</GradientText>
           </h2>
           <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto font-light leading-relaxed">
             Real results from architects deploying the SamSec infrastructure globally. <br className="hidden md:block" />
             The protocol is live and generating value.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {testimonials.map((t, i) => (
              <MotionDiv 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
              >
                 <GlassCard className="h-full border-white/5 hover:border-secondary/30 transition-all duration-500 bg-[#050505]/80 group p-8 flex flex-col relative overflow-hidden">
                    {/* Hover Glow */}
                    <div className="absolute inset-0 bg-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                    
                    <div className="mb-8 relative z-10">
                       <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border border-white/5 group-hover:border-secondary/20">
                          <Quote className="w-4 h-4 text-gray-400 group-hover:text-secondary transition-colors" />
                       </div>
                       <p className="text-gray-300 text-sm leading-relaxed font-light flex-grow italic">
                          "{t.quote}"
                       </p>
                    </div>
                    
                    <div className="mt-auto border-t border-white/5 pt-6 relative z-10">
                       <div className="flex items-center justify-between">
                          <div>
                             <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-1">{t.name}</h4>
                             <div className="flex items-center gap-1.5 text-[9px] text-gray-500 font-mono uppercase tracking-widest">
                                <MapPin className="w-2.5 h-2.5" /> {t.location}
                             </div>
                          </div>
                          <div className="flex gap-0.5">
                            {[1,2,3,4,5].map(s => <Star key={s} className="w-2.5 h-2.5 fill-secondary text-secondary" />)}
                          </div>
                       </div>
                    </div>
                 </GlassCard>
              </MotionDiv>
           ))}
        </div>
      </Container>
    </Section>
  );
};

const WhoThisIsFor = () => (
  <Section className="bg-[#020202]">
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-8 tracking-tight">Who This System Is For</h2>
          <div className="space-y-4">
            {[
              "Beginners starting from zero with no technical background.",
              "Students who want to build high-value global income skills.",
              "9-5 workers seeking an automated side income stream.",
              "Creators and freelancers looking to scale with AI leverage.",
              "Stay-at-home parents needing a flexible digital business.",
              "Anyone worldwide with a smartphone or laptop."
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-4 p-4 md:p-5 bg-white/[0.02] border border-white/5 rounded-lg hover:border-white/10 transition-colors">
                <div className="p-1 rounded bg-secondary/10 flex-shrink-0"><Check className="w-4 h-4 text-secondary" /></div>
                <p className="text-gray-300 font-medium text-sm md:text-base leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative mt-8 lg:mt-0 px-4 md:px-0">
          <GlassCard className="p-8 md:p-12 border-white/10 bg-gradient-to-br from-[#0A0A0A] to-black">
             <div className="text-center">
                <Users className="w-12 h-12 md:w-16 md:h-16 text-secondary mx-auto mb-6" />
                <h3 className="text-2xl font-display font-bold text-white mb-4 tracking-tight">Join The Architecture</h3>
                <p className="text-gray-400 text-sm mb-8 leading-relaxed font-light">
                  Join a global network of digital architects building the next generation of automated income systems. No geographic boundaries. Pure leverage.
                </p>
                <a href={`#${RoutePath.SYSTEM}`} className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-widest text-xs border-b border-secondary pb-1 hover:text-secondary transition-colors">
                  Authorize Your Access <ArrowRight className="w-3 h-3" />
                </a>
             </div>
          </GlassCard>
        </div>
      </div>
    </Container>
  </Section>
);

const ValueStack = () => (
  <Section className="bg-[#050505] border-t border-white/5">
     <Container className="max-w-4xl">
        <div className="text-center mb-12 md:mb-16">
           <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4 tracking-tight">What You Get Inside</h2>
           <p className="text-gray-400 text-base md:text-lg px-4 font-light">The complete SamSec AI Income Infrastructure package.</p>
        </div>
        
        <GlassCard className="p-8 md:p-12 bg-[#080808]">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-y-6 gap-x-12">
              {[
                 "Complete AI Income Blueprint",
                 "Step-by-Step System Setup",
                 "AI Tools & Workflows Directory",
                 "Global Income Strategies",
                 "Automation & Scaling Methods",
                 "Beginner-Friendly Guidance",
                 "Lifetime System Access",
                 "Free Bonus: Prompt Engineering Pack"
              ].map((item, i) => (
                 <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                       <Check className="w-3.5 h-3.5 text-secondary" />
                    </div>
                    <span className="text-white font-medium text-sm md:text-base">{item}</span>
                 </div>
              ))}
           </div>
        </GlassCard>
     </Container>
  </Section>
);

const RecommendedTools = () => (
  <Section className="bg-[#020202] border-t border-white/5 relative overflow-hidden">
     {/* Subtle background glow - hidden on mobile to prevent overflow/distraction */}
     <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />
     
     <Container>
        <div className="text-center mb-10 md:mb-16 relative z-10">
           <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 text-gray-400 text-[10px] font-bold uppercase tracking-[0.2em] rounded mb-4">
              <Zap className="w-3 h-3 text-yellow-400" /> External Power Ups
           </div>
           <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4 tracking-tight">
              Recommended <GradientText>Tech Stack</GradientText>
           </h2>
           <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto font-light leading-relaxed px-4">
              Accelerate your results with these powerful independent platforms. <br className="hidden md:block"/>
              We recommend these tools to automate your infrastructure.
           </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
           {/* Systeme.io */}
           <GlassCard className="p-6 md:p-8 group hover:border-secondary/30 transition-all duration-500 flex flex-col h-full">
              <div className="flex items-start justify-between mb-6">
                 <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-500/10 rounded-xl flex items-center justify-center border border-blue-500/20 group-hover:scale-105 transition-transform duration-500">
                    <Workflow className="w-6 h-6 md:w-7 md:h-7 text-blue-400" />
                 </div>
                 <span className="text-[9px] md:text-[10px] font-bold text-gray-500 uppercase tracking-widest bg-white/5 px-2 py-1 rounded">Automation</span>
              </div>
              
              <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-2">Systeme.io</h3>
              <p className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wider mb-4 md:mb-6 font-bold">The Marketing Operating System</p>
              
              <p className="text-gray-400 text-sm leading-relaxed mb-6 md:mb-8 flex-grow">
                 The only tool you need to launch your online business. Build sales funnels, send emails, create courses, and automate your entire workflow from a single dashboard.
              </p>
              
              <a 
                href="https://systeme.io/?sa=sa02629787227d3ce36dab138ae31e4258831a372e" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 md:py-4 bg-white text-black hover:bg-blue-400 border border-transparent rounded font-bold text-xs uppercase tracking-[0.15em] transition-all group-hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]"
              >
                 Get Free Account <ExternalLink className="w-3.5 h-3.5" />
              </a>
           </GlassCard>

           {/* MarketingBlocks */}
           <GlassCard className="p-6 md:p-8 group hover:border-purple-500/30 transition-all duration-500 flex flex-col h-full">
              <div className="flex items-start justify-between mb-6">
                 <div className="w-12 h-12 md:w-14 md:h-14 bg-purple-500/10 rounded-xl flex items-center justify-center border border-purple-500/20 group-hover:scale-105 transition-transform duration-500">
                    <Bot className="w-6 h-6 md:w-7 md:h-7 text-purple-400" />
                 </div>
                 <span className="text-[9px] md:text-[10px] font-bold text-gray-500 uppercase tracking-widest bg-white/5 px-2 py-1 rounded">Generative AI</span>
              </div>
              
              <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-2">MarketingBlocks</h3>
              <p className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wider mb-4 md:mb-6 font-bold">All-In-One AI Asset Creator</p>
              
              <p className="text-gray-400 text-sm leading-relaxed mb-6 md:mb-8 flex-grow">
                 An "AI Employee" that creates all your marketing assets in minutes. Generate landing pages, promo videos, ads, graphics, and email copy with just a keyword.
              </p>
              
              <a 
                href="https://hey.marketingblocks.ai/?deal=samuel98" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 md:py-4 bg-transparent hover:bg-white hover:text-black border border-white/20 rounded text-white font-bold text-xs uppercase tracking-[0.15em] transition-all group-hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]"
              >
                 View Special Deal <ExternalLink className="w-3.5 h-3.5" />
              </a>
           </GlassCard>
        </div>
        
        <p className="text-center text-[10px] text-gray-600 mt-12 uppercase tracking-widest px-6">
           Transparency: These are partner tools we trust. We may earn a commission if you use them, at no extra cost to you.
        </p>
     </Container>
  </Section>
);

const SatisfactionGuarantee = () => (
  <div className="py-12 bg-[#020202] border-t border-white/5">
    <Container className="max-w-4xl">
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 p-6 md:p-10 border border-white/10 rounded-2xl bg-white/[0.02] backdrop-blur-sm mx-4 md:mx-0">
        <div className="w-20 h-20 md:w-24 md:h-24 flex-shrink-0 bg-secondary/10 rounded-full flex items-center justify-center border border-secondary/20 shadow-[0_0_30px_rgba(34,211,238,0.1)]">
          <ShieldCheck className="w-10 h-10 md:w-12 md:h-12 text-secondary" />
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">7-Day Satisfaction Guarantee</h3>
          <p className="text-gray-400 text-sm leading-relaxed font-light">
            We stand behind the SamSec AI infrastructure. If you do not find value inside the system architecture, you can request a full refund within 7 days. Your investment is risk-protected.
          </p>
        </div>
      </div>
    </Container>
  </div>
);

const WhySamSec = () => (
  <Section className="bg-[#050505] border-t border-white/5 py-16 md:py-24">
    <Container>
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4 tracking-tight">
          Why <GradientText>SamSec AI?</GradientText>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto font-light">
          We don't sell "get rich quick" schemes. We engineer sustainable digital infrastructure.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
         {[
            {
               title: "Infrastructure First",
               desc: "Most gurus sell you a 'tactic'. We give you an entire operating system. Tactics expire; infrastructure lasts.",
               icon: Database
            },
            {
               title: "Global Currency Access",
               desc: "Earn in Dollars, Pounds, or Euros regardless of your local currency. We teach you the banking protocols.",
               icon: Globe
            },
            {
               title: "Faceless Protocols",
               desc: "Your identity remains private. Our systems are designed to operate without your face on camera.",
               icon: Shield
            },
            {
               title: "Automation Native",
               desc: "We don't just use AI to write text. We use AI to run entire business workflows autonomously.",
               icon: Cpu
            }
         ].map((item, i) => (
            <div key={i} className="flex gap-5 p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
               <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center border border-secondary/20 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
                     <item.icon className="w-6 h-6 text-secondary" />
                  </div>
               </div>
               <div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed font-light">{item.desc}</p>
               </div>
            </div>
         ))}
      </div>
    </Container>
  </Section>
);

const FinalCTA = () => (
  <Section className="relative bg-[#020202] py-20 md:py-32 overflow-hidden border-t border-white/5">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[800px] md:h-[800px] bg-secondary/5 rounded-full blur-[80px] md:blur-[120px] pointer-events-none"></div>
    <Container className="max-w-4xl text-center relative z-10">
       <GlassCard className="p-6 md:p-20 border-white/20 shadow-[0_0_100px_-20px_rgba(34,211,238,0.1)] bg-[#050505]/95 backdrop-blur-2xl mx-2 md:mx-0">
          <div className="inline-block px-4 py-1 bg-secondary/10 border border-secondary/20 text-secondary text-[10px] font-bold uppercase tracking-[0.2em] rounded mb-6 md:mb-8">
             Launch Phase Access
          </div>
          <h2 className="text-3xl md:text-6xl font-display font-bold text-white mb-6 tracking-tighter leading-tight px-4">
             Secure Your AI Operating System
          </h2>
          <p className="text-gray-400 text-sm md:text-lg mb-8 md:mb-10 max-w-2xl mx-auto font-light leading-relaxed px-4 md:px-8">
             Deploy the complete SamSec AI Income Infrastructure today. Includes full protocol access and global node configuration guides.
          </p>
          
          <div className="mb-10 md:mb-14 relative inline-block w-full max-w-[320px] md:max-w-none">
             <div className="absolute -top-3 -right-2 md:-right-8 bg-red-500 text-white text-[9px] md:text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg shadow-red-500/20 animate-pulse transform rotate-3 z-20">
                Limited Time
             </div>
             <div className="p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-sm relative overflow-hidden">
                <div className="flex flex-col items-center gap-1">
                   <p className="text-gray-500 text-[10px] md:text-sm font-bold uppercase tracking-wider mb-1">Total System Value</p>
                   <div className="flex items-center justify-center gap-3 md:gap-4">
                      <span className="text-lg md:text-3xl text-gray-600 line-through decoration-red-500/40 decoration-2 font-bold">{MAIN_PRODUCT.originalPrice}</span>
                      <span className="text-4xl md:text-8xl font-display font-bold text-white tracking-tighter text-glow drop-shadow-2xl">{MAIN_PRODUCT.price}</span>
                   </div>
                   <div className="h-px w-full max-w-[150px] md:max-w-[200px] bg-gradient-to-r from-transparent via-white/20 to-transparent my-3 md:my-4"></div>
                   <p className="text-[9px] md:text-xs text-secondary font-bold uppercase tracking-[0.2em] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
                      Price Increasing Soon
                   </p>
                </div>
             </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 w-full max-w-2xl mx-auto px-4">
            <a 
              href={MAIN_PRODUCT.lemonSqueezyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 md:py-5 bg-white text-black rounded-sm font-bold text-xs md:text-sm uppercase tracking-[0.2em] transition-all duration-300 hover:bg-secondary hover:shadow-[0_0_50_rgba(34,211,238,0.6)] hover:-translate-y-1 flex items-center justify-center gap-3 shadow-xl"
            >
              Get Access (Global) <Lock className="w-4 h-4" />
            </a>
            <a 
              href={MAIN_PRODUCT.selarLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 md:py-5 bg-transparent border border-white/20 text-white rounded-sm font-bold text-xs md:text-sm uppercase tracking-[0.2em] transition-all duration-300 hover:bg-white hover:text-black hover:border-transparent flex items-center justify-center gap-3"
            >
              African Cards <CreditCard className="w-4 h-4" />
            </a>
          </div>
          
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 md:gap-6 text-[9px] md:text-[10px] text-gray-500 uppercase tracking-widest font-medium opacity-80 px-6">
             <span className="flex items-center gap-1.5 whitespace-nowrap"><Check className="w-3 h-3 text-secondary" /> Instant access</span>
             <span className="hidden md:inline text-gray-800">•</span>
             <span className="flex items-center gap-1.5 whitespace-nowrap"><Shield className="w-3 h-3 text-secondary" /> Secure checkout</span>
             <span className="hidden md:inline text-gray-800">•</span>
             <span className="flex items-center gap-1.5 whitespace-nowrap"><Globe className="w-3 h-3 text-secondary" /> Worldwide</span>
          </div>
       </GlassCard>
    </Container>
  </Section>
);

const Home = () => {
  return (
    <div className="bg-[#020202] min-h-screen overflow-x-hidden selection:bg-secondary selection:text-black">
      <Hero />
      <AfterPurchase />
      <WhoThisIsFor />
      <ValueStack />
      <RecommendedTools />
      <SatisfactionGuarantee />
      <WhySamSec />
      <PremiumTestimonials />
      <FinalCTA />
      <Section className="pb-24 md:pb-32 pt-0 bg-[#020202]">
        <Container className="max-w-4xl">
           <div className="text-center mb-10 md:mb-12">
              <h2 className="text-xl md:text-2xl font-display font-bold text-white tracking-tight">Access the Intelligence Stream</h2>
              <p className="text-gray-500 text-xs md:text-sm mt-2 font-light">Enter your secure email for infrastructure updates and system optimization signals.</p>
           </div>
           <EmailCapture />
        </Container>
      </Section>
    </div>
  );
};

export default Home;
