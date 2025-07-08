import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import Acceuil from './Acceuil/Index.jsx'
import Competences from './Competences/Index.jsx'
import Contact from './Contact/Index.jsx'
import Projets from './Projets/Index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Router>
      <Routes>
        <Route path="/" element={<Acceuil />} />
        <Route path="/Competences" element={<Competences />} />
        <Route path="/Projets" element={<Projets />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  </StrictMode>,
)
