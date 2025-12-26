import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SmoothScroll } from './components/layout/SmoothScroll';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { LandingPage } from './pages/LandingPage';
import { LegalLayout } from './layouts/LegalLayout';
import { CompanyLayout } from './layouts/CompanyLayout';
import { About, Blog, Careers, Contact } from './pages/company/CompanyPages';
import { Terms } from './pages/legal/Terms';
import { Privacy } from './pages/legal/Privacy';
import { DMCA } from './pages/legal/DMCA';
import { Transparency } from './pages/legal/Transparency';




function App() {
  return (
    <Router>
      <SmoothScroll>
        <ScrollToTop />
        <main className="relative min-h-screen w-full overflow-hidden bg-background text-foreground">
          <Routes>
            <Route path="/" element={<LandingPage />} />

            {/* Company Routes */}
            <Route path="/company/*" element={
              <CompanyLayout>
                <Routes>
                  <Route path="about" element={<About />} />
                  <Route path="blog" element={<Blog />} />
                  <Route path="careers" element={<Careers />} />
                  <Route path="contact" element={<Contact />} />
                </Routes>
              </CompanyLayout>
            } />

            {/* Legal Routes */}
            <Route path="/legal/*" element={
              <LegalLayout>
                <Routes>
                  <Route path="terms" element={<Terms />} />
                  <Route path="privacy" element={<Privacy />} />
                  <Route path="dmca" element={<DMCA />} />
                  <Route path="transparency" element={<Transparency />} />
                </Routes>
              </LegalLayout>
            } />

          </Routes>
        </main>
      </SmoothScroll>
    </Router>
  );
}

export default App;
