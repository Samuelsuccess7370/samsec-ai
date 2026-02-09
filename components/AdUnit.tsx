import React from 'react';

interface AdUnitProps {
  format?: 'horizontal' | 'rectangle' | 'vertical';
  className?: string;
}

const AdUnit: React.FC<AdUnitProps> = ({ format = 'horizontal', className = '' }) => {
  let dimensions = 'h-24 w-full'; // default horizontal
  if (format === 'rectangle') dimensions = 'h-64 w-full max-w-sm';
  if (format === 'vertical') dimensions = 'h-full min-h-[600px] w-40';

  return (
    <div className={`my-8 flex justify-center ${className}`}>
      <div className={`${dimensions} bg-zinc-900 border border-zinc-800 rounded-lg flex flex-col items-center justify-center relative overflow-hidden group`}>
        {/* Grid pattern background for tech feel */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        
        <span className="text-zinc-600 text-xs font-display tracking-widest uppercase z-10">Advertisement Space</span>
        <span className="text-zinc-700 text-[10px] mt-1 z-10">Google AdSense</span>
        
        {/* Animated sheen effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]"></div>
      </div>
    </div>
  );
};

export default AdUnit;