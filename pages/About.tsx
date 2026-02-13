
import React, { useEffect } from 'react';
import { Container, GradientText, GlassCard } from '../components/ui/Layouts';
import { Target, Shield, Globe, Terminal, Cpu, Activity } from 'lucide-react';
import AdUnit from '../components/AdUnit';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 md:pt-32 pb-20 min-h-screen bg-[#030303]">
      <Container className="max-w-4xl mx-auto">
        <div className="text-center mb-12 md:mb-20">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-white tracking-tighter">
            About <GradientText>SamSec AI</GradientText>
          </h1>
          <p className="text-gray-500 text-[10px] uppercase tracking-[0.4em] font-bold">
            Global AI Income Infrastructure Brand
          </p>
        </div>

        <GlassCard className="p-8 md:p-12 mb-12 border-white/10 bg-[#080808] relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
             <Cpu className="w-24 h-24 md:w-32 md:h-32" />
          </div>

          <h2 className="text-xl md:text-2xl font-display font-bold text-white mb-8 tracking-tight flex items-center gap-3">
             <Activity className="w-5 h-5 text-secondary" /> Mission Directive
          </h2>
          <p className="text-gray-300 leading-relaxed text-base md:text-lg mb-8 font-light">
            <strong className="text-white font-bold">SamSec AI</strong> is a global infrastructure brand focused on digital income engineering. We do not operate as gurus; we provide technical protocols for building autonomous revenue systems in the modern economy.
          </p>
          <p className="text-gray-300 leading-relaxed text-base md:text-lg mb-12 font-light">
             Our focus is <strong className="text-secondary">Digital Leverage</strong>. We teach creators and remote professionals how to use AI to decouple their income from their time, using automated nodes that function across global borders.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12 border-t border-white/10 pt-12">
            <div className="space-y-4">
                <div className="flex items-center gap-3">
                    <Target className="text-secondary w-5 h-5" />
                    <h3 className="font-bold text-white uppercase tracking-widest text-[11px]">Modern Leverage</h3>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed font-light">
                   We focus on systems that scale with AI agents. Manual labor is a bottleneck; we teach you how to engineer it out of your income.
                </p>
            </div>
            <div className="space-y-4">
                <div className="flex items-center gap-3">
                    <Globe className="text-white w-5 h-5" />
                    <h3 className="font-bold text-white uppercase tracking-widest text-[11px]">Global Economy</h3>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed font-light">
                    Your location shouldn't limit your revenue. Our protocols are designed to capture Tier-1 currency from anywhere on earth.
                </p>
            </div>
            <div className="space-y-4">
                <div className="flex items-center gap-3">
                    <Terminal className="text-secondary w-5 h-5" />
                    <h3 className="font-bold text-white uppercase tracking-widest text-[11px]">Autonomous Nodes</h3>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed font-light">
                    We build faceless infrastructure. Your identity is private; your agents perform the work. This is the ultimate form of digital assets.
                </p>
            </div>
            <div className="space-y-4">
                <div className="flex items-center gap-3">
                    <Shield className="text-white w-5 h-5" />
                    <h3 className="font-bold text-white uppercase tracking-widest text-[11px]">Asset Security</h3>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed font-light">
                    Sustainability is priority. We teach how to protect your digital real estate and diversify your revenue nodes for long-term stability.
                </p>
            </div>
          </div>

          <div className="bg-white/[0.03] border border-white/5 p-6 md:p-8 rounded-lg text-center backdrop-blur-sm">
             <p className="text-gray-400 text-sm mb-4 font-light italic">
                "In the AI era, the architect of the system owns the future."
             </p>
             <p className="text-[9px] text-gray-700 uppercase tracking-[0.4em] font-bold">
                Established 2024 • SamSec Digital Group
             </p>
          </div>
        </GlassCard>
      </Container>
    </div>
  );
};

export default About;
