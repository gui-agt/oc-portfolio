import { useSelector } from 'react-redux';
import { FaCode, FaSearch, FaMobile, FaTools } from 'react-icons/fa';

const services = [
  {
    icon: <FaCode />,
    title: {
      fr: 'Développement Web',
      en: 'Web Development',
    },
    description: {
      fr: 'Conception de sites web moderne et optimisés pour la performance et l\'expérience utilisateur',
      en: 'Design of modern websites optimized for performance and user experience',
    },
  },
  {
    icon: <FaSearch />,
    title: {
      fr: 'SEO - Référencement',
      en: 'Search Engine Optimization',
    },
    description: {
      fr: 'Optimisation de sites et performances pour un meilleur référencement et visibilité web',
      en: 'Website optimization and performance for improved SEO and web visibility',
    },
  },
  {
    icon: <FaMobile />,
    title: {
      fr: 'Responsive Design',
      en: 'Responsive Design',
    },
    description: {
      fr: 'Création de designs responsives qui offrent une expérience fluide et optimale sur tous les appareils',
      en: 'Creating responsive designs that deliver a seamless and optimal experience across all devices',
    },
  },
  {
    icon: <FaTools />,
    title: {
      fr: 'Maintenance',
      en: 'Maintenance',
    },
    description: {
      fr: 'Support et maintenance régulière des sites web pour garantir des performances optimales, la sécurité et un contenu à jour',
      en: 'Providing regular website maintenance to ensure optimal performance, security, and up-to-date content',
    },
  },
];

const Services = () => {
  const language = useSelector((state) => state.language.language);

  return (
    <section className="services" id="services">
      <div className="services__container">
        <h2 className="services__title">
          {language === 'fr' ? 'Compétences' : 'Skills'}
        </h2>
        <div className="services__grid">
          {services.map((service, index) => (
            <div key={index} className="services__card">
              <div className="services__card-icon">{service.icon}</div>
              <h3 className="services__card-title">{service.title[language]}</h3>
              <p className="services__card-description">{service.description[language]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;