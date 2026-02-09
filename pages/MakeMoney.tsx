import React from 'react';
import { Section, Container, GradientText, GlassCard } from '../components/ui/Layouts';
import { CheckCircle2, TrendingUp, DollarSign, AlertTriangle } from 'lucide-react';
import AdUnit from '../components/AdUnit';

const MakeMoney = () => {
  const strategies = [
    {
      title: "AI Affiliate Arbitrage",
      desc: "Use automated bots to generate content for high-ticket affiliate programs on autopilot.",
      level: "Beginner",
      potential: "$5k - $10k/mo"
    },
    {
      title: "Faceless Video Empire",
      desc: "Deploy 10+ YouTube channels using AI script-to-video tools. Zero filming required.",
      level: "Intermediate",
      potential: "$15k+/mo"
    },
    {
      title: "Custom AI Agent Agency",
      desc: "Build customer support chatbots for local businesses using no-code platforms.",
      level: "Advanced",
      potential: "$50k+/mo"
    }
  ];

  return (
    <div className="pt-24 pb-12 min-h-screen bg-background">
      <Container>
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
            Income <GradientText>Blueprints</GradientText>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Step-by-step guides to building automated wealth in the AI era.
          </p>
        </div>

        <div className="space-y-6">
          {strategies.map((strategy, idx) => (
            <GlassCard key={idx} className="flex flex-col md:flex-row items-center justify-between p-8 gap-6">
               <div className="flex-1">
                 <div className="flex items-center gap-3 mb-2">
                   <h3 className="text-2xl font-bold">{strategy.title}</h3>
                   <span className={`text-xs px-2 py-1 rounded bg-white/5 border border-white/10 ${strategy.level === 'Beginner' ? 'text-green-400' : strategy.level === 'Intermediate' ? 'text-yellow-400' : 'text-red-400'}`}>
                     {strategy.level}
                   </span>
                 </div>
                 <p className="text-gray-400">{strategy.desc}</p>
               </div>
               
               <div className="flex flex-col items-end min-w-[150px]">
                  <span className="text-xs text-gray-500 uppercase tracking-widest mb-1">Potential</span>
                  <div className="text-xl font-bold text-secondary flex items-center gap-1">
                     <TrendingUp className="w-5 h-5" /> {strategy.potential}
                  </div>
               </div>

               <button className="bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-secondary hover:text-white transition-all w-full md:w-auto">
                 Unlock Guide
               </button>
            </GlassCard>
          ))}
        </div>

        <AdUnit />
        
        <div className="mt-16 bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
           <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
             <DollarSign className="text-green-500" />
             Why start now?
           </h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             {["Early Adopter Advantage", "Low Barrier to Entry (for now)", "Compounding Digital Assets", "Automation = Freedom"].map((item, i) => (
               <div key={i} className="flex items-center gap-3">
                 <CheckCircle2 className="text-primary w-5 h-5" />
                 <span className="text-gray-300">{item}</span>
               </div>
             ))}
           </div>
        </div>

        <div className="mt-12 flex gap-4 p-6 rounded-xl bg-red-900/10 border border-red-900/20">
            <AlertTriangle className="text-red-400 w-6 h-6 flex-shrink-0" />
            <p className="text-xs text-red-200/60 leading-relaxed">
               <strong className="text-red-400 block mb-1">EARNINGS DISCLAIMER</strong>
               The income figures and potential results listed on this page are for illustrative purposes only and represent best-case scenarios based on current market trends. Individual results will vary significantly. Making money online requires sustained effort, skill development, and risk tolerance. We do not guarantee any specific financial outcomes.
            </p>
        </div>
      </Container>
    </div>
  );
};

export default MakeMoney;