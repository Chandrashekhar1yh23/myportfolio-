import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Journey', to: 'timeline' },
    { name: 'Contact', to: 'contact' }
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: scrolled ? '15px 5%' : '25px 5%',
        background: scrolled ? 'rgba(5, 5, 5, 0.8)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--glass-border)' : 'none',
        transition: 'all 0.3s ease',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
        <a href="https://github.com/Chandrashekhar1yh23" target="_blank" rel="noopener noreferrer" style={{ color: 'white', transition: 'color 0.3s', display: 'flex' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-blue)'} onMouseLeave={(e) => e.currentTarget.style.color = 'white'}>
          <Github size={28} />
        </a>
        <a href="https://www.linkedin.com/in/chandrashekhar-y-h-3b161b344" target="_blank" rel="noopener noreferrer" style={{ color: 'white', transition: 'color 0.3s', display: 'flex' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-blue)'} onMouseLeave={(e) => e.currentTarget.style.color = 'white'}>
          <Linkedin size={28} />
        </a>
      </div>

      <div style={{ display: 'flex', gap: '2rem' }}>
        {navLinks.map((link, index) => (
          <Link 
            key={index}
            to={link.to} 
            spy={true} 
            smooth={true} 
            duration={800} 
            offset={-70}
            activeClass="active-nav-link"
            style={{
              color: 'var(--text-secondary)',
              cursor: 'pointer',
              fontWeight: 500,
              fontSize: '1rem',
              transition: 'color 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'}
            onMouseLeave={(e) => {
              if(!e.target.classList.contains('active-nav-link')) {
                e.target.style.color = 'var(--text-secondary)';
              }
            }}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar;
