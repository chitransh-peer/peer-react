import React, { useState, useEffect, useCallback } from 'react';
import {
  getItilPricing,
  saveItilCoursePrice,
  resetItilCoursePrice,
  resetAllItilPricing,
  hasCourseOverride,
  hasAnyOverride,
} from '../utils/itilPricingUtils';
import { DEFAULT_ITIL_PRICES, ITIL_COURSE_LABELS, ITIL_PRICE_GROUPS } from '../data/itilPricingData';

/** Format a number with commas — e.g. 1000 → 1,000 */
const fmt = (n) => (typeof n === 'number' ? n.toLocaleString('en-US') : n);

/* ── Auth ──────────────────────────────────────────────────────────── */
const ADMIN_USERNAME = 'peer';
const ADMIN_PASSWORD = 'peer@admin2025';

/* ── Login Screen ──────────────────────────────────────────────────── */
function LoginScreen({ onLogin }) {
  const [user, setUser]   = useState('');
  const [pw, setPw]       = useState('');
  const [err, setErr]     = useState(false);
  const [show, setShow]   = useState(false);

  const handle = (e) => {
    e.preventDefault();
    if (user === ADMIN_USERNAME && pw === ADMIN_PASSWORD) {
      sessionStorage.setItem('peer_pricing_auth', '1');
      onLogin();
    } else {
      setErr(true);
      setPw('');
    }
  };

  return (
    <div className="min-h-screen bg-[#071B34] flex items-center justify-center px-4">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(77,163,255,0.12) 0%, transparent 70%)' }} />

      <div className="w-full max-w-md relative z-10">
        {/* Logo */}
        <div className="text-center mb-10">
          <div className="w-16 h-16 rounded-2xl bg-[#4DA3FF]/20 border border-[#4DA3FF]/30 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#4DA3FF]/10">
            <span className="material-icons text-[#4DA3FF] text-3xl">sell</span>
          </div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Pricing Admin</h1>
          <p className="text-slate-400 text-sm mt-2">ITIL Programme Pricing — Peer Team Only</p>
        </div>

        <form onSubmit={handle} className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md">
          {/* Username */}
          <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
            Username
          </label>
          <div className="relative mb-5">
            <span className="material-icons absolute left-3 top-3 text-slate-500 text-xl">person</span>
            <input
              type="text"
              value={user}
              onChange={(e) => { setUser(e.target.value); setErr(false); }}
              placeholder="Enter username"
              autoComplete="username"
              className={`w-full bg-white/10 border ${err ? 'border-red-400' : 'border-white/20'} text-white placeholder-white/30 rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#4DA3FF] transition-all`}
            />
          </div>

          {/* Password */}
          <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
            Password
          </label>
          <div className="relative mb-6">
            <span className="material-icons absolute left-3 top-3 text-slate-500 text-xl">lock</span>
            <input
              type={show ? 'text' : 'password'}
              value={pw}
              onChange={(e) => { setPw(e.target.value); setErr(false); }}
              placeholder="Enter password"
              autoComplete="current-password"
              className={`w-full bg-white/10 border ${err ? 'border-red-400' : 'border-white/20'} text-white placeholder-white/30 rounded-xl pl-10 pr-12 py-3 focus:outline-none focus:ring-2 focus:ring-[#4DA3FF] transition-all`}
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
            <div className="flex items-center gap-2 text-red-400 text-sm mb-5 bg-red-500/10 px-4 py-2 rounded-lg border border-red-500/20">
              <span className="material-icons text-base">error_outline</span>
              Incorrect credentials. Please try again.
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-[#4DA3FF] hover:bg-[#3b8fe8] text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-[#4DA3FF]/20 uppercase tracking-wider text-sm active:scale-95"
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

/* ── Inline Price Row ──────────────────────────────────────────────── */
function PriceRow({ priceId, pricing, onSave, onReset }) {
  const label    = ITIL_COURSE_LABELS[priceId] || priceId;
  const current  = pricing[priceId] || DEFAULT_ITIL_PRICES[priceId];
  const defaults = DEFAULT_ITIL_PRICES[priceId];
  const isCustom = hasCourseOverride(priceId);

  const [editing, setEditing] = useState(false);
  const [spVal, setSpVal]     = useState(String(current.spPrice));
  const [olVal, setOlVal]     = useState(String(current.olPrice));
  const [saved, setSaved]     = useState(false);

  // Sync if external reset changes pricing
  useEffect(() => {
    if (!editing) {
      setSpVal(String(current.spPrice));
      setOlVal(String(current.olPrice));
    }
  }, [current.spPrice, current.olPrice, editing]);

  const handleSave = () => {
    const sp = parseFloat(spVal);
    const ol = parseFloat(olVal);
    if (isNaN(sp) || isNaN(ol) || sp < 0 || ol < 0) return;
    onSave(priceId, { spPrice: sp, olPrice: ol });
    setEditing(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleReset = () => {
    onReset(priceId);
    setSpVal(String(defaults.spPrice));
    setOlVal(String(defaults.olPrice));
    setEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSave();
    if (e.key === 'Escape') { setEditing(false); setSpVal(String(current.spPrice)); setOlVal(String(current.olPrice)); }
  };

  return (
    <tr className={`border-b border-slate-100 transition-all ${isCustom ? 'bg-blue-50/50' : 'bg-white hover:bg-slate-50/60'}`}>
      {/* Course name */}
      <td className="px-5 py-4">
        <div className="flex items-center gap-3">
          <p className="text-sm font-semibold text-[#071B34] leading-tight">{label}</p>
          {isCustom && (
            <span className="text-[10px] font-black uppercase tracking-wider bg-[#4DA3FF]/15 text-[#4DA3FF] border border-[#4DA3FF]/30 px-2 py-0.5 rounded-full whitespace-nowrap">
              Custom
            </span>
          )}
          {saved && (
            <span className="text-[10px] font-black uppercase tracking-wider bg-emerald-100 text-emerald-600 border border-emerald-200 px-2 py-0.5 rounded-full whitespace-nowrap flex items-center gap-1">
              <span className="material-icons text-[11px]">check_circle</span> Saved
            </span>
          )}
        </div>
      </td>

      {/* Self-Paced price */}
      <td className="px-4 py-4 text-center">
        {editing ? (
          <div className="flex items-center justify-center gap-1">
            <span className="text-slate-400 text-sm">US$</span>
            <input
              type="number"
              min="0"
              step="1"
              value={spVal}
              onChange={(e) => setSpVal(e.target.value)}
              onKeyDown={handleKeyDown}
              autoFocus
              className="w-24 text-center border-2 border-[#4DA3FF] rounded-lg px-2 py-1.5 text-sm font-bold text-[#071B34] focus:outline-none bg-white"
            />
          </div>
        ) : (
          <button
            onClick={() => setEditing(true)}
            className="group flex items-center gap-1 mx-auto text-sm font-bold text-[#071B34] hover:text-[#4DA3FF] transition-colors"
            title="Click to edit"
          >
            US${fmt(current.spPrice)}
            <span className="material-icons text-[14px] opacity-0 group-hover:opacity-100 transition-opacity text-[#4DA3FF]">edit</span>
          </button>
        )}
        {isCustom && !editing && (
          <p className="text-[10px] text-slate-400 mt-0.5">Default: US${fmt(defaults.spPrice)}</p>
        )}
      </td>

      {/* Online Live price */}
      <td className="px-4 py-4 text-center">
        {editing ? (
          <div className="flex items-center justify-center gap-1">
            <span className="text-slate-400 text-sm">US$</span>
            <input
              type="number"
              min="0"
              step="1"
              value={olVal}
              onChange={(e) => setOlVal(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-24 text-center border-2 border-[#4DA3FF] rounded-lg px-2 py-1.5 text-sm font-bold text-[#071B34] focus:outline-none bg-white"
            />
          </div>
        ) : (
          <button
            onClick={() => setEditing(true)}
            className="group flex items-center gap-1 mx-auto text-sm font-bold text-[#1e40af] hover:text-[#4DA3FF] transition-colors"
            title="Click to edit"
          >
            US${fmt(current.olPrice)}
            <span className="material-icons text-[14px] opacity-0 group-hover:opacity-100 transition-opacity text-[#4DA3FF]">edit</span>
          </button>
        )}
        {isCustom && !editing && (
          <p className="text-[10px] text-slate-400 mt-0.5">Default: US${fmt(defaults.olPrice)}</p>
        )}
      </td>

      {/* Actions */}
      <td className="px-4 py-4 text-right">
        <div className="flex items-center justify-end gap-2">
          {editing ? (
            <>
              <button
                onClick={handleSave}
                className="flex items-center gap-1 bg-[#071B34] hover:bg-[#0f2d52] text-white px-4 py-2 rounded-lg text-xs font-bold transition-all active:scale-95"
              >
                <span className="material-icons text-[14px]">save</span>
                Save
              </button>
              <button
                onClick={() => { setEditing(false); setSpVal(String(current.spPrice)); setOlVal(String(current.olPrice)); }}
                className="flex items-center gap-1 border border-slate-200 text-slate-500 hover:border-slate-400 hover:text-slate-700 px-3 py-2 rounded-lg text-xs font-bold transition-all"
              >
                Cancel
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => setEditing(true)}
                className="flex items-center gap-1 border border-[#4DA3FF]/40 text-[#4DA3FF] hover:bg-[#4DA3FF]/10 px-3 py-2 rounded-lg text-xs font-bold transition-all"
              >
                <span className="material-icons text-[14px]">edit</span>
                Edit
              </button>
              {isCustom && (
                <button
                  onClick={handleReset}
                  className="flex items-center gap-1 border border-red-200 text-red-500 hover:bg-red-50 px-3 py-2 rounded-lg text-xs font-bold transition-all"
                  title="Reset to default price"
                >
                  <span className="material-icons text-[14px]">restart_alt</span>
                  Reset
                </button>
              )}
            </>
          )}
        </div>
      </td>
    </tr>
  );
}

/* ── Price Group Table ─────────────────────────────────────────────── */
function PriceGroup({ group, pricing, onSave, onReset }) {
  return (
    <div className="mb-10">
      {/* Group header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-1 h-6 rounded-full" style={{ background: group.color }} />
        <h3 className="text-sm font-black uppercase tracking-widest" style={{ color: group.color }}>
          {group.label}
        </h3>
        <span className="text-xs text-slate-400 font-medium">{group.ids.length} courses</span>
      </div>

      <div className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-100 bg-slate-50/80">
              <th className="px-5 py-3 text-left text-[10px] font-black uppercase tracking-widest text-slate-400">Course</th>
              <th className="px-4 py-3 text-center text-[10px] font-black uppercase tracking-widest text-slate-400">Self-Paced (SP)</th>
              <th className="px-4 py-3 text-center text-[10px] font-black uppercase tracking-widest text-slate-400">Online Live (OL) ★</th>
              <th className="px-4 py-3 text-right text-[10px] font-black uppercase tracking-widest text-slate-400">Actions</th>
            </tr>
          </thead>
          <tbody>
            {group.ids.map((id) => (
              <PriceRow
                key={id}
                priceId={id}
                pricing={pricing}
                onSave={onSave}
                onReset={onReset}
              />
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-[10px] text-slate-400 mt-2 ml-1">
        ★ <strong>Online Live</strong> is the price displayed on the public ITIL Certification page.
        Click any price to edit it.
      </p>
    </div>
  );
}

/* ── Main Dashboard ────────────────────────────────────────────────── */
function Dashboard({ onLogout }) {
  const [pricing, setPricing]         = useState(() => getItilPricing());
  const [anyOverride, setAnyOverride] = useState(() => hasAnyOverride());
  const [resetAllDone, setResetAllDone] = useState(false);

  const refresh = useCallback(() => {
    setPricing(getItilPricing());
    setAnyOverride(hasAnyOverride());
  }, []);

  // Keep in sync if another tab changes pricing
  useEffect(() => {
    window.addEventListener('storage', refresh);
    return () => window.removeEventListener('storage', refresh);
  }, [refresh]);

  const handleSave = useCallback((priceId, prices) => {
    saveItilCoursePrice(priceId, prices);
    refresh();
  }, [refresh]);

  const handleReset = useCallback((priceId) => {
    resetItilCoursePrice(priceId);
    refresh();
  }, [refresh]);

  const handleResetAll = () => {
    if (!window.confirm('Reset ALL prices to defaults? This cannot be undone.')) return;
    resetAllItilPricing();
    refresh();
    setResetAllDone(true);
    setTimeout(() => setResetAllDone(false), 3000);
  };

  const customCount = ITIL_PRICE_GROUPS.flatMap(g => g.ids).filter(id => hasCourseOverride(id)).length;

  return (
    <div className="min-h-screen bg-[#f0f4f8]">
      {/* Top Nav */}
      <nav className="bg-[#071B34] text-white px-6 py-4 flex items-center justify-between shadow-2xl">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-[#4DA3FF]/20 border border-[#4DA3FF]/30 flex items-center justify-center">
            <span className="material-icons text-[#4DA3FF] text-lg">sell</span>
          </div>
          <div>
            <h1 className="font-black text-sm tracking-tight leading-none">ITIL Pricing Admin</h1>
            <p className="text-slate-400 text-[10px] mt-0.5 font-medium">Peer Training Portal</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="/itil-certification"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 text-xs font-bold text-slate-300 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-xl transition-all"
          >
            <span className="material-icons text-[15px]">open_in_new</span>
            View ITIL Page
          </a>
          <button
            onClick={onLogout}
            className="flex items-center gap-2 text-xs font-bold text-slate-300 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-xl transition-all"
          >
            <span className="material-icons text-[15px]">logout</span>
            Logout
          </button>
        </div>
      </nav>

      {/* Page content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">

        {/* Hero header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-5 mb-10">
          <div>
            <h2 className="text-2xl font-black text-[#071B34] tracking-tight">Programme Pricing</h2>
            <p className="text-sm text-slate-500 mt-1">
              Changes save instantly and reflect live on the public ITIL Certification page.
            </p>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            {/* Status pill */}
            <div className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold border ${anyOverride ? 'bg-amber-50 border-amber-200 text-amber-700' : 'bg-emerald-50 border-emerald-200 text-emerald-700'}`}>
              <span className={`w-2 h-2 rounded-full ${anyOverride ? 'bg-amber-400' : 'bg-emerald-400'} animate-pulse`} />
              {anyOverride ? `${customCount} custom price${customCount !== 1 ? 's' : ''} active` : 'All default prices'}
            </div>

            {anyOverride && (
              <button
                onClick={handleResetAll}
                className="flex items-center gap-2 bg-white border border-red-200 text-red-500 hover:bg-red-50 hover:border-red-400 px-4 py-2.5 rounded-xl text-xs font-bold transition-all active:scale-95 shadow-sm"
              >
                <span className="material-icons text-[15px]">restart_alt</span>
                Reset All
              </button>
            )}
          </div>
        </div>

        {/* Reset All confirmation */}
        {resetAllDone && (
          <div className="flex items-center gap-3 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-xl px-5 py-3 mb-6 text-sm font-semibold">
            <span className="material-icons text-lg">check_circle</span>
            All prices have been reset to defaults and are now live on the ITIL page.
          </div>
        )}

        {/* Info banner */}
        <div className="flex items-start gap-3 bg-[#071B34]/5 border border-[#071B34]/10 rounded-xl px-5 py-4 mb-8 text-sm">
          <span className="material-icons text-[#4DA3FF] text-lg mt-0.5 flex-shrink-0">info</span>
          <p className="text-slate-600 leading-relaxed">
            <strong className="text-[#071B34]">How it works:</strong> Prices are stored securely in your browser's localStorage.
            Click <span className="font-bold">Edit</span> on any row to update a price, then <span className="font-bold">Save</span>.
            The <span className="font-bold">Online Live</span> price is the one shown publicly.
            Use <span className="font-bold">Reset</span> to revert a single course to its default price.
          </p>
        </div>

        {/* Price tables by group */}
        {ITIL_PRICE_GROUPS.map((group) => (
          <PriceGroup
            key={group.key}
            group={group}
            pricing={pricing}
            onSave={handleSave}
            onReset={handleReset}
          />
        ))}

        <p className="text-center text-[11px] text-slate-400 mt-8 font-medium">
          Peer Training &amp; Consulting · ITIL Pricing Admin · Restricted Access
        </p>
      </div>
    </div>
  );
}

/* ── Root Component ────────────────────────────────────────────────── */
export default function ItilPricingAdmin() {
  const [authed, setAuthed] = useState(
    () => sessionStorage.getItem('peer_pricing_auth') === '1'
  );

  const handleLogout = () => {
    sessionStorage.removeItem('peer_pricing_auth');
    setAuthed(false);
  };

  if (!authed) {
    return <LoginScreen onLogin={() => setAuthed(true)} />;
  }

  return <Dashboard onLogout={handleLogout} />;
}
