import MonBouton from './Nouv/MonBouton.jsx'
import btn from '../css/MonBouton.module.css';
import MyButton from './MyButton.jsx'
import { useTranslation } from 'react-i18next';
import Icon from './Icon';


// Composant HeroSection
const HeroSection = ({ setCurrentPage }) => {
      const { t } = useTranslation("home");

  return(


  <section className="relative bg-gradient-to-r from-[#AD9551] to-[#AD9551] text-white py-24 md:py-32 overflow-hidden">
  <div className="absolute inset-0 z-0 opacity-20">
    {/* Background image if needed */}
  </div>

  {/* ⬇️ CENTRAGE VERTICAL & HORIZONTAL ⬇️ */}
  <div className="container mx-auto px-6 relative z-10 flex flex-col justify-center items-center text-center min-h-[10vh]">
    <h2
      className="text-2xl md:text-4xl leading-tight mb-6 animate-fade-in-up"
      style={{ fontFamily: 'Times New Roman, serif' }}
    >
      {t("hero.title")}
    </h2>

    <div >
        <MonBouton onClick={() => setCurrentPage('services')} variant="primary" ClassName={btn.boutonLogin} >
              <span className="ml-1">

                {t("hero.btn1")}
                </span>
          <Icon name="ChevronRight" className="inline-block w-5 h-5" />
        </MonBouton> 
        <MyButton onClick={() => setCurrentPage('contact')} variant="secondary" >
         {t("hero.btn2")}
        </MyButton>
      </div>
  </div>
</section>

)
};
export default HeroSection;