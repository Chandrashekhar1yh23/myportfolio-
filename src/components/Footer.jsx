import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer style={{ borderTop: '1px solid var(--glass-border)', padding: '40px 5%', background: 'var(--bg-color)', position: 'relative', zIndex: 10 }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
        
        <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'white' }}>
          Chandrashekhar<span style={{ color: 'var(--accent-purple)' }}>.</span>
        </div>

        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <motion.a whileHover={{ y: -5, color: 'var(--accent-blue)' }} href="https://github.com/Chandrashekhar1yh23" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }}>
            <Github size={24} />
          </motion.a>
          <motion.a whileHover={{ y: -5, color: 'var(--accent-blue)' }} href="https://www.linkedin.com/in/chandrashekhar-y-h-3b161b344" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }}>
            <Linkedin size={24} />
          </motion.a>
          <motion.a whileHover={{ y: -5, color: 'var(--accent-blue)' }} href="mailto:chandruyh7@gmail.com" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }}>
            <Mail size={24} />
          </motion.a>
        </div>

        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
          © {new Date().getFullYear()} Chandrashekhar Y H. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
