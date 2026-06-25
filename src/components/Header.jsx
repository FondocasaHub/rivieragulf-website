import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Header.css';

export default function Header() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'it' ? 'en' : 'it';
    i18n.changeLanguage(newLang);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          <img src="/images/riviera-gulf-logo.svg" alt="Riviera Gulf" className="logo-image" />
        </Link>

        <button className="menu-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" onClick={closeMenu}>{t('nav.home')}</Link>
          <Link to="/villa-limonaia" onClick={closeMenu}>{t('nav.villaLimonaia')}</Link>
          <Link to="/residenza-manuela" onClick={closeMenu}>{t('nav.residenzaManuela')}</Link>
          <Link to="/proprietari" onClick={closeMenu}>{t('nav.proprietari')}</Link>
          <a href="#contatti" onClick={closeMenu}>{t('nav.contatti')}</a>

          <button className="lang-toggle" onClick={toggleLanguage} title={t('nav.lingua')}>
            {i18n.language.toUpperCase()}
          </button>
        </nav>
      </div>
    </header>
  );
}
