import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        VEDI DETTAGLI
      </Button>

      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header className='text-center' closeButton>
          <Modal.Title>Prefazione</Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-dark text-white fs-4 fst-italic g-3 p-4'>
          "Benvenuti nel mondo della programmazione, dove la sanità mentale è solo un lontano ricordo. In questo libro, vi racconteremo la storia di un gruppo di studenti coraggiosi che hanno deciso di affrontare il mostro della programmazione, solo per scoprire che il mostro era in realtà un'intera legione di mostri, armati di pointer, algoritmi e debug.

          Seguite i nostri eroi mentre lottano per sopravvivere in un mondo dove il codice non funziona mai come previsto, dove gli errori sono sempre in agguato e dove la parola 'deadline' è sinonimo di 'tortura mentale'."
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;
