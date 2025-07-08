// src/components/CustomCursor.js
import React, { useRef, useEffect, useState } from 'react';
import { motion, useSpring } from 'motion/react';
import styled from 'styled-components';

// Configuration du ressort pour un suivi fluide
const springConfig = { damping: 40, stiffness: 150, mass: 1, restDelta: 0.001 };

// Nombre de cercles dans la queue (maintenant 4 balles suiveuses)
const NUM_TRAIL_CIRCLES = 4; // MODIFIÉ : Quatre balles suiveuses

// Styles pour la "balle" principale qui suit le pointeur
const MainBall = styled(motion.div)`
    width: 35px; /* Taille de la balle principale */
    height: 35px; /* Taille de la balle principale */
    background-color: rgba(0, 191, 143, 0.8);
    border-radius: 50%;
    position: fixed;
    top: 0;
    left: 0;
    pointer-events: none;
    z-index: 9999;
    opacity: 0.8;
    box-shadow: 0 0 15px rgba(0, 191, 143, 0.8);
    border: 1px solid #00bf8f;
`;

// Styled Component de base pour les petites "balles" de la queue
const TrailBall = styled(motion.div)`
    background-color: rgba(0, 191, 143, 0.8); /* Opacité réduite pour les balles suiveuses */
    border-radius: 50%;
    position: fixed;
    pointer-events: none;
    box-shadow: 0 0 15px rgba(0, 191, 143, 0.8); /* Ombre moins intense pour les balles suiveuses */
    border: 0.5px solid #00bf8f;
`;

// Composant individuel pour la balle suiveuse
function TrailCircle({ targetX, targetY, size, opacity, zIndex }) {
    const x = useSpring(0, springConfig);
    const y = useSpring(0, springConfig);

    useEffect(() => {
        x.set(targetX);
        y.set(targetY);
    }, [targetX, targetY, x, y]);

    return (
        <TrailBall
            style={{
                width: size,
                height: size,
                opacity: opacity,
                x: x,
                y: y,
                zIndex: zIndex,
            }}
        />
    );
}

// Hook personnalisé pour suivre le pointeur et gérer la balle suiveuse
function useCursorTrail(mainBallRef) {
    const coords = useRef({ x: 0, y: 0 }); 
    
    const mainX = useSpring(0, springConfig);
    const mainY = useSpring(0, springConfig);

    // Historique des positions du pointeur.
    // Augmenté la taille pour permettre un plus grand décalage entre les balles.
    const TRAIL_HISTORY_SIZE = 25; // MODIFIÉ : Taille de l'historique augmentée pour plus de balles
    const trailPositionsHistory = useRef(
        Array.from({ length: TRAIL_HISTORY_SIZE }).map(() => ({ x: 0, y: 0 }))
    );

    const [renderedTrailTargets, setRenderedTrailTargets] = useState(() => 
        Array.from({ length: NUM_TRAIL_CIRCLES }).map(() => ({ x: 0, y: 0 }))
    );

    useEffect(() => {
        const handlePointerMove = ({ clientX, clientY }) => {
            coords.current = { x: clientX, y: clientY }; 
        };

        window.addEventListener("pointermove", handlePointerMove);

        let animationFrameId;

        const animateOnFrame = () => {
            const { x, y } = coords.current;

            const element = mainBallRef.current;
            if (!element) return;

            mainX.set(x - element.offsetWidth / 2);
            mainY.set(y - element.offsetHeight / 2);

            // Met à jour l'historique des positions
            trailPositionsHistory.current.unshift({ 
                x: mainX.get(), 
                y: mainY.get() 
            });
            trailPositionsHistory.current.pop();

            // Calcule les nouvelles cibles pour les TrailCircle en tirant de l'historique
            const newRenderedTrailTargets = [];
            
            // Pour la 1ère balle suiveuse (index 0): pioche à l'index 5 de l'historique
            newRenderedTrailTargets.push(trailPositionsHistory.current[5]); 
            
            // Pour la 2ème balle suiveuse (index 1): pioche à l'index 10 de l'historique
            if (NUM_TRAIL_CIRCLES > 1) { 
                newRenderedTrailTargets.push(trailPositionsHistory.current[10]); 
            }
            
            // Pour la 3ème balle suiveuse (index 2): pioche à l'index 15 de l'historique
            if (NUM_TRAIL_CIRCLES > 2) { 
                newRenderedTrailTargets.push(trailPositionsHistory.current[15]); 
            }

            // Pour la 4ème balle suiveuse (index 3): pioche à l'index 20 de l'historique
            if (NUM_TRAIL_CIRCLES > 3) { 
                newRenderedTrailTargets.push(trailPositionsHistory.current[20]); 
            }
            
            setRenderedTrailTargets(newRenderedTrailTargets);
            
            animationFrameId = requestAnimationFrame(animateOnFrame); 
        };

        animationFrameId = requestAnimationFrame(animateOnFrame); 

        return () => {
            window.removeEventListener("pointermove", handlePointerMove);
            cancelAnimationFrame(animationFrameId); 
        };
    }, [mainBallRef, mainX, mainY]); 

    return { mainX, mainY, renderedTrailTargets };
}

// Composant principal du curseur personnalisé
export default function CustomCursor() {
    const mainBallRef = useRef(null);
    const { mainX, mainY, renderedTrailTargets } = useCursorTrail(mainBallRef);

    const mainBallWidth = 35; // Taille de la balle principale
    const mainBallOpacity = 0.8; 

    // Définir la taille et l'opacité pour les balles suiveuses
    const getTrailBallSize = (index) => {
        // Multiplicateurs de taille pour chaque balle suiveuse (ajustés pour 4 balles)
        const sizes = [0.9, 0.7, 0.5, 0.3]; // MODIFIÉ : 4 valeurs de taille
        return mainBallWidth * (sizes[index] || 0); 
    };

    const getTrailBallOpacity = (index) => {
        // Multiplicateurs d'opacité (ajustés pour 4 balles)
        const opacities = [0.7, 0.5, 0.3, 0.2]; // MODIFIÉ : 4 valeurs d'opacité
        return mainBallOpacity * (opacities[index] || 0);
    };


    return (
        <>
            {/* Le curseur principal (le plus grand cercle) */}
            <MainBall 
                ref={mainBallRef} 
                style={{ x: mainX, y: mainY }} 
            />

            {/* Rend les balles suiveuses */}
            {renderedTrailTargets.map((target, index) => (
                <TrailCircle
                    key={index}
                    targetX={target.x}
                    targetY={target.y}
                    // Utilisez les fonctions pour calculer la taille et l'opacité en fonction de l'index
                    size={getTrailBallSize(index)} 
                    opacity={getTrailBallOpacity(index)} 
                    // Ajuste le zIndex pour un effet de profondeur visuelle
                    zIndex={9998 - index} 
                />
            ))}
        </>
    );
}
