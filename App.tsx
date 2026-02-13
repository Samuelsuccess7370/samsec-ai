
import React, { useEffect, useState } from 'react';
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
import Blog from './pages/Blog';
import BlogPostDetail from './pages/BlogPostDetail';
import Tools from './pages/Tools';
import Resources from './pages/Resources';
import { RoutePath } from './types';

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.hash.slice(1) || '/');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash.slice(1) || '/');
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    if (currentPath === RoutePath.HOME) return <Home />;
    if (currentPath === RoutePath.SYSTEM) return <Products />;
    if (currentPath === RoutePath.ABOUT) return <About />;
    if (currentPath === RoutePath.CONTACT) return <Contact />;
    if (currentPath === RoutePath.TERMS) return <Terms />;
    if (currentPath === RoutePath.PRIVACY) return <Privacy />;
    if (currentPath === RoutePath.REFUNDS) return <RefundPolicy />;
    if (currentPath === RoutePath.DISCLAIMER) return <Disclaimer />;
    if (currentPath === RoutePath.BLOG) return <Blog />;
    if (currentPath === RoutePath.TOOLS) return <Tools />;
    if (currentPath === RoutePath.RESOURCES) return <Resources />;
    if (currentPath.startsWith('/blog/')) return <BlogPostDetail />;
    
    // Default fallback
    return <Home />;
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#030303] text-white selection:bg-secondary selection:text-black font-sans">
      <Header />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
