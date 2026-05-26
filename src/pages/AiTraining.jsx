import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const GLANCE_ITEMS = [
  { label: 'Duration',      value: '16 Hours', icon: 'schedule' },
  { label: 'Modules',       value: '8 Topics', icon: 'view_module' },
  { label: 'Format',        value: 'Self-Paced / Live', icon: 'devices' },
  { label: 'Level',         value: 'Beginner – Intermediate', icon: 'signal_cellular_alt' },
  { label: 'Prerequisites', value: 'None', icon: 'history_edu' },
  { label: 'Outcome',       value: 'Cert of Completion', icon: 'workspace_premium' },
];

const MODULES = [
  {
    num: 1, duration: '~2 hours',
    title: 'AI Introduction for Business',
    tag: 'Foundation · No tech background needed',
    desc: 'Demystify AI. Understand how it is reshaping industries, what opportunities and risks it creates, and how to position your organization to thrive in the AI era.',
    topics: [
      'What AI really is — and what it isn\'t', 'A brief history: from rules to learning',
      'AI use cases across industries', 'Build, buy, or partner? AI strategy basics',
      'Risks, ethics and responsible AI', 'How to evaluate AI tools and vendors',
    ],
    defaultOpen: true,
  },
  {
    num: 2, duration: '~2 hours',
    title: 'Machine Learning for Business Leaders',
    tag: 'Strategic understanding · No algorithms',
    desc: 'Understand how machines learn from data to make predictions and drive decisions — focused entirely on business application so you can sponsor, evaluate and lead ML initiatives.',
    topics: [
      'How ML models learn from data', 'Supervised vs unsupervised — in plain English',
      'Business use cases: churn, pricing, fraud detection', 'Demand forecasting and recommendations',
      'Reading and interpreting model outputs', 'Working effectively with data science teams',
    ],
  },
  {
    num: 3, duration: '~2 hours',
    title: 'Deep Learning in Practice',
    tag: 'Applied understanding · Real use cases',
    desc: 'Explore how deep learning powers image recognition, voice assistants and recommendation engines — and learn when and why to apply it over simpler approaches.',
    topics: [
      'What neural networks do and why they work', 'Computer vision: documents, photos and video',
      'Natural language processing in the enterprise', 'DL in retail, healthcare and logistics',
      'ML vs DL — when to use which', 'Cost, data, and complexity trade-offs',
    ],
  },
  {
    num: 4, duration: '~2 hours',
    title: 'LLMs & Generative AI in the Enterprise',
    tag: 'High relevance · Immediately applicable',
    desc: 'Understand how large language models like ChatGPT and Claude work, how to use them effectively with prompt engineering, and how to integrate them safely into business processes.',
    topics: [
      'How LLMs work — tokens, context, memory', 'Prompt engineering for quality business output',
      'Building internal tools with LLM APIs', 'RAG: connecting AI to company knowledge',
      'Hallucination, bias and enterprise safety', 'Governance and acceptable use policies',
    ],
  },
  {
    num: 5, duration: '~2 hours',
    title: 'Agentic AI for Business',
    tag: 'Cutting edge · Strategic leadership',
    desc: 'The next frontier — AI agents that plan, decide and act autonomously. Learn how multi-agent systems are redefining operations and how to lead their responsible adoption.',
    topics: [
      'What makes AI "agentic" — beyond chatbots', 'Multi-agent architectures explained',
      'Autonomous research and reporting', 'AI-assisted decision support systems',
      'Human-in-the-loop oversight design', 'Governance and risk for AI agents',
    ],
  },
  {
    num: 6, duration: '~2 hours',
    title: 'Data Analysis with Python',
    tag: 'Hands-on · Non-developer friendly',
    desc: 'Use Python to clean, explore and extract business insights from data — without becoming a developer. Practical exercises directly applicable to your work with spreadsheets and reports.',
    topics: [
      'Python basics for non-programmers', 'Loading and cleaning messy business data',
      'Filtering, grouping and summarizing with pandas', 'Describing statistics and trend identification',
      'Automating repetitive reporting tasks', 'Using AI co-pilots to write and debug code',
    ],
  },
  {
    num: 7, duration: '~2 hours',
    title: 'Business Dashboards & Data Visualization',
    tag: 'Insights communication · Executive-ready',
    desc: 'Transform data into compelling, actionable dashboards that drive decisions. Learn to design visualizations that communicate clearly to executives and stakeholders.',
    topics: [
      'Dashboard design: clarity over complexity', 'Choosing the right chart for the right message',
      'KPI definition and visual performance tracking', 'Power BI / Tableau — concepts and practice',
      'AI-assisted data storytelling', 'Live data connections and automated refresh',
    ],
  },
  {
    num: 8, duration: '~2 hours',
    title: 'AI-Powered Automations',
    tag: 'Operational impact · Immediate ROI',
    desc: 'Design and deploy intelligent automations that combine AI with your existing tools — eliminating manual work, reducing errors, and freeing teams for high-value activities.',
    topics: [
      'Identifying the right processes to automate', 'No-code/low-code tools: n8n, Zapier + AI',
      'Connecting AI to email, CRM, ERP and ticketing', 'Document processing and approval workflows',
      'Building your first automation — live exercise', 'Measuring ROI of automation initiatives',
    ],
  },
];

const OUTCOMES = [
  { title: 'AI Fluency',               desc: 'Speak confidently about AI with your team, executives, and vendors — without bluffing.' },
  { title: 'Data-Driven Decisions',     desc: 'Build and interpret dashboards and analyses that improve the quality of your decisions.' },
  { title: 'Workflow Automation',       desc: 'Identify and deploy AI automations that save hours of manual work per week.' },
  { title: 'Responsible AI Leadership', desc: 'Navigate AI risks, ethics, and governance with confidence and organizational credibility.' },
];

const DETAILS = [
  { key: 'Duration',      value: '16 hours (8 × 2h)', icon: 'timer' },
  { key: 'Format',        value: 'Self-Paced or Live', icon: 'devices' },
  { key: 'Level',         value: 'Beginner – Intermediate', icon: 'stairs' },
  { key: 'Prerequisites', value: 'None', icon: 'not_started' },
  { key: 'Certificate',   value: 'Yes, on completion', icon: 'verified' },
  { key: 'Language',      value: 'English', icon: 'language' },
];

const AUDIENCE = [
  'Business managers & team leads',
  'IT professionals & project managers',
  'Operations & process owners',
  'Analysts & finance professionals',
  'Executives & digital leaders',
  'Anyone curious about AI',
];

function ModuleCard({ module }) {
  const [open, setOpen] = useState(module.defaultOpen || false);

  return (
    <div className={`bg-white dark:bg-surface-dark border rounded-2xl mb-3 overflow-hidden transition-all duration-300 ${open ? 'border-[#6a1b9a] ring-1 ring-[#6a1b9a]/20' : 'border-gray-200 dark:border-white/5 hover:border-[#6a1b9a]/40'}`}>
      <div 
        className="p-5 cursor-pointer flex items-center gap-5 select-none"
        onClick={() => setOpen(!open)}
      >
        <div className={`w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center font-black text-sm transition-colors ${open ? 'bg-[#6a1b9a] text-white' : 'bg-[#f3e5f5] text-[#6a1b9a]'}`}>
          {module.num}
        </div>
        <div className="flex-grow">
          <div className="flex items-center gap-2 mb-0.5">
             <span className="text-[9px] font-black uppercase tracking-widest text-gray-400">{module.duration}</span>
             <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
             <span className="text-[9px] font-bold text-[#6a1b9a] uppercase tracking-widest leading-none">{module.tag}</span>
          </div>
          <h3 className="text-base font-black font-display text-primary dark:text-white leading-tight">{module.title}</h3>
        </div>
        <span className={`material-icons text-xl transition-transform duration-300 ${open ? 'rotate-180 text-[#6a1b9a]' : 'text-gray-300'}`}>expand_more</span>
      </div>
      
      <div className={`transition-all duration-300 ease-in-out ${open ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-5 pb-5 pt-0 border-t border-gray-50 dark:border-white/5 pt-5">
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed italic">
            {module.desc}
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-6">
            {module.topics.map((topic, i) => (
              <li key={i} className="text-xs text-gray-700 dark:text-gray-300 flex items-start gap-2">
                <span className="text-[#6a1b9a] font-bold">→</span>
                {topic}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function AiTraining() {
  return (
    <div className="bg-[#fcfaff] dark:bg-background-dark min-h-screen font-body">
      {/* Hero */}
      <header className="relative bg-[#071B34] text-white py-24 lg:py-32 overflow-hidden page-hero flex items-center justify-center">
        <div className="absolute inset-0">
           {/* Animated blobs for AI theme */}
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#6a1b9a]/20 rounded-full blur-[120px] -mr-48 -mt-48 animate-pulse"></div>
           <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/20 rounded-full blur-[100px] -ml-24 -mb-24 animate-pulse" style={{animationDelay: '1s'}}></div>
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_#fff_0.2px,_transparent_0.2px)] bg-[length:32px_32px] opacity-10"></div>
        </div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-8">
              <div className="inline-block bg-[#6a1b9a]/30 backdrop-blur-md px-4 py-1.5 rounded-full text-white text-[10px] font-black uppercase tracking-[0.25em] mb-6 border border-white/10">
                AI Training · 16 Hours · Business Oriented
              </div>
              <h1 className="text-5xl md:text-7xl font-black font-display mb-8 tracking-tighter leading-[0.95]">
                AI for <span className="text-[#ce93d8] italic">Business</span><br />
                Professionals
              </h1>
              <p className="text-lg text-blue-100/70 max-w-2xl mb-10 leading-relaxed">
                A comprehensive, hands-on training program that takes you from understanding AI to deploying it — no technical background required.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-12">
                 {['16 hours total', '8 modules', 'Self-Paced / Live', 'No coding required*'].map(tag => (
                   <span key={tag} className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-xs font-bold text-gray-300">
                     {tag}
                   </span>
                 ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <a href="#register" className="bg-[#6a1b9a] hover:bg-[#4a148c] text-white px-10 py-4 rounded-xl font-black uppercase tracking-widest text-xs transition-all shadow-2xl active:scale-95">
                  Register Interest
                </a>
                <a href="#curriculum" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-10 py-4 rounded-xl font-black uppercase tracking-widest text-xs transition-all backdrop-blur-md active:scale-95">
                  View Curriculum
                </a>
              </div>
            </div>

            <div className="lg:col-span-4">
               <div className="bg-white/5 backdrop-blur-3xl border border-white/10 p-10 rounded-[40px] shadow-2xl relative group">
                  <div className="absolute -top-6 -left-6 w-20 h-20 bg-[#6a1b9a] rounded-3xl flex items-center justify-center shadow-xl rotate-12 group-hover:rotate-0 transition-all duration-500">
                     <span className="material-icons text-white text-3xl">auto_awesome</span>
                  </div>
                  <div className="text-center mb-10">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#ce93d8] mb-2">Total Investment</p>
                    <h3 className="text-6xl font-black font-display tracking-tighter mb-2">TBD</h3>
                    <p className="text-blue-200/50 text-xs font-medium uppercase tracking-widest">Waitlist Open</p>
                  </div>
                  <hr className="border-white/10 mb-8" />
                  <div className="space-y-4">
                     <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                        <p className="text-[9px] font-black text-gray-400 uppercase mb-1">AI-Enabled Self-Paced</p>
                        <p className="text-xs font-bold text-gray-300">Launching Soon</p>
                     </div>
                     <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                        <p className="text-[9px] font-black text-gray-400 uppercase mb-1">Live Online Cohort</p>
                        <p className="text-xs font-bold text-gray-300">Waitlist Active</p>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </header>

      {/* Glance Bar */}
      <div className="bg-white dark:bg-surface-dark py-10 border-b border-gray-100 dark:border-white/10 relative z-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-y-10 gap-x-4 divide-x-0 lg:divide-x divide-gray-100 dark:divide-white/10">
            {GLANCE_ITEMS.map((item, i) => (
              <div key={i} className="flex flex-col items-center px-4">
                <span className="material-icons text-[#6a1b9a] mb-2 text-xl">{item.icon}</span>
                <p className="text-[9px] font-black uppercase tracking-widest text-gray-400 mb-0.5">{item.label}</p>
                <p className="text-sm font-black text-primary dark:text-white text-center leading-tight">{item.value}</p>
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
                <p className="text-[#6a1b9a] font-black uppercase tracking-[0.3em] text-[10px] mb-3">Mastering the future</p>
                <h2 className="text-3xl md:text-5xl font-black font-display text-primary dark:text-white mb-6 tracking-tight">Full <span className="text-gray-400">Curriculum</span></h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl text-sm leading-relaxed">
                  Each module is approximately 2 hours. Our curriculum spans from the basics of AI to advanced multi-agent systems.
                </p>
              </div>
              
              <div className="space-y-3">
                {MODULES.map((mod) => (
                  <ModuleCard key={mod.num} module={mod} />
                ))}
              </div>
            </section>

            <section className="mt-20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {OUTCOMES.map((item, i) => (
                  <div key={i} className="bg-white dark:bg-surface-dark p-8 rounded-3xl border border-gray-100 dark:border-white/5 shadow-subtle flex flex-col group hover:translate-x-1 transition-all duration-300">
                    <h4 className="text-base font-black font-display text-primary dark:text-white mb-2">{item.title}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed font-medium">{item.desc}</p>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-[10px] text-gray-400 font-bold uppercase tracking-widest italic text-center">
                * Module 6 involves light scripting. An AI co-pilot is used throughout.
              </p>
            </section>
          </div>

          <aside className="lg:w-1/3">
            <div className="sticky top-32 space-y-8">
              <div className="bg-white dark:bg-surface-dark p-8 rounded-[32px] shadow-subtle border border-gray-100 dark:border-white/5">
                <h3 className="text-base font-black font-display text-primary dark:text-white mb-8 flex items-center gap-3">
                  <span className="w-2 h-6 bg-[#6a1b9a] rounded-full"></span>
                  Program Meta
                </h3>
                
                <div className="space-y-2 mb-10">
                  {DETAILS.map((row, i) => (
                    <div key={i} className="flex items-center justify-between py-3">
                      <div className="flex items-center gap-3">
                        <span className="material-icons text-[#6a1b9a] text-lg opacity-50 group-hover:opacity-100">{row.icon}</span>
                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{row.key}</span>
                      </div>
                      <span className="text-xs font-black text-primary dark:text-white">{row.value}</span>
                    </div>
                  ))}
                </div>
                
                <a href="#register" id="register" className="block w-full text-center bg-[#6a1b9a] hover:bg-[#4a148c] text-white py-4 rounded-xl font-black uppercase tracking-widest text-[10px] transition-all shadow-xl active:scale-95 mb-4">
                  Join the Waitlist
                </a>
                <button className="block w-full text-center border-2 border-[#6a1b9a] text-[#6a1b9a] py-3.5 rounded-xl font-black uppercase tracking-widest text-[10px] transition-all hover:bg-[#6a1b9a] hover:text-white active:scale-95">
                  Request Info
                </button>
              </div>

              <div className="bg-[#f3e5f5] dark:bg-surface-dark/50 p-8 rounded-[32px] border border-[#e1bee7] dark:border-white/5">
                <h4 className="text-[10px] font-black uppercase tracking-widest text-[#6a1b9a] mb-6">Designed for</h4>
                <div className="space-y-3">
                   {AUDIENCE.map((item, i) => (
                     <div key={i} className="flex items-center gap-3 text-xs font-bold text-gray-600 dark:text-gray-400 bg-white/50 dark:bg-white/5 px-4 py-2 rounded-lg border border-white/20">
                        <span className="w-1.5 h-1.5 bg-[#6a1b9a] rounded-full"></span>
                        {item}
                     </div>
                   ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}