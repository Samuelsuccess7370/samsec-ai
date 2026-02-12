
import React, { useEffect } from 'react';
import { Container, GradientText, GlassCard } from '../components/ui/Layouts';
import { Mail, Clock, ShieldCheck } from 'lucide-react';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 md:pt-32 pb-20 min-h-screen bg-[#030303] relative overflow-hidden">
      {/* Background FX */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-b from-white/5 to-transparent blur-[120px] pointer-events-none" />
      
      <Container className="relative z-10 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">
              Secure <GradientText>Comms</GradientText>
            </h1>
            <p className="text-gray-400 text-lg mb-12 font-light">
              For enterprise inquiries, partnership proposals, or system support.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-5 group">
                 <div className="p-3 bg-white/[0.03] border border-white/10 rounded group-hover:bg-white/10 transition-colors">
                   <Mail className="w-5 h-5 text-secondary" />
                 </div>
                 <div>
                   <h3 className="font-bold text-white text-sm uppercase tracking-wider mb-1">Direct Line</h3>
                   <a href="mailto:support@samsec.com.ng" className="text-gray-400 hover:text-white transition-colors text-base md:text-lg font-mono break-all">support@samsec.com.ng</a>
                 </div>
              </div>
              
              <div className="flex items-start gap-5">
                 <div className="p-3 bg-white/[0.03] border border-white/10 rounded">
                   <Clock className="w-5 h-5 text-white" />
                 </div>
                 <div>
                   <h3 className="font-bold text-white text-sm uppercase tracking-wider mb-1">Response Window</h3>
                   <p className="text-gray-400 text-sm">Our team typically responds within 24–48 hours to all valid inquiries.</p>
                 </div>
              </div>

               <div className="flex items-start gap-5">
                 <div className="p-3 bg-white/[0.03] border border-white/10 rounded">
                   <ShieldCheck className="w-5 h-5 text-green-500" />
                 </div>
                 <div>
                   <h3 className="font-bold text-white text-sm uppercase tracking-wider mb-1">Encrypted Support</h3>
                   <p className="text-gray-400 text-sm">All communications are confidential.</p>
                 </div>
              </div>
            </div>
          </div>

          <GlassCard className="p-8 md:p-10 border-white/10 bg-[#080808]">
            <h3 className="text-xl font-bold text-white mb-6">Send Transmission</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">First Name</label>
                  <input type="text" className="w-full bg-black/50 border border-white/10 rounded p-3 text-white focus:border-secondary focus:outline-none transition-colors text-sm placeholder-gray-700" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Last Name</label>
                  <input type="text" className="w-full bg-black/50 border border-white/10 rounded p-3 text-white focus:border-secondary focus:outline-none transition-colors text-sm placeholder-gray-700" placeholder="Doe" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Email Protocol</label>
                <input type="email" className="w-full bg-black/50 border border-white/10 rounded p-3 text-white focus:border-secondary focus:outline-none transition-colors text-sm placeholder-gray-700" placeholder="john@example.com" />
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Message</label>
                <textarea rows={4} className="w-full bg-black/50 border border-white/10 rounded p-3 text-white focus:border-secondary focus:outline-none transition-colors text-sm placeholder-gray-700" placeholder="Inquiry details..."></textarea>
              </div>
              
              <button type="button" className="w-full bg-white text-black font-bold py-4 rounded text-xs uppercase tracking-[0.2em] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                Transmit
              </button>
            </form>
          </GlassCard>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
