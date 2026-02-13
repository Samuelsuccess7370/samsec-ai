
import React, { useEffect } from 'react';
import { Container, GradientText, GlassCard } from '../components/ui/Layouts';
import { AlertTriangle, DollarSign, Shield } from 'lucide-react';

const Disclaimer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-20 min-h-screen bg-[#030303]">
      <Container className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-display font-bold mb-6 text-white">
            Official <GradientText>Disclaimer</GradientText>
          </h1>
          <p className="text-gray-500 text-xs uppercase tracking-widest font-bold">Read Carefully</p>
        </div>

        <GlassCard className="p-12 space-y-12 border-white/10 bg-[#080808]">
          <section>
             <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <DollarSign className="w-5 h-5 text-secondary" /> Earnings Disclaimer
            </h2>
            <div className="p-6 bg-white/[0.03] border border-white/5 rounded-lg">
                <p className="text-gray-400 leading-relaxed text-sm">
                  The income examples and projections shown on this website (samsec.com.ng) are extraordinary results and are not intended to serve as guarantees. In fact, most people who purchase "how-to" information get little to no results. Your results will vary and depend on many factors, including but not limited to your background, experience, and work ethic. All business entails risk as well as massive and consistent effort and action. If you're not willing to accept that, please do not purchase this product.
                </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <Shield className="w-5 h-5 text-white" /> Payment Processors
            </h2>
            <p className="text-gray-400 leading-relaxed text-sm mb-4">
              SamSec AI utilizes third-party payment processors to facilitate transactions. We are not a bank.
            </p>
            <ul className="space-y-4">
               <li className="flex items-start gap-4 p-4 border border-white/5 rounded hover:bg-white/[0.02]">
                  <span className="text-white font-bold text-sm">LemonSqueezy</span>
                  <p className="text-gray-500 text-xs leading-relaxed">
                     LemonSqueezy acts as our Merchant of Record for international transactions. When you purchase via LemonSqueezy, you are transacting with them, and their Terms of Service apply to the payment handling.
                  </p>
               </li>
               <li className="flex items-start gap-4 p-4 border border-white/5 rounded hover:bg-white/[0.02]">
                  <span className="text-white font-bold text-sm">Selar</span>
                  <p className="text-gray-500 text-xs leading-relaxed">
                     Selar acts as our payment partner for African and localized currencies. Transactions processed through Selar are subject to their specific user agreements and refund protocols.
                  </p>
               </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">Not Financial Advice</h2>
            <p className="text-gray-400 leading-relaxed text-sm">
              SamSec AI is an educational platform. We are not financial advisors, accountants, or lawyers. The content provided is for educational purposes only. You should not construe any such information or other material as legal, tax, investment, financial, or other advice.
            </p>
          </section>
        </GlassCard>
      </Container>
    </div>
  );
};

export default Disclaimer;
