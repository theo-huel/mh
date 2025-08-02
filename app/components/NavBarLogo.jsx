"use client"
import React, { useState, useEffect } from 'react';
import MyButton from './MyButton.jsx'
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n.js';
import Icon from '../components/Icon.jsx';





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
