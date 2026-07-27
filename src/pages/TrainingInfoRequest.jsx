import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// ── Google Apps Script Web App URL ──────────────────────────────────────────
// Replace this URL with your deployed Google Apps Script /exec URL.
// The script should write submissions to a Google Sheet and email
// training@peer-consulting.com with each new inquiry.
const GOOGLE_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbygUvuvnBI2Qqg112lMHH-rZe9dkXkB8Oqt5WnFho1ZvDrK5h7tNH6aZL_Y7it0xGcv/exec';

const COURSE_OPTIONS = [
  'AI & Machine Learning for Business',
  'PPM & Agile Expert Bootcamp',
  'ITIL® Foundation (V5)',
  'ITIL® 4 Foundation',
  'ITIL® Foundation Bridge (V5)',
  'ITIL® Specialist — Product',
  'ITIL® Specialist — Service',
  'ITIL® Specialist — Experience',
  'ITIL® Specialist — Strategy',
  'ITIL® Specialist — Transformation',
  'ITIL® Practice Manager — Monitor, Support & Fulfill',
  'ITIL® Practice Manager — Plan, Implement & Control',
  'ITIL® Practice Manager — Collaborate, Assure & Improve',
  'Other / Not sure yet',
];

const DELIVERY_OPTIONS = [
  'Online Live (Instructor-Led)',
  'Corporate / Group Training',
  'Not sure yet',
];

const InputField = ({ label, id, type = 'text', required, children, ...rest }) => (
  <div className="flex flex-col gap-1.5">
    <label htmlFor={id} className="text-xs font-black uppercase tracking-widest text-[#071B34]">
      {label}{required && <span className="text-accent-blue ml-1">*</span>}
    </label>
    {children || (
      <input
        id={id}
        type={type}
        required={required}
        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm text-[#071B34] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4DA3FF] focus:border-transparent transition-all shadow-sm hover:border-gray-300"
        {...rest}
      />
    )}
  </div>
);

export default function TrainingInfoRequest() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    courseInterest: '',
    deliveryMode: '',
    subject: '',
    message: '',
    _honeypot: '',
  });
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [toast, setToast]   = useState(false);  // controls popup visibility

  // Auto-dismiss toast after 5 s
  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(false), 5000);
    return () => clearTimeout(t);
  }, [toast]);

  const handleChange = (e) => {
    const { id, name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name || id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData._honeypot) {
      setStatus('success');
      setTimeout(() => setStatus('idle'), 5000);
      return;
    }
    setStatus('loading');
    try {
      const params = new URLSearchParams();
      const { _honeypot, ...realData } = formData;
      // Tag the submission source for the Sheet filter
      params.append('formType', 'TrainingInfoRequest');
      Object.entries(realData).forEach(([key, val]) => params.append(key, val));

      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString(),
      });

      setStatus('success');
      setToast(true);
      setFormData({
        fullName: '', email: '', phone: '', organization: '',
        courseInterest: '', deliveryMode: '', subject: '', message: '', _honeypot: '',
      });
      setTimeout(() => setStatus('idle'), 7000);
    } catch (err) {
      console.error('Submission error:', err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen">

      {/* ── Toast Popup ──────────────────────────────────────────────── */}
      <div
        role="alert"
        aria-live="polite"
        className={`fixed bottom-6 right-6 z-[9999] flex items-start gap-4 bg-white border border-green-200 shadow-2xl rounded-2xl px-6 py-5 max-w-sm w-full transition-all duration-500 ${
          toast
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-6 pointer-events-none'
        }`}
      >
        {/* icon */}
        <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center flex-shrink-0">
          <span className="material-icons text-green-500 text-xl">check_circle</span>
        </div>

        {/* text */}
        <div className="flex-1 min-w-0">
          <p className="font-black text-[#071B34] text-sm mb-0.5">Message Sent!</p>
          <p className="text-gray-500 text-xs leading-relaxed">
            Thank you for your response. We will get back to you as soon as possible.
          </p>
          {/* progress bar */}
          <div className="mt-3 h-0.5 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-green-400 rounded-full origin-left"
              style={{
                animation: toast ? 'shrink 5s linear forwards' : 'none',
              }}
            />
          </div>
        </div>

        {/* close button */}
        <button
          onClick={() => setToast(false)}
          className="text-gray-300 hover:text-gray-500 transition-colors flex-shrink-0 mt-0.5"
          aria-label="Dismiss notification"
        >
          <span className="material-icons text-lg">close</span>
        </button>
      </div>

      {/* shrink keyframe injected inline */}
      <style>{`
        @keyframes shrink {
          from { transform: scaleX(1); }
          to   { transform: scaleX(0); }
        }
      `}</style>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <header className="relative bg-gradient-to-br from-[#030d1a] via-[#071B34] to-[#0B2242] text-white py-20 lg:py-28 overflow-hidden page-hero">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 60% at 100% 0%, rgba(77,163,255,0.18) 0%, transparent 70%)' }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 50% 45% at 0% 100%, rgba(37,99,235,0.12) 0%, transparent 70%)' }} />

        {/* floating glow dots */}
        <div className="absolute top-12 right-24 w-40 h-40 bg-[#4DA3FF]/10 rounded-full blur-3xl animate-pulse pointer-events-none" />
        <div className="absolute bottom-8 left-16 w-56 h-56 bg-blue-400/8 rounded-full blur-3xl animate-pulse pointer-events-none" style={{ animationDelay: '1.5s' }} />

        <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-[#4DA3FF]/20 backdrop-blur-md px-4 py-1.5 rounded-full text-[#93c5fd] text-[10px] font-black uppercase tracking-[0.25em] mb-6 border border-[#4DA3FF]/20">
            <span className="material-icons text-sm">school</span>
            Training Inquiries
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-display mb-5 tracking-tight leading-tight">
            Request <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4DA3FF] to-[#93c5fd]">Training Info</span>
          </h1>
          <p className="text-lg text-blue-100/70 max-w-2xl mx-auto leading-relaxed">
            Fill out the form below and our team will get back to you within one business day with pricing, schedules, and everything you need to get started.
          </p>

          {/* quick contact strip */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-blue-200/60">
            <a href="mailto:training@peer-consulting.com" className="flex items-center gap-2 hover:text-white transition-colors">
              <span className="material-icons text-[#4DA3FF] text-base">mail</span>
              training@peer-consulting.com
            </a>
            <span className="hidden sm:block w-px h-4 bg-white/20" />
            <span className="flex items-center gap-2">
              <span className="material-icons text-[#4DA3FF] text-base">schedule</span>
              Response within 1 business day
            </span>
          </div>
        </div>
      </header>

      {/* ── Main Form + Sidebar ──────────────────────────────────────── */}
      <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">

          {/* ── LEFT — Form ──────────────────────────────────────────── */}
          <main className="w-full lg:w-2/3">
            {/* success state */}
            {status === 'success' && (
              <div className="mb-8 flex items-start gap-4 bg-green-50 border border-green-200 rounded-2xl p-6 shadow-sm">
                <span className="material-icons text-green-500 text-3xl mt-0.5">check_circle</span>
                <div>
                  <p className="font-black text-green-800 text-base mb-1">Request Received!</p>
                  <p className="text-green-700 text-sm leading-relaxed">
                    Thank you for reaching out. Our training team will review your inquiry and respond to <strong>{formData.email || 'your email'}</strong> within one business day.
                  </p>
                </div>
              </div>
            )}

            {/* error state */}
            {status === 'error' && (
              <div className="mb-8 flex items-start gap-4 bg-red-50 border border-red-200 rounded-2xl p-6 shadow-sm">
                <span className="material-icons text-red-500 text-3xl mt-0.5">error</span>
                <div>
                  <p className="font-black text-red-800 text-base mb-1">Submission Failed</p>
                  <p className="text-red-700 text-sm">Something went wrong. Please try again or email us directly at <a href="mailto:training@peer-consulting.com" className="underline font-bold">training@peer-consulting.com</a>.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="bg-white rounded-3xl shadow-[0_4px_30px_rgba(0,0,0,0.06)] border border-gray-100 p-8 md:p-10 space-y-7">
              {/* honeypot */}
              <input
                type="text"
                name="_honeypot"
                value={formData._honeypot}
                onChange={handleChange}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              {/* Section: Personal Info */}
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#4DA3FF] mb-5 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#4DA3FF]/10 flex items-center justify-center text-[#4DA3FF] font-black text-[10px]">1</span>
                  Your Information
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <InputField
                    label="Full Name"
                    id="fullName"
                    required
                    placeholder="Jane Smith"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                  <InputField
                    label="Work Email"
                    id="email"
                    type="email"
                    required
                    placeholder="jane@company.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <InputField
                    label="Phone (optional)"
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  <InputField
                    label="Organization (optional)"
                    id="organization"
                    placeholder="Your company or agency"
                    value={formData.organization}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <hr className="border-gray-100" />

              {/* Section: Training Interest */}
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#4DA3FF] mb-5 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#4DA3FF]/10 flex items-center justify-center text-[#4DA3FF] font-black text-[10px]">2</span>
                  Training Interest
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <InputField label="Course / Program" id="courseInterest" required>
                    <select
                      id="courseInterest"
                      name="courseInterest"
                      required
                      value={formData.courseInterest}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm text-[#071B34] focus:outline-none focus:ring-2 focus:ring-[#4DA3FF] focus:border-transparent transition-all shadow-sm hover:border-gray-300 appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Select a course…</option>
                      {COURSE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </InputField>
                  <InputField label="Preferred Delivery" id="deliveryMode" required>
                    <select
                      id="deliveryMode"
                      name="deliveryMode"
                      required
                      value={formData.deliveryMode}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm text-[#071B34] focus:outline-none focus:ring-2 focus:ring-[#4DA3FF] focus:border-transparent transition-all shadow-sm hover:border-gray-300 appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Select delivery mode…</option>
                      {DELIVERY_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </InputField>
                </div>
              </div>

              <hr className="border-gray-100" />

              {/* Section: Message */}
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#4DA3FF] mb-5 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#4DA3FF]/10 flex items-center justify-center text-[#4DA3FF] font-black text-[10px]">3</span>
                  Your Message
                </p>
                <div className="space-y-5">
                  <InputField
                    label="Subject"
                    id="subject"
                    required
                    placeholder="e.g. Group training enquiry for 15 employees"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-xs font-black uppercase tracking-widest text-[#071B34]">
                      Message <span className="text-accent-blue">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell us about your training goals, team size, timeline, or any specific questions you have…"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm text-[#071B34] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4DA3FF] focus:border-transparent transition-all shadow-sm hover:border-gray-300 resize-none"
                    />
                  </div>
                </div>
              </div>

              {/* Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full flex items-center justify-center gap-3 bg-[#071B34] hover:bg-[#0B2242] disabled:opacity-60 text-white py-4 rounded-2xl font-black uppercase tracking-widest text-sm transition-all shadow-xl active:scale-[0.98] group"
                >
                  {status === 'loading' ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                      </svg>
                      Sending…
                    </>
                  ) : (
                    <>
                      <span className="material-icons text-xl group-hover:translate-x-1 transition-transform">send</span>
                      Submit Training Request
                    </>
                  )}
                </button>
                <p className="text-center text-xs text-gray-400 mt-4">
                  By submitting, you agree to our{' '}
                  <Link to="/privacy-policy" className="underline hover:text-[#071B34] transition-colors">Privacy Policy</Link>.
                  We never share your data.
                </p>
              </div>
            </form>
          </main>

          {/* ── RIGHT — Sidebar ───────────────────────────────────────── */}
          <aside className="w-full lg:w-1/3 space-y-6 lg:sticky lg:top-28">

            {/* why request info card */}
            <div className="bg-[#071B34] text-white p-8 rounded-3xl shadow-xl relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#4DA3FF]/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
              <h3 className="text-sm font-black uppercase tracking-widest mb-6 relative z-10">What Happens Next?</h3>
              <ul className="space-y-5 relative z-10">
                {[
                  { icon: 'mark_email_read', title: 'Instant Confirmation', desc: 'You\'ll receive an automatic email confirming we received your inquiry.' },
                  { icon: 'person_search', title: 'Expert Match', desc: 'We assign the right trainer or consultant to your request within hours.' },
                  { icon: 'event_available', title: 'Schedule & Quote', desc: 'You\'ll receive a personalized training plan and pricing within 1 business day.' },
                  { icon: 'rocket_launch', title: 'Get Started', desc: 'Once confirmed, we kick off onboarding and pre-course materials immediately.' },
                ].map((step) => (
                  <li key={step.icon} className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-xl bg-[#4DA3FF]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="material-icons text-[#4DA3FF] text-base">{step.icon}</span>
                    </div>
                    <div>
                      <p className="font-black text-white text-xs uppercase tracking-wide mb-0.5">{step.title}</p>
                      <p className="text-blue-200/60 text-xs leading-relaxed">{step.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* direct contact card */}
            <div className="bg-white border border-gray-100 p-8 rounded-3xl shadow-sm">
              <h3 className="text-xs font-black uppercase tracking-widest text-[#071B34] mb-5">Prefer to talk directly?</h3>
              <a
                href="mailto:training@peer-consulting.com"
                className="flex items-center gap-3 text-sm text-[#071B34] hover:text-[#4DA3FF] transition-colors font-bold mb-3"
              >
                <span className="material-icons text-[#4DA3FF] text-lg">mail</span>
                training@peer-consulting.com
              </a>
              <p className="text-xs text-gray-400 leading-relaxed">
                Send us an email anytime — our training coordinators monitor this inbox during business hours (Mon–Fri, 9am–6pm ET).
              </p>
              <hr className="my-5 border-gray-100" />
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#4DA3FF] hover:underline"
              >
                <span className="material-icons text-base">arrow_forward</span>
                General Contact Page
              </Link>
            </div>

            {/* accreditation badge */}
            <div className="bg-gradient-to-br from-[#f0f7ff] to-[#e0efff] border border-blue-100 p-6 rounded-3xl text-center">
              <span className="material-icons text-[#4DA3FF] text-3xl mb-3 block">verified</span>
              <p className="text-[10px] font-black uppercase tracking-widest text-[#071B34] mb-1">PeopleCert Accredited</p>
              <p className="text-xs text-gray-500">Registry ID 9550 · Valid until 19/02/2029</p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
