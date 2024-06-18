import React from 'react';
import { projects } from '../constants/data';

const Projects = () => {
  return (
    <div>
      <h1>Projects</h1>
      {projects.map(project => (
        <div key={project.name}>
          <h2>{project.name}</h2>
          <p>{project.description}</p>
          <p>Technologies: {project.technologies.join(', ')}</p>
          <a href={project.githubUrl}>GitHub</a>
          <a href={project.liveUrl}>Live Demo</a>
        </div>
      ))}
    </div>
  );
};

export default Projects;
