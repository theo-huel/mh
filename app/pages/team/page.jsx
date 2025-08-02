
import TeamCard from '../../components/TeamCard.jsx'
import SectionTitle from '../../components/SectionTitle.jsx'
import { useTranslation } from 'react-i18next';







// Page Team
const TeamPage = () => {
    const { t } = useTranslation("team");
    
const members = [
    {
      name: "Huel Matis",
      position: t("team.members.Matis.position"),
      imageSrc: "/img/imgMatis.jpg",
            imageSrcPopup: "/img/imgMatis.jpg",

      description: t("team.members.Matis.description"),
      imageStyle: {
      objectPosition: 'left 15%',
      objectFit: 'cover',
      transform: 'scale(1)',
    },
    },
    {
      name: "Vadala Pietro",
      position: t("team.members.Pietro.position"),
      imageSrc: "/img/imgPietro.jpg",
            imageSrcPopup: "/img/imgPietroGolf.jpg",
      description: t("team.members.Pietro.description"),
      imageStyle: {
      objectPosition: 'left 20%',
      objectFit: 'cover',
      transform: 'scale(1)',
    },
    },
    {
      name: "Huel Théo",
      position: t("team.members.Theo.position"),
      imageSrc: "/img/imgTheo2.jpg",
            imageSrcPopup: "/img/imgTheo.jpg",
      description: t("team.members.Theo.description"),
      imageStyle: {
      objectPosition: 'left 20%',
      objectFit: 'cover',
      transform: 'scale(1)',
    },
    },
    // Ajoutez d'autres membres ici
  ];
  

  return(
  <main className="pt-10 bg-gray-50">
    <section className="py-16 container mx-auto px-6">
      <SectionTitle
        title= {t("team.equipe.title")}
        subtitle={t("team.equipe.subtitle")}
      />
    <div className="flex flex-wrap justify-center gap-8">
        {members.map((member, index) => (
            <TeamCard key={index} {...member} />
          ))}
      </div>
      {/* <div className="text-center mt-12 text-gray-700 text-lg">
        <p>
          {t("team.other")}
          Mon approche est flexible : je peux réaliser ces prestations directement ou vous orienter vers des partenaires de confiance de mon réseau, selon vos besoins et la complexité du projet.
        </p>
      </div> */}
    </section>
  </main>
)
};


export default TeamPage;