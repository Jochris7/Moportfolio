// src/components/RecruiterCV.jsx
import React from 'react';
import styled from 'styled-components';
import DevMlCV from './DevMLcv'; // Importe le composant Jupyter
import CyberLinuxCV from './CyberLinuxCV';
import { motion } from 'framer-motion';

// Conteneur principal pour les deux sections du CV
const RecruiterCVSection = styled(motion.section)`
  padding: 80px 0; /* Padding vertical pour cette section */
  background-color: #20232a; /* Fond sombre pour la section globale CV */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

// Optionnel: Un titre global pour cette section si vous en voulez un
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
      <DevMlCV />
      <CyberLinuxCV />
    </RecruiterCVSection>
  );
}
