import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header';
import CustomCursor from '../components/CustomCursor';
import Skills from '../components/Skills';


export default function Competences() {

     const primaryNavLinks = [
    { name: 'Acceuil', path: '/' },
    { name: 'Competences', path: '/Competences' },
    { name: 'Projets', path: '/Projets' },
    { name: 'Contact', path: '/Contact' },
  ];

    const helloButtonLink = { name: 'Dire bonjour', path: '/Contact' };

  return (
    <div>
        <CustomCursor/>
        <Header navLinks={primaryNavLinks} sayHelloLink={helloButtonLink} />
        <Skills/>
        
    </div>
  )
}
