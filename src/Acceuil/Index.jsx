import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Presentation from '../components/Presentation';
import About from '../components/About';
import CustomCursor from '../components/CustomCursor';


export default function Acceuil() {
  const primaryNavLinks = [
    { name: 'Acceuil', path: '/' },
    { name: 'Competences', path: '/Competences' },
    { name: 'Projets', path: '/Projets' },
    { name: 'Contact', path: '/Contact' },
  ];

  const helloButtonLink = { name: 'Dites bonjour', path: '/Contact' };

  return (
    <div>
      <CustomCursor/>
      <Header navLinks={primaryNavLinks} sayHelloLink={helloButtonLink} />
      <Presentation/>
      <About/>
    </div>
  );
}