import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getPublishedBlogs } from '../utils/blogUtils';

const ALL_CATEGORIES = ['All'];

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');

  useEffect(() => {
    setBlogs(getPublishedBlogs());
  }, []);

  // Build category list from actual blogs
  const categories = ['All', ...Array.from(new Set(blogs.map((b) => b.category)))];

  const filtered = blogs.filter((b) => {
    const matchCat = activeCategory === 'All' || b.category === activeCategory;
    const matchSearch =
      search === '' ||
      b.title.toLowerCase().includes(search.toLowerCase()) ||
      b.excerpt?.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  // Estimate read time
  const readTime = (content = '') => {
    const words = content.split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.ceil(words / 200));
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* ── Hero ── */}
      <header className="bg-[#071B34] text-white relative overflow-hidden py-24 lg:py-32">
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-20 bottom-0 w-72 h-72 bg-indigo-400 rounded-full blur-3xl opacity-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 text-center">
          <span className="text-[#4DA3FF] font-display font-bold tracking-widest uppercase text-xs mb-4 block">
            Insights from Peer Consulting
          </span>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tight text-white">
            Insights &amp; Perspectives
          </h1>
          <p className="text-lg text-[#8ba3bd] max-w-2xl mx-auto leading-relaxed mb-10">
            Strategic insights, technology trends, and practical thinking for organizations navigating digital change.
          </p>

          {/* Search bar */}
          <div className="relative max-w-md mx-auto mb-10">
            <span className="material-icons absolute left-4 top-3.5 text-white/40 text-xl">search</span>
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white/10 border border-white/20 text-white placeholder-white/40 rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#4DA3FF] backdrop-blur-md transition-all"
            />
          </div>

          {/* Category chips */}
          {categories.length > 1 && (
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                    activeCategory === cat
                      ? 'bg-[#4DA3FF] text-white shadow-[0_4px_15px_rgba(77,163,255,0.3)]'
                      : 'border border-white/20 text-white/70 bg-white/5 hover:bg-white hover:text-[#071B34] hover:border-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* ── Main ── */}
      <div className="bg-[#f0f4f8] py-20 flex-grow border-t border-slate-200">
        <main className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div className="flex flex-col lg:flex-row gap-12">

            {/* ── Blog Grid ── */}
            <div className="lg:w-2/3 xl:w-3/4">
              {filtered.length === 0 ? (
                /* Empty state */
                <div className="text-center py-24 bg-white rounded-2xl shadow-sm border border-slate-100">
                  <span className="material-icons text-6xl text-slate-200 mb-4 block">article</span>
                  {blogs.length === 0 ? (
                    <>
                      <h2 className="text-xl font-bold text-[#071B34] mb-2">No posts published yet</h2>
                      <p className="text-slate-500 text-sm max-w-sm mx-auto">
                        Our team is working on exciting content. Check back soon!
                      </p>
                    </>
                  ) : (
                    <>
                      <h2 className="text-xl font-bold text-[#071B34] mb-2">No results found</h2>
                      <p className="text-slate-500 text-sm">Try a different search term or category.</p>
                    </>
                  )}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {filtered.map((blog) => (
                    <article
                      key={blog.id}
                      className="group relative bg-white rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_40px_rgba(77,163,255,0.15)] transition-all duration-300 border border-transparent hover:border-[#4DA3FF]/30 flex flex-col h-full transform hover:-translate-y-2"
                    >
                      {/* Cover image */}
                      <div className="h-56 overflow-hidden relative bg-slate-100">
                        <div className="absolute inset-0 bg-[#071B34]/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                        {blog.coverImage ? (
                          <img
                            alt={blog.title}
                            src={blog.coverImage}
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#071B34] to-[#0f2d52]">
                            <span className="material-icons text-white/20 text-6xl">article</span>
                          </div>
                        )}
                        {/* Category badge */}
                        <div className="absolute top-4 right-4 z-20">
                          <span className="bg-[#071B34] text-white text-[10px] uppercase tracking-widest font-bold px-4 py-2 rounded shadow-lg">
                            {blog.category}
                          </span>
                        </div>
                        {/* Read time badge */}
                        <div className="absolute bottom-4 left-4 z-20">
                          <span className="bg-black/40 backdrop-blur-sm text-white text-[10px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1">
                            <span className="material-icons text-[12px]">schedule</span>
                            {readTime(blog.content)} min read
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-8 flex flex-col flex-grow">
                        <div className="flex items-center gap-2 mb-4 text-[#8ba3bd] text-xs font-bold uppercase tracking-wider">
                          <span className="material-icons text-[14px]">calendar_today</span>
                          {new Date(blog.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                          {blog.author && (
                            <>
                              <span className="w-1 h-1 bg-slate-300 rounded-full" />
                              <span>{blog.author}</span>
                            </>
                          )}
                        </div>

                        <h2 className="text-xl font-display font-bold text-[#071B34] mb-3 leading-snug group-hover:text-[#4DA3FF] transition-colors">
                          <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
                        </h2>

                        {blog.excerpt && (
                          <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                            {blog.excerpt}
                          </p>
                        )}

                        <div className="mt-auto pt-5 border-t border-slate-100 flex items-center justify-between">
                          <Link
                            to={`/blog/${blog.id}`}
                            className="inline-flex items-center text-[#4DA3FF] font-bold text-sm hover:text-[#071B34] transition-colors"
                          >
                            Read Article
                          </Link>
                          <span className="material-icons text-[#4DA3FF] group-hover:translate-x-2 transition-transform duration-300">
                            east
                          </span>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>

            {/* ── Sidebar ── */}
            <aside className="lg:w-1/3 xl:w-1/4 space-y-8">
              {/* Search */}
              <div className="bg-white p-8 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100">
                <h3 className="text-sm font-display font-bold uppercase tracking-widest text-[#071B34] mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#4DA3FF] rounded-full" /> Search Insights
                </h3>
                <div className="relative">
                  <input
                    className="w-full pl-4 pr-10 py-3 rounded border border-slate-200 bg-slate-50 text-[#071B34] text-sm focus:outline-none focus:ring-2 focus:ring-[#4DA3FF] focus:bg-white transition-all"
                    placeholder="Keywords..."
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <button className="absolute right-3 top-3 text-slate-400 hover:text-[#4DA3FF] transition-colors">
                    <span className="material-icons text-xl">search</span>
                  </button>
                </div>
              </div>

              {/* Categories */}
              {categories.length > 1 && (
                <div className="bg-white p-8 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100">
                  <h3 className="text-sm font-display font-bold uppercase tracking-widest text-[#071B34] mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#4DA3FF] rounded-full" /> Categories
                  </h3>
                  <ul className="space-y-3">
                    {categories.filter((c) => c !== 'All').map((cat) => {
                      const count = blogs.filter((b) => b.category === cat).length;
                      return (
                        <li key={cat}>
                          <button
                            onClick={() => setActiveCategory(cat)}
                            className="flex items-center justify-between group w-full text-left"
                          >
                            <span className={`text-slate-600 text-sm font-medium group-hover:text-[#4DA3FF] transition-colors ${activeCategory === cat ? 'text-[#4DA3FF] font-bold' : ''}`}>
                              {cat}
                            </span>
                            <span className="bg-slate-50 text-slate-500 border border-slate-100 text-xs font-bold px-3 py-1 rounded group-hover:bg-[#4DA3FF]/10 group-hover:text-[#4DA3FF] group-hover:border-transparent transition-colors">
                              {count}
                            </span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}

              {/* Subscribe CTA */}
              <div className="bg-[#0B2242] p-8 rounded-xl shadow-lg border border-[#071B34] relative overflow-hidden">
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-[#4DA3FF] rounded-full blur-3xl opacity-20 pointer-events-none" />
                <h3 className="text-sm font-display font-bold uppercase tracking-widest text-white mb-3">Subscribe</h3>
                <p className="text-sm text-[#8ba3bd] mb-6 leading-relaxed">
                  Get practical analysis and business-focused insights delivered directly to your inbox.
                </p>
                <form className="space-y-4 relative z-10">
                  <input
                    className="w-full px-4 py-3 rounded border border-white/10 bg-[#071B34] text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#4DA3FF] placeholder-white/40"
                    placeholder="Email Address"
                    type="email"
                  />
                  <button
                    className="w-full bg-[#4DA3FF] hover:bg-[#3b82f6] text-white font-bold py-3 rounded transition-colors shadow-md text-sm uppercase tracking-wider"
                    type="button"
                  >
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
