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
    bio: "I turn 'what if' into 'it works'—8+ years of building AI-powered, data-driven solutions for Singapore’s top organisations.",
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
    skills: [
      'Agentic AI',
      'Generative AI',
      'Natural Language Processing',
      'Large Language Models',
      'Data Science',
      'Retrieval-Augmented Generation',
      'Data Architecture',
      'Continuous Integration and Delivery (CI/CD)',
      'Amazon Web Services (AWS)',
      'Microsoft Azure',
      'Google Cloud Platform'
    ],
  };

  const [activeSection, setActiveSection] = useState('hero');

  const Hero = () => {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isPulsing, setIsPulsing] = useState(true);    
    let pulseTimeout;

    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % portfolioData.profileImages.length);
      }, 3000);

      pulseTimeout = setTimeout(() => {      
        setIsPulsing(false);
      }, 2000);


      return () => clearInterval(intervalId);
    }, []);

    return (
      <div className="flex flex-col items-center justify-center p-4">
        <img
          src={portfolioData.profileImages[currentImageIndex]}
          alt="Profile"
          className={`w-64 h-64 rounded-full mx-auto mb-4 object-cover transition-transform duration-500 transform hover:scale-105 ${isPulsing ? 'animate-pulse' : ''}`}
        />
        <h1 className="text-5xl sm:text-6xl font-bold mb-2">
          {portfolioData.name}
        </h1>
        <h2 className="text-2xl sm:text-3xl text-indigo-400 font-semibold mb-4">
          {portfolioData.title}
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-300 text-center">
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
          {portfolioData.projects.map(project => (
            <div key={project.id} className="project-card-container">
              <div className="project-card">
                <div className="project-card-front bg-gray-700 p-6 rounded-xl shadow-lg flex flex-col justify-center items-center text-center">
                  <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                </div>
                <div className="project-card-back bg-gray-800 p-6 rounded-xl shadow-lg">
                  <p className="text-lg text-gray-300 mb-4">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-lg text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const Skills = () => (
    <div className="container mx-auto p-4 flex-grow flex items-center justify-center h-full">
      <div className="text-center w-full">
        <h2 className="text-4xl font-bold mb-10">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {portfolioData.skills.map((skill, index) => (
            <span
              key={index}
              className="bg-gray-700 text-lg text-gray-200 px-4 py-2 rounded-full font-medium"
            >
              {skill}
            </span>
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
      case 'skills':
        return <Skills />;
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
    <div className="bg-gray-900 text-gray-100 font-sans h-screen flex flex-col">
      <main className="flex-grow flex items-center justify-center p-[15px]">
        <div className="w-full mx-auto px-4">
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
    <footer className="fixed bottom-[25px] left-0 right-0 z-50 ">
        <nav className="container mx-auto px-4 py-4 flex justify-center items-center">
          <div className="space-x-4">
            {activeSection !== 'hero' && (
              <a onClick={() => setActiveSection('hero')} className="nav-link text-lg text-gray-300 hover:text-white transition-colors cursor-pointer">
                Home
              </a>
            )}
            {activeSection !== 'projects' && (
              <a onClick={() => setActiveSection('projects')} className="nav-link text-lg text-gray-300 hover:text-white transition-colors cursor-pointer">Projects</a>
            )}
            {activeSection !== 'skills' && (
              <a onClick={() => setActiveSection('skills')} className="nav-link text-lg text-gray-300 hover:text-white transition-colors cursor-pointer">Skills</a>
            )}
            {activeSection !== 'resume' && (
              <a onClick={() => setActiveSection('resume')} className="nav-link text-lg text-gray-300 hover:text-white transition-colors cursor-pointer">Resume</a>
            )}
            {activeSection !== 'contact' && (
              <a onClick={() => setActiveSection('contact')} className="nav-link text-lg text-gray-300 hover:text-white transition-colors cursor-pointer">Contact</a>
            )}
          </div>
        </nav>
    </footer>    
    </div>
  );
};

export default App;
