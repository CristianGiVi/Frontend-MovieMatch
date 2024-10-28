import { Modal } from "react-bootstrap";
import { SigInPage } from "../SigInPage";

const SigInModal = ({ show, handleClose }) => {
    return (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>CREAR CUENTA</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <SigInPage/>
          </Modal.Body>
        </Modal>
      );
    };

export default SigInModal