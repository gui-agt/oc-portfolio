import { useSelector } from 'react-redux';
import imgPortraitGA from '../assets/img/portrait/portrait_guillaume_angot.webp';

const Hero = () => {

  const language = useSelector((state) => state.language.language);

  // Texte en fonction de la langue
  const texts = {
    fr: {
      title: "Développeur Front-End",
      description: "Création d'expériences web modernes et performantes",
      contact: "Me contacter",
    },
    en: {
      title: "Front-end Developer",
      description: "Creation of modern and efficient web experiences",
      contact: "Contact",
    },
  };

  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <h1 className="hero__title">{texts[language].title}</h1>
          <p className="hero__subtitle">
          {texts[language].description}
          </p>
          <a href="#contact" className="hero__cta">
            <span>{texts[language].contact}</span>
          </a>
        </div>
        <div className="hero__image-container">
          <div className="hero__image">
            <img src={imgPortraitGA} alt="Profile" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;