import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import CustomCursor from '../components/CustomCursor';


import videoBaccalaureat from '../assets/Projets/baccalaureat.mkv';
import videoCrudBibliotheque from '../assets/Projets/crud-bibliotheque.mkv';
import videoDashboard from '../assets/Projets/dashboard.mkv';
import videoJeuDame from '../assets/Projets/jeu-dame.mkv';
import videoPrediction from '../assets/Projets/predictionBenefices.mkv';
import videoTodoList from '../assets/Projets/todolist.mkv';

import figmaAppFood from '../assets/Projets/figma-appfood.png';
import uiApp from '../assets/Projets/UIApp.png';

const projectsData = [
    {
        id: 'baccalaureat-project',
        title: 'Jeu Baccalauréat',
        description: 'Le projet "Jeu de Baccalauréat" est une application web interactive développée avec PHP, MySQL et du DOM JavaScript. Ce jeu propose aux utilisateurs de remplir plusieurs catégories, telles que nom, pays, animal, etc., en fonction d\'une lettre aléatoire générée par le système. Lorsque le joueur lance le compteur, une lettre est choisie au hasard.',
        thumbnail: 'https://via.placeholder.com/300x200/4A90E2/FFFFFF?text=Baccalaureat',
        videoUrl: videoBaccalaureat,
        images: ['https://via.placeholder.com/800x600/4A90E2/FFFFFF?text=Bac+Screen+1'],
        githubLink: 'https://github.com/votre_user/baccalaureat-project',
        liveLink: '',
        technologies: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    },
    {
        id: 'crud-bibliotheque',
        title: 'Bibliothèque Numérique (MERN Stack)',
        description: 'Le projet "Bibliothèque Numérique" est une application web développée en utilisant la stack MERN (MongoDB, Express.js, React.js, Node.js) qui permet aux utilisateurs de gérer une bibliothèque de livres de manière intuitive et efficace. L\'application offre des fonctionnalités CRUD (Créer, Lire, Mettre à jour, Supprimer) pour les livres, permettant une gestion complète.',
        thumbnail: 'https://via.placeholder.com/300x200/F5A623/FFFFFF?text=Bibliotheque',
        videoUrl: videoCrudBibliotheque,
        images: ['https://via.placeholder.com/800x600/F5A623/FFFFFF?text=Biblio+Screen+1'],
        githubLink: 'https://github.com/votre_user/crud-bibliotheque',
        liveLink: '',
        technologies: ['Node.js', 'Express', 'MongoDB', 'React.js'],
    },
    {
        id: 'dashboard-project',
        title: 'Dashboard Statique Interactif',
        description: 'Le projet "Dashboard Statique" est une application web développée avec React qui présente des données de manière visuelle et interactive. Utilisant Chart.js pour les graphiques, l\'application affiche des statistiques clés sous forme de graphiques à barres, de lignes et de secteurs, permettant une compréhension rapide des données et une exploration aisée.',
        thumbnail: 'https://via.placeholder.com/300x200/BD10E0/FFFFFF?text=Dashboard',
        videoUrl: videoDashboard,
        images: ['https://via.placeholder.com/800x600/BD10E0/FFFFFF?text=Dashboard+Screen+1'],
        githubLink: 'https://github.com/votre_user/dashboard-project',
        liveLink: 'https://dashboard.example.com',
        technologies: ['React', 'Chart.js', 'Styled Components'],
    },
    {
        id: 'jeu-de-dames',
        title: 'Jeu de Dames Interactif',
        description: 'Le projet "Jeu de Dames" est une application web interactive développée avec React.js. Ce jeu classique permet à deux joueurs de s\'affronter sur un plateau de dames. Les utilisateurs peuvent déplacer leurs pions, capturer ceux de l\'adversaire et promouvoir leurs pions en dames lorsqu\'ils atteignent l\'autre côté du plateau.',
        thumbnail: 'https://via.placeholder.com/300x200/50E3C2/FFFFFF?text=Jeu+de+Dames',
        videoUrl: videoJeuDame,
        images: ['https://via.placeholder.com/800x600/50E3C2/FFFFFF?text=Dames+Screen+1'],
        githubLink: 'https://github.com/votre_user/jeu-de-dames',
        liveLink: '',
        technologies: ['React.js'],
    },
    {
        id: 'prediction-benefices',
        title: 'Modèle de Prédiction de Bénéfices (ML)',
        description: 'Ce projet implémente une régression linéaire simple pour prédire les bénéfices d\'un Food Truck en fonction de la population d\'une ville. Il s\'agit d\'un exercice de machine learning de base avec Python et matplotlib, utilisant les données de différentes villes pour guider l\'ouverture de nouveaux points de vente.',
        thumbnail: 'https://via.placeholder.com/300x200/9013FE/FFFFFF?text=Prediction+ML',
        videoUrl: videoPrediction,
        images: ['https://via.placeholder.com/800x600/9013FE/FFFFFF?text=ML+Plot+1'],
        githubLink: 'https://github.com/votre_user/prediction-benefices-ml',
        liveLink: '',
        technologies: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib', 'Jupyter Notebook'],
    },
    {
        id: 'todolist-app',
        title: 'Application To-Do List (En Développement)',
        description: 'J\'ai voulu créer une todolist avec authentification. Le projet n\'est pas encore terminé, il y a juste la todolist pour le moment, mais ne vous inquiétez pas, il sera mis à jour d\'ici peu ! 😊🙏🏾',
        thumbnail: 'https://via.placeholder.com/300x200/7ED321/FFFFFF?text=TodoList',
        videoUrl: videoTodoList,
        images: ['https://via.placeholder.com/800x600/7ED321/FFFFFF?text=Todo+Screen+1'],
        githubLink: 'https://github.com/votre_user/todolist-app',
        liveLink: 'https://todolist.example.com',
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
            'https://via.placeholder.com/800x600/F8E71C/FFFFFF?text=Figma+Food+Screen+2',
        ],
        githubLink: '',
        liveLink: 'https://www.figma.com/file/votre_lien_figma_appfood',
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
            'https://via.placeholder.com/800x600/7ED321/FFFFFF?text=UIApp+Screen+2',
        ],
        githubLink: '',
        liveLink: 'https://www.figma.com/file/votre_lien_figma_uiapp',
        technologies: ['Figma', 'UI Design', 'Wireframing'],
    },
];

const ProjetsSection = styled.section`
    padding: 80px 20px;
    background-color: #2d323c;
    text-align: center;
    min-height: 100vh;
`;

const SectionTitle = styled.h2`
    font-size: 2.8em;
    color: #e0e0e0;
    margin-bottom: 60px;
    font-weight: 700;
`;

const ProjectsGrid = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 40px;
    max-width: 1200px;
    margin: 0 auto;

    @media (min-width: 992px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 1200px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 30px;
        padding: 0 15px;
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
`;

// Définition de ProjectThumbnail est repositionnée ici
const ProjectThumbnail = styled(motion.img)`
    width: 100%;
    height: 220px;
    object-fit: cover;
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
`;

const ProjectInfo = styled.div`
    padding: 25px;
    text-align: left;
    flex-grow: 1;
`;

const ProjectTitle = styled.h3`
    font-size: 1.8em;
    color: #e0e0e0;
    margin-bottom: 8px;
    font-weight: 600;
`;

const ProjectDescription = styled.p`
    font-size: 1em;
    color: #abb2bf;
    line-height: 1.6;
    margin-bottom: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
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
`;

const OverlayText = styled(motion.span)`
    color: #fff;
    font-size: 1.8em;
    font-weight: bold;
    text-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
`;

const ProjectDetailPage = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #2d323c;
    z-index: 999;
    overflow-y: auto;
    padding-bottom: 50px;
    transition: background-color 0.3s ease-out;
`;

const ProjectDetailHeader = styled.div`
    position: relative;
    width: 100%;
    padding: 40px;
    background-color: #3d424b;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    margin-bottom: 30px;

    @media (max-width: 768px) {
        padding: 20px;
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
`;

const ProjectDetailMainMedia = styled(motion.div)`
    width: min(90%, 1000px);
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
`;

const ProjectDetailVideo = styled.video`
    width: 100%;
    height: 60vh;
    max-height: 600px;
    object-fit: contain;
    background-color: #000;
    display: block;
`;

const ProjectDetailIframe = styled.iframe`
    width: 100%;
    height: 60vh;
    max-height: 600px;
    border: none;
    display: block;
`;

const ProjectDetailContent = styled.div`
    max-width: 900px;
    margin: 0 auto;
    padding: 0 20px;
    text-align: left;
`;

const ProjectDetailTitle = styled.h1`
    font-size: 3em;
    color: #e0e0e0;
    margin-bottom: 20px;
    font-weight: 700;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 2em;
        text-align: left;
    }
`;

const ProjectDetailDescription = styled.p`
    font-size: 1.1em;
    color: #abb2bf;
    line-height: 1.8;
    margin-bottom: 30px;
    text-align: justify;
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
`;

const TechTag = styled.span`
    background-color: rgba(0, 191, 143, 0.15);
    border-radius: 7px;
    padding: 8px 15px;
    margin-right: 10px;
    margin-bottom: 10px;
    display: inline-block;
    font-size: 0.9em;
    color: #00bf8f;
    font-weight: 500;
`;

const ProjectImageGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin-top: 40px;
`;

const ProjectImage = styled.img`
    width: 100%;
    height: 220px;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const ProjectLinks = styled.div`
    margin-top: 40px;
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: flex-start;
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
    &:hover {
        background-color: #00a37c;
        transform: translateY(-2px);
    }
`;

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
            <CustomCursor/>

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
                                            View project
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