import { useTranslation } from 'react-i18next';
import MonBouton from '../../components/MyButton.jsx';
import ServiceCard from '../../components/ServiceCard.jsx';
import HeroSection from '../../components/HeroSection.jsx';
import SectionTitle from '../../components/SectionTitle.jsx';
import TestimonialCard from '../../components/TestimonialCard.jsx';
import Icon from '../../components/Icon.jsx';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown'

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const FadeInOnScroll = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
};

const HomePage = ({ setCurrentPage }) => {
  const { t } = useTranslation("home");
    const { t : s } = useTranslation("services");


  

  return (
    <main className="pt-20">
      <FadeInOnScroll delay={0.1}>
      <HeroSection setCurrentPage={setCurrentPage} />
      </FadeInOnScroll>


      {/* Section À Propos */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
        <FadeInOnScroll delay={0.2}>
            <SectionTitle
            title={t("about.title")}
            subtitle={t("about.subtitle")}
            />
        </FadeInOnScroll>

        <FadeInOnScroll delay={0.2}>
          <div className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
          <ReactMarkdown>{t("about.text")}</ReactMarkdown>       
          </div>
          </FadeInOnScroll>

        <FadeInOnScroll delay={0.2}>
          <MonBouton onClick={() => setCurrentPage('about')} variant="primary">
            {t("about.button")} <Icon name="ChevronRight" className="inline-block ml-2 w-5 h-5" />
          </MonBouton>
        </FadeInOnScroll>
        </div>

      </section>

      {/* Section Services */}
      <section className="py-16 bg-white">
              <FadeInOnScroll delay={0.2}>

        <div className="container mx-auto px-6">
          <FadeInOnScroll delay={0.2}>
          <SectionTitle
            title={s("pageTitle")}
            subtitle={s("pageSubtitle")}
            className="transition-transform transform hover:scale-105"
          />  
          </FadeInOnScroll>
          <FadeInOnScroll delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              iconName="Globe"
              title={s("services.strategy.title")}
              description={s("services.strategy.description")}
              onClick={() => setCurrentPage("services")}
            />
            <ServiceCard
              iconName="Users"
              title={s("services.b2b.title")}
              description={s("services.b2b.description")}
              onClick={() => setCurrentPage("services")}
            />
            <ServiceCard
              iconName="Handshake"
              title={s("services.coaching.title")}
              description={s("services.admin.description")}
              onClick={() => setCurrentPage("services")}
            />
          </div>
                </FadeInOnScroll>
            <FadeInOnScroll delay={0.2}>
          <div className="text-center mt-12">
            <MonBouton onClick={() => setCurrentPage('services')} variant="primary">
              {t("services.button")} <Icon name="ChevronRight" className="inline-block ml-2 w-5 h-5" />
            </MonBouton>
          </div>
            </FadeInOnScroll>
        </div>
            </FadeInOnScroll>
      </section>

      {/* Témoignages */}
      <section className="py-16 bg-white">
              <FadeInOnScroll delay={0.2}>
        <div className="container mx-auto px-6">
          <SectionTitle
            title={t("testimonials.title")}
            subtitle={t("testimonials.subtitle")}
          />
      <div className="max-w-6xl mx-auto space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8 items-start">
            <FadeInOnScroll delay={0.2}> 
            <TestimonialCard
              quote={t("testimonials.1.quote")}
              author={t("testimonials.1.author")}
              title={t("testimonials.1.title")}
              imageSrc="/img/HVlogo.jpeg"
              imageSizeClasses="w-40 h-40"
            />
            </FadeInOnScroll>
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
            </FadeInOnScroll>
      </section>
    </main>
  );
};

export default HomePage;

