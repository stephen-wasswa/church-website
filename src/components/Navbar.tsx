import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile nav is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <>
      <header id="site-header" className={scrolled ? "scrolled" : ""}>
        <Link to="/" className="logo" aria-label="Alimunze - Kasenge Miracle Centre Church">
          <img src={`${import.meta.env.BASE_URL}logo.png`} alt="KMC Logo" className="logo-img" />
        </Link>
        <ul className="nav-links" role="navigation" aria-label="Main navigation">
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/about">Our Story</NavLink></li>
          <li><NavLink to="/ministries">Get Involved</NavLink></li>
          <li><NavLink to="/sermons">Watch &amp; Listen</NavLink></li>
          <li><NavLink to="/give">Give</NavLink></li>
          <li><NavLink to="/join-us" className="nav-cta">I'm New Here</NavLink></li>
        </ul>
        <button 
          className={`hamburger ${isOpen ? "open" : ""}`} 
          id="hamburger" 
          aria-label="Open menu" 
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span><span></span><span></span>
        </button>
      </header>

      <div 
        className={`mobile-overlay ${isOpen ? "open" : ""}`} 
        id="overlay" 
        aria-hidden="true"
        onClick={() => setIsOpen(false)}
      ></div>
      <nav className={`mobile-nav ${isOpen ? "open" : ""}`} id="mobile-nav" aria-label="Mobile navigation">
        <button 
          className="close-btn" 
          id="close-nav" 
          aria-label="Close menu"
          onClick={() => setIsOpen(false)}
        >
          <X size={20} strokeWidth={2} />
        </button>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/about">Our Story</NavLink>
        <NavLink to="/ministries">Get Involved</NavLink>
        <NavLink to="/sermons">Watch &amp; Listen</NavLink>
        <NavLink to="/give">Give</NavLink>
        <NavLink to="/join-us" className="mobile-cta">I'm New Here</NavLink>
      </nav>
    </>
  );
}
