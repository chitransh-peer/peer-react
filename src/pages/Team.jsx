import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

/* ─────────────────────────────────────────────
   Keyframe animations injected once
───────────────────────────────────────────── */
const ANIM_STYLES = `
  @keyframes bioFadeUp {
    from { opacity: 0; transform: translateY(14px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes imgReveal {
    from { opacity: 0; transform: scale(1.04); }
    to   { opacity: 1; transform: scale(1); }
  }
  .bio-fade-up { animation: bioFadeUp 0.5s cubic-bezier(0.22, 0.68, 0, 1.05) both; }
  .img-reveal  { animation: imgReveal 0.6s cubic-bezier(0.22, 0.68, 0, 1.05) both; }
  .d1 { animation-delay: 0.06s; }
  .d2 { animation-delay: 0.14s; }
  .d3 { animation-delay: 0.22s; }
  .d4 { animation-delay: 0.30s; }
  .d5 { animation-delay: 0.38s; }
  .d6 { animation-delay: 0.46s; }
`;

/* ─────────────────────────────────────────────
   Avatar
───────────────────────────────────────────── */
const CorporateSilhouette = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="31" r="12" fill="currentColor" />
    <rect x="47" y="40" width="6" height="10" fill="currentColor" />
    <path d="M26 80 C26 62 36 50 50 50 C64 50 74 62 74 80 V80 H26 Z" fill="currentColor" />
    <path d="M44 50 L50 64 L56 50 Z" fill="#ffffff" />
    <path d="M49 61 L51 61 L52 76 L50 79 L48 76 Z" fill="#1e293b" />
  </svg>
);

const TeamAvatar = ({ src, alt, className }) => {
  const [err, setErr] = useState(false);
  return err || !src
    ? <CorporateSilhouette className={`w-full h-full text-slate-500 ${className || ''}`} />
    : <img src={src} alt={alt} className={className} onError={() => setErr(true)} />;
};

/* ─────────────────────────────────────────────
   Team image map
───────────────────────────────────────────── */
const teamImages = {
  'misha-edara': new URL('../assets/team/Misha.jpg', import.meta.url).href,
  'vineela-mandava': new URL('../assets/team/Vineela-Mandava.webp', import.meta.url).href,
  'vivek-philar': new URL('../assets/team/Vivek-Philar.webp', import.meta.url).href,
  'naveen-marrivada': new URL('../assets/team/Naveen.png', import.meta.url).href,
  'omer-halilovic': new URL('../assets/team/Omer.webp', import.meta.url).href,
  'seema-mittal': new URL('../assets/team/Seema-Mittal.webp', import.meta.url).href,
  'sandeep-bussa': new URL('../assets/team/Sandeep-Bussa.png', import.meta.url).href,
};

/* ─────────────────────────────────────────────
   Team member data
───────────────────────────────────────────── */
const TEAM_MEMBERS = [
  {
    key: 'misha-edara',
    name: 'Misha Edara',
    role: 'Founder',
    category: 'executive',
    bio: `As Founder and President of Peer Consulting Resources, Misha brings more than 20 years of enterprise IT leadership to the firm she founded in 2011. Her career spans technology operations, digital transformation, and service reliability for some of the most demanding organizations in the country — including Johnson & Johnson, Bristol Myers Squibb, Pfizer, and the City of New York.\n\nAt PCR, Misha leads strategic client engagement and shapes the firm's enterprise delivery standards across IT staffing, infrastructure, and consulting. Her Master's in Electrical Engineering from Fairleigh Dickinson University, paired with two decades of leading end-to-end SDLC implementations and deep expertise in AI transformation, AIOps, and large-scale program management, directly shapes how PCR executes for Fortune 500 and government clients in an AI-first era.\n\nMisha founded PCR on a people-first conviction: great consulting firms are built by investing in the team and the infrastructure behind every engagement. Her focus on hiring deliberately, developing talent, and standing up the systems that let consultants do their best work is what allows PCR to deliver engineering rigor at scale — and make complex programs feel simple to the client.`,
    quote: 'Building trust is about delivering superior, resilient work that actively empowers our clients.',
    skills: ['Executive Leadership', 'Strategic Planning', 'Business Modernization', 'Government Relations'],
    email: 'misha@peer-consulting.com',
    linkedin: 'https://www.linkedin.com/in/misha7/',
  },
  // {
  //   key: 'vineela-mandava',
  //   name: 'Vineela Mandava',
  //   role: 'Co-Founder',
  //   category: 'executive',
  //   bio: `As Co-Founder and Chief Operating Officer of Peer Consulting Resources, Vineela brings more than 15 years of operational and procurement leadership to the firm she joined as Co-Founder in 2014. Her career spans strategic sourcing, contract management, and vendor governance across healthcare, pharmaceutical, and New York City public-sector environments — including NYU Langone Health, Hackensack Meridian Health, Tower Health, and Health and Wellness Partners.\n\nAt PCR, Vineela leads day-to-day operations across human resources, recruitment, finance, vendor management, and the firm's US-India delivery model. Her B.Sc. from Rutgers University, paired with more than a decade building procurement and contracting infrastructure in regulated environments — MSAs, SOWs, governance frameworks, and pricing strategy — directly shapes how PCR scales across four business verticals while sustaining the discipline that complex client engagements demand.\n\nVineela believes great consulting firms are built on operational backbone — the systems, processes, and discipline that turn strategy into consistent execution. She is the steady operating force ensuring every PCR commitment is matched by the infrastructure behind it.`,
  //   quote: "Great strategy succeeds when supported by strong operations, scalable processes, and consistent delivery",
  //   skills: ['Technical Operations', 'Enterprise Systems Architecture', 'Delivery Excellence', 'Agile Engineering'],
  //   email: 'vineela@peer-consulting.com',
  //   linkedin: 'https://www.linkedin.com/in/vineela-mandava-9391a3127/',
  // },
  {
    key: 'vivek-philar',
    name: 'Vivek Philar',
    role: 'CEO',
    category: 'executive',
    bio: `As Chief Executive Officer of Peer Consulting Resources, Vivek brings more than 23 years of technology and business leadership to the firm. His career spans data management, business intelligence architecture, and enterprise consulting for some of the most demanding organizations in the country — including the New York City Fire Department, the NYC Department of Consumer Affairs, the NYC Office of Payroll Administration, and Liquidnet.\n\nAt PCR, Vivek leads strategy, business development, and execution across IT consulting, telecom infrastructure, title search, and government contracting. He stays hands-on with client engagement and PCR's AI initiatives, where his data management background informs how the firm helps clients evolve from traditional analytics to AI-native operations. His experience scaling an MWBE-certified consulting firm shapes how PCR serves enterprise and public-sector clients nationwide.\n\nVivek believes the best companies are built on trust, accountability, and the discipline to deliver when it matters most. He holds an MBA in Strategy and Leadership from the Peter F. Drucker School of Management at Claremont Graduate University.`,
    quote: 'Accelerating transformation requires visibility, careful strategic planning, and absolute dedication to delivery.',
    skills: ['Corporate Strategy', 'Client Acquisition', 'Global Delivery Operations', 'Tech Advisory'],
    email: 'vivek@peer-consulting.com',
    linkedin: 'https://www.linkedin.com/in/vivek-philar/',
  },
  {
    key: 'naveen-marrivada',
    name: 'Naveen Marrivada',
    role: 'Director of Client Relations, NYC',
    category: 'management',
    bio: `As Chief Product Manager and Subject Matter Expert for Government Licensing and Permitting at Peer Consulting Resources, Naveen brings more than 24 years of enterprise software experience to PCR's public-sector portfolio. For 16 years, he has served as lead business analyst on landmark NYC programs — including SBS Connect at the Department of Small Business Services, the NYC Business Portal evolution at DoITT/OTI, and the New Business Acceleration Team under the Mayor's Office of Operations.\n\nAt PCR, Naveen leads product strategy and SME guidance across government licensing, permitting, and certification modernization engagements. His Master of Science from Southern Illinois University and Bachelor of Technology from JNTU Hyderabad — paired with two decades leading legacy-to-cloud migrations, CRM implementations, and multi-agency data integrations — directly shape how PCR scopes and delivers digital transformation programs. His current work includes migrating NYC SBS from legacy Oracle and Accela platforms to Microsoft Dynamics 365.\n\nNaveen believes the best government technology is designed around the actual workflows of agency staff and the citizens they serve, not the constraints of the systems being replaced. He is PCR's anchor for any engagement involving licensing, permitting, or citizen-facing platform modernization.`,
    quote: 'Successful relationships are built on listening, transparency, and a relentless focus on customer success.',
    skills: ['Client Relations', 'Strategic IT Staffing', 'Account Management', 'Talent Delivery'],
    email: 'naveen@peer-consulting.com',
    linkedin: 'https://www.linkedin.com/in/naveenmreddy/',
  },
  {
    key: 'omer-halilovic',
    name: 'Omer Halilovic',
    role: 'Director of NYC Services',
    category: 'management',
    bio: `As Vice President of Government Affairs at Peer Consulting Resources, Omer brings more than 20 years of consulting experience to PCR's public-sector portfolio. Since joining PCR in 2012, he has served as the firm's primary liaison for major municipal initiatives across the FDNY, the Mayor's Office of Operations, DOHMH, DCWP, and OTI — including landmark programs such as the Fire Inspection Revenue and Enforcement System (FIRES) and the Child Care Inspections System under Mayor's Universal Pre-K initiative.\n\nAt PCR, Omer leads government-sector strategy, agency relationships, and consultant deployment across New York City and State engagements. His Master's in Adult Education from SUNY Buffalo and B.S. in Business Management (MIS) from SUNY Utica — paired with two decades of business analysis, solutions architecture, and project management across NYC's largest agencies — directly shape how PCR scopes, staffs, and delivers civic technology programs. He also serves as Adjunct Professor at NYU's Graduate School of Professional Studies.\n\nOmer believes the best public-sector programs are built on institutional memory and continuity — the kind of long-tenure agency relationships that turn complex municipal procurements into successful deployments. He is PCR's steady hand across every NYC engagement.`,
    quote: 'Aligning day-to-day operations with corporate quality benchmarks ensures reliability and trust.',
    skills: ['Services Management', 'Municipal Delivery', 'Operations Oversight', 'Quality Benchmarks'],
    email: 'omer@peer-consulting.com',
    linkedin: 'https://www.linkedin.com/in/omer-halilovic-43259b38/',
  },
  {
    key: 'seema-mittal',
    name: 'Seema Mittal',
    role: 'Director of Recruiting',
    category: 'management',
    bio: `As Director of Recruiting and Client Delivery at Peer Consulting Resources, Seema brings more than 15 years of recruitment and HR leadership to the firm. Since joining PCR in 2017, she has built and led the firm's recruiting practice supporting some of New York City's largest agencies — including the Office of Technology and Innovation, the Department of Education, the Department of Health and Mental Hygiene, the Police Department, and the Fire Department.\n\nAt PCR, Seema oversees end-to-end consultant delivery — recruiting, onboarding, client coordination, and ongoing engagement support across PCR's public-sector and enterprise portfolio. Her B.Sc. in Human Resources, paired with HR leadership experience in manufacturing before pivoting to IT consulting recruitment, gives her an operational lens shaped by high-volume, compliance-driven environments — exactly what scaling consultant placement across NYC agencies demands.\n\nSeema believes great delivery starts long before the consultant's first day — in the quality of the match, the clarity of the onboarding, and the steady presence behind every engagement. She is PCR's connective tissue between client agencies, consultants, and the firm's recruiting infrastructure.`,
    quote: 'Our strongest asset is our people. Finding the right talent is the first step to client success.',
    skills: ['Talent Acquisition', 'Technical Screening', 'Global Pipelines', 'HR Strategy'],
    email: 'seema@peer-consulting.com',
    linkedin: 'https://www.linkedin.com/company/peer-consulting/',
  },
  {
    key: 'sandeep-bussa',
    name: 'Sandeep Bussa',
    role: 'Director of Accounts & HR',
    category: 'management',
    bio: `As Director of HR, AP/AR, and Administration at Peer Consulting Resources, Sandeep leads the firm's human resources operations, payroll coordination, and administrative functions across PCR's US and India teams. He brings specialized expertise in US work-based immigration — a critical capability for any IT consulting firm with a cross-border workforce — with hands-on experience filing H-1B, H-4/EAD, I-140, I-485, and PERM petitions throughout his career.\n\nAt PCR, Sandeep manages the operational backbone that keeps consultants compliant, paid, and supported — from offer letters and employment agreements to LCA filings, work authorization tracking, and onboarding across two countries. His prior work with US-licensed immigration attorneys in New York, combined with hands-on experience on case management systems and the CEIPAL workforce platform, directly informs how PCR runs its consultant lifecycle. He holds a B.Tech in Computer Science Engineering from JNTU Kakinada.\n\nSandeep believes great HR is invisible — the systems and processes that let people show up to work and focus on the engagement, knowing the paperwork, compliance, and support are handled. He is PCR's operational steady-hand for the firm's distributed workforce.`,
    quote: 'Operational stability is the backbone of exceptional client delivery.',
    skills: ['Corporate Finance', 'Human Resources', 'Compliance Management', 'Operational Risk Management'],
    email: 'sandeep@peer-consulting.com',
    linkedin: 'https://www.linkedin.com/in/sandeep-b-4b2389266/',
  },
];

/* ─────────────────────────────────────────────
   Compact card (always visible in the grid)
───────────────────────────────────────────── */
function MemberCard({ member, isSelected, onSelect, size = 'lg' }) {
  const isLg = size === 'lg';
  return (
    <div
      onClick={() => onSelect(member.key)}
      className={`
        relative cursor-pointer select-none rounded-[28px] border flex flex-col items-center
        transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
        ${isLg ? 'pt-10 pb-12 px-10' : 'p-8'}
        ${isSelected
          ? 'bg-blue-50 dark:bg-[#0c2040] border-blue-300 dark:border-blue-700/60 shadow-[0_8px_40px_rgba(59,130,246,0.18)] -translate-y-1.5'
          : 'bg-white dark:bg-surface-dark border-gray-100 dark:border-white/10 hover:border-blue-100 dark:hover:border-blue-900/50 hover:shadow-[0_12px_32px_rgba(59,130,246,0.1)] hover:-translate-y-1 shadow-none'
        }
        group
      `}
    >
      {/* Corner accent */}
      <div className={`absolute top-0 right-0 w-14 h-14 rounded-bl-[22px] pointer-events-none transition-all duration-300 ${isSelected ? 'bg-blue-300/40 dark:bg-blue-500/25 opacity-100' : 'bg-blue-200/40 dark:bg-blue-500/20 opacity-0 group-hover:opacity-100'}`} />

      {/* Avatar */}
      <div className={`relative flex-shrink-0 mb-5 ${isLg ? 'w-36 h-36' : 'w-20 h-20'}`}>
        <div className={`absolute top-3 right-[-8px] w-full h-full rounded-[18px] bg-blue-300/25 dark:bg-blue-500/20 pointer-events-none transition-all duration-300 ${isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
        <div className={`relative w-full h-full overflow-hidden bg-gradient-to-b from-[#e3e6ec] to-[#f3f5f8] dark:from-[#2d3748] dark:to-[#1a202c] flex items-center justify-center border-2 z-10 transition-all duration-500
          ${isLg ? 'rounded-[20px]' : 'rounded-[14px]'}
          ${isSelected
            ? 'border-blue-400 dark:border-blue-500 shadow-[0_0_0_4px_rgba(59,130,246,0.22)]'
            : 'border-[#d2d9e4] dark:border-slate-700 group-hover:border-blue-400 dark:group-hover:border-blue-500 group-hover:shadow-[0_0_0_3px_rgba(59,130,246,0.18)]'
          }`}
        >
          <TeamAvatar
            src={teamImages[member.key]}
            alt={member.name}
            className={`w-full h-full object-cover object-top transition-transform duration-700 ${isSelected ? 'scale-105' : 'group-hover:scale-105'}`}
          />
        </div>
      </div>

      <h3 className={`font-bold font-display text-center mb-1 transition-colors duration-300
        ${isLg ? 'text-xl' : 'text-base'}
        ${isSelected ? 'text-blue-700 dark:text-blue-300' : 'text-[#071B34] dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-300'}`}>
        {member.name}
      </h3>
      <p className="text-[#3b82f6] dark:text-blue-400 font-extrabold text-[10px] uppercase tracking-widest mb-4 text-center leading-tight">{member.role}</p>

      <span className={`text-[10px] font-bold uppercase tracking-widest flex items-center gap-1 transition-all duration-300
        ${isSelected ? 'text-blue-500' : 'text-slate-400 group-hover:text-[#3b82f6]'}`}>
        {isSelected ? (
          <><span className="material-icons text-[12px]" style={{ transform: 'rotate(180deg)', display: 'inline-block', transition: 'transform 0.4s ease' }}>expand_more</span> Close</>
        ) : (
          <>View Bio <span className="material-icons text-[12px]">expand_more</span></>
        )}
      </span>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Smooth bio panel — slides open below the grid
   Uses CSS max-height + opacity transitions,
   NO layout reflow = buttery smooth animation
───────────────────────────────────────────── */
function BioPanel({ member, isOpen, onClose }) {
  const panelRef = useRef(null);

  // Track actual rendered key so we can delay content swap until panel collapses
  const [renderedMember, setRenderedMember] = useState(member);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    if (isOpen && member) {
      // If switching members: briefly hide content, swap, then re-show
      setContentVisible(false);
      const swap = setTimeout(() => {
        setRenderedMember(member);
        setContentVisible(true);
      }, 120);
      return () => clearTimeout(swap);
    }
    if (!isOpen) {
      setContentVisible(false);
    }
  }, [member, isOpen]);

  // Scroll panel into view after it opens
  useEffect(() => {
    if (isOpen && panelRef.current) {
      const t = setTimeout(() => {
        panelRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 200);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  const m = renderedMember;

  return (
    <div
      ref={panelRef}
      style={{
        maxHeight: isOpen ? '680px' : '0px',
        opacity: isOpen ? 1 : 0,
        marginTop: isOpen ? '24px' : '0px',
        transition:
          'max-height 0.65s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.45s cubic-bezier(0.4, 0, 0.2, 1), margin-top 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        overflow: 'hidden',
        borderRadius: '28px',
      }}
    >
      {m && (
        <div
          className="flex flex-col md:flex-row bg-white dark:bg-[#0d2340] border border-blue-100 dark:border-blue-800/40 rounded-[28px] shadow-[0_20px_60px_rgba(59,130,246,0.14)] overflow-hidden"
          style={{ minHeight: '460px' }}
        >
          {/* Portrait */}
          <div
            className="w-full md:w-[36%] flex-shrink-0 relative overflow-hidden bg-slate-100 dark:bg-slate-900"
            style={{ minHeight: '280px' }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#0d2340]/25 z-10 pointer-events-none" />
            <TeamAvatar
              src={teamImages[m.key]}
              alt={m.name}
              className={`w-full h-full object-cover object-top ${contentVisible ? 'img-reveal' : 'opacity-0'}`}
            />
            {/* Name on mobile overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20 md:hidden">
              <p className="text-blue-300 font-black text-[9px] uppercase tracking-[0.2em] mb-1">
                {m.category === 'executive' ? 'Executive Officer' : 'Directorship'}
              </p>
              <h2 className="text-white text-2xl font-black font-display leading-tight">{m.name}</h2>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 px-8 py-10 md:px-14 md:py-12 overflow-y-auto flex flex-col" style={{ maxHeight: '680px' }}>

            {/* Close pill */}
            <button
              onClick={onClose}
              className="self-end flex items-center gap-1.5 px-4 py-2 rounded-full bg-slate-100 hover:bg-red-50 hover:text-red-500 dark:bg-white/5 dark:hover:bg-red-900/20 dark:hover:text-red-400 text-slate-500 dark:text-slate-400 font-bold text-[10px] uppercase tracking-widest transition-all duration-200 border border-slate-200/50 dark:border-white/5 mb-7"
            >
              <span className="material-icons text-xs">close</span> Close
            </button>

            {contentVisible && (
              <>
                {/* Category pill */}
                <span className="inline-block bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-extrabold text-[9px] uppercase tracking-[0.25em] px-3 py-1.5 rounded-full mb-5 border border-blue-200/30 dark:border-blue-800/20 self-start bio-fade-up">
                  {m.category === 'executive' ? 'Executive Officer' : 'Directorship & Practice Leader'}
                </span>

                {/* Name + role (desktop) */}
                <h2 className="hidden md:block text-3xl lg:text-4xl xl:text-5xl font-black font-display text-[#071B34] dark:text-white leading-tight tracking-tight mb-1 bio-fade-up d1">
                  {m.name}
                </h2>
                <p className="hidden md:block text-slate-500 dark:text-slate-400 font-extrabold text-xs uppercase tracking-[0.15em] mb-7 pb-6 border-b border-slate-100 dark:border-white/5 bio-fade-up d1">
                  {m.role}
                </p>

                {/* Quote */}
                {m.quote && (
                  <div className="pl-5 border-l-4 border-blue-500 italic text-[#071B34] dark:text-slate-200 text-sm md:text-base mb-7 bg-blue-50/50 dark:bg-blue-950/20 py-3.5 pr-4 rounded-r-xl font-medium leading-relaxed bio-fade-up d2">
                    "{m.quote}"
                  </div>
                )}

                {/* Bio */}
                <div className="mb-7 bio-fade-up d3">
                  <h4 className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2.5">Biography</h4>
                  <div className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed font-body space-y-3">
                    {m.bio.split('\n\n').map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                </div>

                {/* Skills */}
                <div className="mb-8 bio-fade-up d4">
                  <h4 className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-3">Key Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {m.skills.map((skill, i) => (
                      <span key={i} className="px-3.5 py-1.5 rounded-xl bg-slate-50 dark:bg-white/5 text-[10px] font-extrabold text-slate-700 dark:text-slate-300 border border-slate-200/50 dark:border-white/5 uppercase tracking-wider">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contact */}
                <div className="pt-7 border-t border-slate-100 dark:border-white/5 flex flex-wrap gap-3 bio-fade-up d5">
                  {m.linkedin && (
                    <a
                      href={m.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 font-bold text-xs uppercase tracking-wider transition-all duration-300 border border-slate-200/40 dark:border-white/5 hover:shadow-md hover:-translate-y-0.5 active:scale-95"
                    >
                      <span className="material-icons text-sm">link</span> LinkedIn
                    </a>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────
   Main page
───────────────────────────────────────────── */
export default function Team() {
  const [selectedKey, setSelectedKey] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const k = params.get('member');
    if (k && TEAM_MEMBERS.find((m) => m.key === k)) {
      setSelectedKey(k);
    }
  }, [location.search]);

  const handleSelect = (key) => {
    setSelectedKey((prev) => (prev === key ? null : key));
  };

  const selectedMember = TEAM_MEMBERS.find((m) => m.key === selectedKey) || null;

  const executives = TEAM_MEMBERS.filter((m) => m.category === 'executive');
  const management = TEAM_MEMBERS.filter((m) => m.category === 'management');

  const execSelected = selectedMember?.category === 'executive' ? selectedMember : null;
  const mgmtSelected = selectedMember?.category === 'management' ? selectedMember : null;

  return (
    <div className="bg-[#f8fafc] dark:bg-background-dark min-h-screen">
      <style>{ANIM_STYLES}</style>

      {/* Hero */}
      <header className="relative bg-[#071B34] text-white py-28 lg:py-40 overflow-hidden text-center page-hero flex items-center justify-center">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_#4DA3FF_1px,_transparent_1px)] bg-[length:32px_32px]" />
        </div>
        <div className="container mx-auto px-6 relative z-10 w-full">
          <div className="inline-block bg-accent/20 backdrop-blur-md px-4 py-1.5 rounded-full text-accent-blue text-[10px] font-black uppercase tracking-[0.2em] mb-6 border border-accent/30">
            Meet the Experts
          </div>
          <h1 className="text-5xl md:text-7xl font-black font-display mb-6 tracking-tight">
            The Team Behind <span className="text-accent">PEER</span>
          </h1>
          <p className="text-blue-100/70 max-w-2xl mx-auto font-body leading-relaxed text-sm md:text-lg">
            We are a group of over 60 professionals — software engineers, program managers, analysts, designers, and consultants. We align technical operations to strategic business value.
          </p>
        </div>
      </header>


      <main className="container mx-auto px-6 lg:px-12 py-20">

        {/* ── Executive Officers ── */}
        <section className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-3 py-1 bg-accent-blue/10 text-accent-blue rounded-full text-xs font-bold mb-3 uppercase tracking-widest">Leadership</span>
            <h2 className="text-3xl md:text-4xl font-black font-display text-primary-text dark:text-white tracking-tight">Executive Officers</h2>
            <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm">Guiding the corporate vision and global operations of Peer Consulting Resources.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {executives.map((m) => (
              <MemberCard
                key={m.key}
                member={m}
                isSelected={selectedKey === m.key}
                onSelect={handleSelect}
                size="lg"
              />
            ))}
          </div>

          {/* Bio panel slides in below the exec grid */}
          <div>
            <BioPanel
              member={execSelected}
              isOpen={!!execSelected}
              onClose={() => setSelectedKey(null)}
            />
          </div>
        </section>

        {/* ── Directorship ── */}
        <section>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-3 py-1 bg-accent-blue/10 text-accent-blue rounded-full text-xs font-bold mb-3 uppercase tracking-widest">Management</span>
            <h2 className="text-3xl md:text-4xl font-black font-display text-primary-text dark:text-white tracking-tight">Directorship &amp; Practice Leaders</h2>
            <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm">Managing recruitment, accounts, municipal delivery systems, and relations across target zones.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {management.map((m) => (
              <MemberCard
                key={m.key}
                member={m}
                isSelected={selectedKey === m.key}
                onSelect={handleSelect}
                size="sm"
              />
            ))}
          </div>

          {/* Bio panel slides in below the management grid */}
          <div className="max-w-6xl mx-auto">
            <BioPanel
              member={mgmtSelected}
              isOpen={!!mgmtSelected}
              onClose={() => setSelectedKey(null)}
            />
          </div>
        </section>

      </main>

      {/* CTA */}
      <section className="bg-[#071B34] text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-black mb-4">Want to collaborate with our specialists?</h2>
          <p className="text-sm text-[#8ba3bd] mb-8 max-w-xl mx-auto">
            Our team is ready to align operational visibility, software development excellence, and training expertise with your business priorities.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="bg-[#4DA3FF] hover:bg-[#3b82f6] text-white py-3 px-8 rounded-lg font-bold text-sm transition-all duration-300 shadow-[0_4px_15px_rgba(77,163,255,0.3)] hover:shadow-[0_8px_25px_rgba(77,163,255,0.4)] active:scale-95 transform hover:-translate-y-0.5">
              Contact Leadership
            </Link>
            <Link to="/services" className="bg-transparent border border-white/20 hover:bg-white hover:text-[#071B34] text-white py-3 px-8 rounded-lg font-semibold text-sm transition-all duration-300 active:scale-95">
              Explore Our Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
