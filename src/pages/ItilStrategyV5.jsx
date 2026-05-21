import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logos/itil-v5-strategy.svg';

const LEARN_POINTS = [
  { icon: "🧩", title: "Key ITIL Strategy Concepts", desc: "Gain a clear understanding of the core principles, practices, and terminology that underpin effective strategy." },
  { icon: "🤖", title: "AI-Driven Environments", desc: "Explore how strategy evolves in dynamic, complex, and AI-enabled contexts, and how to maintain clarity." },
  { icon: "🗺️", title: "Strategy Development", desc: "Learn how to observe, orient, decide, and plan to define effective, outcome-driven strategies." },
  { icon: "🚀", title: "Strategy Implementation", desc: "Discover how to plan, execute, and synthesize to translate strategy into actionable initiatives." },
  { icon: "⚙️", title: "Operating Models", desc: "Find out how business and operating models support strategic intent and enable value creation." },
  { icon: "🧭", title: "Strategic Decision-Making", desc: "Develop the ability to make informed, conscious decisions in uncertain and rapidly changing settings." },
  { icon: "💪", title: "Leadership Capabilities", desc: "Learn how strategic capabilities shape and deliver value-driven strategy within the organization." },
  { icon: "🛡️", title: "Governance & Risk", desc: "Uncover how governance, risk management, and sustainability support long-term strategic success." },
  { icon: "🤖", title: "AI Governance", desc: "Explore how AI governance enables responsible, value-driven strategy development and execution." }
];

const SKILLS = [
  { title: "Strategic Alignment", desc: "Apply the ITIL Strategy Management Model to guide alignment with business goals and measurable outcomes." },
  { title: "Decision-Making", desc: "Gain the expertise to make balanced decisions in volatile, complex, and ambiguous environments." },
  { title: "Value Realization", desc: "Learn to translate strategic intent into actionable initiatives, balancing governance and execution." }
];

const CAREER_TAGS = [
  "Chief Digital Officer", "Chief Technology Officer", "IT Strategy Manager", "Transformation Manager",
  "Enterprise Architect", "Solutions Architect", "IT Director", "Portfolio Manager",
  "IT Governance Manager", "Business Relationship Manager", "Digital Transformation Lead"
];

export default function ItilStrategyV5() {
  return (
    <div className="bg-[#f8fafc] dark:bg-background-dark min-h-screen font-body text-primary dark:text-white">
      {/* Hero Section */}
      <header className="relative bg-[#0d1b2a] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_rgba(232,52,28,0.15)_0%,_transparent_60%)]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-3 bg-accent/20 backdrop-blur-md px-4 py-1 rounded-full text-accent-blue text-[10px] font-black uppercase tracking-[0.2em] mb-8 border border-accent/30">
                PeopleCert Certified · ITIL Strategic Leader
              </div>
              <h1 className="text-5xl md:text-8xl font-black font-display mb-6 tracking-tighter leading-none uppercase">
                ITIL Strategy <br />
                <span className="text-accent underline decoration-white/10 underline-offset-[12px] italic">(Version 5)</span>
              </h1>
              <p className="text-xl text-blue-100/70 max-w-2xl mb-12 leading-relaxed font-light">
                Offer practical guidance for developing, delivering, and optimizing strategies to create lasting value in complex, AI-driven environments.
              </p>
              <div className="flex flex-wrap gap-4">
                {["♟️ Strategic Leadership", "🌍 Global Standard", "🇬🇧 English"].map((item, i) => (
                  <span key={i} className="bg-white/5 border border-white/10 px-6 py-2.5 rounded-2xl text-[11px] font-black uppercase tracking-[2px] text-blue-100/80 hover:bg-accent/10 transition-colors cursor-default">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
               <div className="relative group p-6">
                  <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-[100px] animate-pulse"></div>
                  <img 
                    src={logo} 
                    alt="ITIL V5 Strategy Logo" 
                    className="relative w-80 h-80 object-contain transition-transform group-hover:scale-105 duration-700"
                  />
               </div>
            </div>
          </div>
        </div>
      </header>

      {/* Strategic Value Strip */}
      <section className="bg-primary-dark py-16 border-b border-white/5">
         <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
               {[
                 { t: "Industry Standard", d: "Demonstrate your ability to define strategies that connect business goals with technology." },
                 { t: "Employers' Choice", d: "Showcase expertise in aligning strategy with execution to qualify for leadership roles." },
                 { t: "Future Ready", d: "Build capabilities to steer decision-making and lead transformation in AI-led contexts." }
               ].map((v, i) => (
                 <div key={i} className="flex flex-col gap-4 border-l-2 border-accent pl-8 py-2 hover:bg-white/5 transition-colors rounded-r-2xl">
                    <h3 className="font-display font-black text-sm uppercase tracking-widest text-white">{v.t}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{v.d}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      <main className="container mx-auto px-6 py-24">
        {/* At a Glance */}
        <section className="mb-32">
           <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: "lan", label: "For", val: "Any career stage" },
                { icon: "insights", label: "Key Benefit", val: "Leadership Skills" },
                { icon: "public", label: "Status", val: "Globally Recognized" },
                { icon: "assignment_turned_in", label: "Language", val: "Exam in English" }
              ].map((item, i) => (
                <div key={i} className="bg-white dark:bg-surface-dark p-8 rounded-[40px] shadow-subtle border border-gray-100 dark:border-white/5 text-center group hover:bg-primary transition-all duration-500">
                   <span className="material-icons-outlined text-4xl text-accent mb-6 group-hover:text-white transition-colors">{item.icon}</span>
                   <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1 group-hover:text-white/40">{item.label}</p>
                   <p className="text-sm font-black text-primary dark:text-white group-hover:text-white uppercase leading-tight">{item.val}</p>
                </div>
              ))}
           </div>
        </section>

        {/* Learning Journey */}
        <section className="mb-32">
           <div className="inline-flex items-center gap-4 mb-16">
              <h2 className="text-4xl font-black font-display tracking-tight uppercase">Strategic <span className="text-accent underline decoration-accent/10 underline-offset-8">Outcomes</span></h2>
              <div className="h-0.5 w-32 bg-accent/20"></div>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {LEARN_POINTS.map((lp, i) => (
                <div key={i} className="relative group p-10 bg-white dark:bg-surface-dark rounded-[50px] shadow-subtle border border-gray-100 dark:border-white/5 hover:border-accent/40 transition-all">
                   <div className="absolute top-8 right-8 text-6xl font-display font-black text-gray-50 dark:text-white/5 opacity-50 italic group-hover:text-accent/5 transition-colors">0{i+1}</div>
                   <div className="text-3xl mb-8 relative z-10">{lp.icon}</div>
                   <h3 className="text-sm font-black font-display mb-4 tracking-widest uppercase leading-tight relative z-10">{lp.title}</h3>
                   <p className="text-[13px] text-gray-500 dark:text-gray-400 leading-relaxed relative z-10 font-medium">{lp.desc}</p>
                </div>
              ))}
           </div>
        </section>

        {/* Skills Matrix */}
        <section className="mb-32">
           <div className="bg-[#0d1b2a] p-16 rounded-[70px] shadow-2xl relative overflow-hidden">
              <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent/10 rounded-full blur-[120px]"></div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                 <div>
                    <h3 className="text-[11px] font-black text-accent-blue uppercase tracking-[5px] mb-12">Core Skillsets</h3>
                    <div className="space-y-12">
                       {SKILLS.map((skill, i) => (
                         <div key={i} className="flex gap-8 group">
                            <div className="w-px h-16 bg-accent/30 group-hover:h-20 transition-all duration-500"></div>
                            <div>
                               <h4 className="font-display font-black text-xl text-white mb-3 tracking-tight group-hover:text-accent transition-colors">{skill.title}</h4>
                               <p className="text-blue-100/50 text-sm leading-relaxed max-w-lg">{skill.desc}</p>
                            </div>
                         </div>
                       ))}
                    </div>
                 </div>
                 
                 <div className="bg-white/5 backdrop-blur-xl p-12 rounded-[50px] border border-white/10">
                    <h4 className="font-display font-black text-2xl text-white mb-10 text-center uppercase tracking-tighter italic">Leadership Roles</h4>
                    <div className="flex flex-wrap gap-3 justify-center">
                       {CAREER_TAGS.map((tag, i) => (
                         <span key={i} className="px-5 py-3 bg-white/5 rounded-2xl text-[9px] font-black uppercase tracking-widest text-white/70 hover:bg-accent hover:text-white transition-all cursor-default border border-white/5">
                           {tag}
                         </span>
                       ))}
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Assessment Box */}
        <section className="mb-12">
           <div className="bg-white dark:bg-surface-dark rounded-[60px] p-20 shadow-subtle border border-gray-100 dark:border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] -mr-32 -mt-32"></div>
              <div className="flex flex-wrap justify-center items-center gap-4 mb-20">
                 <div className="h-0.5 w-12 bg-gray-200"></div>
                 <h2 className="text-4xl font-black font-display uppercase tracking-tighter">Exam <span className="text-accent underline decoration-accent/20 underline-offset-[14px]">Metrics</span></h2>
                 <div className="h-0.5 w-12 bg-gray-200"></div>
              </div>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-16 max-w-5xl mx-auto mb-20">
                {[
                  { icon: "quiz", val: "40", label: "Questions" },
                  { icon: "layers", val: "MCQ", label: "Format" },
                  { icon: "timer", val: "90m", label: "Duration" },
                  { icon: "military_tech", val: "70%", label: "Pass Mark", star: true }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center">
                     <span className={`material-icons text-4xl mb-6 ${item.star ? 'text-accent' : 'text-gray-300 dark:text-white/10'}`}>{item.icon}</span>
                     <p className={`font-display font-black text-3xl mb-1 ${item.star ? 'text-accent' : 'text-primary dark:text-white'}`}>{item.val}</p>
                     <p className="text-[11px] font-black text-gray-400 uppercase tracking-widest">{item.label}</p>
                  </div>
                ))}
              </div>
              
              <div className="text-center px-10 py-6 bg-[#f8fafc] dark:bg-white/5 rounded-3xl inline-flex items-center gap-4 mx-auto w-full justify-center lg:w-auto relative group-hover:scale-105 transition-transform">
                 <span className="material-icons text-green-500">menu_book</span>
                 <p className="text-[11px] font-black uppercase tracking-[3px] text-gray-500">Open Book Exam · Official ITIL Materials Permitted</p>
              </div>
           </div>
        </section>
      </main>

      {/* Strategic Footer */}
      <footer className="container mx-auto px-6 pb-20">
         <div className="bg-accent p-24 rounded-[70px] text-center shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(13,27,42,0.1)_1px,_transparent_1px)] bg-[length:32px_32px]"></div>
            <div className="relative z-10">
               <h2 className="text-6xl md:text-8xl font-black font-display text-white mb-10 tracking-tighter uppercase leading-[0.9] italic">Lead with<br/> <span className="text-primary not-italic">Strategic Clarity</span></h2>
               <p className="text-white/80 mb-12 max-w-xl mx-auto text-xl font-medium leading-relaxed">Join Peer's elite Strategic Leader program and master the alignment of technology with business value at the highest level.</p>
               <Link to="/contact" className="inline-block bg-primary hover:bg-white hover:text-primary text-white font-black py-8 px-20 rounded-[35px] transition-all shadow-xl active:scale-95 text-[15px] uppercase tracking-[5px] ring-8 ring-white/10">
                  Secure Your Training
               </Link>
            </div>
         </div>
      </footer>
    </div>
  );
}
