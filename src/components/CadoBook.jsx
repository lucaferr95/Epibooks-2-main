import { Col, Container, Alert, Row } from "react-bootstrap";
const CadoBook = (props) => {
  return (
    <Alert variant="warning" className="text-white-50 text-center bg-black w-100">
    <Container fluid >
      <Row className="justify-content-center align-items-center w-100 bg-black">
       
        <Col xs={12} md={9} lg={9} className="d-flex flex-column justify-content-center align-items-center text-center mt-3 pb-3 pt-3 ">
        <h3 className="card-title d-flex special-elite-regular justify-content-center text-white pb-3 ">IL NOSTRO LIBRO SPAVENTOSO CONSIGLIATO DI OGGI:</h3>
          <div className="card h-100 w-50  bg-info opacity-75 ">
            <img
              src={props.libro.img}
              alt={"Immagine di " + props.libro.title}
              className="d-block mx-auto"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
              }}
            />
            <div className="card-body d-flex flex-column justify-content-between">
              <h5 className="d-flex flex-column flex-grow-1 fs-bold text-white fs-3">{props.libro.title}</h5>
              <h6 className="card-title fst-italic text-white">(Tratto da una vera storia complicata: quella degli studenti di Epicode)</h6>
              <p className="mb-0 fs-5 text-white mb-1">€ {props.libro.price}</p>
              <button className="bg-black opacity-75">
                <a href={props.libro.shoplink} className="text-white text-decoration-none">
                  ACQUISTA ORA
                </a>
              </button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
    </Alert>
  );
};

export default CadoBook;
