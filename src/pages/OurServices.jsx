import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function OurServices() {
  const navigate = useNavigate();
  return (
    <>
      <section className="bg-[#071B34] text-white relative overflow-hidden page-hero">

        <div className="absolute -right-20 -top-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -left-20 top-20 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-teal-400 opacity-[0.07] hero-breathe pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">Our Expertise in Action</h1>
          <p className="text-lg md:text-xl text-[#8ba3bd] max-w-2xl mx-auto leading-relaxed">
            End-to-end technology solutions designed to help organizations move with confidence and purpose.
          </p>
          {/* Service tags */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {["Software Services", "Enterprise ERP", "Cloud & Digital", "Quality Assurance", "Business Consulting", "ITIL Training", "Mobile Apps", "Data Science & Analytics", "Cyber Security", "Strategic Staffing", "Infrastructure"].map(tag => (
              <span key={tag} className="px-4 py-1.5 rounded-full border border-white/20 text-sm text-white/80 bg-white/5 hover:bg-white/15 hover:border-white/40 transition-all duration-200 cursor-pointer">{tag}</span>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-[#f0f4f8] dark:bg-surface-dark border-b border-border-light dark:border-border-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-3 py-1 bg-accent-blue/10 text-accent-blue rounded-full text-sm font-semibold mb-4 tracking-wide uppercase">Why Choose Us</span>
          <h2 className="text-3xl font-semibold text-primary-text dark:text-white mb-6">Built on Expertise</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            We are <strong className="text-primary-text dark:text-white font-bold">60+ professionals</strong> — software engineers, program and project managers, business analysts, designers, and quality analysts with more than <strong className="text-primary-text dark:text-white font-bold">15 years of experience</strong> in delivering superior services and products. We align strategy to implementation and apply the right mix of technology to add value to our clients. We provide the required visibility, planning, and agility for accelerating transformation.
          </p>
        </div>
      </section>
      <section className="py-20 bg-[#0B2242] dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white">Core Capabilities</h2>
            <div className="w-20 h-1 bg-accent-blue mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* 1. ITIL Training & Certifications */}
            <div
              className="relative overflow-hidden bg-[#071B34] p-8 rounded-lg border border-white/10 hover:bg-white hover:border-transparent hover:-translate-y-3 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-all duration-300 h-full group cursor-pointer flex flex-col"
              onClick={(e) => {
                if (e.target.closest('a')) return;
                navigate('/itil-overview');
              }}
            >
              <div className="absolute top-0 right-0 z-20">
                <span className="bg-accent-blue text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-tight">New Service</span>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full -mr-8 -mt-8 group-hover:bg-[#071B34]/5 transition-colors duration-300"></div>
              <div className="w-14 h-14 bg-accent-blue/10 rounded-lg flex items-center justify-center mb-6 text-accent-blue group-hover:bg-[#071B34] group-hover:text-white transition-colors duration-300 relative z-10">
                <span className="material-icons-outlined text-3xl">menu_book</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 transition-colors duration-300 group-hover:text-[#071B34] relative z-10">ITIL Training & Certifications</h3>
              <p className="text-slate-300 mb-6 flex-grow leading-relaxed group-hover:text-slate-600 transition-colors duration-300 relative z-10">
                Comprehensive training for ITIL (Information Technology Infrastructure Library) with flexible learning models.
              </p>
              <div className="flex flex-col gap-3 border-t border-white/10 group-hover:border-slate-200 pt-6 transition-colors duration-300 relative z-10">
                <Link to="/itil-overview" className="text-accent-blue hover:text-blue-700 hover:underline text-sm font-semibold flex items-center group-hover:text-[#071B34] transition-colors duration-300">
                  ITIL Overview <span className="material-icons-outlined text-sm ml-1">arrow_forward</span>
                </Link>
                <Link to="/itil-certification" className="text-accent-blue hover:text-blue-700 hover:underline text-sm font-semibold flex items-center group-hover:text-[#071B34] transition-colors duration-300">
                  Certification Path <span className="material-icons-outlined text-sm ml-1">arrow_forward</span>
                </Link>
                <Link to="/itil-foundation" className="text-accent-blue hover:text-blue-700 hover:underline text-sm font-semibold flex items-center group-hover:text-[#071B34] transition-colors duration-300">
                  ITIL Foundation <span className="material-icons-outlined text-sm ml-1">arrow_forward</span>
                </Link>
              </div>
            </div>

            {/* 2. Software Application Services */}
            <div className="relative overflow-hidden bg-[#071B34] p-8 rounded-lg border border-white/10 hover:bg-white hover:border-transparent hover:-translate-y-3 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-all duration-300 h-full group cursor-pointer flex flex-col">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full -mr-8 -mt-8 group-hover:bg-[#071B34]/5 transition-colors duration-300"></div>
              <div className="w-14 h-14 bg-accent-blue/10 rounded-lg flex items-center justify-center mb-6 text-accent-blue group-hover:bg-[#071B34] group-hover:text-white transition-colors duration-300 relative z-10">
                <span className="material-icons-outlined text-3xl">code</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 transition-colors duration-300 group-hover:text-[#071B34] relative z-10">Software Application Services</h3>
              <p className="text-slate-300 mb-6 flex-grow leading-relaxed group-hover:text-slate-600 transition-colors duration-300 relative z-10">
                We build custom software solutions that align with your business goals and scale with your growth.
              </p>
              <ul className="space-y-2 border-t border-white/10 group-hover:border-slate-200 pt-6 transition-colors duration-300 relative z-10">
                <li className="flex items-start text-sm text-slate-300 group-hover:text-slate-700 transition-colors duration-300">
                  <span className="material-icons-outlined text-accent-blue text-sm mr-2 mt-0.5 group-hover:text-[#071B34] transition-colors duration-300">check_circle</span>
                  Custom Application Development
                </li>
                <li className="flex items-start text-sm text-slate-300 group-hover:text-slate-700 transition-colors duration-300">
                  <span className="material-icons-outlined text-accent-blue text-sm mr-2 mt-0.5 group-hover:text-[#071B34] transition-colors duration-300">check_circle</span>
                  Emerging Technology Integration
                </li>
                <li className="flex items-start text-sm text-slate-300 group-hover:text-slate-700 transition-colors duration-300">
                  <span className="material-icons-outlined text-accent-blue text-sm mr-2 mt-0.5 group-hover:text-[#071B34] transition-colors duration-300">check_circle</span>
                  Scalable Enterprise Solutions
                </li>
              </ul>
            </div>

            {/* 3. Enterprise & ERP Solutions */}
            <div className="relative overflow-hidden bg-[#071B34] p-8 rounded-lg border border-white/10 hover:bg-white hover:border-transparent hover:-translate-y-3 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-all duration-300 h-full group cursor-pointer flex flex-col">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full -mr-8 -mt-8 group-hover:bg-[#071B34]/5 transition-colors duration-300"></div>
              <div className="w-14 h-14 bg-accent-blue/10 rounded-lg flex items-center justify-center mb-6 text-accent-blue group-hover:bg-[#071B34] group-hover:text-white transition-colors duration-300 relative z-10">
                <span className="material-icons-outlined text-3xl">business</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 transition-colors duration-300 group-hover:text-[#071B34] relative z-10">Enterprise & ERP Solutions</h3>
              <p className="text-slate-300 mb-6 flex-grow leading-relaxed group-hover:text-slate-600 transition-colors duration-300 relative z-10">
                We streamline operations with enterprise-grade ERP solutions built for efficiency and control.
              </p>
              <ul className="space-y-2 border-t border-white/10 group-hover:border-slate-200 pt-6 transition-colors duration-300 relative z-10">
                <li className="flex items-start text-sm text-slate-300 group-hover:text-slate-700 transition-colors duration-300">
                  <span className="material-icons-outlined text-accent-blue text-sm mr-2 mt-0.5 group-hover:text-[#071B34] transition-colors duration-300">check_circle</span>
                  ERP Implementation & Support
                </li>
                <li className="flex items-start text-sm text-slate-300 group-hover:text-slate-700 transition-colors duration-300">
                  <span className="material-icons-outlined text-accent-blue text-sm mr-2 mt-0.5 group-hover:text-[#071B34] transition-colors duration-300">check_circle</span>
                  Business Process Automation
                </li>
                <li className="flex items-start text-sm text-slate-300 group-hover:text-slate-700 transition-colors duration-300">
                  <span className="material-icons-outlined text-accent-blue text-sm mr-2 mt-0.5 group-hover:text-[#071B34] transition-colors duration-300">check_circle</span>
                  Enterprise System Integration
                </li>
              </ul>
            </div>

            {/* 4. Cloud & Digital Transformation */}
            <div className="relative overflow-hidden bg-[#071B34] p-8 rounded-lg border border-white/10 hover:bg-white hover:border-transparent hover:-translate-y-3 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-all duration-300 h-full group cursor-pointer flex flex-col">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full -mr-8 -mt-8 group-hover:bg-[#071B34]/5 transition-colors duration-300"></div>
              <div className="w-14 h-14 bg-accent-blue/10 rounded-lg flex items-center justify-center mb-6 text-accent-blue group-hover:bg-[#071B34] group-hover:text-white transition-colors duration-300 relative z-10">
                <span className="material-icons-outlined text-3xl">cloud</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 transition-colors duration-300 group-hover:text-[#071B34] relative z-10">Cloud & Digital Transformation</h3>
              <p className="text-slate-300 mb-6 flex-grow leading-relaxed group-hover:text-slate-600 transition-colors duration-300 relative z-10">
                We modernize systems and operations with cloud-first solutions built for agility and scale.
              </p>
              <ul className="space-y-2 border-t border-white/10 group-hover:border-slate-200 pt-6 transition-colors duration-300 relative z-10">
                <li className="flex items-start text-sm text-slate-300 group-hover:text-slate-700 transition-colors duration-300">
                  <span className="material-icons-outlined text-accent-blue text-sm mr-2 mt-0.5 group-hover:text-[#071B34] transition-colors duration-300">check_circle</span>
                  Cloud Migration & Modernization
                </li>
                <li className="flex items-start text-sm text-slate-300 group-hover:text-slate-700 transition-colors duration-300">
                  <span className="material-icons-outlined text-accent-blue text-sm mr-2 mt-0.5 group-hover:text-[#071B34] transition-colors duration-300">check_circle</span>
                  Digital Transformation Strategy
                </li>
                <li className="flex items-start text-sm text-slate-300 group-hover:text-slate-700 transition-colors duration-300">
                  <span className="material-icons-outlined text-accent-blue text-sm mr-2 mt-0.5 group-hover:text-[#071B34] transition-colors duration-300">check_circle</span>
                  Scalable Cloud Infrastructure
                </li>
              </ul>
            </div>

            {/* 5. Quality Assurance */}
            <div className="relative overflow-hidden bg-[#071B34] p-8 rounded-lg border border-white/10 hover:bg-white hover:border-transparent hover:-translate-y-3 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-all duration-300 h-full group cursor-pointer flex flex-col">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full -mr-8 -mt-8 group-hover:bg-[#071B34]/5 transition-colors duration-300"></div>
              <div className="w-14 h-14 bg-accent-blue/10 rounded-lg flex items-center justify-center mb-6 text-accent-blue group-hover:bg-[#071B34] group-hover:text-white transition-colors duration-300 relative z-10">
                <span className="material-icons-outlined text-3xl">verified_user</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 transition-colors duration-300 group-hover:text-[#071B34] relative z-10">Quality Assurance</h3>
              <p className="text-slate-300 mb-6 flex-grow leading-relaxed group-hover:text-slate-600 transition-colors duration-300 relative z-10">
                We ensure every solution meets high standards for quality, reliability, and performance.
              </p>
              <ul className="space-y-2 border-t border-white/10 group-hover:border-slate-200 pt-6 transition-colors duration-300 relative z-10">
                <li className="flex items-start text-sm text-slate-300 group-hover:text-slate-700 transition-colors duration-300">
                  <span className="material-icons-outlined text-accent-blue text-sm mr-2 mt-0.5 group-hover:text-[#071B34] transition-colors duration-300">check_circle</span>
                  Engineering-Led QA
                </li>
                <li className="flex items-start text-sm text-slate-300 group-hover:text-slate-700 transition-colors duration-300">
                  <span className="material-icons-outlined text-accent-blue text-sm mr-2 mt-0.5 group-hover:text-[#071B34] transition-colors duration-300">check_circle</span>
                  Solutions Assessment & Validation
                </li>
                <li className="flex items-start text-sm text-slate-300 group-hover:text-slate-700 transition-colors duration-300">
                  <span className="material-icons-outlined text-accent-blue text-sm mr-2 mt-0.5 group-hover:text-[#071B34] transition-colors duration-300">check_circle</span>
                  Performance & Compliance Testing
                </li>
              </ul>
            </div>

            {/* 6. Business Consulting / Advisory */}
            <div className="relative overflow-hidden bg-[#071B34] p-8 rounded-lg border border-white/10 hover:bg-white hover:border-transparent hover:-translate-y-3 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-all duration-300 h-full group cursor-pointer flex flex-col">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full -mr-8 -mt-8 group-hover:bg-[#071B34]/5 transition-colors duration-300"></div>
              <div className="w-14 h-14 bg-accent-blue/10 rounded-lg flex items-center justify-center mb-6 text-accent-blue group-hover:bg-[#071B34] group-hover:text-white transition-colors duration-300 relative z-10">
                <span className="material-icons-outlined text-3xl">business_center</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 transition-colors duration-300 group-hover:text-[#071B34] relative z-10">Business Consulting / Advisory</h3>
              <p className="text-slate-300 mb-6 flex-grow leading-relaxed group-hover:text-slate-600 transition-colors duration-300 relative z-10">
                We provide strategic guidance that helps organizations improve operations and make better decisions.
              </p>
              <ul className="space-y-2 border-t border-white/10 group-hover:border-slate-200 pt-6 transition-colors duration-300 relative z-10">
                <li className="flex items-start text-sm text-slate-300 group-hover:text-slate-700 transition-colors duration-300">
                  <span className="material-icons-outlined text-accent-blue text-sm mr-2 mt-0.5 group-hover:text-[#071B34] transition-colors duration-300">check_circle</span>
                  Strategic Business Consulting
                </li>
                <li className="flex items-start text-sm text-slate-300 group-hover:text-slate-700 transition-colors duration-300">
                  <span className="material-icons-outlined text-accent-blue text-sm mr-2 mt-0.5 group-hover:text-[#071B34] transition-colors duration-300">check_circle</span>
                  Operational Process Improvement
                </li>
                <li className="flex items-start text-sm text-slate-300 group-hover:text-slate-700 transition-colors duration-300">
                  <span className="material-icons-outlined text-accent-blue text-sm mr-2 mt-0.5 group-hover:text-[#071B34] transition-colors duration-300">check_circle</span>
                  Technology & Change Management
                </li>
              </ul>
            </div>

            {/* 7. Mobile Application Development */}
            <div className="relative overflow-hidden bg-[#071B34] p-8 rounded-lg border border-white/10 hover:bg-white hover:border-transparent hover:-translate-y-3 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-all duration-300 h-full group cursor-pointer flex flex-col">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full -mr-8 -mt-8 group-hover:bg-[#071B34]/5 transition-colors duration-300"></div>
              <div className="w-14 h-14 bg-accent-blue/10 rounded-lg flex items-center justify-center mb-6 text-accent-blue group-hover:bg-[#071B34] group-hover:text-white transition-colors duration-300 relative z-10">
                <span className="material-icons-outlined text-3xl">smartphone</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 transition-colors duration-300 group-hover:text-[#071B34] relative z-10">Mobile Application Development</h3>
              <p className="text-slate-300 mb-6 flex-grow leading-relaxed group-hover:text-slate-600 transition-colors duration-300 relative z-10">
                We develop intuitive mobile applications that deliver smooth user experiences across every device.
              </p>
              <ul className="space-y-2 border-t border-white/10 group-hover:border-slate-200 pt-6 transition-colors duration-300 relative z-10">
                <li className="flex items-start text-sm text-slate-300 group-hover:text-slate-700 transition-colors duration-300">
                  <span className="material-icons-outlined text-accent-blue text-sm mr-2 mt-0.5 group-hover:text-[#071B34] transition-colors duration-300">check_circle</span>
                  Cross-Platform App Development
                </li>
                <li className="flex items-start text-sm text-slate-300 group-hover:text-slate-700 transition-colors duration-300">
                  <span className="material-icons-outlined text-accent-blue text-sm mr-2 mt-0.5 group-hover:text-[#071B34] transition-colors duration-300">check_circle</span>
                  User-Centered Mobile Experiences
                </li>
                <li className="flex items-start text-sm text-slate-300 group-hover:text-slate-700 transition-colors duration-300">
                  <span className="material-icons-outlined text-accent-blue text-sm mr-2 mt-0.5 group-hover:text-[#071B34] transition-colors duration-300">check_circle</span>
                  Performance & Scalability Optimization
                </li>
              </ul>
            </div>

            {/* 8. Data Science & Analytics */}
            <div className="relative overflow-hidden bg-[#071B34] p-8 rounded-lg border border-white/10 hover:bg-white hover:border-transparent hover:-translate-y-3 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-all duration-300 h-full group cursor-pointer flex flex-col">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full -mr-8 -mt-8 group-hover:bg-[#071B34]/5 transition-colors duration-300"></div>
              <div className="w-14 h-14 bg-accent-blue/10 rounded-lg flex items-center justify-center mb-6 text-accent-blue group-hover:bg-[#071B34] group-hover:text-white transition-colors duration-300 relative z-10">
                <span className="material-icons-outlined text-3xl">analytics</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 transition-colors duration-300 group-hover:text-[#071B34] relative z-10">Data Science & Analytics</h3>
              <p className="text-slate-300 mb-6 flex-grow leading-relaxed group-hover:text-slate-600 transition-colors duration-300 relative z-10">
                We turn complex data into clear insights that support smarter decisions and stronger outcomes.
              </p>
              <ul className="space-y-2 border-t border-white/10 group-hover:border-slate-200 pt-6 transition-colors duration-300 relative z-10">
                <li className="flex items-start text-sm text-slate-300 group-hover:text-slate-700 transition-colors duration-300">
                  <span className="material-icons-outlined text-accent-blue text-sm mr-2 mt-0.5 group-hover:text-[#071B34] transition-colors duration-300">check_circle</span>
                  Business Intelligence & Reporting
                </li>
                <li className="flex items-start text-sm text-slate-300 group-hover:text-slate-700 transition-colors duration-300">
                  <span className="material-icons-outlined text-accent-blue text-sm mr-2 mt-0.5 group-hover:text-[#071B34] transition-colors duration-300">check_circle</span>
                  Predictive Data Analytics
                </li>
                <li className="flex items-start text-sm text-slate-300 group-hover:text-slate-700 transition-colors duration-300">
                  <span className="material-icons-outlined text-accent-blue text-sm mr-2 mt-0.5 group-hover:text-[#071B34] transition-colors duration-300">check_circle</span>
                  Data-Driven Strategy Solutions
                </li>
              </ul>
            </div>

            {/* 9. Cyber Security Solutions */}
            <div className="relative overflow-hidden bg-[#071B34] p-8 rounded-lg border border-white/10 hover:bg-white hover:border-transparent hover:-translate-y-3 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-all duration-300 h-full group cursor-pointer flex flex-col">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full -mr-8 -mt-8 group-hover:bg-[#071B34]/5 transition-colors duration-300"></div>
              <div className="w-14 h-14 bg-accent-blue/10 rounded-lg flex items-center justify-center mb-6 text-accent-blue group-hover:bg-[#071B34] group-hover:text-white transition-colors duration-300 relative z-10">
                <span className="material-icons-outlined text-3xl">security</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 transition-colors duration-300 group-hover:text-[#071B34] relative z-10">Cyber Security Solutions</h3>
              <p className="text-slate-300 mb-6 flex-grow leading-relaxed group-hover:text-slate-600 transition-colors duration-300 relative z-10">
                We help protect organizations with proactive security strategies built around risk, trust, and resilience.
              </p>
              <ul className="space-y-2 border-t border-white/10 group-hover:border-slate-200 pt-6 transition-colors duration-300 relative z-10">
                <li className="flex items-start text-sm text-slate-300 group-hover:text-slate-700 transition-colors duration-300">
                  <span className="material-icons-outlined text-accent-blue text-sm mr-2 mt-0.5 group-hover:text-[#071B34] transition-colors duration-300">check_circle</span>
                  Threat Prevention & Monitoring
                </li>
                <li className="flex items-start text-sm text-slate-300 group-hover:text-slate-700 transition-colors duration-300">
                  <span className="material-icons-outlined text-accent-blue text-sm mr-2 mt-0.5 group-hover:text-[#071B34] transition-colors duration-300">check_circle</span>
                  Security Risk Assessment
                </li>
                <li className="flex items-start text-sm text-slate-300 group-hover:text-slate-700 transition-colors duration-300">
                  <span className="material-icons-outlined text-accent-blue text-sm mr-2 mt-0.5 group-hover:text-[#071B34] transition-colors duration-300">check_circle</span>
                  Data Protection & Compliance
                </li>
              </ul>
            </div>

            {/* 10. Strategic Staffing */}
            <div className="relative overflow-hidden bg-[#071B34] p-8 rounded-lg border border-white/10 hover:bg-white hover:border-transparent hover:-translate-y-3 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-all duration-300 h-full group cursor-pointer flex flex-col">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full -mr-8 -mt-8 group-hover:bg-[#071B34]/5 transition-colors duration-300"></div>
              <div className="w-14 h-14 bg-accent-blue/10 rounded-lg flex items-center justify-center mb-6 text-accent-blue group-hover:bg-[#071B34] group-hover:text-white transition-colors duration-300 relative z-10">
                <span className="material-icons-outlined text-3xl">people</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 transition-colors duration-300 group-hover:text-[#071B34] relative z-10">Strategic Staffing</h3>
              <p className="text-slate-300 mb-6 flex-grow leading-relaxed group-hover:text-slate-600 transition-colors duration-300 relative z-10">
                We provide flexible staffing solutions with skilled professionals matched to your business needs.
              </p>
              <ul className="space-y-2 border-t border-white/10 group-hover:border-slate-200 pt-6 transition-colors duration-300 relative z-10">
                <li className="flex items-start text-sm text-slate-300 group-hover:text-slate-700 transition-colors duration-300">
                  <span className="material-icons-outlined text-accent-blue text-sm mr-2 mt-0.5 group-hover:text-[#071B34] transition-colors duration-300">check_circle</span>
                  Technical Resource Augmentation
                </li>
                <li className="flex items-start text-sm text-slate-300 group-hover:text-slate-700 transition-colors duration-300">
                  <span className="material-icons-outlined text-accent-blue text-sm mr-2 mt-0.5 group-hover:text-[#071B34] transition-colors duration-300">check_circle</span>
                  Scalable Workforce Solutions
                </li>
                <li className="flex items-start text-sm text-slate-300 group-hover:text-slate-700 transition-colors duration-300">
                  <span className="material-icons-outlined text-accent-blue text-sm mr-2 mt-0.5 group-hover:text-[#071B34] transition-colors duration-300">check_circle</span>
                  Specialized IT Talent Support
                </li>
              </ul>
            </div>

            {/* 11. Infrastructure Solutions */}
            <div className="relative overflow-hidden bg-[#071B34] p-8 rounded-lg border border-white/10 hover:bg-white hover:border-transparent hover:-translate-y-3 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-all duration-300 h-full group cursor-pointer flex flex-col">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full -mr-8 -mt-8 group-hover:bg-[#071B34]/5 transition-colors duration-300"></div>
              <div className="w-14 h-14 bg-accent-blue/10 rounded-lg flex items-center justify-center mb-6 text-accent-blue group-hover:bg-[#071B34] group-hover:text-white transition-colors duration-300 relative z-10">
                <span className="material-icons-outlined text-3xl">dns</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 transition-colors duration-300 group-hover:text-[#071B34] relative z-10">Infrastructure Solutions</h3>
              <p className="text-slate-300 mb-6 flex-grow leading-relaxed group-hover:text-slate-600 transition-colors duration-300 relative z-10">
                We build dependable infrastructure environments that support performance, stability, and business continuity.
              </p>
              <ul className="space-y-2 border-t border-white/10 group-hover:border-slate-200 pt-6 transition-colors duration-300 relative z-10">
                <li className="flex items-start text-sm text-slate-300 group-hover:text-slate-700 transition-colors duration-300">
                  <span className="material-icons-outlined text-accent-blue text-sm mr-2 mt-0.5 group-hover:text-[#071B34] transition-colors duration-300">check_circle</span>
                  Infrastructure Planning & Support
                </li>
                <li className="flex items-start text-sm text-slate-300 group-hover:text-slate-700 transition-colors duration-300">
                  <span className="material-icons-outlined text-accent-blue text-sm mr-2 mt-0.5 group-hover:text-[#071B34] transition-colors duration-300">check_circle</span>
                  Network & System Optimization
                </li>
                <li className="flex items-start text-sm text-slate-300 group-hover:text-slate-700 transition-colors duration-300">
                  <span className="material-icons-outlined text-accent-blue text-sm mr-2 mt-0.5 group-hover:text-[#071B34] transition-colors duration-300">check_circle</span>
                  IT Operations Management
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>



      <section className="py-20 bg-[#f0f4f8] dark:bg-surface-dark border-y border-border-light dark:border-border-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary-text dark:text-white">Our Project Lifecycle</h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              We follow a structured, proven methodology to ensure transparency and success at every stage of engagement.
            </p>
          </div>
          <div className="relative reveal workflow-container">
            <div className="hidden md:block absolute top-[2rem] left-0 w-full h-1 bg-border-light dark:bg-border-dark -translate-y-1/2 rounded-full z-0 overflow-hidden">
              <div className="h-full bg-accent-blue workflow-line-fill rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
              <div className="flex flex-col items-center text-center group cursor-default workflow-node">
                <div className="w-16 h-16 rounded-full bg-white dark:bg-surface-dark border-2 border-accent-blue text-accent-blue flex items-center justify-center shadow-md mb-6 relative group-hover:bg-accent-blue group-hover:text-white transition-colors duration-300">
                  <span className="material-icons-outlined text-2xl">lightbulb</span>
                  <div className="md:hidden absolute -bottom-8 h-8 w-1 bg-accent-blue"></div>
                </div>
                <h4 className="text-lg font-bold text-primary-text dark:text-white mb-2 group-hover:text-accent-blue transition-colors duration-300">Strategy</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">Requirements gathering and roadmap planning.</p>
              </div>
              <div className="flex flex-col items-center text-center group cursor-default workflow-node">
                <div className="w-16 h-16 rounded-full bg-white dark:bg-surface-dark border-2 border-accent-blue text-accent-blue flex items-center justify-center shadow-md mb-6 relative group-hover:bg-accent-blue group-hover:text-white transition-colors duration-300">
                  <span className="material-icons-outlined text-2xl">architecture</span>
                  <div className="md:hidden absolute -bottom-8 h-8 w-1 bg-accent-blue"></div>
                </div>
                <h4 className="text-lg font-bold text-primary-text dark:text-white mb-2 group-hover:text-accent-blue transition-colors duration-300">Architecture</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">System design and technology selection.</p>
              </div>
              <div className="flex flex-col items-center text-center group cursor-default workflow-node">
                <div className="w-16 h-16 rounded-full bg-white dark:bg-surface-dark border-2 border-accent-blue text-accent-blue flex items-center justify-center shadow-md mb-6 relative group-hover:bg-accent-blue group-hover:text-white transition-colors duration-300">
                  <span className="material-icons-outlined text-2xl">code_off</span>
                  <div className="md:hidden absolute -bottom-8 h-8 w-1 bg-accent-blue"></div>
                </div>
                <h4 className="text-lg font-bold text-primary-text dark:text-white mb-2 group-hover:text-accent-blue transition-colors duration-300">Development</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">Iterative coding and feature implementation.</p>
              </div>
              <div className="flex flex-col items-center text-center group cursor-default workflow-node">
                <div className="w-16 h-16 rounded-full bg-white dark:bg-surface-dark border-2 border-accent-blue text-accent-blue flex items-center justify-center shadow-md mb-6 relative group-hover:bg-accent-blue group-hover:text-white transition-colors duration-300">
                  <span className="material-icons-outlined text-2xl">bug_report</span>
                  <div className="md:hidden absolute -bottom-8 h-8 w-1 bg-accent-blue"></div>
                </div>
                <h4 className="text-lg font-bold text-primary-text dark:text-white mb-2 group-hover:text-accent-blue transition-colors duration-300">QA</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">Rigorous testing and bug resolution.</p>
              </div>
              <div className="flex flex-col items-center text-center group cursor-default workflow-node">
                <div className="w-16 h-16 rounded-full bg-white dark:bg-surface-dark border-2 border-accent-blue text-accent-blue flex items-center justify-center shadow-md mb-6 relative group-hover:bg-accent-blue group-hover:text-white transition-colors duration-300">
                  <span className="material-icons-outlined text-2xl">rocket_launch</span>
                </div>
                <h4 className="text-lg font-bold text-primary-text dark:text-white mb-2 group-hover:text-accent-blue transition-colors duration-300">Deployment</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">Go-live support and maintenance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#071B34] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to elevate your IT strategy?</h2>
          <p className="text-lg text-[#8ba3bd] mb-8 max-w-2xl mx-auto">
            Connect with our team to discuss your project needs and discover how Peer Consulting Resources can drive your business forward.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              className="bg-[#4DA3FF] hover:bg-[#3b82f6] text-white border border-[#4DA3FF] hover:border-[#3b82f6] shadow-[0_4px_15px_rgba(77,163,255,0.3)] hover:shadow-[0_8px_25px_rgba(77,163,255,0.4)] py-3 px-8 rounded-lg font-bold transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95"
              onClick={() => navigate('/contact')}
            >
              Start a Conversation
            </button>
            <button
              className="bg-transparent border border-white/30 hover:border-white hover:bg-white text-white hover:text-[#071B34] font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95"
              onClick={() => navigate('/blogs')}
            >
              Explore Our Work
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
