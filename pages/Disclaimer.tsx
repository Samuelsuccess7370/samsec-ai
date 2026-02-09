import React, { useEffect } from 'react';
import { Container, GradientText, GlassCard } from '../components/ui/Layouts';
import { AlertTriangle } from 'lucide-react';

const Disclaimer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-12 min-h-screen bg-background">
      <Container className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-display font-bold mb-4">
            <GradientText>Disclaimer</GradientText>
          </h1>
        </div>

        <GlassCard className="p-8 md:p-12 space-y-8">
          <div className="flex items-start gap-4 p-4 bg-red-500/10 border border-red-500/20 rounded-lg mb-8">
             <AlertTriangle className="text-red-500 w-6 h-6 flex-shrink-0 mt-1" />
             <p className="text-red-200 text-sm">
                SamSec AI is not a financial advisor. The content provided is for educational purposes only.
             </p>
          </div>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">Educational Purpose Only</h2>
            <p className="text-gray-400 leading-relaxed">
              All information provided on this website (SamSec AI) is for educational and informational purposes only. We may share tools, platforms, and opportunities that can help users generate income online. However, we do not guarantee specific financial results. Individual results may vary depending on effort, experience, and consistency.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">Affiliate Disclosure</h2>
            <p className="text-gray-400 leading-relaxed">
              Some links on this website may be affiliate links. This means we may earn a commission if users choose to sign up or purchase through those links, at no additional cost to you. We only recommend tools and platforms we believe provide value to users.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">Liability</h2>
            <p className="text-gray-400 leading-relaxed">
              By using this website, you agree that SamSec AI is not responsible for any financial decisions or actions taken based on the information provided. Always conduct your own research before making financial or business decisions.
            </p>
          </section>
        </GlassCard>
      </Container>
    </div>
  );
};

export default Disclaimer;