import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Careers() {
  useEffect(() => {
    // Remove any existing script to prevent duplicate initialization during React StrictMode or Hot Reloads
    const existingScript = document.getElementById('ceipal-widget-script');
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement('script');
    script.id = 'ceipal-widget-script';
    script.src = 'https://jobsapi.ceipal.com/APISource/widget.js';
    script.setAttribute('data-ceipal-api-key', 'OHdwQ1VJaFNlNmZIc2ZIajdnaDloQT09');
    script.setAttribute('data-ceipal-career-portal-id', 'UGtpQkJSTEZ3Z0xBaDdsN1QwOXBIUT09');
    script.async = true;

    document.body.appendChild(script);

    return () => {
      // Clean up the script when the component unmounts
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
      // Also clear the container so it doesn't leave lingering iframes or nodes
      const container = document.getElementById('example-widget-container');
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  return (
    <>
      {/*  Navigation Bar End  */}
      <section className="relative bg-[#071B34] overflow-hidden page-hero">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -right-20 -top-20 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"></div>
          <div className="absolute -left-20 top-20 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl"></div>
        </div>
        <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-teal-400 opacity-[0.07] hero-breathe pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-6">
            Shape What's Next Together
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-300">
            Build impactful solutions alongside a team driven by collaboration, leadership, and innovation.
          </p>
          <div className="mt-10">
            <a className="inline-flex items-center justify-center px-8 py-3.5 bg-[#4DA3FF] hover:bg-[#3b82f6] text-base font-bold rounded-lg text-white shadow-[0_4px_15px_rgba(77,163,255,0.3)] hover:shadow-[0_8px_25px_rgba(77,163,255,0.4)] transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95" href="#open-positions">
              Explore Opportunities
            </a>
          </div>
          {/* Culture pills */}
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {["Innovation", "Collaboration", "Growth", "Excellence"].map((val, i) => (
              <div key={val} className="px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 border border-white/20 text-white/70 bg-white/5 hover:bg-white hover:text-[#071B34] hover:border-white cursor-default shadow-sm hover:shadow-lg">
                {val}
              </div>
            ))}
          </div>
        </div>

        {/* Smooth Transition Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 text-[#f0f4f8] dark:text-surface-dark translate-y-[1px]">
          <svg className="relative block w-full h-[40px] md:h-[70px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.71,76.52,143.76,68.86,211.39,69.58,247.93,69.95,285.45,63.17,321.39,56.44Z" fill="currentColor"></path>
          </svg>
        </div>
      </section>

      <section className="py-20 bg-[#f0f4f8] dark:bg-surface-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary-text dark:text-white sm:text-4xl">Our Culture Pillars</h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">At Peer, we foster a culture built on collaboration, integrity, growth, and accountability.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="relative group p-10 bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_40px_rgba(77,163,255,0.15)] transition-all duration-300 border border-slate-100 hover:border-[#4DA3FF]/30 hover:-translate-y-2 cursor-pointer overflow-hidden flex flex-col h-full">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#4DA3FF] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="w-16 h-16 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center mb-8 text-[#4DA3FF] group-hover:scale-110 group-hover:bg-[#4DA3FF]/5 transition-all duration-300 shadow-sm">
                <span className="material-icons text-3xl">handshake</span>
              </div>
              <h3 className="text-2xl font-display font-bold text-[#071B34] mb-4 group-hover:text-[#4DA3FF] transition-colors">Collaboration</h3>
              <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                We build strong, lasting partnerships both internally within our teams and externally with our clients. Together, we achieve more.
              </p>
            </div>
            
            <div className="relative group p-10 bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_40px_rgba(77,163,255,0.15)] transition-all duration-300 border border-slate-100 hover:border-[#4DA3FF]/30 hover:-translate-y-2 cursor-pointer overflow-hidden flex flex-col h-full">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#4DA3FF] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="w-16 h-16 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center mb-8 text-[#4DA3FF] group-hover:scale-110 group-hover:bg-[#4DA3FF]/5 transition-all duration-300 shadow-sm">
                <span className="material-icons text-3xl">visibility</span>
              </div>
              <h3 className="text-2xl font-display font-bold text-[#071B34] mb-4 group-hover:text-[#4DA3FF] transition-colors">Transparency</h3>
              <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                Open communication is the foundation of our trust. We value honesty and clarity in every interaction and decision we make.
              </p>
            </div>
            
            <div className="relative group p-10 bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_40px_rgba(77,163,255,0.15)] transition-all duration-300 border border-slate-100 hover:border-[#4DA3FF]/30 hover:-translate-y-2 cursor-pointer overflow-hidden flex flex-col h-full">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#4DA3FF] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="w-16 h-16 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center mb-8 text-[#4DA3FF] group-hover:scale-110 group-hover:bg-[#4DA3FF]/5 transition-all duration-300 shadow-sm">
                <span className="material-icons text-3xl">bolt</span>
              </div>
              <h3 className="text-2xl font-display font-bold text-[#071B34] mb-4 group-hover:text-[#4DA3FF] transition-colors">Empowerment</h3>
              <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                We empower our people with opportunities, support, and ownership to grow confidently.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#f4f6f9] dark:bg-surface-dark w-full flex-grow" id="open-positions">
        <div className="w-full max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-text dark:text-white">Open Positions</h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">Find your next role with us.</p>
          </div>

          <div id="example-widget-container" className="w-full min-h-[600px] ceipal-widget-override">
            {/* The Ceipal widget will render here */}
          </div>
        </div>
      </section>
    </>
  );
}
