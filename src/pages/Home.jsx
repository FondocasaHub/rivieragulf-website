import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Home.css';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Riviera Gulf</h1>
          <p className="hero-tagline">{t('hero.tagline')}</p>
          <p className="hero-subtitle">{t('hero.subtitle')}</p>
          <Link to="/proprietari" className="btn btn-primary">
            {t('hero.cta')}
          </Link>
        </div>
      </section>

      {/* Chi Siamo Section */}
      <section className="section">
        <div className="container-sm">
          <h2>{t('home.chi_siamo')}</h2>
          <div className="divider divider-center"></div>
          <p className="intro-text">{t('home.chi_siamo_desc')}</p>

          <div className="features-grid">
            <div className="feature">
              <h3>25%</h3>
              <p className="feature-label">Fee sul Realizzato</p>
              <p className="feature-desc">{t('proprietari.fee_desc')}</p>
            </div>
            <div className="feature">
              <h3>€0</h3>
              <p className="feature-label">Costi Fissi</p>
              <p className="feature-desc">{t('proprietari.costi_desc')}</p>
            </div>
            <div className="feature">
              <h3>24/7</h3>
              <p className="feature-label">Assistenza Ospiti</p>
              <p className="feature-desc">{t('proprietari.assistenza_desc')}</p>
            </div>
            <div className="feature">
              <h3>14gg</h3>
              <p className="feature-label">Go-Live</p>
              <p className="feature-desc">{t('proprietari.golive_desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Strutture Section */}
      <section className="section section-dark">
        <div className="container">
          <h2>{t('home.strutture')}</h2>
          <div className="divider divider-center"></div>

          <div className="properties-grid">
            {/* Villa Limonaia */}
            <div className="property-card">
              <div className="property-image">
                <div className="image-placeholder">Villa Limonaia</div>
              </div>
              <div className="property-content">
                <h3>Villa Limonaia</h3>
                <p className="property-location">Piano di Sorrento</p>
                <p className="property-desc">{t('villaLimonaia.descrizione_breve')}</p>
                <ul className="property-features">
                  <li>7 Camere</li>
                  <li>Limoneto Esclusivo</li>
                  <li>Parcheggio Privato</li>
                </ul>
                <Link to="/villa-limonaia" className="btn">
                  {t('home.scopri')}
                </Link>
              </div>
            </div>

            {/* Residenza Manuela */}
            <div className="property-card">
              <div className="property-image">
                <div className="image-placeholder">Residenza Manuela</div>
              </div>
              <div className="property-content">
                <h3>Residenza Manuela</h3>
                <p className="property-location">Capri</p>
                <p className="property-desc">{t('residenzaManuela.descrizione_breve')}</p>
                <ul className="property-features">
                  <li>6 Posti Letto</li>
                  <li>3 Camere Matrimoniali</li>
                  <li>Terrazzi con Vista Mare</li>
                </ul>
                <Link to="/residenza-manuela" className="btn">
                  {t('home.scopri')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mercati Section */}
      <section className="section">
        <div className="container">
          <h2>{t('home.mercati')}</h2>
          <div className="divider divider-center"></div>

          <div className="markets-grid">
            <div className="market">
              <h3>Penisola Sorrentina</h3>
              <p className="market-price">€116 – €221 / notte</p>
              <p className="market-desc">Stagionalità 10 mesi • Famiglie e HNWI internazionali</p>
            </div>
            <div className="market">
              <h3>Capri</h3>
              <p className="market-price">€339 – €614 / notte</p>
              <p className="market-desc">Top Italia per ADR • 88% clientela internazionale</p>
            </div>
            <div className="market">
              <h3>Costiera Amalfitana</h3>
              <p className="market-price">€178 / notte</p>
              <p className="market-desc">Top 4% Italia per revenue • 94% ospiti internazionali</p>
            </div>
            <div className="market">
              <h3>Napoli</h3>
              <p className="market-price">€90 – €97 / notte</p>
              <p className="market-desc">8.100+ listing attivi • Mercato in crescita</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contatti */}
      <section id="contatti" className="section">
        <div className="container">
          <h2>Contatti</h2>
          <div className="divider divider-center"></div>

          <div className="contact-grid">
            <div className="contact-card">
              <h3>Telefono</h3>
              <a href="tel:+393937882334" className="contact-link">
                +39 393 788 2334
              </a>
            </div>
            <div className="contact-card">
              <h3>Email</h3>
              <a href="mailto:info@rivieragulf.it" className="contact-link">
                info@rivieragulf.it
              </a>
            </div>
            <div className="contact-card">
              <h3>Posizioni</h3>
              <p className="contact-info">Capri • Piano di Sorrento<br />Campania, Italia</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Finale */}
      <section className="section section-dark cta-final">
        <div className="container-sm">
          <h2>{t('proprietari.subtitle')}</h2>
          <div className="divider divider-center"></div>
          <p>{t('proprietari.nessun_impegno')}</p>
          <Link to="/proprietari" className="btn btn-primary">
            {t('proprietari.richiedi_consulenza')}
          </Link>
        </div>
      </section>
    </div>
  );
}
