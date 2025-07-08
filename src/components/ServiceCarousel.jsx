import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion, useScroll, useMotionValue, useMotionValueEvent, animate } from 'framer-motion';

// --- Données de vos services ---
const servicesData = [
  { id: 'web-design', name: 'Web Design UI/UX', description: 'Conception d\'interfaces utilisateur intuitives et esthétiques, et d\'expériences utilisateur fluides pour les sites web.' },
  { id: 'dev-web-fullstack', name: 'Développement Web Fullstack', description: 'Création complète de sites et applications web, du front-end au back-end, avec les dernières technologies.' },
  { id: 'mobile-app-dev', name: 'Développement Applications Mobiles', description: 'Développement d\'applications natives ou hybrides pour iOS et Android, adaptées à vos besoins spécifiques.' },
  { id: 'cybersecurity-consulting', name: 'Conseil en Cybersécurité', description: 'Audit de sécurité, identification des vulnérabilités et mise en place de stratégies de protection pour vos systèmes.' },
  { id: 'data-analytics', name: 'Analyse & Visualisation de Données', description: 'Transformation de données brutes en insights exploitables et création de dashboards interactifs.' },
  { id: 'api-development', name: 'Développement d\'API', description: 'Conception et implémentation d\'APIs robustes et sécurisées pour la communication entre vos applications.' },
  // Ajoutez d'autres services ici
];

// --- Constantes pour le masque de défilement ---
const left = `0%`;
const right = `100%`;
const leftInset = `20%`;
const rightInset = `80%`;
const transparent = `rgba(0,0,0,0)`; // RGBA pour la transparence
const opaque = `rgba(0,0,0,1)`;    // RGBA pour l'opacité (noir)

// Hook personnalisé pour le masque de défilement
function useScrollOverflowMask(scrollXProgress) {
  const maskImage = useMotionValue(
    `linear-gradient(90deg, ${opaque}, ${opaque} ${left}, ${opaque} ${rightInset}, ${transparent})`
  );

  useMotionValueEvent(scrollXProgress, "change", (value) => {
    if (value === 0) {
      animate(
        maskImage,
        `linear-gradient(90deg, ${opaque}, ${opaque} ${left}, ${opaque} ${rightInset}, ${transparent})`
      );
    } else if (value === 1) {
      animate(
        maskImage,
        `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${right}, ${opaque})`
      );
    } else if (
      scrollXProgress.getPrevious() === 0 || // Fix: use .getPrevious() if available, otherwise track manually
      scrollXProgress.getPrevious() === 1
    ) {
      animate(
        maskImage,
        `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${rightInset}, ${transparent})`
      );
    }
  });

  return maskImage;
}

// --- Styled Components ---

const CarouselSection = styled.section`
  padding: 80px 0; // Padding vertical, pas de padding horizontal pour que le carrousel puisse aller jusqu'aux bords
  background-color: #20232a; // Fond légèrement différent pour cette section
  color: #e0e0e0;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden; // Cache le débordement horizontal du conteneur principal

  @media (max-width: 768px) {
    padding: 60px 0; // Réduire le padding vertical sur les tablettes
  }

  @media (max-width: 480px) {
    padding: 40px 0; // Réduire encore plus sur les petits mobiles
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5em;
  color: #00bf8f;
  margin-bottom: 50px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2em; // Plus petit sur les tablettes
    margin-bottom: 40px;
    padding: 0 20px; /* Ajouter un peu de padding horizontal pour ne pas coller les bords */
  }

  @media (max-width: 480px) {
    font-size: 1.6em; // Encore plus petit sur les mobiles
    margin-bottom: 30px;
    padding: 0 15px; /* Ajuster padding */
  }
`;

const CarouselContainer = styled.div`
  width: 100vw; // Prend toute la largeur de la vue
  max-width: 1200px; // Limite la largeur sur les très grands écrans
  position: relative;
  display: flex;
  justify-content: center; // Centre le contenu à l'intérieur
`;

const ProgressSVG = styled.svg`
  position: absolute;
  top: -65px; // Ajustez la position de l'indicateur
  left: -15px; // Ajustez la position de l'indicateur
  transform: rotate(-90deg);
  // Centrage de l'indicateur par rapport au carrousel, ou positionnement fixe si nécessaire
  // Pour cet exemple, je le place en absolu dans le CarouselContainer

  @media (max-width: 768px) {
    display: none; /* Cache le SVG de progression sur les petits écrans s'il n'est pas pertinent */
  }
`;

const ProgressCircleBg = styled.circle`
  stroke: #0b1011;
  stroke-width: 10%;
  fill: none;
`;

const ProgressCircleIndicator = styled(motion.circle)`
  stroke: #00bf8f; // Couleur de l'accentuation
  stroke-dashoffset: 0;
  stroke-width: 10%;
  fill: none;
`;

const ServiceList = styled(motion.ul)`
  display: flex;
  list-style: none;
  height: 250px; // Hauteur des éléments du carrousel
  overflow-x: scroll; // Rend le carrousel défilable horizontalement
  padding: 20px; // Padding interne pour les items
  margin: 0; // Supprime les marges par défaut
  gap: 30px; // Espace entre les services
  width: 100%; // Pour que le overflow scroll fonctionne bien
  box-sizing: border-box; // Pour inclure le padding dans la largeur
  scroll-snap-type: x mandatory; /* Ajouté pour un défilement par "carte" */
  -webkit-overflow-scrolling: touch; /* Améliore le défilement sur iOS */

  /* Styles pour la scrollbar (Webkit) */
  &::-webkit-scrollbar {
    height: 8px;
    width: 8px;
    background: #444;
    border-radius: 1ex;
  }

  &::-webkit-scrollbar-thumb {
    background: #00bf8f; // Couleur de l'accentuation pour la barre de défilement
    border-radius: 1ex;
  }

  &::-webkit-scrollbar-corner {
    background: #444;
  }

  @media (max-width: 768px) {
    height: 220px; /* Légèrement plus petit sur tablette */
    padding: 15px 10px; /* Réduire le padding horizontal pour les items */
    gap: 20px; /* Réduire l'espace entre les services */
  }

  @media (max-width: 480px) {
    height: 200px; /* Plus petit sur mobile */
    padding: 10px 5px; /* Padding minimal */
    gap: 15px; /* Espace minimal */
    /* Cache la scrollbar sur les petits écrans car le snap-scrolling est suffisant */
    &::-webkit-scrollbar {
      display: none;
    }
    /* Pour Firefox */
    scrollbar-width: none;
  }
`;

const ServiceItem = styled.li`
  flex: 0 0 280px; // Taille fixe pour chaque élément de service
  background: #333; // Couleur de fond de chaque carte de service
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  text-align: center;
  transition: transform 0.2s ease-in-out;
  cursor: grab; // Indique que l'élément est "attrapable"
  scroll-snap-align: start; /* Ajouté pour que le défilement s'arrête sur chaque carte */

  &:active {
    cursor: grabbing;
  }

  h3 {
    font-size: 1.6em;
    color: #88c0d0; // Couleur pour le titre du service
    margin-bottom: 10px;
  }

  p {
    font-size: 0.95em;
    color: #abb2bf;
    line-height: 1.5;
  }

  @media (max-width: 768px) {
    flex: 0 0 240px; /* Réduire la taille de chaque élément de service */
    padding: 18px;

    h3 {
      font-size: 1.4em;
    }

    p {
      font-size: 0.9em;
    }
  }

  @media (max-width: 480px) {
    flex: 0 0 200px; /* Réduire encore plus la taille de chaque élément pour les petits mobiles */
    padding: 15px;

    h3 {
      font-size: 1.2em;
    }

    p {
      font-size: 0.8em;
    }
  }

  @media (max-width: 320px) { /* Pour les écrans très petits */
    flex: 0 0 90%; /* Occupe une grande partie de la largeur de l'écran */
  }
`;

export default function ServiceCarousel() {
  const containerRef = useRef(null); // useRef pour référencer l'élément DOM défilable
  const { scrollXProgress } = useScroll({ container: containerRef }); // Obtenez la progression du défilement horizontal

  // Appliquez le masque de défilement
  const maskImage = useScrollOverflowMask(scrollXProgress);

  return (
    <CarouselSection>
      <SectionTitle>Mes Services</SectionTitle>
      <CarouselContainer>
        {/* L'indicateur de progression SVG. Positionné de manière absolue. */}
        {/* Vous devrez peut-être ajuster son placement CSS en fonction de votre mise en page globale */}
        {/* <ProgressSVG width="80" height="80" viewBox="0 0 100 100" style={{ position: 'absolute', top: '10px', left: '10px', transform: 'rotate(-90deg)' }}>
          <ProgressCircleBg cx="50" cy="50" r="30" pathLength="1" />
          <ProgressCircleIndicator cx="50" cy="50" r="30" pathLength={scrollXProgress} />
        </ProgressSVG> */}
        {/* J'ai commenté le SVG pour l'instant car son positionnement absolu nécessite un parent positionné.
            Pour un carrousel simple, il est souvent préférable de le placer ailleurs ou d'utiliser un indicateur de défilement plus simple.
            Si vous voulez le maintenir, nous devrons ajuster le parent.
        */}

        <ServiceList
          ref={containerRef}
          style={{ maskImage }} // Applique le masque ici
        >
          {servicesData.map(service => (
            <ServiceItem key={service.id}>
              <h3>{service.name}</h3>
              <p>{service.description}</p>
            </ServiceItem>
          ))}
        </ServiceList>
      </CarouselContainer>
    </CarouselSection>
  );
}

