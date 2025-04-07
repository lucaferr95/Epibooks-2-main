import { Alert, Col, Container, Row } from "react-bootstrap";

const Bestseller = (props) => {
  return (
    <Alert variant="warning" className="text-white text-center bg-black w-100">
    <Container fluid className="mt-1 w-100">
      <Row className="justify-content-center w-100 bg-black">
        <Col
          xs={12}
          md={9}
          lg={9}
          className="d-flex flex-column justify-content-center align-items-center text-center mt-3 pb-3 pt-3"
        >
          <h3 className="card-title d-flex justify-content-center special-elite-regular text-white pb-3">
            I NOSTRI BESTSELLER:
          </h3>
          <Row>
            {props.libri.map((libro) => (
              <Col key={libro.asin} xs={12} md={4}>
                <div className="card h-100 w-100 bg-info opacity-75 m-2">
                  <img
                    src={libro.img}
                    alt={"Immagine di " + libro.title}
                    className="mx-auto"
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                    }}
                  />
                  <div className="card-body d-flex flex-column justify-content-between ">
                    <h5 className=" d-flex flex-column flex-grow-1 text-white fs-3">
                      {libro.title}
                    </h5>
                    <h6 className="card-title text-white">{libro.description}</h6>
                    <p className="mb-0 text-white fs-5">€ {libro.price} </p>
                    <button className="bg-black opacity-75">
                      <a
                        href={libro.shoplink}
                        className="text-white text-decoration-none"
                      >
                        ACQUISTA ORA
                      </a>
                    </button>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
    </Alert>
  );
};

export default Bestseller;
