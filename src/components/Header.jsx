import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/logos/Peer-header-full-transparent.png';

// Map each course route to its display name
const COURSE_NAMES = {
  '/itil-certification':                 'ITIL® Certifications',
  '/itil-overview':                      'ITIL® Overview',
  '/itil-foundation':                    'ITIL® Foundation',
  '/itil-foundation-v5':                 'ITIL® Foundation (Version 5)',
  '/itil-foundation-4':                  'ITIL® 4 Foundation',
  '/itil-foundation-bridge-v5':          'ITIL® Foundation Bridge (V5)',
  '/itil-specialist-product-v5':         'ITIL® Specialist — Product',
  '/itil-specialist-service-v5':         'ITIL® Specialist — Service',
  '/itil-specialist-experience-v5':      'ITIL® Specialist — Experience',
  '/itil-specialist-strategy-v5':        'ITIL® Specialist — Strategy',
  '/itil-specialist-transformation-v5':  'ITIL® Specialist — Transformation',
  '/itil-specialist-msf':                'Monitor, Support & Fulfill',
  '/itil-practice-pic':                  'Plan, Implement & Control',
  '/itil-practice-cai':                  'Collaborate, Assure & Improve',
  '/ai-certification':                   'AI & Machine Learning',
  '/ppm-agile-certification':            'PPM & Agile',
};

// Routes that get the training/course navbar (not the main site nav)
const TRAINING_PREFIXES = ['/itil', '/ai-certification', '/ppm-agile-certification'];

// The "hub" pages where we show ITIL / AI / PPM tabs (not a single course name)
const HUB_ROUTES = ['/itil-certification', '/ai-certification', '/ppm-agile-certification', '/itil-overview'];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled]  = useState(false);
  const location  = useLocation();
  const navigate  = useNavigate();

  const isTrainingPage = TRAINING_PREFIXES.some(p => location.pathname.startsWith(p));
  const isHubPage      = HUB_ROUTES.includes(location.pathname);
  const courseName     = COURSE_NAMES[location.pathname] ?? null;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBack = () => navigate(-1);

  return (
    <div className="fixed top-0 left-0 right-0 w-full z-50">
      {/* Top info bar — collapses on scroll */}
      <div
        className={`hidden sm:block bg-[#071B34] text-white text-sm border-b border-[#0B2242] overflow-hidden transition-all duration-300 ${
          isScrolled ? 'max-h-0 py-0 opacity-0' : 'max-h-12 py-2 opacity-100'
        }`}
      >
        <div className="container mx-auto px-6 lg:px-12 flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center space-x-6">
            <a href="tel:+17324444645" className="flex items-center gap-2 hover:text-[#4DA3FF] transition-colors">
              <span className="material-icons text-sm">phone</span> +1 732 444 4645
            </a>
            <a href="mailto:contact@peer-consulting.com" className="flex items-center gap-2 hover:text-[#4DA3FF] transition-colors">
              <span className="material-icons text-sm">email</span> contact@peer-consulting.com
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <a className="hover:text-gray-300 transition-colors" href="https://www.linkedin.com/company/peer-consulting/posts/?feedView=all">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className={`bg-white dark:bg-[#071B34] border-b border-slate-200 dark:border-[#0B2242] w-full transition-all duration-300 ${isScrolled ? 'shadow-md' : 'shadow-sm'}`}>
        <div className={`container mx-auto px-4 sm:px-6 lg:px-12 flex justify-between items-center overflow-hidden transition-all duration-300 ${isScrolled ? 'h-14' : 'h-20 sm:h-28'}`}>

          {/* Logo */}
          <Link className="flex items-center group" to="/">
            <img
              src={logo}
              alt="Peer Consulting Resources Logo"
              className={`w-auto object-contain transition-all duration-300 group-hover:scale-105 ${isScrolled ? 'h-10' : 'h-28'} dark:brightness-0 dark:invert`}
            />
          </Link>

          {/* ── DESKTOP NAV ── */}
          {!isTrainingPage ? (
            /* Normal site nav */
            <nav className="hidden md:flex space-x-8 h-full items-center">
              <NavLink className={({ isActive }) => `nav-link h-full flex items-center font-display font-bold text-base px-1 text-[#071B34] dark:text-white ${isActive ? 'active-nav-link' : ''}`} to="/">Home</NavLink>
              <NavLink className={({ isActive }) => `nav-link h-full flex items-center font-display font-bold text-base px-1 text-[#071B34] dark:text-white ${isActive ? 'active-nav-link' : ''}`} to="/about">About</NavLink>
              <NavLink className={({ isActive }) => `nav-link h-full flex items-center font-display font-bold text-base px-1 text-[#071B34] dark:text-white ${isActive ? 'active-nav-link' : ''}`} to="/services">Solutions</NavLink>
              <NavLink className={({ isActive }) => `nav-link h-full flex items-center font-display font-bold text-base px-1 text-[#071B34] dark:text-white ${isActive ? 'active-nav-link' : ''}`} to="/blogs">Blogs</NavLink>
              <NavLink className={({ isActive }) => `nav-link h-full flex items-center font-display font-bold text-base px-1 text-[#071B34] dark:text-white ${isActive ? 'active-nav-link' : ''}`} to="/careers">Career</NavLink>
            </nav>
          ) : (
            /* Training nav */
            <nav className="hidden md:flex h-full items-center gap-4">

              {/* Back button — always goes one page back */}
              <button
                onClick={handleBack}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 border border-slate-200/60 text-[#071B34] hover:text-[#4DA3FF] hover:bg-slate-100/80 transition-all font-semibold text-sm group shadow-sm"
              >
                <span className="material-icons text-lg group-hover:-translate-x-1 transition-transform">arrow_back</span>
                Back
              </button>

              <div className="h-6 w-[1px] bg-slate-200"></div>

              {/* Hub pages: show the three category tabs */}
              {isHubPage ? (
                <div className="flex items-center space-x-6">
                  <Link
                    to="/itil-certification"
                    className={`text-sm font-black uppercase tracking-widest transition-all ${location.pathname.startsWith('/itil') ? 'text-[#4DA3FF] border-b-2 border-[#4DA3FF] pb-1' : 'text-[#071B34]/80 hover:text-[#4DA3FF]'}`}
                  >ITIL®</Link>
                  <Link
                    to="/ai-certification"
                    className={`text-sm font-black uppercase tracking-widest transition-all ${location.pathname.startsWith('/ai-') ? 'text-[#4DA3FF] border-b-2 border-[#4DA3FF] pb-1' : 'text-[#071B34]/80 hover:text-[#4DA3FF]'}`}
                  >AI & Machine Learning</Link>
                  <Link
                    to="/ppm-agile-certification"
                    className={`text-sm font-black uppercase tracking-widest transition-all ${location.pathname.startsWith('/ppm-') ? 'text-[#4DA3FF] border-b-2 border-[#4DA3FF] pb-1' : 'text-[#071B34]/80 hover:text-[#4DA3FF]'}`}
                  >PPM & Agile</Link>
                </div>
              ) : (
                /* Individual course pages: show the course name */
                <span className="text-sm font-black uppercase tracking-widest text-[#4DA3FF] truncate max-w-xs">
                  {courseName ?? 'Course'}
                </span>
              )}
            </nav>
          )}

          {/* Contact button */}
          <div className="hidden md:flex items-center ml-8">
            <Link to="/contact" className="premium-cta-button px-6 py-2.5 rounded-lg font-bold shadow-sm active:scale-95">
              Contact Us
            </Link>
          </div>

          {/* Hamburger */}
          <button aria-label="menu" className="md:hidden text-[#071B34] dark:text-white p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span className="material-icons">menu</span>
          </button>
        </div>

        {/* ── MOBILE MENU ── */}
        <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:hidden bg-white dark:bg-[#071B34] border-t border-slate-200 dark:border-[#0B2242] px-6 py-4 flex-col`} id="mobile-menu">
          {!isTrainingPage ? (
            <>
              <NavLink className={({ isActive }) => `nav-link font-display font-bold text-base text-[#071B34] dark:text-white py-2 border-b border-slate-200 dark:border-white/10 ${isActive ? 'active-nav-link' : ''}`} to="/" onClick={() => setIsMenuOpen(false)}>Home</NavLink>
              <NavLink className={({ isActive }) => `nav-link font-display font-bold text-base text-[#071B34] dark:text-white py-2 border-b border-slate-200 dark:border-white/10 ${isActive ? 'active-nav-link' : ''}`} to="/about" onClick={() => setIsMenuOpen(false)}>About</NavLink>
              <NavLink className={({ isActive }) => `nav-link font-display font-bold text-base text-[#071B34] dark:text-white py-2 border-b border-slate-200 dark:border-white/10 ${isActive ? 'active-nav-link' : ''}`} to="/services" onClick={() => setIsMenuOpen(false)}>Solutions</NavLink>
              <NavLink className={({ isActive }) => `nav-link font-display font-bold text-base text-[#071B34] dark:text-white py-2 border-b border-slate-200 dark:border-white/10 ${isActive ? 'active-nav-link' : ''}`} to="/blogs" onClick={() => setIsMenuOpen(false)}>Blogs</NavLink>
              <NavLink className={({ isActive }) => `nav-link font-display font-bold text-base text-[#071B34] dark:text-white py-2 border-b border-slate-200 dark:border-white/10 ${isActive ? 'active-nav-link' : ''}`} to="/careers" onClick={() => setIsMenuOpen(false)}>Career</NavLink>
              <Link to="/contact" className="premium-cta-button mt-4 px-6 py-2.5 rounded-lg font-bold shadow-sm text-center active:scale-95" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
            </>
          ) : (
            <>
              {/* Back */}
              <button
                onClick={() => { handleBack(); setIsMenuOpen(false); }}
                className="nav-link font-medium text-[#071B34]/80 py-3 border-b border-slate-100 flex items-center gap-2"
              >
                <span className="material-icons text-sm">arrow_back</span> Back
              </button>

              {/* Course name or hub links */}
              {!isHubPage && courseName ? (
                <span className="py-3 font-black text-sm text-[#4DA3FF] uppercase tracking-widest border-b border-slate-100">
                  {courseName}
                </span>
              ) : (
                <>
                  <Link to="/itil-certification" className={`nav-link font-bold py-3 border-b border-slate-100 transition-all ${location.pathname.startsWith('/itil') ? 'text-[#4DA3FF]' : 'text-[#071B34] hover:text-[#4DA3FF]'}`} onClick={() => setIsMenuOpen(false)}>ITIL®</Link>
                  <Link to="/ai-certification" className={`nav-link font-bold py-3 border-b border-slate-100 transition-all ${location.pathname.startsWith('/ai-') ? 'text-[#4DA3FF]' : 'text-[#071B34] hover:text-[#4DA3FF]'}`} onClick={() => setIsMenuOpen(false)}>Artificial Intelligence</Link>
                  <Link to="/ppm-agile-certification" className={`nav-link font-bold py-3 border-b border-slate-100 transition-all ${location.pathname.startsWith('/ppm-') ? 'text-[#4DA3FF]' : 'text-[#071B34] hover:text-[#4DA3FF]'}`} onClick={() => setIsMenuOpen(false)}>PPM & Agile</Link>
                </>
              )}

              <Link to="/contact" className="premium-cta-button mt-4 px-6 py-2.5 rounded-lg font-bold shadow-sm text-center active:scale-95" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
            </>
          )}
        </div>
      </header>
    </div>
  );
}
