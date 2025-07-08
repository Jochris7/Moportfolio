import React, { useState } from 'react'; // Importer useState
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { motion } from 'motion/react';// Pour des animations fluides

const HeaderContainer = styled.header`
    background-color: #2c313a;
    padding: 15px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #3c424a;
    border-radius: 8px;
    margin: 0px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

    @media (max-width: 768px) {
        padding: 15px 20px; /* Réduire le padding sur mobile */
    }
`;

const NavList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    gap: 30px;

    @media (max-width: 768px) {
        /* Cacher la liste de navigation par défaut sur mobile */
        display: none;
        flex-direction: column; /* Pour le menu mobile empilé */
        width: 100%;
        background-color: #2c313a; /* Couleur de fond pour le menu ouvert */
        position: absolute; /* Positionner le menu mobile */
        top: 75px; /* Juste en dessous du header */
        left: 0;
        padding: 20px;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
        border-radius: 0 0 8px 8px;
        z-index: 1000; /* Assurer que le menu est au-dessus du contenu */

        &.active {
            display: flex; /* Afficher la liste quand le menu est actif */
        }
    }
`;

const NavLinkWrapper = styled(Link)`
    color: #abb2bf;
    text-decoration: none;
    font-size: 1.1em;
    font-weight: 500;
    transition: color 0.3s ease;
    padding: 5px 0; /* Ajouter un peu de padding pour les liens mobiles */

    &:hover {
        color: #61dafb;
    }

    @media (max-width: 768px) {
        width: 100%;
        text-align: center;
        padding: 10px 0;
        border-bottom: 1px solid #3c424a; /* Séparateur pour les liens mobiles */
        &:last-child {
            border-bottom: none;
        }
    }
`;

const SayHelloButton = styled(Link)`
    background-color: transparent;
    color: #00bf8f;
    border: 2px solid #00bf8f;
    padding: 10px 20px;
    border-radius: 25px;
    text-decoration: none;
    font-size: 1.0em;
    font-weight: bold;
    transition: background-color 0.3s ease, color 0.3s ease;

    &:hover {
        background-color: #00bf8f;
        color: #ffffff;
    }

    @media (max-width: 768px) {
        padding: 8px 15px; /* Rendre le bouton plus petit sur mobile */
        font-size: 0.9em;
    }
`;

const HamburgerIcon = styled.div`
    display: none; /* Cacher par défaut sur desktop */
    flex-direction: column;
    justify-content: space-around;
    width: 30px;
    height: 25px;
    cursor: pointer;
    z-index: 1100; /* Assurer que l'icône est au-dessus de tout */

    div {
        width: 100%;
        height: 3px;
        background-color: #e0e0e0;
        border-radius: 5px;
        transition: all 0.3s linear;
        position: relative;
        transform-origin: 1px; /* Point de pivot pour les rotations */
    }

    @media (max-width: 768px) {
        display: flex; /* Afficher sur mobile */
    }

    /* Animations de la croix pour le menu ouvert */
    &.open div:nth-child(1) {
        transform: rotate(45deg);
    }
    &.open div:nth-child(2) {
        opacity: 0;
        transform: translateX(-20px);
    }
    &.open div:nth-child(3) {
        transform: rotate(-45deg);
    }
`;

function Header({ navLinks, sayHelloLink }) {
    const [menuOpen, setMenuOpen] = useState(false); // État pour le menu mobile

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <HeaderContainer>
            {/* L'icône Hamburger doit être avant la navigation pour le positionnement */}
            <HamburgerIcon className={menuOpen ? 'open' : ''} onClick={toggleMenu}>
                <div />
                <div />
                <div />
            </HamburgerIcon>

            <nav>
                <NavList className={menuOpen ? 'active' : ''}>
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <NavLinkWrapper to={link.path} onClick={() => setMenuOpen(false)}> {/* Fermer le menu au clic */}
                                {link.name}
                            </NavLinkWrapper>
                        </li>
                    ))}
                </NavList>
            </nav>
            <SayHelloButton to={sayHelloLink.path} onClick={() => setMenuOpen(false)}>{sayHelloLink.name}</SayHelloButton>
        </HeaderContainer>
    );
}

Header.propTypes = {
    navLinks: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            path: PropTypes.string.isRequired,
        })
    ).isRequired,
    sayHelloLink: PropTypes.shape({
        name: PropTypes.string.isRequired,
        path: PropTypes.string.isRequired,
    }).isRequired,
};

export default Header;