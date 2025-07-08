import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Assure-toi que Link est bien utilisé si tu en as besoin ailleurs
import Header from '../components/Header';
import { motion, AnimatePresence } from 'framer-motion';
import styled , { keyframes }from 'styled-components';
import CustomCursor from '../components/CustomCursor';

// Importations des vidéos et images
import videoBaccalaureat from '../assets/Projets/baccalaureat.mkv';
import videoCrudBibliotheque from '../assets/Projets/crud-bibliotheque.mkv';
import videoDashboard from '../assets/Projets/dashboard.mkv';
import videoJeuDame from '../assets/Projets/jeu-dame.mkv';
import videoPrediction from '../assets/Projets/predictionBenefices.mkv';
import videoTodoList from '../assets/Projets/todolist.mkv';

import imageBaccalaureat from '../assets/Projets/bacalaureatImage.png'
import imageBiblio from '../assets/Projets/imageBibliotheque.png'
import imageDashboard from '../assets/Projets/dashboardImage.png'
import imageJeuDame from '../assets/Projets/imageJeuDame.png'
import imageTodo from '../assets/Projets/todolistAPPImage.png'

import figmaAppFood from '../assets/Projets/figma-appfood.png';
import appFood2 from '../assets/Projets/appFood2.png'
import uiApp from '../assets/Projets/UIapp.png';
import Uiapp2 from '../assets/Projets/UIapp2.png'

const projectsData = [
    {
        id: 'baccalaureat-project',
        title: 'Jeu Baccalauréat',
        description: 'Le projet "Jeu de Baccalauréat" est une application web interactive développée avec PHP, MySQL et du DOM JavaScript. Ce jeu propose aux utilisateurs de remplir plusieurs catégories, telles que nom, pays, animal, etc., en fonction d\'une lettre aléatoire générée par le système. Lorsque le joueur lance le compteur, une lettre est choisie au hasard.',
        thumbnail: imageBaccalaureat,
        videoUrl: videoBaccalaureat,
        images: [imageBaccalaureat,'https://www.babelio.com/users/QUIZ_Baccalaureat-Europe-villes-en-B_1592.jpeg'],
        githubLink: 'https://github.com/Jochris7/jeu-baccalaur-at',
        liveLink: '',
        technologies: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    },
    {
        id: 'crud-bibliotheque',
        title: 'Bibliothèque Numérique (MERN Stack)',
        description: 'Le projet "Bibliothèque Numérique" est une application web développée en utilisant la stack MERN (MongoDB, Express.js, React.js, Node.js) qui permet aux utilisateurs de gérer une bibliothèque de livres de manière intuitive et efficace. L\'application offre des fonctionnalités CRUD (Créer, Lire, Mettre à jour, Supprimer) pour les livres, permettant une gestion complète.',
        thumbnail: imageBiblio,
        videoUrl: videoCrudBibliotheque,
        images: [imageBiblio,'https://img-4.linternaute.com/_IWgIvvw01a-mw6X6ZH0b9eYrks=/1500x/smart/e34866dc2a6146ef9cd760813d44b81f/ccmcms-linternaute/28155586.jpg'],
        githubLink: 'https://github.com/Jochris7/CRUD-bibliotheque',
        liveLink: '',
        technologies: ['Node.js', 'Express', 'MongoDB', 'React.js'],
    },
    {
        id: 'dashboard-project',
        title: 'Dashboard Statique Interactif',
        description: 'Le projet "Dashboard Statique" est une application web développée avec React qui présente des données de manière visuelle et interactive. Utilisant Chart.js pour les graphiques, l\'application affiche des statistiques clés sous forme de graphiques à barres, de lignes et de secteurs, permettant une compréhension rapide des données et une exploration aisée.',
        thumbnail: imageDashboard,
        videoUrl: videoDashboard,
        images: [imageDashboard,'https://images.klipfolio.com/website/public/bf9c6fbb-06bf-4f1d-88a7-d02b70902bd1/data-dashboard.png'],
        githubLink: 'https://github.com/Jochris7/dashborad-1-static-',
        liveLink: '',
        technologies: ['React', 'Chart.js', 'Styled Components'],
    },
    {
        id: 'jeu-de-dames',
        title: 'Jeu de Dames Interactif',
        description: 'Le projet "Jeu de Dames" est une application web interactive développée avec React.js. Ce jeu classique permet à deux joueurs de s\'affronter sur un plateau de dames. Les utilisateurs peuvent déplacer leurs pions, capturer ceux de l\'adversaire et promouvoir leurs pions en dames lorsqu\'ils atteignent l\'autre côté du plateau.',
        thumbnail: imageJeuDame,
        videoUrl: videoJeuDame,
        images: [imageJeuDame,'https://www.couleursbois.com/media/k2/items/cache/8f096abef1c84b031550e510893c2d4d_XL.jpg'],
        githubLink: 'https://github.com/Jochris7/jeu-dame',
        liveLink: '',
        technologies: ['React.js'],
    },
    {
        id: 'prediction-benefices',
        title: 'Modèle de Prédiction de Bénéfices (ML)',
        description: 'Ce projet implémente une régression linéaire simple pour prédire les bénéfices d\'un Food Truck en fonction de la population d\'une ville. Il s\'agit d\'un exercice de machine learning de base avec Python et matplotlib, utilisant les données de différentes villes pour guider l\'ouverture de nouveaux points de vente.',
        thumbnail: 'https://www.jeveuxetredatascientist.fr/wp-content/uploads/2025/07/1-regression-lineaire-analyse-donnees.jpg',
        videoUrl: videoPrediction,
        images: ['https://www.jeveuxetredatascientist.fr/wp-content/uploads/2025/07/1-regression-lineaire-analyse-donnees.jpg','https://www.privateteacher.ch/sites/default/files/2021-07/Thumbnail-Module-Regression-Lineaire-Squared.png'],
        githubLink: 'https://github.com/Jochris7/ML-foodtruck',
        liveLink: '',
        technologies: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib', 'Jupyter Notebook'],
    },
    {
        id: 'todolist-app',
        title: 'Application To-Do List (En Développement)',
        description: 'J\'ai voulu créer une todolist avec authentification. Le projet n\'est pas encore terminé, il y a juste la todolist pour le moment, mais ne vous inquiétez pas, il sera mis à jour d\'ici peu ! 😊🙏🏾',
        thumbnail: imageTodo,
        videoUrl: videoTodoList,
        images: [imageTodo,'https://opengraph.githubassets.com/e80ddcb969a3f0e679423c3b2146e91bb0a9c042eec85f8049823ffe8230d8b9/globalworming/todo-list-fullstack'],
        githubLink: 'https://github.com/Jochris7/todolist',
        liveLink: '',
        technologies: ['React', 'CSS Modules', 'Express.js', 'MongoDB'],
    },
    {
        id: 'figma-appfood',
        title: 'Design UI/UX Application Food',
        description: 'Conception complète de l\'interface utilisateur et de l\'expérience utilisateur pour une application de commande de nourriture, intégralement réalisée sur Figma. Ce projet met en valeur les étapes clés du design, de la wireframe au prototype interactif, en se concentrant sur une navigation fluide et une esthétique engageante.',
        thumbnail: figmaAppFood,
        videoUrl: '',
        images: [
            figmaAppFood,
            appFood2,
        ],
        githubLink: '',
        liveLink: '',
        technologies: ['Figma', 'UI/UX Design', 'Prototyping'],
    },
    {
        id: 'ui-app-design',
        title: 'Design d\'Interface Utilisateur',
        description: 'Projet de design UI/UX axé sur la création d\'une interface utilisateur épurée et efficace pour une application de gestion de projets. Réalisé sur Figma, ce travail souligne l\'importance de la simplicité et de l\'intuitivité pour optimiser l\'expérience utilisateur et faciliter la collaboration.',
        thumbnail: uiApp,
        videoUrl: '',
        images: [
            uiApp,
            Uiapp2,
        ],
        githubLink: '',
        liveLink: '',
        technologies: ['Figma', 'UI Design', 'Wireframing'],
    },
];

// --- Styles de la section Projets ---
const ProjetsSection = styled.section`
    padding: 80px 20px;
    background-color: #2d323c;
    text-align: center;
    min-height: 100vh;
    @media (max-width: 768px) {
        padding: 50px 15px; /* Réduire le padding sur mobile */
    }
`;

const SectionTitle = styled.h2`
    font-size: 2.8em;
    color: #e0e0e0;
    margin-bottom: 60px;
    font-weight: 700;

    @media (max-width: 768px) {
        font-size: 2em; /* Taille plus petite sur mobile */
        margin-bottom: 40px;
    }
    @media (max-width: 480px) {
        font-size: 1.8em;
    }
`;

const ProjectsGrid = styled(motion.div)`
    display: grid;
    /* Permet 1 colonne sur les très petits écrans, puis s'adapte */
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 40px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px; /* Ajout d'un padding pour éviter que la grille ne colle aux bords sur desktop/tablet */

    @media (max-width: 1200px) and (min-width: 992px) {
        grid-template-columns: repeat(3, 1fr); /* 3 colonnes pour les grands écrans (laptop) */
    }
    @media (min-width: 769px) and (max-width: 991px) {
        grid-template-columns: repeat(2, 1fr); /* 2 colonnes pour les tablettes en mode paysage */
    }
    @media (max-width: 768px) {
        grid-template-columns: 1fr; /* Une seule colonne sur mobile et petites tablettes */
        gap: 30px;
        padding: 0 15px; /* Padding ajusté pour mobile */
    }
`;

const ProjectCard = styled(motion.div)`
    background-color: #3d424b;
    border-radius: 12px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    overflow: hidden;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    position: relative;
    transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;

    &:hover {
        transform: translateY(-8px);
        box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
    }

    @media (max-width: 768px) {
        /* Pas de hover effect sur mobile pour une meilleure expérience tactile */
        &:hover {
            transform: none;
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }
    }
`;

const ProjectThumbnail = styled(motion.img)`
    width: 100%;
    height: 220px;
    object-fit: cover; /* Assure que l'image couvre toute la zone */
    display: block;
`;

const VideoThumbnailText = styled(motion.div)`
    width: 100%;
    height: 220px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #3d424b;
    color: #e0e0e0;
    font-size: 1.2em;
    font-weight: 600;
    text-align: center;
    padding: 20px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);

    @media (max-width: 768px) {
        font-size: 1em; /* Réduire la taille du texte sur mobile */
        padding: 15px;
    }
`;

const ProjectInfo = styled.div`
    padding: 25px;
    text-align: left;
    flex-grow: 1;

    @media (max-width: 768px) {
        padding: 20px;
    }
`;

const ProjectTitle = styled.h3`
    font-size: 1.8em;
    color: #e0e0e0;
    margin-bottom: 8px;
    font-weight: 600;

    @media (max-width: 768px) {
        font-size: 1.5em; /* Ajuster la taille du titre */
    }
    @media (max-width: 480px) {
        font-size: 1.3em;
    }
`;

const ProjectDescription = styled.p`
    font-size: 1em;
    color: #abb2bf;
    line-height: 1.6;
    margin-bottom: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3; /* Limite à 3 lignes */
    -webkit-box-orient: vertical;

    @media (max-width: 768px) {
        font-size: 0.9em; /* Texte plus petit sur mobile */
        -webkit-line-clamp: 4; /* Peut-être 4 lignes pour laisser un peu plus d'espace */
    }
`;

const ProjectCardOverlay = styled(motion.div)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(45, 50, 60, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    pointer-events: none; /* Empêche l'overlay de bloquer le clic sur la carte */

    ${ProjectCard}:hover & {
        opacity: 1;
        pointer-events: auto; /* Active le pointer-events au hover si besoin */
    }

    @media (max-width: 768px) {
        display: none; /* Désactive l'overlay sur mobile car pas de hover */
    }
`;

const OverlayText = styled(motion.span)`
    color: #fff;
    font-size: 1.8em;
    font-weight: bold;
    text-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
`;

// --- Styles de la page de détails du projet ---
const ProjectDetailPage = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #2d323c;
    z-index: 999;
    overflow-y: auto; /* Permet le défilement si le contenu dépasse */
    padding-bottom: 50px;
    transition: background-color 0.3s ease-out;

    /* Masque le défilement du corps principal lorsque la modale est ouverte */
    body.no-scroll & {
        overflow: hidden;
    }
`;

const ProjectDetailHeader = styled.div`
    position: relative;
    width: 100%;
    padding: 40px;
    background-color: #3d424b;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    margin-bottom: 30px;

    @media (max-width: 768px) {
        padding: 20px 15px; /* Padding réduit sur mobile */
        margin-bottom: 20px;
    }
`;

const BackButton = styled.button`
    position: absolute;
    top: 30px;
    left: 30px;
    background: none;
    border: none;
    font-size: 1.2em;
    color: #abb2bf;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    &:hover {
        color: #e0e0e0;
    }
    span {
        font-size: 1.8em;
        line-height: 1;
    }

    @media (max-width: 768px) {
        top: 15px;
        left: 15px;
        font-size: 1em;
        span {
            font-size: 1.5em;
        }
    }
    @media (max-width: 480px) {
        font-size: 0.9em;
        gap: 5px;
        span {
            font-size: 1.3em;
        }
    }
`;

const ProjectDetailMainMedia = styled(motion.div)`
    width: min(90%, 1000px); /* Utilise min() pour que la largeur soit 90% ou 1000px max */
    margin: 0 auto 40px auto;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 300px;
    background-color: #2d323c;
    color: #e0e0e0;
    font-size: 1.5em;

    @media (max-width: 768px) {
        width: 95%; /* Augmente la largeur sur mobile pour mieux utiliser l'écran */
        margin-bottom: 30px;
        min-height: 200px; /* Réduire la hauteur minimale */
    }
`;

const ProjectDetailVideo = styled.video`
    width: 100%;
    height: 60vh; /* Utilise vh pour une hauteur relative à la viewport */
    max-height: 600px;
    object-fit: contain; /* Assure que la vidéo est entièrement visible */
    background-color: #000;
    display: block;

    @media (max-width: 768px) {
        height: 40vh; /* Hauteur plus petite sur mobile */
    }
    @media (max-width: 480px) {
        height: 30vh;
    }
`;

const ProjectDetailIframe = styled.iframe`
    width: 100%;
    height: 60vh; /* Utilise vh pour une hauteur relative à la viewport */
    max-height: 600px;
    border: none;
    display: block;

    @media (max-width: 768px) {
        height: 40vh; /* Hauteur plus petite sur mobile */
    }
    @media (max-width: 480px) {
        height: 30vh;
    }
`;

const ProjectDetailContent = styled.div`
    max-width: 900px;
    margin: 0 auto;
    padding: 0 20px;
    text-align: left;

    @media (max-width: 768px) {
        padding: 0 15px; /* Padding réduit sur mobile */
    }
`;

const ProjectDetailTitle = styled.h1`
    font-size: 3em;
    color: #e0e0e0;
    margin-bottom: 20px;
    font-weight: 700;
    text-align: center; /* Centre le titre par défaut */

    @media (max-width: 768px) {
        font-size: 2em;
        text-align: left; /* Alignement à gauche sur mobile, plus naturel */
        margin-bottom: 15px;
    }
    @media (max-width: 480px) {
        font-size: 1.8em;
    }
`;

const ProjectDetailDescription = styled.p`
    font-size: 1.1em;
    color: #abb2bf;
    line-height: 1.8;
    margin-bottom: 30px;
    text-align: justify;

    @media (max-width: 768px) {
        font-size: 1em; /* Légèrement plus petit sur mobile */
        margin-bottom: 20px;
    }
`;

const ProjectTechnologies = styled.div`
    margin-top: 30px;
    font-size: 1em;
    color: #abb2bf;
    text-align: left;
    strong {
        color: #e0e0e0;
        font-weight: 700;
    }

    @media (max-width: 768px) {
        margin-top: 20px;
        font-size: 0.95em;
    }
`;

const TechTag = styled.span`
    background-color: rgba(0, 191, 143, 0.15);
    border-radius: 7px;
    padding: 8px 15px;
    margin-right: 10px;
    margin-bottom: 10px;
    display: inline-block; /* Pour qu'ils s'enroulent sur plusieurs lignes */
    font-size: 0.9em;
    color: #00bf8f;
    font-weight: 500;

    @media (max-width: 768px) {
        padding: 6px 12px;
        font-size: 0.8em;
        margin-right: 8px;
        margin-bottom: 8px;
    }
`;

const ProjectImageGrid = styled.div`
    display: grid;
    /* Adapte les colonnes, 1 ou 2 max sur petit écran, 3 sur plus grand */
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    margin-top: 40px;

    @media (max-width: 768px) {
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); /* Plus petites images sur mobile */
        gap: 15px;
        margin-top: 30px;
    }
    @media (max-width: 480px) {
        grid-template-columns: 1fr; /* Une seule colonne pour les images sur les très petits mobiles */
    }
`;

const ProjectImage = styled.img`
    width: 100%;
    height: 220px; /* Garde une hauteur fixe mais assure le 'cover' */
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

    @media (max-width: 768px) {
        height: 180px; /* Hauteur ajustée pour mobile */
    }
    @media (max-width: 480px) {
        height: 150px;
    }
`;

const ProjectLinks = styled.div`
    margin-top: 40px;
    display: flex;
    gap: 20px;
    flex-wrap: wrap; /* Important pour que les liens passent à la ligne sur mobile */
    justify-content: flex-start;

    @media (max-width: 768px) {
        margin-top: 30px;
        gap: 15px; /* Espacement réduit */
        justify-content: center; /* Centre les liens sur mobile */
    }
`;

const ProjectLink = styled.a`
    display: inline-block;
    background-color: #00bf8f;
    color: white;
    padding: 12px 25px;
    border-radius: 8px;
    text-decoration: none;
    font-weight: bold;
    font-size: 1.05em;
    transition: background-color 0.3s ease, transform 0.2s ease;
    text-align: center; /* Assure le centrage du texte si le lien prend toute la largeur */

    &:hover {
        background-color: #00a37c;
        transform: translateY(-2px);
    }

    @media (max-width: 768px) {
        width: 100%; /* Les liens prennent toute la largeur sur mobile */
        max-width: 280px; /* Limite la largeur max sur mobile pour éviter qu'ils soient trop grands */
        padding: 10px 20px;
        font-size: 1em;
        margin-bottom: 10px; /* Ajoute de l'espace entre les liens empilés */
    }
    @media (max-width: 480px) {
        font-size: 0.9em;
        padding: 8px 15px;
    }
`;
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



// --- Variants Framer Motion ---
const cardVariants = {
    hidden: { opacity: 0, y: 70 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 90,
            damping: 12,
        },
    },
};

const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

const overlayTextVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { delay: 0.1 } },
};

const detailPageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Projets() {
    const [selectedProjectId, setSelectedProjectId] = useState(null);
    const selectedProject = projectsData.find(p => p.id === selectedProjectId);

    // Effet pour empêcher le défilement du corps quand la modale est ouverte
    React.useEffect(() => {
        if (selectedProjectId) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedProjectId]);

    const primaryNavLinks = [
        { name: 'Acceuil', path: '/' },
        { name: 'Competences', path: '/Competences' },
        { name: 'Projets', path: '/Projets' },
        { name: 'Contact', path: '/Contact' },
    ];

    const helloButtonLink = { name: 'Dire bonjour', path: '/Contact' };

    return (
        <>
            <Header navLinks={primaryNavLinks} sayHelloLink={helloButtonLink} />
            <CustomCursor />

            <AnimatePresence mode="wait">
                {selectedProject ? (
                    <ProjectDetailPage
                        key="project-detail"
                        variants={detailPageVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                    >
                        <ProjectDetailHeader>
                            <BackButton onClick={() => setSelectedProjectId(null)}>
                                <span>←</span> Retour aux projets
                            </BackButton>
                        </ProjectDetailHeader>

                        <ProjectDetailMainMedia layoutId={`project-image-${selectedProject.id}`}>
                            {selectedProject.videoUrl ? (
                                selectedProject.videoUrl.includes('youtube.com') || selectedProject.videoUrl.includes('vimeo.com') ? (
                                    <ProjectDetailIframe
                                        src={selectedProject.videoUrl}
                                        title={selectedProject.title}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></ProjectDetailIframe>
                                ) : (
                                    <ProjectDetailVideo controls autoPlay loop muted>
                                        <source src={selectedProject.videoUrl} type="video/mp4" />
                                        Votre navigateur ne supporte pas la balise vidéo.
                                    </ProjectDetailVideo>
                                )
                            ) : (
                                selectedProject.thumbnail && !selectedProject.thumbnail.includes('placeholder') ? (
                                    <img
                                        src={selectedProject.thumbnail}
                                        alt={selectedProject.title}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                ) : (
                                    // Ce span était ici pour le cas sans vidéo ni image. On le garde.
                                    <span>Regarder la vidéo (ou image non disponible)</span>
                                )
                            )}
                        </ProjectDetailMainMedia>

                        <ProjectDetailContent>
                            <ProjectDetailTitle>{selectedProject.title}</ProjectDetailTitle>
                            <ProjectDetailDescription>{selectedProject.description}</ProjectDetailDescription>

                            <ProjectTechnologies>
                                <strong>Technologies utilisées :</strong>{' '}
                                {selectedProject.technologies && selectedProject.technologies.map(tech => (
                                    <TechTag key={tech}>{tech}</TechTag>
                                ))}
                            </ProjectTechnologies>

                            {selectedProject.images && selectedProject.images.length > 0 && (
                                <ProjectImageGrid>
                                    {selectedProject.images.map((image, index) => (
                                        <ProjectImage key={index} src={image} alt={`${selectedProject.title} ${index + 1}`} />
                                    ))}
                                </ProjectImageGrid>
                            )}

                            <ProjectLinks>
                                {selectedProject.githubLink && (
                                    <ProjectLink href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer">
                                        Voir sur GitHub
                                    </ProjectLink>
                                )}
                                {selectedProject.liveLink && (
                                    <ProjectLink href={selectedProject.liveLink} target="_blank" rel="noopener noreferrer">
                                        Voir le site Live
                                    </ProjectLink>
                                )}
                            </ProjectLinks>
                        </ProjectDetailContent>
                    </ProjectDetailPage>
                ) : (
                    <ProjetsSection key="projects-grid">
                        <SectionTitle>Mes Projets</SectionTitle>
                        <MoreAboutMe>
                        <p>  </p>
                        {/* La flèche reste inchangée, elle utilise toujours l'animation 'bounce' de styled-components */}
                        <ArrowDown>&#x2193;</ArrowDown>
                    </MoreAboutMe>

                        <ProjectsGrid
                            variants={gridVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            {projectsData.map((project) => (
                                <ProjectCard
                                    key={project.id}
                                    variants={cardVariants}
                                    onHoverStart={() => { /* console.log("hover start"); */ }}
                                    onHoverEnd={() => { /* console.log("hover end"); */ }}
                                    whileHover="hover"
                                    onClick={() => setSelectedProjectId(project.id)}
                                >
                                    {/* Modification ici pour afficher le texte si pas d'image et qu'il y a une vidéo */}
                                    {project.videoUrl && project.thumbnail.includes('placeholder') ? (
                                        <VideoThumbnailText>Cliquer pour voir la vidéo</VideoThumbnailText>
                                    ) : (
                                        <ProjectThumbnail src={project.thumbnail} alt={project.title} layoutId={`project-image-${project.id}`} />
                                    )}

                                    <ProjectCardOverlay variants={overlayVariants}>
                                        <OverlayText variants={overlayTextVariants}>
                                            Voir le projet
                                        </OverlayText>
                                    </ProjectCardOverlay>

                                    <ProjectInfo>
                                        <ProjectTitle>{project.title}</ProjectTitle>
                                        <ProjectDescription>{project.description}</ProjectDescription>
                                    </ProjectInfo>
                                </ProjectCard>
                            ))}
                        </ProjectsGrid>
                    </ProjetsSection>
                )}
            </AnimatePresence>
        </>
    );
}