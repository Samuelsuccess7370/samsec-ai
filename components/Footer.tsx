import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Twitter, Linkedin, Github, Instagram } from 'lucide-react';
import { RoutePath } from '../types';

const Footer: React.FC = () => {
  return (
    <footer className="bg-surface border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <Link to={RoutePath.HOME} className="flex items-center space-x-2 mb-4">
              <Cpu className="h-6 w-6 text-primary" />
              <span className="font-display font-bold text-xl text-white">
                SAMSEC<span className="text-secondary">.AI</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering the next generation of digital entrepreneurs with automated AI income strategies. 
              Future-proof your wealth.
            </p>
            <div className="flex space-x-4 mt-6">
              {[Twitter, Linkedin, Github, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="text-gray-500 hover:text-secondary transition-colors">
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Explore</h3>
            <ul className="space-y-3">
              <li><Link to={RoutePath.ABOUT} className="text-gray-400 hover:text-secondary text-sm transition-colors">About Us</Link></li>
              <li><Link to={RoutePath.BLOG} className="text-gray-400 hover:text-secondary text-sm transition-colors">Daily Blog</Link></li>
              <li><Link to={RoutePath.TOOLS} className="text-gray-400 hover:text-secondary text-sm transition-colors">AI Tools</Link></li>
              <li><Link to={RoutePath.MONEY} className="text-gray-400 hover:text-secondary text-sm transition-colors">Strategies</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Legal</h3>
            <ul className="space-y-3">
              <li><Link to={RoutePath.PRIVACY} className="text-gray-400 hover:text-secondary text-sm transition-colors">Privacy Policy</Link></li>
              <li><Link to={RoutePath.TERMS} className="text-gray-400 hover:text-secondary text-sm transition-colors">Terms of Service</Link></li>
              <li><Link to={RoutePath.DISCLAIMER} className="text-gray-400 hover:text-secondary text-sm transition-colors">Affiliate Disclosure</Link></li>
              <li><Link to={RoutePath.CONTACT} className="text-gray-400 hover:text-secondary text-sm transition-colors">Contact Support</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">Get the latest AI money hacks delivered daily.</p>
            <form className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-black border border-white/10 rounded-lg px-4 py-2 text-white text-sm focus:outline-none focus:border-secondary transition-colors"
              />
              <button className="bg-white text-black font-bold py-2 rounded-lg hover:bg-gray-200 transition-colors text-sm">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/5 mt-16 pt-8">
            <p className="text-gray-600 text-xs leading-relaxed text-justify">
                <span className="font-bold text-gray-500">DISCLAIMER:</span> The content provided on SamSec AI is for educational and informational purposes only and does not constitute financial, investment, legal, or professional advice. We are not financial advisors. Trading cryptocurrencies, using AI for business, and online income generation strategies involve significant risk, including the possible loss of capital. Past performance is not indicative of future results.
                <br /><br />
                <span className="font-bold text-gray-500">AFFILIATE DISCLOSURE:</span> Some links on this website are affiliate links. This means if you click on the link and purchase the item, we may receive an affiliate commission at no extra cost to you. We only recommend products and services we trust and believe will add value to our readers.
            </p>
        </div>
        
        <div className="border-t border-white/5 mt-8 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-xs">
            © 2026 SamSec AI. All rights reserved. SamSec.com.ng
          </p>
          <div className="mt-4 md:mt-0">
             <p className="text-gray-600 text-xs">Designed for the Future.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;