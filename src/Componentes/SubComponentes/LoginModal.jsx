import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';

function LoginRegisterModal() {
  const [modalOpen, setModalOpen] = useState(true);
  const [isRegister, setIsRegister] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isRegister) {
      // Aquí puedes agregar el código para enviar los datos del formulario de registro a tu API o base de datos
    } else {
      // Aquí puedes agregar el código para enviar los datos del formulario de inicio de sesión a tu API o base de datos
    }
    toggleModal();
  }

  return (
    <>
      <Modal isOpen={modalOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>{isRegister ? 'Registrarse' : 'Iniciar sesión'}</ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="username">Nombre de usuario</Label>
              <Input type="text" id="username" value={username} onChange={event => setUsername(event.target.value)} />
            </FormGroup>
            {isRegister && (
              <FormGroup>
                <Label for="email">Correo electrónico</Label>
                <Input type="email" id="email" value={email} onChange={event => setEmail(event.target.value)} />
              </FormGroup>
            )}
            <FormGroup>
              <Label for="password">Contraseña</Label>
              <Input type="password" id="password" value={password} onChange={event => setPassword(event.target.value)} />
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" checked={isRegister} onChange={event => setIsRegister(event.target.checked)} />{' '}
                Registrarse
              </Label>
            </FormGroup>
            <Button type="submit">{isRegister ? 'Registrarse' : 'Iniciar sesión'}</Button>
          </Form>
        </ModalBody>
      </Modal>
    </>
  );
}

export default LoginRegisterModal;
