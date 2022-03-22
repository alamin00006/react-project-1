import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const ReactModal = (props) => {
    const [show, setShow] = useState(false);
    const {title,image,description} = props.product;
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
           <>
      <Button variant="primary" onClick={handleShow}>
        Details
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>{title.slice(0,10)}</Modal.Title>
          <img className='w-50' src={image} alt="" />
        </Modal.Header>
        <Modal.Body>{description}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </> 
        </div>
    );
};

export default ReactModal;