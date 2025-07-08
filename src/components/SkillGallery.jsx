import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";

// --- Données de vos compétences ---
const skillsData = [
  {
    id: 'dev-web',
    name: 'Développement Web',
    icon: '💻', 
    description: "Expertise en développement d'interface utilisateur front-end avec React .Gestion du back avec Node.js (Express), Python (Django). Bonne comprehension des bases de données SQL (PostgreSQL, MySQL) et NoSQL (MongoDB). Connaissance des API RESTful.",
  },
  {
    id: 'dev-mobile',
    name: 'Développement Mobile',
    icon: '📱',
    description: 'Création d\'applications mobiles hybrides avec React Native , optimisation des performances et expérience utilisateur sur mobile.',
  },
  {
    id: 'cybersecurite',
    name: 'Cybersécurité',
    icon: '🔒',
    description: 'Compétences en analyse de vulnérabilités, tests d\'intrusion (pentesting), sécurité des applications web et réseaux. Utilisation d\'outils comme Nmap, Wireshark, Metasploit, Burp Suite.',
  },
  {
    id: 'data-science',
    name: 'Science des Données',
    icon: '📊',
    description: 'Exploration et analyse de données avec Python (Pandas, NumPy), visualisation de données (Matplotlib, Seaborn). Modélisation prédictive, Machine Learning (Scikit-learn).',
  },
  // Ajoutez d'autres compétences ici
];

// --- Styled Components pour Gallery ---
const GalleryContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  padding: 30px; 
  max-width: 800px;
  margin: 50px auto;
  background-color: #333; // Couleur de fond pour la grille des compétences
  border-radius: 10px;
  list-style: none;
  margin-block-start: 0;
  margin-block-end: 0;
  /* Remove or comment out the line below */
  /* padding-inline-start: 0; */ 

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); // 2 colonnes sur mobile
  }
`;

const MotionGalleryItem = styled(motion.li)`
  width: 100%;
  padding-bottom: 60%; /* Pour créer des carrés */
  position: relative;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: #444; // Couleur de fond par défaut pour les items
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  font-weight: bold;
  font-size: 1.2em;

  .icon {
    font-size: 3em; // Taille de l'icône
    margin-bottom: 10px;
  }
`;

// Adapte le composant Gallery pour utiliser les données de compétences
function Gallery({ items, setIndex }) {
  return (
    <GalleryContainer>
      {items.map((item, i) => ( // 'item' est maintenant un objet de compétence
        <MotionGalleryItem
          key={item.id} // Utilisez l'ID comme clé
          onClick={() => {
            console.log("Clique sur la compétence:", item.name);
            setIndex(i); // L'index pour retrouver la compétence dans le tableau
          }}
          layout
          layoutId={item.id} // Utilisez l'ID pour layoutId
        >
          <span className="icon">{item.icon}</span>
          {item.name}
        </MotionGalleryItem>
      ))}
    </GalleryContainer>
  );
}

// --- Styled Components pour SkillDetail (anciennement SingleImage) ---
const SkillDetailContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const MotionSkillDetailContent = styled(motion.div)`
  background-color: #2e3440; // Couleur de fond pour le détail
  color: #eceff4; // Couleur de texte
  width: 90%; // Plus large pour le texte
  max-width: 800px;
  max-height: 90%; // Permet un peu de marge en haut/bas
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  padding: 40px; // Espace intérieur
  display: flex;
  flex-direction: column;
  overflow-y: auto; // Permet le défilement si le contenu est trop long

  h2 {
    font-size: 2.5em;
    color: #88c0d0; // Couleur pour le titre de la compétence
    margin-bottom: 20px;
  }

  p {
    font-size: 1.1em;
    line-height: 1.6;
    margin-bottom: 10px;
  }

  /* Pour les images d'icônes si vous les utilisez à l'intérieur */
  img {
    max-width: 100px;
    max-height: 100px;
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    padding: 20px;
    h2 {
      font-size: 2em;
    }
    p {
      font-size: 1em;
    }
  }
`;

// Adapte le composant SingleImage pour afficher les détails d'une compétence
function SkillDetail({ skill, onClick }) { // 'skill' est maintenant l'objet compétence
  if (!skill) return null; // Sécurité si skill est undefined

  return (
    <SkillDetailContainer onClick={onClick}>
      <MotionSkillDetailContent
        layout
        layoutId={skill.id} // Utilisez l'ID pour layoutId
      >
        <h2>{skill.name}</h2>
        {/* Si vous utilisez une image pour l'icône ici aussi */}
        {typeof skill.icon === 'string' && skill.icon.startsWith('http') ? (
            <img src={skill.icon} alt={skill.name} />
        ) : (
            <span className="icon-large">{skill.icon}</span>
        )}
        <p>{skill.description}</p>
      </MotionSkillDetailContent>
    </SkillDetailContainer>
  );
}

// --- Styled Component pour Overlay --- (inchangé)
const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7); // Rendre un peu plus opaque pour mieux voir
  z-index: 999;
  cursor: pointer;
`;

// Le composant principal qui gère la logique de la galerie de compétences
export default function SkillsGallery() { // Renommé pour plus de clarté
  const [selectedIndex, setSelectedIndex] = useState(false); // false si aucune compétence sélectionnée

  // Fonction pour obtenir la compétence sélectionnée
  const selectedSkill = selectedIndex !== false ? skillsData[selectedIndex] : null;

  React.useEffect(() => {
    console.log("Index de compétence sélectionné :", selectedIndex);
  }, [selectedIndex]);

  return (
    <>
      <Gallery items={skillsData} setIndex={setSelectedIndex} /> 
      <AnimatePresence>
        {/* Overlay */}
        {selectedIndex !== false && (
          <Overlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }} // Animation vers 1 pour plus de visibilité
            exit={{ opacity: 0 }}
            key="overlay"
            onClick={() => {
              console.log("Clique sur l'overlay. Fermeture des détails.");
              setSelectedIndex(false);
            }}
          />
        )}

        {/* Détail de la compétence agrandie */}
        {selectedIndex !== false && (
          <SkillDetail
            key="skill-detail"
            skill={selectedSkill} // Passez l'objet compétence entier
            onClick={() => {
              console.log("Clique sur le détail de la compétence. Fermeture.");
              setSelectedIndex(false);
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
}