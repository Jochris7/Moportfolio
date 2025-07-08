// src/components/DevMlCV.jsx
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion'; 

// Styles pour le conteneur global du CV Dev/ML (inchangés)
const DevMlCVContainer = styled(motion.div)`
  background-color: #f7f7f7;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  padding: 30px;
  max-width: 850px;
  width: 100%;
  margin: 40px auto;
  overflow: hidden;
  text-align: left;
`;

// Titre de la section CV (inchangé)
const CvSectionTitle = styled.h2`
  font-size: 2.2em;
  color: #333;
  margin-bottom: 30px;
  text-align: center;
  font-weight: 600;
`;

// Conteneur pour une cellule de code Jupyter (inchangé)
const CodeCell = styled.div`
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-left: 4px solid #4a90e2;
  border-radius: 8px;
  margin-bottom: 20px;
  padding: 15px 20px;
  font-family: 'Fira Code', 'Cascadia Code', 'Consolas', monospace;
  font-size: 0.95em;
  line-height: 1.5;
  white-space: pre-wrap;
  word-break: break-word;
  position: relative;

  &::before {
    content: 'In [1]:';
    position: absolute;
    left: -60px;
    top: 15px;
    font-size: 0.8em;
    color: #999;
    font-family: sans-serif;
  }
`;

// Conteneur pour le résultat d'une cellule de code Jupyter (inchangé)
const OutputCell = styled.div`
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-top: -15px;
  margin-bottom: 20px;
  padding: 10px 20px;
  font-family: 'Fira Code', 'Cascadia Code', 'Consolas', monospace;
  font-size: 0.9em;
  color: #555;
  white-space: pre-wrap;
  word-break: break-word;
  border-left: 4px solid #ccc;
  position: relative;

  &::before {
    content: 'Out[1]:';
    position: absolute;
    left: -60px;
    top: 10px;
    font-size: 0.8em;
    color: #999;
    font-family: sans-serif;
  }
`;

// Styles pour les listes dans les cellules (inchangés)
const PythonList = styled.ul`
  list-style-type: none;
  padding-left: 0;
  margin: 0;

  li {
    margin-bottom: 5px;
    color: #333;
  }
`;

const LsLinkTarget = styled.a`
  color: #88c0d0; /* Light blue for the link target */
  text-decoration: underline;
  cursor: pointer;
  &:hover {
    color: #4a90e2; /* Darker blue on hover */
  }
`;

// Styles pour les commentaires Python (inchangés)
const PythonComment = styled.span`
  color: #2e8b57;
`;

// Styles pour les chaînes de caractères Python (inchangés)
const PythonString = styled.span`
  color: #b22222;
`;

// Styles pour les mots-clés Python (inchangés)
const PythonKeyword = styled.span`
  color: #8a2be2;
  font-weight: bold;
`;

// Styles pour les noms de fonctions/classes (inchangés)
const PythonFunctionName = styled.span`
  color: #4682b4;
`;


export default function DevMlCV() {
  return (
    <DevMlCVContainer translate="no">
      <CvSectionTitle>Pour les recruteurs en Développement & Machine Learning, voici un aperçu de mes compétences en action :</CvSectionTitle>
      
      <CodeCell>
        <pre>
          <PythonKeyword>class</PythonKeyword> <PythonFunctionName>EmployéIdeal</PythonFunctionName>:
          {"\n"}    <PythonKeyword>def</PythonKeyword> __init__(<PythonKeyword>self</PythonKeyword>):
          {"\n"}        <PythonKeyword>self</PythonKeyword>.languages = [<PythonString>"Python"</PythonString>, <PythonString>"JavaScript"</PythonString>, <PythonString>"PHP"</PythonString>, <PythonString>"SQL"</PythonString>]
          {"\n"}        <PythonKeyword>self</PythonKeyword>.frameworks = [<PythonString>"Django"</PythonString>, <PythonString>"Express.js"</PythonString>, <PythonString>"React"</PythonString>]
          {"\n"}        <PythonKeyword>self</PythonKeyword>.ml = [<PythonString>"Pandas"</PythonString>, <PythonString>"Numpy"</PythonString> ,<PythonString>"Scikit-learn"</PythonString>, <PythonString>"Matplotlib"</PythonString>, <PythonString>"Seaborn"</PythonString>]
          {"\n"}        <PythonKeyword>self</PythonKeyword>.databases = [<PythonString>"MySQL"</PythonString>, <PythonString>"MongoDB"</PythonString>, <PythonString>"Access"</PythonString>]
          {"\n"}        <PythonKeyword>self</PythonKeyword>.tools = [<PythonString>"Figma"</PythonString>, <PythonString>"Git"</PythonString>, <PythonString>"Linux Bash Scripting"</PythonString>, <PythonString>"SSH"</PythonString>, <PythonString>"cron"</PythonString>]
          {"\n"}        <PythonKeyword>self</PythonKeyword>.soft_skills = [<PythonString>"Autonome"</PythonString>, <PythonString>"Curieux"</PythonString>, <PythonString>"Résilient"</PythonString>]
          {"\n"}        <PythonKeyword>self</PythonKeyword>.projects = [<PythonString>"E-learning Platform"</PythonString>, <PythonString>"App de Gestion Bibliothèque"</PythonString>, <PythonString>"App Recettes Mobile"</PythonString> ,<PythonString><LsLinkTarget href="https://github.com/Jochris7?tab=repositories" target="_blank" rel="noopener noreferrer"> Voir plus </LsLinkTarget></PythonString>]
          {"\n\n"}    <PythonKeyword>def</PythonKeyword> travailler(<PythonKeyword>self</PythonKeyword>):
          {"\n"}        <PythonKeyword>return</PythonKeyword> <PythonString>"Toujours focus, toujours prêt 💪"</PythonString>
          {"\n\n"}    <PythonKeyword>def</PythonKeyword> apprendre(<PythonKeyword>self</PythonKeyword>, sujet):
          {"\n"}        {/* CORRECTION ICI : Utilisez les backticks pour la f-string Python simulée */}
          <PythonKeyword>return</PythonKeyword> <PythonString>{`f"Apprentissage de {sujet} en cours... ✔️"`}</PythonString>
          {"\n\n"}johan = <PythonFunctionName>EmployéIdeal</PythonFunctionName>()
          {"\n"}print(johan.travailler())
        </pre>
      </CodeCell>
      
      <OutputCell>
        <pre>
          Toujours focus, toujours prêt 💪
        </pre>
      </OutputCell>

      <CodeCell>
        <pre>
          <PythonComment># Projets réalisés</PythonComment>
          {"\n"}<PythonKeyword>for</PythonKeyword> project <PythonKeyword>in</PythonKeyword> johan.projects:
          {"\n"}    print(<PythonString>"✔️ "</PythonString> + project)
        </pre>
      </CodeCell>

      <OutputCell>
        <pre>
          {"\n"}✔️ Plateforme e-learning (PHP, MySQL, JavaScript)
          {"\n"}✔️ App gestion bibliothèque (React.js, Node.js, MongoDB)
          {"\n"}✔️ App mobile recettes (React Native + API REST)
          {"\n"}✔️ Clone WhatsApp (React Native, chat UI)
          {"\n"}✔️ Dashboard de tâches (React.js, Chart.js)
          {"\n"}✔️ App gestion salon beauté (Electron.js, SQLite)
          {"\n"}✔️ Prédiction CSV (Python, Pandas, Matplotlib)
          {"\n"}✔️ Tontine App (Fintech communautaire)
          {"\n"}✔️ <LsLinkTarget href="https://github.com/Jochris7?tab=repositories" target="_blank" rel="noopener noreferrer"> Mon github </LsLinkTarget>
        </pre>
      </OutputCell>

      <CodeCell>
        <pre>
          <PythonComment># Quelques exemples d'apprentissage récent</PythonComment>
          {"\n"}print(johan.apprendre(<PythonString>"Scikit-learn"</PythonString>))
          {"\n"}print(johan.apprendre(<PythonString>"Django"</PythonString>))
        </pre>
      </CodeCell>

      <OutputCell>
        <pre>
          <PythonComment># Mes apprentissage en cours</PythonComment>
          {"\n"}Apprentissage de Docker et CI/CD en cours... ✔️
          {"\n"}Apprentissage de AWS en cours... ✔️
          {"\n"}Apprentissage de PyTorch (Deep Learning) en cours... ✔️
        </pre>
      </OutputCell>

    </DevMlCVContainer>
  );
}