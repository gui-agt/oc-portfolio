import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img724events from '../assets/img/projects/724-events.webp';
import imgPrintIt from '../assets/img/projects/print-it.webp';
import imgArgentBank from '../assets/img/projects/ArgentBank.webp';
import imgNinaCarducci from '../assets/img/projects/NinaCarducci.webp';

const projects = [
  {
    title: 'Print it',
    image: imgPrintIt,
    description: {
      fr: 'Site d\'une imprimerie familiale. Mise à jour HTML et CSS, et ajout de fonctionnalités supplémentaires et éléments dynamiques en Javascript',
      en: 'Family printing company\'s website: updated HTML and CSS, and addeing additional functionalities and dynamic elements using JavaScript',
    },
    link: 'https://gui-agt.github.io/oc-p5-print-it-js/',
  },
  {
    title: '724events',
    image: img724events,
    description: {
      fr: 'Débugger le site d\'une agence événementiel avec Javascript, React et ReactDevTools. Ajout et rectification de tests unitaires avec React Testing Library et Jest',
      en: 'Debugging an event agency\'s website using JavaScript, React and ReactDevTools. Adding and modifying unit tests with React Testing Library and Jest',
    },
    link: 'https://oc-p9-724events.netlify.app/',
  },
  {
    title: 'Argent Bank',
    image: imgArgentBank,
    description: {
      fr: 'Implémenter le front-end d\'une application bancaire avec React et Redux, utilisation API et modélisatiion des intéractions avec les données et transactions',
      en: 'Implemented the front-end of a banking application using React and Redux, integrating APIs, and modeling interactions with data and transactions',
    },
    link: 'https://ocargentbank.netlify.app/',
  },
  {
    title: 'Nina Carducci',
    image: imgNinaCarducci,
    description: {
      fr: 'Site portfolio de photographe: audit complet, identification problèmes de chargement, optimisation SEO et structure du code, accessibilité et amélioration de la vitesse de chargement et performance',
      en: 'Photographer\'s portfolio website: comprehensive audit, identification of loading issues, SEO optimization, code structure improvement, accessibility enhancements, and increased loading speed and performance',
    },
    link: 'https://gui-agt.github.io/oc-p8-nina-carducci/',
  },
];

const Projects = () => {
  const language = useSelector((state) => state.language.language);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <section className="projects" id="projects">
      <div className="projects__container">
        <h2 className="projects__title">
          {language === 'fr' ? 'Mes Projets' : 'My Projects'}
        </h2>
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div key={index}>
              <div className="projects__card">
                <img src={project.image} alt={project.title} />
                <div className="projects__card-content">
                  <h3 className="projects__card-title">{project.title}</h3>
                  <p className="projects__card-description">{project.description[language]}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projects__card-link"
                  >
                    {language === 'fr' ? 'Voir le projet' : 'View Project'}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Projects;
