import React, { useState } from 'react';

import { Link } from 'react-router-dom';



const GLANCE_ITEMS = [

  { label: 'Total Duration', value: '24 Hours', icon: 'schedule' },

  { label: 'Course Type',   value: 'Bootcamp', icon: 'school' },

  { label: 'Certification', value: 'PPM & Agile Spec.', icon: 'workspace_premium' },

  { label: 'Avg Salary',    value: '$115k+', icon: 'trending_up' },

];



const MODULES = [

  {

    num: 1, duration: '4 Hours',

    title: 'Project Portfolio Management (PPM) Fundamentals',

    tag: 'Strategic Planning · Resource Optimization',

    desc: 'Learn how to align projects with business strategy. We cover the entire portfolio lifecycle from idea generation to value realization.',

    topics: [

      'Strategic alignment & prioritization techniques', 

      'Governance structures for complex portfolios',

      'Resource capacity planning and management',

      'Financial tracking and ROI analysis',

      'Risk management at the portfolio level'

    ],

    defaultOpen: true,

  },

  {

    num: 2, duration: '4 Hours',

    title: 'Agile Mindset & Frameworks',

    tag: 'Scrum · Kanban · Lean',

    desc: 'Deep dive into Agile values and principles. Understand when to use specific frameworks like Scrum, Kanban, or a Hybrid approach.',

    topics: [

      'The Agile Manifesto & 12 Principles',

      'Scrum Roles: Product Owner, Scrum Master, Developers',

      'Scrum Events: Sprint Planning, Daily Scrum, Review, Retrospective',

      'Kanban: Visualizing work, limiting WIP, managing flow',

      'Hybrid PM: Blending Waterfall and Agile'

    ],

  },

  {

    num: 3, duration: '4 Hours',

    title: 'Advanced Agile Leadership',

    tag: 'Servant Leadership · Team Dynamics',

    desc: 'Move beyond the basics to lead high-performing teams. Focus on coaching, facilitating, and removing organizational impediments.',

    topics: [

      'Servant Leadership & Coaching techniques',

      'Building Cross-Functional, self-organizing teams',

      'Facilitating complex decision-making',

      'Conflict resolution in Agile environments',

      'Metrics that matter: Velocity, Cycle Time, Throughput'

    ],

  },

  {

    num: 4, duration: '4 Hours',

    title: 'Scaling Agile in the Enterprise',

    tag: 'SAFe · LeSS · Scrum@Scale',

    desc: 'Learn how to coordinate multiple teams and large-scale programs. Understand frameworks for organizational agility.',

    topics: [

      'Foundations of Scaled Agile Framework (SAFe)',

      'Large Scale Scrum (LeSS) principles',

      'Coordinating dependencies across teams',

      'Agile Portfolio management integration',

      'Organizational change management for Agile'

    ],

  },

  {

    num: 5, duration: '4 Hours',

    title: 'Tooling & Execution (Jira/Azure DevOps)',

    tag: 'Hands-on · Practical Setup',

    desc: 'Technical setup for project success. Learn to configure industry-standard tools for tracking and reporting.',

    topics: [

      'Configuring Jira for Scrum and Kanban',

      'Building Dashboards and Automated Reports',

      'Azure DevOps for Agile Boards and Repos',

      'Integrating PPM tools with Agile execution',

      'Effective Backlog management in digital tools'

    ],

  },

  {

    num: 6, duration: '4 Hours',

    title: 'Capstone: Integrated PPM & Agile Strategy',

    tag: 'Real-world Simulation · Certification Prep',

    desc: 'Apply everything you’ve learned to a comprehensive business case. Final assessment and certification walkthrough.',

    topics: [

      'Building a Strategic Roadmap',

      'Executing a simulated 3-Sprint project',

      'Presenting Portfolio health to stakeholders',

      'Certification exam preparation and mock tests',

      'Career coaching and interview preparation'

    ],

  },

];



const DETAILS = [

  { key: 'Duration',      value: '24 Hours (6 Modules)', icon: 'timer' },

  { key: 'Schedule',      value: 'Weekend / Weeknight', icon: 'event' },

  { key: 'Pre-requisites', value: 'Foundational PM', icon: 'history_edu' },

  { key: 'Certification', value: 'PPM & Agile Expert', icon: 'verified' },

  { key: 'Exams',         value: 'Included', icon: 'quiz' },

];



function ModuleCard({ module }) {

  const [open, setOpen] = useState(module.defaultOpen || false);



  return (

    <div className={`bg-white dark:bg-surface-dark border rounded-2xl mb-4 overflow-hidden transition-all duration-300 shadow-sm ${open ? 'border-accent ring-1 ring-accent/20 translate-x-1' : 'border-gray-200 dark:border-white/5 hover:border-accent/40'}`}>

      <div 

        className="p-6 cursor-pointer flex items-center gap-6 select-none"

        onClick={() => setOpen(!open)}

      >

        <div className={`w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center font-black text-lg transition-colors ${open ? 'bg-accent text-white' : 'bg-primary-light text-accent opacity-70'}`}>

          {module.num}

        </div>

        <div className="flex-grow">

          <div className="flex items-center gap-3 mb-1">

             <span className="text-[10px] font-black uppercase tracking-widest text-accent">{module.duration}</span>

             <span className="w-1 h-1 bg-gray-300 rounded-full"></span>

             <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{module.tag}</span>

          </div>

          <h3 className="text-lg font-black font-display text-primary dark:text-white group-hover:text-accent transition-colors">{module.title}</h3>

        </div>

        <span className={`material-icons text-xl transition-transform duration-300 ${open ? 'rotate-180 text-accent' : 'text-gray-300'}`}>expand_more</span>

      </div>

      

      <div className={`transition-all duration-300 ease-in-out ${open ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>

        <div className="px-6 pb-6 pt-0 ml-18 border-t border-gray-50 dark:border-white/5 pt-6">

          <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed bg-gray-50 dark:bg-white/5 p-4 rounded-xl border-l-4 border-accent">

            {module.desc}

          </p>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8">

            {module.topics.map((topic, i) => (

              <li key={i} className="text-xs text-gray-700 dark:text-gray-300 flex items-start gap-3">

                <span className="material-icons text-accent text-[14px] mt-0.5">check_circle</span>

                {topic}

              </li>

            ))}

          </ul>

        </div>

      </div>

    </div>

  );

}



export default function PPMAgile() {

  return (

    <div className="bg-[#f8fafc] dark:bg-background-dark min-h-screen">

      {/* Hero */}

      <header className="relative bg-gradient-to-br from-[#030d1a] via-[#080f2e] to-[#150833] text-white py-24 lg:py-32 overflow-hidden page-hero flex items-center justify-center">

        {/* Premium hero decoration — corner light leaks + scan lines */}

        <div className="absolute inset-0 pointer-events-none" style={{background: "radial-gradient(ellipse 65% 55% at 100% 0%, rgba(124,58,237,0.20) 0%, transparent 70%)"}} />

        <div className="absolute inset-0 pointer-events-none" style={{background: "radial-gradient(ellipse 50% 45% at 0% 100%, rgba(37,99,235,0.14) 0%, transparent 70%)"}} />

        <div className="absolute inset-0">

          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/10 to-transparent"></div>

        </div>

        

        <div className="container mx-auto px-6 lg:px-12 relative z-10 w-full">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

            <div className="lg:col-span-7">

              <div className="inline-block bg-accent/20 backdrop-blur-md px-4 py-1.5 rounded-lg text-accent-blue text-[10px] font-black uppercase tracking-[0.25em] mb-6 border border-accent/20">

                Enterprise Project Excellence

              </div>

              <h1 className="text-5xl md:text-7xl font-black font-display mb-8 leading-[0.9] tracking-tighter">

                PPM & <span className="text-accent underline decoration-white/20 underline-offset-8">Agile</span><br />

                <span className="text-blue-200">Expert Bootcamp</span>

              </h1>

              <p className="text-lg text-blue-100/70 max-w-2xl mb-10 leading-relaxed font-body">

                Master the art of strategic portfolio management and adaptive agile execution. Bridge the gap between corporate strategy and team-level delivery.

              </p>

              

              <div className="flex flex-wrap gap-4 mb-10">

                 <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-xl backdrop-blur-md">

                    <span className="material-icons text-accent text-lg">timer</span>

                    <span className="text-xs font-bold tracking-wide">24 Hours Intensive</span>

                 </div>

                 <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-xl backdrop-blur-md">

                    <span className="material-icons text-accent text-lg">business</span>

                    <span className="text-xs font-bold tracking-wide">Enterprise Focused</span>

                 </div>

                 <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-xl backdrop-blur-md">

                    <span className="material-icons text-accent text-lg">workspace_premium</span>

                    <span className="text-xs font-bold tracking-wide">Certified Expert Path</span>

                 </div>

              </div>



              <div className="flex flex-wrap gap-4">

                <a href="#curriculum" className="bg-accent hover:bg-accent/90 text-white px-10 py-4 rounded-xl font-black uppercase tracking-widest text-xs transition-all shadow-2xl active:scale-95">

                  Explore Curriculum

                </a>

                <a href="#syllabus" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-10 py-4 rounded-xl font-black uppercase tracking-widest text-xs transition-all backdrop-blur-md active:scale-95">

                  Download Syllabus

                </a>

              </div>

            </div>



            <div className="lg:col-span-5">

              <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-8 rounded-[40px] shadow-2xl relative">

                <div className="absolute -top-6 -right-6 w-20 h-20 bg-accent rounded-full flex items-center justify-center shadow-xl rotate-12 group hover:rotate-0 transition-transform cursor-pointer">

                   <span className="material-icons text-white text-3xl">local_offer</span>

                </div>

                <div className="text-center mb-8">

                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-2">Program Investment</p>

                  <h3 className="text-6xl font-black font-display tracking-tighter mb-2">TBD</h3>

                  <p className="text-blue-200/50 text-xs font-medium">Includes formal certification exam fees</p>

                </div>

                

                <hr className="border-white/10 mb-8" />

                

                <div className="space-y-6">

                  <div className="flex items-center gap-5">

                     <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">

                        <span className="material-icons text-white text-xl">record_voice_over</span>

                     </div>

                     <div>

                        <p className="text-[10px] font-black text-blue-200/50 uppercase tracking-widest">Instructor-Led Live</p>

                        <p className="text-sm font-bold text-white">Enrolling Now for Q3</p>

                     </div>

                  </div>

                  <div className="flex items-center gap-5">

                     <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center opacity-50">

                        <span className="material-icons text-white text-xl">devices</span>

                     </div>

                     <div className="opacity-50">

                        <p className="text-[10px] font-black text-blue-200/50 uppercase tracking-widest">Flexible Self-Paced</p>

                        <p className="text-sm font-bold text-white">Launching Soon</p>

                     </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </header>



      {/* Glance Bar */}

      <div className="bg-white dark:bg-surface-dark border-b border-gray-100 dark:border-white/10 py-10 relative z-20 -mt-8 mx-6 rounded-3xl shadow-xl">

        <div className="container mx-auto px-6">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:divide-x divide-gray-100 dark:divide-white/10">

            {GLANCE_ITEMS.map((item, i) => (

              <div key={i} className="flex flex-col items-center text-center px-4">

                <span className="material-icons text-accent mb-3 text-2xl">{item.icon}</span>

                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">{item.label}</p>

                <p className="text-base font-black text-primary dark:text-white">{item.value}</p>

              </div>

            ))}

          </div>

        </div>

      </div>



      {/* Main Content */}

      <div className="container mx-auto px-6 lg:px-12 py-24">

        <div className="flex flex-col lg:flex-row gap-20">

          <div className="lg:w-2/3">

            <section id="curriculum">

              <div className="mb-12">

                <p className="text-accent font-black uppercase tracking-[0.3em] text-[10px] mb-3">Detailed Curriculum</p>

                <h2 className="text-3xl md:text-5xl font-black font-display text-primary dark:text-white mb-6 tracking-tight">24 Hours of <span className="text-gray-400">Expert Training</span></h2>

                <p className="text-gray-600 dark:text-gray-400 max-w-2xl font-body leading-relaxed">

                  A comprehensive journey from theoretical management principles to hands-on agile mastery.

                </p>

              </div>

              

              <div className="space-y-4">

                {MODULES.map((mod) => (

                  <ModuleCard key={mod.num} module={mod} />

                ))}

              </div>

            </section>



            <section className="mt-24">

               <div className="p-12 rounded-[40px] bg-[#0a1120] text-white relative overflow-hidden group">

                  <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[100px] group-hover:bg-accent/30 transition-all duration-700"></div>

                  <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">

                     <div className="md:w-1/2">

                        <h3 className="text-3xl font-black font-display mb-6 tracking-tight">Enterprise Scaling Support</h3>

                        <p className="text-sm text-blue-100/60 leading-relaxed mb-8">

                           We offer customized training solutions for PMOs and large departments looking to standardize their PPM and Agile frameworks across the organization.

                        </p>

                        <ul className="space-y-3">

                           <li className="flex items-center gap-3 text-sm font-bold text-accent">

                              <span className="material-icons text-sm">verified_user</span>

                              Custom Training Materials

                           </li>

                           <li className="flex items-center gap-3 text-sm font-bold text-accent">

                              <span className="material-icons text-sm">verified_user</span>

                              Dedicated Support Leads

                           </li>

                        </ul>

                     </div>

                     <div className="md:w-1/2 flex justify-center">

                        <button className="bg-white text-primary px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-accent hover:text-white transition-all shadow-2xl active:scale-95">

                           Corporate Request

                        </button>

                     </div>

                  </div>

               </div>

            </section>

          </div>



          <aside className="lg:w-1/3">

            <div className="sticky top-32 space-y-8">

              <div className="bg-white dark:bg-surface-dark p-8 rounded-[32px] shadow-subtle border border-gray-100 dark:border-white/5">

                <div className="flex items-center justify-between mb-8">

                  <h3 className="text-lg font-black font-display text-primary dark:text-white tracking-tight">Program Details</h3>

                  <span className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">

                    <span className="material-icons text-accent">info</span>

                  </span>

                </div>

                

                <div className="space-y-4 mb-10">

                  {DETAILS.map((row, i) => (

                    <div key={i} className="flex items-center justify-between py-4 border-b border-gray-50 dark:border-white/10 last:border-0 group">

                      <div className="flex items-center gap-3">

                        <span className="material-icons text-gray-400 group-hover:text-accent transition-colors text-lg">{row.icon}</span>

                        <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">{row.key}</span>

                      </div>

                      <span className="text-sm font-black text-primary dark:text-white">{row.value}</span>

                    </div>

                  ))}

                </div>

                

                <a href="#enroll" className="block w-full text-center bg-accent hover:bg-primary text-white py-4 rounded-2xl font-black uppercase tracking-widest text-xs transition-all shadow-xl active:scale-95 mb-4">

                  Reserve My Seat

                </a>

                <p className="text-center text-[10px] font-bold text-gray-400 uppercase tracking-widest px-4 leading-relaxed italic">

                  Early bird discounts available for corporate batches.

                </p>

              </div>



              <div className="bg-[#071B34] p-8 rounded-[32px] text-white overflow-hidden relative group">

                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>

                <h4 className="text-sm font-black uppercase tracking-widest mb-6 relative z-10">Industry Recognition</h4>

                <div className="flex flex-wrap gap-3 relative z-10">

                   {['PMI Aligned', 'Agile Alliance', 'Scrum.org'].map(tag => (

                     <span key={tag} className="text-[10px] font-black uppercase tracking-widest bg-white/10 px-4 py-2 rounded-lg border border-white/10 hover:bg-white/20 transition-colors cursor-default whitespace-nowrap">

                       {tag}

                     </span>

                   ))}

                </div>

              </div>

            </div>

          </aside>

        </div>

      </div>

      

      {/* Social proof/Sponsors - simple and clean */}

      <section className="py-20 bg-white dark:bg-background-dark border-t border-gray-100 dark:border-white/10 overflow-hidden">

        <div className="container mx-auto px-6 text-center">

           <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-12">Global Recognition Partners</p>

           <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">

              <span className="text-2xl font-black font-display tracking-tighter">PMI©</span>

              <span className="text-2xl font-black font-display tracking-tighter">SCRUM.ORG</span>

              <span className="text-2xl font-black font-display tracking-tighter">PEOPLECERT</span>

              <span className="text-2xl font-black font-display tracking-tighter">AXELOS</span>

           </div>

        </div>

      </section>

    </div>

  );

}

