
import React from 'react';
import { Cpu, Twitter, Instagram, Shield, Lock, Globe, Mail } from 'lucide-react';
import { RoutePath } from '../types';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#020202] border-t border-white/5 pt-16 md:pt-20 pb-10 relative z-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 mb-16 md:mb-20">
          
          {/* Brand Section */}
          <div className="max-w-sm flex flex-col items-center md:items-start text-center md:text-left">
            <a href={`#${RoutePath.HOME}`} className="flex items-center space-x-2 mb-6 group">
              <div className="p-1.5 bg-white rounded-sm text-black transition-transform group-hover:scale-110">
                 <Cpu className="h-4 w-4" />
              </div>
              <span className="font-display font-bold text-lg text-white tracking-widest">
                SAMSEC<span className="text-gray-500">.AI</span>
              </span>
            </a>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 font-light">
              Global AI Income Infrastructure Brand. We engineer the systems that power automated digital revenue streams for creators and professionals worldwide.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400 font-mono mb-8 border border-white/10 px-3 py-1.5 rounded bg-white/5">
                <Mail className="w-3 h-3 text-secondary" />
                <a href="mailto:support@samsec.com.ng" className="hover:text-white transition-colors">support@samsec.com.ng</a>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="p-2.5 rounded bg-white/5 hover:bg-white hover:text-black text-gray-400 transition-all duration-300">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="p-2.5 rounded bg-white/5 hover:bg-white hover:text-black text-gray-400 transition-all duration-300">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Links Section */}
          <div className="flex flex-col md:flex-row gap-12 md:gap-32 text-center md:text-left">
            <div>
              <h3 className="text-white font-bold mb-6 uppercase text-[10px] tracking-[0.25em] text-gray-400">Infrastructure</h3>
              <ul className="space-y-4">
                <li><a href={`#${RoutePath.SYSTEM}`} className="text-gray-500 hover:text-white text-xs uppercase tracking-widest transition-colors font-bold">The System</a></li>
                <li><a href={`#${RoutePath.ABOUT}`} className="text-gray-500 hover:text-white text-xs uppercase tracking-widest transition-colors font-bold">Our Mission</a></li>
                <li><a href={`#${RoutePath.CONTACT}`} className="text-gray-500 hover:text-white text-xs uppercase tracking-widest transition-colors font-bold">Secure Support</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold mb-6 uppercase text-[10px] tracking-[0.25em] text-gray-400">Legal Compliance</h3>
              <ul className="space-y-4">
                <li><a href={`#${RoutePath.REFUNDS}`} className="text-gray-500 hover:text-white text-xs uppercase tracking-widest transition-colors font-bold">Refund Policy</a></li>
                <li><a href={`#${RoutePath.TERMS}`} className="text-gray-500 hover:text-white text-xs uppercase tracking-widest transition-colors font-bold">Terms of Service</a></li>
                <li><a href={`#${RoutePath.PRIVACY}`} className="text-gray-500 hover:text-white text-xs uppercase tracking-widest transition-colors font-bold">Privacy Policy</a></li>
                <li><a href={`#${RoutePath.DISCLAIMER}`} className="text-gray-500 hover:text-white text-xs uppercase tracking-widest transition-colors font-bold">Disclaimer</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
             <p className="text-gray-700 text-[9px] uppercase tracking-[0.4em] font-bold">
               © 2026 SamSec AI. All rights reserved.
             </p>
             <p className="text-gray-800 text-[8px] uppercase tracking-[0.2em] mt-1">
               Registered Digital Infrastructure Brand.
             </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <div className="flex items-center gap-2 text-gray-600 text-[9px] uppercase tracking-widest font-bold">
              <Lock className="w-3 h-3" /> Secure SSL Checkout
            </div>
            <div className="flex items-center gap-2 text-gray-600 text-[9px] uppercase tracking-widest font-bold">
              <Shield className="w-3 h-3" /> LemonSqueezy Verified
            </div>
            <div className="flex items-center gap-2 text-gray-600 text-[9px] uppercase tracking-widest font-bold">
              <Globe className="w-3 h-3" /> Worldwide Delivery
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
