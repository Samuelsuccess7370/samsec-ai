import React, { useEffect } from 'react';
import { Section, Container, GradientText, GlassCard } from '../components/ui/Layouts';
import { Mail, MessageSquare, Clock } from 'lucide-react';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-12 min-h-screen bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-b from-primary/10 to-transparent blur-[100px] pointer-events-none" />
      
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Get in <GradientText>Touch</GradientText>
            </h1>
            <p className="text-gray-400 text-lg mb-8">
              For business inquiries, collaborations, or support, you can contact us through the email below.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                 <div className="p-3 bg-white/5 rounded-lg">
                   <Mail className="w-6 h-6 text-secondary" />
                 </div>
                 <div>
                   <h3 className="font-bold text-lg">Email Us</h3>
                   <a href="mailto:support@samsec.com.ng" className="text-gray-400 hover:text-white transition-colors text-lg">support@samsec.com.ng</a>
                 </div>
              </div>
              
              <div className="flex items-start gap-4">
                 <div className="p-3 bg-white/5 rounded-lg">
                   <Clock className="w-6 h-6 text-primary" />
                 </div>
                 <div>
                   <h3 className="font-bold text-lg">Response Time</h3>
                   <p className="text-gray-400">We typically respond within 24–48 hours.</p>
                 </div>
              </div>

               <div className="flex items-start gap-4">
                 <div className="p-3 bg-white/5 rounded-lg">
                   <MessageSquare className="w-6 h-6 text-accent" />
                 </div>
                 <div>
                   <h3 className="font-bold text-lg">Support</h3>
                   <p className="text-gray-400">Thank you for visiting SamSec AI.</p>
                 </div>
              </div>
            </div>
          </div>

          <GlassCard className="p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-300">First Name</label>
                  <input type="text" className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-secondary focus:outline-none transition-colors" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-300">Last Name</label>
                  <input type="text" className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-secondary focus:outline-none transition-colors" placeholder="Doe" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-300">Email</label>
                <input type="email" className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-secondary focus:outline-none transition-colors" placeholder="john@example.com" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-300">Message</label>
                <textarea rows={4} className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-secondary focus:outline-none transition-colors" placeholder="How can we help you?"></textarea>
              </div>
              
              <button type="button" className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-4 rounded-lg hover:shadow-[0_0_20px_rgba(109,40,217,0.5)] transition-all transform hover:-translate-y-1">
                Send Message
              </button>
            </form>
          </GlassCard>
        </div>
      </Container>
    </div>
  );
};

export default Contact;