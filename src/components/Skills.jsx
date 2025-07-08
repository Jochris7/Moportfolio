import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Assurez-vous d'importer Link

import SkillsGallery from './SkillGallery';
import ServiceCarousel from './ServiceCarousel';
import SplitTextAnimation from './SplitTextAnimation';
import RecruiterCV from './RecruteCv';


// Optionnel: Réappliquez les styles pour le texte d'introduction
const SkillsSection = styled.section`
  padding: 100px 80px;
  background-color: #282c34;
  color: #abb2bf;
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap:80px; /* Espace entre les différentes sections */

  @media (max-width: 768px) {
    padding: 60px 20px;
    gap: 60px; /* Ajuster l'espacement pour les tablettes */
  }

  @media (max-width: 480px) {
    padding: 40px 15px;
    gap: 40px; /* Ajuster l'espacement pour les mobiles */
  }
`;

const ContentWrapper = styled(motion.div)`
  max-width: 800px;
  margin-bottom: 40px; /* Espace avant la galerie de compétences */
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    margin-bottom: 30px;
  }

  @media (max-width: 480px) {
    margin-bottom: 20px;
  }
`;

const IntroductionText = styled.p`
  font-size: 1.3em;
  line-height: 1.6;
  margin-bottom: 20px;
  color: #e0e0e0;

  @media (max-width: 768px) {
    font-size: 1.1em;
  }

  @media (max-width: 480px) {
    font-size: 1em;
    margin-bottom: 15px;
  }
`;

const CallToActionText = styled.span`
  font-size: 1.1em;
  font-weight: bold;
  color: #00bf8f;
  margin-top: 10px;

  @media (max-width: 768px) {
    font-size: 1em;
  }

  @media (max-width: 480px) {
    font-size: 0.9em;
  }
`;

// Bouton stylisé pour les projets, désormais un composant motion directement
const ProjectsButton = styled(motion(Link))` /* <-- C'est la correction clé ici */
  display: inline-block;
  background-color: #00bf8f;
  color: #ffffff;
  padding: 12px 25px;
  border-radius: 5px;
  text-decoration: none;
  font-size: 1.1em;
  font-weight: bold;
  margin-top: 50px; /* Augmenter le margin-top pour un bon espacement */
  transition: background-color 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: #00a37c;
  }

  @media (max-width: 768px) {
    font-size: 1em;
    padding: 10px 20px;
    margin-top: 40px; /* Ajustement sur tablette/mobile */
  }

  @media (max-width: 480px) {
    font-size: 0.9em;
    padding: 8px 18px;
    margin-top: 30px; /* Ajustement sur très petits mobiles */
    width: 100%; /* Le bouton peut prendre toute la largeur sur petit écran */
    text-align: center;
  }
`;

export default function Skills() {
  const introText = "Mon parcours est animé par une curiosité insatiable et une volonté constante de résoudre des problèmes complexes à travers des solutions efficaces et innovantes. J'ai une réelle passion pour la conception de systèmes robustes et l'exploration des frontières technologiques.";
  return (
    <SkillsSection>
      <ContentWrapper>
        {/* Le composant SplitTextAnimation prend le texte comme prop */}
        <SplitTextAnimation text={introText}/>
        <CallToActionText>
          Je suis ravi de vous présenter mes compétences clés dans les domaines suivants :
        </CallToActionText>
      </ContentWrapper>

      {/* Galerie de compétences */}
      <SkillsGallery/>

      {/* CV spécifique pour recruteurs */}
      <RecruiterCV/>

      {/* Carrousel de services */}
      <ServiceCarousel />

      {/* Bouton "Voir mes projets" avec animations Framer Motion */}
      <ProjectsButton
        to="/Projets" // Lien vers la page Projets
        initial="hidden"
        animate="visible"
        variants={{
            hidden: { opacity: 0, y: 40, rotate: 0 },
            visible: {
                opacity: 1,
                y: 0,
                rotate: 360, // Animation de rotation à l'apparition
                transition: {
                    type: "spring",
                    damping: 12,
                    stiffness: 150,
                    mass: 1,
                    duration: 0.6,
                    delay: 0.8 // Un délai pour apparaître après le texte
                },
            },
        }}
        whileHover={{
            scale: [null, 1.1, 1.2], // Animation de mise à l'échelle au survol
            transition: {
                duration: 0.5,
                times: [0, 0.6, 1],
                ease: ["easeInOut", "easeOut"],
            },
        }}
        transition={{
            duration: 0.3,
            ease: "easeOut",
        }}
      >
        Voir mes projets
      </ProjectsButton>
    </SkillsSection>
  );
}