import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
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
  gap:80px;

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

const ContentWrapper = styled(motion.div)`
  max-width: 800px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IntroductionText = styled.p`
  font-size: 1.3em;
  line-height: 1.6;
  margin-bottom: 20px;
  color: #e0e0e0;
`;

const CallToActionText = styled.span`
  font-size: 1.1em;
  font-weight: bold;
  color: #00bf8f;
  margin-top: 10px;
`;


export default function Skills() {
  const introText = "Mon parcours est animé par une curiosité insatiable et une volonté constante de résoudre des problèmes complexes à travers des solutions efficaces et innovantes. J'ai une réelle passion pour la conception de systèmes robustes et l'exploration des frontières technologiques.";
  return (
    <SkillsSection>
      <ContentWrapper>
        <SplitTextAnimation text={introText}/>
        <CallToActionText>
          Je suis ravi de vous présenter mes compétences clés dans les domaines suivants :
        </CallToActionText>
      </ContentWrapper>
      <SkillsGallery/>
      <RecruiterCV/>
      <ServiceCarousel />
    </SkillsSection>
  );
}