
import React from 'react';
import { ExternalLink, Star, ShieldCheck } from 'lucide-react';
import { GlassCard } from './ui/Layouts';
import { Tool } from '../types';

interface ToolCardProps {
  tool: Tool;
  featured?: boolean;
  comingSoon?: boolean;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool, featured = false, comingSoon = false }) => {
  return (
    <GlassCard className={`flex flex-col h-full relative group ${featured ? 'border-secondary/30 shadow-[0_0_30px_-5px_rgba(6,182,212,0.15)]' : ''}`}>
      {featured && (
        <div className="absolute top-0 right-0 bg-secondary text-black text-[10px] font-bold px-3 py-1 rounded-bl-lg z-10 uppercase tracking-wider">
          Featured
        </div>
      )}
      
      {comingSoon && (
        <div className="absolute top-0 right-0 bg-white/10 text-gray-400 text-[10px] font-bold px-3 py-1 rounded-bl-lg z-10 uppercase tracking-wider backdrop-blur-md border-l border-b border-white/5">
          Testing Phase
        </div>
      )}

      <div className="flex items-start justify-between mb-6">
        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center overflow-hidden border border-white/10 ${comingSoon ? 'bg-white/5 grayscale' : 'bg-gradient-to-br from-gray-800 to-black'}`}>
          {tool.iconUrl ? (
            <img src={tool.iconUrl} alt={tool.name} className="w-full h-full object-cover" />
          ) : (
             <ShieldCheck className="w-6 h-6 text-gray-600" />
          )}
        </div>
        {!comingSoon && (
          <div className="flex items-center space-x-1 bg-white/5 border border-white/5 px-2 py-1 rounded-full text-xs">
            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            <span className="font-bold text-white">{tool.rating}</span>
          </div>
        )}
      </div>

      <div className="mb-4">
        <span className="text-xs font-mono text-secondary mb-1 block">{tool.category}</span>
        <h3 className="text-xl font-display font-bold text-white group-hover:text-secondary transition-colors duration-300">
          {tool.name}
        </h3>
      </div>

      <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
        {tool.description}
      </p>

      <div className="pt-4 border-t border-white/5 mt-auto">
        {comingSoon ? (
          <button disabled className="w-full py-3 rounded-lg border border-white/10 text-gray-500 font-bold text-sm cursor-not-allowed uppercase tracking-wider">
            Review Pending
          </button>
        ) : (
          <div className="flex items-center justify-between gap-4">
            <span className="text-sm font-bold text-white">{tool.price}</span>
            <a 
              href={tool.affiliateLink} 
              className="flex-1 flex items-center justify-center gap-2 bg-white text-black py-2.5 rounded-lg text-sm font-bold transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:-translate-y-1 hover:scale-[1.02] shadow-lg shadow-white/5"
            >
              Access Tool <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        )}
      </div>
    </GlassCard>
  );
};

export default ToolCard;
