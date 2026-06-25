import { useTranslation } from 'react-i18next';
import SmoobuWidget from '../components/SmoobuWidget';
import PhotoGallery from '../components/PhotoGallery';
import './PropertyDetail.css';

export default function VillaLimonaia() {
  const { t } = useTranslation();

  const rooms = [
    {
      name: 'Suite Limone',
      type: 'Quadrupla + Terrazzo ⭐',
      desc: 'La più premium, terrazzo esclusivo',
      amenities: ['Aria condizionata', 'Smart TV 55"', 'Frigobar', 'Bagno privato', 'Wi-Fi', 'Biancheria', 'Pulizia']
    },
    {
      name: 'Camera Zagara',
      type: 'Doppia',
      desc: 'Il fiore del limone, romantica',
      amenities: ['Aria condizionata', 'Smart TV 55"', 'Frigobar', 'Bagno privato', 'Wi-Fi', 'Biancheria', 'Pulizia']
    },
    {
      name: 'Camera Gelsomino',
      type: 'Tripla',
      desc: 'Fiore tipico sorrentino',
      amenities: ['Aria condizionata', 'Smart TV 55"', 'Frigobar', 'Bagno privato', 'Wi-Fi', 'Biancheria', 'Pulizia']
    },
    {
      name: 'Camera Arancio',
      type: 'Quadrupla',
      desc: 'Agrume, caldo e luminoso',
      amenities: ['Aria condizionata', 'Smart TV 55"', 'Frigobar', 'Bagno privato', 'Wi-Fi', 'Biancheria', 'Pulizia']
    },
    {
      name: 'Camera Mirto',
      type: 'Tripla',
      desc: 'Pianta mediterranea, fresca',
      amenities: ['Aria condizionata', 'Smart TV 55"', 'Frigobar', 'Bagno privato', 'Wi-Fi', 'Biancheria', 'Pulizia']
    },
    {
      name: 'Camera Lavanda',
      type: 'Doppia',
      desc: 'Delicata, ideale coppia',
      amenities: ['Aria condizionata', 'Smart TV 55"', 'Frigobar', 'Bagno privato', 'Wi-Fi', 'Biancheria', 'Pulizia']
    },
    {
      name: 'Camera Rosmarino',
      type: 'Doppia',
      desc: 'Aromatica, essenziale',
      amenities: ['Aria condizionata', 'Smart TV 55"', 'Frigobar', 'Bagno privato', 'Wi-Fi', 'Biancheria', 'Pulizia']
    }
  ];

  return (
    <div className="property-detail">
      {/* Hero Header */}
      <section className="property-hero">
        <div className="property-hero-content">
          <h1>{t('villaLimonaia.title')}</h1>
          <p className="property-location-large">{t('villaLimonaia.subtitle')}</p>
          <p className="property-intro">{t('villaLimonaia.descrizione_breve')}</p>
        </div>
      </section>

      {/* Descrizione */}
      <section className="section">
        <div className="container">
          <h2>Descrizione</h2>
          <div className="divider"></div>
          <p className="description-full">{t('villaLimonaia.descrizione')}</p>

          <div className="amenities-list">
            <h3>Servizi Inclusi</h3>
            <ul className="amenities-grid">
              {t('villaLimonaia.caratteristiche', { returnObjects: true }).map((amenity, idx) => (
                <li key={idx}>{amenity}</li>
              ))}
            </ul>
          </div>

          <div className="common-areas">
            <h3>{t('villaLimonaia.spazi_comuni')}</h3>
            <p>{t('villaLimonaia.spazi_comuni_desc')}</p>
          </div>
        </div>
      </section>

      {/* Galleria Foto */}
      <section className="section">
        <div className="container">
          <h2>Galleria Fotografica</h2>
          <div className="divider divider-center"></div>
          <PhotoGallery propertyName="Villa Limonaia" folderPath="/images/villa-limonaia" />
        </div>
      </section>

      {/* Rooms Section */}
      <section className="section section-dark">
        <div className="container">
          <h2>{t('villaLimonaia.camere')}</h2>
          <div className="divider divider-center"></div>

          <div className="rooms-grid">
            {rooms.map((room, idx) => (
              <div key={idx} className="room-card">
                <div className="room-image-placeholder">{room.name}</div>
                <div className="room-content">
                  <h3>{room.name}</h3>
                  <p className="room-type">{room.type}</p>
                  <p className="room-desc">{room.desc}</p>
                  <div className="room-amenities">
                    {room.amenities.map((amenity, i) => (
                      <span key={i} className="amenity-badge">{amenity}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="section">
        <div className="container">
          <div className="info-grid">
            <div className="info-card">
              <h3>Disponibilità</h3>
              <p>{t('villaLimonaia.disponibilita')}</p>
            </div>
            <div className="info-card">
              <h3>Ubicazione</h3>
              <p>Piano di Sorrento<br />3 minuti piedi dalla piazza principale<br />10 minuti dall'ascensore al mare</p>
            </div>
            <div className="info-card">
              <h3>Contatti</h3>
              <p><strong>Telefono:</strong><br /><a href="tel:+39393788233">+39 393 788 2334</a><br /><br /><strong>Email:</strong><br /><a href="mailto:info@rivieragulf.it">info@rivieragulf.it</a></p>
            </div>
          </div>
        </div>
      </section>

      {/* Disponibilità & Prenotazione */}
      <section className="section">
        <div className="container">
          <h2>Disponibilità e Prenotazione</h2>
          <div className="divider divider-center"></div>
          <SmoobuWidget propertyId="3393306" propertyName="Villa Limonaia" />
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
