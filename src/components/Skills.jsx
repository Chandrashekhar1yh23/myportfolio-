import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "C", level: 90 },
      { name: "C++", level: 85 },
      { name: "Java", level: 85 }
    ]
  },
  {
    title: "Databases & Platform",
    skills: [
      { name: "SQL", level: 80 },
      { name: "MongoDB", level: 80 },
      { name: "Git & GitHub", level: 85 },
      { name: "VS Code", level: 90 }
    ]
  },
  {
    title: "Core Competencies",
    skills: [
      { name: "Data Structures & Algorithms (DSA)", level: 90 },
      { name: "Problem Solving", level: 85 },
      { name: "Algorithmic Thinking", level: 85 }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" style={{ 
      padding: '100px 5%', 
      position: 'relative',
      backgroundImage: 'linear-gradient(rgba(5, 5, 5, 0.85), rgba(5, 5, 5, 0.95)), url("https://images.unsplash.com/photo-1508247206155-231a47343e01?auto=format&fit=crop&w=1920&q=80")',
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
            My <span className="gradient-text">Skills</span>
          </h2>
          <div style={{ width: '80px', height: '4px', background: 'var(--accent-blue)', margin: '0 auto', borderRadius: '2px' }} />
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIndex * 0.2 }}
              className="glass-card"
              style={{ padding: '2rem' }}
            >
              <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', color: 'white', textAlign: 'center' }}>
                {category.title}
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {category.skills.map((skill, index) => (
                  <div key={index}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                      <span style={{ fontWeight: 500, color: 'var(--text-secondary)' }}>{skill.name}</span>
                      <span style={{ color: 'var(--accent-blue)', fontSize: '0.9rem' }}>{skill.level}%</span>
                    </div>
                    <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + (index * 0.1) }}
                        style={{ height: '100%', background: 'linear-gradient(90deg, var(--accent-blue), var(--accent-purple))', borderRadius: '4px' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
          
        </div>
      </div>
    </section>
  );
};

export default Skills;
