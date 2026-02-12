
import React, { useEffect } from 'react';
import { MAIN_PRODUCT } from '../services/mockData';
import { Section, Container, GradientText, GlassCard } from '../components/ui/Layouts';
import { Check, Shield, Layers, Cpu, Globe, Lock, CreditCard, Terminal } from 'lucide-react';

const Products = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 md:pt-32 pb-20 min-h-screen bg-[#030303]">
      <Container>
        {/* Header */}
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] text-gray-400 uppercase tracking-widest mb-6">
             <Terminal className="w-3 h-3 text-secondary" /> System Installation
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-white tracking-tighter">
            System <GradientText>Architecture</GradientText>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-light">
            The SamSec AI Income Infrastructure is a modular technical framework. 
            Below is the full architecture of the system you are authorizing.
          </p>
        </div>

        {/* Product Card */}
        <div className="max-w-5xl mx-auto">
          <GlassCard className="p-0 overflow-hidden border-white/10 bg-[#080808] flex flex-col md:flex-row">
             {/* Left Column: Visuals & Core Specs */}
             <div className="w-full md:w-2/5 border-b md:border-b-0 md:border-r border-white/10 bg-black/20 p-8 md:p-12 flex flex-col">
                <div className="mb-auto">
                   <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                      <Cpu className="w-8 h-8 text-black" />
                   </div>
                   <h2 className="text-2xl font-display font-bold text-white mb-2 tracking-tight">{MAIN_PRODUCT.title}</h2>
                   <p className="text-xs text-secondary uppercase tracking-widest font-bold mb-6">Infrastructure Node v2.4</p>
                   <p className="text-gray-400 text-sm leading-relaxed mb-8 font-light">
                     {MAIN_PRODUCT.description}
                   </p>
                </div>
                
                <div className="space-y-4 pt-8 border-t border-white/10">
                   <div className="flex justify-between text-[10px] font-bold">
                      <span className="text-gray-500 uppercase tracking-widest">Type</span>
                      <span className="text-white uppercase tracking-widest">System Deployment</span>
                   </div>
                   <div className="flex justify-between text-[10px] font-bold">
                      <span className="text-gray-500 uppercase tracking-widest">Access</span>
                      <span className="text-white uppercase tracking-widest">Instant Email Delivery</span>
                   </div>
                   <div className="flex justify-between text-[10px] font-bold">
                      <span className="text-gray-500 uppercase tracking-widest">Region</span>
                      <span className="text-white uppercase tracking-widest">Global T1 Markets</span>
                   </div>
                </div>
             </div>

             {/* Right Column: Modules & Checkout */}
             <div className="w-full md:w-3/5 p-6 md:p-12 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-2 tracking-tight">
                   <Layers className="w-5 h-5 text-secondary" /> System Protocols
                </h3>
                
                <div className="space-y-4 md:space-y-6 mb-12">
                   {MAIN_PRODUCT.modules.map((mod, i) => (
                      <div key={i} className="flex items-start gap-4 p-4 rounded-lg hover:bg-white/[0.03] transition-colors border border-transparent hover:border-white/5">
                         <span className="text-xs font-mono text-secondary mt-1 font-bold">PROT_{i+1}</span>
                         <div>
                            <h4 className="text-sm md:text-base font-bold text-white tracking-tight">{mod.title}</h4>
                            <p className="text-xs text-gray-500 mt-1.5 leading-relaxed font-light">{mod.desc}</p>
                         </div>
                      </div>
                   ))}
                </div>

                <div className="mt-auto bg-white/[0.02] border border-white/5 rounded-xl p-6 md:p-8">
                   <div className="flex justify-between items-end mb-8">
                      <div>
                         <p className="text-[10px] text-gray-600 uppercase tracking-[0.3em] mb-2 font-bold">System Access Fee</p>
                         <div className="flex items-baseline gap-4">
                            <span className="text-4xl font-display font-bold text-white tracking-tighter">{MAIN_PRODUCT.price}</span>
                            <span className="text-base text-gray-600 line-through font-bold">{MAIN_PRODUCT.originalPrice}</span>
                         </div>
                         <p className="text-[9px] text-red-400 font-bold uppercase tracking-wider mt-2 animate-pulse">Launch Price: {MAIN_PRODUCT.price} • Price Increasing Soon</p>
                      </div>
                      <div className="text-right">
                         <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-[10px] font-bold uppercase tracking-widest rounded border border-secondary/20">
                            Instant Access
                         </span>
                      </div>
                   </div>

                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <a 
                        href={MAIN_PRODUCT.lemonSqueezyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-4 bg-white text-black rounded-sm font-bold text-[11px] uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-secondary hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] transition-all"
                      >
                         Global Access <Lock className="w-3.5 h-3.5" />
                      </a>
                      <a 
                        href={MAIN_PRODUCT.selarLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-4 bg-transparent border border-white/20 text-white rounded-sm font-bold text-[11px] uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-white hover:text-black transition-all"
                      >
                         African Cards <CreditCard className="w-3.5 h-3.5" />
                      </a>
                   </div>
                   <p className="text-[9px] text-gray-600 text-center mt-6 uppercase tracking-[0.2em] font-medium opacity-80">
                      Instant access after payment • Secure checkout • Works worldwide
                   </p>
                </div>
             </div>
          </GlassCard>
        </div>
      </Container>
    </div>
  );
};

export default Products;
