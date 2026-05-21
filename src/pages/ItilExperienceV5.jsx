import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logos/itil-v5-experience.svg';

const LEARN_POINTS = [
  { icon: "🧠", title: "Experience as human response", desc: "Learn how experience arises from anticipation, perception, and evaluation, shaping engagement, trust, and value co-creation over time." },
  { icon: "💡", title: "Digital experience and its value", desc: "Develop a clear understanding of digital experience as feelings, thoughts, and bodily responses to interactions with digital products and services, and why it matters for value and trust." },
  { icon: "👥", title: "Stakeholder perspectives", desc: "Explore the roles, needs, and tensions of users, customers, consumer sponsors, and provider roles, and how these shape experience in real journeys." },
  { icon: "🔄", title: "Experience in the Lifecycle", desc: "Discover how service journeys, experience moments, and functional and relational interactions emerge across lifecycle stages." },
  { icon: "⚡", title: "Experience drivers", desc: "Understand how experience is shaped across The ITIL Four Dimensions of Product and Service Management and how each dimension contributes to improving experience." },
  { icon: "📊", title: "Experience capture", desc: "Examine experience capture, the experience domains, and why metrics are hypotheses that reflect only part of the human experience." },
  { icon: "🛡️", title: "Trustworthiness and coherence", desc: "Analyze how to apply criteria such as trustworthiness and coherence to evaluate experience evidence." },
  { icon: "📈", title: "Continual experience improvement", desc: "Gain an in-depth understanding of continual experience improvement using the notice-interpret-hypothesize-experiment approach." },
  { icon: "🤖", title: "AI and experience", desc: "Explore how AI affects trust, perception, and experience, and how AI governance and digital ethics ensure responsible and transparent use." }
];

const SKILLS = [
  { title: "Experience accountability", desc: "Organize roles, responsibilities, and accountability for experience across stakeholders and service journey stages." },
  { title: "Trust-Centered Design", desc: "Learn how to embed transparency, emotional clarity, and psychological safety into digital interactions." },
  { title: "Evidence-informed decision making", desc: "Develop the expertise to work with experience capture, recognize experience evidence, and use narrative and numerical signals." }
];

const CAREER_TAGS = [
  "Experience Manager", "Customer Experience Designer", "Digital Experience Lead",
  "Service Designer", "UX Strategist", "Product Owner", "Customer Success Manager",
  "Service Improvement Manager", "Digital Product Designer", "IT Service Manager",
  "Transformation Manager", "Service Owner", "Chief Digital Officer", "Digital Product Manager", "Enterprise Architect"
];

export default function ItilExperienceV5() {
  return (
    <div className="bg-[#f8fafc] dark:bg-background-dark min-h-screen font-body">
      {/* Hero Section */}
      <header className="relative bg-[#071B34] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_#4DA3FF_1px,_transparent_1px)] bg-[length:32px_32px]"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-md px-4 py-1 rounded-full text-accent-blue text-[10px] font-black uppercase tracking-[0.2em] mb-6 border border-accent/30">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                PeopleCert Certified
              </div>
              <h1 className="text-4xl md:text-6xl font-black font-display mb-6 tracking-tight leading-tight">
                ITIL® Experience <br />
                <span className="text-accent">(Version 5)</span>
              </h1>
              <p className="text-xl text-blue-100/70 max-w-2xl mb-10 leading-relaxed">
                Embed human-centred and AI-aware design into digital products and services, 
                aligning trust, perception, and value across the full lifecycle.
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                {["🏆 Industry-recognized", "🌍 Globally recognized", "✨ Excel in experience management", "🇬🇧 Exam in English"].map((pill, i) => (
                  <span key={i} className="bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-sm font-medium text-blue-100/80">
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
                    alt="ITIL V5 Experience Logo" 
                    className="relative w-80 h-80 object-contain transition-transform group-hover:scale-105 duration-700"
                  />
               </div>
            </div>
          </div>
        </div>
      </header>

      {/* Value Strip */}
      <section className="bg-[#0b214a] border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="py-10 md:pr-10">
              <div className="w-8 h-1 bg-accent mb-4 rounded-full"></div>
              <h3 className="text-white font-bold mb-2">Industry-recognized certification</h3>
              <p className="text-blue-100/50 text-sm">Showcase your ability to deliver, manage and improve digital services from start to finish.</p>
            </div>
            <div className="py-10 md:px-10">
              <div className="w-8 h-1 bg-accent mb-4 rounded-full"></div>
              <h3 className="text-white font-bold mb-2">Employers' first choice</h3>
              <p className="text-blue-100/50 text-sm">Certify your expertise in managing digital products, making you the preferred choice in today's landscape.</p>
            </div>
            <div className="py-10 md:pl-10">
              <div className="w-8 h-1 bg-accent mb-4 rounded-full"></div>
              <h3 className="text-white font-bold mb-2">New career opportunities</h3>
              <p className="text-blue-100/50 text-sm">Equip yourself with in-demand skills to accelerate your growth and qualify for attractive roles.</p>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-6 py-20">
        {/* At a Glance */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-black font-display text-primary dark:text-white tracking-tight">At a <span className="text-accent underline decoration-accent/20 underline-offset-8">Glance</span></h2>
            <div className="h-px flex-grow bg-gradient-to-r from-gray-200 to-transparent dark:from-white/10"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🔗", label: "Suitable for", value: "Any career stage" },
              { icon: "✨", label: "Key benefit", value: "Excel in experience management" },
              { icon: "🌐", label: "Globally recognized", value: "In the market" },
              { icon: "📝", label: "Exam available", value: "In English" }
            ].map((item, i) => (
              <div key={i} className="bg-white dark:bg-surface-dark p-8 rounded-2xl shadow-subtle border border-gray-100 dark:border-white/5 hover:-translate-y-1 transition-all group">
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
              <div key={i} className="relative group p-8 bg-white dark:bg-surface-dark rounded-3xl shadow-subtle border border-gray-100 dark:border-white/5 hover:border-accent/30 transition-all overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-black font-display text-primary dark:text-white mb-3">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-32 bg-primary dark:bg-surface-dark dark:border dark:border-white/5 rounded-[40px] p-12 text-white relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[100px] group-hover:bg-accent/20 transition-all duration-700"></div>
          <div className="flex items-center gap-4 mb-12 relative z-10">
            <h2 className="text-3xl font-black font-display tracking-tight">Skills to <span className="text-accent">Acquire</span></h2>
            <div className="h-px flex-grow bg-white/10"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
            {SKILLS.map((item, i) => (
              <div key={i} className="flex gap-6 p-6 rounded-3xl hover:bg-white/5 transition-all group/item">
                <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center text-accent flex-shrink-0 group-hover/item:scale-110 transition-transform">
                  <span className="material-icons text-xl">check</span>
                </div>
                <div>
                  <h3 className="text-lg font-black font-display mb-2">{item.title}</h3>
                  <p className="text-blue-100/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Career Opportunities */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-black font-display text-primary dark:text-white tracking-tight">Career <span className="text-accent underline decoration-accent/20 underline-offset-8">Opportunities</span></h2>
            <div className="h-px flex-grow bg-gradient-to-r from-gray-200 to-transparent dark:from-white/10"></div>
          </div>
          <div className="flex flex-wrap gap-3">
            {CAREER_TAGS.map((tag, i) => (
              <span key={i} className="bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 text-primary dark:text-white px-5 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest flex items-center shadow-sm hover:border-accent/40 transition-colors cursor-default">
                <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></span>
                {tag}
              </span>
            ))}
          </div>
        </section>

        {/* Exam Details */}
        <section className="mb-12">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-black font-display text-primary dark:text-white tracking-tight">Exam <span className="text-accent underline decoration-accent/20 underline-offset-8">Details</span></h2>
            <div className="h-px flex-grow bg-gradient-to-r from-gray-200 to-transparent dark:from-white/10"></div>
          </div>
          <div className="bg-green-50 dark:bg-green-900/10 border border-green-100 dark:border-green-800/30 text-green-800 dark:text-green-400 p-4 rounded-xl text-sm font-medium inline-flex items-center gap-3 mb-8">
            <span className="material-icons">menu_book</span>
            Open book exam — official ITIL materials permitted during the exam
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "📋", value: "40", label: "Questions" },
              { icon: "☑️", value: "Multiple choice", label: "Format" },
              { icon: "⏱️", value: "90 min", label: "Duration" },
              { icon: "🎯", value: "70% minimum", label: "Pass Score", highlight: true }
            ].map((item, i) => (
              <div key={i} className={`p-8 rounded-3xl text-center shadow-subtle border transition-all ${item.highlight ? 'bg-primary border-accent text-white scale-105 shadow-xl' : 'bg-white dark:bg-surface-dark border-gray-100 dark:border-white/5'}`}>
                <div className="text-3xl mb-4">{item.icon}</div>
                <p className={`font-display font-black text-xl mb-1 ${item.highlight ? 'text-white' : 'text-primary dark:text-white'}`}>{item.value}</p>
                <p className={`text-xs font-bold uppercase tracking-widest ${item.highlight ? 'text-white/60' : 'text-gray-400'}`}>{item.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-xs text-gray-400 italic">📗 Open book* — permitted materials may apply. Check exam essentials for details.</p>
        </section>
      </main>

      {/* Course CTA */}
      <footer className="container mx-auto px-6 pb-20">
        <div className="bg-accent text-white rounded-[50px] p-16 text-center shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[length:30px_30px] opacity-20"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-black font-display mb-6 tracking-tighter">Ready to Certify in <span className="text-primary italic">Experience</span>?</h2>
            <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto font-medium">Join our next ITIL V5 Experience cohort. High pass rates guaranteed with Peer's ecosystem.</p>
            <Link to="/contact" className="inline-block bg-[#071B34] hover:bg-white hover:text-primary text-white font-black py-5 px-12 rounded-2xl transition-all shadow-xl active:scale-95 text-sm uppercase tracking-widest">
              Enroll Now
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
