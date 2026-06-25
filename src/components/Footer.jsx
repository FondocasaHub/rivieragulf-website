import { useTranslation } from 'react-i18next';
import './Footer.css';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer" id="contatti">
      <div className="footer-content">
        <div className="footer-grid">
          <div className="footer-section">
            <h3>Riviera Gulf</h3>
            <p>{t('footer.tagline')}</p>
          </div>

          <div className="footer-section">
            <h4>Contatti</h4>
            <ul>
              <li>
                <strong>{t('footer.web')}:</strong><br />
                <a href="https://rivieragulf.it">rivieragulf.it</a>
              </li>
              <li>
                <strong>{t('footer.email')}:</strong><br />
                <a href="mailto:info@rivieragulf.it">info@rivieragulf.it</a>
              </li>
              <li>
                <strong>{t('footer.telefono')}:</strong><br />
                <a href="tel:+393937882334">+39 393 788 2334</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>{t('proprietari.title')}</h4>
            <p>{t('footer.mercati')}</p>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="divider"></div>
          <p className="copyright">{t('footer.diritti')}</p>
          <div className="footer-links">
            <a href="#privacy">{t('footer.privacy')}</a>
            <a href="#termini">{t('footer.termini')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
