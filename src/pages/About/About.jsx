import Summary from "../../components/Summary/Summary";
import "./about.scss";

export default function About() {
  return (
    <section className="about__content">
      <div className="banner">
      <img
        src="assets/about-banner.png"
        alt="Accueil-banner"
        className="banner__image"
      />
      </div>
      <div className="about__info">
        <Summary
          title="Fiabilité"
          details={
            "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
          }
        />
        <Summary
          title="Respect"
          details={
            "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          }
        />
        <Summary
          title="Service"
          details={
            "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
          }
        />
        <Summary
          title="Sécurité"
          details={
            "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
          }
        />
      </div>
    </section>
  );
}
