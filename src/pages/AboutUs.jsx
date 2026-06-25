import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const CorporateSilhouette = ({ className = "w-full h-full text-slate-700" }) => (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="31" r="12" fill="currentColor" />
        <rect x="47" y="40" width="6" height="10" fill="currentColor" />
        <path d="M26 80 C26 62 36 50 50 50 C64 50 74 62 74 80 V80 H26 Z" fill="currentColor" />
    </svg>
);

const TeamAvatar = ({ src, alt, silhouetteClass = "w-full h-full text-slate-700" }) => {
    const [err, setErr] = React.useState(false);
    return err || !src ? (
        <CorporateSilhouette className={silhouetteClass} />
    ) : (
        <img src={src} alt={alt} className="w-full h-full object-cover object-top" onError={() => setErr(true)} />
    );
};

const teamImages = {
    "misha-edara": new URL('../assets/team/Misha.jpg', import.meta.url).href,
    "vineela-mandava": new URL('../assets/team/Vineela-Mandava.webp', import.meta.url).href,
    "omer-halilovic": new URL('../assets/team/Omer.webp', import.meta.url).href,
    "seema-mittal": new URL('../assets/team/Seema-Mittal.webp', import.meta.url).href,
    "sandeep-bussa": new URL('../assets/team/Sandeep-Bussa.png', import.meta.url).href,
    "vivek-philar": new URL('../assets/team/Vivek-Philar.webp', import.meta.url).href,
    "naveen-marrivada": new URL('../assets/team/Naveen.png', import.meta.url).href,
};

export default function AboutUs() {
    const navigate = useNavigate();
    return (
        <>
            {/*  Navigation Bar End  */}
            <section className="relative bg-[#071B34] overflow-hidden page-hero">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute right-0 top-0 -mr-20 -mt-20 h-96 w-96 rounded-full bg-blue-400 blur-3xl"></div>
                    <div className="absolute left-0 bottom-0 -ml-20 -mb-20 h-80 w-80 rounded-full bg-indigo-500 blur-3xl"></div>
                </div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600 opacity-[0.08] hero-breathe pointer-events-none"></div>
                <div className="absolute top-8 right-1/4 w-56 h-56 bg-teal-400 rounded-full blur-3xl opacity-[0.07] pointer-events-none"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 flex flex-col items-center text-center">
                    <span className="text-accent-blue font-semibold tracking-wider text-sm uppercase mb-4">About Peer Consulting Resources</span>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white tracking-tight max-w-4xl leading-tight mb-6">
                        Technology Expertise <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4DA3FF] to-indigo-300">Built Around</span> <br />
                        Business Impact
                    </h1>
                    <p className="mt-4 max-w-2xl text-xl text-[#8ba3bd] font-light">
                        By delivering technology consulting, software solutions, and strategic expertise designed for long-term growth.
                    </p>
                    {/* Counter strip */}
                    <div className="mt-12 flex flex-wrap justify-center gap-x-12 gap-y-6">
                        <div className="text-center">
                            <div className="text-4xl font-bold text-white mb-1">200+</div>
                            <div className="text-xs text-[#8ba3bd] uppercase tracking-widest">Projects Delivered</div>
                        </div>
                        <div className="hidden sm:block w-px bg-white/20"></div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-white mb-1">15</div>
                            <div className="text-xs text-[#8ba3bd] uppercase tracking-widest">Years of Excellence</div>
                        </div>
                        <div className="hidden sm:block w-px bg-white/20"></div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-white mb-1">100+</div>
                            <div className="text-xs text-[#8ba3bd] uppercase tracking-widest">Happy Clients</div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-20 bg-[#f0f4f8] dark:bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                        <div className="relative mb-12 lg:mb-0 group">
                            <div className="absolute inset-0 block-gradient transform translate-x-3 translate-y-3 rounded-xl opacity-20 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-300"></div>
                            <div className="relative rounded-xl overflow-hidden shadow-xl aspect-[4/3]">
                                <img alt="Diverse team collaborating in modern office" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" data-alt="Professional team meeting around a conference table" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7qL2ALKetkmC6Io0Q8Evj4r3i6exXngnACWcl7ph2aeG2OLteHdgHIo3EVBPnxoHO-JN2kQB7Rn606IbimLss8FZ7pVrv8jD4LdPpbdVI8WebBWOI8SOAnvNAPGosUyADMUWss6Hglvt7GotxQnc4W8KGjolWeS-F5e6y4CHD_C7oGLkbu5bNrJzDFEDrgypUDjmgMqvnhfLmsHtS6QsHFDUfWdQI6JVVvJgRBeyJ9768HzE-PNd4JhkgmK3pSV8FeCEjuR763R-J" />
                            </div>
                        </div>
                        <div>
                            <h2 className="text-3xl font-heading font-bold text-primary-text dark:text-white mb-6">Who We Are</h2>
                            <div className="prose prose-lg text-slate-600 dark:text-slate-300 mb-8 font-display">
                                <p className="mb-4">
                                    Peer Consulting Resources is a women-owned technology company that combines technical expertise, strategic thinking, and delivery excellence to help organizations solve complex operational challenges.</p>
                                <p>
                                    With over 15 years of experience, we help organizations modernize systems, improve operational efficiency, and implement solutions designed to scale with evolving business needs. </p>
                            </div>
                            <div className="bg-background-light dark:bg-slate-800 border-l-4 border-primary p-6 rounded-r-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors duration-150">
                                <h3 className="text-xl font-heading font-bold text-primary-text dark:text-blue-100 mb-2">Our Mission</h3>
                                <p className="text-slate-700 dark:text-slate-300 italic transition-colors duration-120">
                                    "To help our clients build stronger and innovative businesses by providing technology professionals and/or software services."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-20 bg-[#0B2242] dark:bg-background-dark">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-heading font-bold text-white">Our Core Values</h2>
                        <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">The principles that guide every decision, every collaboration, and every client relationship. </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                        <div className="relative overflow-hidden bg-[#071B34] p-8 min-h-[360px] rounded-lg border border-white/10 hover:bg-white hover:border-transparent hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-all duration-300 group flex flex-col items-center text-center h-full transform hover:-translate-y-3 cursor-pointer">
                            <div className="absolute top-0 right-0 w-16 h-16 bg-white/5 rounded-bl-full -mr-4 -mt-4 group-hover:bg-[#071B34]/5 transition-colors duration-300"></div>
                            <div className="w-14 h-14 rounded-full bg-blue-500/10 flex items-center justify-center mb-6 text-[#4DA3FF] group-hover:bg-[#071B34] group-hover:text-white transition-colors duration-300 relative z-10">
                                <span className="material-icons-outlined text-3xl">sentiment_satisfied_alt</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 font-heading group-hover:text-[#071B34] transition-colors duration-300 relative z-10">Customer-centric</h3>
                            <p className="text-sm text-slate-300 group-hover:text-slate-600 transition-colors leading-relaxed duration-300 relative z-10">We build lasting client relationships through responsive support and measurable impact.</p>
                        </div>
                        <div className="relative overflow-hidden bg-[#071B34] p-8 min-h-[360px] rounded-lg border border-white/10 hover:bg-white hover:border-transparent hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-all duration-300 group flex flex-col items-center text-center h-full transform hover:-translate-y-3 cursor-pointer">
                            <div className="absolute top-0 right-0 w-16 h-16 bg-white/5 rounded-bl-full -mr-4 -mt-4 group-hover:bg-[#071B34]/5 transition-colors duration-300"></div>
                            <div className="w-14 h-14 rounded-full bg-blue-500/10 flex items-center justify-center mb-6 text-[#4DA3FF] group-hover:bg-[#071B34] group-hover:text-white transition-colors duration-300 relative z-10">
                                <span className="material-icons-outlined text-3xl">verified_user</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 font-heading group-hover:text-[#071B34] transition-colors duration-300 relative z-10">Integrity</h3>
                            <p className="text-sm text-slate-300 group-hover:text-slate-600 transition-colors leading-relaxed duration-300 relative z-10">We lead with honesty, accountability, and professionalism in every engagement.</p>
                        </div>
                        <div className="relative overflow-hidden bg-[#071B34] p-8 min-h-[360px] rounded-lg border border-white/10 hover:bg-white hover:border-transparent hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-all duration-300 group flex flex-col items-center text-center h-full transform hover:-translate-y-3 cursor-pointer">
                            <div className="absolute top-0 right-0 w-16 h-16 bg-white/5 rounded-bl-full -mr-4 -mt-4 group-hover:bg-[#071B34]/5 transition-colors duration-300"></div>
                            <div className="w-14 h-14 rounded-full bg-blue-500/10 flex items-center justify-center mb-6 text-[#4DA3FF] group-hover:bg-[#071B34] group-hover:text-white transition-colors duration-300 relative z-10">
                                <span className="material-icons-outlined text-3xl">groups</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 font-heading group-hover:text-[#071B34] transition-colors duration-300 relative z-10">Teamwork</h3>
                            <p className="text-sm text-slate-300 group-hover:text-slate-600 transition-colors leading-relaxed duration-300 relative z-10">We bring diverse perspectives together to solve challenges and achieve stronger outcomes.</p>
                        </div>
                        <div className="relative overflow-hidden bg-[#071B34] p-8 min-h-[360px] rounded-lg border border-white/10 hover:bg-white hover:border-transparent hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-all duration-300 group flex flex-col items-center text-center h-full transform hover:-translate-y-3 cursor-pointer">
                            <div className="absolute top-0 right-0 w-16 h-16 bg-white/5 rounded-bl-full -mr-4 -mt-4 group-hover:bg-[#071B34]/5 transition-colors duration-300"></div>
                            <div className="w-14 h-14 rounded-full bg-blue-500/10 flex items-center justify-center mb-6 text-[#4DA3FF] group-hover:bg-[#071B34] group-hover:text-white transition-colors duration-300 relative z-10">
                                <span className="material-icons-outlined text-3xl">lightbulb</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 font-heading group-hover:text-[#071B34] transition-colors duration-300 relative z-10">Innovation</h3>
                            <p className="text-sm text-slate-300 group-hover:text-slate-600 transition-colors leading-relaxed duration-300 relative z-10">We embrace curiosity and continuous learning to create smarter solutions and drive meaningful progress.</p>
                        </div>
                        <div className="relative overflow-hidden bg-[#071B34] p-8 min-h-[360px] rounded-lg border border-white/10 hover:bg-white hover:border-transparent hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-all duration-300 group flex flex-col items-center text-center h-full transform hover:-translate-y-3 cursor-pointer">
                            <div className="absolute top-0 right-0 w-16 h-16 bg-white/5 rounded-bl-full -mr-4 -mt-4 group-hover:bg-[#071B34]/5 transition-colors duration-300"></div>
                            <div className="w-14 h-14 rounded-full bg-blue-500/10 flex items-center justify-center mb-6 text-[#4DA3FF] group-hover:bg-[#071B34] group-hover:text-white transition-colors duration-300 relative z-10">
                                <span className="material-icons-outlined text-3xl">military_tech</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 font-heading group-hover:text-[#071B34] transition-colors duration-300 relative z-10">Quality</h3>
                            <p className="text-sm text-slate-300 group-hover:text-slate-600 transition-colors leading-relaxed duration-300 relative z-10">We maintain high standards to deliver reliable, scalable solutions and build long-term confidence.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-20 bg-[#f8fafc] dark:bg-background-dark border-y border-border-light dark:border-white/10">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#071B34] dark:text-white mb-4">The Team Behind PEER</h2>
                        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Meet the dedicated experts driving innovation and delivering exceptional results for our clients every single day.</p>
                    </div>
                    {/* Primary Row: 2 Vertical Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-12">

                        {/* Misha Edara - Founder */}
                        <div
                            onClick={() => navigate('/team?member=misha-edara')}
                            className="relative overflow-hidden bg-white dark:bg-[#071B34] pt-10 pb-12 px-10 rounded-[28px] shadow-none border border-gray-100 dark:border-white/10 flex flex-col items-center hover:bg-blue-50/70 dark:hover:bg-[#0a2340] hover:border-blue-100 dark:hover:border-blue-900/50 hover:shadow-[0_16px_40px_rgba(59,130,246,0.16)] hover:-translate-y-2 transition-all duration-300 group cursor-pointer"
                        >
                            <div className="absolute top-0 right-0 w-16 h-16 bg-blue-200/60 dark:bg-blue-500/20 rounded-bl-[24px] opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none" />
                            <div className="relative mt-3 mb-6 flex-shrink-0" style={{ width: '160px', height: '160px' }}>
                                <div className="absolute top-4 right-[-10px] w-36 h-36 rounded-[20px] bg-blue-300/30 dark:bg-blue-500/25 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none" />
                                <div className="relative w-36 h-36 rounded-[20px] overflow-hidden bg-gradient-to-b from-[#e3e6ec] to-[#f3f5f8] dark:from-[#2d3748] dark:to-[#1a202c] flex items-center justify-center border-2 border-[#d2d9e4] dark:border-slate-700 group-hover:border-blue-400 dark:group-hover:border-blue-500 group-hover:shadow-[0_0_0_4px_rgba(59,130,246,0.22)] transition-all duration-300 z-10">
                                    <TeamAvatar src={teamImages["misha-edara"]} alt="Misha Edara" silhouetteClass="w-full h-full text-slate-700 dark:text-slate-355" />
                                </div>
                            </div>
                            <h3 className="text-xl font-bold font-display text-[#071B34] dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-300 mb-1 transition-colors duration-300">Misha Edara</h3>
                            <p className="text-[#3b82f6] dark:text-blue-400 font-extrabold text-xs uppercase tracking-widest">Founder</p>
                        </div>

                        {/* Vineela Mandava - Co-Founder — hidden, uncomment to restore */}
                        {/* <div
                            onClick={() => navigate('/team?member=vineela-mandava')}
                            className="relative overflow-hidden bg-white dark:bg-[#071B34] pt-10 pb-12 px-10 rounded-[28px] shadow-none border border-gray-100 dark:border-white/10 flex flex-col items-center hover:bg-blue-50/70 dark:hover:bg-[#0a2340] hover:border-blue-100 dark:hover:border-blue-900/50 hover:shadow-[0_16px_40px_rgba(59,130,246,0.16)] hover:-translate-y-2 transition-all duration-300 group cursor-pointer"
                        >
                            <div className="absolute top-0 right-0 w-16 h-16 bg-blue-200/60 dark:bg-blue-500/20 rounded-bl-[24px] opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none" />
                            <div className="relative mt-3 mb-6 flex-shrink-0" style={{ width: '160px', height: '160px' }}>
                                <div className="absolute top-4 right-[-10px] w-36 h-36 rounded-[20px] bg-blue-300/30 dark:bg-blue-500/25 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none" />
                                <div className="relative w-36 h-36 rounded-[20px] overflow-hidden bg-gradient-to-b from-[#e3e6ec] to-[#f3f5f8] dark:from-[#2d3748] dark:to-[#1a202c] flex items-center justify-center border-2 border-[#d2d9e4] dark:border-slate-700 group-hover:border-blue-400 dark:group-hover:border-blue-500 group-hover:shadow-[0_0_0_4px_rgba(59,130,246,0.22)] transition-all duration-300 z-10">
                                    <TeamAvatar src={teamImages["vineela-mandava"]} alt="Vineela Mandava" silhouetteClass="w-full h-full text-slate-700 dark:text-slate-355" />
                                </div>
                            </div>
                            <h3 className="text-xl font-bold font-display text-[#071B34] dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-300 mb-1 transition-colors duration-300">Vineela Mandava</h3>
                            <p className="text-[#3b82f6] dark:text-blue-400 font-extrabold text-xs uppercase tracking-widest">Co-Founder</p>
                        </div> */}

                        {/* Vivek Philar - CEO */}
                        <div
                            onClick={() => navigate('/team?member=vivek-philar')}
                            className="relative overflow-hidden bg-white dark:bg-[#071B34] pt-10 pb-12 px-10 rounded-[28px] shadow-none border border-gray-100 dark:border-white/10 flex flex-col items-center hover:bg-blue-50/70 dark:hover:bg-[#0a2340] hover:border-blue-100 dark:hover:border-blue-900/50 hover:shadow-[0_16px_40px_rgba(59,130,246,0.16)] hover:-translate-y-2 transition-all duration-300 group cursor-pointer"
                        >
                            <div className="absolute top-0 right-0 w-16 h-16 bg-blue-200/60 dark:bg-blue-500/20 rounded-bl-[24px] opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none" />
                            <div className="relative mt-3 mb-6 flex-shrink-0" style={{ width: '160px', height: '160px' }}>
                                <div className="absolute top-4 right-[-10px] w-36 h-36 rounded-[20px] bg-blue-300/30 dark:bg-blue-500/25 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none" />
                                <div className="relative w-36 h-36 rounded-[20px] overflow-hidden bg-gradient-to-b from-[#e3e6ec] to-[#f3f5f8] dark:from-[#2d3748] dark:to-[#1a202c] flex items-center justify-center border-2 border-[#d2d9e4] dark:border-slate-700 group-hover:border-blue-400 dark:group-hover:border-blue-500 group-hover:shadow-[0_0_0_4px_rgba(59,130,246,0.22)] transition-all duration-300 z-10">
                                    <TeamAvatar src={teamImages["vivek-philar"]} alt="Vivek Philar" silhouetteClass="w-full h-full text-slate-700 dark:text-slate-355" />
                                </div>
                            </div>
                            <h3 className="text-xl font-bold font-display text-[#071B34] dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-300 mb-1 transition-colors duration-300">Vivek Philar</h3>
                            <p className="text-[#3b82f6] dark:text-blue-400 font-extrabold text-xs uppercase tracking-widest">CEO</p>
                        </div>
                    </div>

                    {/* Secondary Row: 4 Horizontal Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">

                        {/* Naveen Marrivada */}
                        <div
                            onClick={() => navigate('/team?member=naveen-marrivada')}
                            className="relative overflow-hidden flex items-center gap-6 p-8 bg-white dark:bg-[#071B34] rounded-[20px] border border-gray-100 dark:border-white/10 shadow-none hover:bg-blue-50/70 dark:hover:bg-[#0a2340] hover:border-blue-100 dark:hover:border-blue-900/50 hover:shadow-[0_8px_24px_rgba(59,130,246,0.18)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
                        >
                            <div className="absolute top-0 right-0 w-9 h-9 bg-blue-200/60 dark:bg-blue-500/20 rounded-bl-[14px] opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none" />
                            <div className="w-20 h-20 rounded-[16px] overflow-hidden bg-gradient-to-b from-[#e3e6ec] to-[#f3f5f8] dark:from-[#2d3748] dark:to-[#1a202c] flex items-center justify-center border-2 border-[#d2d9e4] dark:border-slate-700 flex-shrink-0 group-hover:border-blue-400 group-hover:shadow-[0_0_0_3px_rgba(59,130,246,0.22)] transition-all duration-300">
                                <TeamAvatar src={teamImages["naveen-marrivada"]} alt="Naveen Marrivada" silhouetteClass="w-14 h-14 text-slate-700 dark:text-slate-355" />
                            </div>
                            <div className="flex flex-col flex-grow min-w-0">
                                <h4 className="font-bold text-[#071B34] dark:text-white text-base mb-1 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300">Naveen Marrivada</h4>
                                <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400 leading-tight">Director of Client Relations, NYC</p>
                            </div>
                        </div>

                        {/* Omer Halilovic */}
                        <div
                            onClick={() => navigate('/team?member=omer-halilovic')}
                            className="relative overflow-hidden flex items-center gap-6 p-8 bg-white dark:bg-[#071B34] rounded-[20px] border border-gray-100 dark:border-white/10 shadow-none hover:bg-blue-50/70 dark:hover:bg-[#0a2340] hover:border-blue-100 dark:hover:border-blue-900/50 hover:shadow-[0_8px_24px_rgba(59,130,246,0.18)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
                        >
                            <div className="absolute top-0 right-0 w-9 h-9 bg-blue-200/60 dark:bg-blue-500/20 rounded-bl-[14px] opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none" />
                            <div className="w-20 h-20 rounded-[16px] overflow-hidden bg-gradient-to-b from-[#e3e6ec] to-[#f3f5f8] dark:from-[#2d3748] dark:to-[#1a202c] flex items-center justify-center border-2 border-[#d2d9e4] dark:border-slate-700 flex-shrink-0 group-hover:border-blue-400 group-hover:shadow-[0_0_0_3px_rgba(59,130,246,0.22)] transition-all duration-300">
                                <TeamAvatar src={teamImages["omer-halilovic"]} alt="Omer Halilovic" silhouetteClass="w-14 h-14 text-slate-700 dark:text-slate-355" />
                            </div>
                            <div className="flex flex-col flex-grow min-w-0">
                                <h4 className="font-bold text-[#071B34] dark:text-white text-base mb-1 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300">Omer Halilovic</h4>
                                <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400 leading-tight">Director of NYC Services</p>
                            </div>
                        </div>

                        {/* Seema Mittal */}
                        <div
                            onClick={() => navigate('/team?member=seema-mittal')}
                            className="relative overflow-hidden flex items-center gap-6 p-8 bg-white dark:bg-[#071B34] rounded-[20px] border border-gray-100 dark:border-white/10 shadow-none hover:bg-blue-50/70 dark:hover:bg-[#0a2340] hover:border-blue-100 dark:hover:border-blue-900/50 hover:shadow-[0_8px_24px_rgba(59,130,246,0.18)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
                        >
                            <div className="absolute top-0 right-0 w-9 h-9 bg-blue-200/60 dark:bg-blue-500/20 rounded-bl-[14px] opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none" />
                            <div className="w-20 h-20 rounded-[16px] overflow-hidden bg-gradient-to-b from-[#e3e6ec] to-[#f3f5f8] dark:from-[#2d3748] dark:to-[#1a202c] flex items-center justify-center border-2 border-[#d2d9e4] dark:border-slate-700 flex-shrink-0 group-hover:border-blue-400 group-hover:shadow-[0_0_0_3px_rgba(59,130,246,0.22)] transition-all duration-300">
                                <TeamAvatar src={teamImages["seema-mittal"]} alt="Seema Mittal" silhouetteClass="w-14 h-14 text-slate-700 dark:text-slate-355" />
                            </div>
                            <div className="flex flex-col flex-grow min-w-0">
                                <h4 className="font-bold text-[#071B34] dark:text-white text-base mb-1 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300">Seema Mittal</h4>
                                <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400 leading-tight">Director of Recruiting</p>
                            </div>
                        </div>

                        {/* Sandeep Bussa */}
                        <div
                            onClick={() => navigate('/team?member=sandeep-bussa')}
                            className="relative overflow-hidden flex items-center gap-6 p-8 bg-white dark:bg-[#071B34] rounded-[20px] border border-gray-100 dark:border-white/10 shadow-none hover:bg-blue-50/70 dark:hover:bg-[#0a2340] hover:border-blue-100 dark:hover:border-blue-900/50 hover:shadow-[0_8px_24px_rgba(59,130,246,0.18)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
                        >
                            <div className="absolute top-0 right-0 w-9 h-9 bg-blue-200/60 dark:bg-blue-500/20 rounded-bl-[14px] opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none" />
                            <div className="w-20 h-20 rounded-[16px] overflow-hidden bg-gradient-to-b from-[#e3e6ec] to-[#f3f5f8] dark:from-[#2d3748] dark:to-[#1a202c] flex items-center justify-center border-2 border-[#d2d9e4] dark:border-slate-700 flex-shrink-0 group-hover:border-blue-400 group-hover:shadow-[0_0_0_3px_rgba(59,130,246,0.22)] transition-all duration-300">
                                <TeamAvatar src={teamImages["sandeep-bussa"]} alt="Sandeep Bussa" silhouetteClass="w-14 h-14 text-slate-700 dark:text-slate-355" />
                            </div>
                            <div className="flex flex-col flex-grow min-w-0">
                                <h4 className="font-bold text-[#071B34] dark:text-white text-base mb-1 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300">Sandeep Bussa</h4>
                                <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400 leading-tight">Director of Accounts &amp; HR</p>
                            </div>
                        </div>

                    </div>

                    <div className="mt-12 text-center">
                        <Link
                            to="/team"
                            className="inline-flex items-center justify-center px-8 py-3.5 bg-[#4DA3FF] hover:bg-[#3b82f6] text-white font-bold rounded-lg transition-all duration-300 shadow-[0_4px_15px_rgba(77,163,255,0.3)] hover:shadow-[0_8px_25px_rgba(77,163,255,0.4)] active:scale-95 transform hover:-translate-y-0.5"
                        >
                            View Full Team Biographies
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-[#071B34]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-12 text-center">
                        <span className="text-accent-blue font-semibold tracking-wider text-sm uppercase mb-2 block">Global Reach</span>
                        <h2 className="text-3xl font-heading font-bold text-white">Our Presence</h2>
                        <p className="mt-4 text-slate-300 max-w-2xl mx-auto">Strategically positioned to support clients across time zones with responsive and scalable delivery capabilities.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {/* New York - New Headquarters */}
                        <div className="relative group rounded-xl overflow-hidden shadow-lg h-64 md:h-80 cursor-default">
                            <img alt="New York City skyline" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80" />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100"></div>
                            <div className="absolute bottom-0 left-0 p-8 w-full transition-all duration-300 group-hover:pb-10">
                                <div className="flex items-center text-accent-blue mb-2 transition-transform duration-300 group-hover:-translate-y-1">
                                    <span className="material-icons-outlined mr-2">business</span>
                                    <span className="uppercase tracking-widest text-xs font-bold">Headquarters</span>
                                </div>
                                <h3 className="text-2xl font-bold text-white font-heading transition-transform duration-300 group-hover:-translate-y-1">New York, NY</h3>
                                <p className="text-slate-200 mt-2 text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 delay-75">
                                    Leading our strategic direction and executive operations.
                                </p>
                            </div>
                        </div>

                        {/* Princeton */}
                        <div className="relative group rounded-xl overflow-hidden shadow-lg h-64 md:h-80 cursor-default">
                            <img alt="Princeton New Jersey architecture" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Modern building facade representing corporate headquarters" data-location="Princeton, NJ" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtw2wLRM50o4JStyZE4-zfF-5ufY06qmdsG1buBCJ6f9GPxEKT4NG_7iaNGLXpw3kbJBwQy_HgF5nQpcDoO-tSyf6v-4U7pXMMCZ1zOj4RhXV7Q15qnTJ5oqZ2jrBJZZQerEti4dB2oWJSHNArNFc95VzZWZcMes5MeO7ZzBG11SCDcjQ6HXMqG2b2ZRT-HjniIn34sUrzmoTRPudvstBeh5FrEI5aMOuyvqRIP81e-b_wxSkdNrDcKYrc6vZyd3A-BgdexZYsySNM" />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100"></div>
                            <div className="absolute bottom-0 left-0 p-8 w-full transition-all duration-300 group-hover:pb-10">
                                <div className="flex items-center text-accent-blue mb-2 transition-transform duration-300 group-hover:-translate-y-1">
                                    <span className="material-icons-outlined mr-2">location_city</span>
                                    <span className="uppercase tracking-widest text-xs font-bold">Corporate Office</span>
                                </div>
                                <h3 className="text-2xl font-bold text-white font-heading transition-transform duration-300 group-hover:-translate-y-1">Princeton, NJ</h3>
                                <p className="text-slate-200 mt-2 text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 delay-75">
                                    Driving our North American operations and client relations.
                                </p>
                            </div>
                        </div>

                        {/* Bengaluru */}
                        <div className="relative group rounded-xl overflow-hidden shadow-lg h-64 md:h-80 cursor-default">
                            <img alt="Bengaluru tech park skyline" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Glass office building representing technology center" data-location="Bengaluru, India" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNo-BW-2DQFmJOCGPGckOp7-1xu77VC9nixtiHBLgThOnxylbF1LHdcwWXCpWXDmfhXt0L4KOrt_Y-P8kH-2uSmusZ3g-6PxgisKkQbm72PCX_huQ-77QmGFwxrDj9TV-sOX87NYVgCc6gWBiLEC4kmKzD-D1md8Yqgj3PFdjsWLVYsMc5b4RvYfbfaS3jQ1kITitqyZFSd1w6KY-CMtn14ZGSLU_fuGNRqz4VetKBuff06LaEKl8tKBj_mvjbwlKGoCPyN4NsIgCX" />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100"></div>
                            <div className="absolute bottom-0 left-0 p-8 w-full transition-all duration-300 group-hover:pb-10">
                                <div className="flex items-center text-accent-blue mb-2 transition-transform duration-300 group-hover:-translate-y-1">
                                    <span className="material-icons-outlined mr-2">code</span>
                                    <span className="uppercase tracking-widest text-xs font-bold">Global Delivery Center</span>
                                </div>
                                <h3 className="text-2xl font-bold text-white font-heading transition-transform duration-300 group-hover:-translate-y-1">Bengaluru, India</h3>
                                <p className="text-slate-200 mt-2 text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 delay-75">
                                    Powering innovation and 24/7 technical excellence.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
