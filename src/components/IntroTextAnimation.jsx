// src/components/IntroTextAnimation.jsx
"use client"

import { animate, hover } from "motion"
// import { splitText } from "motion-plus" // <-- COMMENTEZ ou SUPPRIMEZ CETTE LIGNE
import { useMotionValue } from "motion/react"
import { useEffect, useRef, useCallback } from "react" // Ajout de useCallback pour la performance

// ***************************************************************
// NOUVELLE FONCTION POUR SPLITTER LE TEXTE EN CARACTÈRES (remplace motion-plus)
const splitTextIntoChars = (element) => {
    if (!element) {
        return { chars: [] };
    }

    const textContent = element.textContent || "";
    element.innerHTML = ""; // Vide le contenu original

    const chars = Array.from(textContent).map((char, index) => {
        const span = document.createElement("span");
        
        // Gérer les espaces: si c'est un espace, utilisez un espace insécable
        // Ceci empêche les caractères de coller et peut aider contre la traduction des espaces
        span.textContent = (char === ' ' || char === '\u00A0') ? '\u00A0' : char; 
        
        span.className = "split-char"; // Assurez-vous que votre CSS a une règle pour .split-char
        span.style.display = "inline-block"; // Important pour l'animation individuelle
        span.setAttribute("data-char-index", index); // Utile pour le débogage si besoin
        element.appendChild(span);
        return span;
    });

    return { chars };
};
// ***************************************************************


export default function ScatterText() {
    const containerRef = useRef(null) 
    const velocityX = useMotionValue(0)
    const velocityY = useMotionValue(0)
    const prevEvent = useRef(0)

    // Utilisation de useCallback pour stabiliser la fonction handlePointerMove
    const handlePointerMove = useCallback((event) => {
        const now = performance.now()
        const timeSinceLastEvent = (now - prevEvent.current) / 1000 // seconds
        prevEvent.current = now
        velocityX.set(event.movementX / timeSinceLastEvent)
        velocityY.set(event.movementY / timeSinceLastEvent)
    }, [velocityX, velocityY]) // Dépendances pour useCallback

    useEffect(() => {
        if (!containerRef.current) return 

        const h1Element = containerRef.current.querySelector(".h1");
        if (!h1Element) {
            console.warn("Element with class 'h1' not found in ScatterText component.");
            return;
        }

        // REMPLACEZ 'splitText(h1Element)' par 'splitTextIntoChars(h1Element)'
        const { chars } = splitTextIntoChars(h1Element); 

        document.addEventListener("pointermove", handlePointerMove)

        // Stocke les fonctions de nettoyage retournées par hover pour pouvoir les désabonner
        const cleanupHovers = chars.map(charElement => hover(charElement, (element) => {
            const speed = Math.sqrt(
                velocityX.get() * velocityX.get() +
                velocityY.get() * velocityY.get()
            )
            const angle = Math.atan2(velocityY.get(), velocityX.get())
            const distance = speed * 0.1

            animate(
                element,
                {
                    x: Math.cos(angle) * distance,
                    y: Math.sin(angle) * distance,
                },
                { type: "spring", stiffness: 100, damping: 50 }
            )
        }));

        return () => {
            document.removeEventListener("pointermove", handlePointerMove)
            // Appelle toutes les fonctions de nettoyage des animations de hover
            cleanupHovers.forEach(unsub => unsub());
        }
    }, [velocityX, velocityY, handlePointerMove]) // Ajoutez handlePointerMove aux dépendances de useEffect

    return (
        <div className="container" ref={containerRef}>
            {/* Ajoutez translate="no" au h1 pour désactiver la traduction automatique */}
            <h1 className="h1" translate="no"> Je façonne l'avenir numérique avec des solutions intégrées et une pensée innovante .</h1>
            <Stylesheet />
        </div>
    )
}

function Stylesheet() {
    return (
        <style>{`
            .container {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                max-width: 800px; /* Ajusté pour correspondre à votre ContentWrapper */
                text-align: center; /* Centré pour mieux s'aligner avec votre design */
                color: #e0e0e0; /* Couleur de texte plus claire pour un fond sombre */
                margin-top: 20px; /* Ajoute un peu d'espace avec le carrousel au-dessus */
                padding: 0 20px; /* Petit padding horizontal pour ne pas coller les bords */
            }

            .h1 {
                font-size: 1.3em; /* Ajusté pour correspondre à votre IntroductionText */
                line-height: 1.6;
                margin: 0; /* Supprime les marges par défaut des h1 */
            }

            .split-char {
                will-change: transform, opacity;
            }
        `}</style>
    )
}