
import { Modal } from "react-bootstrap";
import { LoginPage } from "../LoginPage";

const LoginModal = ({ show, handleClose }) => {

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>INICIO DE SESION</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <LoginPage/>
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;
