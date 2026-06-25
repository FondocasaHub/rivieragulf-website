import { useTranslation } from 'react-i18next';
import SmoobuWidget from '../components/SmoobuWidget';
import './PropertyDetail.css';

export default function ResidenzaManuela() {
  const { t } = useTranslation();

  return (
    <div className="property-detail">
      {/* Hero Header */}
      <section className="property-hero">
        <div className="property-hero-content">
          <h1>{t('residenzaManuela.title')}</h1>
          <p className="property-location-large">{t('residenzaManuela.subtitle')}</p>
          <p className="property-intro">{t('residenzaManuela.descrizione_breve')}</p>
        </div>
      </section>

      {/* Descrizione */}
      <section className="section">
        <div className="container">
          <h2>Descrizione</h2>
          <div className="divider"></div>
          <p className="description-full">{t('residenzaManuela.descrizione')}</p>

          <div className="info-highlight">
            <div className="highlight-item">
              <h3>Composizione</h3>
              <ul>
                <li>3 Camere da Letto Matrimoniali</li>
                <li>2 Bagni Completi</li>
                <li>Salone Luminoso</li>
                <li>Cucina Attrezzata</li>
                <li>Terrazzi Privati</li>
              </ul>
            </div>

            <div className="highlight-item">
              <h3>Dotazioni Incluse</h3>
              <ul>
                <li>Aria Condizionata</li>
                <li>Wi-Fi ad Alta Velocità</li>
                <li>Cambio Biancheria</li>
                <li>Pulizia Inclusa</li>
                <li>Assicurazione Ospiti</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Conceptual */}
      <section className="section section-dark gallery-concept">
        <div className="container">
          <h2>Spazi della Residenza</h2>
          <div className="divider divider-center"></div>

          <div className="gallery-grid">
            <div className="gallery-item">
              <div className="gallery-image-placeholder">Via Cercola 7</div>
              <h4>Ubicazione Esclusiva</h4>
              <p>Nel cuore di Capri</p>
            </div>
            <div className="gallery-item">
              <div className="gallery-image-placeholder">3 Camere</div>
              <h4>Camere da Letto</h4>
              <p>Matrimoniali spaziose</p>
            </div>
            <div className="gallery-item">
              <div className="gallery-image-placeholder">Terrazzi</div>
              <h4>Terrazzi Privati</h4>
              <p>Con scorcio mare</p>
            </div>
            <div className="gallery-item">
              <div className="gallery-image-placeholder">Salone</div>
              <h4>Salone Luminoso</h4>
              <p>Area living confortevole</p>
            </div>
          </div>
        </div>
      </section>

      {/* Detagli Ubicazione */}
      <section className="section">
        <div className="container">
          <h2>Ubicazione Privilegiata</h2>
          <div className="divider"></div>

          <div className="location-details">
            <div className="detail-box">
              <h3>Via Camerelle</h3>
              <p>A soli 3 minuti a piedi dal cuore dello shopping di Capri. La strada più esclusiva dell'isola con boutique internazionali e ristoranti stellati.</p>
            </div>

            <div className="detail-box">
              <h3>Centro di Capri</h3>
              <p>Piazzetta, musei, ristoranti gourmet e vita notturna a portata di mano. Ambiente tranquillo ma a soli pochi minuti dal centro vitale.</p>
            </div>

            <div className="detail-box">
              <h3>Accesso al Mare</h3>
              <p>Spiagge e calette raggiungibili in pochi minuti a piedi. Marina Grande e Marina Piccola offrono accesso diretto ai servizi di barca e giri dell'isola.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section section-dark pricing-section">
        <div className="container-sm">
          <h2>Tariffe</h2>
          <div className="divider divider-center"></div>

          <div className="price-box">
            <span className="price-label">Appartamento Intero</span>
            <span className="price-value">€520</span>
            <span className="price-period">Per Notte</span>
            <p className="price-desc">Disponibile luglio - ottobre, anche per soggiorni brevi</p>
          </div>

          <p className="price-note">* Prezzo soggetto a variazioni stagionali</p>
        </div>
      </section>

      {/* Contatti */}
      <section className="section">
        <div className="container-sm">
          <h2>Contattaci</h2>
          <div className="divider divider-center"></div>

          <div className="contact-info">
            <div className="contact-item">
              <h3>📞 Telefono</h3>
              <a href="tel:+393937882334">+39 393 788 2334</a>
            </div>

            <div className="contact-item">
              <h3>📧 Email</h3>
              <a href="mailto:info@rivieragulf.it">info@rivieragulf.it</a>
            </div>

            <div className="contact-item">
              <h3>🌐 Web</h3>
              <p>rivieragulf.it</p>
            </div>
          </div>
        </div>
      </section>

      {/* Disponibilità & Prenotazione */}
      <section className="section">
        <div className="container">
          <h2>Disponibilità e Prenotazione</h2>
          <div className="divider divider-center"></div>
          <SmoobuWidget propertyId="3393051" propertyName="Residenza Manuela" />
        </div>
      </section>

      {/* CTA */}
      <section className="section section-dark cta-property">
        <div className="container-sm">
          <h2>Hai Domande?</h2>
          <p>Contattaci per informazioni personalizzate o per prenotazioni speciali</p>
          <a href="mailto:info@rivieragulf.it" className="btn btn-primary">Contattaci Direttamente</a>
        </div>
      </section>
    </div>
  );
}
