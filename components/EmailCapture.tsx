
import React, { useState } from 'react';
import { ArrowRight, Mail, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const EmailCapture: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || status === 'loading') return;

    setStatus('loading');
    setMessage('');

    try {
      // NOTE: Direct client-side API calls to Resend require appropriate CORS configuration on the domain.
      // In a full production setup, move this to a serverless function.
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer re_W7tzpNRv_CHPvfGbJdgFuosijnmduxyuo',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'SamSec AI <support@samsec.com.ng>',
          to: [email],
          subject: 'Access Granted: Welcome to SamSec AI Intelligence',
          html: `
            <div style="font-family: 'Inter', sans-serif; background-color: #050505; color: #ffffff; padding: 50px; text-align: center; border: 1px solid #1a1a1a; border-radius: 16px; max-width: 600px; margin: 0 auto;">
              <h1 style="font-size: 28px; font-weight: bold; margin-bottom: 20px; color: #06b6d4; letter-spacing: 2px;">SAMSEC AI</h1>
              <p style="font-size: 18px; color: #cccccc; margin-bottom: 30px;">Your access to the private intelligence list is: <strong>CONFIRMED</strong></p>
              <div style="background: #111; padding: 25px; border-radius: 12px; border: 1px solid #222; text-align: left;">
                <p style="color: #aaaaaa; font-size: 15px; margin: 0; line-height: 1.6;">Welcome to the inner circle. You are now synchronized with our digital wealth signals. Expect high-leverage architectural blueprints, AI arbitrage opportunities, and system updates directly in your inbox.</p>
              </div>
              <p style="margin-top: 40px; font-size: 12px; color: #444; text-transform: uppercase; tracking-spacing: 1px;">&copy; 2026 SamSec AI. The Future of Wealth.</p>
            </div>
          `
        }),
      });

      if (response.ok) {
        setStatus('success');
        setMessage('Access granted. Check your email.');
        setEmail('');
      } else {
        const errData = await response.json().catch(() => ({ message: 'API Transmission Error' }));
        throw new Error(errData.message || 'Transmission failed.');
      }
    } catch (err: any) {
      console.error('Email Capture Error:', err);
      setStatus('error');
      setMessage(err.message || 'System error. Please try again.');
    }
  };

  return (
    <div className="relative rounded-[2rem] overflow-hidden bg-[#050505] border border-white/10 p-8 md:p-20 text-center shadow-2xl shadow-secondary/5">
      {/* Dynamic Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary/10 via-black to-black opacity-60" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />
      
      <div className="relative z-10 max-w-xl mx-auto">
        <AnimatePresence mode="wait">
          {status === 'success' ? (
            <motion.div 
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              className="py-12"
            >
              <div className="w-20 h-20 rounded-full bg-secondary/10 border border-secondary/20 flex items-center justify-center mx-auto mb-8 shadow-[0_0_40px_rgba(6,182,212,0.2)]">
                <CheckCircle2 className="w-10 h-10 text-secondary" />
              </div>
              <h2 className="text-3xl font-display font-bold text-white mb-4">Welcome to the 1%</h2>
              <p className="text-secondary font-bold text-lg">{message}</p>
              <button 
                onClick={() => setStatus('idle')}
                className="mt-8 text-[10px] text-gray-500 uppercase tracking-[0.3em] hover:text-white transition-colors"
              >
                Return to Base
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] text-gray-400 mb-8 uppercase tracking-[0.25em]">
                <Mail className="w-3.5 h-3.5 text-secondary" /> Private Intelligence Access
              </div>
              
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white tracking-tight leading-tight">
                Architect Your <br /><span className="text-secondary">AI Future</span>
              </h2>
              <p className="text-gray-400 mb-12 text-sm md:text-lg leading-relaxed font-light max-w-md mx-auto">
                Join our elite list for exclusive alerts on new AI arbitrage models and automated income strategies.
              </p>
              
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="relative group">
                  <input 
                    required
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your primary email" 
                    className="w-full px-8 py-6 rounded-2xl bg-white/[0.03] border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-secondary/50 focus:bg-white/[0.07] transition-all text-lg group-hover:border-white/20"
                    disabled={status === 'loading'}
                  />
                  <div className="absolute inset-0 rounded-2xl bg-secondary/5 blur-2xl -z-10 opacity-0 group-focus-within:opacity-100 transition-opacity" />
                </div>

                <button 
                  disabled={status === 'loading'}
                  className="w-full py-6 rounded-2xl bg-white text-black font-bold uppercase tracking-[0.25em] text-xs transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] hover:-translate-y-1 hover:scale-[1.01] flex items-center justify-center gap-3 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Initializing Stream...
                    </>
                  ) : (
                    <>
                      Get Access <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>
                
                {status === 'error' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 flex items-center justify-center gap-2 text-red-400 text-xs font-medium bg-red-400/5 py-3 rounded-lg border border-red-400/10"
                  >
                    <AlertCircle className="w-4 h-4" />
                    {message}
                  </motion.div>
                )}
              </form>
            </motion.div>
          )}
        </AnimatePresence>
        
        <p className="text-gray-700 text-[9px] mt-10 uppercase tracking-[0.4em] font-bold">
          Encrypted Node • Global Delivery • Opt-out Anytime
        </p>
      </div>
    </div>
  );
};

export default EmailCapture;
