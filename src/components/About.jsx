import { useSelector } from 'react-redux';

const About = () => {
  const language = useSelector((state) => state.language.language);

  const aboutContent = {
    title: {
      fr: "À propos",
      en: "About",
    },
    description: {
      fr: ["Je conçois des sites <strong>performants et optimisés</strong>, alliant <strong>design impactant</strong> et <strong>stratégie SEO efficace</strong>. Mon approche repose sur l’équilibre entre créativité et efficacité technique, pour offrir des solutions qui répondent aux objectifs de visibilité et de performance.", 
      "Que ce soit pour développer des <strong>interfaces modernes</strong>, améliorer le <strong>référencement naturel</strong>, ou maximiser <strong>l’impact digital</strong>, je m’engage à transformer chaque projet en un véritable levier de croissance.",
      ],
      en: ["I design <strong>high-performing</strong> and <strong>optimized websites</strong>, combining <strong>impactful design</strong> and <strong>effective SEO strategies</strong>. My approach is based on balancing creativity and technical efficiency to deliver solutions that meet visibility and performance goals.",
      "Whether it’s developing <strong>modern interfaces</strong>, improving <strong>organic search rankings</strong>, or <strong>maximizing digital impact</strong>, I am committed to turning every project into a true growth driver."
      ]
    },
  };

  return (
    <section className="about" id="about">
      <div className="about__container">
      <h2 className="about__title">{aboutContent.title[language]}</h2>
      {aboutContent.description[language].map((paragraph, index) => (
        <p 
          key={index} 
          className="about__description"
          dangerouslySetInnerHTML={{ __html: paragraph }}
        />
      ))}
      </div>
    </section>
  );
};

export default About;