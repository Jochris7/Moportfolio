// src/components/CyberLinuxCV.jsx
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

// Keyframes for the blinking cursor effect in the terminal
const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

// Styles for the global Cyber/Linux CV container
const CyberLinuxCVContainer = styled(motion.div)`
  background-color: #0d0d0d; /* Very dark background for the terminal */
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
  padding: 30px;
  max-width: 850px;
  width: 100%;
  margin: 40px auto;
  overflow: hidden; /* Important pour gérer les débordements internes */
  text-align: left;
  font-family: 'Cascadia Code', 'Fira Code', 'Consolas', monospace; /* Terminal font */
  color: #eee; /* Default text color */
  font-size: 0.95em;
  line-height: 1.5;

  @media (max-width: 768px) {
    margin: 30px auto; /* Réduire la marge */
    padding: 25px; /* Réduire le padding */
    font-size: 0.9em; /* Légèrement plus petit pour tablettes */
  }

  @media (max-width: 480px) {
    margin: 20px auto; /* Encore plus petit pour mobiles */
    padding: 15px; /* Padding minimal */
    font-size: 0.8em; /* Taille de police adaptée aux petits écrans */
  }
`;

// CV Section Title
const CvSectionTitle = styled.h2`
  font-size: 2.2em;
  color: #00bf8f; /* Accent green for the title */
  margin-bottom: 30px;
  text-align: center;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1.8em; /* Plus petit sur tablettes */
    margin-bottom: 25px;
  }

  @media (max-width: 480px) {
    font-size: 1.5em; /* Encore plus petit sur mobiles */
    margin-bottom: 20px;
  }
`;

// Terminal command line
const TerminalPrompt = styled.div`
  display: flex;
  align-items: baseline;
  margin-bottom: 5px;
  flex-wrap: wrap; /* PERMET AU CONTENU DE PASSER À LA LIGNE */

  &::before {
    content: '┌──(johan@kali)-[~/portfolio]'; /* Base prompt */
    color: #00ff00; /* Green for user@machine */
    margin-right: 5px;
    white-space: nowrap; /* Empêche le prompt de se couper, il passera à la ligne entière si besoin */
  }
  &::after {
    content: '─$'; /* The final dollar sign */
    color: #eee;
    margin-left: 5px;
    white-space: nowrap; /* Empêche le '$' de se couper */
  }

  @media (max-width: 480px) {
    /* Raccourcir le prompt pour les très petits écrans si nécessaire */
    &::before {
        content: 'johan@kali:~/$'; /* Prompt plus court sur mobile */
        margin-right: 2px;
        font-size: 0.9em; /* Réduire la taille de la police du prompt */
    }
    &::after {
        content: ''; /* Supprimer le '─$' pour un prompt très court */
        margin-left: 0;
    }
  }
`;

// For the typed input (text following the prompt)
const TerminalInput = styled.span`
  color: #eee; /* Color of the typed text */
  white-space: pre-wrap; /* Maintient les sauts de ligne */
  word-break: break-word; /* Permet aux mots très longs de se casser */
  flex-grow: 1; /* Permet au texte de prendre l'espace restant dans le flex container */
`;

// For the blinking cursor indicator
const Cursor = styled.span`
  display: inline-block;
  width: 8px;
  height: 1em; /* Line height */
  background-color: #eee; /* Cursor color */
  animation: ${blink} 1s infinite step-end;
  vertical-align: middle; /* Align with text */

  @media (max-width: 480px) {
    width: 6px; /* Rendre le curseur plus petit */
  }
`;

// For terminal output text
const TerminalOutput = styled.div`
  color: #ccc; /* Output color */
  margin-left: 20px; /* Indentation for output */
  margin-bottom: 15px;
  white-space: pre-wrap; /* Maintient les sauts de ligne */
  word-break: break-word; /* Permet aux mots très longs de se casser */
  overflow-x: auto; /* AJOUT IMPORTANT : Permet le défilement horizontal si le texte est trop long */
  padding-bottom: 5px; /* Pour que le scrollbar ne cache pas le texte */

  @media (max-width: 480px) {
    margin-left: 10px; /* Réduire l'indentation */
    margin-bottom: 10px;
  }
`;

// Style for output lines with '> '
const OutputPrefix = styled.span`
  color: #ffcc00; /* Yellow/Orange for the output prefix */
  margin-right: 5px;

  @media (max-width: 480px) {
    margin-right: 2px;
  }
`;

// Specific styles for colors in Nmap output
const NmapPort = styled.span`
  color: #88c0d0; /* Light blue */
`;
const NmapState = styled.span`
  color: #00bf8f; /* Green */
`;
const NmapService = styled.span`
  color: #f0f0f0; /* White/Light gray */
`;
const NmapVersion = styled.span`
  color: #ff6666; /* Red */
`;

// New styles for ls -l output (symbolic links)
const LsPermissions = styled.span`
  color: #88c0d0; /* Light blue for permissions (e.g., lrwxrwxrwx) */
  margin-right: 5px;
`;

const LsLinkArrow = styled.span`
  color: #00bf8f; /* Green for the arrow */
  margin: 0 5px;
`;

const LsLinkTarget = styled.a`
  color: #88c0d0; /* Light blue for the link target */
  text-decoration: underline;
  cursor: pointer;
  &:hover {
    color: #4a90e2; /* Darker blue on hover */
  }

  @media (max-width: 480px) {
    word-break: break-all; /* Permet aux URLs très longues de se casser sur plusieurs lignes */
  }
`;

const LsFileName = styled.span`
  color: #f0f0f0; /* White for the file name (link name) */
`;

export default function CyberLinuxCV() {
  return (
    <CyberLinuxCVContainer translate="no">
      <CvSectionTitle>Mon CV version shell pour les amoureux de Cybersécurité & Administration Systèmes :</CvSectionTitle>
      
      {/* Commande 1: whoami */}
      <TerminalPrompt>
        <TerminalInput>whoami</TerminalInput><Cursor />
      </TerminalPrompt>
      <TerminalOutput>
        <OutputPrefix>&gt;</OutputPrefix> johan_ledjo
      </TerminalOutput>

      {/* Commande 2: nmap -sV skills.johan */}
      <TerminalPrompt>
        <TerminalInput>nmap -sV skills.johan</TerminalInput><Cursor />
      </TerminalPrompt>
      <TerminalOutput>
        <OutputPrefix>&gt;</OutputPrefix> <NmapPort>PORT</NmapPort>{" "}
        <NmapState>STATE</NmapState> <NmapService>SERVICE</NmapService>{" "}
        <NmapVersion>VERSION</NmapVersion>
        {"\n"}
        <OutputPrefix>&gt;</OutputPrefix> <NmapPort>22/tcp</NmapPort>{" "}
        <NmapState>open</NmapState> <NmapService>Sys-admin</NmapService>{" "}
        <NmapVersion>Linux, Bash, Cron, SSH</NmapVersion>
        {"\n"}
        <OutputPrefix>&gt;</OutputPrefix> <NmapPort>80/tcp</NmapPort>{" "}
        <NmapState>open</NmapState> <NmapService>WebDev</NmapService>{" "}
        <NmapVersion>HTML, CSS, JS, PHP, React Bootstrap ,Node.js, Express, MongoDB, MySQL, Django </NmapVersion>
        {"\n"}
        <OutputPrefix>&gt;</OutputPrefix> <NmapPort>80/tcp</NmapPort>{" "}
        <NmapState>open</NmapState> <NmapService>MobileDev</NmapService>{" "}
        <NmapVersion> React Native, Expo </NmapVersion>
        {"\n"}
        <OutputPrefix>&gt;</OutputPrefix> <NmapPort>443/tcp</NmapPort>{" "}
        <NmapState>open</NmapState> <NmapService>Pentest</NmapService>{" "}
        <NmapVersion>Nmap, Wireshark, Metasploit, BurpSuite</NmapVersion>
        {"\n"}
        <OutputPrefix>&gt;</OutputPrefix> <NmapPort>1337/tcp</NmapPort>{" "}
        <NmapState>open</NmapState>{" "}
        <NmapService>AI/MachineLearning</NmapService>{" "}
        <NmapVersion> Scikit-learn </NmapVersion>
      </TerminalOutput>

      {/* Commande 3: cat projects.txt */}
      <TerminalPrompt>
        <TerminalInput>cat projects.txt</TerminalInput><Cursor />
      </TerminalPrompt>
      <TerminalOutput>
        <OutputPrefix>&gt;</OutputPrefix> - Cartographie réseau locale (Scanne de toutes les machines de mon réseau local )
        {"\n"}
        <OutputPrefix>&gt;</OutputPrefix> - Audit de sécurité de Metasploitable ( Identification des failles d'une machine Metasploitable)
        {"\n"}
        <OutputPrefix>&gt;</OutputPrefix> - Analyse de trafic HTTP (Analyse de connexion entre navigateur et DVWA)
        {"\n"}
        <OutputPrefix>&gt;</OutputPrefix> - Analyse d'une attaque ( Observation du trafic lors d'une attaque par bruteforce )
        {"\n"}
        <OutputPrefix>&gt;</OutputPrefix> - Exploitation de faille avec Metasploit (Service vulnérable VSFTPD backdoor )
        {"\n"}
        <OutputPrefix>&gt;</OutputPrefix> - Interceptation et modification des requêtes DVWA (Modification d'une requête POST pour injecter des données)
        {"\n"}
        <OutputPrefix>&gt;</OutputPrefix> - Injection SQL avec Burp 
        {"\n"}
        <OutputPrefix>&gt;</OutputPrefix> - Script de surveillance d'un service (httpd)
      </TerminalOutput>

      {/* Nouvelle Commande: ls -l contact/ */}
      <TerminalPrompt>
        <TerminalInput>ls -l contact/</TerminalInput><Cursor />
      </TerminalPrompt>
      <TerminalOutput>
        <OutputPrefix>&gt;</OutputPrefix> <LsPermissions>lrwxrwxrwx</LsPermissions> 1 johan johan 12 Jun 18 10:00 <LsFileName>github</LsFileName> <LsLinkArrow>-&gt;</LsLinkArrow> <LsLinkTarget href="https://github.com/Jochris7?tab=repositories" target="_blank" rel="noopener noreferrer">https://github.com/Jochris7?tab=repositories</LsLinkTarget>
        {"\n"}
        <OutputPrefix>&gt;</OutputPrefix> <LsPermissions>lrwxrwxrwx</LsPermissions> 1 johan johan 10 Jun 18 10:01 <LsFileName>linkedin</LsFileName> <LsLinkArrow>-&gt;</LsLinkArrow> <LsLinkTarget href="https://www.linkedin.com/in/johan-ledjo-015805344?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">https://linkedin.com/johanledjo</LsLinkTarget>
        {"\n"}
        <OutputPrefix>&gt;</OutputPrefix> <LsPermissions>lrwxrwxrwx</LsPermissions> 1 johan johan 15 Jun 18 10:02 <LsFileName>email</LsFileName> <LsLinkArrow>-&gt;</LsLinkArrow> <LsLinkTarget href="mailto:chris.johan.225@gmail.com">chris.johan.225@gmail.com</LsLinkTarget>
      </TerminalOutput>

    </CyberLinuxCVContainer>
  );
}
