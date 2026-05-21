import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logos/itil-v5-service.svg';

const LEARN_POINTS = [
  { icon: "🖥️", title: "Digital products and services", desc: "Understand the key concepts of digital product and service management and how they support performance." },
  { icon: "🤝", title: "Service value co-creation", desc: "Explore how services enable the co-creation of value with customers, partners, and stakeholders." },
  { icon: "⭐", title: "Experience-led service quality", desc: "Learn how to apply human-centred, experience-led design to improve the perception and quality of services." },
  { icon: "🛡️", title: "Resilient and adaptable services", desc: "Discover how to develop resilient, sustainable, and adaptable services to respond effectively to change." },
  { icon: "🎯", title: "Strategy and service alignment", desc: "Gain a clear understanding of how services connect strategic intent with consistent performance." },
  { icon: "👥", title: "Stakeholder-aligned services", desc: "Explore how services align with real stakeholder needs to ensure relevance and deliver outcomes." },
  { icon: "📈", title: "Continual improvement", desc: "Examine how to use continual improvement and evidence-based decisions to increase value and reduce waste." },
  { icon: "🏛️", title: "Service governance and innovation", desc: "Learn how practical governance supports compliance, risk management, and responsible innovation." },
  { icon: "🤖", title: "AI-enabled service delivery", desc: "Understand how AI and automation enhance service capability while maintaining trust and accountability." }
];

const SKILLS = [
  { title: "Value driven service management", desc: "Explore best practices for working with customers and partners to enable value co-creation." },
  { title: "Experience-led service improvement", desc: "Adopt human-centred design to improve how services are perceived, delivered, and measured." },
  { title: "Continual improvement capability", desc: "Strengthen improvement capability using evidence-based decisions to improve outcomes." }
];

const CAREER_TAGS = [
  "IT Service Manager", "Service Delivery Manager", "Customer Success Manager", "Service Owner",
  "Experience Manager", "IT Team Leader", "Transformation Manager", "Chief Digital Officer",
  "Digital Product Manager", "Enterprise Architect", "Service Improvement Manager"
];

export default function ItilServiceV5() {
  return (
    <div className="bg-[#f8fafc] dark:bg-background-dark min-h-screen font-body text-primary dark:text-white">
      {/* Hero Section */}
      <header className="relative bg-[#071B34] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_rgba(23,137,193,0.1)_0%,_transparent_50%)]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-md px-4 py-1 rounded-full text-accent-blue text-[10px] font-black uppercase tracking-[0.2em] mb-8 border border-accent/30">
                PeopleCert Certified · Specialist
              </div>
              <h1 className="text-5xl md:text-7xl font-black font-display mb-6 tracking-tight leading-tight uppercase">
                ITIL Service <br />
                <span className="text-accent underline decoration-white/10 underline-offset-[12px] italic">(Version 5)</span>
              </h1>
              <p className="text-xl text-blue-100/70 max-w-2xl mb-12 leading-relaxed">
                Equip yourself with the expertise to deliver resilient, high-performing digital services. Manage relationships, service levels, and operational reliability with confidence.
              </p>
              <div className="flex flex-wrap gap-4">
                {["🏆 Industry Standard", "⚙️ Service Excellence", "🇬🇧 English"].map((pill, i) => (
                  <span key={i} className="flex items-center gap-2 bg-white/5 border border-white/10 px-6 py-2 rounded-2xl text-[11px] font-bold uppercase tracking-widest text-blue-200">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                    {pill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
               <div className="relative group p-6">
                  <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl group-hover:bg-accent/30 transition-all duration-1000"></div>
                  <img 
                    src={logo} 
                    alt="ITIL V5 Service Logo" 
                    className="relative w-80 h-80 object-contain transition-transform group-hover:scale-105 duration-700"
                  />
               </div>
            </div>
          </div>
        </div>
      </header>

      {/* Value Strip */}
      <section className="bg-white dark:bg-surface-dark py-12 border-b border-gray-100 dark:border-white/5">
         <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-gray-100 dark:divide-white/5">
               {[
                 { q: "Industry Choice", d: "Showcase your ability to deliver and improve digital services from start to finish." },
                 { q: "Expert Status", d: "Certify your expertise in managing digital products and services in a competitive market." },
                 { q: "Career Growth", d: "Equip yourself with in-demand skills to accelerate your growth worldwide." }
               ].map((item, i) => (
                 <div key={i} className="py-4 md:px-8 first:pl-0">
                    <h3 className="font-display font-black text-sm uppercase tracking-wider mb-2 text-primary dark:text-white">{item.q}</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{item.d}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      <main className="container mx-auto px-6 py-24">
        {/* At a Glance Grid */}
        <section className="mb-32">
           <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "psychology", label: "Suitable for", val: "Any career stage" },
                { icon: "settings_suggest", label: "Key Benefit", val: "Service Excellence" },
                { icon: "public", label: "Status", val: "Global Standard" },
                { icon: "spellcheck", label: "Language", val: "English" }
              ].map((item, i) => (
                <div key={i} className="bg-[#f8fafc] dark:bg-white/5 p-10 rounded-[40px] border border-gray-100 dark:border-white/5 group hover:shadow-xl hover:border-accent/20 transition-all text-center">
                   <span className="material-icons text-3xl text-accent mb-6 opacity-40 group-hover:opacity-100 transition-opacity">{item.icon}</span>
                   <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">{item.label}</p>
                   <p className="text-sm font-black text-primary dark:text-white uppercase">{item.val}</p>
                </div>
              ))}
           </div>
        </section>

        {/* Master Section */}
        <section className="mb-32">
           <div className="text-center mb-16">
              <h2 className="text-4xl font-black font-display tracking-tight uppercase">What You Will <span className="text-accent underline decoration-accent/10 underline-offset-8">Master</span></h2>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {LEARN_POINTS.map((lp, i) => (
                <div key={i} className="bg-white dark:bg-surface-dark p-10 rounded-[48px] shadow-subtle border border-gray-100 dark:border-white/5 hover:scale-[1.02] transition-transform group">
                   <div className="w-14 h-14 bg-gray-50 dark:bg-white/5 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:bg-accent group-hover:text-white transition-all shadow-sm">{lp.icon}</div>
                   <h3 className="text-sm font-black font-display mb-4 tracking-widest uppercase leading-tight">{lp.title}</h3>
                   <p className="text-[13px] text-gray-500 dark:text-gray-400 leading-relaxed">{lp.desc}</p>
                </div>
              ))}
           </div>
        </section>

        {/* Skills Overlay */}
        <section className="mb-32 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
           <div className="lg:col-span-8 bg-[#071B34] p-16 rounded-[60px] text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-[120px] -mr-48 -mt-48"></div>
              <h3 className="text-[10px] font-black text-accent-blue uppercase tracking-[5px] mb-12">Specialist Skills</h3>
              <div className="space-y-12">
                 {SKILLS.map((skill, i) => (
                   <div key={i} className="flex gap-8 group">
                      <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-accent font-black group-hover:bg-accent group-hover:text-white transition-all">0{i+1}</div>
                      <div>
                         <h4 className="font-display font-black text-xl mb-3 tracking-tight">{skill.title}</h4>
                         <p className="text-blue-100/50 text-sm leading-relaxed max-w-lg">{skill.desc}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
           <div className="lg:col-span-4 bg-white dark:bg-surface-dark p-12 rounded-[60px] border border-gray-100 dark:border-white/5 flex flex-col justify-center">
              <h3 className="font-display font-black text-2xl uppercase tracking-tighter mb-10 text-center">Unlocked<br/>Roles</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                 {CAREER_TAGS.map((tag, i) => (
                   <span key={i} className="px-5 py-3 bg-gray-50 dark:bg-white/5 rounded-xl border border-transparent hover:border-accent hover:text-accent transition-all text-[9.5px] font-black uppercase tracking-widest cursor-default">
                     {tag}
                   </span>
                 ))}
              </div>
           </div>
        </section>

        {/* Exam Section */}
        <section className="mb-12">
           <div className="bg-[#f8fafc] dark:bg-white/5 rounded-[60px] p-20 shadow-inner relative overflow-hidden group">
              <div className="absolute right-12 top-12 flex items-center gap-3 bg-white dark:bg-surface-dark px-6 py-3 rounded-full border border-gray-200 dark:border-white/10 shadow-sm transition-transform group-hover:-translate-y-2">
                 <span className="material-icons text-green-500 text-sm">menu_book</span>
                 <span className="text-[10px] font-black uppercase tracking-widest">Open Book Format</span>
              </div>
              <div className="text-center mb-16 max-w-2xl mx-auto">
                 <h2 className="text-3xl font-black font-display mb-4 uppercase tracking-tighter">Exam <span className="text-accent underline decoration-accent/20 underline-offset-8">Protocol</span></h2>
                 <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">Official PeopleCert Assessment Guidelines</p>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 max-w-4xl mx-auto">
                {[
                  { icon: "auto_stories", val: "40", sub: "Questions" },
                  { icon: "checklist", val: "MCQ", sub: "Format" },
                  { icon: "hourglass_top", val: "90m", sub: "Duration" },
                  { icon: "workspace_premium", val: "70%", sub: "Pass Mark", best: true }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center">
                     <span className={`material-icons text-4xl mb-6 ${item.best ? 'text-accent' : 'text-gray-200 dark:text-white/10'}`}>{item.icon}</span>
                     <p className={`font-display font-black text-3xl mb-1 ${item.best ? 'text-accent' : 'text-primary dark:text-white'}`}>{item.val}</p>
                     <p className="text-[11px] font-black text-gray-400 uppercase tracking-widest">{item.sub}</p>
                  </div>
                ))}
              </div>
              <div className="mt-20 pt-8 border-t border-gray-200 dark:border-white/10 text-center">
                 <p className="text-[10px] font-black text-gray-400 uppercase tracking-[4px]">Verified ITIL Specialist Assessment</p>
              </div>
           </div>
        </section>
      </main>

      {/* CTA Section */}
      <footer className="container mx-auto px-6 pb-20">
         <div className="bg-primary p-24 rounded-[70px] text-center shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/20 to-transparent"></div>
            <div className="relative z-10">
               <h2 className="text-5xl md:text-8xl font-black font-display text-white mb-10 tracking-tighter uppercase leading-none italic">Elevate Your<br/> <span className="text-accent not-italic">Service Strategy</span></h2>
               <p className="text-blue-100/60 mb-12 max-w-xl mx-auto text-lg leading-relaxed">Join Peer's elite Specialist program and master the mechanics of world-class digital services.</p>
               <Link to="/contact" className="inline-block bg-white hover:bg-accent hover:text-white text-primary font-black py-7 px-20 rounded-[30px] transition-all shadow-xl active:scale-95 text-[14px] uppercase tracking-[4px] border-b-4 border-gray-200 hover:border-accent">
                  Book Your Seat
               </Link>
            </div>
         </div>
      </footer>
    </div>
  );
}
