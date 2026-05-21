import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logos/itil-v5-transformation.svg';

const LEARN_POINTS = [
  { icon: "🧩", title: "Key Transformation Concepts", desc: "Understand how change, value, and the ITIL Product and Service Lifecycle are connected." },
  { icon: "🌀", title: "Complex Environments", desc: "Discover how to approach transformation across range of contexts, including chaotic environments." },
  { icon: "🗺️", title: "The Transformation Model", desc: "Learn how to apply the layers, stages, and steps across governance, positioning, and execution." },
  { icon: "🔀", title: "Transformation Patterns", desc: "Explore initiation and governance patterns and how they shape transformation scope and timing." },
  { icon: "⚖️", title: "Governance Alignment", desc: "Understand how governance supports transformation while enabling flexibility and value delivery." },
  { icon: "🚀", title: "Execution & Delivery", desc: "Learn how to manage and implement transformation initiatives across different business scenarios." },
  { icon: "📈", title: "Measurement & Learning", desc: "Discover how to measure progress, evaluate outcomes, and embed continuous learning into the organization." },
  { icon: "🛠️", title: "Tools & Techniques", desc: "Apply approaches such as value stream mapping, OKRs, and the ITIL Maturity Model to transformation." },
  { icon: "🤖", title: "AI & Transformation", desc: "Deepen understanding of AI governance supporting transformation readiness and adaptive execution." }
];

const SKILLS = [
  { title: "Transformation Leadership", desc: "Gain the expertise needed to lead and support effective transformation initiatives across digital services." },
  { title: "Balanced Governance", desc: "Learn to balance structure and adaptability to deliver sustainable transformation in complex environments." },
  { title: "Value-Driven Change", desc: "Build skills to ensure transformation initiatives deliver measurable value and improve resilience." }
];

const CAREER_TAGS = [
  "Transformation Manager", "Digital Transformation Lead", "Change Manager", "Chief Digital Officer",
  "IT Director", "Enterprise Architect", "Programme Manager", "IT Project Manager", "Service Improvement Manager"
];

export default function ItilTransformationV5() {
  return (
    <div className="bg-[#f8fafc] dark:bg-background-dark min-h-screen font-body text-primary dark:text-white">
      {/* Hero Section */}
      <header className="relative bg-[#071B34] text-white py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,_rgba(232,52,28,0.1)_0%,_transparent_50%)]"></div>
          <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_80%_80%,_rgba(23,137,193,0.1)_0%,_transparent_50%)]"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-md px-4 py-1 rounded-full text-accent-blue text-[10px] font-black uppercase tracking-[0.2em] mb-8 border border-accent/30">
                PeopleCert Certified · Specialist
              </div>
              <h1 className="text-5xl md:text-8xl font-black font-display mb-8 tracking-tighter leading-[0.9] uppercase">
                ITIL <br />
                <span className="text-accent underline decoration-white/10 underline-offset-[12px] italic">Transformation</span> <br />
                <span className="text-white/40 block text-2xl tracking-[6px] mt-4">(Version 5)</span>
              </h1>
              <p className="text-xl text-blue-100/70 max-w-2xl mb-12 leading-relaxed">
                Embed, sustain, and optimize change across digital products. Master the balance of governance, execution, and continual learning in AI-driven landscapes.
              </p>
              <div className="flex flex-wrap gap-3">
                {["🏆 Industry-recognized", "🌍 Globally recognized", "🇬🇧 English"].map((pill, i) => (
                  <span key={i} className="bg-white/5 border border-white/10 px-6 py-3 rounded-2xl text-[11px] font-black uppercase tracking-[3px] text-blue-200 hover:border-accent/40 transition-colors cursor-default">
                    {pill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
               <div className="relative group p-6">
                  <div className="absolute inset-0 bg-accent rounded-full opacity-10 group-hover:opacity-20 blur-2xl group-hover:scale-110 transition-all duration-1000"></div>
                  <img 
                    src={logo} 
                    alt="ITIL V5 Transformation Logo" 
                    className="relative w-80 h-80 object-contain transition-transform group-hover:scale-105 duration-700"
                  />
               </div>
            </div>
          </div>
        </div>
      </header>

      {/* Value Proposition */}
      <section className="bg-white dark:bg-surface-dark py-20 border-b border-gray-100 dark:border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { title: "Recognized Proof", desc: "Prove your ability to lead transformation initiatives and improve organizational resilience." },
              { title: "Modern Expertise", desc: "Showcase expertise in managing change and aligning teams in today's digital climate." },
              { title: "Leadership Path", desc: "Build capabilities to lead scale change and reach organizational leadership roles." }
            ].map((item, i) => (
              <div key={i} className="group">
                <div className="w-12 h-1 bg-accent mb-8 group-hover:w-20 transition-all duration-500 rounded-full"></div>
                <h3 className="font-display font-black text-lg uppercase tracking-tight mb-4">{item.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{item.desc}</p>
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
                { icon: "webhook", label: "For", value: "Any career stage" },
                { icon: "auto_fix_high", label: "Key Benefit", value: "Lead Transformation" },
                { icon: "public", label: "Status", value: "Globally Recognized" },
                { icon: "g_translate", label: "Language", value: "English" }
              ].map((item, i) => (
                <div key={i} className="bg-white dark:bg-surface-dark p-10 rounded-[50px] shadow-subtle border border-gray-100 dark:border-white/5 text-center transition-all hover:scale-105 group">
                   <span className="material-icons text-3xl text-accent mb-6 opacity-30 group-hover:opacity-100 transition-opacity">{item.icon}</span>
                   <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">{item.label}</p>
                   <p className="text-sm font-black uppercase">{item.value}</p>
                </div>
              ))}
           </div>
        </section>

        {/* Master Section */}
        <section className="mb-32">
           <div className="flex flex-col md:flex-row items-center gap-6 mb-20">
              <h2 className="text-4xl font-black font-display tracking-tight uppercase">Master the <span className="text-accent underline decoration-accent/10 underline-offset-[10px]">Change</span></h2>
              <div className="h-px flex-grow bg-gradient-to-r from-gray-200 to-transparent dark:from-white/10"></div>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {LEARN_POINTS.map((lp, i) => (
                <div key={i} className="p-10 bg-[#f8fafc] dark:bg-white/5 rounded-[60px] border border-transparent hover:border-accent/30 hover:bg-white dark:hover:bg-surface-dark transition-all group relative overflow-hidden">
                   <div className="absolute top-8 right-8 text-7xl font-display font-black text-gray-100 dark:text-white/5 opacity-40 group-hover:opacity-100 transition-opacity">0{i+1}</div>
                   <div className="text-3xl mb-10 relative z-10">{lp.icon}</div>
                   <h3 className="text-sm font-black font-display mb-4 tracking-widest uppercase relative z-10 leading-tight">{lp.title}</h3>
                   <p className="text-[13px] text-gray-500 dark:text-gray-400 leading-relaxed relative z-10 font-medium">{lp.desc}</p>
                </div>
              ))}
           </div>
        </section>

        {/* Skills & Careers Overlay */}
        <section className="mb-32 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
           <div className="lg:col-span-8 bg-[#071B34] p-16 rounded-[70px] text-white relative overflow-hidden group shadow-2xl">
              <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-accent/20 rounded-full blur-[100px] group-hover:bg-accent/40 transition-all duration-1000"></div>
              <h3 className="text-[10px] font-black text-accent-blue uppercase tracking-[6px] mb-12 relative z-10">Transitional Skills</h3>
              <div className="space-y-16 relative z-10">
                 {SKILLS.map((skill, i) => (
                   <div key={i} className="flex gap-10 group/item">
                      <div className="flex flex-col items-center gap-4">
                         <div className="w-12 h-12 bg-white/5 rounded-[20px] flex items-center justify-center text-accent group-hover/item:bg-accent group-hover/item:text-white transition-all shadow-lg">
                           <span className="material-icons text-xl">auto_graph</span>
                         </div>
                         <div className="w-0.5 h-full bg-white/10 group-hover/item:bg-accent/40 transition-colors"></div>
                      </div>
                      <div>
                         <h4 className="font-display font-black text-xl mb-4 tracking-tight uppercase leading-none">{skill.title}</h4>
                         <p className="text-blue-100/50 text-sm leading-relaxed max-w-lg">{skill.desc}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
           
           <div className="lg:col-span-4 bg-white dark:bg-surface-dark p-12 rounded-[70px] border border-gray-100 dark:border-white/5 flex flex-col items-center">
              <h3 className="font-display font-black text-2xl uppercase tracking-tighter mb-12 text-center text-primary dark:text-white">Career Paths</h3>
              <div className="grid grid-cols-1 gap-3 w-full">
                 {CAREER_TAGS.map((tag, i) => (
                   <div key={i} className="flex items-center justify-between p-5 bg-[#f8fafc] dark:bg-white/5 rounded-3xl group/tag border border-transparent hover:border-accent hover:bg-white dark:hover:bg-primary transition-all cursor-default">
                      <span className="text-[10px] font-black uppercase tracking-widest text-gray-500 group-hover/tag:text-primary dark:group-hover/tag:text-white">{tag}</span>
                      <span className="material-icons text-accent text-sm group-hover/tag:scale-125 transition-transform">bolt</span>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* Exam Board */}
        <section className="mb-12">
           <div className="bg-white dark:bg-surface-dark rounded-[80px] p-20 shadow-subtle border border-gray-100 dark:border-white/5 relative overflow-hidden text-center">
              <div className="flex items-center justify-center gap-6 mb-16">
                 <div className="h-px w-20 bg-gray-200"></div>
                 <h2 className="text-4xl font-black font-display uppercase tracking-tight">Exam <span className="text-accent underline decoration-accent/20 underline-offset-[16px]">Board</span></h2>
                 <div className="h-px w-20 bg-gray-200"></div>
              </div>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-16 max-w-5xl mx-auto mb-16">
                {[
                  { icon: "analytics", val: "40", lab: "Questions" },
                  { icon: "format_list_bulleted", val: "MCQ", lab: "Format" },
                  { icon: "schedule", val: "90m", lab: "Duration" },
                  { icon: "verified", val: "70%", lab: "Pass Mark", hit: true }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center group">
                     <span className={`material-icons text-5xl mb-6 transition-transform group-hover:scale-110 ${item.hit ? 'text-accent' : 'text-gray-100 dark:text-white/5'}`}>{item.icon}</span>
                     <p className={`font-display font-black text-4xl mb-2 ${item.hit ? 'text-accent' : 'text-primary dark:text-white'}`}>{item.val}</p>
                     <p className="text-[11px] font-black text-gray-400 uppercase tracking-widest">{item.lab}</p>
                  </div>
                ))}
              </div>
              
              <div className="inline-flex items-center gap-4 px-10 py-5 bg-[#f8fafc] dark:bg-white/5 rounded-full border border-gray-100 dark:border-white/10">
                 <span className="material-icons-outlined text-green-500">menu_book</span>
                 <p className="text-[10px] font-black uppercase tracking-widest text-gray-500">Open Book exam · Official ITIL materials permitted</p>
              </div>
           </div>
        </section>
      </main>

      {/* CTA Footer */}
      <footer className="container mx-auto px-6 pb-20">
         <div className="bg-[#071B34] p-24 rounded-[80px] text-center shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(232,52,28,0.15),_transparent_70%)]"></div>
            <div className="relative z-10">
               <h2 className="text-6xl md:text-9xl font-black font-display text-white mb-12 tracking-tighter uppercase leading-[0.8] italic">Lead the <br/> <span className="text-accent not-italic">Transformation</span></h2>
               <p className="text-blue-100/50 mb-12 max-w-2xl mx-auto text-xl leading-relaxed">Join Peer's elite Specialist program and drive measurable value at scale in AI-driven environments.</p>
               <Link to="/contact" className="inline-block bg-accent hover:bg-white hover:text-primary text-white font-black py-8 px-20 rounded-[40px] transition-all shadow-xl active:scale-95 text-[16px] uppercase tracking-[6px] ring-12 ring-white/5">
                  Secure Enrollment
               </Link>
            </div>
         </div>
      </footer>
    </div>
  );
}
