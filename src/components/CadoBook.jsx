import { Col, Container, Row } from "react-bootstrap";

const CadoBook = (props) => {
  return (
    <Container className="mt-1 w-100">
      <Row className="justify-content-center w-100 bg-black">
        <Col
          xs={12}
          md={9}
          lg={9}
          className="d-flex flex-column justify-content-center align-items-center text-center mt-5 pb-5 pt-5 "
        >
          <h3 className="card-title d-flex justify-content-center text-white-50 ">
            IL NOSTRO LIBRO SPAVENTOSO CONSIGLIATO DI OGGI:
          </h3>
          <div className="card h-100 w-50  bg-info opacity-75 ">
            <img
              src={props.libro.img}
              alt={"Immagine di " + props.libro.title}
              className="d-block mx-auto"
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
              }}
            />
            <div className="card-body d-flex flex-column justify-content-between">
              <h5 className="d-flex flex-column flex-grow-1">
                {props.libro.title}
              </h5>
              <h6 className="card-title">
                (Tratto da una vera storia complicata: quella degli studenti di
                Epicode)
              </h6>
              <p className="mb-0">€ {props.libro.price}</p>
              <button className="bg-black opacity-75">
                <a
                  href={props.libro.shoplink}
                  className="text-white text-decoration-none"
                >
                  ACQUISTA ORA
                </a>
              </button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CadoBook;
