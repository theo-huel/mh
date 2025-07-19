import MonBouton from '../components/Nouv/MonBouton.jsx'
//import MyBouton from './components/MyButton.jsx'
//import Navbarlogo from './components/NavBarLogo.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import HeroSection from '../components/HeroSection.jsx'

import SectionTitle from '../components/SectionTitle.jsx'
import TestimonialCard from '../components/TestimonialCard.jsx'

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




import { useState } from 'react';
const ServicesPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleCard = (index) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  const services = [
    {
      iconName: "Globe",
      title: "Stratégie d’entreprise & Structuration",
      description: `• Diagnostic stratégique (SWOT, Business Model Canvas, etc.)
• Clarification de la vision, de la mission et des objectifs
• Structuration de l’offre, de l’organisation interne et des priorités
• Mise en place de KPIs et d’un plan d’action`
    },
    {
      iconName: "Users",
      title: "Développement commercial B2B",
      description: `• Création ou optimisation de la stratégie commerciale
• Définition des personas cibles
• Construction d’un tunnel d’acquisition
• Outils d’aide à la vente, pitch, formation des équipes
• Mise en place de partenariats stratégiques`
    },
    {
      iconName: "Briefcase",
      title: "Accompagnement opérationnel & Coaching",
      description: `• Suivi d’indicateurs, reporting, ajustements
• Coaching de dirigeant ou d’équipe commerciale`
    },
    {
      iconName: "Lightbulb",
      title: "Mise en relation & réseau professionnel",
      description: `• Mise en lien avec des commerciaux indépendants, experts ou prestataires
• Sourcing de stagiaires et jeunes talents (marketing, finance, RH…)
• Mise en relation pour projets spécifiques (vente, achat, partenariat)`
    },
    {
      iconName: "Users",
      title: "Formations & Ateliers stratégiques",
      description: `• Ateliers sur-mesure (stratégie, business model, prospection…)
• Formations à la vente B2B
• Séminaires pour dirigeants ou commerciaux`
    }
  ];

  return (
    <main className="pt-10 bg-gray-50">
      <section className="py-16 container mx-auto px-6">
        <SectionTitle
          title="Nos Services d'Accompagnement"
          subtitle="Une expertise complète pour chaque étape de votre développement."
        />
<div className="max-w-6xl mx-auto space-y-8">
  {/* Ligne 1 : 3 cartes */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
    {services.slice(0, 3).map((service, index) => (
      <ServiceCard
        key={index}
        {...service}
        isOpen={openIndex === index}
        onToggle={() => toggleCard(index)}
      />
    ))}
  </div>

  {/* Ligne 2 : cartes restantes, centrées */}
  {services.length > 3 && (
    <div className="flex flex-wrap justify-center gap-8">
      {services.slice(3).map((service, index) => (
        <ServiceCard
          key={index + 3}
          {...service}
          isOpen={openIndex === index + 3}
          onToggle={() => toggleCard(index + 3)}
        />
      ))}
    </div>
  )}
</div>


        <div className="text-center mt-12 text-gray-700 text-lg">
          <p>
            Mon approche est flexible : je peux réaliser ces prestations directement ou vous orienter vers des partenaires de confiance de mon réseau, selon vos besoins et la complexité du projet.
          </p>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
