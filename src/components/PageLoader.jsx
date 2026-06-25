/**
 * PageLoader — shown by <Suspense> while a lazy page chunk is downloading.
 * Typically visible for <200ms on a fast connection; it's a graceful fallback,
 * not a primary UX element.
 */
export default function PageLoader() {
  return (
    <div
      aria-label="Loading page"
      role="status"
      style={{
        position: 'fixed',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--color-bg, #ffffff)',
        zIndex: 9999,
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
        {/* Spinning ring in brand blue */}
        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: '50%',
            border: '3px solid #e2e8f0',
            borderTopColor: '#4DA3FF',
            animation: 'peer-spin 0.75s linear infinite',
          }}
        />
        <span style={{ fontSize: '0.75rem', color: '#94a3b8', letterSpacing: '0.1em', fontWeight: 600 }}>
          LOADING
        </span>
      </div>

      {/* Keyframe is co-located here so this component is self-contained */}
      <style>{`
        @keyframes peer-spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
