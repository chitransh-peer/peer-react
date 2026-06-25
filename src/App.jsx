import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopButton from './components/ScrollToTopButton';
import PageLoader from './components/PageLoader';
import usePageMeta from './hooks/usePageMeta';
import { PAGE_META, DEFAULT_META } from './data/pageMeta';

// ── Lazy-loaded page components ──────────────────────────────────────────────
// Each becomes a separate JS chunk: only downloaded when the user visits that route.
const Home                    = lazy(() => import('./pages/Home'));
const AboutUs                 = lazy(() => import('./pages/AboutUs'));
const Team                    = lazy(() => import('./pages/Team'));
const OurServices             = lazy(() => import('./pages/OurServices'));
const Blogs                   = lazy(() => import('./pages/Blogs'));
const Careers                 = lazy(() => import('./pages/Careers'));
const ContactUs               = lazy(() => import('./pages/ContactUs'));
const TermsOfUse              = lazy(() => import('./pages/TermsOfUse'));
const PrivacyPolicy           = lazy(() => import('./pages/PrivacyPolicy'));
const ItilOverview            = lazy(() => import('./pages/ItilOverview'));
const ItilCertification       = lazy(() => import('./pages/ItilCertification'));
const ItilFoundation          = lazy(() => import('./pages/ItilFoundation'));
const ItilFoundationV5        = lazy(() => import('./pages/ItilFoundationV5'));
const ItilFoundation4         = lazy(() => import('./pages/ItilFoundation4'));
const ItilFoundationBridgeV5  = lazy(() => import('./pages/ItilFoundationBridgeV5'));
const ItilProductV5           = lazy(() => import('./pages/ItilProductV5'));
const ItilServiceV5           = lazy(() => import('./pages/ItilServiceV5'));
const ItilExperienceV5        = lazy(() => import('./pages/ItilExperienceV5'));
const ItilStrategyV5          = lazy(() => import('./pages/ItilStrategyV5'));
const ItilTransformationV5    = lazy(() => import('./pages/ItilTransformationV5'));
const Itil4SpecialistMsf      = lazy(() => import('./pages/Itil4SpecialistMsf'));
const ItilPmPic               = lazy(() => import('./pages/ItilPmPic'));
const ItilPmCai               = lazy(() => import('./pages/ItilPmCai'));
const Sandbox                 = lazy(() => import('./pages/Sandbox'));
const AiTraining              = lazy(() => import('./pages/AiTraining'));
const PPMAgile                = lazy(() => import('./pages/PPMAgile'));
const BlogAdmin               = lazy(() => import('./pages/BlogAdmin'));
const BlogPost                = lazy(() => import('./pages/BlogPost'));

// ── MetaManager — updates <title> and <meta description> on every navigation ──
// Sits inside <Router> so it can access useLocation.
function MetaManager() {
  const { pathname } = useLocation();
  const meta = PAGE_META[pathname] ?? DEFAULT_META;
  usePageMeta(meta.title, meta.description);
  return null;
}

// ── App ───────────────────────────────────────────────────────────────────────
function App() {
  return (
    <Router>
      <ScrollToTop />
      <ScrollToTopButton />
      <MetaManager />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="team" element={<Team />} />
            <Route path="services" element={<OurServices />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="careers" element={<Careers />} />
            <Route path="contact" element={<ContactUs />} />
            <Route path="terms-of-use" element={<TermsOfUse />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="itil-overview" element={<ItilOverview />} />
            <Route path="itil-certification" element={<ItilCertification />} />
            <Route path="itil-foundation" element={<ItilFoundation />} />
            <Route path="itil-foundation-v5" element={<ItilFoundationV5 />} />
            <Route path="itil-foundation-4" element={<ItilFoundation4 />} />
            <Route path="itil-foundation-bridge-v5" element={<ItilFoundationBridgeV5 />} />
            <Route path="itil-specialist-product-v5" element={<ItilProductV5 />} />
            <Route path="itil-specialist-service-v5" element={<ItilServiceV5 />} />
            <Route path="itil-specialist-experience-v5" element={<ItilExperienceV5 />} />
            <Route path="itil-specialist-strategy-v5" element={<ItilStrategyV5 />} />
            <Route path="itil-specialist-transformation-v5" element={<ItilTransformationV5 />} />
            <Route path="itil-specialist-msf" element={<Itil4SpecialistMsf />} />
            <Route path="itil-practice-pic" element={<ItilPmPic />} />
            <Route path="itil-practice-cai" element={<ItilPmCai />} />
            <Route path="sandbox" element={<Sandbox />} />
            <Route path="ai-certification" element={<AiTraining />} />
            <Route path="ppm-agile-certification" element={<PPMAgile />} />
            <Route path="blog/:id" element={<BlogPost />} />
          </Route>
          {/* Hidden admin route — not linked in nav */}
          <Route path="/peer-admin" element={<BlogAdmin />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
