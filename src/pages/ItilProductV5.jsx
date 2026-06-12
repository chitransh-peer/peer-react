import React from 'react';

import { Link } from 'react-router-dom';

import logo from '../assets/logos/itil-v5-product.svg';



const LEARN_POINTS = [

  { icon: "🔌", title: "Product & Service Integration", desc: "Understand how digital products providing capabilities and digital services enable value realization." },

  { icon: "🗺️", title: "Value Stream & Flow", desc: "Learn to identify, map, and improve product value streams to optimize flow and reduce waste." },

  { icon: "🔍", title: "Strategic Discovery", desc: "Align product roadmaps with organizational strategy through structured discovery and prioritization." },

  { icon: "🎨", title: "Human-Centred Design", desc: "Apply design thinking to create user-centered, scalable, and sustainable digital products." },

  { icon: "🤝", title: "Resource Orchestration", desc: "Learn to make informed acquisition decisions across technology, talent, and suppliers." },

  { icon: "🏗️", title: "Quality Engineering", desc: "Integrate design into build activities with automation, testing, and technical debt management." },

  { icon: "🚦", title: "Transition & Deployment", desc: "Execute risk-aware product transitions with operational readiness and observability." },

  { icon: "📡", title: "Reliable Operations", desc: "Apply SRE principles and observability to ensure reliability, availability, and resilience." },

  { icon: "🤖", title: "AI-Enabled Work", desc: "Integrate AI-enabled ways of working into product development and support lifecycle." }

];



const SKILLS = [

  { title: "End-to-End Product Management", desc: "Manage digital products throughout their lifecycle from discovery to support using the ITIL Lifecycle Model." },

  { title: "Cross-Functional Alignment", desc: "Break down silos and align stakeholders across the ITIL Value System to enhance collaboration." },

  { title: "Evidence-Based Decisions", desc: "Use metrics and feedback loops to continuously measure success and refine product strategy." }

];



const CAREER_TAGS = [

  "Product Manager", "Digital Product Manager", "Product Owner", "Head of Product Development", 

  "Enterprise Architect", "Solutions Architect", "IT Delivery Manager", "Service Delivery Manager", 

  "IT Operations Manager", "Portfolio Manager", "Chief Digital Officer"

];



export default function ItilProductV5() {

  return (

    <div className="bg-[#f8fafc] dark:bg-background-dark min-h-screen font-body">

      {/* Hero Section */}

      <header className="relative bg-gradient-to-br from-[#030d1a] via-[#080f2e] to-[#150833] text-white py-24 overflow-hidden">

        {/* Premium hero decoration — corner light leaks + scan lines */}

        <div className="absolute inset-0 pointer-events-none" style={{background: "radial-gradient(ellipse 65% 55% at 100% 0%, rgba(124,58,237,0.20) 0%, transparent 70%)"}} />

        <div className="absolute inset-0 pointer-events-none" style={{background: "radial-gradient(ellipse 50% 45% at 0% 100%, rgba(37,99,235,0.14) 0%, transparent 70%)"}} />

        <div className="container mx-auto px-6 relative z-10">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-12 items-center">

            <div className="lg:col-span-8">

              <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-md px-4 py-1 rounded-full text-accent-blue text-[10px] font-black uppercase tracking-[0.2em] mb-6 border border-accent/30">

                PeopleCert Certified

              </div>

              <h1 className="text-[26px] sm:text-4xl md:text-7xl font-black font-display mb-6 tracking-tight leading-tight uppercase">

                ITIL Product <br />

                <span className="text-accent underline decoration-accent/20 underline-offset-8 italic">(Version 5)</span>

              </h1>

              <p className="text-xl text-blue-100/70 max-w-2xl mb-10 leading-relaxed">

                Manage digital products as integrated value streams, aligning capabilities, services, and business outcomes across their full lifecycle.

              </p>

              <div className="flex flex-wrap gap-4 mb-10">

                {["🏆 Industry-recognized", "🌍 Global Standard", "📦 Product Management"].map((pill, i) => (

                  <span key={i} className="bg-white/5 border border-white/10 px-5 py-2 rounded-2xl text-xs font-bold text-blue-100/80">

                    {pill}

                  </span>

                ))}

              </div>

            </div>

            <div className="lg:col-span-4 flex justify-center lg:justify-end">

               <div className="relative group p-6">

                  <div className="absolute inset-0 bg-accent/20 rounded-full blur-[60px] animate-pulse"></div>

                  <img 

                    src={logo} 

                    alt="ITIL V5 Product Logo" 

                    className="relative w-80 h-80 object-contain transition-transform group-hover:scale-105 duration-700"

                  />

               </div>

            </div>

          </div>

        </div>

      </header>



      {/* Value Proposition */}

      <section className="bg-white dark:bg-surface-dark py-16 border-b border-gray-100 dark:border-white/5">

        <div className="container mx-auto px-6">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">

            {[

              { title: "Industry Standard", desc: "Showcase your ability to deliver and manage digital products from start to finish." },

              { title: "Employer Choice", desc: "Certify your expertise making you the preferred choice in today's competitive landscape." },

              { title: "New Opportunities", desc: "Equip yourself with in-demand skills to accelerate your growth and qualify for top roles." }

            ].map((v, i) => (

              <div key={i} className="flex flex-col items-start">

                <div className="w-12 h-1 bg-accent mb-6 rounded-full"></div>

                <h3 className="text-lg font-black font-display text-primary dark:text-white mb-2 uppercase tracking-wider">{v.title}</h3>

                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{v.desc}</p>

              </div>

            ))}

          </div>

        </div>

      </section>



      <main className="container mx-auto px-6 py-24">

        {/* At a Glance */}

        <section className="mb-32">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

            {[

              { icon: "🔗", label: "For", value: "Any career stage" },

              { icon: "📦", label: "Key Benefit", value: "Product Management" },

              { icon: "🌐", label: "Status", value: "Globally Recognized" },

              { icon: "🇬🇧", label: "Language", value: "Exam in English" }

            ].map((item, i) => (

              <div key={i} className="bg-white dark:bg-surface-dark p-8 rounded-3xl shadow-subtle border border-gray-100 dark:border-white/5 flex flex-col items-center text-center group">

                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>

                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">{item.label}</p>

                <p className="text-sm font-black text-primary dark:text-white">{item.value}</p>

              </div>

            ))}

          </div>

        </section>



        {/* Learning Outcomes */}

        <section className="mb-32">

          <div className="flex items-center gap-6 mb-16">

            <h2 className="text-3xl md:text-4xl font-black font-display text-primary dark:text-white tracking-tight uppercase">What You Will <span className="text-accent underline decoration-accent/20 underline-offset-8">Learn</span></h2>

            <div className="h-px flex-grow bg-gray-200 dark:bg-white/10"></div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {LEARN_POINTS.map((item, i) => (

              <div key={i} className="bg-white dark:bg-surface-dark p-10 rounded-[40px] shadow-subtle border border-gray-100 dark:border-white/5 group hover:border-accent transition-all relative overflow-hidden flex flex-col h-full">

                <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/5 rounded-full blur-xl group-hover:bg-accent/10 transition-all"></div>

                <div className="text-3xl mb-6 relative z-10">{item.icon}</div>

                <h3 className="text-sm font-black font-display text-primary dark:text-white mb-4 uppercase tracking-widest leading-tight relative z-10">{item.title}</h3>

                <p className="text-[13px] text-gray-500 dark:text-gray-400 leading-relaxed relative z-10">{item.desc}</p>

              </div>

            ))}

          </div>

        </section>



        {/* Skills & Careers */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 mb-32">

          <div className="bg-[#071B34] p-6 md:p-12 rounded-2xl shadow-2xl text-white relative overflow-hidden">

             <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,_rgba(232,52,28,0.1),_transparent_70%)]"></div>

             <h3 className="text-[10px] font-black text-accent-blue uppercase tracking-[4px] mb-12 relative z-10">Skills Acquired</h3>

             <div className="space-y-12 relative z-10">

                {SKILLS.map((skill, i) => (

                  <div key={i} className="flex gap-6 group">

                     <span className="material-icons text-accent group-hover:rotate-12 transition-transform">auto_awesome</span>

                     <div>

                        <h4 className="font-display font-black text-lg mb-2">{skill.title}</h4>

                        <p className="text-blue-100/60 text-sm leading-relaxed">{skill.desc}</p>

                     </div>

                  </div>

                ))}

             </div>

          </div>



          <div className="bg-white dark:bg-surface-dark p-6 md:p-12 rounded-2xl shadow-subtle border border-gray-100 dark:border-white/5">

             <h3 className="text-[10px] font-black text-accent uppercase tracking-[4px] mb-12">Career Opportunities</h3>

             <div className="flex flex-wrap gap-3">

                {CAREER_TAGS.map((tag, i) => (

                  <span key={i} className="px-6 py-4 bg-gray-50 dark:bg-white/5 rounded-2xl text-[10px] font-black uppercase tracking-widest text-primary dark:text-white border border-transparent hover:border-accent hover:shadow-lg transition-all cursor-default">

                    {tag}

                  </span>

                ))}

             </div>

          </div>

        </div>



        {/* Exam Section */}

        <section className="mb-24">

          <div className="bg-white dark:bg-surface-dark rounded-2xl p-6 md:p-16 shadow-subtle border border-gray-100 dark:border-white/5 relative overflow-hidden">

             <div className="relative sm:absolute sm:top-0 sm:right-0 mt-4 sm:mt-0 p-0 sm:p-8 flex justify-center w-full sm:w-auto">

                <div className="bg-green-500/10 text-green-600 px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-[3px] border border-green-500/20">

                   📖 Open Book Exam

                </div>

             </div>

             <div className="text-center mb-16">

                <h2 className="text-3xl font-black font-display text-primary dark:text-white mb-2 uppercase tracking-tighter">Exam <span className="text-accent underline decoration-accent/20 underline-offset-8">Essentials</span></h2>

             </div>

             <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12 max-w-4xl mx-auto">

               {[

                 { icon: "assignment", val: "40", label: "Questions" },

                 { icon: "fact_check", val: "MCQ", label: "Format" },

                 { icon: "timer", val: "90m", label: "Duration" },

                 { icon: "verified", val: "70%", label: "Pass Mark", highlight: true }

               ].map((m, i) => (

                 <div key={i} className="text-center group flex flex-col h-full">

                    <span className="material-icons text-3xl mb-4 text-gray-200 dark:text-white/10 group-hover:text-accent transition-colors">{m.icon}</span>

                    <p className={`font-display font-black text-3xl mb-1 ${m.highlight ? 'text-accent' : 'text-primary dark:text-white'}`}>{m.val}</p>

                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{m.label}</p>

                 </div>

               ))}

             </div>

             <div className="mt-16 text-center">

                <p className="text-[11px] font-medium text-gray-400 italic">Permitted ITIL materials may apply. Check exam protocol for specific details.</p>

             </div>

          </div>

        </section>

      </main>



      {/* CTA Footer */}

      <footer className="container mx-auto px-6 pb-20">

         <div className="bg-accent rounded-2xl p-6 md:p-20 text-center shadow-2xl relative overflow-hidden group">

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[length:32px_32px] opacity-20"></div>

            <div className="relative z-10">

               <h2 className="text-[26px] sm:text-4xl md:text-7xl font-black font-display text-white mb-8 tracking-tighter uppercase leading-none break-words">Deliver Value<br/> <span className="text-primary italic">Consistently</span></h2>

               <p className="text-white/80 mb-12 max-w-xl mx-auto text-lg font-medium">Join our expert-led ITIL Product V5 training and master the full lifecycle of digital product management.</p>

               <Link to="/contact" className="inline-block bg-primary hover:bg-white hover:!text-primary text-white font-black py-6 px-16 rounded-3xl transition-all shadow-xl active:scale-95 text-[12px] uppercase tracking-[3px]">

                  Enroll Now

               </Link>

            </div>

         </div>

      </footer>

    </div>

  );

}

