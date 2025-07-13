"use client"

import React, { useState, useEffect } from 'react';
import MonBouton from './components/Nouv/MonBouton.jsx'
import MyBouton from './components/MyButton.jsx'
import Navbarlogo from './components/NavBarLogo.jsx'
import Footer from './components/Footer.jsx'
import HeroSection from './components/HeroSection.jsx'
import ServiceCard from './components/ServiceCard.jsx'





import SectionTitle from './components/SectionTitle.jsx'
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







// Composant CallToAction
const CallToAction = ({ setCurrentPage }) => (
  <section className="bg-indigo-600 text-white py-20 rounded-xl mx-auto max-w-6xl my-20 shadow-xl">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-4xl font-extrabold mb-4">Prêt à propulser votre entreprise ?</h2>
      <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
        Que ce soit pour un site web, une identité visuelle forte ou une meilleure gestion, TH Business est là pour vous.
      </p>
      <MonBouton onClick={() => setCurrentPage('contact')} variant="secondary">
        Contactez-moi dès aujourd'hui !
      </MonBouton>
    </div>
  </section>
);

// Composant TestimonialCard
const TestimonialCard = ({ quote, author, title, imageSrc }) => (
  <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center border border-gray-100">
    <img
      src={imageSrc}
      alt={`Photo de ${author}`}
      className="w-24 h-24 rounded-full object-cover mb-6 border-4 border-indigo-200"
      onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/96x96/E0E7FF/4F46E5?text=Client"; }}
    />
    <Icon name="Quote" className="w-10 h-10 text-indigo-500 mb-4" />
    <p className="text-gray-700 italic mb-4 text-lg">"{quote}"</p>
    <p className="font-bold text-gray-900">{author}</p>
    <p className="text-gray-500 text-sm">{title}</p>
  </div>
);

// --- Pages du Site ---

// Page d'Accueil
const HomePage = ({ setCurrentPage }) => (
  <main className="pt-20"> {/* Ajout de padding-top pour éviter que la navbar fixe ne recouvre le contenu */}
    <HeroSection setCurrentPage={setCurrentPage} />

    {/* Section À Propos (aperçu) */}
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <SectionTitle
          title="Qui est TH Business ?"
          subtitle="Votre partenaire dédié à la réussite entrepreneuriale."
        />
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
          TH Business est né de la volonté d'accompagner les entrepreneurs dans la concrétisation de leurs projets. Que vous soyez au début de votre aventure ou en phase de croissance, je vous apporte les outils et le soutien nécessaires pour atteindre vos objectifs. Mon approche est personnalisée, pragmatique et orientée résultats.
        </p>
        <MonBouton onClick={() => setCurrentPage('about')} variant="primary">
          En savoir plus sur TH Business <Icon name="ChevronRight" className="inline-block ml-2 w-5 h-5" />
        </MonBouton>
      </div>
    </section>

    {/* Section Services (aperçu) */}
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle
          title="Mes Services Clés"
          subtitle="Une offre complète pour propulser votre entreprise."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            iconName="Globe"
            title="Création de Sites Web"
            description="Conception et développement de sites web modernes, performants et optimisés pour le référencement, avec Next.js, React et Tailwind CSS."
          />
          <ServiceCard
            iconName="Printer"
            title="Identité Visuelle & Impression"
            description="Création de logos, chartes graphiques et gestion de l'impression de vos supports (cartes de visite, flyers, enseignes)."
          />
          <ServiceCard
            iconName="BookOpen"
            title="Gestion Administrative & Comptable"
            description="Aide à l'organisation administrative, mise en place de processus et mise en relation avec des experts-comptables."
          />
        </div>
        <div className="text-center mt-12">
          <MonBouton onClick={() => setCurrentPage('services')} variant="outline">
            Voir tous les services <Icon name="ChevronRight" className="inline-block ml-2 w-5 h-5" />
          </MonBouton>
        </div>
      </div>
    </section>

    {/* Section Pourquoi choisir TH Business ? */}
    <section className="py-16 bg-indigo-50">
      <div className="container mx-auto px-6">
        <SectionTitle
          title="Pourquoi choisir TH Business ?"
          subtitle="Des avantages concrets pour votre développement."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 text-gray-700 text-lg">
            <div className="flex items-start">
              <Icon name="CheckCircle" className="w-7 h-7 text-green-500 mr-3 mt-1 flex-shrink-0" />
              <p>
                <strong className="text-gray-900">Approche Personnalisée :</strong> Chaque accompagnement est unique, adapté à vos besoins spécifiques et à la réalité de votre entreprise.
              </p>
            </div>
            <div className="flex items-start">
              <Icon name="CheckCircle" className="w-7 h-7 text-green-500 mr-3 mt-1 flex-shrink-0" />
              <p>
                <strong className="text-gray-900">Expertise Multiple :</strong> Bénéficiez d'un large éventail de compétences, de la technique web au conseil stratégique.
              </p>
            </div>
            <div className="flex items-start">
              <Icon name="CheckCircle" className="w-7 h-7 text-green-500 mr-3 mt-1 flex-shrink-0" />
              <p>
                <strong className="text-gray-900">Réseau de Confiance :</strong> Accédez à un réseau de partenaires qualifiés pour les besoins que je ne gère pas directement.
              </p>
            </div>
            <div className="flex items-start">
              <Icon name="CheckCircle" className="w-7 h-7 text-green-500 mr-3 mt-1 flex-shrink-0" />
              <p>
                <strong className="text-gray-900">Gain de Temps et Sérénité :</strong> Déléguez les tâches complexes pour vous concentrer sur votre cœur de métier.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            {/* Placeholder image for this section */}
            <img
              src="https://placehold.co/600x400/E0E7FF/4F46E5?text=Pourquoi+TH+Business%3F"
              alt="Illustration des avantages"
              className="rounded-xl shadow-lg w-full max-w-md"
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/E0E7FF/4F46E5?text=Image+Avantages"; }}
            />
          </div>
        </div>
      </div>
    </section>

    {/* Section Témoignages (aperçu) */}
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle
          title="Ce que disent mes clients"
          subtitle="La satisfaction de mes clients, ma plus grande fierté."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard
            quote="TH Business a transformé ma présence en ligne. Mon nouveau site est magnifique et attire plus de clients que jamais !"
            author="Sophie D."
            title="Fondatrice, 'Les Délices de Sophie'"
            imageSrc="https://placehold.co/96x96/E0E7FF/4F46E5?text=SD"
          />
          <TestimonialCard
            quote="Grâce à l'accompagnement de TH Business, la gestion administrative de mon entreprise est enfin fluide. Un vrai soulagement !"
            author="Marc L."
            title="Gérant, 'Solutions BTP'"
            imageSrc="https://placehold.co/96x96/E0E7FF/4F46E5?text=ML"
          />
          <TestimonialCard
            quote="Le conseil stratégique de TH Business a été crucial pour le lancement de ma marque. Je recommande vivement !"
            author="Clara V."
            title="Créatrice, 'Atelier Clara'"
            imageSrc="https://placehold.co/96x96/E0E7FF/4F46E5?text=CV"
          />
        </div>
      </div>
    </section>

    <CallToAction setCurrentPage={setCurrentPage} />
  </main>
);

// Page À Propos
const AboutPage = () => (
  <main className="pt-20 bg-gray-50">
    <section className="py-16 container mx-auto px-6">
      <SectionTitle
        title="À Propos de TH Business"
        subtitle="Mon parcours, ma philosophie, mon engagement."
      />
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-12">
        <div className="flex flex-col md:flex-row items-center md:items-start mb-10">
          <img
            src="https://placehold.co/200x200/E0E7FF/4F46E5?text=Votre+Photo"
            alt="Photo du consultant TH Business"
            className="w-48 h-48 rounded-full object-cover mb-6 md:mb-0 md:mr-8 border-4 border-indigo-200"
            onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/200x200/E0E7FF/4F46E5?text=Votre+Photo"; }}
          />
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4 text-center md:text-left">Mon Histoire et ma Mission</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Après plusieurs années d'expérience dans divers domaines liés à l'entrepreneuriat (développement web, marketing digital, gestion de projet), j'ai constaté un besoin récurrent chez les petites et moyennes entreprises : un accompagnement global et pragmatique. C'est ainsi qu'est né TH Business. Ma mission est de simplifier la vie des entrepreneurs en leur fournissant les outils et les compétences nécessaires pour se concentrer sur ce qu'ils font de mieux : développer leur activité.
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
          Ma vision pour TH Business est de devenir le point de contact privilégié des entrepreneurs cherchant un accompagnement global et personnalisé. Je veux que chaque client se sente soutenu, compris et équipé pour faire face aux défis du monde des affaires.
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
          title="Contactez TH Business"
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
              TH Business
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
      {/* Intégration de Tailwind CSS via CDN */}
      <script src="https://cdn.tailwindcss.com"></script>
      {/* Configuration Tailwind pour utiliser la police Inter (si nécessaire, sinon par défaut) */}
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
