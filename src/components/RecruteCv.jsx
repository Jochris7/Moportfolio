// src/components/RecruiterCV.jsx
import React from 'react';
import styled from 'styled-components';
import DevMlCV from './DevMLCV'; // ✅ Nom du fichier exact
import CyberLinuxCV from './CyberLinuxCV';
import { motion } from 'framer-motion';

// Conteneur principal pour les deux sections du CV
const RecruiterCVSection = styled(motion.section)`
  padding: 80px 0;
  background-color: #20232a;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

// Titre de la section
const GlobalCvTitle = styled.h1`
  font-size: 3em;
  color: #eceff4;
  margin-bottom: 60px;
  text-align: center;
`;

export default function RecruiterCV() {
  return (
    <RecruiterCVSection>
      <GlobalCvTitle>Mon Curriculum Vitae Technique</GlobalCvTitle>
      <DevMlCV />        {/* ✅ Le composant exporté depuis DevMLCV.jsx */}
      <CyberLinuxCV />
    </RecruiterCVSection>
  );
}
