"use client"
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ServiceCard from '../../components/ServiceCard.jsx';
import SectionTitle from '../../components/SectionTitle.jsx';
import ContactPage from '../contact/ContactPage.jsx'

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const FadeInOnScroll = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: -100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
};



const FadeInOnScrollBottom = ({ children, delay = 0 }) => {
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



const ServicesPage = () => {
  const { t } = useTranslation("services");
  const [openIndex, setOpenIndex] = useState(null);

  const toggleCard = (index) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  const services = [
    {
      iconName: "Globe",
      title: t("services.strategy.title"),
      description: t("services.strategy.description"),
    },
    {
      iconName: "Users",
      title: t("services.b2b.title"),
      description: t("services.b2b.description"),
    },
    {
      iconName: "Handshake",
      title: t("services.coaching.title"),
      description: t("services.coaching.description"),
    },
    {
      iconName: "Network",
      title: t("services.network.title"),
      description: t("services.network.description"),
    },
    {
      iconName: "Laptop",
      title: t("services.training.title"),
      description: t("services.training.description"),
    }
  ];

  return (
    <main className="pt-10 bg-gray-50">
      <section className="py-16 container mx-auto px-6">
        <FadeInOnScroll delay={0.2}>
        <SectionTitle
          title={t("pageTitle")}
          subtitle={t("pageSubtitle")}
        />
        </FadeInOnScroll>
        <div className="max-w-6xl mx-auto space-y-8">
          <FadeInOnScroll delay={0.3}>
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
          </FadeInOnScroll>
          <FadeInOnScroll delay={0.4}>
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
          </FadeInOnScroll>
          <FadeInOnScrollBottom delay={0.2}>
          <div className="text-center mt-12 text-gray-700 text-lg">
            <p>{t("footerNote")}</p>
          </div>
          </FadeInOnScrollBottom>
        </div>
        
          <FadeInOnScrollBottom delay={1}>
            <ContactPage/>
          </FadeInOnScrollBottom>
          

      </section>
    </main>
  );
};

export default ServicesPage;
