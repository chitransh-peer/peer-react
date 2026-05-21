import React from 'react';
import { Link } from 'react-router-dom';

export default function Sandbox() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary-light text-primary-text py-20 lg:py-28 relative overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

        {/* Soft edge gradient flares */}
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -left-20 top-20 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* ── Blob 1 — roams full block, starts center-left ── */}
        <div
          className="blob-float-1 absolute pointer-events-none"
          style={{ top: '50%', left: '50%', width: 130, height: 130,
            marginTop: -65, marginLeft: -65,
            background: 'radial-gradient(circle at 40% 40%, #e0f2fe, #bae6fd)',
            opacity: 0.6,
          }}
        />

        {/* ── Blob 2 — roams full block, starts center-right ── */}
        <div
          className="blob-float-2 absolute pointer-events-none"
          style={{ top: '50%', left: '50%', width: 100, height: 100,
            marginTop: -50, marginLeft: -50,
            background: 'linear-gradient(135deg, #bae6fd, #e0f2fe)',
            opacity: 0.5,
          }}
        />

        {/* ── Blob 3 — roams full block, starts center-top ── */}
        <div
          className="blob-float-3 absolute pointer-events-none"
          style={{ top: '50%', left: '50%', width: 115, height: 115,
            marginTop: -57, marginLeft: -57,
            background: 'linear-gradient(160deg, #bae6fd 0%, #e0f2fe 100%)',
            opacity: 0.45,
          }}
        />



        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">Our Services</h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Expert IT solutions tailored for your enterprise. We bridge the gap between complex technology and tangible business results.
          </p>
        </div>
      </section>


      {/* Why Choose Us */}
      <section className="py-16 bg-white border-b border-border-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-3 py-1 bg-accent-blue/10 text-accent-blue rounded-full text-sm font-semibold mb-4 tracking-wide uppercase">Why Choose Us</span>
          <h2 className="text-3xl font-semibold text-primary-text mb-6">Built on Expertise</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            We are <strong className="text-primary-text font-bold">60+ professionals</strong> — software engineers, program and project managers, business analysts, designers, and quality analysts with more than <strong className="text-primary-text font-bold">15 years of experience</strong> in delivering superior services and products. We align strategy to implementation and apply the right mix of technology to add value to our clients.
          </p>
        </div>
      </section>

      {/* Core Capabilities — 3 floating dark-blue + 3 light */}
      <section className="py-20 bg-background-light overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary-text">Core Capabilities</h2>
            <div className="w-20 h-1 bg-accent-blue mx-auto mt-4 rounded-full"></div>
          </div>

          {/* --- 3 FLOATING DARK BLUE CARDS --- */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">

            {/* Floating Card 1 — Software App Services */}
            <div
              className="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 cursor-default"
              style={{ background: 'linear-gradient(135deg, #0d2248 0%, #1a3a6e 50%, #4DA3FF 100%)' }}
            >
              <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-400/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-indigo-500/20 rounded-full blur-2xl"></div>
              <div className="relative z-10 p-8 flex flex-col h-full">
                <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors border border-white/20">
                  <span className="material-icons-outlined text-3xl text-white">code</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Software Application Services</h3>
                <p className="text-blue-100 mb-6 flex-grow leading-relaxed text-sm">
                  We develop custom applications that fulfill your business requirements using existing and emerging technologies.
                </p>
                <ul className="space-y-2 border-t border-white/20 pt-5">
                  <li className="flex items-start text-sm text-blue-200"><span className="material-icons-outlined text-blue-300 text-sm mr-2 mt-0.5">check_circle</span>Custom Application Development</li>
                  <li className="flex items-start text-sm text-blue-200"><span className="material-icons-outlined text-blue-300 text-sm mr-2 mt-0.5">check_circle</span>Emerging Technology Integration</li>
                  <li className="flex items-start text-sm text-blue-200"><span className="material-icons-outlined text-blue-300 text-sm mr-2 mt-0.5">check_circle</span>Scalable Enterprise Solutions</li>
                </ul>
              </div>
            </div>

            {/* Floating Card 2 — Digital Transformation */}
            <div
              className="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 cursor-default"
              style={{ background: 'linear-gradient(135deg, #0a1e42 0%, #1a3a6e 40%, #0e6ea6 100%)' }}
            >
              <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-24 bg-blue-300/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 right-0 w-36 h-36 bg-indigo-400/15 rounded-full blur-2xl"></div>
              <div className="relative z-10 p-8 flex flex-col h-full">
                <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors border border-white/20">
                  <span className="material-icons-outlined text-3xl text-white">transform</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Digital Transformation</h3>
                <p className="text-blue-100 mb-6 flex-grow leading-relaxed text-sm">
                  We help drive your transformation and innovation agenda by building programs that help you operate stronger today and prepare for tomorrow.
                </p>
                <ul className="space-y-2 border-t border-white/20 pt-5">
                  <li className="flex items-start text-sm text-blue-200"><span className="material-icons-outlined text-blue-300 text-sm mr-2 mt-0.5">check_circle</span>Innovation Agenda &amp; Roadmapping</li>
                  <li className="flex items-start text-sm text-blue-200"><span className="material-icons-outlined text-blue-300 text-sm mr-2 mt-0.5">check_circle</span>Process Modernization</li>
                  <li className="flex items-start text-sm text-blue-200"><span className="material-icons-outlined text-blue-300 text-sm mr-2 mt-0.5">check_circle</span>Future-Ready Program Design</li>
                </ul>
              </div>
            </div>

            {/* Floating Card 3 — Staffing */}
            <div
              className="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 cursor-default"
              style={{ background: 'linear-gradient(135deg, #0d2248 0%, #1e4080 50%, #4DA3FF 100%)' }}
            >
              <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>
              <div className="absolute -top-10 left-0 w-40 h-40 bg-blue-500/15 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-5 -right-5 w-28 h-28 bg-sky-400/20 rounded-full blur-2xl"></div>
              <div className="relative z-10 p-8 flex flex-col h-full">
                <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors border border-white/20">
                  <span className="material-icons-outlined text-3xl text-white">people</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Staffing</h3>
                <p className="text-blue-100 mb-6 flex-grow leading-relaxed text-sm">
                  We help you hire exceptional talent — individuals or teams — when you need it. We assume end-to-end ownership and accountability throughout the hiring process.
                </p>
                <ul className="space-y-2 border-t border-white/20 pt-5">
                  <li className="flex items-start text-sm text-blue-200"><span className="material-icons-outlined text-blue-300 text-sm mr-2 mt-0.5">check_circle</span>Individual &amp; Team Placement</li>
                  <li className="flex items-start text-sm text-blue-200"><span className="material-icons-outlined text-blue-300 text-sm mr-2 mt-0.5">check_circle</span>End-to-End Talent Ownership</li>
                  <li className="flex items-start text-sm text-blue-200"><span className="material-icons-outlined text-blue-300 text-sm mr-2 mt-0.5">check_circle</span>On-Demand Resource Scaling</li>
                </ul>
              </div>
            </div>

          </div>

          {/* --- 3 REGULAR LIGHT CARDS --- */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Business Consulting */}
            <div className="group bg-white p-8 rounded-lg border border-border-light hover:border-accent-blue hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col h-full">
              <div className="w-14 h-14 bg-accent-blue/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent-blue group-hover:text-white transition-colors text-accent-blue">
                <span className="material-icons-outlined text-3xl">business_center</span>
              </div>
              <h3 className="text-xl font-bold text-primary-text mb-4">Business Consulting / Advisory</h3>
              <p className="text-slate-600 mb-6 flex-grow leading-relaxed">
                Peer Consulting practices radical transparency, actively infusing clarity and accuracy into every communication and decision-making process.
              </p>
              <ul className="space-y-2 border-t border-border-light pt-6">
                <li className="flex items-start text-sm text-slate-600"><span className="material-icons-outlined text-accent-blue text-sm mr-2 mt-0.5">check_circle</span>Radical Transparency &amp; Clarity</li>
                <li className="flex items-start text-sm text-slate-600"><span className="material-icons-outlined text-accent-blue text-sm mr-2 mt-0.5">check_circle</span>Strategic Decision-Making</li>
                <li className="flex items-start text-sm text-slate-600"><span className="material-icons-outlined text-accent-blue text-sm mr-2 mt-0.5">check_circle</span>Change Management</li>
              </ul>
            </div>

            {/* Systems Integration */}
            <div className="group bg-white p-8 rounded-lg border border-border-light hover:border-accent-blue hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col h-full">
              <div className="w-14 h-14 bg-accent-blue/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent-blue group-hover:text-white transition-colors text-accent-blue">
                <span className="material-icons-outlined text-3xl">device_hub</span>
              </div>
              <h3 className="text-xl font-bold text-primary-text mb-4">Systems Integration</h3>
              <p className="text-slate-600 mb-6 flex-grow leading-relaxed">
                We help you manage and deliver your critical IT programs and projects with analysis, technical and governance expertise throughout the engagement.
              </p>
              <ul className="space-y-2 border-t border-border-light pt-6">
                <li className="flex items-start text-sm text-slate-600"><span className="material-icons-outlined text-accent-blue text-sm mr-2 mt-0.5">check_circle</span>Critical IT Program Delivery</li>
                <li className="flex items-start text-sm text-slate-600"><span className="material-icons-outlined text-accent-blue text-sm mr-2 mt-0.5">check_circle</span>Technical &amp; Governance Expertise</li>
                <li className="flex items-start text-sm text-slate-600"><span className="material-icons-outlined text-accent-blue text-sm mr-2 mt-0.5">check_circle</span>Systems Analysis &amp; Architecture</li>
              </ul>
            </div>

            {/* Quality Assurance */}
            <div className="group bg-white p-8 rounded-lg border border-border-light hover:border-accent-blue hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col h-full">
              <div className="w-14 h-14 bg-accent-blue/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent-blue group-hover:text-white transition-colors text-accent-blue">
                <span className="material-icons-outlined text-3xl">verified_user</span>
              </div>
              <h3 className="text-xl font-bold text-primary-text mb-4">Quality Assurance</h3>
              <p className="text-slate-600 mb-6 flex-grow leading-relaxed">
                We provide the assurance that your organization deserves through engineering-led QA, solutions assessment, and validation.
              </p>
              <ul className="space-y-2 border-t border-border-light pt-6">
                <li className="flex items-start text-sm text-slate-600"><span className="material-icons-outlined text-accent-blue text-sm mr-2 mt-0.5">check_circle</span>Engineering-Led QA</li>
                <li className="flex items-start text-sm text-slate-600"><span className="material-icons-outlined text-accent-blue text-sm mr-2 mt-0.5">check_circle</span>Solutions Assessment &amp; Validation</li>
                <li className="flex items-start text-sm text-slate-600"><span className="material-icons-outlined text-accent-blue text-sm mr-2 mt-0.5">check_circle</span>Performance &amp; Compliance Testing</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ITIL Training Section */}
      <section className="py-16 bg-accent-blue/5 border-y border-accent-blue/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <span className="inline-block px-3 py-1 bg-accent-blue/10 text-accent-blue rounded-full text-sm font-semibold mb-4 tracking-wide uppercase">New Service</span>
              <h2 className="text-3xl font-bold text-primary-text mb-6">ITIL Training</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                Peer consulting is now providing comprehensive training for ITIL (Information Technology Infrastructure Library).
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Our training programs are designed to help IT professionals and organizations adopt best practices for aligning IT services with real business needs.
              </p>
              <div className="flex flex-wrap gap-6">
                <Link to="/itil-overview" className="inline-flex items-center text-accent-blue hover:text-primary-text transition-colors font-semibold">
                  ITIL Overview <span className="material-icons-outlined ml-1 text-sm">arrow_forward</span>
                </Link>
                <Link to="/itil-certification" className="inline-flex items-center text-accent-blue hover:text-primary-text transition-colors font-semibold">
                  Certification Path <span className="material-icons-outlined ml-1 text-sm">arrow_forward</span>
                </Link>
                <Link to="/itil-foundation" className="inline-flex items-center text-accent-blue hover:text-primary-text transition-colors font-semibold">
                  ITIL Foundation <span className="material-icons-outlined ml-1 text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 w-full">
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-border-light relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent-blue/10 rounded-bl-full -z-0 pointer-events-none"></div>
                <h3 className="text-xl font-bold text-primary-text mb-6 relative z-10">Why Choose Our ITIL Training?</h3>
                <ul className="space-y-5 relative z-10">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent-blue/10 flex items-center justify-center mr-4 mt-0.5">
                      <span className="material-icons-outlined text-accent-blue text-sm">verified</span>
                    </div>
                    <span className="text-slate-600 flex-grow pt-1">Certified &amp; Experienced Expert Instructors</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent-blue/10 flex items-center justify-center mr-4 mt-0.5">
                      <span className="material-icons-outlined text-accent-blue text-sm">menu_book</span>
                    </div>
                    <span className="text-slate-600 flex-grow pt-1">Comprehensive study materials &amp; modern mock tests</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent-blue/10 flex items-center justify-center mr-4 mt-0.5">
                      <span className="material-icons-outlined text-accent-blue text-sm">handshake</span>
                    </div>
                    <span className="text-slate-600 flex-grow pt-1">Ongoing post-certification support and community</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Lifecycle */}
      <section className="py-20 bg-white border-y border-border-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary-text">Our Project Lifecycle</h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              We follow a structured, proven methodology to ensure transparency and success at every stage of engagement.
            </p>
          </div>
          <div className="relative reveal workflow-container">
            <div className="hidden md:block absolute top-[2rem] left-0 w-full h-1 bg-border-light -translate-y-1/2 rounded-full z-0 overflow-hidden">
              <div className="h-full bg-accent-blue workflow-line-fill rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
              {[
                { icon: 'lightbulb', label: 'Strategy', desc: 'Requirements gathering and roadmap planning.' },
                { icon: 'architecture', label: 'Architecture', desc: 'System design and technology selection.' },
                { icon: 'code_off', label: 'Development', desc: 'Iterative coding and feature implementation.' },
                { icon: 'bug_report', label: 'QA', desc: 'Rigorous testing and bug resolution.' },
                { icon: 'rocket_launch', label: 'Deployment', desc: 'Go-live support and maintenance.' },
              ].map((step, i) => (
                <div key={i} className="flex flex-col items-center text-center group cursor-default workflow-node">
                  <div className="w-16 h-16 rounded-full bg-white border-2 border-accent-blue text-accent-blue flex items-center justify-center shadow-md mb-6 relative group-hover:bg-accent-blue group-hover:text-white transition-colors duration-300">
                    <span className="material-icons-outlined text-2xl">{step.icon}</span>
                    {i < 4 && <div className="md:hidden absolute -bottom-8 h-8 w-1 bg-accent-blue"></div>}
                  </div>
                  <h4 className="text-lg font-bold text-primary-text mb-2 group-hover:text-accent-blue transition-colors duration-300">{step.label}</h4>
                  <p className="text-sm text-slate-600">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-light text-primary-text py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to elevate your IT strategy?</h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Connect with our team to discuss your project needs and discover how Peer Consulting Resources can drive your business forward.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="bg-primary text-white hover:bg-primary-dark font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
              Start a Conversation
            </Link>
            <Link to="/blogs" className="bg-transparent border border-primary text-primary-text hover:bg-primary hover:text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
