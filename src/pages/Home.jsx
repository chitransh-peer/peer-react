import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const cert1Img = new URL('../assets/certifications/1.png', import.meta.url).href;
const cert2Img = new URL('../assets/certifications/2.png', import.meta.url).href;
const cert3Img = new URL('../assets/certifications/3.png', import.meta.url).href;
const cert4Img = new URL('../assets/certifications/4.png', import.meta.url).href;
const cert5Img = new URL('../assets/certifications/5.png', import.meta.url).href;
const cert6Img = new URL('../assets/certifications/6.png', import.meta.url).href;

// Per-card display configuration for the certification scroll strip
const certCards = [
    // 1 — NJ State Seal (white bg, circular seal)
    { src: cert1Img, bg: 'bg-white', border: 'border border-gray-100', pad: 'p-3', fit: 'object-contain' },
    // 2 — Connecticut (outline lettering — invisible on white → dark navy bg)
    { src: cert2Img, bg: 'bg-[#071B34]', border: 'border-0', pad: 'p-4', fit: 'object-contain' },
    // 3 — Port Authority NY NJ (has its own blue bg → fill the card)
    { src: cert3Img, bg: 'bg-[#0032A0]', border: 'border-0', pad: 'p-0', fit: 'object-cover' },
    // 4 — HUBZone Certified (white bg, wide logo)
    { src: cert4Img, bg: 'bg-white', border: 'border border-gray-100', pad: 'p-3', fit: 'object-contain' },
    // 5 — NYC m/wbe (white bg, square logo)
    { src: cert5Img, bg: 'bg-white', border: 'border border-gray-100', pad: 'p-1', fit: 'object-contain' },
    // 6 — NY State MWBE badge (white bg, circular badge — scale up to compensate for built-in whitespace)
    { src: cert6Img, bg: 'bg-white', border: 'border border-gray-100', pad: 'p-0', fit: 'object-contain', extraImgClass: 'scale-[1.6]' },
];

const CorporateSilhouette = ({ className = "w-full h-full text-slate-700" }) => (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="31" r="12" fill="currentColor" />
        <rect x="47" y="40" width="6" height="10" fill="currentColor" />
        <path d="M26 80 C26 62 36 50 50 50 C64 50 74 62 74 80 V80 H26 Z" fill="currentColor" />
        <path d="M44 50 L50 64 L56 50 Z" fill="#ffffff" />
        <path d="M49 61 L51 61 L52 76 L50 79 L48 76 Z" fill="#1e293b" />
    </svg>
);

// Renders a team photo with automatic silhouette fallback if image is missing or not provided
const TeamAvatar = ({ src, alt, silhouetteClass = "w-full h-full text-slate-700" }) => {
    const [err, setErr] = React.useState(false);
    return err || !src ? (
        <CorporateSilhouette className={silhouetteClass} />
    ) : (
        <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover object-top"
            onError={() => setErr(true)}
        />
    );
};

// Resolve local team member images using Vite's static asset handling
const teamImages = {
    "misha-edara": new URL('../assets/team/Misha.jpg', import.meta.url).href,
    "vineela-mandava": new URL('../assets/team/Vineela-Mandava.webp', import.meta.url).href,
    "omer-halilovic": new URL('../assets/team/Omer.webp', import.meta.url).href,
    "seema-mittal": new URL('../assets/team/Seema-Mittal.webp', import.meta.url).href,
    "sandeep-bussa": new URL('../assets/team/Sandeep-Bussa.png', import.meta.url).href,
    "vivek-philar": new URL('../assets/team/Vivek-Philar.webp', import.meta.url).href,
    "naveen-marrivada": new URL('../assets/team/Naveen.png', import.meta.url).href,
};

const servicesList = [
    {
        category: "CERTIFICATION",
        title: "ITIL Training & Certifications",
        description: "Comprehensive training for ITIL (Information Technology Infrastructure Library) with flexible learning models.",
        image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80",
        features: [
            { text: "ITIL Overview", path: "/itil-overview" },
            { text: "Certification Path", path: "/itil-certification" },
            { text: "ITIL Foundation", path: "/itil-foundation" }
        ],
        isItil: true
    },
    {
        category: "DEVELOPMENT",
        title: "Software Application Services",
        description: "From enterprise platforms to custom applications, we create technology solutions tailored to your operational goals.",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80",
        features: [
            "Custom Application Development",
            "Emerging Technology Integration",
            "Scalable Enterprise Solutions"
        ],
        link: "/services"
    },
    {
        category: "ENTERPRISE",
        title: "Enterprise & ERP Solutions",
        description: "We simplify complex operations through integrated ERP systems and enterprise technology solutions.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
        features: [
            "ERP Implementation & Support",
            "Business Process Automation",
            "Enterprise System Integration"
        ],
        link: "/services"
    },
    {
        category: "CLOUD",
        title: "Cloud & Digital Transformation",
        description: "We accelerate modernization through secure cloud technologies built for scalability and operational flexibility.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
        features: [
            "Cloud Migration & Modernization",
            "Digital Transformation Strategy",
            "Scalable Cloud Infrastructure"
        ],
        link: "/services"
    },
    {
        category: "ASSURANCE",
        title: "Quality Assurance",
        description: "We drive confidence through structured testing, validation, and quality-focused engineering practices.",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80",
        features: [
            "Engineering-Led QA",
            "Solutions Assessment & Validation",
            "Performance & Compliance Testing"
        ],
        link: "/services"
    },
    {
        category: "ADVISORY",
        title: "Business Consulting / Advisory",
        description: "Our advisory services help organizations navigate transformation with clarity, efficiency, and confidence.",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
        features: [
            "Strategic Business Consulting",
            "Operational Process Improvement",
            "Technology & Change Management"
        ],
        link: "/services"
    },
    {
        category: "MOBILE",
        title: "Mobile Application Development",
        description: "From concept to deployment,we create intuitive mobile experiences that keep businesses connected, agile, and user-focused.",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80",
        features: [
            "Cross-Platform App Development",
            "User-Centered Mobile Experiences",
            "Performance & Scalability Optimization"
        ],
        link: "/services"
    },
    {
        category: "ANALYTICS",
        title: "Data Science & Analytics",
        description: "We turn complex data into strategic insights that drive smarter decisions and measurable business value. ",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
        features: [
            "Business Intelligence & Reporting",
            "Predictive Data Analytics",
            "Data-Driven Strategy Solutions"
        ],
        link: "/services"
    },
    {
        category: "SECURITY",
        title: "Cyber Security Solutions",
        description: "Our cybersecurity approach secures digital ecosystems through strategic risk management, advanced protection frameworks, and proactive security planning.",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&q=80",
        features: [
            "Threat Prevention & Monitoring",
            "Security Risk Assessment",
            "Data Protection & Compliance"
        ],
        link: "/services"
    },
    {
        category: "STAFFING",
        title: "Strategic Staffing",
        description: "Our staffing solutions provide access to experienced talent designed to support scalable business growth.",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80",
        features: [
            "Technical Resource Augmentation",
            "Scalable Workforce Solutions",
            "Specialized IT Talent Support"
        ],
        link: "/services"
    },
    {
        category: "INFRASTRUCTURE",
        title: "Infrastructure Solutions",
        description: "We strengthen operational efficiency through reliable infrastructure built for modern enterprise demands.",
        image: "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=600&q=80",
        features: [
            "Infrastructure Planning & Support",
            "Network & System Optimization",
            "IT Operations Management"
        ],
        link: "/services"
    }
];

export default function Home() {
    const navigate = useNavigate();
    const heroImages = [
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop", // Abstract tech
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop", // Cyber security/tech
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop", // Office / business
        "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"  // Digital / hardware
    ];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <section className="py-16 lg:py-32 lg:min-h-[750px] flex flex-col justify-center relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #071B34 0%, #0B2242 100%)' }}>
                {/* Floating gradient sweep — atmospheric light from bottom-left to bottom-right */}
                <div className="hero-gradient-sweep" aria-hidden="true"></div>
                <div className="absolute -right-20 -top-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-20 pointer-events-none"></div>
                <div className="absolute -left-20 bottom-0 w-80 h-80 bg-indigo-400 rounded-full blur-3xl opacity-10 pointer-events-none"></div>
                <div className="absolute bottom-10 right-1/3 w-64 h-64 bg-teal-400 rounded-full opacity-[0.07] hero-breathe pointer-events-none"></div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="col-span-12 lg:col-span-8">
                        <h1 className="text-white text-4xl sm:text-5xl lg:text-[72px] font-display font-bold leading-tight mb-6 tracking-tight">
                            Powering Digital Growth Through Trusted Technology
                        </h1>
                        <p className="text-[#8ba3bd] text-lg lg:text-[20px] font-body mb-10 max-w-2xl leading-relaxed">
                            From strategy to execution, we help organizations build smarter, scale faster, and stay ahead.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link className="inline-flex justify-center items-center px-8 py-4 bg-[#4DA3FF] text-white font-bold rounded transition-all duration-300 shadow-[0_4px_15px_rgba(77,163,255,0.2)] transform hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(77,163,255,0.4)] hover:bg-[#3b82f6]" to="/services">
                                Discover Our Solutions
                            </Link>
                        </div>
                        {/* Stats strip */}
                        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
                            <div className="flex items-center gap-2">
                                <span className="text-2xl font-bold text-white">60+</span>
                                <span className="text-sm text-[#8ba3bd] leading-tight">Professionals</span>
                            </div>
                            <div className="w-px h-8 bg-white/20 hidden sm:block"></div>
                            <div className="flex items-center gap-2">
                                <span className="text-2xl font-bold text-white">15</span>
                                <span className="text-sm text-[#8ba3bd] leading-tight">Years Experience</span>
                            </div>
                            <div className="w-px h-8 bg-white/20 hidden sm:block"></div>
                            <div className="flex items-center gap-2">
                                <span className="text-2xl font-bold text-white">100+</span>
                                <span className="text-sm text-[#8ba3bd] leading-tight">Clients Served</span>
                            </div>
                        </div>
                    </div>
                    <div className="hidden lg:block lg:col-span-4 relative h-full min-h-[300px] rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.5)] overflow-hidden border border-white/10"
                        style={{ background: 'linear-gradient(135deg, #0B2242 0%, #071B34 100%)' }}>
                        {/* soft indigo glow bottom-left, blue glow top-right — matching About page style */}
                        <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-blue-400 rounded-full blur-3xl opacity-40 z-10 pointer-events-none"></div>
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-400 rounded-full blur-3xl opacity-30 z-10 pointer-events-none"></div>

                        {heroImages.map((img, index) => (
                            <img
                                key={index}
                                alt={`Technology showcase ${index + 1}`}
                                className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${index === currentImageIndex ? "opacity-100 scale-105" : "opacity-0 scale-100"
                                    }`}
                                src={img}
                            />
                        ))}
                        <div className="absolute inset-0 bg-gradient-to-bl from-white/10 via-transparent to-[#071B34]/40 z-10 pointer-events-none"></div>
                    </div>
                </div>
            </section>
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                        <div className="col-span-12 lg:col-span-6">
                            <div className="w-16 h-1 bg-accent-blue mb-6"></div>
                            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#071B34] mb-6">
                                Your Partner in Smart Transformation
                            </h2>
                            <p className="text-slate-600 font-body text-lg leading-relaxed mb-6">
                                At Peer Consulting Resources, we don't just solve IT problems; we go beyond fixing problems — we build the technology foundation for long-term success. With over 15 years of industry experience, we bridge the gap between complex technology and business objectives. </p>
                            <p className="text-slate-600 font-body text-lg leading-relaxed mb-8">
                                Our experts work as an extension of your team to deliver solutions that are efficient, secure, and built to scale.
                            </p>
                            <Link className="text-[#071B34] font-bold inline-flex items-center gap-2 hover:text-accent-blue transition-all" to="/about">
                                Learn More About Us <span className="material-icons text-sm">arrow_forward</span>
                            </Link>
                        </div>
                        <div className="col-span-12 lg:col-span-6 relative h-64 sm:h-80 lg:h-[400px]">
                            <img alt="Diverse team collaborating in modern office" className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-sm" data-alt="Diverse team collaborating in modern office" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5YHLyIM-OaEcUBU0gUvcWvtVpHWN4N0cH5keQhQ1lvhuU49ClI6xXrk5MsOKERCAMR6x_K8BF--FNO8odhZDk-CWg2QUZE05UhrFbkA5hdWtAWL882AoyexK-dypgdeftqXth7jqZcZEaACINvir6IAh8vodNsPsHVAyQ2InIM7oq93ML6oQJYYNMvs3yNVa_rU1R6RtdvcBnzO0k5DD8D_k4QF5ljRCWh85FF_omEa0lZHFkR2ZkmAu111H26Qlg4rBIr6p4lv85" />
                            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#071B34]/10 rounded-full -z-10 hidden lg:block"></div>
                            <div className="absolute -top-6 -right-6 w-32 h-32 bg-slate-100 rounded-full -z-10 hidden lg:block"></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-20 bg-[#071B34] border-y border-white/10">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-4">Our Expertise in Action</h2>
                        <p className="text-[#8ba3bd]">End-to-end IT technology solutions designed to move with the pace of modern business.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {servicesList.slice(0, 6).map((service, idx) => {
                            const isItil = service.isItil;
                            const CardElement = isItil ? 'div' : Link;
                            const cardProps = isItil ? {
                                onClick: (e) => {
                                    if (e.target.closest('a')) return;
                                    navigate('/itil-overview');
                                }
                            } : { to: service.link };

                            return (
                                <CardElement
                                    key={idx}
                                    {...cardProps}
                                    className="group relative bg-[#0B2242] hover:bg-white rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_40px_rgba(77,163,255,0.15)] transition-all duration-300 border border-white/10 hover:border-transparent flex flex-col h-full transform hover:-translate-y-2 cursor-pointer"
                                >
                                    <div className="h-56 overflow-hidden relative">
                                        {/* Visual hover brightness effect overlay */}
                                        <div className="absolute inset-0 bg-[#071B34]/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                                        <img
                                            alt={service.title}
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                                            src={service.image}
                                        />
                                        <div className="absolute top-4 right-4 z-20">
                                            <span className="bg-[#071B34] dark:bg-[#0B2242] text-white text-[10px] uppercase tracking-widest font-bold px-4 py-2 rounded shadow-lg border border-white/10">
                                                {service.category}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-8 flex flex-col flex-grow bg-transparent">

                                        {/* Title */}
                                        <h3 className="text-xl font-display font-bold text-white group-hover:text-primary mb-3 transition-colors duration-300 leading-snug">
                                            {service.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-slate-300 group-hover:text-slate-600 text-sm leading-relaxed mb-6 flex-grow transition-colors duration-300">
                                            {service.description}
                                        </p>

                                        {/* Features Checklist */}
                                        <ul className="space-y-2.5 mb-8 w-full">
                                            {service.features.map((feature, fIdx) => {
                                                if (isItil) {
                                                    return (
                                                        <li key={fIdx} className="flex items-center justify-start w-full">
                                                            <Link
                                                                to={feature.path}
                                                                className="flex items-center gap-2 text-sm text-slate-300 group-hover:text-slate-700 hover:text-accent-blue group-hover:hover:text-blue-600 font-medium transition-colors py-0.5 px-2 rounded hover:bg-white/10 group-hover:hover:bg-slate-100 w-full"
                                                            >
                                                                <span className="material-icons text-accent-blue group-hover:text-primary text-[16px] transition-colors duration-300">check_circle</span>
                                                                {feature.text}
                                                            </Link>
                                                        </li>
                                                    );
                                                } else {
                                                    return (
                                                        <li key={fIdx} className="flex items-center gap-2 text-sm text-slate-300 group-hover:text-slate-700 transition-colors duration-300">
                                                            <span className="material-icons text-accent-blue group-hover:text-primary text-[16px] transition-colors duration-300">check_circle</span>
                                                            {feature}
                                                        </li>
                                                    );
                                                }
                                            })}
                                        </ul>

                                        {/* Footer block */}
                                        <div className="mt-auto pt-6 border-t border-white/10 group-hover:border-slate-100 flex items-center justify-between transition-colors duration-300">
                                            <span className="text-accent-blue group-hover:text-blue-600 font-bold text-sm inline-flex items-center gap-1 transition-colors duration-300">
                                                {isItil ? "Choose Course" : "Learn More"}
                                            </span>
                                            <span className="material-icons text-accent-blue group-hover:text-blue-600 transform group-hover:translate-x-2 transition-all duration-300">
                                                arrow_forward
                                            </span>
                                        </div>
                                    </div>
                                </CardElement>
                            );
                        })}
                    </div>
                    <div className="mt-12 text-center">
                        <Link
                            to="/services"
                            className="inline-flex items-center justify-center px-8 py-3.5 bg-[#4DA3FF] hover:bg-[#3b82f6] text-white font-bold rounded-lg transition-all duration-300 shadow-[0_4px_15px_rgba(77,163,255,0.3)] hover:shadow-[0_8px_25px_rgba(77,163,255,0.4)] active:scale-95 transform hover:-translate-y-0.5"
                        >
                            See All Capabilities
                        </Link>
                    </div>
                </div>
            </section>
            <section className="py-28 bg-gradient-to-r from-[#f0f7ff] via-[#e0efff] to-[#f0f7ff] dark:from-slate-800 dark:via-slate-800 dark:to-slate-900 border-y border-blue-200 dark:border-white/10">
                <div className="container mx-auto px-6 lg:px-12 mb-8 text-center">
                    <h2 className="text-3xl lg:text-4xl font-display font-bold text-primary-text dark:text-white mb-4">Certifications</h2>
                </div>
                <div className="relative w-full overflow-hidden pb-4">
                    <div className="flex flex-nowrap animate-scroll pause-hover" style={{ width: 'max-content' }}>
                        {/* First set */}
                        <div className="flex flex-nowrap items-center gap-10 pr-10">
                            {certCards.map((card, i) => (
                                <div key={i} className={`${card.bg} ${card.pad} shadow-md rounded-lg overflow-hidden flex items-center justify-center w-56 h-32 flex-shrink-0 cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${card.border}`}>
                                    <img src={card.src} alt={`Certification ${i + 1}`} className={`${card.fit} w-full h-full ${card.extraImgClass || ''}`} />
                                </div>
                            ))}
                        </div>
                        {/* Duplicate set for seamless infinite scroll */}
                        <div className="flex flex-nowrap items-center gap-10 pr-10" aria-hidden="true">
                            {certCards.map((card, i) => (
                                <div key={i} className={`${card.bg} ${card.pad} shadow-md rounded-lg overflow-hidden flex items-center justify-center w-56 h-32 flex-shrink-0 cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${card.border}`}>
                                    <img src={card.src} alt={`Certification ${i + 1}`} className={`${card.fit} w-full h-full ${card.extraImgClass || ''}`} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </section>
            <section className="py-20 bg-[#071B34]">
                <div className="container mx-auto px-6 lg:px-12 text-center">
                    <div className="mb-12">
                        <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-4">Industries We Serve</h2>
                        <p className="text-[#8ba3bd] max-w-2xl mx-auto">We bring focused expertise to sectors where precision, compliance, and impact matter most.</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left max-w-5xl mx-auto">
                        {/* Public Sector */}
                        <div className="relative overflow-hidden bg-[#0B2242] border border-white/10 rounded-xl p-8 lg:p-10 group hover:bg-white hover:border-transparent hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 cursor-default">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full -mr-8 -mt-8 group-hover:bg-[#071B34]/5 transition-colors duration-300"></div>
                            <h3 className="text-2xl font-bold font-display text-white group-hover:text-[#071B34] mb-4 relative z-10 transition-colors duration-300">Public Sector</h3>
                            <p className="text-slate-300 group-hover:text-slate-600 text-sm leading-relaxed mb-6 relative z-10 transition-colors duration-300">Helping federal, state, and local government agencies address critical technology challenges, achieve greater efficiencies, and better serve their citizens through industry best practices.</p>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-2 relative z-10 text-sm">
                                <li className="flex items-start text-slate-300 group-hover:text-slate-700 transition-colors duration-300">
                                    <span className="material-icons text-accent-blue group-hover:text-[#071B34] text-[16px] mr-2 mt-[3px] transition-colors duration-300">check_circle</span>
                                    Strategic Advisor/Business Consulting
                                </li>
                                <li className="flex items-start text-slate-300 group-hover:text-slate-700 transition-colors duration-300">
                                    <span className="material-icons text-accent-blue group-hover:text-[#071B34] text-[16px] mr-2 mt-[3px] transition-colors duration-300">check_circle</span>
                                    Legacy Modernization
                                </li>
                                <li className="flex items-start text-slate-300 group-hover:text-slate-700 transition-colors duration-300">
                                    <span className="material-icons text-accent-blue group-hover:text-[#071B34] text-[16px] mr-2 mt-[3px] transition-colors duration-300">check_circle</span>
                                    Infrastructure &amp; Cloud Services
                                </li>
                                <li className="flex items-start text-slate-300 group-hover:text-slate-700 transition-colors duration-300">
                                    <span className="material-icons text-accent-blue group-hover:text-[#071B34] text-[16px] mr-2 mt-[3px] transition-colors duration-300">check_circle</span>
                                    Digital Transformation
                                </li>
                                <li className="flex items-start text-slate-300 group-hover:text-slate-700 transition-colors duration-300">
                                    <span className="material-icons text-accent-blue group-hover:text-[#071B34] text-[16px] mr-2 mt-[3px] transition-colors duration-300">check_circle</span>
                                    Enterprise Product Development
                                </li>
                                <li className="flex items-start text-slate-300 group-hover:text-slate-700 transition-colors duration-300">
                                    <span className="material-icons text-accent-blue group-hover:text-[#071B34] text-[16px] mr-2 mt-[3px] transition-colors duration-300">check_circle</span>
                                    Quality Engineering
                                </li>
                                <li className="flex items-start text-slate-300 group-hover:text-slate-700 transition-colors duration-300">
                                    <span className="material-icons text-accent-blue group-hover:text-[#071B34] text-[16px] mr-2 mt-[3px] transition-colors duration-300">check_circle</span>
                                    Software Application Services
                                </li>
                                <li className="flex items-start text-slate-300 group-hover:text-slate-700 transition-colors duration-300">
                                    <span className="material-icons text-accent-blue group-hover:text-[#071B34] text-[16px] mr-2 mt-[3px] transition-colors duration-300">check_circle</span>
                                    IT Talent Support
                                </li>
                            </ul>
                        </div>
                        {/* Private Sector */}
                        <div className="relative overflow-hidden bg-[#0B2242] border border-white/10 rounded-xl p-8 lg:p-10 group hover:bg-white hover:border-transparent hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 cursor-default">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full -mr-8 -mt-8 group-hover:bg-[#071B34]/5 transition-colors duration-300"></div>
                            <h3 className="text-2xl font-bold font-display text-white group-hover:text-[#071B34] mb-4 relative z-10 transition-colors duration-300">Private Sector</h3>
                            <p className="text-slate-300 group-hover:text-slate-600 text-sm leading-relaxed mb-6 relative z-10 transition-colors duration-300">Delivering mission-critical solutions and fostering technology modernization across Financial, Healthcare, Pharmaceutical, Retail, Telecom, Utilities, and other key industries.</p>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-2 relative z-10 text-sm">
                                <li className="flex items-start text-slate-300 group-hover:text-slate-700 transition-colors duration-300">
                                    <span className="material-icons text-accent-blue group-hover:text-[#071B34] text-[16px] mr-2 mt-[3px] transition-colors duration-300">check_circle</span>
                                    COTS &amp; MOTS Solutions
                                </li>
                                <li className="flex items-start text-slate-300 group-hover:text-slate-700 transition-colors duration-300">
                                    <span className="material-icons text-accent-blue group-hover:text-[#071B34] text-[16px] mr-2 mt-[3px] transition-colors duration-300">check_circle</span>
                                    Digital Transformation
                                </li>
                                <li className="flex items-start text-slate-300 group-hover:text-slate-700 transition-colors duration-300">
                                    <span className="material-icons text-accent-blue group-hover:text-[#071B34] text-[16px] mr-2 mt-[3px] transition-colors duration-300">check_circle</span>
                                    Infrastructure &amp; Cloud Services
                                </li>
                                <li className="flex items-start text-slate-300 group-hover:text-slate-700 transition-colors duration-300">
                                    <span className="material-icons text-accent-blue group-hover:text-[#071B34] text-[16px] mr-2 mt-[3px] transition-colors duration-300">check_circle</span>
                                    Systems Integration
                                </li>
                                <li className="flex items-start text-slate-300 group-hover:text-slate-700 transition-colors duration-300">
                                    <span className="material-icons text-accent-blue group-hover:text-[#071B34] text-[16px] mr-2 mt-[3px] transition-colors duration-300">check_circle</span>
                                    Software App Services
                                </li>
                                <li className="flex items-start text-slate-300 group-hover:text-slate-700 transition-colors duration-300">
                                    <span className="material-icons text-accent-blue group-hover:text-[#071B34] text-[16px] mr-2 mt-[3px] transition-colors duration-300">check_circle</span>
                                    Quality Engineering
                                </li>
                                <li className="flex items-start text-slate-300 group-hover:text-slate-700 transition-colors duration-300">
                                    <span className="material-icons text-accent-blue group-hover:text-[#071B34] text-[16px] mr-2 mt-[3px] transition-colors duration-300">check_circle</span>
                                    Enterprise Product Development
                                </li>
                                <li className="flex items-start text-slate-300 group-hover:text-slate-700 transition-colors duration-300">
                                    <span className="material-icons text-accent-blue group-hover:text-[#071B34] text-[16px] mr-2 mt-[3px] transition-colors duration-300">check_circle</span>
                                    IT Talent Support
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-20 bg-black relative border-t border-white/10">
                <div className="container mx-auto px-6 lg:px-12 text-center">
                    <h2 className="text-3xl lg:text-5xl font-display font-bold text-white mb-16 tracking-tight">Trusted by Clients, Backed by Partners</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative">

                        {/*  Clients side  */}
                        <div>
                            <div className="flex items-center justify-center mb-10">
                                <div className="h-px bg-white/20 flex-grow"></div>
                                <h3 className="text-3xl font-bold text-[#4DA3FF] px-6 font-display">Organizations We Serve</h3>
                                <div className="h-px bg-white/20 flex-grow"></div>
                            </div>

                            <div className="flex flex-wrap justify-center gap-6 items-center text-white/70">
                                <span className="text-xl font-bold font-serif italic">petco</span>
                                <span className="text-xl font-black bg-white rounded-full text-black px-2 py-1 leading-none tracking-tighter">gsk</span>
                                <div className="text-[10px] font-bold text-center leading-tight">NYC<br /><span className="text-[8px] font-normal">Consumer and<br />Worker Protection</span></div>
                                <div className="text-[10px] font-bold text-center leading-tight">NYC<br /><span className="text-[8px] font-normal">Small Business<br />Services</span></div>
                                <div className="text-[10px] font-bold text-center leading-tight">NYC<br /><span className="text-[8px] font-normal">Department of<br />Education</span></div>
                                <span className="text-[10px] font-bold uppercase tracking-widest border border-white/50 px-2 py-1 rounded-full">FDNY</span>
                                <div className="text-[10px] font-bold text-center leading-tight">DENVER<br /><span className="text-[7px] font-normal uppercase">The Mile High City</span></div>
                                <span className="text-sm font-bold tracking-tight lowercase text-white">desibasket</span>
                                <div className="text-[10px] font-bold text-center leading-tight">NYC<br /><span className="text-[7px] font-normal">Housing Preservation &amp; Development</span></div>
                                <span className="text-xs font-bold tracking-widest">Liquidnet<span className="text-blue-500 text-[10px]">~</span></span>
                                <span className="text-sm font-serif">galax<span className="font-bold">Solutions</span></span>
                                <span className="text-lg font-black tracking-tighter">Genmab</span>
                                <div className="text-[8px] font-bold text-center leading-tight uppercase border border-white/30 p-1">New York City<br />Housing<br />Authority</div>
                                <span className="text-sm font-semibold flex items-center gap-1"><span className="grid grid-cols-2 gap-[1px] w-2 h-2"><span className="bg-[#f25022]"></span><span className="bg-[#7fba00]"></span><span className="bg-[#00a4ef]"></span><span className="bg-[#ffb900]"></span></span> Microsoft</span>
                                <span className="text-lg font-serif font-bold tracking-tight">Prudential</span>
                                <span className="text-sm font-black tracking-tight border-t-[3px] border-white pt-1">NEW YORK CITY DOT</span>
                                <span className="text-[10px] font-bold border rounded-full px-2 py-1">OATH NYC</span>
                                <div className="text-[8px] font-bold leading-tight">Department of<br />Youth &amp; Community<br />Development</div>
                                <span className="text-xs font-black uppercase">City of Anaheim</span>
                                <span className="text-xs font-black tracking-tighter">NYC<span className="text-[8px]">DOITT</span></span>
                            </div>
                        </div>

                        {/*  Partners side  */}
                        <div>
                            <div className="flex items-center justify-center mb-10">
                                <div className="h-px bg-white/20 flex-grow"></div>
                                <h3 className="text-3xl font-bold text-[#4DA3FF] px-6 font-display">Technology Alliances</h3>
                                <div className="h-px bg-white/20 flex-grow"></div>
                            </div>

                            <div className="flex flex-wrap justify-center gap-8 items-center text-white/80">
                                <span className="text-xl font-semibold flex items-center gap-2 mb-2"><span className="grid grid-cols-2 gap-[1px] w-4 h-4"><span className="bg-white"></span><span className="bg-white"></span><span className="bg-white"></span><span className="bg-white"></span></span> Microsoft</span>
                                <span className="text-2xl font-bold tracking-tighter lowercase mb-2">gcom</span>
                                <div className="text-xl font-black tracking-tight leading-none mb-2">orbit<br /><span className="text-[8px] font-normal uppercase tracking-widest text-white/50">reporting + analytics</span></div>
                                <span className="text-2xl font-black italic tracking-tighter mb-2">SAIC.</span>
                                <span className="text-xl font-light mb-2">PruTech</span>
                                <span className="text-2xl font-serif font-semibold italic mb-2">Spruce</span>
                                <span className="text-xl font-bold tracking-widest uppercase mb-2 text-gray-300">Archibus</span>
                                <span className="text-xl font-sans font-bold tracking-tight mb-2">Accela</span>
                                <div className="mb-2 text-center"><span className="text-xl font-black uppercase tracking-widest">Mythics</span><br /><span className="text-[8px] text-white/50">where your digital modernization takes flight</span></div>
                                <div className="mb-2 text-center"><span className="text-xl font-black uppercase tracking-tighter">TEKsystems<span className="text-blue-500 font-sans text-xs">®</span></span><br /><span className="text-[8px] italic uppercase text-right block">Own change</span></div>
                                <span className="text-xl font-black uppercase tracking-tight mb-2">SIMPLIGOV</span>
                                <span className="text-2xl font-bold lowercase tracking-tighter mb-2">infor</span>
                                <div className="mb-2 text-center"><span className="text-xl font-bold tracking-widest uppercase text-white/90">RANGAM</span><br /><span className="text-[8px] italic text-white/60">Empathy Drives Innovation®</span></div>
                                <div className="text-center mb-2"><span className="material-icons text-white/70">hub</span><br /><span className="text-sm font-bold uppercase tracking-widest">Synergy<br />Technologies</span></div>
                                <div className="text-center mb-2"><span className="text-sm font-serif font-bold">Synergy America, Inc.</span><br /><span className="text-[8px] italic text-white/50">Technology Staffing &amp; Solutions</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-[#f0f4f8] dark:bg-background-dark">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                        <div className="max-w-2xl">
                            <h2 className="text-3xl lg:text-4xl font-display font-bold text-primary-text dark:text-white mb-4">Join Our Team</h2>
                            <p className="text-slate-600 dark:text-slate-400 text-lg">
                                Explore opportunities to build meaningful work with a team that values excellence and impact.
                            </p>
                        </div>
                        <Link className="hidden md:inline-flex items-center text-primary-text dark:text-white font-bold hover:underline decoration-2 underline-offset-4 decoration-accent-blue transition-all" to="/careers">
                            Explore Open Positions <span className="material-icons text-sm ml-2">arrow_forward</span>
                        </Link>
                    </div>
                    <div className="mt-8 md:hidden text-center">
                        <Link className="inline-flex items-center text-primary-text dark:text-white font-bold hover:underline decoration-2 underline-offset-4 decoration-accent-blue transition-all" to="/careers">
                            View All Openings <span className="material-icons text-sm ml-2">arrow_forward</span>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
