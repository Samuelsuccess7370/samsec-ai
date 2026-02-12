import React from 'react';
import { RESOURCES } from '../services/mockData';
import { Section, Container, GradientText, GlassCard } from '../components/ui/Layouts';
import { ExternalLink, Server } from 'lucide-react';

const Resources = () => {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-black">
      <Container>
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] text-gray-400 uppercase tracking-widest mb-6">
            <Server className="w-3 h-3 text-secondary" /> System Infrastructure
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 text-white tracking-tighter">
            Core <GradientText>Stack</GradientText>
          </h1>
          <div className="text-gray-400 max-w-3xl mx-auto space-y-5 text-lg leading-relaxed font-light">
            <p>
              We operate with a modular, evolving stack.
              SamSec AI builds structured digital systems using battle-tested platforms and proprietary workflows.
            </p>
            <p className="text-sm text-gray-500 uppercase tracking-widest font-bold">
              Integrated Platforms
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {RESOURCES.map((tool) => (
            <GlassCard key={tool.id} className="p-8 md:p-12 border-white/10 bg-white/[0.02] flex flex-col justify-between group">
              <div>
                <div className="flex justify-between items-start mb-10">
                  <span className="text-secondary font-bold uppercase tracking-[0.2em] text-[10px] border border-secondary/20 px-3 py-1 rounded bg-secondary/5">
                    {tool.category}
                  </span>
                  {tool.isPremium && (
                      <span className="flex h-2.5 w-2.5 relative">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-secondary"></span>
                      </span>
                  )}
                </div>
                
                <h2 className="text-3xl font-display font-bold text-white mb-6 leading-tight group-hover:text-secondary transition-colors">{tool.name}</h2>
                <p className="text-gray-400 leading-relaxed mb-12 text-base font-light">
                  {tool.description}
                </p>
              </div>
              
              <a 
                href={tool.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-white border-b border-white/20 pb-1.5 hover:border-secondary hover:text-secondary transition-all font-bold tracking-widest text-xs uppercase"
              >
                Connect To Node <ExternalLink className="w-4 h-4" />
              </a>
            </GlassCard>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Resources;