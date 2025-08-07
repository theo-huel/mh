import InteractiveWord from '../../components/InteractiveWord.jsx'
import { useTranslation } from 'react-i18next';
import SectionTitle from '../../components/SectionTitle.jsx'
       
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

const FadeInOnScrollLeft = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -100 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
};

// Page À Propos
const AboutPage = () => {
      const { t } = useTranslation("about");

  return(
  <main className="pt-10 bg-gray-50">
    <section className="py-16 container mx-auto px-6">
      <FadeInOnScroll delay={0.1}>
      <SectionTitle
        title={t("about.title")}
        subtitle={t("about.subtitle")}
        subtitle1={t("about.subtitle1")}
        subtitle2={t("about.subtitle2")}
        />  
      </FadeInOnScroll>
          
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-12">
         <div className="flex-1 text-center md:text-center mb-20">
          <FadeInOnScroll delay={0.4}>
             <h3 className="text-4xl font-extrabold text-gray-900 mb-2 text-center">{t("about.valeurs.h3")}</h3>
          </FadeInOnScroll>
       <FadeInOnScroll delay={0.5}>
        <InteractiveWord/>
       </FadeInOnScroll>
        
          </div>
       <div className="flex flex-col md:flex-row items-center md:items-start mb-12 md:mb-20 px-6 md:px-0 max-w-5xl mx-auto">
  {/* Image éventuellement à remettre plus tard */}
  {/* <img
    src="https://placehold.co/200x200/white/[#AD9551]?text=Votre+Photo"
    alt="Photo du consultant MH Business"
    className="w-48 h-48 rounded-full object-cover mb-8 md:mb-0 md:mr-12 border-4 border-[#AD9551]"
    onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/200x200/AD9452/AD9452?text=Votre+Photo"; }}
  /> */}




  {/* SECTION MISSION */}
  <div className="flex-1 text-center md:text-center">
    <FadeInOnScrollLeft delay={0.2}>
      <h3 className="text-4xl font-extrabold text-gray-900 mb-2">{t("about.mission.h3")}</h3>
    <h2 className="text-xl italic text-gray-600 mb-8">{t("about.mission.h2")}</h2>
    </FadeInOnScrollLeft>

    <div className="space-y-6 text-gray-700 text-lg leading-relaxed ">
      <FadeInOnScroll delay={0.1}>
       <p>{t("about.mission.p1")}</p> 
      </FadeInOnScroll>
      <FadeInOnScroll delay={0.2}>
        <p>{t("about.mission.pp")}</p>
      </FadeInOnScroll>
      
      <FadeInOnScroll delay={0.3}>
        <ul className="list-disc text-center">
          <li>{t("about.mission.pp1")}</li>
          <li>{t("about.mission.pp2")}</li>
          <li>{t("about.mission.pp3")}</li>
        </ul>
        </FadeInOnScroll>  

      <FadeInOnScroll delay={0.2}>
        <p>{t("about.mission.p2")}</p>
        </FadeInOnScroll>
        <FadeInOnScroll delay={0.2}>
        <p className="underline mb-2">{t("about.mission.p3")}</p>  
        </FadeInOnScroll>
     <FadeInOnScroll delay={0.2}>
      <p className="text-gray-700 text-lg font-medium text-center mb-2">{t("about.mission.tex")}</p>
      </FadeInOnScroll>
      
      {/* Section "Exemple" mise en avant */}
      <FadeInOnScroll delay={0.2}>
      <div className="bg-[rgba(173,149,81,0.5)] border-l-4 border-[#AD9551] p-4 rounded-md md:text-left">
        <p className="font-semibold italic mb-2" style={{ fontFamily: 'Times, serif' }}>{t("about.mission.ex")}</p>
      </div>
      </FadeInOnScroll>
      <FadeInOnScroll delay={0.2}>
      <p className="underline mb-2">{t("about.mission.p4")}</p>
      </FadeInOnScroll>
      <FadeInOnScroll delay={0.2}>
      <p className="text-gray-700 text-lg font-medium text-center mb-2">{t("about.mission.tex1")}</p>
      </FadeInOnScroll>
      <FadeInOnScroll delay={0.2}>
        <div className="bg-[rgba(173,149,81,0.5)] border-l-4 border-[#AD9551] p-4 rounded-md md:text-left">
        <p className="font-semibold italic mb-2" style={{ fontFamily: 'Times, serif' }}>{t("about.mission.ex1")}</p>
      </div>
      </FadeInOnScroll>

      </div>
    </div>
  </div>



  {/* SECTION VISION */}
  <div className="flex-1 text-center md:text-center">
      <FadeInOnScrollLeft delay={0.2}>
        <h3 className="text-4xl font-extrabold text-gray-900 mb-2">{t("about.vision.h3")}</h3>
        <h2 className="text-xl italic text-gray-600 mb-8">{t("about.vision.h2")}</h2>
      </FadeInOnScrollLeft>
   
        <div className="space-y-6 text-gray-700 text-lg leading-relaxed ">
          <FadeInOnScroll delay={0.1}><p>{t("about.vision.p1")}</p></FadeInOnScroll>
          
          <FadeInOnScroll delay={0.1}><p>{t("about.vision.p2")}</p></FadeInOnScroll>
          <FadeInOnScroll delay={0.1}>
           <ul className="list-disc text-center">
            <li>{t("about.vision.pp1")}</li>
            <li>{t("about.vision.pp2")}</li>
            <li>{t("about.vision.pp3")}</li>
          </ul> 
          </FadeInOnScroll>
          <FadeInOnScroll delay={0.2}>
            <p className="mb-10">{t("about.vision.p3")}</p>
          </FadeInOnScroll>
          <FadeInOnScroll delay={0.2}>
            <p className="underline font-bold mb-2">{t("about.vision.p4")}</p>
          </FadeInOnScroll>
          <FadeInOnScroll delay={0.2}>
            <p className="mb-10">{t("about.vision.p5")}</p>
          </FadeInOnScroll>
          <FadeInOnScroll delay={0.2}>
            <ul className="list-disc text-center">
            <li>{t("about.vision.pp51")}</li>
            <li>{t("about.vision.pp52")}</li>
            <li>{t("about.vision.pp53")}</li>
          </ul>
          </FadeInOnScroll>
          
          <FadeInOnScroll delay={0.2}>
            <p>{t("about.vision.p6")}</p>
          </FadeInOnScroll>
          

               
          <FadeInOnScroll delay={0.2}>
            <p className="text-gray-700 text-lg font-medium text-center mb-2">{t("about.vision.p7")}</p> 
          </FadeInOnScroll>
          <FadeInOnScroll delay={0.1}>
            <div className="bg-[rgba(173,149,81,0.5)] border-l-4 border-[#AD9551] p-4 rounded-md md:text-left">
            <p className="font-semibold italic mb-2" style={{ fontFamily: 'Times, serif' }}>{t("about.vision.p77")}</p>
            <p>Henry Ford</p>
          </div>
          </FadeInOnScroll>
           <FadeInOnScroll delay={0.1}>
          <p className="text-gray-700 text-lg font-medium text-center mb-2">{t("about.vision.p8")}</p>
          </FadeInOnScroll>
          <FadeInOnScroll delay={0.1}>
            <div className="bg-[rgba(173,149,81,0.5)] border-l-4 border-[#AD9551] p-4 rounded-md md:text-left">
            <p className="font-semibold italic mb-2" style={{ fontFamily: 'Times, serif' }}>{t("about.vision.p80")}</p>
            <p>MH Business</p>
          </div>
          </FadeInOnScroll>
          
        </div>

  </div>

  {/* SECTION MON PARCOURS */}
  <div className="flex-1 text-center md:text-center mt-20">
        <FadeInOnScrollLeft delay={0.2}>
         <h3 className="text-4xl font-extrabold text-gray-900 mb-8">{t("about.parcours.h3")}</h3> 
        </FadeInOnScrollLeft>

        <div className="space-y-6 text-gray-700 text-lg leading-relaxed ">
          <FadeInOnScroll delay={0.1}>
            <p>{t("about.parcours.p1")}</p>
          </FadeInOnScroll>
          
          <FadeInOnScroll delay={0.1}>
            <p>{t("about.parcours.p2")}</p>
          </FadeInOnScroll>
          <FadeInOnScroll delay={0.1}>
           <p>{t("about.parcours.p3")}</p> 
          </FadeInOnScroll>
          <FadeInOnScroll delay={0.1}>
            <p>{t("about.parcours.p4")}</p>
          </FadeInOnScroll>
          <FadeInOnScroll delay={0.1}>
           <p>{t("about.parcours.p5")}</p> 
          </FadeInOnScroll>
          <FadeInOnScroll delay={0.1}>
          <p>{t("about.parcours.p6")}</p>
          </FadeInOnScroll>
          <FadeInOnScroll delay={0.1}>
          <p>{t("about.parcours.p7")}</p>
          </FadeInOnScroll>
          <FadeInOnScroll delay={0.1}>
          <p>{t("about.parcours.p8")}</p>
          </FadeInOnScroll>
        </div>
  </div>
      </div>
    </section>
  </main>
)
};


export default AboutPage;