
import React, { useEffect } from 'react';
import { Container, GradientText, GlassCard } from '../components/ui/Layouts';
import { ShieldCheck, Mail, AlertTriangle } from 'lucide-react';

const RefundPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-20 min-h-screen bg-black">
      <Container className="max-w-3xl mx-auto">
        <div className="mb-12">
          <h1 className="text-3xl md:text-5xl font-display font-bold mb-6 text-white">
            Refund <GradientText>Policy</GradientText>
          </h1>
          <p className="text-gray-400">Last Updated: October 26, 2025</p>
        </div>

        <div className="space-y-8">
          <GlassCard className="p-8 border-l-4 border-l-secondary">
             <div className="flex items-start gap-4">
                <ShieldCheck className="text-secondary w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                    <h2 className="text-xl font-bold text-white mb-2">7-Day Satisfaction Guarantee</h2>
                    <p className="text-gray-300 leading-relaxed text-sm">
                        We are committed to the quality of our infrastructure education. If you purchase the SamSec AI Income System and do not find value in the material, you may request a full refund within 7 days of your purchase date.
                    </p>
                </div>
             </div>
          </GlassCard>

          <div className="text-gray-400 space-y-6 leading-relaxed">
            <h3 className="text-white font-bold text-lg mt-6">How to Request a Refund</h3>
            <p>
                To initiate a refund, please contact our support team at <strong className="text-white">support@samsec.com.ng</strong> with your transaction receipt or order ID.
            </p>
            <p>
                Please allow up to 5-10 business days for your bank or payment processor (LemonSqueezy/Selar) to reflect the credit on your statement after we process the refund.
            </p>

            <h3 className="text-white font-bold text-lg mt-6">Fair Use Policy</h3>
            <p>
                Our guarantee is designed to protect customers who genuinely want to learn and deploy the system. We reserve the right to deny refunds in cases of suspected abuse, such as downloading all proprietary assets and immediately requesting a refund without engaging with the material.
            </p>
            
            <h3 className="text-white font-bold text-lg mt-6">Chargebacks</h3>
            <p>
                We strictly advise against initiating chargebacks without contacting support first. Unjustified chargebacks will result in a permanent ban from all SamSec AI services and products. We fight fraudulent chargebacks using extensive access logs and digital footprint tracking.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default RefundPolicy;
