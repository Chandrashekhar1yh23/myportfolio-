import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const timelineData = [
  {
    year: "2024 - 2028",
    title: "Bachelor of Technology (B.Tech)",
    description: "Computer Science and Engineering at REVA University, Bengaluru, Karnataka, India."
  },
  {
    year: "Certifications",
    title: "Awards & Certifications",
    description: "• Wadhwani Foundation\n• Copado AI Certificate\n• Codefest – Nationwide Coding Hackathon (2026)\n• Be 10x Workshop\n• Critical Thinking in AI Era\n• Certificate of Excellence in OS and DBMS by Scaler"
  },
  {
    year: "Present",
    title: "Continuous Learning",
    description: "Actively solving Data Structures and Algorithms problems using C++ and Java, and building innovative projects."
  }
];

const Timeline = () => {
  return (
    <section id="timeline" style={{ 
      padding: '100px 5%', 
      position: 'relative',
      backgroundImage: 'linear-gradient(rgba(5, 5, 5, 0.85), rgba(5, 5, 5, 0.95)), url("https://images.unsplash.com/photo-1481253127861-534498168948?auto=format&fit=crop&w=1920&q=80")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1rem' }}>
            My <span className="gradient-text">Journey & Awards</span>
          </h2>
          <div style={{ width: '80px', height: '4px', background: 'var(--accent-blue)', margin: '0 auto', borderRadius: '2px' }} />
        </motion.div>

        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <a href="https://drive.google.com/drive/folders/1hCsMb4zT1yBjnkiFgd068IvIksNzQL3u" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass-card"
              style={{
                background: 'linear-gradient(90deg, rgba(0,240,255,0.2), rgba(138,43,226,0.2))',
                color: 'white',
                border: '1px solid var(--accent-purple)',
                padding: '15px 40px',
                borderRadius: '30px',
                fontSize: '1.1rem',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 0 20px rgba(138, 43, 226, 0.4)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
            >
              View My Certificates & Achievements <ExternalLink size={20} />
            </motion.button>
          </a>
        </div>

        <div style={{ position: 'relative' }}>
          {/* Vertical Line */}
          <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', width: '2px', height: '100%', background: 'linear-gradient(to bottom, var(--accent-blue), var(--accent-purple))', opacity: 0.3 }} />

          {timelineData.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={index} style={{ display: 'flex', justifyContent: isEven ? 'flex-start' : 'flex-end', width: '100%', marginBottom: '3rem', position: 'relative' }}>
                
                {/* Dot */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  style={{ position: 'absolute', left: '50%', transform: 'translate(-50%, 0)', width: '20px', height: '20px', borderRadius: '50%', background: 'var(--bg-color)', border: '4px solid var(--accent-purple)', zIndex: 2 }}
                />

                <motion.div
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="glass-card"
                  style={{ width: 'calc(50% - 40px)', padding: '2rem' }}
                >
                  <span style={{ display: 'inline-block', padding: '5px 12px', background: 'rgba(0, 240, 255, 0.1)', color: 'var(--accent-blue)', borderRadius: '20px', fontSize: '0.85rem', marginBottom: '1rem', fontWeight: 600 }}>
                    {item.year}
                  </span>
                  <h3 style={{ fontSize: '1.3rem', color: 'white', marginBottom: '0.8rem' }}>{item.title}</h3>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', whiteSpace: 'pre-line' }}>
                    {item.description}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Timeline;
