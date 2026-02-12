
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import RefundPolicy from './pages/RefundPolicy';
import Disclaimer from './pages/Disclaimer';
import { RoutePath } from './types';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#030303] text-white selection:bg-secondary selection:text-black font-sans">
        <ScrollToTop />
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path={RoutePath.HOME} element={<Home />} />
            <Route path={RoutePath.SYSTEM} element={<Products />} />
            <Route path={RoutePath.ABOUT} element={<About />} />
            <Route path={RoutePath.CONTACT} element={<Contact />} />
            <Route path={RoutePath.TERMS} element={<Terms />} />
            <Route path={RoutePath.PRIVACY} element={<Privacy />} />
            <Route path={RoutePath.REFUNDS} element={<RefundPolicy />} />
            <Route path={RoutePath.DISCLAIMER} element={<Disclaimer />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
