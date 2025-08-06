import InteractiveWord from '../../components/InteractiveWord.jsx'
import { useTranslation } from 'react-i18next';
import SectionTitle from '../../components/SectionTitle.jsx'


// Page À Propos
const AboutPage = () => {
      const { t } = useTranslation("about");

  return(
  <main className="pt-10 bg-gray-50">
    <section className="py-16 container mx-auto px-6">
      <SectionTitle
        title={t("about.title")}
        subtitle={t("about.subtitle")}
        subtitle1={t("about.subtitle1")}
        subtitle2={t("about.subtitle2")}
        />


        
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-12">
         <div className="flex-1 text-center md:text-center mb-20">
        <h3 className="text-4xl font-extrabold text-gray-900 mb-2 text-center">{t("about.valeurs.h3")}</h3>
      
        <InteractiveWord/>
          </div>
       <div className="flex flex-col md:flex-row items-center md:items-start mb-12 md:mb-20 px-6 md:px-0 max-w-5xl mx-auto">
  {/* Image éventuellement à remettre plus tard */}
  {/* <img
    src="https://placehold.co/200x200/white/[#AD9551]?text=Votre+Photo"
    alt="Photo du consultant MH Business"
    className="w-48 h-48 rounded-full object-cover mb-8 md:mb-0 md:mr-12 border-4 border-[#AD9551]"
    onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/200x200/AD9452/AD9452?text=Votre+Photo"; }}
  /> */}

  <div className="flex-1 text-center md:text-center">
    <h3 className="text-4xl font-extrabold text-gray-900 mb-2">{t("about.mission.h3")}</h3>
    <h2 className="text-xl italic text-gray-600 mb-8">{t("about.mission.h2")}</h2>

    <div className="space-y-6 text-gray-700 text-lg leading-relaxed ">
      <p>{t("about.mission.p1")}</p>
      <p>{t("about.mission.pp")}</p>

      <div className="space-y-6 text-gray-700 text-left ">
        <ul className="list-disc pl-50">
          <li>{t("about.mission.pp1")}</li>
          <li>{t("about.mission.pp2")}</li>
          <li>{t("about.mission.pp3")}</li>
        </ul>

      </div>
      


      <p>{t("about.mission.p2")}</p>
              <p className="underline mb-2">{t("about.mission.p3")}</p>

      <p className="text-gray-700 text-lg font-medium text-center mb-2">
        Exemple d’objectif non SMART :
      </p>
      <div className="bg-[rgba(173,149,81,0.5)] border-l-4 border-[#AD9551] p-4 rounded-md md:text-left">

        <p className="font-semibold mb-2">{t("about.mission.ex")}</p>
      </div>
      {/* Section "Exemple" mise en avant */}
              <p className="underline mb-2">{t("about.mission.p4")}</p>
      <p className="text-gray-700 text-lg font-medium text-center mb-2">
        Exemple d’objectif  SMART :
      </p>
      <div className="bg-[rgba(173,149,81,0.5)] border-l-4 border-[#AD9551] p-4 rounded-md md:text-left">
        <p className="font-semibold mb-2">{t("about.mission.ex1")}</p>
        </div>
      </div>
    </div>
  </div>

  <div className="flex-1 text-center md:text-center">
        <h3 className="text-4xl font-extrabold text-gray-900 mb-2">{t("about.vision.h3")}</h3>
        <h2 className="text-xl italic text-gray-600 mb-8">{t("about.vision.h2")}</h2>
     
        <div className="space-y-6 text-gray-700 text-lg leading-relaxed ">
          <p>{t("about.vision.p1")}</p>
          <p>{t("about.vision.p2")}</p>

          <p className="mb-10">{t("about.vision.p3")}</p>
          <p className="underline font-bold mb-2">{t("about.vision.p4")}</p>
          <p className="mb-10">{t("about.vision.p5")}</p>

               

          <p className="text-gray-700 text-lg font-medium text-center mb-2">{t("about.vision.p6")}</p>
          <div className="bg-[rgba(173,149,81,0.5)] border-l-4 border-[#AD9551] p-4 rounded-md md:text-left">
            <p className="font-semibold mb-2">{t("about.vision.p67")}</p>
            <p>Henry Ford</p>
          </div>

          <p className="text-gray-700 text-lg font-medium text-center mb-2">{t("about.vision.p7")}</p>
          <div className="bg-[rgba(173,149,81,0.5)] border-l-4 border-[#AD9551] p-4 rounded-md md:text-left">
            <p className="font-semibold mb-2">{t("about.vision.p70")}</p>
            <p>MH Business</p>
          </div>
        </div>

  </div>
      </div>
    </section>
  </main>
)
};


export default AboutPage;