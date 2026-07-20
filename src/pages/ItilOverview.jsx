import React from 'react';

import { Link } from 'react-router-dom';



const TRUST_ITEMS = [

  { text: <><strong>PeopleCert</strong> Accredited ATO</> },

  { text: <><strong>AI-Enhanced</strong> E-Learning</> },

  { text: <><strong>Globally Recognized</strong> Certifications</> },

  { text: <>Registry ID: <strong>9550</strong> · Valid to 2029</> },

];



const FAMILIES = [

  {

    cls: 'itil',

    icon: 'settings',

    title: 'ITIL®',

    color: 'border-[#004b87]',

    bg: 'bg-[#eef1f5]',

    text: 'text-[#004b87]',

    subtitle: 'IT Service Management framework for the AI era. From Foundation to advanced Specialist tracks.',

    courses: [

      'ITIL Foundation (V5 & V4)',

      'ITIL Specialist (Product, Service, Experience…)',

      'ITIL Practice Manager',

      'ITIL AI Governance',

      'ITIL Foundation Bridge',

    ],

    btnLabel: 'View ITIL Courses',

    btnLink: '/itil-certification',

  },

  {

    cls: 'ai',

    icon: 'psychology',

    title: 'Artificial Intelligence',

    color: 'border-[#6a1b9a]',

    bg: 'bg-[#f3e5f5]',

    text: 'text-[#6a1b9a]',

    subtitle: 'Certifications for AI practitioners and leaders — strategy, ethics, and responsible implementation.',

    courses: [

      'AI Foundation',

      'AI Governance & Ethics',

      'AI for IT Professionals',

      'AI Strategy & Leadership',

    ],

    btnLabel: 'View AI Courses',

    btnLink: '/ai-certification',

  },

  {

    cls: 'ppm',

    icon: 'assessment',

    title: 'PPM & Agile',

    color: 'border-[#00796b]',

    bg: 'bg-[#e0f2f1]',

    text: 'text-[#00796b]',

    subtitle: 'Project & Portfolio Management and Agile delivery certifications for modern organizations.',

    courses: [

      'PMP® Preparation',

      'PMI-ACP® (Agile Certified)',

      'Scrum Master Certification',

      'Portfolio Management',

    ],

    btnLabel: 'View PPM & Agile Courses',

    btnLink: '/ppm-agile-certification',

  },

];



const ACC_CARDS = [

  {

    title: 'ITIL® 4 Accreditations',

    desc: 'Authorized to deliver comprehensive ITIL 4 training, including Specialist, Strategist, and Foundation modules.',

    registryId: '9550',

    validUntil: '19/02/2029',

    pdfHref: '/docs/9550_ITIL_Peer_Consulting_Resources.pdf',

    pdfLabel: '📄 View Official ITIL Accreditation Letter',

  },

  {

    title: 'DevOps Institute Accreditations',

    desc: 'Authorized by the DevOps Institute to deliver official DevOps Foundation programmes.',

    registryId: '9550',

    validUntil: '19/02/2029',

    pdfHref: '/docs/DevOps_Peer_Consulting.pdf',

    pdfLabel: 'View Official DevOps Accreditation Letter',

  },

];



const WHY_ITEMS = [

  {

    icon: 'smart_toy',

    title: 'AI-Powered Learning',

    desc: 'Our proprietary e-learning platform adapts to your pace, generates custom quizzes, and provides smart feedback for exam readiness.',

  },

  {

    icon: 'school',

    title: 'Live Instructor-Led',

    desc: 'Expert-led online classes with real-time interaction, case studies, and practical scenarios — not just slides.',

  },

  {

    icon: 'devices',

    title: 'Self-Paced Option',

    desc: 'Learn on your schedule with our fully AI-enabled self-paced courses, accessible anytime, anywhere.',

  },

  {

    icon: 'emoji_events',

    title: 'First-Time Pass Rate',

    desc: 'Our AI-enhanced preparation approach is designed to ensure you pass your certification exam on the first attempt.',

  },

];



export default function ItilOverview() {

  return (

    <div className="bg-white dark:bg-background-dark min-h-screen">

      {/* Hero */}

      <header className="relative bg-gradient-to-br from-[#030d1a] via-[#080f2e] to-[#150833] text-white py-24 lg:py-32 overflow-hidden text-center page-hero flex items-center justify-center">

        {/* Premium hero decoration — corner light leaks + scan lines */}

        <div className="absolute inset-0 pointer-events-none" style={{background: "radial-gradient(ellipse 65% 55% at 100% 0%, rgba(124,58,237,0.20) 0%, transparent 70%)"}} />

        <div className="absolute inset-0 pointer-events-none" style={{background: "radial-gradient(ellipse 50% 45% at 0% 100%, rgba(37,99,235,0.14) 0%, transparent 70%)"}} />

        <div className="container mx-auto px-6 lg:px-12 relative z-10 w-full">

          <div className="inline-block bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-blue-300 text-sm font-bold tracking-wider uppercase mb-6">

            Official PeopleCert Accredited Training

          </div>

          <h1 className="text-3xl md:text-4xl md:text-6xl font-black font-display mb-6 tracking-tight">

            IT Training & <span className="text-accent">Certifications</span>

          </h1>

          <p className="text-xl text-blue-100/80 max-w-3xl mx-auto mb-10 leading-relaxed font-body">

            Advance your career with globally recognized certifications in ITIL, Artificial Intelligence,

            Project Management, and Agile — delivered with an AI-enhanced learning experience.

          </p>

          <div className="flex flex-wrap justify-center gap-4">

            <a href="#families" className="bg-accent hover:bg-accent/90 text-white px-8 py-3.5 rounded-lg font-bold transition-all shadow-lg hover:shadow-accent/30 active:scale-95">

              Explore Programs

            </a>

            <a href="#accreditation" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-3.5 rounded-lg font-bold transition-all backdrop-blur-md active:scale-95">

              Our Accreditations

            </a>

          </div>

        </div>

      </header>



      {/* Trust Bar */}

      <div className="bg-white dark:bg-surface-dark border-b border-gray-100 dark:border-white/10 py-6">

        <div className="container mx-auto px-6 lg:px-12">

          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-4">

            {TRUST_ITEMS.map((item, i) => (

              <div key={i} className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">

                <span>{item.text}</span>

              </div>

            ))}

          </div>

        </div>

      </div>



      {/* Families */}

      <section id="families" className="py-16 md:py-24 bg-primary-light dark:bg-background-dark/50">

        <div className="container mx-auto px-6 lg:px-12">

          <div className="text-center max-w-3xl mx-auto mb-16">

            <p className="text-accent font-bold uppercase tracking-widest text-sm mb-3">Our Training Portfolio</p>

            <h2 className="text-[26px] sm:text-4xl md:text-5xl font-black font-display text-primary dark:text-white mb-6 tracking-tight">

              Three Certification Families

            </h2>

            <p className="text-gray-600 dark:text-gray-400 font-body leading-relaxed">

              Choose from our three core program families, each combining official accredited content

              with our proprietary AI-powered learning platform.

            </p>

          </div>



          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {FAMILIES.map((fam) => (

              <div key={fam.cls} className="bg-white dark:bg-surface-dark rounded-2xl overflow-hidden shadow-subtle border border-gray-100 dark:border-white/5 group hover:-translate-y-2 transition-all duration-300 flex flex-col h-full">

                <div className={`p-8 ${fam.bg} dark:bg-opacity-10 border-b-4 ${fam.color}`}>

                  <span className={`material-icons text-3xl md:text-4xl mb-4 ${fam.text}`}>{fam.icon}</span>

                  <h3 className="text-2xl font-black font-display text-primary dark:text-white mb-2">{fam.title}</h3>

                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed flex-grow">{fam.subtitle}</p>

                </div>

                <div className="p-8 flex flex-col flex-grow">

                  <ul className="space-y-4 mb-8 text-sm font-medium text-gray-700 dark:text-gray-300 flex-grow">

                    {fam.courses.map((course, i) => (

                      <li key={i} className="flex items-center gap-3">

                        <span className={`material-icons text-xs ${fam.text}`}>arrow_forward</span>

                        {course}

                      </li>

                    ))}

                  </ul>

                  <Link to={fam.btnLink} className={`w-full text-center inline-block py-3 rounded-lg font-bold transition-all ${fam.bg} ${fam.text} hover:opacity-80 active:scale-95 mt-auto`}>

                    {fam.btnLabel} →

                  </Link>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>



      {/* Accreditation */}

      <section id="accreditation" className="py-16 md:py-24 bg-white dark:bg-background-dark">

        <div className="container mx-auto px-6 lg:px-12">

          <div className="text-center max-w-3xl mx-auto mb-16">

            <p className="text-accent font-bold uppercase tracking-widest text-sm mb-3">Why Trust Us</p>

            <h2 className="text-[26px] sm:text-4xl md:text-5xl font-black font-display text-primary dark:text-white mb-6 tracking-tight">

              Official PeopleCert Training Partner

            </h2>

            <p className="text-gray-600 dark:text-gray-400 font-body leading-relaxed">

              Peer Consulting Resources, Inc. is an official Affiliate of IT Expert — an Accredited Training

              Organization of PeopleCert. We fulfill PeopleCert's strict requirements to deliver world-class,

              fully accredited training programmes.

            </p>

          </div>



          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

            {ACC_CARDS.map((card, i) => (

              <div key={i} className="bg-primary-light dark:bg-surface-dark p-8 rounded-2xl border-t-8 border-accent shadow-subtle flex flex-col h-full">

                <h3 className="text-xl font-black font-display text-primary dark:text-white mb-4">{card.title}</h3>

                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed flex-grow">{card.desc}</p>

                <div className="space-y-2 mb-6 flex-grow">

                  <p className="text-sm font-medium"><span className="text-gray-500">Registry ID:</span> {card.registryId}</p>

                  <p className="text-sm font-medium"><span className="text-gray-500">Valid Until:</span> {card.validUntil}</p>

                </div>

                <a href={card.pdfHref} className="inline-flex items-center gap-2 text-accent font-bold text-sm hover:underline" target="_blank" rel="noopener noreferrer">

                  <span className="material-icons text-sm">picture_as_pdf</span>

                  {card.pdfLabel}

                </a>

              </div>

            ))}

          </div>

        </div>

      </section>



      {/* Why Peer */}

      <section className="py-16 md:py-24 bg-primary-light dark:bg-background-dark/50">

        <div className="container mx-auto px-6 lg:px-12 text-center">

          <p className="text-accent font-bold uppercase tracking-widest text-sm mb-3">The Peer Advantage</p>

          <h2 className="text-[26px] sm:text-4xl md:text-5xl font-black font-display text-primary dark:text-white mb-16 tracking-tight">

            Why Learn with Peer Consulting?

          </h2>



          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {WHY_ITEMS.map((item, i) => (

              <div key={i} className="bg-white dark:bg-surface-dark p-8 rounded-2xl shadow-subtle border border-gray-100 dark:border-white/5 text-center flex flex-col h-full">

                <span className="material-icons text-3xl md:text-4xl text-accent mb-6 leading-none">{item.icon}</span>

                <h4 className="text-lg font-black font-display text-primary dark:text-white mb-3">{item.title}</h4>

                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed flex-grow">{item.desc}</p>

              </div>

            ))}

          </div>

        </div>

      </section>



      {/* Corporate Badge section - replacing custom legal text footer */}

      <section className="py-12 bg-white dark:bg-background-dark border-t border-gray-100 dark:border-white/10">

        <div className="container mx-auto px-6 lg:px-12 text-center">

          <p className="text-xs text-gray-500 dark:text-gray-500 max-w-3xl mx-auto leading-relaxed italic font-body">

            ITIL® is a registered trade mark of AXELOS Limited, used under permission of AXELOS Limited. All rights reserved.

          </p>

        </div>

      </section>

    </div>

  );

}

