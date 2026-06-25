import { useEffect } from 'react';
import './SmoobuWidget.css';

export default function SmoobuWidget({ propertyId, propertyName }) {
  const SMOOBU_USER_ID = '1800756';

  useEffect(() => {
    // Carica lo script Smoobu se non già caricato
    if (!window.smoobuLoaded) {
      const script = document.createElement('script');
      script.src = 'https://www.smoobu.com/widget/index.js';
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
      window.smoobuLoaded = true;
    }
  }, []);

  return (
    <div className="smoobu-widget-container">
      <div
        data-smoobu-widget="availability"
        data-user-id={SMOOBU_USER_ID}
        data-property-id={propertyId}
        data-lang="it"
      ></div>
    </div>
  );
}
