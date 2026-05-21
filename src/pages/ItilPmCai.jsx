import React from 'react';
import { Link } from 'react-router-dom';

const PRACTICES = [
  "Relationship Management", "Supplier Management", "Service Level Management",
  "Continual Improvement", "Information Security Management"
];

const LEARN_POINTS = [
  { icon: "🖥️", title: "Key concepts", desc: "Understand the key concepts of the 5 practices and their significance in fostering collaboration and ensuring quality." },
  { icon: "📊", title: "Practice success factors", desc: "Introduce PSF and key metrics essential for evaluating the effectiveness and maturity of practices." },
  { icon: "🔄", title: "Practice processes", desc: "Explore processes including key activities and learn how to integrate practices into the value stream." },
  { icon: "👥", title: "Roles and competencies", desc: "Focus on key roles and develop the necessary competencies for driving collaboration and improvement." },
  { icon: "💡", title: "Information and technology", desc: "Explore how IT can support and enable practices to deliver improvements and enhance efforts." },
  { icon: "🤝", title: "Partners and suppliers", desc: "Focus on the role of partners and suppliers and how to collaborate effectively to leverage external expertise." },
  { icon: "🏗️", title: "The ITIL capability model", desc: "Explore how capability criteria support practice development, ensuring alignment with industry best practices." },
  { icon: "🎯", title: "Practice success", desc: "Focus on recommendations for success and understand how they are supported by ITIL guiding principles." }
];

const SKILLS = [
  { title: "Change Management", desc: "Gain expertise in developing, implementing, monitoring, and communicating change plans and schedules." },
  { title: "Governance", desc: "Understand how organisational governance evaluates, directs and monitors service management activities." },
  { title: "Relationship management", desc: "Learn to establish, analyze, monitor, and improve links between the organization and its stakeholders." }
];

const CAREER_TAGS = [
  "IT Specialist: Operations", "IT Manager: Operations", "IT Service Manager", "Product Manager"
];

export default function ItilPmCai() {
  return (
    <div className="bg-[#f8fafc] dark:bg-background-dark min-h-screen font-body">
      {/* Hero Section */}
      <header className="relative bg-[#071B34] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_#4DA3FF_1px,_transparent_1px)] bg-[length:32px_32px]"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-md px-4 py-1 rounded-full text-accent-blue text-[10px] font-black uppercase tracking-[0.2em] mb-6 border border-accent/30">
                Peer Certified · ITIL Practice Manager
              </div>
              <h1 className="text-4xl md:text-5xl font-black font-display mb-2 tracking-tight leading-tight uppercase">
                <span className="text-white/40 block text-lg tracking-[4px] mb-2">Practice Manager</span>
                Collaborate, Assure <br /> & Improve
              </h1>
              <p className="text-lg text-blue-100/70 max-w-2xl mb-8 leading-relaxed">
                A combined module that covers the key concepts of 5 ITIL Practices including Relationship, Supplier, and Service Level Management.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-10">
                {PRACTICES.map((p, i) => (
                  <span key={i} className="bg-white/5 border border-white/10 px-3 py-1 rounded text-[10px] font-bold text-accent-blue">
                    {p}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                {["🏆 Industry-recognized", "🌍 Global Standard", "⚙️ Practice-based"].map((pill, i) => (
                  <span key={i} className="bg-accent/10 border border-accent/20 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest text-accent">
                    {pill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="relative w-64 h-64">
                <div className="absolute inset-0 border-2 border-dashed border-accent/30 rounded-full animate-[spin_30s_linear_infinite]"></div>
                <div className="absolute inset-4 bg-gradient-to-br from-[#6a4c9c] to-[#071B34] rounded-full flex flex-col items-center justify-center text-center shadow-2xl border-2 border-white/10 p-6">
                  <span className="font-display font-black text-2xl text-white">ITIL®</span>
                  <span className="text-[8px] font-black uppercase tracking-widest text-white/60 mt-1">Practice Manager</span>
                  <span className="text-[10px] font-bold text-white mt-2 leading-tight">Collaborate, Assure<br/>& Improve</span>
                  <span className="mt-4 px-3 py-1 bg-accent rounded text-[8px] font-black uppercase tracking-[2px] text-white">Certified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-20">
        {/* At a Glance */}
        <section className="mb-32">
          <div className="text-center mb-16">
             <h2 className="text-3xl font-black font-display text-primary dark:text-white tracking-tight uppercase">Module <span className="text-accent underline decoration-accent/20 underline-offset-8">Overview</span></h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { icon: "👥", label: "For", value: "All professionals" },
              { icon: "🤝", label: "Benefit", value: "Boost assurance" },
              { icon: "🌐", label: "Status", value: "Global Standard" },
              { icon: "🗣️", label: "Language", value: "English" },
              { icon: "💻", label: "Mode", value: "E-learning" }
            ].map((item, i) => (
              <div key={i} className="bg-white dark:bg-surface-dark p-6 rounded-2xl shadow-subtle border border-gray-100 dark:border-white/5 text-center transition-all hover:scale-105">
                <div className="text-2xl mb-3">{item.icon}</div>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">{item.label}</p>
                <p className="text-xs font-black text-primary dark:text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Learning Points */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-black font-display text-primary dark:text-white tracking-tight uppercase">What You Will <span className="text-accent">Master</span></h2>
            <div className="h-px flex-grow bg-gray-200 dark:bg-white/10"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {LEARN_POINTS.map((item, i) => (
              <div key={i} className="bg-white dark:bg-surface-dark p-8 rounded-3xl shadow-subtle border border-gray-100 dark:border-white/5 flex flex-col items-start group hover:border-accent/40 transition-all">
                <div className="w-10 h-10 bg-gray-50 dark:bg-white/5 rounded-xl flex items-center justify-center text-xl mb-6 group-hover:bg-accent group-hover:text-white transition-all">{item.icon}</div>
                <h3 className="text-sm font-black font-display text-primary dark:text-white mb-3 uppercase tracking-wider">{item.title}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-32 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-primary text-white p-12 rounded-[40px] shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px]"></div>
             <h3 className="text-xs font-black uppercase tracking-[4px] text-accent-blue mb-8">Acquired Skills</h3>
             <div className="space-y-8">
               {SKILLS.map((s, i) => (
                 <div key={i} className="flex gap-6">
                    <span className="material-icons text-accent">verified</span>
                    <div>
                       <h4 className="font-display font-black text-lg mb-2">{s.title}</h4>
                       <p className="text-blue-100/60 text-sm leading-relaxed">{s.desc}</p>
                    </div>
                 </div>
               ))}
             </div>
          </div>
          
          <div className="bg-white dark:bg-surface-dark p-12 rounded-[40px] shadow-subtle border border-gray-100 dark:border-white/5">
             <h3 className="text-xs font-black uppercase tracking-[4px] text-accent mb-8">Career Paths</h3>
             <p className="text-xs text-gray-400 italic mb-8 uppercase tracking-widest leading-relaxed">Popular among professionals in these roles:</p>
             <div className="flex flex-wrap gap-4">
                {CAREER_TAGS.map((tag, i) => (
                  <span key={i} className="px-6 py-4 bg-gray-50 dark:bg-white/5 rounded-2xl text-[10px] font-black uppercase tracking-widest text-primary dark:text-white flex items-center gap-3 border border-transparent hover:border-accent/40 transition-all cursor-default">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                    {tag}
                  </span>
                ))}
             </div>
          </div>
        </section>

        {/* Exam Section */}
        <section className="mb-12">
          <div className="bg-white dark:bg-surface-dark border border-gray-100 dark:border-white/5 p-12 rounded-[50px] shadow-subtle">
            <div className="text-center mb-12">
               <h2 className="text-3xl font-black font-display text-primary dark:text-white tracking-tight uppercase">Exam <span className="text-accent underline decoration-accent/20 underline-offset-8">Details</span></h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: "📋", value: "60", label: "Questions" },
                { icon: "☑️", value: "Multiple choice", label: "Format" },
                { icon: "⏱️", value: "90 min", label: "Duration" },
                { icon: "🎯", value: "65%", label: "Pass Mark", highlight: true }
              ].map((item, i) => (
                <div key={i} className="text-center group">
                  <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                  <p className={`font-display font-black text-2xl mb-1 ${item.highlight ? 'text-accent' : 'text-primary dark:text-white'}`}>{item.value}</p>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{item.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 pt-8 border-t border-gray-100 dark:border-white/5 text-center">
               <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest flex items-center justify-center gap-2">
                  <span className="material-icons text-sm">lock</span>
                  Closed book exam · No reference materials permitted
               </p>
            </div>
          </div>
        </section>
      </main>

      {/* CTA */}
      <footer className="container mx-auto px-6 pb-20">
        <div className="bg-accent rounded-[50px] p-16 text-center shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[length:24px_24px] opacity-20"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-black font-display text-white mb-6 tracking-tighter uppercase">Master the <span className="text-primary italic">Collaborate</span> Practice</h2>
            <p className="text-white/80 mb-10 max-w-xl mx-auto font-medium">Join our next cohort and get certified in Collaborate, Assure & Improve.</p>
            <Link to="/contact" className="inline-block bg-primary hover:bg-white hover:text-primary text-white font-black py-5 px-12 rounded-2xl transition-all shadow-xl active:scale-95 text-[11px] uppercase tracking-[2px]">
              View Schedule
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
