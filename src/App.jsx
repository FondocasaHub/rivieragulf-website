import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import VillaLimonaia from './pages/VillaLimonaia';
import ResidenzaManuela from './pages/ResidenzaManuela';
import Proprietari from './pages/Proprietari';
import './styles/branding.css';
import './App.css';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <div className="app">
          <Header />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/villa-limonaia" element={<VillaLimonaia />} />
              <Route path="/residenza-manuela" element={<ResidenzaManuela />} />
              <Route path="/proprietari" element={<Proprietari />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </I18nextProvider>
  );
}

export default App;
