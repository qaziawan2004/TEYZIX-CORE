import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({ isDark, toggleDark }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Products', id: 'products' },
    { name: 'Pricing', id: 'pricing' },
    { name: 'Features', id: 'features' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'FAQ', id: 'faq' },
    { name: 'Blog', id: 'blog' },
    { name: 'Contact', id: 'contact' }
  ];

  // Smooth scroll to section
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    setIsOpen(false);
    
    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = 80;
      const sectionTop = section.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth'
      });
    } else {
      // Fallback: try to find the section by ID
      console.log(`Section #${sectionId} not found, trying to scroll to it anyway`);
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  // Determine link color based on scroll and dark mode
  const getLinkColor = () => {
    if (isDark) return 'text-white hover:text-[#6C63FF]';
    if (isScrolled) return 'text-gray-800 hover:text-[#6C63FF]';
    return 'text-white hover:text-[#6C63FF]';
  };

  // Determine mobile menu background
  const getMobileBg = () => {
    if (isDark) return 'bg-[#0F0F1A] border-[#1A1A2E]';
    if (isScrolled) return 'bg-white border-gray-200';
    return 'bg-[#0F0F1A]/95 border-gray-200';
  };

  // Determine mobile link color
  const getMobileLinkColor = () => {
    if (isDark) return 'text-white hover:text-[#6C63FF]';
    if (isScrolled) return 'text-gray-800 hover:text-[#6C63FF]';
    return 'text-white hover:text-[#6C63FF]';
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? isDark
            ? 'bg-[#0F0F1A]/95 backdrop-blur-md shadow-lg border-b border-[#1A1A2E]'
            : 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a 
            href="#"
            className={`text-xl md:text-2xl font-bold whitespace-nowrap transition-colors ${
              isDark ? 'text-white' : (isScrolled ? 'text-gray-800' : 'text-white')
            }`}
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setIsOpen(false);
            }}
          >
            SwiftForge
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={`#${link.id}`}
                className={`text-sm lg:text-base font-medium whitespace-nowrap transition-colors ${getLinkColor()}`}
                onClick={(e) => scrollToSection(e, link.id)}
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={toggleDark}
              className={`p-2 rounded-full transition-all hover:scale-110 ${
                isDark 
                  ? 'bg-[#1A1A2E] text-white' 
                  : isScrolled
                    ? 'bg-gray-200 text-gray-800'
                    : 'bg-white/20 text-white'
              }`}
              aria-label="Toggle dark mode"
            >
              {isDark ? <FaSun size={18} /> : <FaMoon size={18} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={toggleDark}
              className={`p-2 rounded-full ${
                isDark 
                  ? 'bg-[#1A1A2E] text-white' 
                  : isScrolled
                    ? 'bg-gray-200 text-gray-800'
                    : 'bg-white/20 text-white'
              }`}
              aria-label="Toggle dark mode"
            >
              {isDark ? <FaSun size={16} /> : <FaMoon size={16} />}
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className={isDark ? 'text-white' : (isScrolled ? 'text-gray-800' : 'text-white')}
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className={`md:hidden shadow-lg border-t ${getMobileBg()}`}>
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={`#${link.id}`}
                className={`block py-2 transition-colors ${getMobileLinkColor()}`}
                onClick={(e) => scrollToSection(e, link.id)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;