import React from 'react';

import { Link } from 'react-router-dom';

import logo from '../assets/logos/itil-v5-foundation.svg';



const LEARN_POINTS = [

  { icon: "🖥️", title: "Digital product & service concepts", desc: "Understand the core concepts behind modern digital products and services, including value creation and lifecycle management." },

  { icon: "🤝", title: "Value co-creation", desc: "Discover how value is co-created through collaboration between providers, consumers, and stakeholders." },

  { icon: "🔲", title: "The four dimensions", desc: "Delve into Organizations/People, Value Streams/Processes, Information/Technology, and Partners/Suppliers." },

  { icon: "⚙️", title: "ITIL Value System", desc: "Gain an understanding of the ITIL Value System and how it brings together guiding principles and governance." },

  { icon: "🧭", title: "ITIL Guiding Principles", desc: "Learn how to apply the framework's guiding principles to make better decisions and adapt to real-world environments." },

  { icon: "🔄", title: "Service lifecycle", desc: "Understand the purpose of each lifecycle activity — from discovery and design to operation and support." },

  { icon: "📦", title: "Management practices", desc: "Explore the role of ITIL management practices and how they support consistent, effective ways of working." },

  { icon: "📈", title: "Continual improvement", desc: "Learn how continual improvement is embedded within ITIL and its step-by-step approach to success." },

  { icon: "🗺️", title: "Value Stream Mapping", desc: "Understand how to identify, map, and manage value streams to improve flow, visibility, and outcomes." }

];



const SKILLS = [

  { title: "Lifecycle thinking", desc: "Embrace a 'lifecycle mindset' to make smarter decisions and keep teams aligned across the organization." },

  { title: "Value-focused working", desc: "Strengthen collaboration across roles by focusing on shared outcomes, transparency, and co-creation." },

  { title: "Continuous improvement", desc: "Build practical skills to embed continual improvement into everyday work and adapt to change." }

];



const CAREER_TAGS = [

  "IT Specialist", "Change Management", "IT Operations Specialist", "IT Team Leader", 

  "IT Project Manager", "Transformation Manager", "IT Service Manager", "Digital Product Manager", 

  "Product Owner", "Enterprise Architect", "Customer Success Manager"

];



export default function ItilFoundationV5() {

  return (

    <div className="bg-[#f8fafc] dark:bg-background-dark min-h-screen font-body text-primary dark:text-white">

      {/* Hero Section */}

      <header className="relative bg-gradient-to-br from-[#030d1a] via-[#080f2e] to-[#150833] text-white py-24 overflow-hidden border-b border-white/5">

        {/* Premium hero decoration — corner light leaks + scan lines */}

        <div className="absolute inset-0 pointer-events-none" style={{background: "radial-gradient(ellipse 65% 55% at 100% 0%, rgba(124,58,237,0.20) 0%, transparent 70%)"}} />

        <div className="absolute inset-0 pointer-events-none" style={{background: "radial-gradient(ellipse 50% 45% at 0% 100%, rgba(37,99,235,0.14) 0%, transparent 70%)"}} />

        <div className="container mx-auto px-6 relative z-10">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-8">

              <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-md px-4 py-1 rounded-full text-accent-blue text-[10px] font-black uppercase tracking-[0.2em] mb-8 border border-accent/30">

                PeopleCert Certified · Entry Level

              </div>

              <h1 className="text-5xl md:text-8xl font-black font-display mb-10 tracking-tighter leading-none uppercase">

                ITIL <br />

                <span className="text-accent underline decoration-white/10 underline-offset-[12px] italic">Foundation</span> <br />

                <span className="text-white/40 block text-2xl tracking-[6px] mt-4 font-body">(Version 5)</span>

              </h1>

              <p className="text-xl text-blue-100/70 max-w-2xl mb-12 leading-relaxed">

                Build a strong foundation in digital product and service management. Master core concepts for today's complex, AI-enabled environments.

              </p>

              <div className="flex flex-wrap gap-4">

                {["🏆 Industry Standard", "🎓 Entry Point", "🇬🇧 English"].map((item, i) => (

                  <span key={i} className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-2xl text-[11px] font-bold uppercase tracking-widest text-blue-100 hover:bg-accent/10 transition-colors cursor-default">

                    <span className="w-2 h-2 bg-accent rounded-full"></span>

                    {item}

                  </span>

                ))}

              </div>

            </div>

            

            <div className="lg:col-span-4 flex justify-center lg:justify-end">

               <div className="relative group p-6">

                  <div className="absolute inset-0 bg-accent rounded-full blur-[90px] opacity-20 animate-pulse"></div>

                  <img 

                    src={logo} 

                    alt="ITIL V5 Foundation Logo" 

                    className="relative w-80 h-80 object-contain transition-transform group-hover:scale-105 duration-700"

                  />

               </div>

            </div>

          </div>

        </div>

      </header>



      {/* Strategic Value Propositions */}

      <section className="bg-white dark:bg-surface-dark py-16 border-b border-gray-100 dark:border-white/5">

         <div className="container mx-auto px-6">

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center uppercase tracking-tighter">

               {[

                 { t: "Global Recognition", d: "Showcase your ability to manage digital services in fast-moving environments." },

                 { t: "Employer Choice", d: "Certify your expertise and make yourself the preferred choice for top organizations." },

                 { t: "Career Unlock", d: "Equip yourself with in-demand skills to accelerate your growth and qualify for premium roles." }

               ].map((v, i) => (

                 <div key={i} className="flex flex-col items-center">

                    <div className="h-0.5 w-12 bg-accent mb-6"></div>

                    <h3 className="font-display font-black text-base mb-3 text-primary dark:text-white uppercase tracking-widest">{v.t}</h3>

                    <p className="text-gray-500 dark:text-gray-400 text-[15px] leading-relaxed lowercase font-medium tracking-normal">{v.d}</p>

                 </div>

               ))}

            </div>

         </div>

      </section>



      {/* At a Glance — violet+blue blend */}
      <section className="py-20" style={{background: "linear-gradient(135deg, #030d1a 0%, #080f2e 50%, #150833 100%)"}}>
        <div className="container mx-auto px-6">
           <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

              {[
                { icon: "rocket_launch", lab: "Entry point", val: "Into ITIL" },
                { icon: "diversity_3", lab: "Suitable for", val: "Any career stage" },
                { icon: "verified", lab: "Globally recognized", val: "Market standard" },
                { icon: "translate", lab: "Language", val: "English" }
              ].map((item, i) => (
                <div key={i} className="relative bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 flex flex-col items-center text-center group hover:border-accent/60 hover:shadow-[0_0_28px_rgba(77,163,255,0.25)] hover:scale-[1.04] transition-all duration-300 overflow-hidden">
                   {/* Diagonal shimmer sweep */}
                   <div className="absolute inset-0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/20 to-transparent z-0 pointer-events-none" />
                   <div className="relative z-10 flex flex-col items-center">
                     <div className="w-11 h-11 rounded-lg bg-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                       <span className="material-icons-outlined text-3xl text-accent group-hover:text-white transition-colors">{item.icon}</span>
                     </div>
                     <p className="text-xs font-black text-blue-300/60 uppercase tracking-widest mb-1">{item.lab}</p>
                     <p className="text-base font-black uppercase text-white leading-tight">{item.val}</p>
                   </div>
                </div>
              ))}


           </div>

        </div>
      </section>

      {/* Master Curriculum — white */}
      <section className="py-20 bg-white dark:bg-[#07101f]">
        <div className="container mx-auto px-6">
           <div className="flex flex-col md:flex-row items-baseline gap-4 mb-20">

              <h2 className="text-4xl md:text-5xl font-black font-display tracking-tighter uppercase">Master the <span className="text-accent underline decoration-accent/10 underline-offset-[12px] italic">Framework</span></h2>

              <div className="h-0.5 flex-grow bg-gray-100 dark:bg-white/5"></div>

           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

              {LEARN_POINTS.map((lp, i) => (

                <div key={i} className="relative p-6 bg-white dark:bg-[#0a1628] rounded-xl border border-gray-200 dark:border-white/10 hover:border-accent hover:shadow-md group transition-all duration-300 overflow-hidden">
                   {/* Dark wipe — left to right */}
                   <div className="absolute inset-0 bg-[#071B34] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-0" />
                   <div className="relative z-10">
                     <div className="flex items-center gap-3 mb-4">
                       <span className="text-3xl">{lp.icon}</span>
                       <span className="text-xs font-black text-gray-400 group-hover:text-blue-300/60 uppercase tracking-widest transition-colors duration-300">{String(i + 1).padStart(2, '0')}</span>
                     </div>
                     <h3 className="text-base font-black font-display mb-3 tracking-wide uppercase leading-tight text-primary dark:text-white group-hover:text-white transition-colors duration-300">{lp.title}</h3>
                     <p className="text-[15px] text-gray-500 dark:text-gray-400 group-hover:text-blue-100/60 leading-relaxed transition-colors duration-300">{lp.desc}</p>
                   </div>
                </div>

              ))}

           </div>

        </div>
      </section>

      {/* Professional Impact — violet+blue blend */}
      <section className="py-20" style={{background: "linear-gradient(135deg, #030d1a 0%, #080f2e 50%, #150833 100%)"}}>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
           <div className="lg:col-span-8 bg-[#0d1b2a] p-10 rounded-2xl text-white relative overflow-hidden group shadow-xl border border-white/5">

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

              <h3 className="text-[15px] font-black text-accent-blue uppercase tracking-[6px] mb-16 relative z-10">Strategic Mindsets Acquired</h3>

              <div className="space-y-12 relative z-10">

                 {SKILLS.map((skill, i) => (

                   <div key={i} className="flex gap-10 group/item">

                      <div className="w-16 h-16 bg-white/5 rounded-3xl flex items-center justify-center text-accent group-hover/item:bg-white group-hover/item:text-primary transition-all shadow-xl font-display font-black text-3xl italic">{i+1}</div>

                      <div>

                         <h4 className="font-display font-black text-3xl mb-3 tracking-tight group-hover/item:text-accent transition-colors">{skill.title}</h4>

                         <p className="text-blue-100/40 text-base leading-relaxed max-w-lg font-light">{skill.desc}</p>

                      </div>

                   </div>

                 ))}

              </div>

           </div>

           

            <div className="lg:col-span-4 bg-white/5 backdrop-blur-sm p-10 rounded-2xl border border-white/10 flex flex-col items-center">

              <h3 className="font-display font-black text-2xl uppercase tracking-tighter mb-12 text-center italic text-white">Future Roles</h3>

              <div className="flex flex-wrap gap-2.5 justify-center">

                 {CAREER_TAGS.map((tag, i) => (

                   <span key={i} className="px-5 py-3.5 bg-white/10 rounded-2xl text-[9px] font-black uppercase tracking-widest text-white/70 hover:bg-accent hover:text-white transition-all cursor-default border border-white/10">

                     {tag}

                   </span>

                 ))}

              </div>

           </div>

          </div>
        </div>
      </section>

      {/* Exam Metrics — white */}
      <section className="py-20 bg-white dark:bg-[#07101f]">
        <div className="container mx-auto px-6">
           <div className="bg-[#f8fafc] dark:bg-white/5 rounded-[80px] p-24 shadow-inner relative overflow-hidden text-center group">

              <div className="absolute top-0 right-0 p-12 opacity-40 group-hover:opacity-100 transition-opacity">

                 <div className="bg-red-500/10 text-red-500 px-6 py-3 rounded-full text-xs font-black uppercase tracking-[4px] border border-red-500/20">

                    🔴 Closed Book Exam

                 </div>

              </div>

              

              <div className="mb-20">

                 <h2 className="text-4xl font-black font-display uppercase tracking-tight mb-4 leading-none">Exam <span className="text-accent underline decoration-accent/10 underline-offset-[14px]">Metrics</span></h2>

                 <p className="text-gray-400 text-xs font-bold uppercase tracking-[6px]">PeopleCert Official Assessment</p>

              </div>

              

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-16 max-w-5xl mx-auto mb-20 relative">

                {[

                  { icon: "psychology", val: "40", lab: "Questions" },

                  { icon: "fact_check", val: "MCQ", lab: "Format" },

                  { icon: "timer", val: "60m", lab: "Duration" },

                  { icon: "military_tech", val: "65%", lab: "Pass Mark", hit: true }

                ].map((item, i) => (

                  <div key={i} className="flex flex-col items-center relative z-10">

                     <span className={`material-icons text-4xl mb-6 ${item.hit ? 'text-accent' : 'text-gray-200 dark:text-white/5'}`}>{item.icon}</span>

                     <p className={`font-display font-black text-4xl mb-2 ${item.hit ? 'text-accent' : 'text-primary dark:text-white'}`}>{item.val}</p>

                     <p className="text-[15px] font-black text-gray-400 uppercase tracking-widest">{item.lab}</p>

                  </div>

                ))}

              </div>

              

              <div className="pt-10 border-t border-gray-200 dark:border-white/10 max-w-xl mx-auto">

                 <p className="text-xs font-black text-gray-400 uppercase tracking-widest opacity-60">Verified Foundation Certification Program</p>

              </div>

           </div>

        </div>
      </section>

      {/* Global Enrollment Footer */}

      <footer className="container mx-auto px-6 pb-20">

         <div className="bg-accent rounded-[100px] p-24 text-center shadow-2xl relative overflow-hidden group">

            <div className="absolute inset-0 bg-[#0d1b2a] opacity-0 group-hover:opacity-10 transition-opacity duration-1000"></div>

            <div className="relative z-10">

               <h2 className="text-6xl md:text-9xl font-black font-display text-white mb-12 tracking-tighter uppercase leading-[0.8] italic">Launch Your <br/> <span className="text-primary not-italic">Journey</span></h2>

               <p className="text-white/80 mb-16 max-w-xl mx-auto text-3xl font-medium leading-relaxed">Join Peer's world-leading Foundation program and master the modern standard of service excellence.</p>

               <Link to="/contact" className="inline-block bg-primary hover:bg-white hover:!text-primary text-white font-black py-9 px-24 rounded-[40px] transition-all shadow-xl active:scale-95 text-[18px] uppercase tracking-[8px] ring-[24px] ring-white/5">

                  Enroll Today

               </Link>

            </div>

         </div>

      </footer>

    </div>

  );

}

