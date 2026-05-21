import React from 'react';
import { Link } from 'react-router-dom';

export default function AboutUs() {
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
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-800">Built Around</span> <br />
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
            <section className="py-16 bg-gradient-to-r from-[#f0f7ff] via-[#e0efff] to-[#f0f7ff] dark:from-slate-800 dark:via-slate-800 dark:to-slate-900 border-y border-blue-200 dark:border-white/10">
                <div className="container mx-auto px-6 lg:px-12 mb-8 text-center">
                    <h2 className="text-3xl lg:text-4xl font-display font-bold text-primary-text dark:text-white mb-4">Certifications</h2>
                </div>
                <div className="relative w-full overflow-hidden pb-4">
                    <div className="flex w-[200%] animate-scroll pause-hover">
                        <div className="flex w-1/2 justify-around items-center px-4 gap-6">
                            {/*  Card 1  */}
                            <div className="bg-white px-4 py-4 shadow-md rounded border border-gray-100 flex flex-col items-center justify-center w-48 h-24 flex-shrink-0 cursor-pointer hover:shadow-lg transition-shadow">
                                <span className="text-[10px] font-bold text-blue-600 uppercase tracking-tighter leading-none mb-1 text-center">New York State Of Opportunity</span>
                                <span className="text-xs font-black text-gray-800 tracking-wide text-center">MWBE CERTIFIED</span>
                            </div>
                            {/*  Card 2  */}
                            <div className="bg-white px-4 py-4 shadow-md rounded border border-gray-100 flex flex-col items-center justify-center w-48 h-24 flex-shrink-0 cursor-pointer hover:shadow-lg transition-shadow">
                                <span className="text-[10px] font-bold text-blue-500 uppercase tracking-tighter leading-none mb-1">New York City</span>
                                <span className="text-3xl font-black text-blue-900 tracking-tighter leading-none">M/WBE</span>
                                <span className="text-[8px] text-gray-500 uppercase mt-1 text-center">Minority and Women-Owned Business</span>
                            </div>
                            {/*  Card 3  */}
                            <div className="bg-white px-4 py-4 shadow-md rounded border border-gray-100 flex flex-col items-center justify-center w-48 h-24 flex-shrink-0 cursor-pointer hover:shadow-lg transition-shadow">
                                <div className="w-12 h-12 rounded-full border-2 border-yellow-500 flex items-center justify-center bg-blue-50">
                                    <span className="text-[8px] text-center font-bold text-blue-900 leading-none">THE STATE OF<br />NEW JERSEY</span>
                                </div>
                            </div>
                            {/*  Card 4  */}
                            <div className="bg-blue-800 px-4 py-4 shadow-md rounded flex flex-col items-center justify-center w-48 h-24 flex-shrink-0 border border-yellow-400 cursor-pointer hover:shadow-lg transition-shadow">
                                <span className="text-sm font-black text-white leading-tight text-center">PORT AUTHORITY<br />NY NJ</span>
                                <span className="text-[9px] text-yellow-400 mt-2 tracking-widest uppercase text-center">AIR LAND RAIL SEA</span>
                            </div>
                            {/*  Card 5  */}
                            <div className="bg-white px-4 py-4 shadow-md rounded border border-gray-100 flex flex-col items-center justify-center w-48 h-24 flex-shrink-0 cursor-pointer hover:shadow-lg transition-shadow">
                                <span className="text-xl font-black text-gray-800 tracking-tight">HUB<span className="text-yellow-500">Zone</span></span>
                                <span className="text-[10px] tracking-[0.2em] text-gray-500 mt-1 uppercase text-center border-t border-black w-full pt-1">Certified</span>
                            </div>
                            {/*  Card 6  */}
                            <div className="bg-black px-4 py-4 shadow-md rounded flex items-center justify-center w-48 h-24 flex-shrink-0 cursor-pointer hover:shadow-lg transition-shadow">
                                <span className="text-2xl font-serif text-white tracking-tighter">Connectic<span className="text-red-500 text-3xl leading-none">~</span>t</span>
                            </div>
                        </div>
                        {/*  DUPLICATE SET FOR INFINITE SCROLL  */}
                        <div className="flex w-1/2 justify-around items-center px-4 gap-6">
                            {/*  Card 1  */}
                            <div className="bg-white px-4 py-4 shadow-md rounded border border-gray-100 flex flex-col items-center justify-center w-48 h-24 flex-shrink-0 cursor-pointer hover:shadow-lg transition-shadow">
                                <span className="text-[10px] font-bold text-blue-600 uppercase tracking-tighter leading-none mb-1 text-center">New York State Of Opportunity</span>
                                <span className="text-xs font-black text-gray-800 tracking-wide text-center">MWBE CERTIFIED</span>
                            </div>
                            {/*  Card 2  */}
                            <div className="bg-white px-4 py-4 shadow-md rounded border border-gray-100 flex flex-col items-center justify-center w-48 h-24 flex-shrink-0 cursor-pointer hover:shadow-lg transition-shadow">
                                <span className="text-[10px] font-bold text-blue-500 uppercase tracking-tighter leading-none mb-1">New York City</span>
                                <span className="text-3xl font-black text-blue-900 tracking-tighter leading-none">M/WBE</span>
                                <span className="text-[8px] text-gray-500 uppercase mt-1 text-center">Minority and Women-Owned Business</span>
                            </div>
                            {/*  Card 3  */}
                            <div className="bg-white px-4 py-4 shadow-md rounded border border-gray-100 flex flex-col items-center justify-center w-48 h-24 flex-shrink-0 cursor-pointer hover:shadow-lg transition-shadow">
                                <div className="w-12 h-12 rounded-full border-2 border-yellow-500 flex items-center justify-center bg-blue-50">
                                    <span className="text-[8px] text-center font-bold text-blue-900 leading-none">THE STATE OF<br />NEW JERSEY</span>
                                </div>
                            </div>
                            {/*  Card 4  */}
                            <div className="bg-blue-800 px-4 py-4 shadow-md rounded flex flex-col items-center justify-center w-48 h-24 flex-shrink-0 border border-yellow-400 cursor-pointer hover:shadow-lg transition-shadow">
                                <span className="text-sm font-black text-white leading-tight text-center">PORT AUTHORITY<br />NY NJ</span>
                                <span className="text-[9px] text-yellow-400 mt-2 tracking-widest uppercase text-center">AIR LAND RAIL SEA</span>
                            </div>
                            {/*  Card 5  */}
                            <div className="bg-white px-4 py-4 shadow-md rounded border border-gray-100 flex flex-col items-center justify-center w-48 h-24 flex-shrink-0 cursor-pointer hover:shadow-lg transition-shadow">
                                <span className="text-xl font-black text-gray-800 tracking-tight">HUB<span className="text-yellow-500">Zone</span></span>
                                <span className="text-[10px] tracking-[0.2em] text-gray-500 mt-1 uppercase text-center border-t border-black w-full pt-1">Certified</span>
                            </div>
                            {/*  Card 6  */}
                            <div className="bg-black px-4 py-4 shadow-md rounded flex items-center justify-center w-48 h-24 flex-shrink-0 cursor-pointer hover:shadow-lg transition-shadow">
                                <span className="text-2xl font-serif text-white tracking-tighter">Connectic<span className="text-red-500 text-3xl leading-none">~</span>t</span>
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
            <section className="py-20 bg-[#f0f4f8] dark:bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-12 text-center">
                        <span className="text-primary-text font-semibold tracking-wider text-sm uppercase mb-2 block">Global Reach</span>
                        <h2 className="text-3xl font-heading font-bold text-slate-900 dark:text-white">Our Presence</h2>
                        <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Strategically positioned to support clients across time zones with responsive and scalable delivery capabilities. </p>
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
