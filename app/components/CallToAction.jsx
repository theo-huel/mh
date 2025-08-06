
import MyButton from './MyButton.jsx'
import btn from '../css/MonBouton.module.css';
import { useTranslation } from 'react-i18next';
import Icon from './Icon';


// Composant CallToAction
const CallToAction = ({ setCurrentPage }) => {

  const { t } = useTranslation("home");


  return(
  <section className="bg-[#AD9551] text-white py-20 rounded-xl mx-auto max-w-6xl my-20 shadow-xl">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-4xl font-extrabold mb-4">{t("calltoaction.h2")}</h2>
      {/* <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
        {t("calltoaction.p")}
        </p> */}
      <MyButton onClick={() => setCurrentPage('contact')} variant="secondary" >
         {t("hero.btn2")}
        <Icon name="Coffee" className="inline-block w-5 h-5 ml-2 mb-1" />

        </MyButton>
    </div>
  </section>
)
};
export default CallToAction;


