import { Link } from 'react-router-dom';
import logo from '../assets/logos/Peer-footer-transparent.png';

export default function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-white mt-auto pt-20 pb-8 relative border-t border-white/10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">

          {/* Column 1: Brand & Social */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link to="/" className="inline-block mb-8">
              <img
                src={logo}
                alt="Peer Consulting Resources Logo"
                className="h-28 w-auto max-w-[320px] object-contain transition-transform group-hover:scale-105 brightness-0 invert mx-auto md:mx-0"
              />
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-8 max-w-xs mx-auto md:mx-0">
              Empowering enterprise organizations through strategic technology solutions and digital modernization since 2009.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <a className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white transition-colors" href="https://www.linkedin.com/company/peer-consulting/posts/?feedView=all">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Capabilities */}
          <div className="text-center md:text-left md:pl-8">
            <h4 className="font-bold text-xs mb-8 text-[#4DA3FF] tracking-widest uppercase">Capabilities</h4>
            <ul className="space-y-5">
              <li><Link className="text-white/70 hover:text-white transition-colors text-sm" to="/services">Application Services</Link></li>
              <li><Link className="text-white/70 hover:text-white transition-colors text-sm" to="/services">Business Consulting</Link></li>
              <li><Link className="text-white/70 hover:text-white transition-colors text-sm" to="/services">Digital Transformation</Link></li>
              <li><Link className="text-white/70 hover:text-white transition-colors text-sm" to="/services">Systems Integration</Link></li>
              <li><Link className="text-white/70 hover:text-white transition-colors text-sm" to="/services">Quality Assurance</Link></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="text-center md:text-left">
            <h4 className="font-bold text-xs mb-8 text-[#4DA3FF] tracking-widest uppercase">Company</h4>
            <ul className="space-y-5">
              <li><Link className="text-white/70 hover:text-white transition-colors text-sm" to="/about">About Us</Link></li>
              <li><Link className="text-white/70 hover:text-white transition-colors text-sm" to="/team">Our Team</Link></li>
              <li><Link className="text-white/70 hover:text-white transition-colors text-sm" to="/services">Methodology</Link></li>
              <li><Link className="text-white/70 hover:text-white transition-colors text-sm" to="/careers">Careers</Link></li>
              <li><Link className="text-white/70 hover:text-white transition-colors text-sm" to="/contact">Contact</Link></li>
              <li><Link className="text-white/70 hover:text-white transition-colors text-sm" to="/blogs">Insights</Link></li>
            </ul>
          </div>

          {/* Column 4: Get In Touch */}
          <div className="text-center md:text-left">
            <h4 className="font-bold text-xs mb-8 text-[#4DA3FF] tracking-widest uppercase">Get In Touch</h4>
            <ul className="space-y-6 inline-block md:block">
              <li className="flex items-start gap-4 text-left">
                <span className="material-icons text-white/50 text-[20px] mt-0.5">location_on</span>
                <span className="text-white/70 text-sm leading-relaxed">500, 7th Avenue,<br />New York, NY 10018</span>
              </li>
              <li className="flex items-start gap-4 text-left">
                <span className="material-icons text-white/50 text-[20px] mt-0.5">location_on</span>
                <span className="text-white/70 text-sm leading-relaxed">20 Jefferson Plaza,<br />Princeton, NJ 08540</span>
              </li>
              <li className="flex items-center gap-4 text-left">
                <span className="material-icons text-white/50 text-[20px]">phone</span>
                <span className="text-white/70 text-sm">732-444-4645</span>
              </li>
              <li className="flex items-center gap-4 text-left">
                <span className="material-icons text-white/50 text-[20px]">mail</span>
                <span className="text-white/70 text-sm hover:text-white transition-colors cursor-pointer">solutions@peer-consulting.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/5 pt-8 pb-2 flex flex-col md:flex-row justify-between items-center gap-6 relative">
          <p className="text-white/40 text-[11px] font-bold tracking-wider uppercase">© 2024 PEER CONSULTING RESOURCES, INC. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-8 text-[11px] font-bold tracking-wider uppercase text-white/40 md:mr-16">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy</Link>
            <Link to="/terms-of-use" className="hover:text-white transition-colors">Terms</Link>
          </div>
          <div className="md:absolute right-0 bottom-1">
            <a href="#" onClick={scrollToTop} aria-label="Scroll to top" className="w-10 h-10 bg-white/5 border border-white/10 rounded flex items-center justify-center group hover:bg-white/10 transition-colors shadow-lg">
              <span className="material-icons text-white/70 group-hover:-translate-y-1 transition-transform group-hover:text-white">expand_less</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
