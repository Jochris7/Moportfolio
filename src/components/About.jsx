import React from 'react';
import styled from 'styled-components';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import profilImage from '../assets/image1devantmiroir.jpg';
import secondimage from '../assets/image_focus_dessin_animé.jpg';

const AboutSection = styled(motion.section)`
  padding: 80px 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #2d323c;
  border-radius: 8px;
  margin: 40px 80px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  @media (min-width: 992px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }

  @media (max-width: 768px) {
    padding: 60px 20px;
    margin: 30px 20px;
  }
`;

const TextContentWrapper = styled.div`
  flex: 2;
  max-width: 900px;
  margin-bottom: 40px;

  @media (min-width: 992px) {
    margin-right: 60px;
    margin-bottom: 0;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.2em;
  color: #e0e0e0;
  margin-bottom: 30px;
  text-align: left;
  width: 100%;
`;

const ContentParagraph = styled(motion.p)`
  font-size: 1.1em;
  line-height: 1.8;
  color: #abb2bf;
  margin-bottom: 1.2em;
  text-align: justify;

  span.highlight {
    color: #61dafb;
    font-weight: bold;
  }

  span.accent {
    font-style: normal;
    color: #00bf8f;
  }

  span[role="img"], span[aria-label] {
    display: inline-block;
    margin-right: 5px;
  }

  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

const SkillsButton = styled(Link)`
  display: inline-block;
  background-color: #00bf8f;
  color: #ffffff;
  padding: 12px 25px;
  border-radius: 5px;
  text-decoration: none;
  font-size: 1.1em;
  font-weight: bold;
  margin-top: 30px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #00a37c;
  }
`;

const ImagesContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 100px;
  align-items: center;
  padding-top: 40px;

  @media (min-width: 992px) {
    margin-left: 40px;
  }

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const ImageWrapper = styled(motion.div)`
  width: 100%;
  max-width: 350px;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const containerVariants = {
  hidden: { opacity: 0, y: 70 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 8,
      stiffness: 120,
      mass: 0.8,
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 }, // Pas de rotation ici pour que le texte ne tourne pas
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 150,
      mass: 1,
      duration: 0.6,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8, x: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 100,
      delay: 0.3,
    },
  },
};

const secondImageVariants = {
  hidden: { opacity: 0, scale: 0.8, x: -50 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 100,
      delay: 0.5,
    },
  },
};

export default function About() {
  return (
    <AboutSection
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      <TextContentWrapper>
        <SectionTitle as={motion.h2} variants={itemVariants}>
          À propos de moi
        </SectionTitle>

        <ContentParagraph variants={itemVariants}>
          👋 Salut ! Moi c’est <span className="highlight">Kpoulede Ledjo Johan Chris Junior</span>, étudiant en <span className="highlight">2e année d’ingénierie informatique</span> à l’ENSIT, en Côte d’Ivoire.
        </ContentParagraph>
        <ContentParagraph variants={itemVariants}>
          Avant ça, j’ai fait <span className="highlight">deux années de classes prépa intégrées</span> après l'obtention d'un Bac D, avec pas mal de maths, d’électronique, d’informatique et de sciences de l’ingénieur… Un bon socle pour comprendre le “pourquoi” derrière les technologies, pas juste le “comment”.
        </ContentParagraph>
        <ContentParagraph variants={itemVariants}>
          J’ai commencé la programmation avec le <span className="accent">langage C</span>, puis j’ai vite élargi mes horizons avec <span className="accent">Python, HTML/CSS, JavaScript, PHP/MySQL, jQuery, et plus tard React.js, Node.js, Express, MongoDB, React Native, Django, Figma</span>… et un peu de <span className="accent">cybersécurité</span> aussi.
        </ContentParagraph>
        <ContentParagraph variants={itemVariants}>
          J’ai eu l’occasion de m’initier à des outils comme <span className="accent">Nmap, Wireshark, Metasploit, Burp Suite, sur Kali Linux</span>, en touchant à des notions de scan réseau, analyse de paquets, tests de vulnérabilités, etc.
        </ContentParagraph>
        <ContentParagraph variants={itemVariants}>
          🧑‍💻 En parallèle, je me suis aussi construit de solides bases en <span className="highlight">Linux</span>, un environnement que j’apprécie particulièrement — pour son contrôle total, sa puissance, et tout ce qu’il permet de comprendre sous le capot.
        </ContentParagraph>
        <ContentParagraph variants={itemVariants}>
          💻 Je suis le genre à vouloir comprendre les rouages, à démonter pour mieux reconstruire. J’aime coder, mais encore plus comprendre la logique derrière : <span className="accent">algorithmes, structures de données, IA, backend, sécurité</span>… Si ça fait cogiter, ça m’attire.
        </ContentParagraph>
        <ContentParagraph variants={itemVariants}>
          En dehors du clavier, je suis aussi passionné de musique, de basket, de lecture, et de tous les petits défis techniques qui stimulent l’esprit. J’avance à mon rythme, mais toujours avec l’envie d’apprendre et de progresser.
        </ContentParagraph>
        <ContentParagraph variants={itemVariants}>
          🎯 Mon objectif ? Devenir un <span className="highlight">Machine Learning Engineer</span> solide, capable de résoudre des problèmes concrets, que ce soit côté frontend, backend ou sécurité.
        </ContentParagraph>
        <ContentParagraph variants={itemVariants}>
          Et un jour, marquer ma trace dans des projets tech qui a du sens ici, en <span className="highlight">Afrique</span>, ou ailleurs.
        </ContentParagraph>
        <SkillsButton
          as={motion.a}
          href="/Competences"
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
          Voir mes compétences
        </SkillsButton>
      </TextContentWrapper>

      <ImagesContainer>
        <ImageWrapper
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <StyledImage src={profilImage} alt="Kpoulede Ledjo Johan Chris Junior - Développeur" />
        </ImageWrapper>

        <ImageWrapper
          variants={secondImageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <StyledImage src={secondimage} alt="Deuxième image de présentation" />
        </ImageWrapper>
      </ImagesContainer>
    </AboutSection>
  );
}