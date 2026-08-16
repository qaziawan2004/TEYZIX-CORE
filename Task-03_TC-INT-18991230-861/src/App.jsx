import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import useDarkMode from './hooks/useDarkMode';
import Navbar from './components/Shared/Navbar';
import Hero from './components/Hero/Hero';
import ProductShowcase from './components/ProductShowcase/ProductShowcase';
import Pricing from './components/Pricing/Pricing';
import FeatureComparison from './components/FeatureComparison/FeatureComparison';
import Testimonials from './components/Testimonials/Testimonials';
import FAQ from './components/FAQ/FAQ';
import BlogPreview from './components/BlogPreview/BlogPreview';
import Contact from './components/Contact/Contact';
import Footer from './components/Shared/Footer';
import BackToTop from './components/Shared/BackToTop';
import ScrollProgress from './components/Shared/ScrollProgress';

function App() {
  const [isDark, toggleDark] = useDarkMode();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark ? 'bg-[#0F0F1A]' : 'bg-white'
    }`}>
      <ScrollProgress />
      <Navbar isDark={isDark} toggleDark={toggleDark} />
      <Hero />
      <ProductShowcase isDark={isDark} />
      <Pricing isDark={isDark} />
      <FeatureComparison isDark={isDark} />
      <Testimonials isDark={isDark} />
      <FAQ isDark={isDark} />
      <BlogPreview isDark={isDark} />
      <Contact isDark={isDark} />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;