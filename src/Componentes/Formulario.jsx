import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../style/Formulario.css'
import Form from 'react-bootstrap/Form'
import {MdOutlineLocationOn} from 'react-icons/md';
import {BsAlarm} from 'react-icons/bs';
import {RiCellphoneLine} from 'react-icons/ri';
import {AiOutlineMail} from 'react-icons/ai';


export const Formulario = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('consultas', 'react_contact_form', form.current, 'fsSFRK4NUDz0gtrJR')
      .then((result) => {
        console.log(result.text);
        form.current.reset();
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className='Container' id="consultas">
      <div className="row mt-5 me-0 mb-5">
        <div className='col-md-6'>
          <div className='Container'>
            <div className="">
              <h1 className="fs-3 fw-bold text-center titulo-formulario">CONSULTA GRATIS</h1>
              <div className="mb-4">
                <Form ref={form} onSubmit={sendEmail}>
                  <Form.Control
                    name="user_nombre"
                    style={{ background: '#eeee', borderRadius: '10px' }}
                    className="mt-3"
                    required
                    type="text"
                    placeholder="Nombre y apellido"
                    pattern="[A-Za-z ]+"
                  />
                  <Form.Control
                    name="dni"
                    style={{ background: '#eeee', borderRadius: '10px' }}
                    className="mt-3"
                    required
                    type="text"
                    placeholder="DNI"
                    pattern="[0-9]+"
                    minLength="8"
                    maxLength="8"
                  />
                  <Form.Control
                    name="asunto"
                    style={{ background: '#eeee', borderRadius: '10px' }}
                    className="mt-3"
                    required
                    type="text"
                    placeholder="Asunto"
                    pattern="[A-Za-z0-9 ]+"
                  />
                  <Form.Control
                    name="correo"
                    style={{ background: '#eeee', borderRadius: '10px' }}
                    className="mt-3"
                    required
                    type="email"
                    placeholder="Correo electrónico"
                    pattern="[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}"
                  />
                  <Form.Control
                    name="celular"
                    style={{ background: '#eeee', borderRadius: '10px' }}
                    className="mt-3"
                    required
                    type="text"
                    placeholder="Celular"
                    pattern="[0-9]+"
                    minLength="9"
                    maxLength="9"
                  />
                  <Form.Control
                    name="mensaje"
                    style={{ background: '#eeee', borderRadius: '10px' }}
                    className="mt-3"
                    required
                    as="textarea"
                    placeholder="Mensaje"
                    rows={5}
                  />
                  <div className="mt-3 boton-cont justify-content-center">
                    <button type="submit" className="boton-form mx-auto">
                      ENVIAR
                    </button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 part-2">
          <div className="info">
            <h1><BsAlarm/> Horario de Atención</h1>
            <p>Lunes a Viernes: 08:00 - 18:00</p>
            <p>Sabados, Domingos y Feriados: 08:00 - 14:00</p>
            <h1><MdOutlineLocationOn/> Direccion</h1>
            <p>Jirón Junín, Lima 15001</p>
            <h1><RiCellphoneLine/> Celular</h1>
            <p>902415918</p>
            <h1><AiOutlineMail/> Correo</h1>
            <p>skynet@gmail.com</p>
          </div>

        </div>

      </div>
    </div>

  );
};
export default Formulario;