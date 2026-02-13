import React, { useEffect } from 'react';
import { Container, GradientText, GlassCard } from '../components/ui/Layouts';
import { Lock } from 'lucide-react';

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-12 min-h-screen bg-background">
      <Container className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Privacy <GradientText>Policy</GradientText>
          </h1>
        </div>

        <GlassCard className="p-8 md:p-12 space-y-8">
          <section>
             <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Lock className="w-5 h-5 text-primary" /> Data Collection
            </h2>
            <p className="text-gray-400 leading-relaxed">
              At SamSec AI, we respect your privacy and are committed to protecting your personal information. This website may collect basic information such as browser data, cookies, and analytics to improve user experience and website performance. We may use third-party services such as Google Analytics and advertising partners to understand visitor behavior and improve our content.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">Affiliate Links</h2>
            <p className="text-gray-400 leading-relaxed">
              Some links on this website may be affiliate links, which means we may earn commissions if users sign up or purchase through those links. This does not affect the price you pay.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">Information Sharing</h2>
            <p className="text-gray-400 leading-relaxed">
              We do not sell, trade, or share your personal information with third parties except where required by law. By using this website, you consent to this privacy policy.
            </p>
          </section>
        </GlassCard>
      </Container>
    </div>
  );
};

export default Privacy;