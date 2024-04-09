import CardData from "../../components/Card/Card";
import Contactform from "../../components/Mailform/Contactform";
import { ProgressBarDifferentColour } from "../../components/Progressbar/Progressbar";
import { useTypingText } from "../../components/Selfwritingtext/Selfwritingtext";
import "./home.scss";
import allTestimonialsData from "../../components/Testimonial/testimonialData.json";
import Testimonial from "../../components/Testimonial/Testimonial";

export default function Home() {
  const { word, stop, start } = useTypingText(
    ["a lifelong learner", "a problem solver", "a developer"],
    70,
    60
  );

  return (
    <>
      <section
        id="home"
        className="section section__home home-content home__content"
      >
        <div className="home__text-content">
          <p className="p-header">Welcome</p>
          <h2 className="banner-title">I am {word}</h2>
          <p className="p-header p-info">based in Paris, France.</p>
          
        </div>
        <a href="#contact" className="button button__round button-type-one"> Engagez moi</a>

        <div className="banner">
          <img
            src="https://github.com/bojidarandreev/Project-12-Portfolio/blob/main/src/assets/images/webImages/frontpage-image.jpg?raw=true"
            alt="developer illustration"
          />
        </div>
      </section>
      <section id="about-me" className="section section__aboutMe">
        <div className="text-center title">
          <h2 className="title__type-2">Sur moi</h2>
          <p className="title__2--subtitle title__absolute">
          Plus sur moi
            <span className="heading-separator-line border-bottom"></span>
          </p>
        </div>
        <div className="grid-two-columns">
          <div className="description grid-one-column">
            <h3 className="title__bicolor">
            Je m'appelle <span>Bozhidar Andreev</span>, développeur Web
            </h3>
            <p>
              Je me spécialise dans le développement web, dans lequel j'associe
              mon perfectionnisme à ma passion pour les nouvelles technologies.
              Mes objectifs sont de créer un visage en ligne parfait pour votre
              entreprise, d'obtenir un maximum de résultats dans l'espace
              Internet, ainsi que d'assurer un avantage durable dans le monde
              numérique par rapport à la concurrence.
            </p>
          </div>
          <div className="grid-one-column align__left">
            <ul className="list-style-2">
              <li>
                <span>Nom: </span>Bozhidar Andreev
              </li>
              <li>
                <span>E-mail: </span>
                <a href="mailto:andreev.bozhidar@gmail.com">
                  andreev.bozhidar@gmail.com
                </a>
              </li>
              <li>
                <span>Âge: </span>38
              </li>
              <li>
                <span>De: </span> Paris, France
              </li>
            </ul>
            <a
              href="https://drive.google.com/file/d/11z7H6oSJW28RNoG0tQMrPgR3aDYCRvW3/view?usp=sharing"
              className="button button__round button-type-two btn rounded-pill"
            >
              Télécharger CV
            </a>
          </div>
        </div>
        <ul className="grid-four-columns featured-box">
          <li>
            <span>3+</span>Années d'expérience
          </li>
          <li>
            <span>20+</span>Clients satisfaits
          </li>
          <li>
            <span>6+</span>Projets réalisés
          </li>
          <li>
            <span>26+</span>Certificats obtenus
          </li>
        </ul>
      </section>
      <section id="services" className="section section__services">
        <div className="text-center title">
          <h2 className="title__type-2">COMPÉTENCES</h2>
          <p className="title__2--subtitle title__absolute">
          Ce que je fais?
            <span className="heading-separator-line border-bottom"></span>
          </p>
        </div>
        <div className="grid-two-columns">
          <div className="single-service">
            <i className="fa-solid fa-code"></i>
            <div>
              <h3 className="title__type-3">Développement de sites Web</h3>
              <p>
                Tous les sites Web que je réalise sont adaptés aux besoins
                spécifiques de chaque client. C'est pourquoi la conception et la
                fonctionnalité de chaque projet sur lequel nous travaillons sont
                spécialement sélectionnées pour correspondre à l'entreprise et à
                la marque respectives.
              </p>
            </div>
          </div>
          <div className="single-service">
            <i className="fa-solid fa-list-check"></i>
            <div>
              <h3 className="title__type-3">
                Planification et gestion de projet
              </h3>
              <p>
                Planifier le développement d'applications Web simples et plus
                complexes. Planification respectant les dernières tendances et
                technologies pertinentes au projet. Identification des besoins
                fonctionnels et la décomposition des fonctionnalités en tâches
                spécifiques. Organisation, gestion et suivi du projet.
              </p>
            </div>
          </div>
          <div className="single-service">
            <i className="fa-solid fa-bug"></i>
            <div>
              <h3 className="title__type-3">Débogage d'un site Web.</h3>
              <p>
                Examiner le code existant, exécuter des tests pour identifier et
                comprendre les problèmes et bugs signalés dans le site web.
                Documenter les bugs et créer une recette pour tester le bon
                fonctionnement du site. Résoudre les problèmes dans le code du
                site Web.
              </p>
            </div>
          </div>
          <div className="single-service">
            <i className="fa-solid fa-gauge-high"></i>
            <div>
              <h3 className="title__type-3">SEO Optimisation</h3>
              <p>
                Optimiser un site internet afin d'améliorer ses performances, sa
                position dans Google et autres moteurs de recherche.
                Optimisation de la recherche locale.
              </p>
            </div>
          </div>
          <div className="single-service">
            <i className="fa-solid fa-glasses"></i>
            <div>
              <h3 className="title__type-3">Stratégie de référencement</h3>
              <p>
                Optimiser un site internet afin d'améliorer ses performances, sa
                position dans Google et autres moteurs de recherche.
                Optimisation de la recherche locale.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="summary" className="section summary section__summary">
        <div className="text-center title">
          <h2 className="title__type-2">aperçu</h2>
          <p className="title__2--subtitle title__absolute">
          Résumé<span className="heading-separator-line border-bottom"></span>
          </p>
        </div>
        <div className="grid-two-columns">
          <div className="resume grid-one-column">
            <h3 className="title__type-3">Mon éducation</h3>
            <div className="resume__group">
              <div className="resume__box info-box">
                <p className="resume__badge badge">2022 - 2023</p>
                <h4 className="resume__title">Certificat obtenu</h4>
                <p className="resume__text-danger">
                  Software University Learning System, Sofia, Bulgaria
                </p>
                <p className="resume__text-simple">
                  Programming Basics & Fundamentals with JavaScript.
                </p>
              </div>
              <div className="resume__box info-box">
                <p className="resume__badge badge">2002 - 2006</p>
                <h4 className="resume__title">
                  Diplôme ou qualification obtenu
                </h4>
                <p className="resume__text-danger">Informatique et anglais.</p>
                <p className="resume__text-simple">
                  Lycée d`enseignement en informatique « “Otets Paisiy” »
                  Kardzhali, Bulgarie
                </p>
              </div>
              <div className="resume__box info-box">
                <p className="resume__badge badge">2002 - 2006</p>
                <h4 className="resume__title">
                  Openclassrooms
                </h4>
                <p className="resume__text-danger">Formation developpeur web.</p>
                <p className="resume__text-simple">
                  Lycée d`enseignement en informatique « “Otets Paisiy” »
                  Kardzhali, Bulgarie
                </p>
              </div>
            </div>
          </div>
          <div className="resume grid-one-column">
            <h3 className="title__type-3">Mon expérience</h3>
            <div className="resume__group">
              <div className="resume__box info-box">
                <p className="resume__badge badge">2021</p>
                <h4 className="resume__title">Développeur web</h4>
                <p className="resume__text-danger">
                  Cabinet d'avocats « Oolith » Paris, France
                </p>
                <p className="resume__text-simple">
                  Développement de nouveaux site internet du cabinet d'avocats.
                </p>
              </div>
              <div className="resume__box info-box">
                <p className="resume__badge badge">2016 - 2017</p>
                <h4 className="resume__title">Développeur web</h4>
                <p className="resume__text-danger">
                  Cabinet d'avocats « Oolith » Paris, France
                </p>
                <p className="resume__text-simple">
                  Développement de site internet du cabinet d'avocats.
                </p>
              </div>
              <div className="resume__box info-box">
                <p className="resume__badge badge">2016</p>
                <h4 className="resume__title">Stagiaire Développeur web</h4>
                <p className="resume__text-danger">
                  Agence web « Creabilis » Toulouse
                </p>
                <p className="resume__text-simple">
                  Intégrateur web , développement de site internet.
                </p>
              </div>
              <div className="resume__box info-box">
                <p className="resume__badge badge">2013 - 2015</p>
                <h4 className="resume__title">Administrateur e-commerce</h4>
                <p className="resume__text-danger">
                  « Techno-lux » Kardzhali, Bulgarie
                </p>
                <p className="resume__text-simple">
                  Développement du site internet, création des publicités et des
                  campagnes réseaux sociaux.
                </p>
              </div>
              <div className="resume__box info-box">
                <p className="resume__badge badge">2008 - 2009</p>
                <h4 className="resume__title">Intégrateur web</h4>
                <p className="resume__text-danger">
                  Agence web « Treality » Sofia, Bulgarie
                </p>
                <p className="resume__text-simple">
                  Création des sites web et publicités animées.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid-one-columns">
          <h3 className="title__type-3">Mes compétences</h3>
          <div className="progress__loaders grid-two-columns">
            <div className="progress-wrap progress" data-progress-percent="60">
              <h4 className="progress__title">JavaScript </h4>
              <span className="progress__number">60%</span>
              <ProgressBarDifferentColour currentValue={60} maxValue={100} />
            </div>
            <div className="progress-wrap progress" data-progress-percent="45">
              <h4 className="progress__title">React </h4>
              <span className="progress__number">45%</span>
              <ProgressBarDifferentColour currentValue={45} maxValue={100} />
            </div>
            <div className="progress-wrap progress" data-progress-percent="70">
              <h4 className="progress__title">Sass </h4>
              <span className="progress__number">70%</span>
              <ProgressBarDifferentColour currentValue={70} maxValue={100} />
            </div>
            <div className="progress-wrap progress" data-progress-percent="80">
              <h4 className="progress__title">Html</h4>
              <span className="progress__number">80%</span>
              <ProgressBarDifferentColour currentValue={80} maxValue={100} />
            </div>
            <div className="progress-wrap progress" data-progress-percent="75">
              <h4 className="progress__title">Seo </h4>
              <span className="progress__number">75%</span>
              <ProgressBarDifferentColour currentValue={75} maxValue={100} />
            </div>
          </div>
        </div>
        <a
          href="https://drive.google.com/file/d/11z7H6oSJW28RNoG0tQMrPgR3aDYCRvW3/view?usp=sharing"
          className="button button__round button-type-tree btn rounded-pill"
        >
          Télécharger CV
        </a>
      </section>

      <section
        id="portfolio"
        className="section section__portfolio home__content portfolio-content"
      >
        <div className="text-center title">
          <h2 className="title__type-2">Portfolio</h2>
          <p className="title__2--subtitle title__absolute">
          Mon travail
            <span className="heading-separator-line border-bottom"></span>
          </p>
        </div>
        <CardData />
      </section>
      <section id="testimonial" className="section section__testimonial">
        <div className="text-center title">
          <h2 className="title__type-2">Témoignage</h2>
          <p className="title__2--subtitle title__absolute">
          Les clients ont dit
            <span className="heading-separator-line border-bottom"></span>
          </p>
        </div>
        <Testimonial testimonialData={allTestimonialsData} />
      </section>
      <section id="contact" className="section section__contact">
        <div className="text-center title">
          <h2 className="title__type-2">Contact</h2>
          <p className="title__2--subtitle title__absolute">
          Entrer en contact
            <span className="heading-separator-line border-bottom"></span>
          </p>
        </div>
        <div className="contact__details">
        <div className="contact__mailform grid-one-column">
          <h3 className="title__type-3">Envoyez moi un message</h3>
          <Contactform />
        </div>
        <div className="contact__info grid-two-columns grid-two-columns-asymmetrical">
          <div className=" grid-one-column">
            <h3 className="title__type-3 ">Adresse</h3>
            <div className="adress__details">
            <p className="text-3 mb-4 ">
              31 rue Guichard,
              <br />
              Cachan 94230
              <br /> Île-de-France
            </p>
            <p className="text-3 mb-1 ">
              <span className="text-primary text-4 me-2">
                <i className="fas fa-phone"></i>
              </span>
              (0033) 07 69 10 36 20
            </p>
            <p className="text-3 mb-3 ">
              <span className="text-primary text-4 me-2">
                <i className="fas fa-envelope"></i>
              </span>
              bojidarandreev@gmail.com
            </p>
            </div>
            
          </div>
        </div>
        </div>
        
      </section>
    </>
  );
}
