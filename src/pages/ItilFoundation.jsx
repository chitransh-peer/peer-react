import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoV5 from '../assets/logos/itil-v5-foundation.svg';
import logoV4 from '../assets/logos/itil-4-foundation.png';
import logoBridge from '../assets/logos/itil-v5-bridge.svg';

const BRIDGE_LEARNING = [
  { title: "Key enhancements in ITIL (Version 5)", desc: "Understand what has changed since ITIL 4. Focus only on the new and refined concepts, terminology, and structural updates." },
  { title: "Digital product and service management evolution", desc: "Explore how the new ITIL reflects modern digital and AI-enabled environments." },
  { title: "Updated language and core concepts", desc: "Gain clarity on the updated terminology and principles, ensuring confident communication." },
  { title: "Enhanced value creation approach", desc: "Discover how ITIL (Version 5) reinforces value creation across the full stakeholder ecosystem." },
  { title: "Managing digital and AI complexity", desc: "Understand how ITIL evolved to support modern management, including the impact of AI." },
  { title: "Strengthening value-focused practice", desc: "Apply updated guidance to improve alignment, performance, and measurable outcomes." }
];

const V5_LEARNING = [
  { title: "Digital product and service management concepts", desc: "Understand the core concepts behind modern digital products and services, including value creation, continual improvement, and lifecycle management." },
  { title: "Value co-creation", desc: "Discover how value is co-created through collaboration between service providers, consumers, and stakeholders, weighing outcomes, costs, and risks." },
  { title: "The dimensions of product & service management", desc: "Delve into the four dimensions (Organizations/People, Value Streams, Information/Tech, Partners) for a holistic approach." },
  { title: "ITIL Value System", desc: "Gain an understanding of the ITIL Value System and how it brings together guiding principles, governance, and continual improvement." },
  { title: "The ITIL Guiding Principles", desc: "Learn how to apply the framework's guiding principles to make better decisions and adapt ITIL practices to real-world environments." },
  { title: "The product and service lifecycle", desc: "Develop a solid understanding of the purpose of each lifecycle activity; from discovery and design to operation, delivery and support." },
  { title: "ITIL's management practices", desc: "Explore the role of ITIL management practices and how official practice guides support consistent, effective ways of working." },
  { title: "Continual improvement", desc: "Learn how continual improvement is embedded within ITIL, covering the step-by-step approach supporting long-term success." },
  { title: "Value Stream Mapping and Management", desc: "Understand how to identify, map, and manage value streams to improve flow, visibility, and outcomes across digital services." }
];

const V4_LEARNING = [
  { title: "Service management concepts", desc: "Learn the fundamental concepts of service management. What defines a service? What are its components? What is its value to stakeholders?" },
  { title: "Service value system", desc: "Discover the framework that will help you create, deliver, and manage services, including the Service Value Chain, guiding principles, and governance." },
  { title: "Four dimensions of service management", desc: "Explore the four dimensions of effective service management: organisations and people, information and technology, partners and suppliers, and value streams and processes." },
  { title: "Guiding principles", desc: "Develop a mindset for adopting ITIL practices and adapting them to your specific needs with the seven guiding principles of ITIL 4." },
  { title: "Service Value Chain", desc: "Understand how the Service Value Chain helps organisations create value by optimising their activities and resources." },
  { title: "ITIL practices", desc: "Employ ITIL 4 practices to enable working methods aligned to your business strategy, improving the process of service development and supporting users." },
  { title: "Continuous improvement", desc: "Focus on the central ITIL 4 concept of continuous improvement, and the ways in which organisations can iterate and adapt their processes and services." },
  { title: "Service Level Agreements", desc: "Study the role of SLAs in defining and managing service quality, and the role of service level management in this context." },
  { title: "Key metrics and performance indicators", desc: "Grasp the importance of defining and tracking metrics and KPIs to measure the performance and effectiveness of IT services." }
];

export default function ItilFoundation() {
  const [activeTab, setActiveTab] = useState('v5');

  return (
    <div className="bg-[#f8fafc] dark:bg-background-dark min-h-screen">
      {/* Hero */}
      <header className="relative bg-[#071B34] text-white py-24 overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[length:32px_32px]"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="inline-block bg-accent/20 backdrop-blur-md px-4 py-1 rounded-full text-accent-blue text-[10px] font-black uppercase tracking-[0.2em] mb-6 border border-accent/20">
            Professional Certification
          </div>
          <h1 className="text-4xl md:text-6xl font-black font-display mb-6 tracking-tight">ITIL® <span className="text-accent underline decoration-white/10 underline-offset-8">Foundation</span></h1>
          <p className="text-xl text-blue-100/70 max-w-2xl mx-auto mb-12 font-body leading-relaxed">
            Choose your certification path to begin your IT Service Management journey in the AI era.
          </p>
          
          <div className="inline-flex flex-wrap justify-center bg-white/5 backdrop-blur-xl p-1.5 rounded-2xl border border-white/10 shadow-2xl">
            <button 
              onClick={() => setActiveTab('v5')}
              className={`flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 rounded-xl text-[10px] md:text-sm font-black uppercase tracking-widest transition-all ${activeTab === 'v5' ? 'bg-white text-primary shadow-xl scale-105' : 'text-blue-100/50 hover:text-white'}`}
            >
              ITIL V5 Foundation
            </button>
            <button 
              onClick={() => setActiveTab('v4')}
              className={`flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 rounded-xl text-[10px] md:text-sm font-black uppercase tracking-widest transition-all ${activeTab === 'v4' ? 'bg-white text-primary shadow-xl scale-105' : 'text-blue-100/50 hover:text-white'}`}
            >
              ITIL 4 Foundation
            </button>
            <button 
              onClick={() => setActiveTab('bridge')}
              className={`flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 rounded-xl text-[10px] md:text-sm font-black uppercase tracking-widest transition-all ${activeTab === 'bridge' ? 'bg-white text-primary shadow-xl scale-105' : 'text-blue-100/50 hover:text-white'}`}
            >
              V5 Bridge
            </button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 lg:px-12 py-20">
        {/* Exclusive Note */}
        <div className="bg-white dark:bg-surface-dark border-l-8 border-accent p-8 rounded-2xl shadow-subtle mb-20 flex flex-col md:flex-row gap-8 items-center group overflow-hidden relative">
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
          <div className="bg-accent/10 w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0">
             <span className="material-icons text-accent text-3xl">auto_awesome</span>
          </div>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed relative z-10">
            <span className="font-black text-primary dark:text-white uppercase tracking-widest text-xs block mb-2">Peer Consulting Exclusive</span>
            Our {activeTab === 'bridge' ? 'ITIL V5 Bridge' : `ITIL ${activeTab === 'v5' ? 'V5' : '4'} Foundation`} courses are enhanced with our proprietary <span className="text-accent font-bold">AI-based e-learning ecosystem</span>, providing dynamic problem-solving scenarios and adaptive quizzes to ensure you pass your exam on the first try.
          </p>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24 items-center">
          <div className="lg:col-span-8">
            <h2 className="text-3xl md:text-5xl font-black font-display text-primary dark:text-white mb-8 tracking-tight leading-[1.1]">
              {activeTab === 'v5' 
                ? "Build a strong foundation in digital product and service management." 
                : activeTab === 'bridge'
                ? "Fast-track your upgrade to ITIL V5 Foundation."
                : "Advance your career in IT service management."}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed font-body">
              {activeTab === 'v5'
                ? "Learn the core concepts and practices needed to deliver value across the full lifecycle in today's complex, AI-enabled environments."
                : activeTab === 'bridge'
                ? "A focused route for ITIL 4 certification holders to upgrade, concentrating only on the updates introduced in ITIL Foundation V5."
                : "Crafted by the creators of ITIL, advance your career with the official eLearning course and exam voucher, all in one bundle!"}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <div className="group">
                  <div className="w-10 h-1 object-cover bg-accent mb-4 group-hover:w-full transition-all duration-500"></div>
                  <h4 className="text-sm font-black text-primary dark:text-white uppercase tracking-widest mb-3">Industry Standard</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">Showcase your ability to effectively manage digital products and services in fast-moving environments.</p>
               </div>
               <div className="group">
                  <div className="w-10 h-1 object-cover bg-accent mb-4 group-hover:w-full transition-all duration-500"></div>
                  <h4 className="text-sm font-black text-primary dark:text-white uppercase tracking-widest mb-3">Employers' Choice</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">Certify your expertise in managing digital products and services, making you the preferred choice.</p>
               </div>
               <div className="group">
                  <div className="w-10 h-1 object-cover bg-accent mb-4 group-hover:w-full transition-all duration-500"></div>
                  <h4 className="text-sm font-black text-primary dark:text-white uppercase tracking-widest mb-3">Global Growth</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">Equip yourself with in-demand skills to accelerate your growth and qualify for attractive roles worldwide.</p>
               </div>
            </div>
          </div>
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative group cursor-pointer p-6">
              <div className="absolute inset-0 bg-accent/20 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500 animate-pulse"></div>
              <img 
                src={activeTab === 'v5' ? logoV5 : activeTab === 'bridge' ? logoBridge : logoV4} 
                alt={`ITIL ${activeTab === 'bridge' ? 'V5 Bridge' : activeTab === 'v5' ? 'V5' : '4'} Foundation Logo`} 
                className="relative w-80 h-80 object-contain transition-transform group-hover:scale-105 duration-500"
              />
            </div>
          </div>
        </div>

        {/* At a glance */}
        <section className="mb-32">
          <div className="text-center mb-12">
            <p className="text-accent font-black uppercase tracking-[0.3em] text-[10px] mb-3">Quick Overview</p>
            <h2 className="text-3xl font-black font-display text-primary dark:text-white tracking-tight">Certification <span className="text-gray-400">At a Glance</span></h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Track Purpose", value: "Your entry point into ITIL", icon: "door_front" },
              { label: "Target Audience", value: "Any career stage", icon: "groups" },
              { label: "Recognition", value: "Globally recognized Market Standard", icon: "public" },
              { label: "Language", value: "Exam available in English", icon: "translate" }
            ].map((item, i) => (
              <div key={i} className="bg-white dark:bg-surface-dark border border-gray-100 dark:border-white/5 rounded-3xl p-8 text-center shadow-subtle hover:-translate-y-2 transition-all group">
                <span className="material-icons text-[#071B34] dark:text-blue-400 mb-4 text-3xl opacity-50 group-hover:opacity-100 group-hover:text-accent transition-all">{item.icon}</span>
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">{item.label}</p>
                <p className="text-sm font-black text-primary dark:text-white leading-tight">{item.value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Learn Section */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <p className="text-accent font-black uppercase tracking-[0.3em] text-[10px] mb-3">Course Curriculum</p>
            <h2 className="text-3xl md:text-5xl font-black font-display text-primary dark:text-white tracking-tight">What You Will <span className="text-gray-400">Master</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(activeTab === 'v5' ? V5_LEARNING : activeTab === 'bridge' ? BRIDGE_LEARNING : V4_LEARNING).map((card, i) => (
              <div key={i} className="bg-white dark:bg-surface-dark rounded-3xl p-8 border-b-4 border-transparent hover:border-accent transition-all shadow-subtle flex flex-col group">
                <div className="w-10 h-10 bg-primary-light dark:bg-white/5 rounded-xl flex items-center justify-center mb-6 text-accent group-hover:bg-accent group-hover:text-white transition-all">
                  <span className="font-black text-sm">{i + 1}</span>
                </div>
                <h4 className="text-lg font-black font-display text-primary dark:text-white mb-4 leading-tight">{card.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills & Career */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div className="bg-[#071B34] text-white p-12 rounded-[40px] shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-[100px] group-hover:bg-accent/20 transition-all duration-700"></div>
            <h3 className="text-sm font-black uppercase tracking-[0.3em] text-accent-blue mb-8 relative z-10">Skills To Be Acquired</h3>
            <div className="space-y-8 relative z-10">
              {[
                { title: "Lifecycle thinking", desc: "Embrace a 'lifecycle mindset' to make smarter decisions, anticipate changes, and keep teams aligned." },
                { title: "Continuous improvement", desc: "Build practical skills to embed continual improvement into everyday work and swiftly adapt to change." },
                { title: "Collaborative, value-focused", desc: "Strengthen collaboration by focusing on shared outcomes, transparency, and modern delivery." }
              ].map((skill, i) => (
                <div key={i} className="flex gap-6 group/item">
                  <span className="material-icons-outlined text-accent group-hover/item:scale-110 transition-transform">check_circle</span>
                  <div>
                    <h4 className="text-lg font-black font-display mb-2">{skill.title}</h4>
                    <p className="text-blue-100/60 text-sm leading-relaxed">{skill.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white dark:bg-surface-dark p-12 rounded-[40px] shadow-subtle border border-gray-100 dark:border-white/5">
            <h3 className="text-sm font-black uppercase tracking-[0.3em] text-accent mb-8">Career Opportunities</h3>
            <div className="flex flex-wrap gap-3">
              {[
                "IT Specialist Development", "IT Operations Specialist", "IT Development Manager",
                "Service Operations Manager", "Chief Digital Officer", "IT Project Manager",
                "Transformation Manager", "Digital Product Manager", "Experience Manager",
                "Product Owner", "Customer Success Manager", "Digital Product Designer"
              ].map((tag, i) => (
                <span key={i} className="bg-primary-light dark:bg-white/5 border border-gray-100 dark:border-white/10 text-primary dark:text-white px-5 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest flex items-center shadow-sm hover:border-accent/40 transition-colors cursor-default">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></span>
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="mt-12 p-8 bg-[#fdf2e9] dark:bg-[#6a1b9a]/5 rounded-3xl border border-[#fae5d3] dark:border-white/5">
               <h4 className="text-xs font-black text-[#e67e22] uppercase tracking-[0.2em] mb-4">Enterprise Standard</h4>
               <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-body italic">
                 "ITIL certification is mandatory for all our service management staff. Peer's AI-enhanced approach ensures they don't just pass, but truly understand the framework."
               </p>
               <p className="text-[10px] font-black text-primary dark:text-white mt-4 uppercase tracking-widest">— Digital Operations Director, Fortune 500</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-accent text-white rounded-[50px] p-16 text-center shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[length:30px_30px] opacity-20"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black font-display mb-6 tracking-tighter">Ready to master <span className="text-primary italic">ITIL</span>?</h2>
            <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto font-medium">Join our next AI-enhanced training cohort and secure your globally recognized certification.</p>
            <Link to="/contact" className="inline-block bg-[#071B34] hover:bg-white hover:text-primary text-white font-black py-5 px-12 rounded-2xl transition-all shadow-xl active:scale-95 text-sm uppercase tracking-widest">
              View Schedule & Pricing
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
