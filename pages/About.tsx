import React, { useEffect } from 'react';
import { Container, GradientText, GlassCard } from '../components/ui/Layouts';
import { Target, Cpu, Globe } from 'lucide-react';
import AdUnit from '../components/AdUnit';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-12 min-h-screen bg-background">
      <Container className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            About <GradientText>SamSec AI</GradientText>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Empowering the next generation of digital entrepreneurs.
          </p>
        </div>

        <GlassCard className="p-8 md:p-12 mb-12">
          <p className="text-gray-300 leading-relaxed text-lg mb-8">
            <strong className="text-white">SamSec AI</strong> is a modern digital platform focused on artificial intelligence tools, online income opportunities, and smart automation for the future. We share practical and tested ways to make money online using AI tools, digital platforms, and global internet opportunities. Our goal is to help beginners and experienced users discover tools and strategies that can generate real income online.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
            <div className="bg-white/5 p-6 rounded-xl border border-white/5">
                <div className="flex items-center gap-3 mb-4">
                    <Target className="text-secondary w-6 h-6" />
                    <h3 className="font-display font-bold text-xl">Our Focus</h3>
                </div>
                <ul className="space-y-2 text-gray-400 text-sm">
                    <li>• AI tools that help people earn online</li>
                    <li>• Online business and side hustle ideas</li>
                    <li>• Automation and digital productivity tools</li>
                    <li>• Affiliate and passive income methods</li>
                    <li>• Future technology opportunities</li>
                </ul>
            </div>
            <div className="bg-white/5 p-6 rounded-xl border border-white/5">
                <div className="flex items-center gap-3 mb-4">
                    <Globe className="text-primary w-6 h-6" />
                    <h3 className="font-display font-bold text-xl">Global Vision</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                    We believe the internet and artificial intelligence have created a new economy where anyone can build income streams from anywhere in the world.
                </p>
            </div>
          </div>

          <p className="text-gray-300 leading-relaxed text-lg mb-8">
            All content published on this website is for educational and informational purposes to help users discover legitimate tools and opportunities available globally. Our mission is to help individuals leverage AI and digital technology to build sustainable online income and financial independence.
          </p>
          
          <div className="flex items-center justify-center mt-8 pt-8 border-t border-white/10">
             <a href="https://samsec.com.ng" className="text-secondary hover:text-white transition-colors font-display font-bold">samsec.com.ng</a>
          </div>
        </GlassCard>
        
        <AdUnit />
      </Container>
    </div>
  );
};

export default About;