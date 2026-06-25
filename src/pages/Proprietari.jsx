import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Proprietari.css';

export default function Proprietari() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefono: '',
    proprieta: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // TODO: Integrare con backend/email service
    alert('Grazie! La tua richiesta è stata inviata. Ti contatteremo presto.');
    setFormData({ nome: '', email: '', telefono: '', proprieta: '' });
  };

  return (
    <div className="proprietari">
      {/* Hero */}
      <section className="hero proprietari-hero">
        <div className="hero-content">
          <h1>{t('proprietari.subtitle')}</h1>
          <div className="divider divider-center"></div>
          <p className="hero-subtitle">{t('proprietari.intro')}</p>
        </div>
      </section>

      {/* Business Model */}
      <section className="section">
        <div className="container">
          <h2>{t('proprietari.modello_business')}</h2>
          <div className="divider divider-center"></div>

          <div className="model-grid">
            <div className="model-card">
              <div className="model-icon">25%</div>
              <h3>{t('proprietari.fee_sul_realizzato')}</h3>
              <p>{t('proprietari.fee_desc')}</p>
            </div>
            <div className="model-card">
              <div className="model-icon">€0</div>
              <h3>{t('proprietari.costi_zero')}</h3>
              <p>{t('proprietari.costi_desc')}</p>
            </div>
            <div className="model-card">
              <div className="model-icon">24/7</div>
              <h3>{t('proprietari.assistenza_24')}</h3>
              <p>{t('proprietari.assistenza_desc')}</p>
            </div>
            <div className="model-card">
              <div className="model-icon">14gg</div>
              <h3>{t('proprietari.golive')}</h3>
              <p>{t('proprietari.golive_desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Come Funziona */}
      <section className="section section-dark">
        <div className="container">
          <h2>{t('proprietari.come_funziona')}</h2>
          <div className="divider divider-center"></div>

          <div className="process-timeline">
            {[
              { num: '01', title: t('proprietari.mandato'), desc: t('proprietari.mandato_desc') },
              { num: '02', title: t('proprietari.setup'), desc: t('proprietari.setup_desc') },
              { num: '03', title: t('proprietari.pubblicazione'), desc: t('proprietari.pubblicazione_desc') },
              { num: '04', title: t('proprietari.gestione'), desc: t('proprietari.gestione_desc') },
              { num: '05', title: t('proprietari.pagamento'), desc: t('proprietari.pagamento_desc') }
            ].map((step, idx) => (
              <div key={idx} className="timeline-step">
                <div className="step-number">{step.num}</div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="timeline-note">
            Firma → Go-live in 14 giorni • Prima prenotazione attesa entro 7–21 giorni • Primo incasso entro 45 giorni
          </div>
        </div>
      </section>

      {/* Servizi Inclusi */}
      <section className="section">
        <div className="container">
          <h2>{t('proprietari.servizi_inclusi')}</h2>
          <div className="divider divider-center"></div>

          <div className="services-layout">
            <div className="services-column">
              <h3 className="services-title digital">{t('proprietari.servizi_digitali')}</h3>

              <div className="service-item">
                <h4>{t('proprietari.marketing_listing')}</h4>
                <p>{t('proprietari.marketing_desc')}</p>
              </div>

              <div className="service-item">
                <h4>{t('proprietari.revenue_management')}</h4>
                <p>{t('proprietari.revenue_desc')}</p>
              </div>

              <div className="service-item">
                <h4>{t('proprietari.calendari')}</h4>
                <p>{t('proprietari.calendari_desc')}</p>
              </div>

              <div className="service-item">
                <h4>{t('proprietari.supporto_ospiti')}</h4>
                <p>{t('proprietari.supporto_desc')}</p>
              </div>
            </div>

            <div className="services-column">
              <h3 className="services-title physical">{t('proprietari.servizi_fisici')}</h3>

              <div className="service-item">
                <h4>{t('proprietari.checkin')}</h4>
                <p>{t('proprietari.checkin_desc')}</p>
              </div>

              <div className="service-item">
                <h4>{t('proprietari.housekeeping')}</h4>
                <p>{t('proprietari.housekeeping_desc')}</p>
              </div>

              <div className="service-item">
                <h4>{t('proprietari.adempimenti')}</h4>
                <p>{t('proprietari.adempimenti_desc')}</p>
              </div>

              <div className="service-item">
                <h4>{t('proprietari.report')}</h4>
                <p>{t('proprietari.report_desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mercati */}
      <section className="section section-dark">
        <div className="container">
          <h2>{t('proprietari.mercati_potenziale')}</h2>
          <div className="divider divider-center"></div>

          <div className="markets-detailed">
            <div className="market-card">
              <h3>{t('proprietari.capri')}</h3>
              <div className="market-price">{t('proprietari.capri_price')}</div>
              <p className="market-occupancy">{t('proprietari.capri_occupancy')}</p>
              <p className="market-desc">{t('proprietari.capri_desc')}</p>
            </div>

            <div className="market-card">
              <h3>{t('proprietari.sorrento')}</h3>
              <div className="market-price">{t('proprietari.sorrento_price')}</div>
              <p className="market-occupancy">{t('proprietari.sorrento_occupancy')}</p>
              <p className="market-desc">{t('proprietari.sorrento_desc')}</p>
            </div>

            <div className="market-card">
              <h3>{t('proprietari.amalfi')}</h3>
              <div className="market-price">{t('proprietari.amalfi_price')}</div>
              <p className="market-occupancy">{t('proprietari.amalfi_occupancy')}</p>
              <p className="market-desc">{t('proprietari.amalfi_desc')}</p>
            </div>

            <div className="market-card">
              <h3>{t('proprietari.napoli')}</h3>
              <div className="market-price">{t('proprietari.napoli_price')}</div>
              <p className="market-occupancy">{t('proprietari.napoli_occupancy')}</p>
              <p className="market-desc">{t('proprietari.napoli_desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Proiezioni */}
      <section className="section">
        <div className="container">
          <h2>{t('proprietari.proiezioni')}</h2>
          <div className="divider divider-center"></div>
          <p className="projections-intro">Reddito netto stimato per proprietà gestita:</p>

          <div className="projections-grid">
            <div className="projection-card normal">
              <h3>{t('proprietari.scenario_normale')}</h3>
              <div className="projection-value">{t('proprietari.scenario_normale_val')}</div>
              <p className="projection-monthly">{t('proprietari.scenario_normale_mese')}</p>
            </div>

            <div className="projection-card optimal">
              <h3>{t('proprietari.scenario_ottimo')}</h3>
              <div className="projection-value">{t('proprietari.scenario_ottimo_val')}</div>
              <p className="projection-monthly">{t('proprietari.scenario_ottimo_mese')}</p>
            </div>

            <div className="projection-card extraordinary">
              <h3>{t('proprietari.scenario_straordinario')}</h3>
              <div className="projection-value">{t('proprietari.scenario_straordinario_val')}</div>
              <p className="projection-monthly">{t('proprietari.scenario_straordinario_mese')}</p>
            </div>
          </div>

          <p className="projections-disclaimer">* Proiezioni basate su dati reali di mercato 2025. Variabili in base a stagionalità, posizionamento e qualità della proprietà.</p>
        </div>
      </section>

      {/* Form Consulenza */}
      <section className="section section-dark form-section">
        <div className="container-sm">
          <h2>{t('proprietari.richiedi_consulenza')}</h2>
          <div className="divider divider-center"></div>
          <p className="form-intro">{t('proprietari.nessun_impegno')}</p>

          <form className="consultation-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nome">{t('proprietari.form_nome')}</label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">{t('proprietari.form_email')}</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="telefono">{t('proprietari.form_telefono')}</label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="proprieta">{t('proprietari.form_proprieta')}</label>
              <textarea
                id="proprieta"
                name="proprieta"
                rows="4"
                value={formData.proprieta}
                onChange={handleChange}
                placeholder="Descrivi la tua proprietà (località, tipo, numero camere, ecc.)"
              ></textarea>
            </div>

            <div className="form-consent">
              <input type="checkbox" id="consent" required />
              <label htmlFor="consent">{t('proprietari.form_invio')}</label>
            </div>

            <button type="submit" className="btn btn-primary">{t('proprietari.form_submit')}</button>
          </form>
        </div>
      </section>
    </div>
  );
}
