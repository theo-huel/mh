import { useTranslation } from 'react-i18next';
import MyBouton from '../components/Nouv/MonBouton.jsx';
import MonBouton from '../components/MyButton.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import HeroSection from '../components/HeroSection.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import TestimonialCard from '../components/TestimonialCard.jsx';
import PartnerLogos from '../components/PartnerLogos.jsx';
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
const HomePage = ({ setCurrentPage }) => {
  const { t } = useTranslation("home");
  

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
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            {t("about.text")}
          </p>
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
              imageSrc="/img/HVLOGO.jfif"
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
