import { Col, Container, Row, Carousel } from "react-bootstrap";
import books from "../Horror/horror_updated.json";
import { Component } from "react";

class Cards extends Component {
  state = {
    activeBook: books[0],
  };

  render() {
    const chunkedBooks = [];

    for (let i = 0; i < books.length; i += 4) {
      chunkedBooks.push(books.slice(i, i + 4));
    }

    return (
      <Container className={this.props.className}>
        <Row className="justify-content-center ">
          <Col xs={12} md={9} lg={9} className="text-center w-100 bg-black">
            <Carousel
              prevIcon={
                <span
                  className="carousel-control-prev-icon "
                  aria-hidden="true"
                  style={{
                    backgroundColor: "#F76296", // Colore della freccia precedente
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",

                    boxShadow: "0 0 15px black",
                    border: "2px solid black",
                    opacity: 1,
                  }}
                />
              }
              nextIcon={
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                  style={{
                    backgroundColor: "#F76296", // Colore della freccia successiva
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                    boxShadow: "0 0 15px black",
                    border: "2px solid black",
                    opacity: 1,
                  }}
                />
              }
              onSlide={(i) => {
                console.log("funziona??", i);
                this.setState({
                  activeBook: books[i],
                });
              }}
            >
              {chunkedBooks.map((bookGroup, index) => {
                return (
                  <Carousel.Item key={index}>
                    <Row className="d-flex justify-content-center">
                      {bookGroup.map((book) => {
                        return (
                          <Col key={book.asin} xs={12} md={3} lg={3}>
                            <div className="card h-100 bg-info opacity-75">
                              <img
                                src={book.img}
                                alt={"immagine di " + book.title}
                                className="d-block mx-auto "
                                style={{
                                  width: "100%",
                                  height: "300px",
                                  objectFit: "cover",
                                }}
                              />
                              <div className="card-body d-flex flex-column justify-content-between">
                                <h5 className="d-flex flex-column  flex-grow-1">
                                  {book.title}
                                </h5>
                                <p className="mb-0">€ {book.price}</p>
                                <button className="bg-black opacity-75 ">
                                  <a href={book.shoplink}>ACQUISTA ORA</a>
                                </button>
                              </div>
                            </div>
                          </Col>
                        );
                      })}
                    </Row>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Cards;
