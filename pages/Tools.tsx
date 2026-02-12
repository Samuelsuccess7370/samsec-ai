import React from 'react';
import { TOOLS } from '../services/mockData';
import { Container, GradientText } from '../components/ui/Layouts';
import { Info } from 'lucide-react';
import AdUnit from '../components/AdUnit';
import ToolCard from '../components/ToolCard';

const Tools = () => {
  return (
    <div className="pt-24 pb-12 min-h-screen bg-background">
      <Container>
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            The <GradientText>Arsenal</GradientText>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A curated directory of high-leverage AI tools to automate your business and generate income. 
            We only list tools we trust.
          </p>
        </div>

        {/* Affiliate Disclosure for Credibility */}
        <div className="max-w-4xl mx-auto mb-12 flex items-start gap-3 p-4 rounded-lg bg-blue-900/10 border border-blue-900/20 text-blue-200/70 text-sm">
           <Info className="w-5 h-5 flex-shrink-0 mt-0.5" />
           <p>
             <strong>Transparency:</strong> Some links below are affiliate links. If you purchase through them, we may earn a commission at no extra cost to you. This supports our testing.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TOOLS.map((tool) => (
            <ToolCard key={tool.id} tool={tool} featured={tool.rating >= 4.9} />
          ))}
          {/* Duplicates for demo volume */}
          {TOOLS.map((tool) => (
            <ToolCard key={tool.id + '_dup'} tool={tool} />
          ))}
        </div>
        
        <AdUnit />
      </Container>
    </div>
  );
};

export default Tools;