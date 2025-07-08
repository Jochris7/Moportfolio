// src/components/SplitTextAnimation.jsx
"use client"

import { animate, stagger } from "motion" // Assurez-vous que c'est bien motion (Motion One)
import { useEffect, useRef } from "react"
import styled from "styled-components";

// ***************************************************************
// SOLUTION POUR splitText (pour les mots) SANS motion-plus
// Nous allons créer notre propre fonction splitText simple pour les mots
const splitTextIntoWords = (element) => {
    if (!element) {
        return { words: [] };
    }

    const textContent = element.textContent || "";
    element.innerHTML = ""; // Vide le contenu original

    // Divise le texte par les espaces pour obtenir les mots
    const wordsArray = textContent.split(/\s+/).filter(word => word.length > 0);

    const words = wordsArray.map((word, index) => {
        const span = document.createElement("span");
        span.textContent = word + " "; // Ajoute un espace après chaque mot pour le visuel
        span.className = "split-word"; // Assurez-vous que votre CSS a une règle pour .split-word
        span.style.display = "inline-block"; // Important pour l'animation individuelle
        span.setAttribute("data-word-index", index);
        element.appendChild(span);

        if (index < wordsArray.length - 1) {
            element.appendChild(document.createTextNode('\u00A0')); // Utilise un espace insécable HTML pour la robustesse
        }

        return span;
    });

    return { words };
};
// ***************************************************************


// Styles du composant SplitText (adaptés pour styled-components)
const SplitTextContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    /* max-width: 420px; L'original a 420px, mais votre IntroductionText est 800px.
       Nous allons utiliser la prop pour la taille. */
    text-align: center; /* Centré pour mieux s'aligner avec votre design */
    visibility: hidden; /* Caché au début, rendu visible après splitText */
`;

const SplitHeading = styled.h1`
    font-size: 1.3em; /* Correspond à votre IntroductionText */
    line-height: 1.6;
    margin: 0; /* Supprime les marges par défaut des h1 */
    color: #e0e0e0; /* Couleur de texte plus claire pour un fond sombre */
`;

export default function SplitTextAnimation({ text }) { // Prend le texte comme prop
    const containerRef = useRef(null) // Correction: Supprimé <HTMLDivElement>

    useEffect(() => {
        document.fonts.ready.then(() => {
            if (!containerRef.current) return

            // Rendez le conteneur visible une fois que les polices sont chargées et le texte splitté
            containerRef.current.style.visibility = "visible"

            // Utilisez notre fonction splitTextIntoWords personnalisée
            // Nous ciblons directement le h1 à l'intérieur de containerRef
            const h1Element = containerRef.current.querySelector(".split-heading");
            if (!h1Element) {
                console.warn("Element with class 'split-heading' not found in SplitTextAnimation component.");
                return;
            }

            const { words } = splitTextIntoWords(h1Element);

            // Animate the words in the h1
            animate(
                words,
                { opacity: [0, 1], y: [10, 0] },
                {
                    type: "spring",
                    duration: 2,
                    bounce: 0, // 0 pour un effet de rebond moins prononcé (ou pas de rebond)
                    delay: stagger(0.05),
                }
            )
        })
    }, []) // Le tableau de dépendances reste vide car l'effet s'exécute une fois

    return (
        <SplitTextContainer ref={containerRef}>
            <SplitHeading className="split-heading"translate="no" > {/* Appliquez une classe pour cibler */}
                {text} {/* Le texte sera inséré ici et splitté */}
            </SplitHeading>
        </SplitTextContainer>
    )
}