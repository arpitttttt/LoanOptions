import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

// Homepage sections
import BannerSection from './components/HeroSection';
import LunchtimeLoans from './components/IframeSection';
import HeroSection from './components/AnotherSection';
import AutoScrollCards from './components/MoreSuccess';
import MoreControl from './components/Step';
import ParallaxScrollEffect from './animation/HeroAnimation';
import LoanHelpBanner from './components/NeedHelp';
import LoansBanner from './components/LoanBanner';
import LoanPage from './components/LoanPage';
import PromoBanner from './components/GoogleReview';

// Pages
import About from './pages/About';
import FAQ from './pages/FAQ';
import Calculator from './pages/Calculator';
import LoanTypes from './pages/LoanTypes';

function App() {
  return (
    <BrowserRouter basename="/LoanOptions/">
      <Routes>
        {/* Homepage with all components */}
        <Route
          path="/"
          element={
            <Layout>
              <BannerSection />
              <LunchtimeLoans />
              <HeroSection />
              <AutoScrollCards />
              <MoreControl />
              <LoansBanner />
              <LoanPage />
              <PromoBanner />
              <ParallaxScrollEffect />
              <LoanHelpBanner />
            </Layout>
          }
        />

        {/* Other pages wrapped in Layout */}
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/faq" element={<Layout><FAQ /></Layout>} />
        <Route path="/calculator" element={<Layout><Calculator /></Layout>} />
        <Route path="/loans" element={<Layout><LoanTypes /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
