// src/components/WavyText.jsx
"use client"

import { animate, stagger } from "motion"
import { useEffect, useRef } from "react"
import styled from "styled-components";

// ***************************************************************
// SOLUTION POUR splitText SANS motion-plus
// Nous allons créer notre propre fonction splitText simple
const splitTextIntoChars = (element) => {
    if (!element) {
        return { chars: [] };
    }

    const textContent = element.textContent || "";
    element.innerHTML = ""; // Vide le contenu original

    const chars = Array.from(textContent).map((char, index) => {
        const span = document.createElement("span");
        
        // Gérer les espaces: si c'est un espace, utilisez un espace insécable
        span.textContent = (char === ' ' || char === '\u00A0') ? '\u00A0' : char; 
        
        span.className = "split-char"; 
        span.style.display = "inline-block"; // Important pour l'animation individuelle
        span.setAttribute("data-char-index", index); 
        element.appendChild(span);
        return span;
    });

    return { chars };
};
// ***************************************************************


// Styles du composant WavyText (similaires à l'original)
const WavyTextContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    visibility: hidden; /* Caché au début, rendu visible après splitText */
`;

const WavyHeading = styled.h1`
    font-size: 1em; /* Remis à 3.5em, comme votre Name original dans Presentation.js */
    color: #e0e0e0; 
    margin-bottom: 10px;
    display: inline-block; 
`;

export default function WavyText({ text }) { 
    const containerRef = useRef(null)

    useEffect(() => {
        document.fonts.ready.then(() => {
            if (!containerRef.current) return

            const wavySpanElement = containerRef.current.querySelector(".wavy-span");
            if (!wavySpanElement) {
                console.warn("Element with class 'wavy-span' not found in WavyText component.");
                return;
            }

            const { chars } = splitTextIntoChars(wavySpanElement);
            containerRef.current.style.visibility = "visible"

            const staggerDelay = 0.15

            animate(
                chars,
                { y: [-20, 20] },
                {
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                    duration: 2,
                    delay: stagger(
                        staggerDelay,
                        { startDelay: -staggerDelay * chars.length }
                    ),
                }
            )
        })
    }, [])

    return (
        <WavyTextContainer ref={containerRef}>
            {/* Ajout de translate="no" sur le span qui contient le texte animé */}
            {/* Le h1 parent peut être traduit s'il y avait d'autres textes, mais le span animé doit être protégé */}
            <WavyHeading translate="no"> 
                {/* L'espace avant le span n'est pas nécessaire si le wavy-span gère bien les siens */}
                <span className="wavy-span">{text}</span> 
            </WavyHeading>
        </WavyTextContainer>
    )
}