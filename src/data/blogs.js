/**
 * Static blog posts — committed to the codebase so they are visible to ALL visitors.
 *
 * HOW TO ADD A NEW BLOG:
 *  1. Write the post in the Admin panel (/admin) and note the content.
 *  2. Copy the blog object into this array with status: 'published'.
 *  3. Redeploy to Vercel.
 *
 * Fields:
 *   id          – unique slug-style string
 *   title       – post title
 *   slug        – URL-friendly version of the title
 *   category    – must match one of the CATEGORIES in BlogAdmin.jsx
 *   excerpt     – short summary shown on the listing page
 *   content     – full Markdown body
 *   coverImage  – absolute URL to the cover image (use a hosted URL, not base64)
 *   author      – author display name
 *   date        – ISO date string (YYYY-MM-DD)
 *   status      – 'published' | 'draft'
 *   createdAt   – ISO timestamp
 *   updatedAt   – ISO timestamp
 */

export const STATIC_BLOGS = [
  {
    id: 'ai-not-strategy-people-are',
    title: 'AI Is Not the Strategy. People Are.',
    slug: 'ai-not-strategy-people-are',
    category: 'AI & Technology',
    excerpt:
      'Artificial intelligence is reshaping every industry — but the organizations seeing real results aren\'t the ones with the biggest models. They\'re the ones with the clearest human strategy behind them.',
    content: `## The Hype Is Real. So Is the Confusion.

Every week brings another headline: AI will automate your job, disrupt your industry, or make your current tech stack obsolete. Some of it is true. Most of it is noise.

The organizations we work with — across federal agencies, Fortune 500 enterprises, and municipal government — are navigating this moment with the same question: *where do we actually start?*

The answer is almost never "buy more AI tools."

---

## What We See in the Field

When Peer Consulting Resources engages with a client on an AI initiative, we rarely find a technology problem at the center of it. We find an **organizational readiness problem**.

The data isn't clean. The workflows aren't documented. The teams don't have a shared definition of what "success" looks like. The governance model for AI decisions doesn't exist yet.

You can't automate chaos. You can only make it faster.

---

## The Real Competitive Advantage

The organizations pulling ahead in the AI era share a common trait: they invested in **people and process** before they invested in technology.

That means:

- **Data stewards** who own the quality and lineage of enterprise data
- **Product managers** who understand how AI outputs will actually be used by end users
- **Change managers** who can move an organization from fear to adoption
- **Engineers** who can evaluate AI vendor claims critically and build responsibly

AI amplifies what's already there. If your team is strong, aligned, and process-mature, AI makes them exceptional. If they're not, AI just reveals the gaps faster.

---

## What This Means for IT Consulting

At PCR, we've spent over a decade placing technical talent in some of the most demanding environments in the country — from FDNY infrastructure to NYC agency modernization to Fortune 500 digital transformation.

The skills we're prioritizing now for our clients aren't just "prompt engineers" or "ML engineers." They are:

- Business analysts who can bridge AI capability to agency workflow
- Program managers who understand data governance and compliance
- Architects who can design for AI integration from the ground up
- Trainers who can build internal AI literacy at scale

The technology will keep changing. The need for people who can translate it into real organizational value will not.

---

## Our Perspective

AI is not a strategy. It is a capability — one that requires strategy, leadership, and people to be useful.

The organizations that will win the next decade are not the ones that adopted AI fastest. They are the ones that built the human infrastructure to use it well.

That's the work we're doing with our clients every day.

> "Great consulting firms don't just deliver technology. They deliver the organizational capacity to sustain it." — Misha Edara, Founder, Peer Consulting Resources`,
    coverImage: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&auto=format&fit=crop&q=80',
    author: 'Peer Editorial Team',
    date: '2026-06-01',
    status: 'published',
    createdAt: '2026-06-01T10:00:00.000Z',
    updatedAt: '2026-06-01T10:00:00.000Z',
  },
];
