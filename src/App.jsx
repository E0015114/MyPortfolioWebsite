// App.jsx
// This is your main React component. All the content and logic for your portfolio website lives here.

import React from 'react';
import profilePic from './profileImage.jpeg';
import resume from './resume.pdf'

// The main App component that renders the entire portfolio website.
const App = () => {
  // Define the user's data and projects as a JavaScript object for easy editing.
  const portfolioData = {
    name: 'Eswar Raj',
    title: 'Data & AI Enthusiast',
    bio: "I turn ‘what if’ into ‘it works’—8+ years of building AI-powered, data-driven solutions for Singapore’s top organisations.",
    profileImage: profilePic, 
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

  // The Hero section component
  const Hero = () => (
    <div className="text-center py-16 px-4">
      {/* Replaced the div with a hand emoji with an img tag */}
      <img
        src={portfolioData.profileImage}
        alt="Profile"
        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
      />
      <h1 className="text-4xl sm:text-5xl font-bold mb-2">
        {portfolioData.name}
      </h1>
      <h2 className="text-xl sm:text-2xl text-indigo-400 font-semibold mb-4">
        {portfolioData.title}
      </h2>
      <p className="max-w-2xl mx-auto text-gray-300">
        {portfolioData.bio}
      </p>
    </div>
  );
  // The Projects section component
  const Projects = () => (
    <section id="projects" className="py-16 bg-gray-800 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.projects.map((project) => (
            <div key={project.id} className="bg-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <a
                href={project.link}
                className="inline-block text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // The Skills section component
  const Skills = () => (
    <section id="skills" className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {portfolioData.skills.map((skill, index) => (
            <span
              key={index}
              className="bg-gray-700 text-gray-200 px-4 py-2 rounded-full font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
       </div>
    </section>
  );
  // New Resume section component
  const Resume = () => (
    <section id="resume" className="py-16 bg-gray-900 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Resume</h2>
        <p className="text-gray-300 mb-8">
          A copy of my resume is available for download below.
        </p>
        <a
          href={portfolioData.resumeURL}
          download
          className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-colors"
        >
          Download Resume
        </a>
      </div>
    </section>
  );

  // The Contact section component
  const Contact = () => (
    <section id="contact" className="py-16 bg-gray-800 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="text-gray-300 mb-8">
          I'm always open to new opportunities and collaborations. Feel free to reach out!
        </p>
        <div className="flex justify-center gap-6">
          <a
            href={`mailto:${portfolioData.contact.email}`}
            className="text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            Email
          </a>
          <a
            href={`https://www.linkedin.com/in/${portfolioData.contact.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`https://github.com/${portfolioData.contact.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );

  return (
    // Main container for the app with a dark theme and Inter font
    <div className="bg-gray-900 text-gray-100 font-sans min-h-screen">
      {/* Header with navigation */}
      <header className="sticky top-0 z-50 bg-gray-900 bg-opacity-90 backdrop-filter backdrop-blur-lg border-b border-gray-700">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#name" className="text-xl font-bold text-indigo-400">
            {portfolioData.name}
          </a>
          <div className="space-x-4">
            <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a>
            <a href="#skills" className="text-gray-300 hover:text-white transition-colors">Skills</a>
            <a href="#resume" className="text-gray-300 hover:text-white transition-colors">Resume</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
          </div>
        </nav>
      </header>

      <main>
        <Hero />
        <Projects />
        <Skills />
        <Resume />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500">
        <p>
          &copy; {new Date().getFullYear()} {portfolioData.name}. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default App;
