import React from 'react';
import Image from 'react-bootstrap/Image';
import teamCartoon from '../assets/teamCartoon.png';

const About = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
    }}
  >
    <Image className="about" src={teamCartoon} fluid />;
  </div>
);
export default About;
