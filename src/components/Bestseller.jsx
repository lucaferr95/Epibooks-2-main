import { Col, Container, Row } from "react-bootstrap";

const Bestseller = (props) => {
  return (
    <Container className="mt-1 w-100">
      <Row className="justify-content-center w-100 bg-black">
        <Col
          xs={12}
          md={9}
          lg={9}
          className="d-flex flex-column justify-content-center align-items-center text-center mt-5 pb-5 pt-5"
        >
          <h3 className="card-title d-flex justify-content-center text-white-50">
            I NOSTRI BESTSELLER:
          </h3>
          <Row>
            {props.libri.map((libro) => (
              <Col key={libro.asin} xs={12} md={4}>
                <div className="card h-100 w-100 bg-info opacity-75 m-2">
                  <img
                    src={libro.img}
                    alt={"Immagine di " + libro.title}
                    className="d-block mx-auto"
                    style={{
                      width: "100%",
                      height: "300px",
                      objectFit: "cover",
                    }}
                  />
                  <div className="card-body d-flex flex-column justify-content-between">
                    <h5 className="d-flex flex-column flex-grow-1">
                      {libro.title}
                    </h5>
                    <h6 className="card-title">
                    {libro.description}
                    </h6>
                    <p className="mb-0">€ {libro.price} </p>
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
  );
};

export default Bestseller;
