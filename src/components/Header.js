import React from 'react';
import { headerLinks, socialLinks } from '../constants/data';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          {headerLinks.map(link => (
            <li key={link.name}><a href={link.path}>{link.name}</a></li>
          ))}
        </ul>
      </nav>
      <div>
        {socialLinks.map(social => (
          <a key={social.name} href={social.url}>
            {social.icon}
          </a>
        ))}
      </div>
    </header>
  );
};

export default Header;
