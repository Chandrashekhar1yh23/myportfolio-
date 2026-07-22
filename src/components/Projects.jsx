import React from 'react';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { Code, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Vet Science (VetSense AI)",
    description: "Developed a full-stack veterinary healthcare platform with AI-based disease prediction, vaccination tracking, emergency vet locator, and pet image analysis. Built with secure deployment-ready architecture.",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Node.js", "MongoDB", "Express", "JWT", "OAuth"],
    github: "https://github.com/Chandrashekhar1yh23",
    demo: "#"
  },
  {
    title: "Online Voting System",
    description: "Full-stack Online Voting System with MySQL schema, admin/voter roles, and server-side rendering. Implemented database constraints and setup scripts to ensure one-vote-per-voter and secure auditable results.",
    image: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Python", "Flask", "MySQL", "Jinja2", "HTML"],
    github: "https://github.com/Chandrashekhar1yh23",
    demo: "#"
  },
  {
    title: "Arduino Snake Game on OLED",
    description: "Developed a real-time Snake Game using Arduino, SSD1306 OLED Display, and Joystick Module. Implemented collision detection, score tracking, timer, pause/resume, and buzzer-based sound effects.",
    image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Arduino", "Embedded Systems", "Hardware", "C++"],
    github: "https://github.com/Chandrashekhar1yh23",
    demo: "#"
  },
  {
    title: "Social Network Simulator",
    description: "Developed a social network simulation engine utilizing Object-Oriented Principles and an Adjacency List graph data structure to efficiently model and manage complex many-to-many user relationships.",
    image: "https://images.unsplash.com/photo-1516245834210-c4c14271569b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Java", "OOP", "Graph DSA"],
    github: "https://github.com/Chandrashekhar1yh23",
    demo: "#"
  }
];

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <Tilt options={{ max: 15, scale: 1.02, speed: 400 }} style={{ height: '100%' }}>
        <div className="glass-card" style={{ height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden', padding: '1rem' }}>
          
          <div style={{ position: 'relative', width: '100%', height: '200px', borderRadius: '15px', overflow: 'hidden' }}>
            <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.8))' }} />
          </div>

          <div style={{ padding: '1.5rem 0.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem', color: 'white' }}>{project.title}</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem', flexGrow: 1 }}>
              {project.description}
            </p>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
              {project.tags.map((tag, i) => (
                <span key={i} style={{ fontSize: '0.8rem', padding: '4px 10px', background: 'rgba(138, 43, 226, 0.1)', color: 'var(--accent-blue)', borderRadius: '20px', border: '1px solid rgba(0, 240, 255, 0.2)' }}>
                  #{tag}
                </span>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.9rem' }} className="hover-text">
                <Code size={18} /> Code
              </a>
              <a href={project.demo} style={{ color: 'var(--accent-blue)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.9rem' }} className="hover-text">
                <ExternalLink size={18} /> Live Demo
              </a>
            </div>
          </div>

        </div>
      </Tilt>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" style={{ 
      padding: '100px 5%', 
      position: 'relative',
      backgroundImage: 'linear-gradient(rgba(5, 5, 5, 0.85), rgba(5, 5, 5, 0.95)), url("https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1920&q=80")',
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
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div style={{ width: '80px', height: '4px', background: 'var(--accent-purple)', margin: '0 auto', borderRadius: '2px' }} />
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Projects;
