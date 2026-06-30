import React from 'react';
import './index.css';

function App() {
  const generateVCard = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
N:Estudio;Lunara;;;
FN:Lunara Estudio
ORG:Lunara Estudio
TITLE:Diseño de interiores y asesoría decorativa
EMAIL:hola@lunaraestudio.example
TEL;TYPE=WORK,VOICE:+34 600 000 000
TEL;TYPE=CELL,VOICE:+34 600 000 000
URL:PENDIENTE
END:VCARD`;

    const blob = new Blob([vcard], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Lunara_Estudio.vcf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const whatsappMessage = encodeURIComponent("Hola, me gustaría pedir información sobre una asesoría de interiores.");
  const whatsappUrl = `https://wa.me/34600000000?text=${whatsappMessage}`;

  return (
    <div className="hub-container">
      {/* Top right floating action: Save contact */}
      <div className="fab-container-top">
        <button className="fab" onClick={generateVCard} aria-label="Guardar contacto" title="Guardar contacto">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 16L7 11L8.4 9.55L11 12.15V4H13V12.15L15.6 9.55L17 11L12 16ZM6 20C5.45 20 4.979 19.804 4.587 19.412C4.195 19.02 4 18.55 4 18V15H6V18H18V15H20V18C20 18.55 19.804 19.02 19.412 19.412C19.02 19.804 18.55 20 18 20H6Z" fill="currentColor"/>
          </svg>
        </button>
      </div>

      {/* Header Visual */}
      <header className="header-visual">
        <div className="profile-wrapper">
          <span className="profile-placeholder">PENDIENTE</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="content">
        <div className="identity-block">
          <h1 className="title">Lunara Estudio</h1>
          <h2 className="subtitle">Diseño de interiores y asesoría decorativa</h2>
          <div className="contact-info">
            <a href="mailto:hola@lunaraestudio.example">hola@lunaraestudio.example</a>
            <a href="tel:+34600000000">+34 600 000 000</a>
          </div>
        </div>

        <p className="main-phrase">
          Diseño de interiores cercano y funcional para transformar espacios cotidianos en lugares con identidad.
        </p>

        <div className="links-container">
          <a href="https://lunaraestudio.example/contacto" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            Solicitar asesoría inicial
          </a>
          <a href="https://lunaraestudio.example/catalogo" className="btn btn-special" target="_blank" rel="noopener noreferrer">
            Ver catálogo de estilos
          </a>
          <a href="https://lunaraestudio.example/servicios" className="btn" target="_blank" rel="noopener noreferrer">
            Ver servicios
          </a>
          <a href="https://lunaraestudio.example/portfolio" className="btn" target="_blank" rel="noopener noreferrer">
            Ver portfolio
          </a>
          <a href="https://instagram.com/lunaraestudio_demo" className="btn" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href="https://maps.example/lunara-estudio-demo" className="btn" target="_blank" rel="noopener noreferrer">
            Cómo llegar
          </a>
          <button className="btn" onClick={generateVCard}>
            Guardar contacto
          </button>
        </div>

        <div className="secondary-links">
          <a href="https://linkedin.com/company/lunaraestudio-demo" className="secondary-link" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://pinterest.com/lunaraestudio_demo" className="secondary-link" target="_blank" rel="noopener noreferrer">
            Pinterest
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <span className="footer-logo">SeviAI</span>
        <span>© 2026 Lunara Estudio · SeviAI Ecosystem</span>
      </footer>

      {/* Bottom right floating action: WhatsApp */}
      <div className="fab-container-bottom">
        <a href={whatsappUrl} className="fab fab-whatsapp" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" title="Contactar por WhatsApp">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.16C10.57 20.16 9.14 19.76 7.9 19.02L7.61 18.85L4.47 19.67L5.31 16.6L5.12 16.3C4.33 15.03 3.91 13.51 3.91 11.91C3.91 7.42 7.57 3.76 12.06 3.76C14.23 3.76 16.31 4.61 17.84 6.14C19.37 7.68 20.22 9.75 20.22 11.92C20.22 16.41 16.55 20.16 12.05 20.16ZM16.53 14.07C16.29 13.95 15.08 13.35 14.86 13.27C14.64 13.19 14.47 13.15 14.31 13.39C14.15 13.63 13.68 14.18 13.54 14.34C13.4 14.5 13.25 14.52 13 14.4C12.76 14.28 11.97 14.02 11.04 13.19C10.31 12.54 9.81 11.73 9.67 11.49C9.53 11.25 9.65 11.12 9.77 11.01C9.88 10.9 10.02 10.72 10.14 10.58C10.26 10.44 10.3 10.34 10.38 10.18C10.46 10.02 10.42 9.88 10.36 9.76C10.3 9.64 9.81 8.44 9.61 7.96C9.41 7.49 9.21 7.55 9.06 7.55C8.92 7.55 8.75 7.54 8.59 7.54C8.43 7.54 8.16 7.6 7.94 7.84C7.72 8.08 7.08 8.68 7.08 9.9C7.08 11.12 7.98 12.3 8.1 12.46C8.22 12.62 9.82 15.13 12.31 16.2C12.9 16.45 13.37 16.6 13.73 16.71C14.33 16.9 14.87 16.87 15.3 16.81C15.78 16.73 16.78 16.2 16.98 15.6C17.18 15 17.18 14.46 17.11 14.34C17.03 14.22 16.87 14.15 16.63 14.03L16.53 14.07Z" fill="currentColor"/>
          </svg>
        </a>
      </div>
    </div>
  );
}

export default App;
