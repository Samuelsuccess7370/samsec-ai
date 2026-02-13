
import React, { useState, useEffect } from 'react';
import { Menu, X, Cpu, Lock } from 'lucide-react';
import { RoutePath } from '../types';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentPath, setCurrentPath] = useState(window.location.hash.slice(1) || '/');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    const handleHashChange = () => setCurrentPath(window.location.hash.slice(1) || '/');
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const navLinks = [
    { name: 'The System', path: RoutePath.SYSTEM },
    { name: 'Mission', path: RoutePath.ABOUT },
    { name: 'Contact', path: RoutePath.CONTACT },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        scrolled ? 'bg-[#030303]/90 backdrop-blur-md border-white/[0.08]' : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="flex justify-between items-center h-20 md:h-24">
          <a href={`#${RoutePath.HOME}`} className="flex items-center gap-2 md:gap-3 group">
            <div className="flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded bg-white text-black transition-transform group-hover:scale-105">
              <Cpu className="h-4 w-4 md:h-5 md:w-5" />
            </div>
            <span className="font-display font-bold text-base md:text-lg tracking-tight text-white">
              SAMSEC<span className="text-gray-500">.AI</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-12">
            {navLinks.map((link) => (
              <a
                key={link.path}
                href={`#${link.path}`}
                className={`text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:text-white ${
                  currentPath === link.path ? 'text-white' : 'text-gray-500'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex">
             <a 
               href={`#${RoutePath.SYSTEM}`} 
               className="group flex items-center gap-2 px-8 py-3 rounded-sm bg-white text-black text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:bg-gray-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
             >
               Get Access <Lock className="w-3 h-3 transition-transform group-hover:translate-x-1" />
             </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-[#030303] fixed inset-0 z-40 flex flex-col pt-28 px-8 space-y-8 overflow-y-auto pb-10">
            {navLinks.map((link) => (
              <a
                key={link.path}
                href={`#${link.path}`}
                onClick={() => setIsOpen(false)}
                className={`text-xl font-display font-bold tracking-wide border-b border-white/5 pb-4 ${
                  currentPath === link.path ? 'text-white' : 'text-gray-600'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href={`#${RoutePath.SYSTEM}`}
              onClick={() => setIsOpen(false)}
              className="mt-8 py-4 bg-white text-black text-center rounded-sm font-bold uppercase tracking-widest text-xs shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            >
              Initialize System
            </a>
        </div>
      )}
    </header>
  );
};

export default Header;
