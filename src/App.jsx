import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Nav from './nav/Nav';
import Footer from './footer/Footer';
import { FaWhatsapp } from 'react-icons/fa6';
import { usePageTracking } from './hooks/usePageTracking';
import { routes } from './config/routes';

function App() {
  const location = useLocation();

  // Track page views for analytics
  usePageTracking();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [location.pathname]);

  return (
    <>    
      <Nav />
      <main className="page-content w-full ">
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </main>
      <Footer />
      <a
        href="https://wa.me/919876543210?text=Hi%20Sri%20Venkateshwara%20Family%20Shopping%2C%20I%20need%20help%20with%20shopping."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_25px_rgba(37,211,102,0.45)] transition hover:scale-110 hover:bg-gradient-to-r hover:from-[#25D366] hover:to-[#4DA7AF]"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={30} />
      </a>
    </>
  );
}

export default App;
