import React from 'react';

import { Link } from 'react-router-dom';



const PRACTICES = [

  "Change Enablement", "Deployment Management", "Release Management",

  "Service Configuration Management", "IT Asset Management"

];



const LEARN_POINTS = [

  { icon: "🖥️", title: "Key concepts", desc: "Understand the purpose and key concepts of PIC practices, highlighting their importance in execution and governance." },

  { icon: "📊", title: "Practice success factors", desc: "Learn about PSF and key metrics essential for evaluating effectiveness and maturity in achieving objectives." },

  { icon: "🔄", title: "Practice processes", desc: "Explore processes and learn how to integrate them into your value stream to ensure coherent planning and control." },

  { icon: "👥", title: "Roles and competencies", desc: "Focus on key roles and develop the necessary competencies for planning, executing, and controlling IT service strategies." },

  { icon: "💡", title: "Information and technology", desc: "See how Information and Technology can support practices to deliver improvements and system governance." },

  { icon: "🤝", title: "Partners and suppliers", desc: "Explore the role of partners and suppliers and understand how to collaborate effectively to enhance strategy execution." },

  { icon: "🏗️", title: "The ITIL Capability model", desc: "Discover how capability criteria support development, ensuring alignment with industry best practices." },

  { icon: "🎯", title: "Practice success", desc: "Learn strategies for success and understand how they are supported by the ITIL guiding principles." }

];



const SKILLS = [

  { title: "Strategy", desc: "Understand how to formulate strategic goals and adopt courses of action and allocation of resources into tactical plans." },

  { title: "Governance", desc: "Understand how organisational governance evaluates, directs and monitors service management activities." },

  { title: "Relationship management", desc: "Learn to establish, analyze, monitor, and improve links between the organization and its stakeholders." }

];



const CAREER_TAGS = [

  "IT Specialist: Operations", "IT Manager: Operations", "IT Service Manager", "Change Manager",

  "Release Manager", "IT Asset Manager", "Service Configuration Manager", "Deployment Manager"

];



export default function ItilPmPic() {

  return (

    <div className="bg-[#f8fafc] dark:bg-background-dark min-h-screen font-body">

      {/* Hero Section */}

      <header className="relative bg-gradient-to-br from-[#030d1a] via-[#080f2e] to-[#150833] text-white py-20 overflow-hidden">

        {/* Premium hero decoration — corner light leaks + scan lines */}

        <div className="absolute inset-0 pointer-events-none" style={{background: "radial-gradient(ellipse 65% 55% at 100% 0%, rgba(124,58,237,0.20) 0%, transparent 70%)"}} />

        <div className="absolute inset-0 pointer-events-none" style={{background: "radial-gradient(ellipse 50% 45% at 0% 100%, rgba(37,99,235,0.14) 0%, transparent 70%)"}} />

        <div className="container mx-auto px-6 relative z-10">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-8">

              <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-md px-4 py-1 rounded-full text-accent-blue text-[10px] font-black uppercase tracking-[0.2em] mb-6 border border-accent/30">

                PeopleCert Certified · ITIL Practice Manager

              </div>

              <h1 className="text-4xl md:text-5xl font-black font-display mb-2 tracking-tight leading-tight uppercase text-white/90">

                <span className="text-accent underline decoration-white/20 underline-offset-8 block text-lg tracking-[4px] mb-4 uppercase not-italic">Practice Manager</span>

                Plan, Implement, <br /> & Control

              </h1>

              <p className="text-lg text-blue-100/70 max-w-2xl mb-8 leading-relaxed">

                Master the 5 ITIL practices for effective strategic execution: Change, Deployment, Release, Configuration, and Asset Management.

              </p>

              

              <div className="flex flex-wrap gap-2 mb-10">

                {PRACTICES.map((p, i) => (

                  <span key={i} className="bg-white/5 border border-white/10 px-3 py-2 rounded-lg text-[9px] font-black uppercase tracking-wider text-accent-blue shadow-sm">

                    {p}

                  </span>

                ))}

              </div>



              <div className="flex flex-wrap gap-4">

                <span className="flex items-center gap-2 bg-primary-light/30 px-4 py-2 rounded-xl text-xs font-bold text-blue-200 border border-white/5">

                   <span className="material-icons text-sm">workspace_premium</span>

                   Industry-recognised

                </span>

                <span className="flex items-center gap-2 bg-primary-light/30 px-4 py-2 rounded-xl text-xs font-bold text-blue-200 border border-white/5">

                   <span className="material-icons text-sm">public</span>

                   Globally recognised

                </span>

              </div>

            </div>

            

            <div className="lg:col-span-4 flex justify-center lg:justify-end">

               <div className="relative group cursor-pointer">

                  <div className="absolute -inset-1 bg-gradient-to-r from-accent to-blue-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>

                  <div className="relative w-64 h-64 bg-[#071B34] rounded-full flex flex-col items-center justify-center text-center p-8 border border-white/10 shadow-2xl">

                    <span className="font-display font-black text-2xl text-white tracking-[2px]">ITIL®</span>

                    <span className="text-[10px] font-black uppercase tracking-widest text-accent mt-1 italic">Practice Manager</span>

                    <span className="text-[11px] font-bold text-white/80 mt-2 leading-tight uppercase">Plan, Implement<br/>& Control</span>

                    <div className="mt-4 px-4 py-1.5 bg-accent text-[9px] font-black uppercase tracking-[2px] text-white rounded shadow-lg">Certified</div>

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

             <p className="text-accent font-black uppercase tracking-[4px] text-[10px] mb-2">Module Stats</p>

             <h2 className="text-3xl font-black font-display text-primary dark:text-white tracking-tight uppercase">At a <span className="text-gray-400">Glance</span></h2>

          </div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">

            {[

              { icon: "groups", label: "For", value: "All IT professionals" },

              { icon: "extension", label: "Focus", value: "Strategic execution" },

              { icon: "settings", label: "Module", value: "Practice-based" },

              { icon: "translate", label: "Language", value: "English" },

              { icon: "laptop", label: "Mode", value: "E-learning" }

            ].map((item, i) => (

              <div key={i} className="bg-white dark:bg-surface-dark p-8 rounded-[32px] shadow-subtle border border-gray-100 dark:border-white/5 text-center group hover:bg-primary transition-all duration-500">

                <span className="material-icons text-accent mb-4 text-3xl group-hover:text-white transition-colors">{item.icon}</span>

                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1 group-hover:text-white/40">{item.label}</p>

                <p className="text-sm font-black text-primary dark:text-white group-hover:text-white">{item.value}</p>

              </div>

            ))}

          </div>

        </section>



        {/* Learning Journey */}

        <section className="mb-32">

           <div className="flex flex-col md:flex-row items-baseline gap-6 mb-16">

              <h2 className="text-4xl font-black font-display text-primary dark:text-white tracking-tight uppercase">Learning <span className="text-accent">Journey</span></h2>

              <div className="h-px flex-grow bg-gradient-to-r from-gray-200 to-transparent dark:from-white/10"></div>

           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

             {LEARN_POINTS.map((item, i) => (

               <div key={i} className="relative p-1 bg-gradient-to-b from-gray-100 to-transparent dark:from-white/5 rounded-[40px] hover:from-accent hover:to-accent/50 transition-all duration-500">

                  <div className="bg-white dark:bg-surface-dark p-8 rounded-[39px] h-full flex flex-col group">

                    <div className="text-3xl mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>

                    <h3 className="text-sm font-black font-display text-primary dark:text-white mb-4 uppercase tracking-widest leading-tight">{item.title}</h3>

                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{item.desc}</p>

                  </div>

               </div>

             ))}

           </div>

        </section>



        {/* Skills & Opportunities */}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24">

           {/* Skills */}

           <div className="lg:col-span-7 bg-[#071B34] p-12 rounded-[50px] shadow-2xl relative overflow-hidden group">

              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-accent/20 rounded-full blur-[100px] group-hover:bg-accent/40 transition-all duration-700"></div>

              <h3 className="text-xs font-black uppercase tracking-[4px] text-accent-blue mb-10 relative z-10">Skills Acquired</h3>

              <div className="space-y-12 relative z-10">

                {SKILLS.map((skill, i) => (

                  <div key={i} className="flex gap-8 group/item">

                     <span className="material-icons-outlined text-accent text-3xl group-hover/item:rotate-12 transition-transform">auto_graph</span>

                     <div>

                        <h4 className="font-display font-black text-xl text-white mb-2">{skill.title}</h4>

                        <p className="text-blue-100/50 text-sm leading-relaxed max-w-md">{skill.desc}</p>

                     </div>

                  </div>

                ))}

              </div>

           </div>

           

           {/* Careers */}

           <div className="lg:col-span-5 flex flex-col gap-8">

              <div className="bg-white dark:bg-surface-dark p-10 rounded-[50px] shadow-subtle border border-gray-100 dark:border-white/5 flex-grow">

                 <h3 className="text-black dark:text-white font-black text-2xl font-display mb-8">Career Paths</h3>

                 <div className="grid grid-cols-1 gap-3">

                   {CAREER_TAGS.map((tag, i) => (

                     <div key={i} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-white/5 rounded-2xl hover:bg-accent/5 hover:border-accent/20 border border-transparent transition-all cursor-default">

                        <span className="text-[10px] font-black uppercase tracking-wider text-primary dark:text-white">{tag}</span>

                        <span className="material-icons text-accent text-sm">trending_up</span>

                     </div>

                   ))}

                 </div>

              </div>

           </div>

        </div>



        {/* Exam Section */}

        <section className="mb-12">

            <div className="bg-[#f8fafc] dark:bg-surface-dark/50 border border-gray-100 dark:border-white/5 rounded-[50px] p-12 text-center shadow-inner">

               <h2 className="text-3xl font-black font-display text-primary dark:text-white mb-16 uppercase tracking-widest">Exam <span className="text-accent underline decoration-accent/20 underline-offset-8">Metrics</span></h2>

               <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 max-w-4xl mx-auto">

                 {[

                   { icon: "quiz", val: "60", sub: "Questions" },

                   { icon: "list_alt", val: "MCQ", sub: "Format" },

                   { icon: "schedule", val: "90m", sub: "Duration" },

                   { icon: "military_tech", val: "65%", sub: "Pass Mark", hit: true }

                 ].map((item, i) => (

                   <div key={i} className="flex flex-col items-center">

                      <span className={`material-icons text-4xl mb-4 ${item.hit ? 'text-accent animate-bounce' : 'text-primary/20 dark:text-white/10'}`}>{item.icon}</span>

                      <p className={`font-display font-black text-2xl mb-1 ${item.hit ? 'text-accent' : 'text-primary dark:text-white'}`}>{item.val}</p>

                      <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{item.sub}</p>

                   </div>

                 ))}

               </div>

               <div className="mt-16 text-[9px] font-black uppercase tracking-[3px] text-gray-400 bg-white dark:bg-surface-dark px-10 py-3 rounded-full inline-block shadow-sm">

                  Closed book exam · standard proctoring

               </div>

            </div>

        </section>

      </main>



      {/* CTA Footer */}

      <footer className="container mx-auto px-6 pb-20">

         <div className="bg-primary p-20 rounded-[60px] text-center shadow-2xl relative overflow-hidden">

            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_rgba(232,52,28,0.15),_transparent_70%)]"></div>

            <div className="relative z-10">

               <h2 className="text-5xl md:text-7xl font-black font-display text-white mb-8 tracking-tighter uppercase leading-none">Plan for <br/> <span className="text-accent underline decoration-white/10 underline-offset-8 italic">Success</span></h2>

               <p className="text-blue-100/50 mb-12 max-w-xl mx-auto text-lg">Master the practices for planning changes, deploying services, and maintaining control with Peer's expert-led module.</p>

               <Link to="/contact" className="inline-block bg-white hover:bg-accent hover:text-white text-primary font-black py-6 px-16 rounded-[20px] transition-all shadow-xl active:scale-95 text-[12px] uppercase tracking-[3px]">

                  Schedule Training

               </Link>

            </div>

         </div>

      </footer>

    </div>

  );

}

