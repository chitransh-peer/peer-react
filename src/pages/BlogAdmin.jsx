import React, { useState, useEffect, useRef } from 'react';
import {
  getBlogs,
  saveBlog,
  deleteBlog,
  generateId,
  generateSlug,
} from '../utils/blogUtils';

/* ── Change this to your own password ── */
const ADMIN_PASSWORD = 'peer@admin2025';

const CATEGORIES = [
  'IT Service Management',
  'Certification',
  'Agile & PPM',
  'AI & Technology',
  'Digital Transformation',
  'Career & Training',
  'Cybersecurity',
  'Cloud Infrastructure',
  'Leadership',
  'Other',
];

const EMPTY_BLOG = {
  id: '',
  title: '',
  slug: '',
  category: CATEGORIES[0],
  excerpt: '',
  content: '',
  coverImage: '',
  author: '',
  date: new Date().toISOString().slice(0, 10),
  status: 'draft',
};

/* ───────────── Login Screen ───────────── */
function LoginScreen({ onLogin }) {
  const [pw, setPw] = useState('');
  const [err, setErr] = useState(false);
  const [show, setShow] = useState(false);

  const handle = (e) => {
    e.preventDefault();
    if (pw === ADMIN_PASSWORD) {
      sessionStorage.setItem('peer_admin_auth', '1');
      onLogin();
    } else {
      setErr(true);
      setPw('');
    }
  };

  return (
    <div className="min-h-screen bg-[#071B34] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo area */}
        <div className="text-center mb-10">
          <div className="w-16 h-16 rounded-2xl bg-[#4DA3FF]/20 border border-[#4DA3FF]/30 flex items-center justify-center mx-auto mb-6">
            <span className="material-icons text-[#4DA3FF] text-3xl">lock</span>
          </div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Peer Admin Portal</h1>
          <p className="text-slate-400 text-sm mt-2">Restricted access — Peer team only</p>
        </div>

        <form onSubmit={handle} className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md">
          <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
            Admin Password
          </label>
          <div className="relative mb-6">
            <input
              type={show ? 'text' : 'password'}
              value={pw}
              onChange={(e) => { setPw(e.target.value); setErr(false); }}
              placeholder="Enter password"
              className={`w-full bg-white/10 border ${err ? 'border-red-400' : 'border-white/20'} text-white placeholder-white/30 rounded-xl px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-[#4DA3FF] transition-all`}
            />
            <button
              type="button"
              onClick={() => setShow(!show)}
              className="absolute right-3 top-3 text-slate-400 hover:text-white transition-colors"
            >
              <span className="material-icons text-xl">{show ? 'visibility_off' : 'visibility'}</span>
            </button>
          </div>

          {err && (
            <div className="flex items-center gap-2 text-red-400 text-sm mb-5 bg-red-500/10 px-4 py-2 rounded-lg">
              <span className="material-icons text-base">error_outline</span>
              Incorrect password. Please try again.
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-[#4DA3FF] hover:bg-[#3b8fe8] text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-[#4DA3FF]/20 uppercase tracking-wider text-sm"
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-slate-600 text-xs mt-8">
          This page is not publicly linked. For access, contact your site administrator.
        </p>
      </div>
    </div>
  );
}

/* ───────────── Blog List View ───────────── */
function BlogList({ blogs, onNew, onEdit, onDelete, onToggleStatus }) {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');

  const visible = blogs.filter((b) => {
    const matchSearch = b.title.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === 'all' || b.status === filter;
    return matchSearch && matchFilter;
  });

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h2 className="text-2xl font-bold text-[#071B34]">All Posts</h2>
          <p className="text-slate-500 text-sm mt-1">
            {blogs.filter((b) => b.status === 'published').length} published ·{' '}
            {blogs.filter((b) => b.status === 'draft').length} drafts
          </p>
        </div>
        <button
          onClick={onNew}
          className="flex items-center gap-2 bg-[#071B34] hover:bg-[#0f2d52] text-white px-6 py-3 rounded-xl font-bold text-sm transition-all shadow-md"
        >
          <span className="material-icons text-[18px]">add</span>
          New Blog Post
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-grow">
          <span className="material-icons absolute left-3 top-3 text-slate-400 text-xl">search</span>
          <input
            type="text"
            placeholder="Search posts..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#4DA3FF] bg-white"
          />
        </div>
        <div className="flex gap-2">
          {['all', 'published', 'draft'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                filter === f
                  ? 'bg-[#071B34] text-white'
                  : 'bg-white border border-slate-200 text-slate-600 hover:border-[#071B34]'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Posts */}
      {visible.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-2xl border border-slate-100">
          <span className="material-icons text-5xl text-slate-200 mb-4 block">article</span>
          <p className="text-slate-500 font-medium">No posts found</p>
          <p className="text-slate-400 text-sm mt-1">Click "New Blog Post" to get started</p>
        </div>
      ) : (
        <div className="space-y-3">
          {visible.map((blog) => (
            <div
              key={blog.id}
              className="bg-white border border-slate-100 rounded-2xl p-5 flex items-center gap-5 hover:shadow-md hover:border-slate-200 transition-all group"
            >
              {/* Thumbnail */}
              <div className="w-20 h-14 rounded-xl overflow-hidden flex-shrink-0 bg-slate-100">
                {blog.coverImage ? (
                  <img src={blog.coverImage} alt={blog.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="material-icons text-slate-300 text-2xl">image</span>
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="flex-grow min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                      blog.status === 'published'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-amber-100 text-amber-700'
                    }`}
                  >
                    {blog.status}
                  </span>
                  <span className="text-xs text-slate-400">{blog.category}</span>
                </div>
                <h3 className="font-bold text-[#071B34] truncate text-sm">{blog.title || '(Untitled)'}</h3>
                <p className="text-xs text-slate-400 mt-0.5">{blog.author} · {blog.date}</p>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2 flex-shrink-0">
                <button
                  onClick={() => onToggleStatus(blog)}
                  title={blog.status === 'published' ? 'Unpublish' : 'Publish'}
                  className={`p-2 rounded-lg transition-all text-sm ${
                    blog.status === 'published'
                      ? 'bg-green-50 text-green-600 hover:bg-green-100'
                      : 'bg-amber-50 text-amber-600 hover:bg-amber-100'
                  }`}
                >
                  <span className="material-icons text-[18px]">
                    {blog.status === 'published' ? 'visibility' : 'visibility_off'}
                  </span>
                </button>
                <button
                  onClick={() => onEdit(blog)}
                  className="p-2 rounded-lg bg-slate-50 text-slate-500 hover:bg-[#071B34] hover:text-white transition-all"
                >
                  <span className="material-icons text-[18px]">edit</span>
                </button>
                <button
                  onClick={() => onDelete(blog.id)}
                  className="p-2 rounded-lg bg-slate-50 text-slate-400 hover:bg-red-50 hover:text-red-500 transition-all"
                >
                  <span className="material-icons text-[18px]">delete_outline</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ───────────── Blog Editor ───────────── */
function BlogEditor({ initial, onSave, onCancel }) {
  const [form, setForm] = useState({ ...EMPTY_BLOG, ...initial });
  const [preview, setPreview] = useState(false);
  const [imgMode, setImgMode] = useState('url'); // 'url' | 'upload'
  const [imgErr, setImgErr] = useState('');
  const [saving, setSaving] = useState(false);
  const fileRef = useRef();
  const contentRef = useRef();

  const set = (key, val) =>
    setForm((prev) => {
      const next = { ...prev, [key]: val };
      if (key === 'title' && !initial.id) next.slug = generateSlug(val);
      return next;
    });

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (file.size > 800 * 1024) {
      setImgErr('Image too large (>800 KB). Please use an image URL instead, or compress the image.');
      return;
    }
    setImgErr('');
    const reader = new FileReader();
    reader.onload = (ev) => set('coverImage', ev.target.result);
    reader.readAsDataURL(file);
  };

  const insertFormatting = (prefix, suffix = '') => {
    const el = contentRef.current;
    if (!el) return;
    const start = el.selectionStart;
    const end = el.selectionEnd;
    const selected = form.content.slice(start, end);
    const newContent =
      form.content.slice(0, start) + prefix + selected + suffix + form.content.slice(end);
    set('content', newContent);
    setTimeout(() => {
      el.focus();
      el.setSelectionRange(start + prefix.length, start + prefix.length + selected.length);
    }, 0);
  };

  const handleSave = (status) => {
    if (!form.title.trim()) { alert('Please add a title.'); return; }
    setSaving(true);
    const blog = {
      ...form,
      id: form.id || generateId(),
      slug: form.slug || generateSlug(form.title),
      status,
    };
    saveBlog(blog);
    setTimeout(() => {
      setSaving(false);
      onSave();
    }, 400);
  };

  /* Simple markdown-to-HTML for preview (lightweight inline version) */
  const previewHtml = () => {
    let html = form.content
      .replace(/^### (.+)$/gm, '<h3 style="font-size:1.1rem;font-weight:700;margin:1.5rem 0 0.5rem">$1</h3>')
      .replace(/^## (.+)$/gm, '<h2 style="font-size:1.3rem;font-weight:700;margin:2rem 0 0.75rem">$1</h2>')
      .replace(/^# (.+)$/gm, '<h1 style="font-size:1.6rem;font-weight:800;margin:2rem 0 1rem">$1</h1>')
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>')
      .replace(/`(.+?)`/g, '<code style="background:#f1f5f9;padding:2px 6px;border-radius:4px;font-size:0.85em">$1</code>')
      .replace(/^> (.+)$/gm, '<blockquote style="border-left:4px solid #4DA3FF;padding:8px 16px;margin:16px 0;background:#eff6ff;color:#334155;font-style:italic">$1</blockquote>')
      .replace(/^- (.+)$/gm, '<li style="margin:4px 0;padding-left:8px">• $1</li>')
      .replace(/^---$/gm, '<hr style="margin:24px 0;border-color:#e2e8f0">')
      .split('\n\n')
      .map((block) => {
        if (/^<(h[1-6]|blockquote|li|hr)/.test(block.trim())) return block;
        return `<p style="margin:0 0 16px;line-height:1.75;color:#475569">${block.replace(/\n/g, '<br>')}</p>`;
      })
      .join('');
    return html;
  };

  const toolbarBtns = [
    { label: '# H2', action: () => insertFormatting('\n## ', '') },
    { label: '# H3', action: () => insertFormatting('\n### ', '') },
    { label: 'B', action: () => insertFormatting('**', '**'), style: 'font-bold' },
    { label: 'I', action: () => insertFormatting('*', '*'), style: 'italic' },
    { label: '`Code`', action: () => insertFormatting('`', '`') },
    { label: '> Quote', action: () => insertFormatting('\n> ', '') },
    { label: '• List', action: () => insertFormatting('\n- ', '') },
    { label: '——', action: () => insertFormatting('\n---\n', '') },
  ];

  return (
    <div>
      {/* Editor Header */}
      <div className="flex items-center gap-4 mb-8">
        <button
          onClick={onCancel}
          className="p-2 rounded-xl hover:bg-slate-100 text-slate-500 transition-colors"
        >
          <span className="material-icons">arrow_back</span>
        </button>
        <div>
          <h2 className="text-xl font-bold text-[#071B34]">
            {initial.id ? 'Edit Post' : 'New Blog Post'}
          </h2>
          <p className="text-slate-400 text-xs mt-0.5">
            {initial.id ? `Editing: ${initial.title}` : 'Create a new article for Peer Consulting blog'}
          </p>
        </div>
        <div className="ml-auto flex gap-3">
          <button
            onClick={() => handleSave('draft')}
            disabled={saving}
            className="px-5 py-2.5 border border-slate-200 bg-white text-slate-600 hover:border-slate-400 rounded-xl text-sm font-bold transition-all"
          >
            {saving ? 'Saving...' : 'Save Draft'}
          </button>
          <button
            onClick={() => handleSave('published')}
            disabled={saving}
            className="px-5 py-2.5 bg-[#4DA3FF] hover:bg-[#3b8fe8] text-white rounded-xl text-sm font-bold transition-all shadow-md shadow-[#4DA3FF]/20 flex items-center gap-2"
          >
            <span className="material-icons text-[18px]">public</span>
            {saving ? 'Publishing...' : 'Publish'}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Main Editor */}
        <div className="xl:col-span-2 space-y-6">
          {/* Title */}
          <div className="bg-white border border-slate-100 rounded-2xl p-6">
            <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
              Post Title *
            </label>
            <input
              type="text"
              placeholder="Enter a compelling title..."
              value={form.title}
              onChange={(e) => set('title', e.target.value)}
              className="w-full text-2xl font-bold text-[#071B34] border-none outline-none placeholder-slate-200 bg-transparent"
            />
            <div className="mt-3 pt-3 border-t border-slate-50 flex items-center gap-2">
              <span className="text-xs text-slate-400 font-mono">Slug:</span>
              <span className="text-xs text-slate-500 font-mono bg-slate-50 px-2 py-0.5 rounded">{form.slug || '(auto-generated)'}</span>
            </div>
          </div>

          {/* Excerpt */}
          <div className="bg-white border border-slate-100 rounded-2xl p-6">
            <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
              Excerpt / Summary
            </label>
            <textarea
              rows={3}
              placeholder="A short description that appears on the blog listing page..."
              value={form.excerpt}
              onChange={(e) => set('excerpt', e.target.value)}
              className="w-full resize-none border-none outline-none text-slate-600 text-sm leading-relaxed placeholder-slate-300 bg-transparent"
            />
          </div>

          {/* Content Editor */}
          <div className="bg-white border border-slate-100 rounded-2xl overflow-hidden">
            {/* Editor Toolbar */}
            <div className="border-b border-slate-100 p-3 flex items-center gap-1 flex-wrap">
              {toolbarBtns.map((btn) => (
                <button
                  key={btn.label}
                  onClick={btn.action}
                  className={`px-3 py-1.5 text-xs rounded-lg hover:bg-slate-100 text-slate-600 transition-colors ${btn.style || ''}`}
                >
                  {btn.label}
                </button>
              ))}
              <div className="ml-auto flex items-center gap-2">
                <button
                  onClick={() => setPreview(!preview)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-lg font-bold transition-colors ${preview ? 'bg-[#071B34] text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                >
                  <span className="material-icons text-[14px]">{preview ? 'code' : 'visibility'}</span>
                  {preview ? 'Edit' : 'Preview'}
                </button>
              </div>
            </div>

            {preview ? (
              <div
                className="p-6 min-h-[400px] prose max-w-none"
                dangerouslySetInnerHTML={{ __html: previewHtml() }}
              />
            ) : (
              <div className="relative">
                <textarea
                  ref={contentRef}
                  rows={22}
                  placeholder={`Write your blog post in Markdown...\n\n## Use headings to structure your post\n\nYour paragraph text goes here. Use **bold** or *italic* for emphasis.\n\n- Use dashes for bullet points\n\n> Use > for a pull quote\n\n---\n\nSeparate sections with ---`}
                  value={form.content}
                  onChange={(e) => set('content', e.target.value)}
                  className="w-full resize-none border-none outline-none p-6 text-slate-700 text-sm leading-relaxed font-mono placeholder-slate-300 bg-transparent"
                />
              </div>
            )}

            <div className="border-t border-slate-50 px-6 py-2 flex justify-between">
              <span className="text-xs text-slate-400">
                Supports Markdown: **bold**, *italic*, ## heading, - list, {'>'} quote
              </span>
              <span className="text-xs text-slate-400">{form.content.length} chars</span>
            </div>
          </div>
        </div>

        {/* Sidebar Settings */}
        <div className="space-y-5">
          {/* Publish Settings */}
          <div className="bg-white border border-slate-100 rounded-2xl p-6">
            <h3 className="text-sm font-bold text-[#071B34] mb-5 flex items-center gap-2">
              <span className="material-icons text-[18px] text-slate-400">settings</span>
              Post Settings
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
                  Category
                </label>
                <select
                  value={form.category}
                  onChange={(e) => set('category', e.target.value)}
                  className="w-full border border-slate-200 rounded-xl px-3 py-2.5 text-sm text-[#071B34] focus:outline-none focus:ring-2 focus:ring-[#4DA3FF] bg-white"
                >
                  {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
                  Author Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Peer Editorial Team"
                  value={form.author}
                  onChange={(e) => set('author', e.target.value)}
                  className="w-full border border-slate-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#4DA3FF]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
                  Publish Date
                </label>
                <input
                  type="date"
                  value={form.date}
                  onChange={(e) => set('date', e.target.value)}
                  className="w-full border border-slate-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#4DA3FF]"
                />
              </div>
            </div>
          </div>

          {/* Cover Image */}
          <div className="bg-white border border-slate-100 rounded-2xl p-6">
            <h3 className="text-sm font-bold text-[#071B34] mb-4 flex items-center gap-2">
              <span className="material-icons text-[18px] text-slate-400">image</span>
              Cover Image
            </h3>

            {/* Preview */}
            {form.coverImage && (
              <div className="relative mb-4 rounded-xl overflow-hidden">
                <img src={form.coverImage} alt="Cover" className="w-full h-36 object-cover" />
                <button
                  onClick={() => { set('coverImage', ''); setImgErr(''); }}
                  className="absolute top-2 right-2 w-7 h-7 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
                >
                  <span className="material-icons text-[16px]">close</span>
                </button>
              </div>
            )}

            {/* Toggle */}
            <div className="flex mb-4 bg-slate-50 rounded-xl p-1">
              {['url', 'upload'].map((mode) => (
                <button
                  key={mode}
                  onClick={() => { setImgMode(mode); setImgErr(''); }}
                  className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all capitalize ${imgMode === mode ? 'bg-white shadow text-[#071B34]' : 'text-slate-500'}`}
                >
                  {mode === 'url' ? '🔗 Image URL' : '⬆️ Upload File'}
                </button>
              ))}
            </div>

            {imgMode === 'url' ? (
              <input
                type="url"
                placeholder="https://example.com/image.jpg"
                value={form.coverImage.startsWith('data:') ? '' : form.coverImage}
                onChange={(e) => { set('coverImage', e.target.value); setImgErr(''); }}
                className="w-full border border-slate-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#4DA3FF]"
              />
            ) : (
              <div>
                <input
                  ref={fileRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
                <button
                  onClick={() => fileRef.current.click()}
                  className="w-full border-2 border-dashed border-slate-200 hover:border-[#4DA3FF] rounded-xl py-6 flex flex-col items-center gap-2 text-slate-400 hover:text-[#4DA3FF] transition-all"
                >
                  <span className="material-icons text-3xl">cloud_upload</span>
                  <span className="text-xs font-medium">Click to upload image</span>
                  <span className="text-[10px]">JPG, PNG, WebP · max 800 KB</span>
                </button>
              </div>
            )}

            {imgErr && (
              <p className="text-xs text-red-500 mt-2 flex items-start gap-1">
                <span className="material-icons text-[14px] mt-0.5">warning</span>
                {imgErr}
              </p>
            )}
          </div>

          {/* Quick actions */}
          <div className="bg-[#071B34] rounded-2xl p-6 text-white">
            <h3 className="text-sm font-bold mb-4 flex items-center gap-2">
              <span className="material-icons text-[18px] text-[#4DA3FF]">tips_and_updates</span>
              Writing Tips
            </h3>
            <ul className="space-y-2 text-xs text-blue-200/70 leading-relaxed">
              <li>• Start with <strong className="text-white">##</strong> for section headings</li>
              <li>• Use <strong className="text-white">**bold**</strong> for key terms</li>
              <li>• Add <strong className="text-white">{`>`} quotes</strong> for pull quotes</li>
              <li>• Use <strong className="text-white">---</strong> to separate sections</li>
              <li>• Click <strong className="text-white">Preview</strong> to check layout</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ───────────── Main Admin Component ───────────── */
export default function BlogAdmin() {
  const [authed, setAuthed] = useState(() => !!sessionStorage.getItem('peer_admin_auth'));
  const [view, setView] = useState('list'); // 'list' | 'editor'
  const [editingBlog, setEditingBlog] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [toast, setToast] = useState('');

  const refresh = () => setBlogs(getBlogs());

  useEffect(() => { if (authed) refresh(); }, [authed]);

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(''), 3000);
  };

  const handleNew = () => {
    setEditingBlog({ ...EMPTY_BLOG });
    setView('editor');
  };

  const handleEdit = (blog) => {
    setEditingBlog({ ...blog });
    setView('editor');
  };

  const handleSaved = () => {
    refresh();
    setView('list');
    showToast('✅ Post saved successfully!');
  };

  const handleDelete = (id) => {
    if (!window.confirm('Delete this post permanently?')) return;
    deleteBlog(id);
    refresh();
    showToast('🗑️ Post deleted.');
  };

  const handleToggleStatus = (blog) => {
    const updated = { ...blog, status: blog.status === 'published' ? 'draft' : 'published' };
    saveBlog(updated);
    refresh();
    showToast(updated.status === 'published' ? '🌐 Post published!' : '📋 Post moved to draft.');
  };

  const handleLogout = () => {
    sessionStorage.removeItem('peer_admin_auth');
    setAuthed(false);
  };

  if (!authed) return <LoginScreen onLogin={() => setAuthed(true)} />;

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/* Admin Topbar */}
      <div className="bg-[#071B34] text-white px-6 py-4 flex items-center gap-6 shadow-xl sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#4DA3FF]/20 border border-[#4DA3FF]/40 rounded-lg flex items-center justify-center">
            <span className="material-icons text-[#4DA3FF] text-[18px]">admin_panel_settings</span>
          </div>
          <div>
            <span className="font-bold text-sm">Peer Blog Admin</span>
            <span className="text-slate-400 text-xs block leading-none">Content Management</span>
          </div>
        </div>

        <div className="h-6 w-px bg-white/10 mx-2" />

        {view === 'list' ? (
          <button onClick={handleNew} className="flex items-center gap-1.5 text-xs font-bold text-[#4DA3FF] hover:text-white transition-colors">
            <span className="material-icons text-[16px]">add_circle</span>
            New Post
          </button>
        ) : (
          <button onClick={() => setView('list')} className="flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-white transition-colors">
            <span className="material-icons text-[16px]">arrow_back</span>
            Back to Posts
          </button>
        )}

        <div className="ml-auto flex items-center gap-4">
          <a
            href="/blogs"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
          >
            <span className="material-icons text-[16px]">open_in_new</span>
            View Blog
          </a>
          <button
            onClick={handleLogout}
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-red-400 transition-colors"
          >
            <span className="material-icons text-[16px]">logout</span>
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        {view === 'list' ? (
          <BlogList
            blogs={blogs}
            onNew={handleNew}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onToggleStatus={handleToggleStatus}
          />
        ) : (
          <BlogEditor
            initial={editingBlog}
            onSave={handleSaved}
            onCancel={() => setView('list')}
          />
        )}
      </div>

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-[#071B34] text-white px-6 py-3 rounded-2xl shadow-2xl text-sm font-medium flex items-center gap-2 z-50 animate-bounce-in">
          {toast}
        </div>
      )}
    </div>
  );
}
