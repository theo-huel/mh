"use client"
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ServiceCard from '../components/ServiceCard.jsx';
import SectionTitle from '../components/SectionTitle.jsx';






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
        <SectionTitle
          title={t("pageTitle")}
          subtitle={t("pageSubtitle")}
        />

        <div className="max-w-6xl mx-auto space-y-8">
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
          <p>{t("footerNote")}</p>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
