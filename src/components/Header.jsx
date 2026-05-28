import { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import logo from '../assets/logos/Peer-header1-transparent.png';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Define routes that belong to the Training/Certification section
  const trainingRoutes = [
    '/itil-overview',
    '/itil-certification',
    '/itil-foundation',
    '/ai-certification',
    '/ppm-agile-certification'
  ];

  const isTrainingPage = trainingRoutes.includes(location.pathname);

  return (
    <>
      <div className="hidden sm:block bg-[#071B34] text-white py-2 text-sm border-b border-[#0B2242]">
        <div className="container mx-auto px-6 lg:px-12 flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-2"><span className="material-icons text-sm">phone</span> +1 732 444 4645</span>
            <span className="flex items-center gap-2"><span className="material-icons text-sm">email</span> contact@peer-consulting.com</span>
          </div>
          <div className="flex items-center space-x-4">
            <a className="hover:text-gray-300 icon-hover transition-colors" href="https://www.linkedin.com/company/peer-consulting/posts/?feedView=all"><span className="sr-only">LinkedIn</span>
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
            </a>
          </div>
        </div>
      </div>
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm transition-all duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 h-20 sm:h-28 flex justify-between items-center overflow-hidden">
          <Link className="flex items-center group" to="/">
            <img
              src={logo}
              alt="Peer Consulting Resources Logo"
              className="h-20 w-auto object-contain transition-transform group-hover:scale-105 drop-shadow-sm"
            />
          </Link>

          {!isTrainingPage ? (
            <nav className="hidden md:flex space-x-8 h-full items-center">
              <NavLink className={({ isActive }) => `nav-link h-full flex items-center font-medium px-1 text-[#071B34] ${isActive ? "active-nav-link" : ""}`} to="/">Home</NavLink>
              <NavLink className={({ isActive }) => `nav-link h-full flex items-center font-medium px-1 text-[#071B34] ${isActive ? "active-nav-link" : ""}`} to="/about">About</NavLink>
              <NavLink className={({ isActive }) => `nav-link h-full flex items-center font-medium px-1 text-[#071B34] ${isActive ? "active-nav-link" : ""}`} to="/services">Solutions</NavLink>
              <NavLink className={({ isActive }) => `nav-link h-full flex items-center font-medium px-1 text-[#071B34] ${isActive ? "active-nav-link" : ""}`} to="/blogs">Blogs</NavLink>
              <NavLink className={({ isActive }) => `nav-link h-full flex items-center font-medium px-1 text-[#071B34] ${isActive ? "active-nav-link" : ""}`} to="/careers">Career</NavLink>
            </nav>
          ) : (
            <nav className="hidden md:flex space-x-8 h-full items-center">
              <Link to="/services" className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 border border-slate-200/60 text-[#071B34] hover:text-[#4DA3FF] hover:bg-slate-100/80 transition-all font-semibold text-sm group shadow-sm">
                <span className="material-icons text-lg group-hover:-translate-x-1 transition-transform">arrow_back</span>
                Back to Solutions
              </Link>
              <div className="h-6 w-[1px] bg-slate-200 mx-2"></div>
              <div className="flex items-center space-x-6">
                <NavLink to="/itil-certification" className={({ isActive }) => `text-sm font-black uppercase tracking-widest transition-all ${isActive ? "text-[#4DA3FF] border-b-2 border-[#4DA3FF] pb-1" : "text-[#071B34]/80 hover:text-[#4DA3FF]"}`}>ITIL®</NavLink>
                <NavLink to="/ai-certification" className={({ isActive }) => `text-sm font-black uppercase tracking-widest transition-all ${isActive ? "text-[#4DA3FF] border-b-2 border-[#4DA3FF] pb-1" : "text-[#071B34]/80 hover:text-[#4DA3FF]"}`}>AI & Machine Learning</NavLink>
                <NavLink to="/ppm-agile-certification" className={({ isActive }) => `text-sm font-black uppercase tracking-widest transition-all ${isActive ? "text-[#4DA3FF] border-b-2 border-[#4DA3FF] pb-1" : "text-[#071B34]/80 hover:text-[#4DA3FF]"}`}>PPM & Agile</NavLink>
              </div>
            </nav>
          )}

          <div className="hidden md:flex items-center ml-8">
            <Link to="/contact" className="premium-cta-button px-6 py-2.5 rounded-lg font-bold shadow-sm active:scale-95">
              Contact Us
            </Link>
          </div>
          <button aria-label="menu" className="md:hidden text-[#071B34] p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span className="material-icons">menu</span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`${isMenuOpen ? "flex" : "hidden"} md:hidden bg-white border-t border-slate-200 px-6 py-4 flex flex-col`} id="mobile-menu">
          {!isTrainingPage ? (
            <>
              <NavLink className={({ isActive }) => `nav-link font-medium text-[#071B34] py-2 border-b border-slate-200 ${isActive ? "active-nav-link" : ""}`} to="/" onClick={() => setIsMenuOpen(false)}>Home</NavLink>
              <NavLink className={({ isActive }) => `nav-link font-medium text-[#071B34] py-2 border-b border-slate-200 ${isActive ? "active-nav-link" : ""}`} to="/about" onClick={() => setIsMenuOpen(false)}>About</NavLink>
              <NavLink className={({ isActive }) => `nav-link font-medium text-[#071B34] py-2 border-b border-slate-200 ${isActive ? "active-nav-link" : ""}`} to="/services" onClick={() => setIsMenuOpen(false)}>Solutions</NavLink>
              <NavLink className={({ isActive }) => `nav-link font-medium text-[#071B34] py-2 border-b border-slate-200 ${isActive ? "active-nav-link" : ""}`} to="/blogs" onClick={() => setIsMenuOpen(false)}>Blogs</NavLink>
              <NavLink className={({ isActive }) => `nav-link font-medium text-[#071B34] py-2 border-b border-slate-200 ${isActive ? "active-nav-link" : ""}`} to="/careers" onClick={() => setIsMenuOpen(false)}>Career</NavLink>
            </>
          ) : (
            <>
              <Link to="/services" className="nav-link font-medium text-[#071B34]/80 py-3 border-b border-slate-100 flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
                <span className="material-icons text-sm">arrow_back</span> Back to Solutions
              </Link>
              <NavLink to="/itil-certification" className={({ isActive }) => `nav-link font-bold py-3 border-b border-slate-100 transition-all ${isActive ? "text-[#4DA3FF]" : "text-[#071B34] hover:text-[#4DA3FF]"}`} onClick={() => setIsMenuOpen(false)}>ITIL®</NavLink>
              <NavLink to="/ai-certification" className={({ isActive }) => `nav-link font-bold py-3 border-b border-slate-100 transition-all ${isActive ? "text-[#4DA3FF]" : "text-[#071B34] hover:text-[#4DA3FF]"}`} onClick={() => setIsMenuOpen(false)}>Artificial Intelligence</NavLink>
              <NavLink to="/ppm-agile-certification" className={({ isActive }) => `nav-link font-bold py-3 border-b border-slate-100 transition-all ${isActive ? "text-[#4DA3FF]" : "text-[#071B34] hover:text-[#4DA3FF]"}`} onClick={() => setIsMenuOpen(false)}>PPM & Agile</NavLink>
            </>
          )}
        </div>
      </header>
    </>
  );
}

