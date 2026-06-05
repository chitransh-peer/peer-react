import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Team from './pages/Team';
import OurServices from './pages/OurServices';
import Blogs from './pages/Blogs';
import Careers from './pages/Careers';
import ContactUs from './pages/ContactUs';
import TermsOfUse from './pages/TermsOfUse';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ItilOverview from './pages/ItilOverview';
import ItilCertification from './pages/ItilCertification';
import ItilFoundation from './pages/ItilFoundation';
import Sandbox from './pages/Sandbox';
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopButton from './components/ScrollToTopButton';
import AiTraining from './pages/AiTraining';
import PPMAgile from './pages/PPMAgile';
import ItilFoundationV5 from './pages/ItilFoundationV5';
import ItilFoundation4 from './pages/ItilFoundation4';
import ItilFoundationBridgeV5 from './pages/ItilFoundationBridgeV5';
import ItilProductV5 from './pages/ItilProductV5';
import ItilServiceV5 from './pages/ItilServiceV5';
import ItilExperienceV5 from './pages/ItilExperienceV5';
import ItilStrategyV5 from './pages/ItilStrategyV5';
import ItilTransformationV5 from './pages/ItilTransformationV5';
import Itil4SpecialistMsf from './pages/Itil4SpecialistMsf';
import ItilPmPic from './pages/ItilPmPic';
import ItilPmCai from './pages/ItilPmCai';
import BlogAdmin from './pages/BlogAdmin';
import BlogPost from './pages/BlogPost';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ScrollToTopButton />
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
    </Router>
  );
}

export default App;
