import React from 'react';

import { Link } from 'react-router-dom';



const PRACTICES = [

  { name: "Incident Management", icon: "🚨" },

  { name: "Service Desk", icon: "🖥️" },

  { name: "Service Request Management", icon: "📋" },

  { name: "Monitoring & Event Management", icon: "📡" },

  { name: "Problem Management", icon: "🔍" }

];



const LEARN_POINTS = [

  { icon: "🖥️", title: "Key concepts", desc: "Understand the purpose and key concepts of the Monitor, Support, and Fulfil practices in maintaining IT services." },

  { icon: "📊", title: "Success factors", desc: "Learn about practice success factors (PSF) and key practice metrics essential for service excellence." },

  { icon: "🔄", title: "Practice processes", desc: "Explore processes and learn how to integrate them into your organization's value stream." },

  { icon: "👥", title: "Roles and competencies", desc: "Focus on key roles within the MSF practices and develop necessary competencies for service monitoring." },

  { icon: "💡", title: "Information & Tech", desc: "See how technology can enable the MSF practices to deliver improvements and effective operations." },

  { icon: "🤝", title: "Partners & Suppliers", desc: "Explore the role of partners in the MSF practices and how to collaborate effectively." },

  { icon: "🏗️", title: "Capability Model", desc: "Discover how the capability criteria support the practices' capability development and alignment." },

  { icon: "🎯", title: "Practice Success", desc: "Learn strategies for succeeding with the MSF practices supported by ITIL guiding principles." }

];



const SKILLS = [

  { title: "Strategy Implementation", desc: "Understand how to formulate strategic goals and allocate resources into tactical plans." },

  { title: "Customer Service Excellence", desc: "Identify customer expectations and deliver desired value through software and portals." },

  { title: "Advanced Problem Solving", desc: "Learn to reduce incident impact by identifying causes and managing workarounds." }

];



const CAREER_TAGS = [

  "Incident Manager", "Problem Manager", "Service Desk Manager", "Support Engineer",

  "IT Operations Specialist", "Service Delivery Manager", "Customer Success Manager", "Improvement Manager"

];



export default function Itil4SpecialistMsf() {

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

              <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-md px-4 py-1.5 rounded-full text-accent-blue text-[10px] font-black uppercase tracking-[0.2em] mb-8 border border-white/10">

                PeopleCert Certified · Practice Manager

              </div>

              <h1 className="text-4xl md:text-7xl font-black font-display mb-6 tracking-tight leading-none uppercase">

                <span className="block text-xl text-white/50 tracking-[4px] mb-4 font-body lowercase italic">Monitor, Support & Fulfil</span>

                ITIL® Practice <br />

                <span className="text-accent underline decoration-white/10 underline-offset-8 italic">Manager</span>

              </h1>

              <p className="text-xl text-blue-100/70 max-w-2xl mb-12 leading-relaxed">

                A combined module covering the keys to operational excellence across five essential ITIL practices.

              </p>

              

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">

                 {PRACTICES.map((p, i) => (

                   <div key={i} className="flex items-center gap-3 bg-white/5 border border-white/10 p-4 rounded-2xl group hover:border-accent group-hover:bg-white/10 transition-all">

                      <span className="text-xl group-hover:scale-125 transition-transform">{p.icon}</span>

                      <span className="text-[11px] font-black uppercase tracking-widest text-blue-100">{p.name}</span>

                   </div>

                 ))}

              </div>



              <div className="flex flex-wrap gap-3">

                {["🏆 Industry-recognised", "⚙️ Practice-based", "🗣️ Multi-language"].map((pill, i) => (

                  <span key={i} className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black uppercase tracking-widest text-[#90caf9]">

                    {pill}

                  </span>

                ))}

              </div>

            </div>

            

            <div className="lg:col-span-4 flex justify-center lg:justify-end">

               <div className="relative group p-6">

                  <div className="absolute inset-0 bg-accent rounded-full blur-[100px] opacity-10 animate-pulse"></div>

                  <div className="relative w-64 h-64 bg-gradient-to-br from-[#1e3450] to-[#071B34] rounded-full border border-white/10 shadow-2xl flex flex-col items-center justify-center p-8 text-center ring-4 ring-white/5">

                     <span className="font-display font-black text-2xl text-white tracking-[2px]">ITIL®</span>

                     <span className="text-[10px] font-black uppercase tracking-[2px] text-white/40 mt-1">Practice Manager</span>

                     <div className="w-10 h-0.5 bg-accent my-4"></div>

                     <span className="text-[12px] font-bold text-white uppercase leading-tight italic">Monitor, Support<br/>& Fulfil</span>

                     <div className="mt-6 px-5 py-2 bg-accent text-[9.5px] font-black uppercase tracking-[2px] text-white rounded shadow-2xl">Certified</div>

                  </div>

               </div>

            </div>

          </div>

        </div>

      </header>



      {/* Strategic Value Strip */}

      <section className="bg-white dark:bg-surface-dark py-16 border-b border-gray-100 dark:border-white/5">

         <div className="container mx-auto px-6">

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">

               {[

                 { t: "Industry Standard", d: "Showcase your ability to excel in essential IT service management tasks." },

                 { t: "Employers' Choice", d: "Certify your expertise making you the preferred choice for support roles." },

                 { t: "Growth Path", d: "Advance your career in IT with credentials recognized by the global tech core." }

               ].map((v, i) => (

                 <div key={i} className="group">

                    <div className="inline-block p-4 bg-[#f8fafc] dark:bg-white/5 rounded-2xl mb-6 group-hover:bg-accent group-hover:text-white transition-all shadow-sm">

                       <span className="material-icons-outlined">verified</span>

                    </div>

                    <h3 className="font-display font-black text-sm uppercase tracking-widest mb-3">{v.t}</h3>

                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{v.d}</p>

                 </div>

               ))}

            </div>

         </div>

      </section>



      <main className="container mx-auto px-6 py-24">

        {/* At a Glance */}

        <section className="mb-32">

           <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">

              {[

                { icon: "groups", label: "For", val: "All IT Pros" },

                { icon: "trending_up", label: "Benefit", val: "Operational Perf" },

                { icon: "settings", label: "Module", val: "Practice-based" },

                { icon: "translate", label: "Exams", val: "9 Languages" },

                { icon: "laptop_mac", label: "Mode", val: "Flexible e-Learning" }

              ].map((item, i) => (

                <div key={i} className="bg-white dark:bg-surface-dark p-8 rounded-[40px] shadow-subtle border border-gray-100 dark:border-white/5 text-center group hover:bg-primary transition-all duration-300">

                   <span className="material-icons-outlined text-accent mb-4 group-hover:text-white transition-colors">{item.icon}</span>

                   <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1 group-hover:text-white/40">{item.label}</p>

                   <p className="text-xs font-black uppercase group-hover:text-white leading-tight">{item.val}</p>

                </div>

              ))}

           </div>

        </section>



        {/* Learning Matrix */}

        <section className="mb-32">

           <div className="flex flex-col md:flex-row items-baseline gap-6 mb-20 px-4">

              <h2 className="text-4xl md:text-5xl font-black font-display tracking-tighter uppercase italic">Curriculum <span className="text-accent underline decoration-accent/10 underline-offset-[16px] not-italic">Matrix</span></h2>

              <div className="h-0.5 flex-grow bg-gradient-to-r from-gray-200 to-transparent dark:from-white/5"></div>

           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

              {LEARN_POINTS.map((lp, i) => (

                <div key={i} className="p-10 bg-white dark:bg-surface-dark rounded-[50px] shadow-subtle border border-gray-100 dark:border-white/5 hover:scale-105 transition-all">

                   <div className="text-3xl mb-8">{lp.icon}</div>

                   <h3 className="text-sm font-black font-display mb-4 tracking-widest uppercase leading-tight text-[#071B34] dark:text-white">{lp.title}</h3>

                   <p className="text-[13px] text-gray-500 dark:text-gray-400 leading-relaxed font-medium">{lp.desc}</p>

                </div>

              ))}

           </div>

        </section>



        {/* Capabilities & Roles */}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-32 items-stretch px-4">

           <div className="lg:col-span-7 bg-[#071B34] p-16 rounded-[70px] text-white shadow-2xl relative overflow-hidden group">

              <div className="absolute top-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-[120px]"></div>

              <h3 className="text-[11px] font-black text-accent-blue uppercase tracking-[6px] mb-16 relative z-10">Advanced Capabilities</h3>

              <div className="space-y-16 relative z-10">

                 {SKILLS.map((skill, i) => (

                   <div key={i} className="flex gap-10 group/item">

                      <div className="flex-shrink-0 w-16 h-16 bg-white/5 border border-white/10 rounded-[30px] flex items-center justify-center group-hover/item:bg-accent group-hover/item:border-accent transition-all duration-700">

                         <span className="material-icons-outlined text-accent group-hover/item:text-white">stars</span>

                      </div>

                      <div>

                         <h4 className="font-display font-black text-xl mb-4 tracking-tight uppercase leading-none">{skill.title}</h4>

                         <p className="text-blue-100/40 text-[14px] leading-relaxed max-w-sm">{skill.desc}</p>

                      </div>

                   </div>

                 ))}

              </div>

           </div>



           <div className="lg:col-span-5 bg-white dark:bg-surface-dark p-12 rounded-[70px] border border-gray-100 dark:border-white/5 flex flex-col items-center">

              <h3 className="font-display font-black text-2xl uppercase tracking-tighter mb-12 text-center text-primary dark:text-white">MSF Career Paths</h3>

              <div className="grid grid-cols-1 gap-3 w-full">

                 {CAREER_TAGS.map((tag, i) => (

                   <div key={i} className="flex items-center justify-between p-5 bg-[#f8fafc] dark:bg-white/5 rounded-3xl border border-transparent hover:border-accent hover:bg-white dark:hover:bg-primary transition-all cursor-default shadow-sm group/tag">

                      <span className="text-[10px] font-black uppercase tracking-widest text-gray-500 group-hover/tag:text-primary dark:group-hover/tag:text-white">{tag}</span>

                      <span className="material-icons text-accent text-sm group-hover/tag:rotate-45 transition-transform">arrow_outward</span>

                   </div>

                 ))}

              </div>

           </div>

        </div>



        {/* Examination Dashboard */}

        <section className="mb-12">

           <div className="bg-[#f8fafc] dark:bg-white/5 rounded-[80px] p-24 shadow-inner relative overflow-hidden group border border-gray-100 dark:border-white/5">

              <div className="absolute right-12 top-12 opacity-40 hover:opacity-100 transition-opacity">

                 <div className="bg-[#071B34] text-white px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[5px] shadow-2xl">

                    PeopleCert Official

                 </div>

              </div>

              <div className="text-center mb-20 max-w-2xl mx-auto">

                 <h2 className="text-3xl md:text-5xl font-black font-display mb-6 uppercase tracking-tighter italic">Exam <span className="text-accent underline decoration-accent/10 underline-offset-[16px] not-italic">Essentials</span></h2>

                 <p className="text-gray-400 text-[10px] font-bold uppercase tracking-[8px] leading-relaxed">Closed book examination · No reference materials permitted</p>

              </div>

              

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 max-w-5xl mx-auto mb-16 px-4">

                {[

                  { icon: "quiz", val: "60", lab: "Questions" },

                  { icon: "checklist", val: "MCQ", lab: "Format" },

                  { icon: "schedule", val: "90m", lab: "Duration" },

                  { icon: "verified", val: "65%", lab: "Pass Mark", hit: true }

                ].map((item, i) => (

                  <div key={i} className="flex flex-col items-center">

                     <span className={`material-icons text-5xl mb-6 transition-transform group-hover:scale-110 ${item.hit ? 'text-accent' : 'text-gray-200 dark:text-white/5'}`}>{item.icon}</span>

                     <p className={`font-display font-black text-4xl mb-2 ${item.hit ? 'text-accent' : 'text-primary dark:text-white'}`}>{item.val}</p>

                     <p className="text-[11px] font-black text-gray-400 uppercase tracking-widest">{item.lab}</p>

                  </div>

                ))}

              </div>

              

              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest opacity-60">Verified Practice Manager Assessment</p>

           </div>

        </section>

      </main>



      {/* CTA Footer */}

      <footer className="container mx-auto px-6 pb-20">

         <div className="bg-accent rounded-[100px] p-24 text-center shadow-2xl relative overflow-hidden group">

            <div className="absolute inset-0 bg-[#071B34] opacity-0 group-hover:opacity-10 transition-opacity duration-1000"></div>

            <div className="relative z-10">

               <h2 className="text-7xl md:text-9xl font-black font-display text-white mb-12 tracking-tighter uppercase leading-[0.8] italic">Support the <br/> <span className="text-primary not-italic">Future</span></h2>

               <p className="text-white/80 mb-16 max-w-xl mx-auto text-xl font-medium leading-relaxed italic pr-6 border-r-4 border-white/20">Master the practices that keep the world's most complex digital environments running at peak performance.</p>

               <Link to="/contact" className="inline-block bg-primary hover:bg-white hover:!text-primary text-white font-black py-9 px-24 rounded-[45px] transition-all shadow-xl active:scale-95 text-[18px] uppercase tracking-[8px] ring-[24px] ring-white/5">

                  Book Seat

               </Link>

            </div>

         </div>

      </footer>

    </div>

  );

}

