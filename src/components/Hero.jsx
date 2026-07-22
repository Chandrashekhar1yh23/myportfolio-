import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileText, Code, Mail } from 'lucide-react';
import { Link } from 'react-scroll';
import profileImg from '../assets/profile.jpg';

const roles = [
  "Full Stack Developer",
  "React Developer",
  "Problem Solver",
  "AI Enthusiast"
];

const Hero = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRoleIndex];
    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && text === role) {
      setTimeout(() => setIsDeleting(true), 2000);
      return;
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setText(prev => 
        isDeleting 
          ? role.substring(0, prev.length - 1) 
          : role.substring(0, prev.length + 1)
      );
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, currentRoleIndex]);

  return (
    <section id="home" style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      padding: '0 5%', 
      position: 'relative',
      backgroundImage: 'linear-gradient(rgba(5, 5, 5, 0.8), rgba(5, 5, 5, 0.95)), url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      <div style={{ maxWidth: '1200px', width: '100%', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', zIndex: 10 }}>
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ flex: '1 1 500px', paddingRight: '2rem' }}
        >
          <h2 style={{ color: 'var(--accent-blue)', fontSize: '1.2rem', marginBottom: '1rem', letterSpacing: '2px' }}>
            Aspiring Software Developer
          </h2>
          <h1 style={{ fontSize: 'clamp(3rem, 5vw, 5rem)', lineHeight: '1.1', marginBottom: '1.5rem', fontWeight: 800 }}>
            Hi, I'm <br/>
            <span className="gradient-text">Chandrashekhar Y H</span>
          </h1>
          <h3 style={{ fontSize: '1.5rem', height: '30px', color: 'var(--text-secondary)', marginBottom: '2.5rem' }}>
            I am a <span style={{ color: 'var(--text-primary)', borderRight: '2px solid var(--accent-purple)', paddingRight: '5px' }}>{text}</span>
          </h3>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="https://github.com/Chandrashekhar1yh23" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: 'linear-gradient(90deg, var(--accent-blue), var(--accent-purple))',
                  color: 'white',
                  border: 'none',
                  padding: '12px 30px',
                  borderRadius: '30px',
                  fontSize: '1rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <Code size={20} /> GitHub
              </motion.button>
            </a>

            <a href="/resume.pdf" download style={{ textDecoration: 'none' }}>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass-card"
                style={{
                  background: 'transparent',
                  color: 'white',
                  padding: '12px 30px',
                  borderRadius: '30px',
                  fontSize: '1rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent-blue)'; e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 240, 255, 0.3)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--glass-border)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <FileText size={20} /> Download Resume
              </motion.button>
            </a>

            <Link to="contact" smooth={true} duration={800}>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass-card"
                style={{
                  background: 'transparent',
                  color: 'white',
                  padding: '12px 30px',
                  borderRadius: '30px',
                  fontSize: '1rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent-purple)'; e.currentTarget.style.boxShadow = '0 0 15px rgba(138, 43, 226, 0.3)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--glass-border)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <Mail size={20} /> Contact Me
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Image Content */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{ flex: '1 1 300px', display: 'flex', justifyContent: 'center', marginTop: '2rem' }}
        >
          <div style={{ position: 'relative', width: '300px', height: '300px' }}>
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              style={{
                position: 'absolute',
                top: '-5%', left: '-5%', right: '-5%', bottom: '-5%',
                borderRadius: '50%',
                background: 'linear-gradient(45deg, var(--accent-blue), var(--accent-purple))',
                zIndex: -1,
                filter: 'blur(10px)'
              }}
            />
            {/* The wrapper is perfectly round */}
            <div style={{
              width: '100%', height: '100%',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '2px solid rgba(255,255,255,0.1)',
              backgroundColor: '#111',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {/* Added objectPosition: 'center 10%' so the face is not cut off in portraits */}
              <img 
                src={profileImg} 
                alt="Chandrashekhar" 
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 10%' }} 
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
