import React from 'react';
import { Link } from 'react-router-dom';

export default function Blogs() {
    const articles = [
        {
            category: "Cloud Infrastructure",
            date: "Oct 24, 2023",
            title: "Navigating the Shift to Hybrid Cloud Architectures",
            excerpt: "As enterprises scale, the limitations of pure public or private clouds become apparent. Discover how a hybrid approach offers the optimal balance of flexibility, security, and cost-efficiency.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA-VdHiTpGqbp4ptl595vUqmnNimNGvTKBluld2eFsbDBkBxP9Or4-ZrZ4rg4jlVzovX2OaC8_gM-wWZmP2z6V8D29d-CaOzCjL78KA4XlkYJ8hEXUT8bQNPHus_NMoZCleObzc38a8x1K-UD2J0rQQlg3ZOPBL6H6T8Qmyc-d6hn8fwuYmobFaMz4lj4Di6NZDNHeQpkyMuhLAz8wzaV68GsmaO39wynzWenzkHP8k8bpB2bTeDJevOLgvT7pJHpRBA5O7GNd9tQJ_"
        },
        {
            category: "Security",
            date: "Oct 18, 2023",
            title: "The Role of AI in Modern Cybersecurity Defense",
            excerpt: "Threat actors are using AI to launch sophisticated attacks. Learn how organizations are countering with AI-driven security operations centers (SOCs) for real-time threat detection.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDZpHIe83K_r1-gV1KV9hKyQ_72SMlWG_9dWZd-8W5R35ZcspEFbjEsfoxxbsxvQr9tYoMji3hfEyPQdbsHljofBYUMn-8aTB6yxhruAyr7D1zkqiB3M_kLQIkjOcRpbzHREweZssuSPA8z1lGmyQpgGcAduPhAj7nxupK9pZPvdgZfyrmf8UU13XnMAB-tTHb8-gF7YztZ3TVK8laMrzK3Zux3JScxB2PWomLM8SR6jif7Blp5r206wO4ZwjtIjzrZloPzzXkmQauX"
        },
        {
            category: "Digital Transformation",
            date: "Oct 10, 2023",
            title: "Optimizing Legacy Systems for Digital Agility",
            excerpt: "Not every legacy system needs to be replaced. We explore strategies for refactoring and wrapping legacy code to integrate seamlessly with modern microservices.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCOwBCsI6_5gSRCbPxp5mS92gOABTrQbBletBI8iea5XlGHMU0oHBWzJFImF8s6CZp2JpsIu_magfcx7IwpsFhEND1uuJUKWi_ppBPaBhusXYmVHl0fVgeNGeLYwF31Kw1DPWuxUcIgdHG7GfgQcGjnr4wZbOJA4nk6R6dvssMW8llNzgplZBZC6ZEBhfNc3rPnSTXzWXZlEtwpZF1h2f7WUtvG4H6bgMytvrYLyeIlAmKqRxWrs7pcs8w5FL_rwYCHTYoF_kJz4J4S"
        },
        {
            category: "Workforce Strategy",
            date: "Sep 28, 2023",
            title: "Staff Augmentation vs. Managed Services: A Guide",
            excerpt: "Choosing the right engagement model is critical for project success. We break down the pros and cons of staff augmentation versus fully managed service agreements.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCNr3k8t9HTUqh-cReangkk8Jt88OCsSlw6muuHioUASCGKbDE2rWY5XMf_osxW7FKRj0pHk88SdHB-EF3305MhMo6dEfd6YMoFCwYujP__OlJYNwbf1AFWNoRJgPs3-tO79sFKHKP9Q8vpEi0RXSL_PZl12g7pZ9f3X_WYE4U2tZB8v4_LYmF1GHqezkDEDg1SZhzBoMJSECUuvlm82GX2x-m_UFsxeh7d6zOEQmaqW5UbKr_RjC0D2gJqJERMoaJt3pH95FyU0OwP"
        },
        {
            category: "Data Strategy",
            date: "Sep 15, 2023",
            title: "Data Governance in the Age of Big Data",
            excerpt: "With great data comes great responsibility. How to implement a governance framework that ensures compliance without stifling innovation and speed.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBiKPubp1P5Hrqrvokz0S0s2WDNjlGVBLfWA3tYrVkpft2idZ8xQ4WkL1XYpXzDVeE0aDLRNL3Zl8EQhc5gus31E7e7Tgahj2FXwr0LtnyzbYWDqtvmmScjZdmoW67cV9aKuQNh1v2vUOKsGY8-9Dgo27dQ2DSvpedWoXrCGd1fSNtBejqHHrTxOTLzqrVJ2xb6X-cd1Duoj5RfjnwB7Q9mZ4nE5QEL7WCoxH2Vx0bMXcLD3Aex-2361itWy0_52iJon7XIcCNJoSIT"
        },
        {
            category: "Project Management",
            date: "Sep 02, 2023",
            title: "Implementing Agile Methodologies in Large Enterprises",
            excerpt: "Scaling Agile is notoriously difficult. We discuss the SAFe framework and cultural shifts required to move a 5,000-person organization to an Agile mindset.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBvIair1g1glmWkU-x0WTn62AWoEL6RHgwtVSB5U5BpCsIwf5Ix_ftdbPHtf50_wS6zEt937vN6CpRTI0KighFq_2gseUOzfcgr4Xv_NJebYSqrTvp6RXSeBStGceBc84albHjkNUkGZYk6wOLeF4XejE8ufG3Ipa5igVRst5rjEPEGZ6BYUWJF-vXWxG8J3Czokdq_g9g5xRd1E6Z4cYr4NxVkD9ZG_Zf9hc4J5lxhQVlCkoim4ekSwJ7NionFP-1FWeUtDTRSG5bC"
        }
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <header className="bg-[#071B34] text-white relative overflow-hidden py-24 lg:py-32">
                <div className="absolute -right-20 -top-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
                <div className="absolute -left-20 bottom-0 w-72 h-72 bg-indigo-400 rounded-full blur-3xl opacity-10"></div>
                
                <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 text-center">
                    <span className="text-[#4DA3FF] font-display font-bold tracking-widest uppercase text-xs mb-4 block">Insights from Peer Consulting</span>
                    <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tight text-white">Insights &amp; Perspectives</h1>
                    <p className="text-lg text-[#8ba3bd] max-w-2xl mx-auto leading-relaxed">
                        Strategic insights, technology trends, and practical thinking for organizations navigating digital change.
                    </p>
                    
                    {/* Category filter chips */}
                    <div className="mt-10 flex flex-wrap justify-center gap-3">
                        {["All", "Cloud Infrastructure", "Security", "Digital Transformation", "DevOps", "Data Strategy"].map((cat, i) => (
                            <button key={cat} className={`px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 ${i === 0 ? 'bg-[#4DA3FF] text-white shadow-[0_4px_15px_rgba(77,163,255,0.3)]' : 'border border-white/20 text-white/70 bg-white/5 hover:bg-white hover:text-[#071B34] hover:border-white'}`}>
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </header>

            <div className="bg-[#f0f4f8] py-20 flex-grow border-t border-slate-200">
                <main className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
                    <div className="flex flex-col lg:flex-row gap-12">
                        
                        <div className="lg:w-2/3 xl:w-3/4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                                {articles.map((article, idx) => (
                                    <article key={idx} className="group relative bg-white rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_40px_rgba(77,163,255,0.15)] transition-all duration-300 border border-transparent hover:border-[#4DA3FF]/30 flex flex-col h-full transform hover:-translate-y-2">
                                        <div className="h-56 overflow-hidden relative">
                                            <div className="absolute inset-0 bg-[#071B34]/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                                            <img alt={article.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out" src={article.image} />
                                            <div className="absolute top-4 right-4 z-20">
                                                <span className="bg-[#071B34] text-white text-[10px] uppercase tracking-widest font-bold px-4 py-2 rounded shadow-lg">
                                                    {article.category}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="p-8 flex flex-col flex-grow bg-white">
                                            <div className="flex items-center gap-2 mb-4 text-[#8ba3bd] text-xs font-bold uppercase tracking-wider">
                                                <span className="material-icons text-[14px]">calendar_today</span>
                                                {article.date}
                                            </div>
                                            <h2 className="text-2xl font-display font-bold text-[#071B34] mb-4 leading-snug group-hover:text-[#4DA3FF] transition-colors">
                                                <Link to="#">{article.title}</Link>
                                            </h2>
                                            <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow">
                                                {article.excerpt}
                                            </p>
                                            <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
                                                <Link className="inline-flex items-center text-[#4DA3FF] font-bold text-sm hover:text-[#071B34] transition-colors" to="#">
                                                    Read Article
                                                </Link>
                                                <span className="material-icons text-[#4DA3FF] group-hover:translate-x-2 transition-transform duration-300">east</span>
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>
                            
                            {/* Pagination */}
                            <div className="flex items-center justify-center space-x-3">
                                <button className="px-5 py-2.5 bg-white border border-slate-200 text-slate-400 rounded text-sm font-bold uppercase tracking-wider hover:bg-slate-50 transition-colors duration-200">
                                    Previous
                                </button>
                                <button className="w-10 h-10 flex items-center justify-center bg-[#4DA3FF] text-white rounded font-bold shadow-md">1</button>
                                <button className="w-10 h-10 flex items-center justify-center bg-white border border-slate-200 text-slate-600 hover:text-[#4DA3FF] hover:border-[#4DA3FF] rounded font-bold transition-colors duration-200">2</button>
                                <button className="w-10 h-10 flex items-center justify-center bg-white border border-slate-200 text-slate-600 hover:text-[#4DA3FF] hover:border-[#4DA3FF] rounded font-bold transition-colors duration-200">3</button>
                                <button className="px-5 py-2.5 bg-white border border-slate-200 text-slate-600 rounded text-sm font-bold uppercase tracking-wider hover:bg-slate-50 hover:text-[#4DA3FF] hover:border-[#4DA3FF] transition-colors duration-200">
                                    Next
                                </button>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <aside className="lg:w-1/3 xl:w-1/4 space-y-8">
                            <div className="bg-white p-8 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100">
                                <h3 className="text-sm font-display font-bold uppercase tracking-widest text-[#071B34] mb-6 flex items-center gap-2">
                                    <span className="w-2 h-2 bg-[#4DA3FF] rounded-full"></span> Search Insights
                                </h3>
                                <div className="relative">
                                    <input className="w-full pl-4 pr-10 py-3 rounded border border-slate-200 bg-slate-50 text-[#071B34] text-sm focus:outline-none focus:ring-2 focus:ring-[#4DA3FF] focus:bg-white transition-all" placeholder="Keywords..." type="text" />
                                    <button className="absolute right-3 top-3 text-slate-400 hover:text-[#4DA3FF] transition-colors">
                                        <span className="material-icons text-xl">search</span>
                                    </button>
                                </div>
                            </div>
                            
                            <div className="bg-white p-8 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100">
                                <h3 className="text-sm font-display font-bold uppercase tracking-widest text-[#071B34] mb-6 flex items-center gap-2">
                                    <span className="w-2 h-2 bg-[#4DA3FF] rounded-full"></span> Categories
                                </h3>
                                <ul className="space-y-4">
                                    {[
                                        { name: "Cloud Infrastructure", count: 12 },
                                        { name: "Cybersecurity", count: 8 },
                                        { name: "Digital Transformation", count: 15 },
                                        { name: "Resource Management", count: 5 },
                                        { name: "Data Strategy", count: 9 }
                                    ].map(cat => (
                                        <li key={cat.name}>
                                            <a className="flex items-center justify-between group" href="#">
                                                <span className="text-slate-600 text-sm font-medium group-hover:text-[#4DA3FF] transition-colors">{cat.name}</span>
                                                <span className="bg-slate-50 text-slate-500 border border-slate-100 text-xs font-bold px-3 py-1 rounded group-hover:bg-[#4DA3FF]/10 group-hover:text-[#4DA3FF] group-hover:border-transparent transition-colors">{cat.count}</span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            
                            <div className="bg-[#0B2242] p-8 rounded-xl shadow-lg border border-[#071B34] relative overflow-hidden">
                                <div className="absolute -right-10 -top-10 w-32 h-32 bg-[#4DA3FF] rounded-full blur-3xl opacity-20 pointer-events-none"></div>
                                <h3 className="text-sm font-display font-bold uppercase tracking-widest text-white mb-3">Subscribe</h3>
                                <p className="text-sm text-[#8ba3bd] mb-6 leading-relaxed">Get practical analysis and business-focused insights delivered directly to your inbox.</p>
                                <form className="space-y-4 relative z-10">
                                    <input className="w-full px-4 py-3 rounded border border-white/10 bg-[#071B34] text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#4DA3FF] placeholder-white/40" placeholder="Email Address" type="email" />
                                    <button className="w-full bg-[#4DA3FF] hover:bg-[#3b82f6] text-white font-bold py-3 rounded transition-colors shadow-md text-sm uppercase tracking-wider" type="button">
                                        Subscribe Now
                                    </button>
                                </form>
                            </div>
                        </aside>
                    </div>
                </main>
            </div>
        </div>
    );
}
