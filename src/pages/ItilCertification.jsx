import React, { useState } from 'react';

import { Link } from 'react-router-dom';



const COURSES = [

  // Foundation & AI Governance

  {

    category: 'foundation',

    badge: 'Start Here', badgeBg: 'bg-[#0f2e59]',

    title: 'ITIL® Foundation (Version 5)',

    description: 'Build a strong foundation in digital product and service management for AI-enabled environments. The modern starting point for the ITIL journey.',

    skills: ['Digital product & service management', 'ITIL Value System & guiding principles', 'Responsible AI practice', 'Value stream mapping basics'],

    spPrice: 535, olPrice: 750,

    link: '/itil-foundation-v5',

  },

  {

    category: 'foundation',

    badge: 'Classic', badgeBg: 'bg-[#183d73]',

    title: 'ITIL® 4 Foundation',

    description: 'The proven, globally recognized ITIL 4 framework. Ideal for professionals with prior ITIL v3 knowledge or entering IT service management fresh.',

    skills: ['Service value system & chain', 'Four dimensions of service management', 'Continual improvement model', 'Key ITIL 4 practices'],

    spPrice: 535, olPrice: 750,

    link: '/itil-foundation-4',

  },

  {

    category: 'foundation',

    badge: 'Bridge', badgeBg: 'bg-[#224d8d]',

    title: 'ITIL® Foundation Bridge (V5)',

    description: 'Already ITIL 4 certified? Upgrade efficiently to ITIL V5 Foundation with this targeted bridge covering only the delta content.',

    skills: ['ITIL V5 key concept updates', 'New guiding principles & value system changes', 'AI-native practice overview'],

    spPrice: 225, olPrice: 375,

    link: '/itil-foundation-bridge-v5',

  },

  {

    category: 'foundation',

    badge: 'Extension', badgeBg: 'bg-[#2c5da7]',

    title: 'ITIL® AI Governance',

    description: 'Navigate the complexities of Artificial Intelligence. Establish guardrails, ensure ethical use, and govern AI initiatives within the ITIL framework.',

    skills: ['AI risk assessment', 'Ethical AI frameworks', 'AI policy design & implementation'],

    spPrice: 535, olPrice: 750,

    link: '#',

  },

  // Specialist

  {

    category: 'specialist',

    badge: 'New V5', badgeBg: 'bg-[#2563eb]',

    title: 'ITIL® Specialist — Product',

    description: 'Master the lifecycle of digital products. Build, manage, and optimize products that deliver continuous value to consumers and the organization.',

    skills: ['Product lifecycle management', 'Value stream mapping', 'Agile integration'],

    spPrice: 750, olPrice: 950,

    link: '/itil-specialist-product-v5',

  },

  {

    category: 'specialist',

    badge: 'New V5', badgeBg: 'bg-[#2563eb]',

    title: 'ITIL® Specialist — Service',

    description: 'Focus on robust service operation and digital transformation. Ensure IT services are highly available, reliable, and aligned with business outcomes.',

    skills: ['Service operation & digital transformation', 'Advanced Incident / Problem Management', 'Reliability engineering'],

    spPrice: 750, olPrice: 950,

    link: '/itil-specialist-service-v5',

  },

  {

    category: 'specialist',

    badge: 'New V5', badgeBg: 'bg-[#2563eb]',

    title: 'ITIL® Specialist — Experience',

    description: 'Elevate the consumer and employee experience. Design interactions and touchpoints that maximize satisfaction and drive adoption.',

    skills: ['UX/CX in IT services', 'Journey mapping', 'Experience level agreements (XLAs)'],

    spPrice: 750, olPrice: 950,

    link: '/itil-specialist-experience-v5',

  },

  {

    category: 'specialist',

    badge: 'New V5', badgeBg: 'bg-[#2563eb]',

    title: 'ITIL® Specialist — Strategy',

    description: 'Develop a clear vision and digital strategy for IT operations. Align technology investments with overarching business goals and leadership expectations.',

    skills: ['Strategic planning & digital leadership', 'IT investment alignment', 'Risk management'],

    spPrice: 750, olPrice: 950,

    link: '/itil-specialist-strategy-v5',

  },

  {

    category: 'specialist',

    badge: 'New V5', badgeBg: 'bg-[#2563eb]',

    title: 'ITIL® Specialist — Transformation',

    description: 'Bridge strategy and execution. Lead complex organizational changes and foster a culture of continuous improvement at scale.',

    skills: ['Organizational Change Management', 'Cultural transformation', 'Leadership at scale'],

    spPrice: 750, olPrice: 950,

    link: '/itil-specialist-transformation-v5',

  },

  // Practice Manager

  {

    category: 'practice',

    badge: 'Practice Manager', badgeBg: 'bg-[#0ea5e9]',

    title: 'Monitor, Support & Fulfill',

    description: 'Gain deep practical knowledge in the core operational practices that keep the business running smoothly and users satisfied day-to-day.',

    skills: ['Incident & Problem Management', 'Service Desk optimization', 'Monitoring & Event Management', 'Request fulfillment'],

    spPrice: 750, olPrice: 950,

    link: '/itil-specialist-msf',

  },

  {

    category: 'practice',

    badge: 'Practice Manager', badgeBg: 'bg-[#0ea5e9]',

    title: 'Plan, Implement & Control',

    description: 'Master the practices for planning changes, deploying new services, and maintaining rigorous control over the IT environment.',

    skills: ['Change Enablement', 'Release & Deployment Management', 'IT Asset Management', 'Configuration Management'],

    spPrice: 750, olPrice: 950,

    link: '/itil-practice-pic',

  },

  {

    category: 'practice',

    badge: 'Practice Manager', badgeBg: 'bg-[#0ea5e9]',

    title: 'Collaborate, Assure & Improve',

    description: 'Drive collaboration across teams, ensure quality assurance, and embed a culture of continual improvement across IT operations.',

    skills: ['Relationship & Supplier Management', 'Service Level Management', 'Continual Improvement practices', 'IT quality assurance'],

    spPrice: 750, olPrice: 950,

    link: '/itil-practice-cai',

  },

];





const GROUPS = [

  {

    key: 'foundation',

    cls: 'found',

    title: 'ITIL Foundation & AI Governance',

    desc: 'Entry point · Any career stage · Globally recognized',

    color: 'text-[#0f2e59]',

    border: 'border-[#0f2e59]'

  },

  {

    key: 'specialist',

    cls: 'spec',

    title: 'ITIL® Specialist',

    desc: 'Requires Foundation · Domain expertise',

    color: 'text-[#2563eb]',

    border: 'border-[#2563eb]'

  },

  {

    key: 'practice',

    cls: 'pm',

    title: 'ITIL® Practice Manager',

    desc: 'Requires Foundation · Operational depth',

    color: 'text-[#0ea5e9]',

    border: 'border-[#0ea5e9]'

  },

];



const FILTER_BUTTONS = [

  { filter: 'all',        cls: 'all',   label: 'All Modules' },

  { filter: 'foundation', cls: 'found', label: 'Foundation & AI Gov' },

  { filter: 'specialist', cls: 'spec',  label: 'ITIL Specialist' },

  { filter: 'practice',   cls: 'pm',    label: 'Practice Manager' },

];



function CourseCard({ course, mode, setMode }) {

  const { category, badge, badgeBg, title, description, skills, spPrice, olPrice, link } = course;

  

  const categoryColor = category === 'foundation' ? 'text-[#0f2e59]' : 

                        category === 'specialist' ? 'text-[#2563eb]' : 'text-[#0ea5e9]';

  const categoryHover = category === 'foundation' ? 'hover:border-[#0f2e59]' : 

                        category === 'specialist' ? 'hover:border-[#2563eb]' : 'hover:border-[#0ea5e9]';



  return (

    <div className={`flex flex-col h-full bg-white dark:bg-surface-dark border border-gray-100 dark:border-white/5 rounded-2xl p-6 transition-all duration-300 shadow-subtle ${categoryHover} hover:-translate-y-1 relative overflow-hidden group`}>

      {badge && (

        <div className={`absolute top-0 left-0 text-white px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-br-lg ${badgeBg}`}>

          {badge}

        </div>

      )}

      <h3 className={`text-lg font-black font-display mt-4 mb-3 leading-tight ${categoryColor}`}>{title}</h3>

      <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed flex-grow">{description}</p>

      

      <ul className="space-y-2 mb-8">

        {skills.map((skill, i) => (

          <li key={i} className="text-xs text-gray-700 dark:text-gray-300 flex items-start gap-2">

            <span className={`material-icons text-[14px] mt-0.5 ${categoryColor}`}>check_circle</span>

            {skill}

          </li>

        ))}

      </ul>

      

      <div className="pt-6 border-t border-gray-100 dark:border-white/10 mt-auto">

        <div className="grid grid-cols-2 gap-3 mb-4">

          <button 

            onClick={() => setMode('sp')}

            className={`p-3 rounded-xl text-center border-2 transition-all ${mode === 'sp' ? 'bg-[#e0f2fe]/50 border-[#bae6fd] scale-105 shadow-sm' : 'bg-gray-50/50 dark:bg-white/5 border-transparent opacity-50 hover:opacity-100'}`}

          >

            <span className="block text-[8px] font-black uppercase tracking-tighter text-[#0284c7]">Self-Paced</span>

            <span className="text-sm font-bold text-[#071B34] dark:text-white">US${spPrice}</span>

          </button>

          <button 

            onClick={() => setMode('ol')}

            className={`p-3 rounded-xl text-center border-2 transition-all ${mode === 'ol' ? 'bg-[#dbeafe]/50 border-[#bfdbfe] scale-105 shadow-sm' : 'bg-gray-50/50 dark:bg-white/5 border-transparent opacity-50 hover:opacity-100'}`}

          >

            <span className="block text-[8px] font-black uppercase tracking-tighter text-[#1e40af]">Online Live</span>

            <span className="text-sm font-bold text-[#071B34] dark:text-white">US${olPrice}</span>

          </button>

        </div>

        <Link to={link === '#' ? '#' : link} className="block w-full text-center bg-[#071B34] hover:bg-[#051126] text-white py-2.5 rounded-lg font-bold text-sm transition-all active:scale-95 shadow-md">

          See Details

        </Link>

      </div>

    </div>

  );

}



export default function ItilCertification() {

  const [mode, setMode] = useState('sp');

  const [filter, setFilter] = useState('all');



  const filteredCourses = COURSES.filter(

    (c) => filter === 'all' || c.category === filter

  );



  return (

    <div className="bg-[#f8fafc] dark:bg-background-dark min-h-screen">

      {/* Page Header */}

      <header className="relative bg-gradient-to-br from-[#030d1a] via-[#080f2e] to-[#150833] text-white py-24 lg:py-32 overflow-hidden text-center page-hero flex items-center justify-center">

        {/* Premium hero decoration — corner light leaks + scan lines */}

        <div className="absolute inset-0 pointer-events-none" style={{background: "radial-gradient(ellipse 65% 55% at 100% 0%, rgba(124,58,237,0.20) 0%, transparent 70%)"}} />

        <div className="absolute inset-0 pointer-events-none" style={{background: "radial-gradient(ellipse 50% 45% at 0% 100%, rgba(37,99,235,0.14) 0%, transparent 70%)"}} />

        <div className="container mx-auto px-6 relative z-10 w-full">

          <div className="inline-block bg-accent/20 backdrop-blur-md px-4 py-1 rounded-full text-accent-blue text-[10px] font-black uppercase tracking-[0.2em] mb-4 border border-accent/30">

            PeopleCert Accredited · Registry ID 9550

          </div>

          <h1 className="text-3xl md:text-4xl md:text-5xl font-black font-display mb-4 tracking-tight">ITIL® <span className="text-accent">Certifications</span></h1>

          <p className="text-blue-100/70 max-w-2xl mx-auto font-body leading-relaxed">

            Three qualification tracks — Foundation & AI Governance, Specialist, and Practice Manager.

            Choose your learning path below and switch between Self-Paced or Online Live delivery modes directly on the module cards.

          </p>

        </div>

      </header>



      {/* Main Content */}

      <div className="container mx-auto px-6 lg:px-12 py-16">

        <div className="flex flex-col lg:flex-row gap-6 md:gap-12">

          {/* Sidebar */}

          <aside className="lg:w-1/4 space-y-8">

            <div className="bg-white dark:bg-surface-dark p-8 rounded-3xl shadow-subtle border border-gray-100 dark:border-white/5">

              <h3 className="text-sm font-black uppercase tracking-widest text-primary dark:text-white mb-6 flex items-center gap-2">

                <span className="w-1.5 h-6 bg-accent rounded-full"></span>

                Filter by Track

              </h3>

              <div className="space-y-2">

                {FILTER_BUTTONS.map((btn) => (

                  <button

                    key={btn.filter}

                    onClick={() => setFilter(btn.filter)}

                    className={`w-full text-left px-4 py-3 rounded-xl font-bold text-sm transition-all flex items-center justify-between group ${filter === btn.filter ? 'bg-accent text-white shadow-lg translate-x-1' : 'text-gray-500 hover:bg-gray-50 dark:hover:bg-white/5'}`}

                  >

                    {btn.label}

                    <span className={`material-icons text-lg transition-transform ${filter === btn.filter ? 'opacity-100' : 'opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'}`}>chevron_right</span>

                  </button>

                ))}

              </div>

            </div>



            <div className="bg-[#eff5fa] dark:bg-surface-dark border border-[#dae9f5] dark:border-white/5 p-8 rounded-3xl">

               <h3 className="text-sm font-black uppercase tracking-widest text-primary dark:text-white mb-6">Track Guide</h3>

                <div className="space-y-6">

                  {GROUPS.map((g) => (

                    <div key={g.key} className="flex gap-4">

                      <div>

                        <h4 className={`text-xs font-black uppercase mb-1 ${g.color}`}>{g.title}</h4>

                        <p className="text-[10px] text-gray-500 font-medium leading-normal">{g.desc}</p>

                      </div>

                    </div>

                  ))}

                </div>

            </div>



            <div className="bg-primary p-8 rounded-3xl text-white shadow-2xl relative overflow-hidden group">

               <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>

               <h3 className="text-lg font-black font-display mb-4 relative z-10 tracking-tight">Not sure where to start?</h3>

               <p className="text-xs text-blue-100/70 mb-6 leading-relaxed relative z-10">Begin with ITIL Foundation V5, then choose a Specialist or Practice Manager track aligned to your role.</p>

               <button className="w-full bg-accent hover:bg-white hover:!text-primary py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all relative z-10 active:scale-95 shadow-xl">

                 Chat with Expert

               </button>

            </div>

          </aside>



          {/* Catalog */}

          <main className="lg:w-3/4">

            <div className="flex items-center justify-between mb-10 pb-6 border-b border-gray-200 dark:border-white/10">

               <div>

                  <h2 className="text-2xl font-black font-display text-primary dark:text-white tracking-tight">Module Catalog</h2>

                  <p className="text-xs text-gray-400 font-medium mt-1 uppercase tracking-widest">{filteredCourses.length} Learning modules identified</p>

               </div>

                 <div className="text-right">

                    <div className={`text-sm font-black py-1 px-4 rounded-full border transition-all ${mode === 'sp' ? 'text-[#0284c7] border-[#bae6fd] bg-[#e0f2fe]' : 'text-[#1e40af] border-[#bfdbfe] bg-[#dbeafe]'}`}>

                      {mode === 'sp' ? 'Self-Paced Enabled' : 'Online Live Enabled'}

                    </div>

                 </div>

            </div>



            <div className="space-y-16">

              {GROUPS.map((group) => {

                const groupCourses = filteredCourses.filter((c) => c.category === group.key);

                if (groupCourses.length === 0) return null;



                return (

                  <div key={group.key} className="relative flex flex-col h-full">

                    <div className="flex items-center gap-4 mb-8">

                       <div>

                          <h2 className={`text-xl font-black font-display tracking-tight ${group.color}`}>{group.title}</h2>

                          <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">{group.desc}</p>

                       </div>

                    </div>

                    

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                      {groupCourses.map((course, i) => (

                        <CourseCard key={i} course={course} mode={mode} setMode={setMode} />

                      ))}

                    </div>

                  </div>

                );

              })}

            </div>

            

            {filteredCourses.length === 0 && (

              <div className="py-20 text-center">

                 <span className="material-icons text-6xl text-gray-200 mb-4">search_off</span>

                 <h3 className="text-xl font-black font-display text-gray-400">No courses matching your filters</h3>

                 <button onClick={() => setFilter('all')} className="mt-4 text-accent font-bold hover:underline">Clear all filters</button>

              </div>

            )}

          </main>

        </div>

      </div>

    </div>

  );

}

