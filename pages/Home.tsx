
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Check, Zap, Layers, Globe, ShieldCheck, 
  Lock, Database, Users, Cpu, CreditCard, Activity, Terminal, Download, Rocket, Shield, Server, DollarSign, Mail, Star, Quote
} from 'lucide-react';
import { Section, Container, GradientText, GlassCard } from '../components/ui/Layouts';
import EmailCapture from '../components/EmailCapture';
import { RoutePath } from '../types';
import { MAIN_PRODUCT } from '../services/mockData';

// --- VISUAL COMPONENTS ---

const DashboardMockup = () => (
  <motion.div 
    initial={{ opacity: 0, y: 50, rotateX: 10 }}
    animate={{ opacity: 1, y: 0, rotateX: 0 }}
    transition={{ duration: 1, delay: 0.2 }}
    className="relative mx-auto mt-12 md:mt-16 max-w-5xl perspective-1000 group px-0 md:px-0"
  >
    <div className="absolute inset-0 bg-secondary/20 blur-[60px] md:blur-[100px] rounded-full opacity-30 md:opacity-50 group-hover:opacity-70 transition-opacity duration-700" />
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
        <div className="hidden md:flex col-span-2 bg-[#0c0c0e] border-r border-white/5 p-4 flex-col gap-4">
           <div className="h-8 w-8 bg-white/5 rounded flex items-center justify-center border border-white/5"><Activity className="w-4 h-4 text-secondary" /></div>
           <div className="h-8 w-8 bg-transparent rounded flex items-center justify-center opacity-40"><Globe className="w-4 h-4 text-white" /></div>
           <div className="h-8 w-8 bg-transparent rounded flex items-center justify-center opacity-40"><Database className="w-4 h-4 text-white" /></div>
           <div className="mt-auto h-8 w-8 bg-transparent rounded flex items-center justify-center opacity-40"><Zap className="w-4 h-4 text-white" /></div>
        </div>
        <div className="w-full md:col-span-10 p-4 md:p-6 bg-[#09090b] relative">
           <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
           
           <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-6">
              <div className="bg-[#121214] border border-white/5 p-4 rounded-lg relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-2 opacity-10"><DollarSign className="w-8 h-8 text-white" /></div>
                 <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">System Revenue</p>
                 <h3 className="text-xl md:text-2xl font-display font-bold text-white tracking-tight">$12,450.00</h3>
                 <div className="mt-2 text-[10px] text-green-400 flex items-center gap-1">+24% Arbitrage Gain</div>
              </div>
              
              {/* Mobile: Combined stats row */}
              <div className="grid grid-cols-2 gap-4 sm:hidden">
                 <div className="bg-[#121214] border border-white/5 p-4 rounded-lg">
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Nodes</p>
                    <h3 className="text-lg font-display font-bold text-white tracking-tight">4 Active</h3>
                 </div>
                 <div className="bg-[#121214] border border-white/5 p-4 rounded-lg">
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Market</p>
                    <h3 className="text-lg font-display font-bold text-white tracking-tight">Global</h3>
                 </div>
              </div>

              {/* Desktop: Full stats cards */}
              <div className="bg-[#121214] border border-white/5 p-4 rounded-lg hidden sm:block">
                 <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Active AI Nodes</p>
                 <h3 className="text-2xl font-display font-bold text-white tracking-tight">4 Nodes</h3>
                 <div className="mt-2 text-[10px] text-secondary flex items-center gap-1">Autonomous Ops</div>
              </div>
              <div className="bg-[#121214] border border-white/5 p-4 rounded-lg hidden sm:block">
                 <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Target Market</p>
                 <h3 className="text-2xl font-display font-bold text-white tracking-tight">Global T1</h3>
                 <div className="mt-2 text-[10px] text-gray-500 flex items-center gap-1">USA / UK Pipeline</div>
              </div>
           </div>
           
           <div className="bg-[#121214] border border-white/5 rounded-lg p-4 md:p-6 h-48 md:h-64 relative overflow-hidden">
              <div className="flex items-end justify-between h-32 md:h-40 gap-2">
                 {[40, 65, 50, 80, 75, 95, 85, 100, 90, 110, 130, 150].map((h, i) => (
                    <motion.div 
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
  </motion.div>
);

// --- SECTIONS ---

const Hero = () => (
  <section className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-10 md:pt-32 md:pb-12 overflow-hidden bg-[#020202]">
    <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-30" />
    <div className="absolute top-0 right-0 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-secondary/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />
    <Container className="relative z-10 w-full">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
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
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.1] md:leading-[1] mb-6 tracking-tighter text-white">
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
            <Link 
              to={RoutePath.SYSTEM} 
              className="w-full sm:w-auto px-12 py-4 md:py-5 bg-white text-black rounded-sm font-bold text-xs uppercase tracking-[0.2em] transition-all duration-300 hover:shadow-[0_0_50px_rgba(255,255,255,0.3)] hover:-translate-y-1 flex items-center justify-center gap-3 group"
            >
              Initialize System <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
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

        </motion.div>
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

const EarlyAccessResults = () => {
  const testimonials = [
    {
      name: "Daniel R.",
      location: "Toronto",
      text: "Finally something structured. No hype, no fluff. Just a clear AI income system I can actually follow."
    },
    {
      name: "Sophie L.",
      location: "London",
      text: "I’ve bought many online guides before but this feels different. It’s written like a real business blueprint."
    },
    {
      name: "Marcus T.",
      location: "New York",
      text: "The faceless strategy alone is worth more than the price. This is easily a $300+ course."
    },
    {
      name: "Ethan K.",
      location: "Sydney",
      text: "Clean, direct and powerful. If you actually implement this, you’ll make money online."
    },
    {
      name: "Andre M.",
      location: "Berlin",
      text: "No motivation nonsense. Just real AI systems and execution steps. Respect."
    }
  ];

  return (
    <Section className="bg-[#020202] py-16 md:py-24">
      <Container>
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/10 border border-secondary/20 text-secondary text-[10px] font-bold uppercase tracking-[0.2em] rounded mb-4">
            Social Proof
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4 tracking-tight">Early Access Results</h2>
          <p className="text-gray-400 text-sm md:text-lg max-w-2xl mx-auto font-light leading-relaxed px-4">
            Feedback from early readers and private beta users of the SamSec AI Income System.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <GlassCard className="h-full flex flex-col p-6 md:p-8 hover:border-white/20 transition-all border-white/5">
                <Quote className="w-8 h-8 text-secondary/30 mb-6" />
                <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8 flex-grow italic font-light">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3 pt-6 border-t border-white/5">
                   <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs font-bold text-gray-400 uppercase">
                      {t.name.split(' ')[0][0]}
                   </div>
                   <div>
                      <h4 className="text-white text-xs font-bold tracking-widest uppercase">{t.name}</h4>
                      <p className="text-gray-500 text-[10px] uppercase tracking-widest">{t.location}</p>
                   </div>
                   <div className="ml-auto flex gap-0.5">
                      {[1,2,3,4,5].map(s => <Star key={s} className="w-2.5 h-2.5 fill-secondary text-secondary" />)}
                   </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
           <p className="text-[10px] text-gray-600 uppercase tracking-widest max-w-xl mx-auto leading-loose px-4">
              These are early-access and beta reader experiences. Results vary based on implementation and effort.
           </p>
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
                <Link to={RoutePath.SYSTEM} className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-widest text-xs border-b border-secondary pb-1 hover:text-secondary transition-colors">
                  Authorize Your Access <ArrowRight className="w-3 h-3" />
                </Link>
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
  <Section className="py-16 bg-[#020202]">
    <Container className="max-w-3xl text-center">
      <h3 className="text-xl md:text-3xl font-display font-bold text-white mb-6 tracking-tight">Why SamSec AI?</h3>
      <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light px-6">
        SamSec AI focuses on real AI income skills for the modern global economy. <br className="hidden md:block" />
        No hype. No unrealistic promises. Only structured, practical systems designed for real-world results.
      </p>
    </Container>
  </Section>
);

const FinalCTA = () => (
  <Section className="relative bg-[#020202] py-20 md:py-32 overflow-hidden border-t border-white/5">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[800px] md:h-[800px] bg-secondary/5 rounded-full blur-[80px] md:blur-[120px] pointer-events-none"></div>
    <Container className="max-w-4xl text-center relative z-10">
       <GlassCard className="p-8 md:p-20 border-white/20 shadow-[0_0_100px_-20px_rgba(34,211,238,0.1)] bg-[#050505]/95 backdrop-blur-2xl mx-4 md:mx-0">
          <div className="inline-block px-4 py-1.5 bg-secondary/10 border border-secondary/20 text-secondary text-[10px] font-bold uppercase tracking-[0.2em] rounded mb-6 md:mb-8">
             Launch Phase Access
          </div>
          <h2 className="text-3xl md:text-6xl font-display font-bold text-white mb-6 tracking-tighter leading-tight">
             Secure Your AI Operating System
          </h2>
          <p className="text-gray-400 text-base md:text-lg mb-8 md:mb-10 max-w-2xl mx-auto font-light leading-relaxed px-4">
             Deploy the complete SamSec AI Income Infrastructure today. Includes full protocol access and global node configuration guides.
          </p>
          
          <div className="mb-10 md:mb-12">
            <div className="flex items-baseline justify-center gap-3 md:gap-4">
              <span className="text-6xl md:text-8xl font-display font-bold text-white tracking-tighter text-glow">{MAIN_PRODUCT.price}</span>
              <div className="text-left">
                <span className="block text-lg md:text-xl text-gray-600 line-through font-bold">Value: $99.00</span>
                <span className="block text-[9px] md:text-[10px] text-secondary font-bold uppercase tracking-widest mt-1">One-Time Access Fee</span>
              </div>
            </div>
            <p className="mt-4 text-[10px] md:text-xs text-red-500 font-bold uppercase tracking-[0.2em] animate-pulse">Launch Price: {MAIN_PRODUCT.price} • Price Increasing Soon</p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 w-full max-w-2xl mx-auto px-4">
            <a 
              href={MAIN_PRODUCT.lemonSqueezyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 md:py-5 bg-white text-black rounded-sm font-bold text-xs md:text-sm uppercase tracking-[0.2em] transition-all duration-300 hover:bg-secondary hover:shadow-[0_0_50_rgba(34,211,238,0.6)] hover:-translate-y-1 flex items-center justify-center gap-3 shadow-xl"
            >
              Get Instant Access (Global) <Lock className="w-4 h-4" />
            </a>
            <a 
              href={MAIN_PRODUCT.selarLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 md:py-5 bg-transparent border border-white/20 text-white rounded-sm font-bold text-xs md:text-sm uppercase tracking-[0.2em] transition-all duration-300 hover:bg-white hover:text-black hover:border-transparent flex items-center justify-center gap-3"
            >
              Get Instant Access (African Cards) <CreditCard className="w-4 h-4" />
            </a>
          </div>
          
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 md:gap-6 text-[10px] text-gray-500 uppercase tracking-widest font-medium opacity-80 px-6">
             <span className="flex items-center gap-1.5 whitespace-nowrap"><Check className="w-3 h-3 text-secondary" /> Instant access after payment</span>
             <span className="hidden md:inline text-gray-800">•</span>
             <span className="flex items-center gap-1.5 whitespace-nowrap"><Shield className="w-3 h-3 text-secondary" /> Secure checkout</span>
             <span className="hidden md:inline text-gray-800">•</span>
             <span className="flex items-center gap-1.5 whitespace-nowrap"><Globe className="w-3 h-3 text-secondary" /> Works worldwide</span>
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
      <SatisfactionGuarantee />
      <EarlyAccessResults />
      <WhySamSec />
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
