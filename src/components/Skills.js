import React from 'react';
import { skills } from '../constants/data';

const Skills = () => {
  return (
    <div>
      <h1>Skills</h1>
      <ul>
        {skills.map(skill => (
          <li key={skill.name}>{skill.name} - {skill.level}</li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
