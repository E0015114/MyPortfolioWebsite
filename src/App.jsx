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
import './App.css'; // Make sure to import the App.css file

// The main App component that renders the entire portfolio website.
const App = () => {
  // Define the user's data and projects as a JavaScript object for easy editing.
  const portfolioData = {
    name: 'Eswar Raj',
    title: 'Data & AI Enthusiast',
    bio: "I turn ‘what if’ into ‘it works’—8+ years of building AI-powered, data-driven solutions for Singapore’s top organisations.",
    // Updated to an array of three profile images for the carousel.
    profileImages: [profilePic, profilePic2, profilePic3,profilePic4,profilePic5], 
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
        link: 'https://medium.com/@eswar.shadows/background-aef167943e1c', // Replace with a link to the project repo or live demo
      },
      {
        id: 2,
        title: 'Smart Car Park Availability System',
        description: 'A predictive parking intelligence solution for Singapore—using real-time APIs, BigQuery-powered data pipelines, and LSTM forecasting via Google Cloud to forecast availability up to 30 minutes ahead. Deployed through containerized microservices and monitored with performance dashboards, it turns raw data into actionable insights for drivers and planners alike.',
        link: 'https://medium.com/@eswar.shadows/smart-car-park-availability-system-using-big-data-analytics-277dd2bae403', // Replace with a link to the project repo or live demo
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

  // State to manage the currently active section
  const [activeSection, setActiveSection] = useState('hero');

  // The Hero section component
  const Hero = () => {
    // State for the image carousel
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isPulsing, setIsPulsing] = useState(true);

    // Effect to handle the image transition every 3 seconds
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % portfolioData.profileImages.length);
      }, 3000); // 3000ms = 3 seconds

      // Stop the pulsing animation after 2 seconds
      setTimeout(() => {
        setIsPulsing(false);
      }, 2000);

      // Clear the interval when the component unmounts
      return () => clearInterval(intervalId);
    }, []);

    return (
      // Changed padding to be larger on desktop for a more dramatic feel
      <div className="text-center py-24 md:py-48 px-4">
        {/* Carousel image logic */}
        <img
          src={portfolioData.profileImages[currentImageIndex]}
          alt="Profile"
          // Increased image size and added a pulse animation
          className={`w-64 h-64 rounded-full mx-auto mb-4 object-cover ${isPulsing ? 'animate-pulse' : ''}`}
        />
        <h1 className="text-5xl sm:text-6xl font-bold mb-2">
          {portfolioData.name}
        </h1>
        <h2 className="text-2xl sm:text-3xl text-indigo-400 font-semibold mb-4">
          {portfolioData.title}
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-300">
          {portfolioData.bio}
        </p>
      </div>
    );
  };

  // The Projects section component
  const Projects = () => (
    <div className="container mx-auto py-16 px-4">
      <h2 className="text-4xl font-bold text-center mb-10">Featured Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioData.projects.map((project) => (
          <div key={project.id} className="bg-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-white mb-2">{project.title}</h3>
            <p className="text-lg text-gray-300 mb-4">{project.description}</p>
            <a
              href={project.link}
              className="inline-block text-lg text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </div>
  );

  // The Skills section component
  const Skills = () => (
    <div className="container mx-auto py-16 px-4">
      <h2 className="text-4xl font-bold text-center mb-10">Skills</h2>
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
  );

  // The Resume section component
  const Resume = () => (
    <div className="container mx-auto text-center py-16 px-4">
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
  );

  // The Contact section component
  const Contact = () => (
    <div className="container mx-auto text-center py-16 px-4">
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
  );

  // Conditional rendering to display the active section
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
    // Main container for the app with a dark theme and Inter font
    <div className="bg-gray-900 text-gray-100 font-sans h-screen flex flex-col">
      {/* Header with navigation */}
      <header className="sticky top-0 z-50 bg-gray-900 bg-opacity-90 backdrop-filter backdrop-blur-lg border-b border-gray-700">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#" onClick={() => setActiveSection('hero')} className="text-2xl font-bold text-indigo-400 cursor-pointer">
            {portfolioData.name}
          </a>
          <div className="space-x-4">
            <a href="#projects" onClick={() => setActiveSection('projects')} className="text-lg text-gray-300 hover:text-white transition-colors cursor-pointer">Projects</a>
            <a href="#skills" onClick={() => setActiveSection('skills')} className="text-lg text-gray-300 hover:text-white transition-colors cursor-pointer">Skills</a>
            <a href="#resume" onClick={() => setActiveSection('resume')} className="text-lg text-gray-300 hover:text-white transition-colors cursor-pointer">Resume</a>
            <a href="#contact" onClick={() => setActiveSection('contact')} className="text-lg text-gray-300 hover:text-white transition-colors cursor-pointer">Contact</a>
          </div>
        </nav>
      </header>

      <main className="flex-grow flex items-center justify-center">
        {/* Removed max-w-5xl to allow content to expand */}
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

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500">
        <p className="text-lg">
          &copy; {new Date().getFullYear()} {portfolioData.name}. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default App;
