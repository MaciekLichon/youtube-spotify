import './customModal.scss';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const Popup = props => {

  const handleClose = () => props.setShowPopup(false);

  return (
    <Modal show={props.showPopup} onHide={handleClose} centered={true} size={'sm'}>
      <i className={"icon fa fa-exclamation-circle"}></i>
      <Modal.Body>{props.children}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
      </Modal>
  );
}


export default Popup;
