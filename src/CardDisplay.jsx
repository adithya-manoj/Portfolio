// CardDisplay.js
import React from 'react';
import { useLocation } from 'react-router-dom';

const CardDisplay = () => {
  const location = useLocation();
  const { project } = location.state || {}; // Retrieve the project data from state

  if (!project) {
    return <h2>No project data available</h2>;
  }

  return (
    <div>
      <h2>{project.title}</h2>
      <img src={project.img} alt={project.title} style={{ width: '100%' }} />
      <h2>{project.text}</h2>
      <p>Category: {project.category}</p>
    </div>
  );
};

export default CardDisplay;
