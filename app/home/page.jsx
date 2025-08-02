"use client"

import { useTranslation } from 'react-i18next';
import MonBouton from '../components/MyButton.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import HeroSection from '../components/HeroSection.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import TestimonialCard from '../components/TestimonialCard.jsx';
import Icon from '../components/Icon.jsx';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // or 'next/router'
import ReactMarkdown from 'react-markdown'




const HomePage = ({ setCurrentPage }) => {
  const { t } = useTranslation("home");
    const router = useRouter(); // Initialize the router


    return (
    <main className="pt-20">
      <HeroSection setCurrentPage={setCurrentPage} />

{/* <button onClick={() => i18n.changeLanguage('en')}>EN</button>
<button onClick={() => i18n.changeLanguage('fr')}>FR</button> */}

      {/* Section À Propos */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <SectionTitle
            title={t("about.title")}
            subtitle={t("about.subtitle")}
          />
          <div className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
          <ReactMarkdown>{t("about.text")}</ReactMarkdown>
          </div>
          <MonBouton onClick={() => setCurrentPage('about')} variant="primary">
            {t("about.button")} <Icon name="ChevronRight" className="inline-block ml-2 w-5 h-5" />
          </MonBouton>
        </div>
      </section>

      {/* Section Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <SectionTitle
            title={t("services.title")}
            subtitle={t("services.subtitle")}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              iconName="Globe"
              title={t("services.web.title")}
              description={t("services.web.desc")}
              onClick={() => setCurrentPage("services")}
            />
            <ServiceCard
              iconName="Users"
              title={t("services.visual.title")}
              description={t("services.visual.desc")}
              onClick={() => setCurrentPage("services")}
            />
            <ServiceCard
              iconName="Lightbulb"
              title={t("services.admin.title")}
              description={t("services.admin.desc")}
              onClick={() => setCurrentPage("services")}
            />
          </div>
          <div className="text-center mt-12">
            <MonBouton onClick={() => setCurrentPage('services')} variant="outline">
              {t("services.button")} <Icon name="ChevronRight" className="inline-block ml-2 w-5 h-5" />
            </MonBouton>
          </div>
        </div>
      </section>

      {/* Section Pourquoi ? */}
      {/* <section className="py-16 bg-[#AD9551]-50">
        <div className="container mx-auto px-6">
          <SectionTitle
            title={t("why.title")}
            subtitle={t("why.subtitle")}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6 text-gray-700 text-lg">
              {["approach", "expertise", "network", "serenity"].map((key) => (
                <div className="flex items-start" key={key}>
                  <Icon name="CheckCircle" className="w-7 h-7 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <p>
                    <strong className="text-gray-900">{t(`why.${key}.title`)}</strong> {t(`why.${key}.desc`)}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <img
                src="https://placehold.co/600x400/E0E7FF/4F46E5?text=Pourquoi+MH+Business%3F"
                alt={t("why.imageAlt")}
                className="rounded-xl shadow-lg w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </section> */}

      {/* Témoignages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <SectionTitle
            title={t("testimonials.title")}
            subtitle={t("testimonials.subtitle")}
          />
      <div className="max-w-6xl mx-auto space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8 items-start">
            <TestimonialCard
              quote={t("testimonials.1.quote")}
              author={t("testimonials.1.author")}
              title={t("testimonials.1.title")}
              imageSrc="/img/HVlogo.jpeg"
              imageSizeClasses="w-40 h-40"
            />
            {/* <TestimonialCard
              quote={t("testimonials.2.quote")}
              author={t("testimonials.2.author")}
              title={t("testimonials.2.title")}
              imageSrc="https://placehold.co/96x96/FFFFFF/AD9551?text=ML"
            />
            <TestimonialCard
              quote={t("testimonials.3.quote")}
              author={t("testimonials.3.author")}
              title={t("testimonials.3.title")}
              imageSrc="https://placehold.co/96x96/AD9551/00000?text=CV"
            /> */}
        </div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
