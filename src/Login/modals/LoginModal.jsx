import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import { LoginPage } from "../LoginPage";
// Importa la función postUser desde el archivo de ayuda

const LoginModal = ({ show, handleClose }) => {

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Inicio de sesión</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <LoginPage />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          CERRAR
        </Button>
        <Button variant="success">
          ENVIAR
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default LoginModal;
