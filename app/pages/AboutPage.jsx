import MonBouton from '../components/Nouv/MonBouton.jsx'
//import MyBouton from './components/MyButton.jsx'
//import Navbarlogo from './components/NavBarLogo.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import HeroSection from '../components/HeroSection.jsx'
import InteractiveWord from '../components/InteractiveWord.jsx'

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


// Page À Propos
const AboutPage = () => (
  <main className="pt-10 bg-gray-50">
    <section className="py-16 container mx-auto px-6">
      <SectionTitle
        title="À Propos de MH Business"
        subtitle="MH Business accompagne les entrepreneurs et les PME dans leur développement stratégique et commercial."
      />
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-12">
        <div className="flex flex-col md:flex-row items-center md:items-start mb-10">
          {/* <img
            src="https://placehold.co/200x200/white/[#AD9551]?text=Votre+Photo"
            alt="Photo du consultant MH Business"
            className="w-48 h-48 rounded-full object-cover mb-6 md:mb-0 md:mr-8 border-4 border-[#AD9551]"
            onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/200x200/AD9452/AD9452?text=Votre+Photo"; }}
          /> */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4 text-center">Mission</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
             Accompagner les entrepreneurs et les PME dans leur structuration, leur développement commercial et leur croissance stratégique.
              Nous transformons les idées en plans concrets et les stratégies en actions, grâce à une approche personnalisée, humaine et orientée résultats.
             </p>
          </div>
        </div>

        <h3 className="text-3xl font-bold text-gray-900 mb-6 mt-12 text-center">Vision</h3>
        
          <p>Créer un écosystème de croissance agile, où les entreprises, les indépendants et les talents collaborent pour générer un impact durable.
Nous croyons qu’un bon conseil ne se limite pas à un rapport, mais se vit sur le terrain, au plus près des réalités business.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* <div className="bg-indigo-50 p-6 rounded-lg">
            <h4 className="font-semibold text-xl text-[#AD9551] mb-3 flex items-center"><Icon name="Lightbulb" className="w-6 h-6 mr-2" /> Écoute & Compréhension</h4>
            <p className="text-gray-700">Je prends le temps de comprendre vos défis, vos objectifs et votre vision pour proposer des solutions sur mesure.</p>
          </div>
          <div className="bg-indigo-50 p-6 rounded-lg">
            <h4 className="font-semibold text-xl text-[#AD9551] mb-3 flex items-center"><Icon name="CheckCircle" className="w-6 h-6 mr-2" /> Pragmatisme & Efficacité</h4>
            <p className="text-gray-700">Mes actions sont orientées résultats, avec des solutions concrètes et rapidement applicables.</p>
          </div>
          <div className="bg-indigo-50 p-6 rounded-lg">
            <h4 className="font-semibold text-xl text-[#AD9551] mb-3 flex items-center"><Icon name="Users" className="w-6 h-6 mr-2" /> Transparence & Confiance</h4>
            <p className="text-gray-700">Une communication claire et honnête est la base d'une collaboration réussie.</p>
          </div>
          <div className="bg-indigo-50 p-6 rounded-lg">
            <h4 className="font-semibold text-xl text-[#AD9551] mb-3 flex items-center"><Icon name="Briefcase" className="w-6 h-6 mr-2" /> Réseau & Partenariats</h4>
            <p className="text-gray-700">Je m'appuie sur un réseau de professionnels de confiance pour compléter mon expertise quand nécessaire.</p>
          </div> */}

        </div>

        <h3 className="text-3xl font-bold text-gray-900 mb-6 mt-12 text-center">Valeurs</h3>
        <p className="text-gray-700 text-lg leading-relaxed mb-8">
        </p>
        <InteractiveWord/>
      </div>
    </section>
  </main>
);


export default AboutPage;