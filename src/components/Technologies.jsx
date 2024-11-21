import { useSelector } from 'react-redux';
import { FaReact, FaNode, FaSass, FaGithub } from 'react-icons/fa';
import { SiJavascript, SiVercel, SiFigma, SiJest } from 'react-icons/si';
import figmaIcon from '../assets/icon/figma-icon.webp'


const technologies = [
  { icon: <FaReact className="react-icon"/>, name: { fr: 'React', en: 'React' }, link: 'https://reactjs.org' },
  { icon: <SiJavascript className="js-icon"/>, name: { fr: 'JavaScript', en: 'JavaScript' }, link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { icon: <FaSass className="sass-icon"/>, name: { fr: 'Sass', en: 'Sass' }, link: 'https://sass-lang.com' },
  { icon: <FaNode className="node-icon"/>, name: { fr: 'Node.js', en: 'Node.js' }, link: 'https://nodejs.org' },
  { icon: <FaGithub className="github-icon"/>, name: { fr: 'GitHub', en: 'GitHub' }, link: 'https://github.com' },
  { icon: <SiVercel className="vercel-icon"/>, name: { fr: 'Vercel', en: 'Vercel' }, link: 'https://vercel.com' },
  {
    icon: (
      <div className="figma-icon-wrapper">
        <SiFigma className="figma-icon figma-icon-black"/>
        <img src={figmaIcon} alt="Figma" className="figma-icon figma-icon-colored" />
      </div>
    ),
    name: { fr: 'Figma', en: 'Figma' },
    link: 'https://figma.com',
  },
  { icon: <SiJest className="jest-icon"/>, name: { fr: 'Jest', en: 'Jest' }, link: 'https://jestjs.io' },
];

const Technologies = () => {
  const language = useSelector((state) => state.language.language);

  return (
    <section className="technologies" id="technologies">
      <div className="technologies__container">
        <h2 className="technologies__title">
          {language === 'fr' ? 'Technologies & Outils' : 'Technologies & Tools'}
        </h2>
        <div className="technologies__grid">
          {technologies.map((tech, index) => (
            <a
              key={index}
              href={tech.link}
              target="_blank"
              rel="noopener noreferrer"
              className="technologies__item"
            >
              <div className="technologies__item-icon">{tech.icon}</div>
              <span className="technologies__item-name">{tech.name[language]}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
