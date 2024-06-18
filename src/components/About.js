import React from 'react';
import { aboutMe } from '../constants/data';

const About = () => {
  return (
    <div>
      <h1>About Me</h1>
      <p>{aboutMe}</p>
    </div>
  );
};

export default About;
