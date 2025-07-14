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
import HomePage from './pages/HomePage.jsx'


import btn from './css/MonBouton.module.css';

// Import des icônes Lucide pour une meilleure esthétique
// Pour que Lucide React fonctionne dans cet environnement, nous allons simuler son chargement via un script
 //import { Home, Info, Briefcase, Mail, ChevronRight, Menu, X, Globe, Printer, BookOpen, Users, Lightbulb, CheckCircle, Quote } from 'lucide-react';

// Simulation des composants d'icônes Lucide pour cet environnement
const Icon = ({ name, className }) => {
  // Une implémentation simple pour afficher un caractère ou un SVG si possible,
  // ou un fallback si l'icône n'est pas directement disponible.
  // Dans un vrai projet React/Next.js, vous importeriez les icônes de 'lucide-react'
  // et utiliseriez <Home className={className} /> etc.
  const icons = {
    Home: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
    Info: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>,
    Briefcase: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/><path d="M12 12h.01"/></svg>,
    Mail: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>,
    ChevronRight: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>,
    Menu: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>,
    X: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>,
    Globe: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>,
    Printer: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect width="12" height="8" x="6" y="14" rx="2"/></svg>,
    BookOpen: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 0 3-3h6z"/></svg>,
    Users: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    Lightbulb: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 6c0 1.3.5 2.6 1.5 3.5.8.8 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 22v-4"/></svg>,
    CheckCircle: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>,
    Quote: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 2v10c0 2.25 2 4 5 4Z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2h-4c-1.25 0-2 .75-2 2v10c0 2.25 2 4 5 4Z"/></svg>,
  };
  const SpecificIcon = icons[name];
  return SpecificIcon ? <SpecificIcon className={className} /> : <span className={className}>[Icône]</span>;
};


// --- Pages du Site ---


// Page À Propos
const AboutPage = () => (
  <main className="pt-20 bg-gray-50">
    <section className="py-16 container mx-auto px-6">
      <SectionTitle
        title="À Propos de MH Business"
        subtitle="Mon parcours, ma philosophie, mon engagement."
      />
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-12">
        <div className="flex flex-col md:flex-row items-center md:items-start mb-10">
          <img
            src="https://placehold.co/200x200/E0E7FF/4F46E5?text=Votre+Photo"
            alt="Photo du consultant MH Business"
            className="w-48 h-48 rounded-full object-cover mb-6 md:mb-0 md:mr-8 border-4 border-indigo-200"
            onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/200x200/E0E7FF/4F46E5?text=Votre+Photo"; }}
          />
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4 text-center md:text-left">Mon Histoire et ma Mission</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Après plusieurs années d'expérience dans divers domaines liés à l'entrepreneuriat (développement web, marketing digital, gestion de projet), j'ai constaté un besoin récurrent chez les petites et moyennes entreprises : un accompagnement global et pragmatique. C'est ainsi qu'est né MH Business. Ma mission est de simplifier la vie des entrepreneurs en leur fournissant les outils et les compétences nécessaires pour se concentrer sur ce qu'ils font de mieux : développer leur activité.
            </p>
          </div>
        </div>

        <h3 className="text-3xl font-bold text-gray-900 mb-6 mt-12 text-center">Ma Philosophie de Travail</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-indigo-50 p-6 rounded-lg">
            <h4 className="font-semibold text-xl text-indigo-700 mb-3 flex items-center"><Icon name="Lightbulb" className="w-6 h-6 mr-2" /> Écoute & Compréhension</h4>
            <p className="text-gray-700">Je prends le temps de comprendre vos défis, vos objectifs et votre vision pour proposer des solutions sur mesure.</p>
          </div>
          <div className="bg-indigo-50 p-6 rounded-lg">
            <h4 className="font-semibold text-xl text-indigo-700 mb-3 flex items-center"><Icon name="CheckCircle" className="w-6 h-6 mr-2" /> Pragmatisme & Efficacité</h4>
            <p className="text-gray-700">Mes actions sont orientées résultats, avec des solutions concrètes et rapidement applicables.</p>
          </div>
          <div className="bg-indigo-50 p-6 rounded-lg">
            <h4 className="font-semibold text-xl text-indigo-700 mb-3 flex items-center"><Icon name="Users" className="w-6 h-6 mr-2" /> Transparence & Confiance</h4>
            <p className="text-gray-700">Une communication claire et honnête est la base d'une collaboration réussie.</p>
          </div>
          <div className="bg-indigo-50 p-6 rounded-lg">
            <h4 className="font-semibold text-xl text-indigo-700 mb-3 flex items-center"><Icon name="Briefcase" className="w-6 h-6 mr-2" /> Réseau & Partenariats</h4>
            <p className="text-gray-700">Je m'appuie sur un réseau de professionnels de confiance pour compléter mon expertise quand nécessaire.</p>
          </div>
        </div>

        <h3 className="text-3xl font-bold text-gray-900 mb-6 mt-12 text-center">Mon Réseau et Ma Vision</h3>
        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          Je crois fermement en la force du collectif. C'est pourquoi, pour certains besoins spécifiques qui dépassent mon champ d'action direct, je n'hésite pas à vous mettre en relation avec des partenaires fiables et reconnus dans leur domaine (experts-comptables, graphistes spécialisés, imprimeurs, etc.). Mon objectif est toujours de vous apporter la meilleure solution, qu'elle vienne de moi ou de mon réseau.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          Ma vision pour MH Business est de devenir le point de contact privilégié des entrepreneurs cherchant un accompagnement global et personnalisé. Je veux que chaque client se sente soutenu, compris et équipé pour faire face aux défis du monde des affaires.
        </p>
      </div>
    </section>
  </main>
);

// Page Services
const ServicesPage = () => (
  <main className="pt-20 bg-gray-50">
    <section className="py-16 container mx-auto px-6">
      <SectionTitle
        title="Mes Services d'Accompagnement"
        subtitle="Une expertise complète pour chaque étape de votre développement."
      />
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ServiceCard
          iconName="Globe"
          title="Création & Refonte de Sites Web"
          description="Développement de sites vitrine, e-commerce ou applications web sur mesure. Design moderne, responsive et optimisation SEO. Utilisation des dernières technologies comme Next.js, React et Tailwind CSS."
        />
        <ServiceCard
          iconName="Printer"
          title="Identité Visuelle & Supports Imprimés"
          description="Création de votre logo, charte graphique complète, cartes de visite, flyers, brochures, et gestion de l'impression de vos supports de communication."
        />
        <ServiceCard
          iconName="BookOpen"
          title="Gestion Administrative & Comptable"
          description="Mise en place de processus administratifs efficaces, aide à la facturation, suivi des paiements, et mise en relation avec des experts-comptables pour une gestion financière sereine."
        />
        <ServiceCard
          iconName="Lightbulb"
          title="Conseil en Stratégie Digitale"
          description="Audit de votre présence en ligne, conseils pour votre stratégie de contenu, gestion des réseaux sociaux et optimisation de votre visibilité sur internet."
        />
        <ServiceCard
          iconName="Users"
          title="Accompagnement Commercial & Marketing"
          description="Définition de votre proposition de valeur, aide à la prospection, optimisation de vos argumentaires de vente et mise en place d'actions marketing ciblées."
        />
        <ServiceCard
          iconName="Briefcase"
          title="Conseil Généraliste & Stratégique"
          description="Un regard extérieur pour vous aider à prendre les bonnes décisions, structurer vos projets, et surmonter les défis du quotidien entrepreneurial."
        />
      </div>
      <div className="text-center mt-12 text-gray-700 text-lg">
        <p>
          Mon approche est flexible : je peux réaliser ces prestations directement ou vous orienter vers des partenaires de confiance de mon réseau, selon vos besoins et la complexité du projet.
        </p>
      </div>
    </section>
  </main>
);

// Page Contact
const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Envoi en cours...');
    // Ici, dans un vrai Next.js, vous enverriez ces données à une API ou un service comme Formspree.
    // Pour cette démo, nous allons juste simuler un envoi réussi.
    console.log('Données du formulaire:', formData);

    setTimeout(() => {
      setStatus('Message envoyé avec succès ! Je vous recontacterai bientôt.');
      setFormData({ name: '', email: '', subject: '', message: '' }); // Réinitialiser le formulaire
    }, 1500);
  };

  return (
    <main className="pt-20 bg-gray-50">
      <section className="py-16 container mx-auto px-6">
        <SectionTitle
          title="Contactez MH Business"
          subtitle="Discutons de votre projet et de la manière dont je peux vous aider."
        />
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Nom Complet</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Adresse Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Sujet</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Votre Message</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
              ></textarea>
            </div>
            <MonBouton type="submit" className="w-full">
              Envoyer le Message
            </MonBouton>
            {status && (
              <p className={`mt-4 text-center ${status.includes('succès') ? 'text-green-600' : 'text-red-600'}`}>
                {status}
              </p>
            )}
          </form>

          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Informations Directes</h3>
            <p className="text-gray-700 text-lg mb-2">
              <Icon name="Mail" className="inline-block w-6 h-6 mr-2 text-indigo-600" />
              Email: contact@thbusiness.com
            </p>
            <p className="text-gray-700 text-lg">
              <Icon name="Briefcase" className="inline-block w-6 h-6 mr-2 text-indigo-600" />
              MH Business
            </p>
            <p className="text-gray-700 text-lg mt-2">
              Je m'engage à vous répondre dans les plus brefs délais.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};





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
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="font-sans antialiased text-gray-900">
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
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}
