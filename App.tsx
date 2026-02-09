import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogPostDetail from './pages/BlogPostDetail';
import Tools from './pages/Tools';
import MakeMoney from './pages/MakeMoney';
import Contact from './pages/Contact';
import About from './pages/About';
import Disclaimer from './pages/Disclaimer';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import { RoutePath } from './types';

// Scroll to top on route change
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
      <div className="flex flex-col min-h-screen bg-black text-white selection:bg-secondary selection:text-black">
        <ScrollToTop />
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path={RoutePath.HOME} element={<Home />} />
            <Route path={RoutePath.BLOG} element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPostDetail />} />
            <Route path={RoutePath.TOOLS} element={<Tools />} />
            <Route path={RoutePath.MONEY} element={<MakeMoney />} />
            <Route path={RoutePath.CONTACT} element={<Contact />} />
            <Route path={RoutePath.ABOUT} element={<About />} />
            <Route path={RoutePath.DISCLAIMER} element={<Disclaimer />} />
            <Route path={RoutePath.TERMS} element={<Terms />} />
            <Route path={RoutePath.PRIVACY} element={<Privacy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;