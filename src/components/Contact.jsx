import { useSelector } from 'react-redux';
import { FaLinkedin, FaGithub, FaSquareXTwitter, FaEnvelope } from 'react-icons/fa6';


const Contact = () => {
  const language = useSelector((state) => state.language.language);

  // text depending the language
  const texts = {
    fr: {
      title: "Contact & Réseaux Sociaux",
      description: "N'hésitez pas à me contacter pour discuter de vos projets",
    },
    en: {
      title: "Contact & Social Networks",
      description: "Feel free to reach out to discuss your projects",
    },
  };

  return (
    <section className="contact" id="contact">
      <div className="contact__container">
        <h2 className="contact__title">{texts[language].title}</h2>
        <div className="contact__content">
          <div className="contact__social">
            <a
              href="https://www.linkedin.com/in/guillaume-angot-609b8274"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__social-link"
              aria-label="linkedin-link"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/gui-agt"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__social-link"
              aria-label="github-link"
            >
              <FaGithub />
            </a>
            <a
              href="https://x.com/Glm_code"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__social-link"
              aria-label="xtwitter-link"
            >
              <FaSquareXTwitter />
            </a>
            <a
              href="mailto:guillaumeangot@hotmail.fr"
              className="contact__social-link"
              aria-label="email-link"
            >
              <FaEnvelope />
            </a>
          </div>
          <p className="contact__text">{texts[language].description}</p>
          <p className="contact__email">guillaumeangot@hotmail.fr</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;