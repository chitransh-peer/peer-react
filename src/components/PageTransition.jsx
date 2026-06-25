import { useLocation } from 'react-router-dom';

/**
 * PageTransition — wraps page content in a keyed div so that every route
 * change triggers a fresh fade-in + subtle upward slide animation.
 *
 * Animation: 220ms ease-out fade + 10px translateY → 0
 * Respects prefers-reduced-motion: reduces to instant-cut crossfade only.
 */
export default function PageTransition({ children }) {
  const { pathname } = useLocation();

  return (
    <div
      key={pathname}
      className="page-transition-enter"
      style={{ minHeight: 0 }}
    >
      {children}
    </div>
  );
}
