import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getBlogById, getPublishedBlogs, parseMarkdown } from '../utils/blogUtils';

export default function BlogPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [related, setRelated] = useState([]);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const found = getBlogById(id);
    if (!found || found.status !== 'published') {
      setNotFound(true);
    } else {
      setBlog(found);
      // Related: same category, exclude current
      const all = getPublishedBlogs().filter((b) => b.id !== id && b.category === found.category).slice(0, 3);
      setRelated(all);
    }
    window.scrollTo(0, 0);
  }, [id]);

  if (notFound) {
    return (
      <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center">
        <div className="text-center">
          <span className="material-icons text-6xl text-slate-200 mb-4 block">article</span>
          <h1 className="text-2xl font-bold text-[#071B34] mb-2">Post Not Found</h1>
          <p className="text-slate-500 mb-6">This article may have been removed or is not yet published.</p>
          <Link to="/blogs" className="inline-flex items-center gap-2 bg-[#071B34] text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-[#0f2d52] transition-colors">
            <span className="material-icons text-[18px]">arrow_back</span>
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-[#4DA3FF] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const contentHtml = parseMarkdown(blog.content);

  // Estimate read time (avg 200 words/min)
  const wordCount = blog.content.split(/\s+/).filter(Boolean).length;
  const readTime = Math.max(1, Math.ceil(wordCount / 200));

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <div className="relative bg-[#071B34] text-white overflow-hidden">
        {/* Background image overlay */}
        {blog.coverImage && (
          <div className="absolute inset-0">
            <img src={blog.coverImage} alt={blog.title} className="w-full h-full object-cover opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#071B34]/80 via-[#071B34]/70 to-[#071B34]" />
          </div>
        )}

        {/* Decorative blobs */}
        <div className="absolute -right-24 -top-24 w-96 h-96 bg-[#4DA3FF]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-24 bottom-0 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-white/50 mb-8">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span className="material-icons text-[12px]">chevron_right</span>
            <Link to="/blogs" className="hover:text-white transition-colors">Blog</Link>
            <span className="material-icons text-[12px]">chevron_right</span>
            <span className="text-white/70 truncate max-w-xs">{blog.title}</span>
          </div>

          {/* Category + read time */}
          <div className="flex items-center flex-wrap gap-3 mb-6">
            <span className="bg-[#4DA3FF]/20 border border-[#4DA3FF]/30 text-[#4DA3FF] text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full">
              {blog.category}
            </span>
            <span className="flex items-center gap-1 text-white/50 text-xs">
              <span className="material-icons text-[14px]">schedule</span>
              {readTime} min read
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6 tracking-tight">
            {blog.title}
          </h1>

          {/* Excerpt */}
          {blog.excerpt && (
            <p className="text-lg text-white/70 leading-relaxed max-w-2xl mb-8">
              {blog.excerpt}
            </p>
          )}

          {/* Author + Date */}
          <div className="flex items-center gap-4 pt-6 border-t border-white/10">
            <div className="w-10 h-10 rounded-full bg-[#4DA3FF]/20 border border-[#4DA3FF]/30 flex items-center justify-center">
              <span className="material-icons text-[#4DA3FF] text-[18px]">person</span>
            </div>
            <div>
              <p className="text-sm font-bold text-white">{blog.author || 'Peer Editorial Team'}</p>
              <p className="text-xs text-white/50">
                {new Date(blog.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Cover image (if present) — full width below hero */}
      {blog.coverImage && (
        <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-10 mb-0">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img src={blog.coverImage} alt={blog.title} className="w-full h-72 md:h-96 object-cover" />
          </div>
        </div>
      )}

      {/* Content area */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Article body */}
          <article className="lg:w-2/3 max-w-2xl">
            {/* Social share row */}
            <div className="flex items-center gap-3 mb-12 pb-6 border-b border-slate-100">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Share:</span>
              {[
                { icon: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg', label: 'Facebook' },
                { icon: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg', label: 'Twitter' },
                { icon: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png', label: 'LinkedIn' },
              ].map((s) => (
                <button
                  key={s.label}
                  title={`Share on ${s.label}`}
                  onClick={() => navigator.clipboard.writeText(window.location.href)}
                  className="w-8 h-8 rounded-lg bg-slate-50 hover:bg-slate-100 flex items-center justify-center transition-colors border border-slate-100"
                >
                  <img src={s.icon} alt={s.label} className="w-4 h-4 object-contain" />
                </button>
              ))}
              <button
                onClick={() => { navigator.clipboard.writeText(window.location.href); }}
                title="Copy link"
                className="flex items-center gap-1.5 ml-2 text-xs text-slate-400 hover:text-[#4DA3FF] transition-colors"
              >
                <span className="material-icons text-[16px]">link</span>
                Copy link
              </button>
            </div>

            {/* Rendered content */}
            <div
              className="blog-content text-slate-700"
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />

            {/* Back to Blog */}
            <div className="mt-16 pt-10 border-t border-slate-100">
              <Link
                to="/blogs"
                className="inline-flex items-center gap-2 text-[#4DA3FF] font-bold text-sm hover:text-[#071B34] transition-colors group"
              >
                <span className="material-icons text-[18px] group-hover:-translate-x-1 transition-transform">arrow_back</span>
                Back to All Articles
              </Link>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:w-1/3">
            <div className="sticky top-8 space-y-6">
              {/* About Peer */}
              <div className="bg-[#071B34] text-white rounded-2xl p-7 relative overflow-hidden">
                <div className="absolute -right-8 -top-8 w-32 h-32 bg-[#4DA3FF]/20 rounded-full blur-2xl" />
                <div className="relative z-10">
                  <img src="/logo-white.png" alt="Peer Consulting" className="h-8 mb-5 opacity-80" />
                  <p className="text-sm text-blue-100/70 leading-relaxed mb-5">
                    Peer Consulting Resources, Inc. is an accredited training and IT consulting firm helping organizations achieve digital excellence.
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#4DA3FF] hover:text-white transition-colors"
                  >
                    Get in touch →
                  </Link>
                </div>
              </div>

              {/* Related posts */}
              {related.length > 0 && (
                <div className="bg-white border border-slate-100 rounded-2xl p-6">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-5 flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#4DA3FF] rounded-full" />
                    Related Articles
                  </h3>
                  <div className="space-y-5">
                    {related.map((r) => (
                      <Link key={r.id} to={`/blog/${r.id}`} className="flex gap-4 group">
                        <div className="w-16 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-slate-100">
                          {r.coverImage ? (
                            <img src={r.coverImage} alt={r.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <span className="material-icons text-slate-300">article</span>
                            </div>
                          )}
                        </div>
                        <div className="flex-grow min-w-0">
                          <p className="text-xs text-[#4DA3FF] font-bold mb-1">{r.category}</p>
                          <p className="text-sm font-bold text-[#071B34] group-hover:text-[#4DA3FF] transition-colors leading-snug line-clamp-2">{r.title}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className="bg-[#f0f4f8] border border-slate-200 rounded-2xl p-6">
                <span className="material-icons text-[#4DA3FF] text-3xl mb-3 block">email</span>
                <h3 className="font-bold text-[#071B34] mb-2">Stay Updated</h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-4">
                  Get the latest insights from Peer Consulting directly in your inbox.
                </p>
                <Link to="/contact" className="block text-center bg-[#071B34] hover:bg-[#0f2d52] text-white text-xs font-bold uppercase tracking-wider py-3 rounded-xl transition-colors">
                  Contact Us
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
