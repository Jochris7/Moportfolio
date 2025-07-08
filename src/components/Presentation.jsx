import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { motion } from 'motion/react'; // Importation de Framer Motion
import WavyText from './WavyText';
import ScatterText from './IntroTextAnimation';


const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`;

const PresentationSection = styled.section`
  padding: 100px 80px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  position: relative;
  background-color: #282c34; /* Fond correspondant à l'image */
  color: #abb2bf; /* Couleur de texte par défaut */
`;

const Content = styled.div`
  max-width: 800px;
  margin-bottom: 80px;
`;

// Appliquer motion à tes éléments styled-components
const Name = styled(motion.h1)`
  font-size: 3.5em;
  color: #e0e0e0;
  margin-bottom: 10px;
`;

const Title = styled(motion.h2)`
  font-size: 2.5em;
  color: #00bf8f; /* Vert pour "Software Developer" */
  margin-bottom: 20px;
`;

const Description = styled(motion.p)`
  font-size: 1.3em;
  color: #abb2bf;
  margin-bottom: 40px;
`;

const ProjectsButton = styled(motion(Link))` // Utilisation de motion avec Link
  display: inline-block;
  background-color: #00bf8f; /* Bouton vert */
  color: #ffffff;
  padding: 15px 30px;
  border-radius: 5px;
  text-decoration: none;
  font-size: 1.2em;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #00a37c;
  }
`;

const MoreAboutMe = styled.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #abb2bf;
  font-size: 1em;
`;

const ArrowDown = styled.span`
  font-size: 2em;
  margin-top: 5px;
  animation: ${bounce} 1.5s infinite;
`;


export default function Presentation() {
  return (
    <PresentationSection>
      <Content>
        {/* Animations pour le nom, le titre, la description et le bouton */}
        <Name
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <WavyText text=" Johan Ledjo" />
        </Name>

        <Title
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Informatics Engineer
        </Title>

        <Description
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <ScatterText/>
        </Description>

        <ProjectsButton
          as={motion.a}
          href="/Projets"
          // Animation d'apparition avec rotation
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 40, rotate: 0 },
            visible: {
              opacity: 1,
              y: 0,
              rotate: 360,
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
          // Animation de survol avec mise à l'échelle
          whileHover={{
            scale: [null, 1.1, 1.6],
            transition: {
              duration: 0.5,
              times: [0, 0.6, 1],
              ease: ["easeInOut", "easeOut"],
            },
          }}
          // Transition de retour (quand la souris quitte le bouton)
          transition={{
            duration: 0.3,
            ease: "easeOut",
          }}
        >
          Voir mes projets
        </ProjectsButton>
      </Content>
      <MoreAboutMe>
        <p> Plus à propos de moi </p>
        {/* La flèche reste inchangée, elle utilise toujours l'animation 'bounce' de styled-components */}
        <ArrowDown>&#x2193;</ArrowDown>
      </MoreAboutMe>
    </PresentationSection>
  );
}