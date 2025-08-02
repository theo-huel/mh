"use client"
import React, { useState, useEffect } from 'react';
import MonBouton from './components/Nouv/MonBouton.jsx'
import MyBouton from './components/MyButton.jsx'
import Navbarlogo from './components/NavBarLogo.jsx'
import Footer from './components/Footer.jsx'
import HeroSection from './components/HeroSection.jsx'
import ServiceCard from './components/ServiceCard.jsx'
import CallToAction from './components/CallToAction.jsx'
import SectionTitle from './components/SectionTitle.jsx'
import TestimonialCard from './components/TestimonialCard.jsx'
import HomePage from './pages/home/HomePage.jsx'
import AboutPage from './pages/about/AboutPage.jsx'
import ServicesPage from './pages/services/ServicesPage.jsx'
import TeamPage from './pages/team/TeamPage.jsx'
import ContactPage from './pages/contact/ContactPage.jsx'
import ClientsLogos from './components/ClientsLogos.jsx';

// Composant principal de l'application
export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Effet pour gérer le défilement vers le haut lors du changement de page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />;
      case 'about':
        return <AboutPage />;
      case 'services':
        return <ServicesPage />;
        case 'equipe':
        return <TeamPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="font-sans antialiased text-gray-900 pt-19">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
          body {
            font-family: 'Inter', sans-serif;
          }
          /* Animations personnalisées Tailwind */
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fadeIn 0.6s ease-out forwards;
          }
          .animate-fade-in-up {
            animation: fadeInUp 0.8s ease-out forwards;
          }
          .delay-100 { animation-delay: 0.1s; }
          .delay-200 { animation-delay: 0.2s; }
          .delay-300 { animation-delay: 0.3s; }
          .delay-400 { animation-delay: 0.4s; }
          .delay-500 { animation-delay: 0.5s; }
        `}
      </style>

      <Navbarlogo setCurrentPage={setCurrentPage} />
      {renderPage()}
      <CallToAction setCurrentPage={setCurrentPage} /> {/* CTA en bas de chaque page */}
      <ClientsLogos/>

      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}