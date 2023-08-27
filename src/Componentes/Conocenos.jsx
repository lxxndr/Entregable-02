import React from "react";
import '../style/Conocenos.css'

function Conocenos() {
  return (
    <div className="conocenos" id="conocenos">
      <div className="conocenos-content">
        <h1>¿Quienes somos?</h1>
        <p>En Skynet, somos tus compañeros de viaje apasionados. Desde nuestra fundación en 2003, nos dedicamos a convertir tus sueños de aventuras en destinos reales.
          Nuestro equipo de expertos en viajes diseña cuidadosamente cada experiencia, sumergiéndote en la esencia de cada destino. Trabajamos con socios de confianza para asegurarnos de que tu viaje sea seguro y auténtico.
          Ya sea que anheles una escapada urbana o un retiro en la playa, estamos aquí para hacerlo realidad. Skynet te da la bienvenida a explorar el mundo con nosotros y crear recuerdos que perduren.
          Únete a nosotros y descubre el mundo a tu manera.</p>
      </div>
      <div className="row  mision-vision">
        <div className="col-md-6 mision">
          <h1 className="titulo"> Nuestra Misión</h1>
          <p> Nuestra misión es ofrecer experiencias de viaje excepcionales y memorables a nuestros clientes, al proporcionar servicios turísticos de alta calidad que resalten la belleza cultural y natural de cada destino,
            contribuyendo así al enriquecimiento de sus vidas y al fomento de un turismo responsable y sostenible.</p>
        </div>
        <div className="col-md-6 vision">
          <h1 className="titulo">Nuestra Visión</h1>
          <p>Nos esforzamos por ser líderes en la industria del turismo, reconocidos por nuestra innovación, compromiso con la excelencia y enfoque en la satisfacción del cliente. Buscamos ser la elección preferida de viajes
            para aquellos que desean explorar el mundo de manera auténtica y significativa, dejando una huella positiva en las comunidades locales y el medio ambiente.</p>
        </div>
      </div>
    </div>  );
}

export default Conocenos;
