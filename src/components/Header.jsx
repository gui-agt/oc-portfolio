import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../store/themeSlice';
import { setLanguage } from '../store/languageSlice';
import { FaMoon, FaSun } from 'react-icons/fa';

const Header = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);
  const language = useSelector((state) => state.language.language);

  return (
    <header className="header">
      <div className="header__container">
        <h1 className="header__logo">Guillaume<br/>Angot</h1>
        <div className="header__nav">
          <button
            onClick={() => dispatch(toggleTheme())}
            className="header__button header__button--theme"
            aria-label="Toggle theme"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
          <button
            onClick={() => dispatch(setLanguage(language === 'fr' ? 'en' : 'fr'))}
            className="header__button"
          >
            {language === 'fr' ? 'EN' : 'FR'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;