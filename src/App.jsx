// App.jsx
// This is your main React component, now structured as a single-screen application.

import React, { useState, useEffect } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import profilePic from './profileImage.jpeg';
import profilePic2 from './profileImage2.jpg';
import profilePic3 from './profileImage3.jpeg';
import profilePic4 from './profileImage4.jpg';
import profilePic5 from './profileImage5.jpeg';
import resume from './resume.pdf';
import './App.css';

// The main App component that renders the entire portfolio website.
const App = () => {
  // Define the user's data and projects as a JavaScript object for easy editing.
  const portfolioData = {
    name: 'Eswar Raj',
    title: 'Data & AI Enthusiast',
    bio: "I turn 'what if' into 'it works'—7+ years of building AI-powered, data-driven solutions for Singapore’s top organisations.",
    profileImages: [profilePic, profilePic2, profilePic3, profilePic4, profilePic5],
    resumeURL: resume,
    contact: {
      email: 'eswar.shadows@gmail.com',
      linkedin: 'eswar-raj-rajendran-67293b128/',
      github: 'E0015114',
    },
    projects: [
      {
        id: 1,
        title: 'AlumNet: Where Alumni Data Meets Agentic AI',
        description: 'AlumNet — Rethinking alumni search with Agentic AI. Built during my NUS graduate course, this system enables natural-language queries over alumni profiles using a fine-tuned LLaMA 3 model, vector embeddings, and scalable search. From parsing resumes to building a conversational UI, AlumNet showcases a full-stack LLM solution—turning static data into insightful, structured results.',
        link: 'https://medium.com/@eswar.shadows/background-aef167943e1c',
      },
      {
        id: 2,
        title: 'Smart Car Park Availability System',
        description: 'A predictive parking intelligence solution for Singapore—using real-time APIs, BigQuery-powered data pipelines, and LSTM forecasting via Google Cloud to forecast availability up to 30 minutes ahead. Deployed through containerized microservices and monitored with performance dashboards, it turns raw data into actionable insights for drivers and planners alike.',
        link: 'https://medium.com/@eswar.shadows/smart-car-park-availability-system-using-big-data-analytics-277dd2bae403',
      }
    ],
    skills: {
  "Generative & Agentic AI": [
    "LLMs", "Agentic AI", "Prompt Engineering", "RAG", "LLM Fine-tuning", "Conversational AI"
  ],
  "Programming & Scripting": [
    "Python", "R", "PySpark"
  ],
  "Machine Learning & Data Science": [
    "Deep Learning (CNN, RNN, LSTM)", "Transformer Architectures", "Time Series Forecasting", 
    "Ensemble Methods", "AutoML"
  ],
  "Data Engineering & MLOps": [
    "Data Architecture", "Kafka", "Dataflow", "Databricks", "Azure Data Factory", 
    "AWS Glue", "MLflow", "Docker", "CI/CD"
  ],
  "Cloud Platforms": [
    "AWS", "Azure", "GCP"
  ],
  "Databases & Data Warehousing": [
    "BigQuery", "Snowflake", "Azure SQL", "Oracle SQL"
  ],
  "Business Intelligence & Visualization": [
    "Power BI", "Looker Studio", "Tableau"
  ]
},

    experience: [
      {
        id: 1,
        role: 'Associate Solution Architect',
        company: 'Synapxe Pte Ltd',
        dates: 'Oct 2023 - Aug 2024',
        description: 'Architected an end-to-end ML pipeline on GCP for clinical analytics using Pub/Sub, Dataflow, and Vertex AI. Designed CI/CD workflows with Cloud Build for automated model management and developed a semantic terminology service prototype to enhance clinical search capabilities.'
      },
      {
        id: 2,
        role: 'Consultant',
        company: 'Avanade Asia Pte Ltd - Client: IRAS',
        dates: 'Sep 2022 - Sep 2023',
        description: 'Led a team to implement real-time data streaming using Apache Kafka for scalable data ingestion into Azure Data Lake. Developed .NET microservices to interact with SQL databases, ensuring efficient data extraction and transformation for analytics.'
      },
      {
        id: 3,
        role: 'Consultant',
        company: 'Wealth Dynamix',
        dates: 'Feb 2022 - Aug 2022',
        description: 'Collaborated with stakeholders in wealth management to define data requirements for the client lifecycle. Designed data models and built automated data pipelines to support CLM analytics and reporting needs.'
      },
      {
        id: 4,
        role: 'Senior Analyst',
        company: 'Avanade Asia Pte Ltd - Client: GIC',
        dates: 'Mar 2017 - Jan 2022',
        description: 'Spearheaded an end-to-end data migration strategy, transitioning a legacy Oracle database to Azure SQL. Built comprehensive ETL pipelines using Azure SQL, ensuring seamless data cleaning and transformation with SQL and Python scripts.'
      }
    ],
    education: [
      {
        id: 1,
        institution: 'National University of Singapore',
        degree: 'Master of Technology in Enterprise Business Analytics',
        dates: 'Aug 2024 - Aug 2025'
      },
      {
        id: 2,
        institution: 'National University of Singapore',
        degree: 'Graduate Diploma in System Analysis',
        dates: 'Feb 2016 - Mar 2017'
      },
      {
        id: 3,
        institution: 'Anna University',
        degree: 'Bachelor of Engineering',
        dates: 'Aug 2010 - May 2014'
      }
    ],
    certifications: [
      {
        id: 1,
        name: 'Singapore Computer Society - AWS Generative AI Program',
        description: 'Gained expertise in Generative AI, including Planning Generative AI Projects, Prompt Engineering, Responsible AI Practices and Generative AI using AWS.'
      },
      { id: 2, name: 'AWS Solution Architect Professional' },
      { id: 3, name: 'Microsoft Certified Azure DevOps Engineer Expert' },
      { id: 4, name: 'Microsoft Certified Azure AI Engineer Associate' }
    ]
  };

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'education', label: 'Education' },
    { id: 'resume', label: 'Resume' },
    { id: 'contact', label: 'Contact' },
  ];

  const [activeSection, setActiveSection] = useState('hero');
  const [enlargedProject, setEnlargedProject] = useState(null);
  const [enlargedExperience, setEnlargedExperience] = useState(null);

  const Hero = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isContentVisible, setIsContentVisible] = useState(false);

    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % portfolioData.profileImages.length);
      }, 3000);

      // Trigger content animation shortly after component mounts
      const timer = setTimeout(() => setIsContentVisible(true), 100);

      return () => {
        clearInterval(intervalId);
        clearTimeout(timer);
      };
    }, []);

    return (
      <div className={`flex flex-col items-center justify-center p-4 ${isContentVisible ? 'content-visible' : ''}`}>
        <div className="profile-image-container">
          <div className="image-fade-wrapper">
            <SwitchTransition>
              <CSSTransition
                key={currentImageIndex}
                addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
                classNames="image-fade"
              >
                <img src={portfolioData.profileImages[currentImageIndex]} alt="Profile" />
              </CSSTransition>
            </SwitchTransition>
          </div>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2 hero-text-stagger" style={{ transitionDelay: '150ms' }}>
          {portfolioData.name}
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl text-indigo-400 font-semibold mb-4 hero-text-stagger" style={{ transitionDelay: '250ms' }}>
          {portfolioData.title}
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-300 text-center hero-text-stagger" style={{ transitionDelay: '350ms' }}>
          {portfolioData.bio}
        </p>
      </div>
    );
  };

  const Projects = () => (
    <div className="container mx-auto p-4 flex-grow flex items-center justify-center h-full ">
      <div className="text-center w-full">
        <h2 className="text-4xl font-bold mb-10">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-700 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 flex flex-col justify-center items-center text-center"
              onClick={() => setEnlargedProject(project)}
            >
              <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
              <p className="text-indigo-400 mt-4 font-semibold">View Details</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const Skills = () => {
    const skillCategories = Object.keys(portfolioData.skills);
    const [activeCategory, setActiveCategory] = useState(skillCategories[0]);

    useEffect(() => {
      const interval = setInterval(() => {
        const currentIndex = skillCategories.indexOf(activeCategory);
        const nextIndex = (currentIndex + 1) % skillCategories.length;
        setActiveCategory(skillCategories[nextIndex]);
      }, 2000); // Cycle every 2 seconds

      // Clear interval on component unmount or when activeCategory changes (e.g., user click)
      return () => clearInterval(interval);
    }, [activeCategory, skillCategories]);

    return (
      <div className="container mx-auto p-4 flex-grow flex flex-col items-center justify-center h-full">
        <h2 className="text-4xl font-bold mb-10">Skills</h2>
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-3 mb-8">
          {skillCategories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`skill-category-btn ${activeCategory === category ? 'active' : ''}`}
            >
              {category}
              {activeCategory === category && <div className="skill-progress-bar" />}
            </button>
          ))}
        </div>
        <div className="relative w-full min-h-[200px]">
          <SwitchTransition mode="out-in">
            <CSSTransition
              key={activeCategory}
              addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
              classNames="skill-list-fade"
            >
              <div className="flex flex-wrap justify-center gap-4 p-4">
                {portfolioData.skills[activeCategory].map((skill, index) => (
                  <span key={index} className="skill-tag" style={{ transitionDelay: `${index * 50}ms` }}>
                    {skill}
                  </span>
                ))}
              </div>
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
    );
  };

  const Experience = () => {
    return (
      <div className="container mx-auto p-4 flex-grow flex items-center justify-center h-full">
        <div className="w-full max-w-5xl">
          <h2 className="text-4xl font-bold mb-10 text-center">Work Experience</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {portfolioData.experience.map((job) => (
              <div
                key={job.id}
                className="experience-item bg-gray-800/50 p-6 rounded-lg text-left cursor-pointer transition-all duration-300 transform hover:-translate-y-2"
                onClick={() => setEnlargedExperience(job)}
              >
                <h3 className="text-2xl font-semibold text-white">{job.role}</h3>
                <h4 className="text-xl font-medium text-indigo-400 mb-2">{job.company}</h4>
                <p className="text-indigo-400 mt-4 font-semibold">View Details</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const Education = () => (
    <div className="container mx-auto p-4 flex-grow flex items-center justify-center h-full">
      <div className="text-center w-full">
        <h2 className="text-4xl font-bold mb-10">Education</h2>
        {portfolioData.education.map((edu) => (
          <div key={edu.id} className="mb-6">
            <h3 className="text-2xl font-semibold text-white">{edu.institution}</h3>
            <p className="text-xl text-indigo-400">{edu.degree}</p>
            <p className="text-lg text-gray-400">{edu.dates}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const Certifications = () => (
    <div className="container mx-auto p-4 flex-grow flex items-center justify-center h-full">
      <div className="text-center w-full max-w-4xl">
        <h2 className="text-4xl font-bold mb-10">Certifications</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {portfolioData.certifications.map((cert) => (
            <div key={cert.id} className="certification-item bg-gray-800/50 p-6 rounded-lg text-left flex flex-col">
              <h3 className="text-2xl font-semibold text-white">{cert.name}</h3>
              {cert.description && (
                <p className="text-lg text-gray-300 mt-2 flex-grow">
                  {cert.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const Resume = () => (
    <div className="container mx-auto p-4 flex-grow flex items-center justify-center h-full">
      <div className="text-center w-full">
        <h2 className="text-4xl font-bold mb-4">Resume</h2>
        <p className="text-lg text-gray-300 mb-8">
          A copy of my resume is available for download below.
        </p>
        <a
          href={portfolioData.resumeURL}
          download
          className="inline-block bg-indigo-500 hover:bg-indigo-600 text-lg text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-colors"
        >
          Download Resume
        </a>
      </div>
    </div>
  );

  const Contact = () => (
    <div className="container mx-auto p-4 flex-grow flex items-center justify-center h-full">
      <div className="text-center w-full">
        <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
        <p className="text-lg text-gray-300 mb-8">
          I'm always open to new opportunities and collaborations. Feel free to reach out!
        </p>
        <div className="flex justify-center gap-6">
          <a
            href={`mailto:${portfolioData.contact.email}`}
            className="text-lg text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            Email
          </a>
          <a
            href={`https://www.linkedin.com/in/${portfolioData.contact.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`https://github.com/${portfolioData.contact.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </div >
  );

  const renderSection = () => {
    switch (activeSection) {
      case 'projects':
        return <Projects />;
      case 'experience':
        return <Experience />;
      case 'skills':
        return <Skills />;
      case 'certifications':
        return <Certifications />;
      case 'education':
        return <Education />;
      case 'resume':
        return <Resume />;
      case 'contact':
        return <Contact />;
      case 'hero':
      default:
        return <Hero />;
    }
  };

  return (    
    <div className={`bg-gray-900 text-gray-100 font-sans h-screen flex flex-col ${enlargedProject || enlargedExperience ? 'overflow-hidden' : ''}`}>
      <main className="flex-grow flex items-center justify-center p-[15px]">
        <div className="w-full mx-auto px-4 max-w-7xl">
          <SwitchTransition mode="out-in">
            <CSSTransition
              key={activeSection}
              addEndListener={(node, done) => {
                node.addEventListener('transitionend', done, false);
              }}
              classNames="fade"
            >
              {renderSection()}
            </CSSTransition>
          </SwitchTransition>
        </div>
      </main>

      <SwitchTransition>
        <CSSTransition
          key={!!enlargedProject}
          addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
          classNames="modal-fade"
          unmountOnExit
        >
          {enlargedProject ? (
            <div className="project-modal-overlay" onClick={() => setEnlargedProject(null)}>
              <div className="project-modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="project-modal-close" onClick={() => setEnlargedProject(null)} aria-label="Close project details">
                  &times;
                </button>
                <h3 className="text-3xl font-bold text-white mb-4">{enlargedProject.title}</h3>
                <p className="text-lg text-gray-300 mb-6">{enlargedProject.description}</p>
                <a
                  href={enlargedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-lg text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
                >
                  View Project →
                </a>
              </div>
            </div>
          ) : <div />}
        </CSSTransition>
      </SwitchTransition>
      <SwitchTransition>
        <CSSTransition
          key={!!enlargedExperience}
          addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
          classNames="modal-fade"
          unmountOnExit
        >
          {enlargedExperience ? (
            <div className="project-modal-overlay" onClick={() => setEnlargedExperience(null)}>
              <div className="project-modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="project-modal-close" onClick={() => setEnlargedExperience(null)} aria-label="Close experience details">
                  &times;
                </button>
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="text-3xl font-bold text-white">{enlargedExperience.role}</h3>
                  <p className="text-md text-gray-400">{enlargedExperience.dates}</p>
                </div>
                <h4 className="text-2xl font-medium text-indigo-400 mb-4">{enlargedExperience.company}</h4>
                <p className="text-lg text-gray-300">{enlargedExperience.description}</p>
              </div>
            </div>
          ) : <div />}
        </CSSTransition>
      </SwitchTransition>
      <footer className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <nav className="bg-gray-800/60 backdrop-blur-md rounded-full shadow-lg p-2">
          <div className="flex items-center space-x-1">
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.id}
                onClick={() => setActiveSection(link.id)}
                className={`nav-pill ${activeSection === link.id ? 'active' : ''}`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default App;
