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
      fr: 'Ajout de fonctionalités et revue en Javascript',
      en: 'Adding features and code review in JavaScript',
    },
    link: 'https://gui-agt.github.io/oc-p5-print-it-js/',
  },
  {
    title: '724events',
    image: img724events,
    description: {
      fr: 'Débugger le site d\'une agence événementiel',
      en: 'Debugging the website of an event agency build in React',
    },
    link: 'https://oc-p9-724events.netlify.app/',
  },
  {
    title: 'Argent Bank',
    image: imgArgentBank,
    description: {
      fr: 'Implémenter le front-end d\'une application bancaire avec React',
      en: 'Implementing the front-end of a banking application with React',
    },
    link: 'https://ocargentbank.netlify.app/',
  },
  {
    title: 'Nina Carducci',
    image: imgNinaCarducci,
    description: {
      fr: 'Optimisation SEO et amélioration de la performance d\'un portfolio',
      en: 'SEO optimization and performance improvement of a portfolio',
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
