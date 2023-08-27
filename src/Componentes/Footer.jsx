import React from 'react';
import '../style/Footer.css';

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>Skynet Travel</h2>
            <p>La mejor agencia de viajes</p>
          </div>
          <div className="col">
            <h3>Enlaces</h3>
            <ul>
              <li><a href="/#inicio">Inicio</a></li>
              <li><a href="/#conocenos">Conócenos</a></li>
              <li><a href="/#destinos">Destinos</a></li>
              <li><a href="/#consultas">Consultas</a></li>
            </ul>
          </div>
          <div className="col">
            <h3>Contacto</h3>
            <p>Dirección: Calle Falsa 123, Lima, Perú</p>
            <p>Teléfono: +51 123 456 789</p>
            <p>Correo electrónico: contacto@skynettravel.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
