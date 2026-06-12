import React from 'react';

import { Link } from 'react-router-dom';

import logo from '../assets/logos/itil-v5-bridge.svg';



const LEARN_POINTS = [

  { icon: "🖥️", title: "Key enhancements in ITIL (Version 5)", desc: "Understand what has changed since ITIL 4. Focus only on the new and refined concepts, terminology, and structural updates." },

  { icon: "🚀", title: "Digital product and service management evolution", desc: "Explore how the new ITIL reflects modern digital and AI-enabled environments and how complexity shapes management." },

  { icon: "💬", title: "Updated language and core concepts", desc: "Gain clarity on the updated terminology and principles, ensuring confident communication across teams and stakeholders." },

  { icon: "🤝", title: "Enhanced value creation approach", desc: "Discover how ITIL (Version 5) reinforces value creation across the full stakeholder ecosystem, linking strategy and delivery." },

  { icon: "🔧", title: "Applying ITIL (Version 5) in practice", desc: "Learn how to integrate the enhancements into your existing knowledge and apply updated guidance to improve results." }

];



const SKILLS = [

  { title: "Applying ITIL (Version 5) updates", desc: "Confidently interpret and apply the updates introduced in ITIL (Version 5) without repeating previously covered content." },

  { title: "Managing digital and AI complexity", desc: "Understand how ITIL evolved to support modern management, including the impact of AI and emerging technologies." },

  { title: "Strengthening value-focused practice", desc: "Apply updated guidance to improve alignment, performance, and measurable outcomes across products and services." }

];



const CAREER_TAGS = [

  "IT Specialist Application Development", "IT Specialist Change Management", "IT Operations Specialist",

  "IT Development Manager", "IT Service Operations Manager", "IT Team Leader", "Chief Digital Officer",

  "IT Project Manager", "Transformation Manager", "IT Service Manager", "Digital Product Manager",

  "Experience Manager", "Service Improvement Manager", "Service Delivery Specialists", "Product Owner",

  "Process Lead", "Customer Success Manager", "Service Owner", "Digital Product Designer",

  "Enterprise Architect", "Solution Designer"

];



export default function ItilFoundationBridgeV5() {

  return (

    <div className="bg-[#f8fafc] dark:bg-background-dark min-h-screen font-body">

      {/* Hero Section */}

      <header className="relative bg-gradient-to-br from-[#030d1a] via-[#080f2e] to-[#150833] text-white py-24 overflow-hidden">

        {/* Premium hero decoration — corner light leaks + scan lines */}

        <div className="absolute inset-0 pointer-events-none" style={{background: "radial-gradient(ellipse 65% 55% at 100% 0%, rgba(124,58,237,0.20) 0%, transparent 70%)"}} />

        <div className="absolute inset-0 pointer-events-none" style={{background: "radial-gradient(ellipse 50% 45% at 0% 100%, rgba(37,99,235,0.14) 0%, transparent 70%)"}} />

        <div className="container mx-auto px-6 relative z-10">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            <div className="lg:col-span-8">

              <div className="flex flex-wrap items-center gap-3 mb-6">

                <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-md px-4 py-1 rounded-full text-accent-blue text-[10px] font-black uppercase tracking-[0.2em] border border-accent/30">

                  🌉 Bridge Certification

                </div>

                <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md px-4 py-1 rounded-full text-blue-100/50 text-[10px] font-black uppercase tracking-[0.2em] border border-white/10">

                   Requires ITIL 4 Foundation

                </div>

              </div>

              <h1 className="text-4xl md:text-6xl font-black font-display mb-6 tracking-tight leading-tight">

                ITIL Foundation <br />

                <span className="text-accent underline decoration-accent/20 underline-offset-8 italic">Bridge</span> <span className="text-white/40 font-light block mt-2">(Version 5)</span>

              </h1>

              <p className="text-xl text-blue-100/70 max-w-2xl mb-10 leading-relaxed">

                A fast, focused route for ITIL 4 certification holders to upgrade, concentrating only on the updates introduced in ITIL Foundation V5.

              </p>

              <div className="flex flex-wrap gap-3 mb-10">

                {["⚡ Fast upgrade path", "🏆 Industry-recognized", "🌍 Globally recognized", "🇬🇧 Exam in English", "💰 Cost-effective"].map((pill, i) => (

                  <span key={i} className={`bg-white/5 border px-4 py-1.5 rounded-full text-sm font-medium ${i === 0 ? 'border-accent text-accent shadow-[0_0_15px_rgba(232,52,28,0.2)]' : 'border-white/10 text-blue-100/80'}`}>

                    {pill}

                  </span>

                ))}

              </div>

            </div>

            <div className="lg:col-span-4 flex justify-center lg:justify-end">

               <div className="relative group p-6">

                  <div className="absolute inset-0 bg-accent rounded-full blur-[90px] opacity-20 animate-pulse"></div>

                  <img 

                    src={logo} 

                    alt="ITIL V5 Bridge Logo" 

                    className="relative w-72 h-72 object-contain transition-transform group-hover:scale-105 duration-700"

                  />

               </div>

            </div>

          </div>

        </div>

      </header>



      {/* Value Strip */}

      <section className="bg-[#0b214a] border-y border-white/5">

        <div className="container mx-auto px-6">

          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-x md:divide-y-0 divide-white/10">

            <div className="py-10 md:pr-10">

              <div className="w-8 h-1 bg-accent mb-4 rounded-full"></div>

              <h3 className="text-white font-bold mb-2">Stay current with confidence</h3>

              <p className="text-blue-100/50 text-sm">Demonstrate your understanding of keys introduced in V5 and your ability to apply them.</p>

            </div>

            <div className="py-10 md:px-10">

              <div className="w-8 h-1 bg-accent mb-4 rounded-full"></div>

              <h3 className="text-white font-bold mb-2">Validate your expertise</h3>

              <p className="text-blue-100/50 text-sm">Build on your ITIL 4 certification and strengthen your expertise in line with the latest evolution.</p>

            </div>

            <div className="py-10 md:pl-10">

              <div className="w-8 h-1 bg-accent mb-4 rounded-full"></div>

              <h3 className="text-white font-bold mb-2">Advance your profile</h3>

              <p className="text-blue-100/50 text-sm">Strengthen your credibility and remain competitive as organizations evolve in AI-enabled landscapes.</p>

            </div>

          </div>

        </div>

      </section>



      <main className="container mx-auto px-6 py-20">

        {/* At a Glance */}

        <section className="mb-32">

          <div className="flex items-center gap-4 mb-12">

            <h2 className="text-3xl font-black font-display text-primary dark:text-white tracking-tight">At a <span className="text-accent">Glance</span></h2>

            <div className="h-px flex-grow bg-gradient-to-r from-gray-200 to-transparent dark:from-white/10"></div>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {[

              { icon: "🎓", label: "For", value: "ITIL 4 certification holders" },

              { icon: "🔗", label: "Focuses on", value: "Key foundation-level updates" },

              { icon: "⚡", label: "Path", value: "Fast, cost-effective upgrade" },

              { icon: "📝", label: "Exam available", value: "In English" }

            ].map((item, i) => (

              <div key={i} className="bg-white dark:bg-surface-dark p-8 rounded-2xl shadow-subtle border border-gray-100 dark:border-white/5 hover:border-accent/20 transition-all group">

                <div className="w-12 h-12 bg-gray-50 dark:bg-white/5 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:bg-accent/10 transition-colors">{item.icon}</div>

                <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">{item.label}</p>

                <p className="text-sm font-bold text-primary dark:text-white">{item.value}</p>

              </div>

            ))}

          </div>

        </section>



        {/* Learn Section */}

        <section className="mb-32">

          <div className="flex items-center gap-4 mb-12">

            <h2 className="text-3xl font-black font-display text-primary dark:text-white tracking-tight">What You Will <span className="text-accent underline decoration-accent/20 underline-offset-8">Learn</span></h2>

            <div className="h-px flex-grow bg-gradient-to-r from-gray-200 to-transparent dark:from-white/10"></div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {LEARN_POINTS.map((item, i) => (

              <div key={i} className="relative group p-8 bg-white dark:bg-surface-dark rounded-3xl shadow-subtle border border-gray-100 dark:border-white/5 hover:border-accent/30 transition-all overflow-hidden flex flex-col items-start text-left">

                 <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">

                    <span className="font-display font-black text-6xl italic text-primary dark:text-white">0{i+1}</span>

                 </div>

                <div className="text-3xl mb-4 p-3 bg-gray-50 dark:bg-white/5 rounded-2xl group-hover:bg-accent transition-colors group-hover:text-white">{item.icon}</div>

                <h3 className="text-lg font-black font-display text-primary dark:text-white mb-3 relative z-10 leading-tight">{item.title}</h3>

                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed relative z-10">{item.desc}</p>

              </div>

            ))}

          </div>

        </section>



        {/* Skills Section */}

        <section className="mb-32 bg-[#071B34] rounded-[40px] p-12 text-white relative overflow-hidden group shadow-2xl">

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_rgba(232,52,28,0.1)_0%,_transparent_50%)]"></div>

          <div className="flex items-center gap-4 mb-12 relative z-10">

            <h2 className="text-3xl font-black font-display tracking-tight">Bridge <span className="text-accent">Skills</span></h2>

            <div className="h-px flex-grow bg-white/10"></div>

          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">

            {SKILLS.map((item, i) => (

              <div key={i} className="flex gap-6 p-6 rounded-3xl bg-white/5 border border-white/5 hover:border-accent/30 transition-all">

                <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center text-accent flex-shrink-0">

                  <span className="material-icons text-xl">flash_on</span>

                </div>

                <div>

                  <h3 className="text-lg font-black font-display mb-2">{item.title}</h3>

                  <p className="text-blue-100/60 text-sm leading-relaxed">{item.desc}</p>

                </div>

              </div>

            ))}

          </div>

        </section>



        {/* Careers */}

        <section className="mb-32">

          <div className="flex items-center gap-4 mb-12">

            <h2 className="text-3xl font-black font-display text-primary dark:text-white tracking-tight">Unlocked <span className="text-accent underline decoration-accent/20 underline-offset-8">Roles</span></h2>

            <div className="h-px flex-grow bg-gradient-to-r from-gray-200 to-transparent dark:from-white/10"></div>

          </div>

          <div className="flex flex-wrap gap-4">

            {CAREER_TAGS.map((tag, i) => (

              <span key={i} className="bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 text-primary dark:text-white px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm hover:scale-105 transition-transform cursor-default">

                {tag}

              </span>

            ))}

          </div>

        </section>



        {/* Exam Section */}

        <section className="mb-12">

          <div className="flex items-center gap-4 mb-12">

            <h2 className="text-3xl font-black font-display text-primary dark:text-white tracking-tight">Exam <span className="text-accent underline decoration-accent/20 underline-offset-8">Protocol</span></h2>

            <div className="h-px flex-grow bg-gradient-to-r from-gray-200 to-transparent dark:from-white/10"></div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">

            <div className="md:col-span-4 bg-gradient-to-br from-accent/10 to-transparent border border-accent/20 p-8 rounded-3xl flex flex-col justify-center">

               <div className="text-accent text-4xl mb-4">🌉</div>

               <h3 className="text-xl font-black font-display text-primary dark:text-white mb-2">Bridge Format</h3>

               <p className="text-sm text-gray-500 leading-relaxed">Specially designed to cover only V5 updates. Prior ITIL 4 Foundation certification is mandatory.</p>

            </div>

            <div className="md:col-span-8 grid grid-cols-2 lg:grid-cols-4 gap-4">

              {[

                { icon: "📋", value: "20", label: "Questions" },

                { icon: "☑️", value: "Multiple choice", label: "Format" },

                { icon: "⏱️", value: "30 min", label: "Duration" },

                { icon: "🎯", value: "65% minimum", label: "Pass Score", highlight: true }

              ].map((item, i) => (

                <div key={i} className={`p-6 rounded-3xl text-center shadow-subtle border ${item.highlight ? 'bg-primary border-accent text-white' : 'bg-white dark:bg-surface-dark border-gray-100 dark:border-white/5'}`}>

                  <div className="text-2xl mb-3">{item.icon}</div>

                  <p className="font-display font-black text-lg mb-1 leading-tight">{item.value}</p>

                  <p className="text-[10px] font-bold uppercase tracking-widest opacity-60 text-current">{item.label}</p>

                </div>

              ))}

            </div>

          </div>

          <div className="mt-8 flex items-center justify-center gap-4 text-xs text-gray-400 italic bg-gray-50 dark:bg-white/5 p-4 rounded-xl">

             <span>📕 Closed book exam</span>

             <span className="w-1 h-1 bg-gray-300 rounded-full"></span>

             <span>No reference materials permitted</span>

          </div>

        </section>

      </main>



      {/* Footer CTA */}

      <footer className="container mx-auto px-6 pb-20">

        <div className="bg-[#0b214a] border border-white/5 text-white rounded-[50px] p-16 text-center shadow-2xl relative overflow-hidden">

          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-accent/20 rounded-full blur-[100px]"></div>

          <div className="relative z-10">

            <h2 className="text-4xl md:text-5xl font-black font-display mb-6 tracking-tighter">Upgrade to <span className="text-accent underline decoration-accent/20 underline-offset-8">V5</span> Foundation</h2>

            <p className="text-lg text-blue-100/60 mb-10 max-w-2xl mx-auto">The fastest way to stay certified. Our bridge program includes official exam materials and voucher.</p>

            <Link to="/contact" className="inline-block bg-accent hover:bg-white hover:!text-primary text-white font-black py-5 px-12 rounded-2xl transition-all shadow-xl active:scale-95 text-sm uppercase tracking-widest">

              Get Started

            </Link>

          </div>

        </div>

      </footer>

    </div>

  );

}

