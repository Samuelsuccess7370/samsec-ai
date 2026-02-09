import React, { useEffect } from 'react';
import { Container, GradientText, GlassCard } from '../components/ui/Layouts';
import { FileText, Shield, AlertCircle, Scale, Mail, Globe, Lock } from 'lucide-react';

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-12 min-h-screen bg-background">
      <Container className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Terms of <GradientText>Service</GradientText>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Please read these terms carefully before using our platform.
          </p>
          <p className="text-gray-500 text-sm mt-4 font-mono">Last Updated: October 26, 2025</p>
        </div>

        <div className="space-y-8">
          {/* Section 1: Acceptance */}
          <GlassCard className="p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-6 h-6 text-secondary" />
              <h2 className="text-2xl font-display font-bold text-white">1. Acceptance of Terms</h2>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              By accessing and using <strong>SamSec AI</strong> (samsec.com.ng), you accept and agree to be bound by the terms and provision of this agreement. In addition, when using this website's particular services, you shall be subject to any posted guidelines or rules applicable to such services.
            </p>
            <p className="text-gray-300 leading-relaxed">
              If you do not agree to these terms, please do not use our service. These terms apply to all visitors, users, and others who access or use the Service.
            </p>
          </GlassCard>

          {/* Section 2: Affiliate Disclosure */}
          <GlassCard className="p-8 md:p-12 border-l-4 border-l-secondary">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-6 h-6 text-secondary" />
              <h2 className="text-2xl font-display font-bold text-white">2. Affiliate Disclosure</h2>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong>SamSec AI</strong> participates in various affiliate marketing programs, which means we may get paid commissions on editorially chosen products purchased through our links to retailer sites.
            </p>
            <ul className="list-disc pl-6 space-y-3 text-gray-400 mb-4">
              <li>Our content is unbiased and based on our independent research and analysis.</li>
              <li>Affiliate commissions do not influence our reviews, rankings, or recommendations.</li>
              <li>We only recommend tools and services that we believe add genuine value to our users.</li>
              <li>There is <strong>no additional cost to you</strong> when you purchase through our affiliate links; often, we negotiate special deals for our readers.</li>
            </ul>
            <p className="text-gray-400 text-sm italic">
              Assume that any link leading to a product or service is an affiliate link and that we will receive a commission from your purchase.
            </p>
          </GlassCard>

          {/* Section 3: Liability & Third Party Tools */}
          <GlassCard className="p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <AlertCircle className="w-6 h-6 text-accent" />
              <h2 className="text-2xl font-display font-bold text-white">3. Disclaimer of Liability</h2>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              The materials on <strong>SamSec AI</strong> are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
            
            <div className="bg-white/5 rounded-xl p-6 border border-white/5 mb-6">
                <h3 className="text-lg font-bold text-white mb-3">Third-Party Tools & Software</h3>
                <p className="text-gray-300 leading-relaxed mb-4 text-sm">
                We recommend third-party AI tools, SaaS platforms, and software. We do not own, control, or maintain these tools. By using this site, you acknowledge and agree that SamSec AI is <strong>not responsible</strong> for:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-400 text-sm">
                <li>The operational status, uptime, accuracy, or functionality of any recommended tool.</li>
                <li>Any financial loss, data loss, or business disruption caused by using third-party software.</li>
                <li>Changes in pricing, terms, or features of third-party platforms.</li>
                <li>The privacy practices or content of third-party websites.</li>
                </ul>
            </div>
            <p className="text-gray-300 leading-relaxed">
              You acknowledge that you use these tools at your own risk and discretion. Always perform your own due diligence before purchasing any software or service.
            </p>
          </GlassCard>

          {/* Section 4: User Responsibilities */}
          <GlassCard className="p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <Scale className="w-6 h-6 text-green-400" />
              <h2 className="text-2xl font-display font-bold text-white">4. User Responsibilities</h2>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              As a user of this website, you agree to:
            </p>
             <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li>Use the information provided for educational and informational purposes only.</li>
              <li>Conduct your own independent research before making any financial investments or business decisions.</li>
              <li>Not use the website for any unlawful purpose or in any way that could damage, disable, or impair the site.</li>
              <li>Respect the intellectual property rights of SamSec AI and third parties.</li>
              <li>Provide accurate information if you choose to subscribe to our newsletter or contact us.</li>
            </ul>
          </GlassCard>

          {/* Section 5: Privacy & Data */}
          <GlassCard className="p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <Lock className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-display font-bold text-white">5. Privacy Policy Reference</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Your use of the website is also governed by our Privacy Policy. Please review our Privacy Policy, which also governs the Site and informs users of our data collection practices. Your agreement to the Privacy Policy is hereby incorporated into these Terms of Service.
            </p>
          </GlassCard>

          {/* Section 6: Contact */}
          <GlassCard className="p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <Mail className="w-6 h-6 text-white" />
              <h2 className="text-2xl font-display font-bold text-white">6. Contact Information</h2>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              We welcome your questions or comments regarding the Terms. If you have any inquiries regarding legal matters, partnerships, or support, please contact us at:
            </p>
            <div className="bg-gradient-to-r from-white/10 to-transparent border border-white/10 rounded-xl p-6 md:p-8">
               <p className="text-secondary font-bold text-sm uppercase tracking-widest mb-2">Legal & Support</p>
               <a href="mailto:samuelomobusuyi2@gmail.com" className="text-white hover:text-secondary transition-colors text-xl md:text-2xl font-mono font-bold break-all">
                 samuelomobusuyi2@gmail.com
               </a>
               <p className="text-gray-500 text-sm mt-4 flex items-center gap-2">
                 <Globe className="w-4 h-4" /> International Support • Responding within 24-48 hours
               </p>
            </div>
          </GlassCard>
        </div>
      </Container>
    </div>
  );
};

export default Terms;