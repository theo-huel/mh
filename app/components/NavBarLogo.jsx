"use client"
import React, { useState, useEffect } from 'react';
import MyButton from './MyButton.jsx'
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n.js';


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

// Composant Navbar
const Navbarlogo = ({ setCurrentPage, logoSrc = null }) => { // Ajout de logoSrc en prop
      const { t } = useTranslation("navbar");

  const [isOpen, setIsOpen] = useState(false);
  const [showLangDropdown, setShowLangDropdown] = useState(false);

  const navItems = [
    { name: t("home.name"), page: 'home' },
    { name: t("about.name"), page: 'about' },
    { name: t("services.name"), page: 'services' },
    { name: t("team.name"), page: 'equipe' },
    { name: t("contact.name"), page: 'contact' },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full z-50 top-0 my-0 ">
      <div className="container mx-auto px-6 py-1 flex items-center ">
        
        {/* Logo ou Texte MH Business */}
        <div className="flex items-center cursor-pointer ml-4" onClick={() => setCurrentPage('home')}>
          <Image
            src="/MHBusiness.svg" // Utilise l'import de ton logo ici
            alt="Logo MH Business"
            width={150} // Définis la largeur de ton logo (en pixels)
            height={60} // Définis la hauteur de ton logo (en pixels)
            className="rounded-md" // Classes Tailwind pour le style
            priority // Pour charger le logo en priorité (important pour le LCP)
          />
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-grow justify-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href="#"
              onClick={() => setCurrentPage(item.page)}
              className="text-gray-700 hover:text-[#AD9551] font-medium transition duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>

      {/* Sélecteur de langue */}
        <div className="relative ml-4">
          <MyButton
            onClick={() => setShowLangDropdown(!showLangDropdown)}
            variant="outline"
            className="p-2 flex items-center gap-2"
          >
            <Icon name="Globe" className="w-5 h-5" />
            <span className="hidden sm:inline">Language</span>
          </MyButton>

          {showLangDropdown && (
            <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded shadow-lg z-50">
              {['fr', 'en'].map((lng) => (
                <button
                  key={lng}
                  onClick={() => {
                    i18n.changeLanguage(lng);
                    setShowLangDropdown(false);
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  {lng === 'fr' ? 'Français' : 'English'}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Bouton Prendre rdv
        <div className="hidden md:flex ml-auto">
          <MyButton onClick={() => setCurrentPage('contact')} variant="secondary" className='w-50'>
          {t("rdvbutton.text")}
        </MyButton>
        </div> */}

        {/* Mobile Menu Button */}
        <div className="md:hidden ml-auto">
          <MyButton onClick={() => setIsOpen(!isOpen)} variant="outline" className="p-2">
            {isOpen ? <Icon name="X" className="h-6 w-6" /> : <Icon name="Menu" className="h-6 w-6" />}
          </MyButton>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg py-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href="#"
              onClick={() => {
                setCurrentPage(item.page);
                setIsOpen(false);
              }}
              className="block px-6 py-3 text-gray-700 hover:bg-gray-100 hover:text-[#AD9551] transition duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};
export default Navbarlogo;
