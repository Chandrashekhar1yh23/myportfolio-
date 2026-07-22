import React from 'react';
import { motion } from 'framer-motion';
import { Code, BookOpen, Brain } from 'lucide-react';

const About = () => {
  return (
    <section id="about" style={{ 
      padding: '100px 5%', 
      position: 'relative',
      backgroundImage: 'linear-gradient(rgba(5, 5, 5, 0.85), rgba(5, 5, 5, 0.95)), url("https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=1920&q=80")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1rem' }}>
            About <span className="gradient-text">Me</span>
          </h2>
          <div style={{ width: '80px', height: '4px', background: 'var(--accent-purple)', margin: '0 auto', borderRadius: '2px' }} />
        </motion.div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'stretch' }}>
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card"
            style={{ flex: '1 1 500px', padding: '3rem', position: 'relative', overflow: 'hidden' }}
          >
            <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '150px', height: '150px', background: 'var(--accent-blue)', opacity: 0.1, borderRadius: '50%', filter: 'blur(40px)' }} />
            
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: 'white' }}>Who am I?</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
              I am a passionate aspiring Software Developer who enjoys solving real-world problems through technology. I am currently pursuing my Bachelor of Technology (B.Tech) in Computer Science and Engineering at REVA University, Bengaluru (2024 - 2028).
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8' }}>
              I am dedicated to building efficient, scalable, and user-friendly applications while continuously enhancing my programming, software development, and problem-solving skills.
            </p>
          </motion.div>

          <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            
            {[
              { icon: <Code size={24} color="var(--accent-blue)"/>, title: 'Software Development', desc: 'Building efficient and scalable applications using Java, Python, and C/C++.' },
              { icon: <Brain size={24} color="var(--accent-purple)"/>, title: 'DSA & Problem Solving', desc: 'Strong algorithmic thinking with extensive DSA problem-solving in C++/Java.' },
              { icon: <BookOpen size={24} color="#00f0ff"/>, title: 'Full-Stack Architecture', desc: 'Developing robust web platforms with React, Node.js, and databases.' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="glass-card"
                style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '1.5rem', transition: 'transform 0.3s' }}
                whileHover={{ x: 10, background: 'rgba(255,255,255,0.05)' }}
              >
                <div style={{ background: 'rgba(0, 0, 0, 0.3)', padding: '15px', borderRadius: '15px', display: 'flex' }}>
                  {item.icon}
                </div>
                <div>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'white' }}>{item.title}</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{item.desc}</p>
                </div>
              </motion.div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
