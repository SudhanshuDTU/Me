import React from 'react';

function ProjectCard({ src, link, h3, p,margin }) {
  return (
    <a href={link} target="_blank">
      <img className="hover" src={src} alt={`${h3} logo`} />
      <h3 style={{marginTop: margin}}>{h3}</h3>
      <p>{p}</p>
    </a>
  );
}

export default ProjectCard;