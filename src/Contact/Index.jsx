import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import CustomCursor from '../components/CustomCursor';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';

// Assurez-vous que ces chemins d'importation sont corrects
import image1 from '../assets/image2_respo.jpg'; // Première image (à côté du formulaire)
import image2 from '../assets/photoVeste2.jpg'; // Deuxième image (maintenant à côté des infos de contact)

const ContactSection = styled.section`
    padding: 80px 20px;
    background-color: #2d323c;
    color: #e0e0e0;
    text-align: center;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 120px;
    @media (max-width: 768px) {
        padding-top: 80px;
    }
`;

const SectionTitle = styled.h2`
    font-size: 3.5em;
    color: #e0e0e0;
    margin-bottom: 50px;
    font-weight: 700;
    text-shadow: 0 4px 10px rgba(0, 191, 143, 0.3);

    @media (max-width: 768px) {
        font-size: 2.5em;
        margin-bottom: 30px;
    }
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
    justify-content: center;
    align-items: flex-start;
    max-width: 1200px;
    width: 100%;
    margin-bottom: 60px; /* Espace entre ce bloc et la nouvelle section "infos + image2" */

    @media (max-width: 992px) {
        flex-direction: column;
        align-items: center;
        gap: 40px;
    }
`;

const ContactInfo = styled(motion.div)`
    flex: 1; /* Il prendra une part de l'espace dans le flexbox */
    min-width: 300px; /* Largeur minimale pour l'info bloc */
    background-color: #3d424b;
    padding: 40px;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 768px) {
        padding: 30px;
        width: 90%;
    }
`;

const InfoItem = styled.div`
    margin-bottom: 30px;
    &:last-child {
        margin-bottom: 0;
    }
    h3 {
        font-size: 1.6em;
        color: #00bf8f;
        margin-bottom: 10px;
        display: flex;
        align-items: center;
        gap: 10px;
        @media (max-width: 480px) { /* Réduction de la taille sur très petits écrans */
            font-size: 1.4em;
        }
    }
    p, a {
        font-size: 1.1em;
        color: #abb2bf;
        text-decoration: none;
        word-break: break-all;
        @media (max-width: 480px) { /* Réduction de la taille sur très petits écrans */
            font-size: 1em;
        }
    }
    a:hover {
        color: #e0e0e0;
        text-decoration: underline;
    }
`;

const StyledForm = styled(motion.form)`
    flex: 1.5; /* Le formulaire prend plus de place */
    min-width: 400px;
    background-color: #3d424b;
    padding: 40px;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media (max-width: 768px) {
        padding: 30px;
        min-width: unset; /* Annule le min-width sur mobile pour plus de flexibilité */
        width: 90%;
    }
`;

const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const Label = styled.label`
    font-size: 1.1em;
    color: #e0e0e0;
    margin-bottom: 8px;
    font-weight: 500;
`;

const Input = styled.input`
    width: 100%;
    padding: 12px 15px;
    border: 1px solid #5a606b;
    border-radius: 8px;
    background-color: #2d323c;
    color: #e0e0e0;
    font-size: 1em;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
    &:focus {
        outline: none;
        border-color: #00bf8f;
        box-shadow: 0 0 0 3px rgba(0, 191, 143, 0.3);
    }
    &::placeholder {
        color: #abb2bf;
    }
`;

const TextArea = styled.textarea`
    width: 100%;
    padding: 12px 15px;
    border: 1px solid #5a606b;
    border-radius: 8px;
    background-color: #2d323c;
    color: #e0e0e0;
    font-size: 1em;
    min-height: 120px;
    resize: vertical;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
    &:focus {
        outline: none;
        border-color: #00bf8f;
        box-shadow: 0 0 0 3px rgba(0, 191, 143, 0.3);
    }
    &::placeholder {
        color: #abb2bf;
    }
`;

const SubmitButton = styled(motion.button)`
    background-color: #00bf8f;
    color: white;
    padding: 15px 30px;
    border: none;
    border-radius: 8px;
    font-size: 1.1em;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;
    align-self: flex-end;

    &:hover {
        background-color: #00a37c;
        transform: translateY(-3px);
    }
    &:disabled {
        background-color: #5a606b;
        cursor: not-allowed;
    }
`;

const Message = styled(motion.p)`
    margin-top: 15px;
    font-size: 1.1em;
    font-weight: 500;
    text-align: center;
    color: ${props => (props.type === 'success' ? '#00bf8f' : '#e74c3c')};
`;

const BottomContentWrapper = styled(motion.div)`
    display: flex;
    flex-wrap: wrap;
    gap: 50px; /* Espace entre les infos et l'image */
    justify-content: center;
    align-items: flex-start;
    margin-top: 60px; /* Espace entre le bloc formulaire/image1 et ce nouveau bloc */
    width: 100%;
    max-width: 1200px; /* Aligne la largeur avec ContentWrapper */

    @media (max-width: 992px) {
        flex-direction: column;
        align-items: center;
        gap: 40px;
    }
`;

const StyledImage = styled(motion.img)`
    width: 100%;
    max-width: 400px;
    object-fit: cover;
    border-radius: 15px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
    border: 3px solid #00bf8f;

    /* Hauteurs spécifiques par image et réactives */
    ${props => props.alt === "Votre photo professionnelle" && `
        height: 630px;
        @media (max-width: 768px) {
            height: 450px; /* Réduire pour tablettes */
        }
        @media (max-width: 480px) {
            height: 350px; /* Réduire pour petits mobiles */
        }
    `}
    ${props => props.alt === "Votre photo en veste" && `
        height: 670px;
        @media (max-width: 768px) {
            height: 500px; /* Réduire pour tablettes */
        }
        @media (max-width: 480px) {
            height: 400px; /* Réduire pour petits mobiles */
        }
    `}

    @media (max-width: 768px) {
        max-width: 90%;
    }
`;

// Animation variants pour Framer Motion
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3
        }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 10
        }
    }
};

export default function Contact() {
    const form = useRef();
    const [statusMessage, setStatusMessage] = useState('');
    const [messageType, setMessageType] = useState('');
    const [isSending, setIsSending] = useState(false);

    const primaryNavLinks = [
        { name: 'Acceuil', path: '/' },
        { name: 'Competences', path: '/Competences' },
        { name: 'Projets', path: '/Projets' },
        { name: 'Contact', path: '/Contact' },
    ];

    const helloButtonLink = { name: 'Dire bonjour', path: '/Contact' };

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSending(true);
        setStatusMessage('');
        setMessageType('');

        // VOS IDS EMAILJS PRÉ-REMPLIS !
        const SERVICE_ID = 'service_fb8mdgj';
        const TEMPLATE_ID = 'template_r029e5y';
        const PUBLIC_KEY = 'lx1QK-AeZZQ1yMSGY'; // <--- VOTRE PUBLIC KEY EST ICI !

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log('Email successfully sent!', result.text);
                setStatusMessage('Message envoyé avec succès !');
                setMessageType('success');
                form.current.reset();
            }, (error) => {
                console.error('Failed to send email:', error.text);
                setStatusMessage('Erreur lors de l\'envoi du message. Veuillez réessayer.');
                setMessageType('error');
            })
            .finally(() => {
                setIsSending(false);
            });
    };

    return (
        <>
            <Header navLinks={primaryNavLinks} sayHelloLink={helloButtonLink} />
            <CustomCursor />

            <ContactSection>
                <SectionTitle
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    Me Contacter
                </SectionTitle>

                {/* Section principale : image1 et formulaire */}
                <ContentWrapper
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Première image à côté du formulaire */}
                    <StyledImage
                        src={image1}
                        alt="Votre photo professionnelle"
                        variants={itemVariants}
                        // Les styles de hauteur sont maintenant gérés dans StyledImage
                    />

                    {/* Le formulaire reste ici */}
                    <StyledForm ref={form} onSubmit={sendEmail} variants={itemVariants}>
                        <FormGroup>
                            <Label htmlFor="user_name">Votre Nom</Label>
                            <Input type="text" id="user_name" name="user_name" placeholder="Ex: Votre nom prenom" required disabled={isSending} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="user_email">Votre Email</Label>
                            <Input type="email" id="user_email" name="user_email" placeholder="Ex: votreprenom.votrenom@example.com" required disabled={isSending} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="user_subject">Sujet</Label>
                            <Input type="text" id="user_subject" name="user_subject" placeholder="Ex: Proposition de projet" required disabled={isSending} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="message">Votre Message</Label>
                            <TextArea id="message" name="message" placeholder="Tapez votre message ici..." rows="5" required disabled={isSending} />
                        </FormGroup>
                        <SubmitButton type="submit" whileTap={{ scale: 0.95 }} disabled={isSending}>
                            {isSending ? 'Envoi en cours...' : 'Envoyer le message'}
                        </SubmitButton>
                        {statusMessage && (
                            <Message
                                type={messageType}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                            >
                                {statusMessage}
                            </Message>
                        )}
                    </StyledForm>
                </ContentWrapper>

                {/* Nouvelle section pour les infos de contact et la deuxième image */}
                <BottomContentWrapper
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Les informations de contact à gauche */}
                    <ContactInfo variants={itemVariants}>
                        <InfoItem>
                            <h3><span role="img" aria-label="email">📧</span> Email</h3>
                            <p>
                                <a href="mailto:chris.johan.225@gmail.com">
                                    chris.johan.225@gmail.com
                                </a>
                            </p>
                        </InfoItem>
                        <InfoItem>
                            <h3><span role="img" aria-label="phone">📞</span> Téléphone</h3>
                            <p>
                                <a href="tel:+2250171895857">
                                    +225 0171895857
                                </a>
                            </p>
                        </InfoItem>
                        <InfoItem>
                            <h3><span role="img" aria-label="location">📍</span> Localisation</h3>
                            <p>Abidjan, Côte d'Ivoire feh kesse</p>
                        </InfoItem>
                        <InfoItem>
                            <h3><span role="img" aria-label="social media">🔗</span> Réseaux Sociaux</h3>
                            <p>
                                {/* N'oubliez pas de remplacer par VOS vrais liens LinkedIn et GitHub */}
                                <a href="https://www.linkedin.com/in/johan-ledjo-015805344?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" style={{marginRight: '15px'}}>LinkedIn</a>
                                <a href="https://github.com/Jochris7" target="_blank" rel="noopener noreferrer">GitHub</a>
                            </p>
                        </InfoItem>
                    </ContactInfo>

                    {/* La deuxième image à droite */}
                    <StyledImage src={image2} alt="Votre photo en veste" variants={itemVariants}
                        // Les styles de hauteur sont maintenant gérés dans StyledImage
                    />
                </BottomContentWrapper>
            </ContactSection>
        </>
    );
}