import { STATIC_BLOGS } from '../data/blogs';

const STORAGE_KEY = 'peer_blogs_v1';

/**
 * Returns all blogs — static (code) + admin-added (localStorage).
 * Static blogs are always shown to every visitor.
 * Admin-added blogs are only visible in the browser where they were created,
 * until they are committed to src/data/blogs.js and redeployed.
 */
export function getBlogs() {
  let localBlogs = [];
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    localBlogs = data ? JSON.parse(data) : [];
  } catch {
    localBlogs = [];
  }

  // Merge: local blogs take precedence over static ones (so admin edits override static)
  const staticFiltered = STATIC_BLOGS.filter(
    (sb) => !localBlogs.some((lb) => lb.id === sb.id)
  );

  return [...staticFiltered, ...localBlogs];
}

export function getPublishedBlogs() {
  return getBlogs()
    .filter((b) => b.status === 'published')
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
}

export function getBlogById(id) {
  return getBlogs().find((b) => b.id === id) || null;
}

export function saveBlog(blog) {
  const localBlogs = getLocalBlogs();
  const idx = localBlogs.findIndex((b) => b.id === blog.id);
  const now = new Date().toISOString();
  if (idx >= 0) {
    localBlogs[idx] = { ...blog, updatedAt: now };
  } else {
    localBlogs.unshift({ ...blog, createdAt: now, updatedAt: now });
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(localBlogs));
}

export function deleteBlog(id) {
  const localBlogs = getLocalBlogs().filter((b) => b.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(localBlogs));
}

/** Only returns blogs stored in localStorage (used by admin panel internals) */
function getLocalBlogs() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

export function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2);
}

export function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

/** Very simple Markdown → HTML converter */
export function parseMarkdown(md) {
  if (!md) return '';

  const lines = md.split('\n');
  const result = [];
  let inUl = false;
  let inOl = false;

  const closeList = () => {
    if (inUl) { result.push('</ul>'); inUl = false; }
    if (inOl) { result.push('</ol>'); inOl = false; }
  };

/** Sanitize hrefs — only allow http, https, mailto */
const sanitizeHref = (url) => {
  try {
    const u = new URL(url);
    return ['http:', 'https:', 'mailto:'].includes(u.protocol) ? url : '#';
  } catch {
    // Relative URLs are fine
    return url.startsWith('/') ? url : '#';
  }
};

  const inlineFormat = (text) =>
    text
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>')
      .replace(/`(.+?)`/g, '<code class="bg-slate-100 text-[#071B34] px-1.5 py-0.5 rounded text-sm font-mono">$1</code>')
      .replace(/\[(.+?)\]\((.+?)\)/g, (_, linkText, href) => {
        const safeHref = sanitizeHref(href);
        return `<a href="${safeHref}" class="text-[#4DA3FF] underline hover:text-[#071B34] transition-colors" target="_blank" rel="noopener noreferrer">${linkText}</a>`;
      });

  for (const rawLine of lines) {
    const line = rawLine;

    if (/^### (.+)/.test(line)) {
      closeList();
      result.push(`<h3 class="text-xl font-bold text-[#071B34] mt-8 mb-3">${inlineFormat(line.replace(/^### /, ''))}</h3>`);
    } else if (/^## (.+)/.test(line)) {
      closeList();
      result.push(`<h2 class="text-2xl font-bold text-[#071B34] mt-10 mb-4">${inlineFormat(line.replace(/^## /, ''))}</h2>`);
    } else if (/^# (.+)/.test(line)) {
      closeList();
      result.push(`<h1 class="text-3xl font-bold text-[#071B34] mt-10 mb-5">${inlineFormat(line.replace(/^# /, ''))}</h1>`);
    } else if (/^> (.+)/.test(line)) {
      closeList();
      result.push(`<blockquote class="border-l-4 border-[#4DA3FF] pl-5 py-2 my-6 italic text-slate-600 bg-blue-50 rounded-r-lg">${inlineFormat(line.replace(/^> /, ''))}</blockquote>`);
    } else if (/^\d+\. (.+)/.test(line)) {
      if (!inOl) { closeList(); result.push('<ol class="list-decimal list-outside ml-6 my-4 space-y-2">'); inOl = true; }
      result.push(`<li class="text-slate-700 leading-relaxed">${inlineFormat(line.replace(/^\d+\. /, ''))}</li>`);
    } else if (/^- (.+)/.test(line)) {
      if (!inUl) { closeList(); result.push('<ul class="list-none my-4 space-y-2">'); inUl = true; }
      result.push(`<li class="text-slate-700 leading-relaxed flex items-start gap-2"><span class="text-[#4DA3FF] mt-1 text-xs">●</span><span>${inlineFormat(line.replace(/^- /, ''))}</span></li>`);
    } else if (line.trim() === '') {
      closeList();
      result.push('<div class="my-4"></div>');
    } else if (/^---/.test(line)) {
      closeList();
      result.push('<hr class="my-10 border-slate-200" />');
    } else {
      closeList();
      result.push(`<p class="text-slate-700 leading-relaxed mb-4">${inlineFormat(line)}</p>`);
    }
  }

  closeList();
  return result.join('\n');
}
