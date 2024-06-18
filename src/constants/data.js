// src/constants/data.js
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export const aboutMe = "I am a passionate software developer with a love for learning and building innovative solutions.";

export const headerLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Skills', path: '/skills' },
  { name: 'Contact', path: '/contact' },
];

export const socialLinks = [
  {
    name: 'GitHub',
    icon: <FaGithub />,
    url: 'https://github.com/yourusername',
  },
  {
    name: 'LinkedIn',
    icon: <FaLinkedin />,
    url: 'https://linkedin.com/in/yourusername',
  },
  {
    name: 'Twitter',
    icon: <FaTwitter />,
    url: 'https://twitter.com/yourusername',
  },
];

export const projects = [
  {
    name: 'Project One',
    description: 'A brief description of Project One.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    githubUrl: 'https://github.com/yourusername/project-one',
    liveUrl: 'https://projectone.live',
  },
  {
    name: 'Project Two',
    description: 'A brief description of Project Two.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/yourusername/project-two',
    liveUrl: 'https://projecttwo.live',
  },
  // Add more projects as needed
];

export const skills = [
  { name: 'JavaScript', level: 'Advanced' },
  { name: 'React', level: 'Advanced' },
  { name: 'Node.js', level: 'Intermediate' },
  { name: 'HTML', level: 'Advanced' },
  { name: 'CSS', level: 'Advanced' },
  // Add more skills as needed
];
