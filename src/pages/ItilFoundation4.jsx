import React from 'react';

import { Link } from 'react-router-dom';

import logo from '../assets/logos/itil-4-foundation.png';



const LEARN_POINTS = [

  { icon: "💡", title: "Service management concepts", desc: "Learn the fundamental concepts of service management, what defines a service, and its value to stakeholders." },

  { icon: "⛓️", title: "Service value system", desc: "Discover the framework that helps you create, deliver, and manage services, including the Service Value Chain." },

  { icon: "🔳", title: "Four dimensions", desc: "Explore the four dimensions of effective service management: people, information, partners, and value streams." },

  { icon: "🧭", title: "Guiding principles", desc: "Develop a mindset for adopting ITIL practices with the seven guiding principles of ITIL 4." },

  { icon: "⛓️‍💥", title: "Service Value Chain", desc: "Understand how the Service Value Chain helps organisations create value by optimising their activities." },

  { icon: "📦", title: "ITIL practices", desc: "Employ ITIL 4 practices to enable working methods aligned to your business strategy and improving service development." },

  { icon: "🔄", title: "Continuous improvement", desc: "Focus on the central ITIL 4 concept of continuous improvement, and the ways in which organisations can adapt." },

  { icon: "📜", title: "Service Level Agreements", desc: "Study the role of SLAs in defining and managing service quality and service level management." },

  { icon: "📊", title: "Metrics & KPIs", desc: "Grasp the importance of defining and tracking metrics and KPIs to measure performance and effectiveness." }

];



const SKILLS = [

  { title: "Service Optimization", desc: "Learn to identify and optimize service activities to deliver maximum value to the business." },

  { title: "Strategic Alignment", desc: "Align IT services with organizational goals using the ITIL 4 framework." },

  { title: "Process Improvement", desc: "Master the methods for continuous improvement across all service management activities." }

];



const CAREER_TAGS = [

  "IT Service Manager", "Service Desk Manager", "IT Operations Lead", "Service Delivery Specialist",

  "Process Owner", "IT Project Coordinator", "Technical Support Manager", "Change Coordinator"

];



export default function ItilFoundation4() {

  return (

    <div className="bg-[#f8fafc] dark:bg-background-dark min-h-screen font-body text-primary dark:text-white">

      {/* Hero Section */}

      <header className="relative bg-gradient-to-br from-[#030d1a] via-[#080f2e] to-[#150833] text-white py-24 overflow-hidden border-b border-white/5">

        {/* Premium hero decoration — corner light leaks + scan lines */}

        <div className="absolute inset-0 pointer-events-none" style={{background: "radial-gradient(ellipse 65% 55% at 100% 0%, rgba(124,58,237,0.20) 0%, transparent 70%)"}} />

        <div className="absolute inset-0 pointer-events-none" style={{background: "radial-gradient(ellipse 50% 45% at 0% 100%, rgba(37,99,235,0.14) 0%, transparent 70%)"}} />

        <div className="container mx-auto px-6 relative z-10">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-12 items-center">

            <div className="lg:col-span-8">

              <div className="inline-flex items-center gap-2 bg-[#004b87]/30 backdrop-blur-md px-5 py-1.5 rounded-full text-blue-200 text-[11px] font-black uppercase tracking-[0.25em] mb-8 border border-white/10">

                Official Certification · Classic

              </div>

              <h1 className="text-[26px] sm:text-4xl md:text-8xl font-black font-display mb-10 tracking-tight leading-none uppercase">

                ITIL® 4 <br />

                <span className="text-accent underline decoration-white/10 underline-offset-[12px] italic">Foundation</span>

              </h1>

              <p className="text-xl text-blue-100/70 max-w-2xl mb-12 leading-relaxed">

                Advance your career with the proven, globally recognized ITIL 4 framework. The essential building block for every IT service management professional.

              </p>

              <div className="flex flex-wrap gap-4">

                {["🏢 Enterprise Choice", "📈 Performance Focused", "🌐 World Class"].map((pill, i) => (

                  <span key={i} className="px-6 py-3 bg-white/5 border border-white/10 rounded-2xl text-[11px] font-black uppercase tracking-widest text-[#90caf9] hover:bg-white/10 transition-all cursor-default">

                    {pill}

                  </span>

                ))}

              </div>

            </div>

            

            <div className="lg:col-span-4 flex justify-center lg:justify-end">

               <div className="relative group p-6">

                  <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-[100px] animate-pulse"></div>

                  <img 

                    src={logo} 

                    alt="ITIL 4 Foundation Logo" 

                    className="relative w-72 h-72 object-contain transition-transform group-hover:scale-110 duration-1000"

                  />

               </div>

            </div>

          </div>

        </div>

      </header>



      {/* Value Proposition */}

      <section className="bg-white dark:bg-surface-dark py-20 border-b border-gray-100 dark:border-white/5">

        <div className="container mx-auto px-6">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-16">

            {[

              { title: "Proven Standard", desc: "Gain the certification that remains the worldwide benchmark for IT service management excellence." },

              { title: "Immediate Impact", desc: "Apply practical methodologies to your current workflows to improve service quality immediately." },

              { title: "Career Foundation", desc: "Unlock higher-level ITIL 4 Specialist modules and leadership paths across any industry." }

            ].map((item, i) => (

              <div key={i} className="flex flex-col">

                <span className="text-accent font-display font-black text-3xl md:text-4xl mb-6 opacity-20 italic">0{i+1}</span>

                <h3 className="font-display font-black text-lg uppercase tracking-tight mb-4">{item.title}</h3>

                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{item.desc}</p>

              </div>

            ))}

          </div>

        </div>

      </section>



      <main className="container mx-auto px-6 py-24">

        {/* At a Glance Box */}

        <section className="mb-32">

           <div className="bg-[#f0f4f8] dark:bg-white/5 rounded-2xl p-2 flex flex-wrap lg:flex-nowrap gap-2">

              {[

                { icon: "dashboard", label: "Module Type", value: "Foundation" },

                { icon: "group", label: "Experience", value: "Any level" },

                { icon: "public", label: "Recognition", value: "International" },

                { icon: "description", label: "Assessment", value: "Exam voucher incl." }

              ].map((item, i) => (

                <div key={i} className="flex-1 min-w-[240px] bg-white dark:bg-surface-dark p-10 rounded-[55px] border border-gray-100 dark:border-white/5 group hover:shadow-2xl hover:-translate-y-2 transition-all flex flex-col h-full">

                   <div className="w-14 h-14 bg-[#f8fafc] dark:bg-white/5 rounded-2xl flex items-center justify-center text-blue-500 mb-6 group-hover:bg-blue-500 group-hover:text-white transition-all shadow-sm">

                      <span className="material-icons">{item.icon}</span>

                   </div>

                   <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">{item.label}</p>

                   <p className="text-sm font-black text-primary dark:text-white uppercase leading-tight">{item.value}</p>

                </div>

              ))}

           </div>

        </section>



        {/* Learning Path */}

        <section className="mb-32">

           <div className="flex flex-col md:flex-row items-center gap-10 mb-16 px-4">

              <h2 className="text-3xl md:text-4xl font-black font-display tracking-tight uppercase leading-none break-words">Learning <br/> <span className="text-accent underline decoration-accent/10 underline-offset-[8px]">Inventory</span></h2>

              <p className="max-w-md text-gray-500 dark:text-gray-400 text-sm italic">Comprehensive coverage of the ITIL 4 framework from fundamental concepts to operational practices.</p>

           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

              {LEARN_POINTS.map((lp, i) => (

                <div key={i} className="bg-white dark:bg-surface-dark p-10 rounded-[40px] shadow-subtle border border-gray-100 dark:border-white/5 hover:border-[#004b87]/30 group transition-all flex flex-col h-full">

                   <div className="text-2xl mb-8 group-hover:rotate-12 transition-transform duration-500">{lp.icon}</div>

                   <h3 className="text-sm font-black font-display mb-4 tracking-widest uppercase leading-tight text-[#071B34] dark:text-white">{lp.title}</h3>

                   <p className="text-[13px] text-gray-500 dark:text-gray-400 leading-relaxed font-medium">{lp.desc}</p>

                </div>

              ))}

           </div>

        </section>



        {/* Skillset Section */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-32 items-stretch">

           <div className="bg-[#071B34] p-6 md:p-16 rounded-2xl text-white shadow-2xl relative overflow-hidden group">

              <div className="relative sm:absolute sm:top-0 sm:right-0 flex justify-center mt-4 sm:mt-0 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px]"></div>

              <h3 className="text-[10px] font-black text-[#90caf9] uppercase tracking-[4px] mb-12">Capabilites Built</h3>

              <div className="space-y-12">

                 {SKILLS.map((skill, i) => (

                   <div key={i} className="flex gap-8 group/item">

                      <div className="flex-shrink-0 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover/item:border-white group-hover/item:bg-white group-hover/item:text-primary transition-all duration-500">

                         <span className="material-icons text-xl">trending_up</span>

                      </div>

                      <div>

                         <h4 className="font-display font-black text-xl mb-3 uppercase italic tracking-tight">{skill.title}</h4>

                         <p className="text-blue-100/40 text-[13px] leading-relaxed max-w-sm">{skill.desc}</p>

                      </div>

                   </div>

                 ))}

              </div>

           </div>



           <div className="bg-white dark:bg-surface-dark p-6 md:p-16 rounded-2xl border border-gray-100 dark:border-white/5 flex flex-col items-center justify-center">

              <h3 className="font-display font-black text-2xl uppercase tracking-tighter mb-10 text-center">Unlocks <br/> Opportunities</h3>

              <div className="flex flex-wrap gap-2.5 justify-center">

                 {CAREER_TAGS.map((tag, i) => (

                   <span key={i} className="px-5 py-3 bg-[#f8fafc] dark:bg-white/5 rounded-xl text-[10px] font-black uppercase tracking-widest text-[#004b87] dark:text-white border border-transparent hover:border-[#004b87] transition-all cursor-default shadow-sm">

                     {tag}

                   </span>

                 ))}

              </div>

           </div>

        </div>



        {/* Exam Section */}

        <section className="mb-12">

           <div className="bg-white dark:bg-surface-dark rounded-[70px] p-6 md:p-20 shadow-subtle border border-gray-100 dark:border-white/5 relative overflow-hidden text-center group">

              <div className="inline-block px-8 py-3 bg-red-500/5 text-red-500 border border-red-500/10 rounded-full text-[10px] font-black uppercase tracking-[3px] mb-16 mix-blend-multiply dark:mix-blend-normal">

                 Assessment Protocol: Closed Book

              </div>

              

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12 max-w-5xl mx-auto mb-20">

                {[

                  { icon: "quiz", val: "40", lab: "Questions" },

                  { icon: "view_headline", val: "MCQ", lab: "Format" },

                  { icon: "hourglass_empty", val: "60m", lab: "Duration" },

                  { icon: "stars", val: "65%", lab: "Pass Mark", hit: true }

                ].map((item, i) => (

                  <div key={i} className="flex flex-col items-center">

                     <span className={`material-icons text-5xl mb-6 transition-transform group-hover:scale-110 ${item.hit ? 'text-[#004b87]' : 'text-gray-100 dark:text-white/5'}`}>{item.icon}</span>

                     <p className={`font-display font-black text-3xl md:text-4xl mb-2 ${item.hit ? 'text-[#004b87]' : 'text-primary dark:text-white'}`}>{item.val}</p>

                     <p className="text-[11px] font-black text-gray-400 uppercase tracking-widest font-body">{item.lab}</p>

                  </div>

                ))}

              </div>

              

              <div className="max-w-2xl mx-auto pt-10 border-t border-gray-100 dark:border-white/10 italic">

                 <p className="text-[11px] font-medium text-gray-400">Exam taken via online proctoring at your convenience. Voucher included in course package.</p>

              </div>

           </div>

        </section>

      </main>



      {/* CTA Footer */}

      <footer className="container mx-auto px-6 pb-20">

         <div className="bg-[#004b87] rounded-2xl p-8 md:p-24 text-center shadow-2xl relative overflow-hidden group">

            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-primary/30 to-transparent"></div>

            <div className="relative z-10">

               <h2 className="text-[26px] sm:text-4xl md:text-9xl font-black font-display text-white mb-10 tracking-tighter uppercase leading-[0.8] break-words italic">Certification <br/> <span className="text-blue-100 not-italic">Starting Point</span></h2>

               <p className="text-blue-100/50 mb-16 max-w-xl mx-auto text-xl font-medium leading-relaxed">Join Peer's flagship ITIL 4 Foundation program and gain the credentials recognized by employers worldwide.</p>

               <Link to="/contact" className="inline-block bg-white hover:bg-accent hover:text-white text-primary font-black py-8 px-6 md:px-24 rounded-[35px] transition-all shadow-xl active:scale-95 text-[18px] uppercase tracking-widest md:tracking-[6px] ring-12 ring-white/10">

                  Book Course

               </Link>

            </div>

         </div>

      </footer>

    </div>

  );

}

