import MonBouton from './Nouv/MonBouton.jsx'
import btn from '../css/MonBouton.module.css';
import MyButton from './MyButton.jsx'
import { useTranslation } from 'react-i18next';
import Icon from './Icon';
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
            
      <FadeInOnScroll delay={0.3}>
    <h2 className="text-2xl md:text-4xl leading-tight mb-6 animate-slide-in-left" // style={{ fontFamily: 'Times New Roman, serif' }}
      >
      {t("hero.title")}
    </h2>
      </FadeInOnScroll>
<div >
  <FadeInOnScroll delay={0.6}>

        <MonBouton onClick={() => setCurrentPage('services')} variant="primary" ClassName={btn.boutonLogin} >
              <span className="ml-1">

                {t("hero.btn1")}
                </span>
          <Icon name="ChevronRight" className="inline-block w-5 h-5" />
        </MonBouton> 

        <MyButton onClick={() => setCurrentPage('contact')} variant="secondary" >
         {t("hero.btn2")}
        <Icon name="Coffee" className="inline-block w-5 h-5 ml-2 mb-1" />

        </MyButton>
        </FadeInOnScroll>

      </div>

    
  </div>
</section>

)
};
export default HeroSection;