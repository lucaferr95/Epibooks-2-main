import React from "react";
import { Col, Container, Row, Carousel } from "react-bootstrap";
import SingleBook from "./SingleBook";
import CommentArea from "./CommentArea";

class BookList extends Component {
  state = {
    asin: "",
  };

  changeAsin = (newAsin) => {
    this.setState({ asin: newAsin });
  };

  chunkArray = (array, chunkSize) => {
    return array.reduce((result, item, index) => {
      const chunkIndex = Math.floor(index / chunkSize);
      if (!result[chunkIndex]) {
        result[chunkIndex] = [];
      }
      result[chunkIndex].push(item);
      return result;
    }, []);
  };

  render() {
    const { BooksArray } = this.props;
    const chunkedBooks = this.chunkArray(BooksArray, 4);

    return (
      <Container fluid className="py-4">
        <Row className="d-md-flex">
          {/* Carousel a sinistra */}
          <Col xs={12} md={6} className=" bg-black text-light">
            <h3 className="text-center mb-4">Seleziona un libro</h3>
            <Carousel
              interval={null}
              prevIcon={
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                  style={{
                    backgroundColor: "#F76296",
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
                    backgroundColor: "#F76296",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                    boxShadow: "0 0 15px black",
                    border: "2px solid black",
                    opacity: 1,
                  }}
                />
              }
            >
              {chunkedBooks.map((bookGroup, index) => (
                <Carousel.Item key={index}>
                  <Row className="justify-content-center">
                    {bookGroup.map((book) => (
                      <Col key={book.asin} xs={12} md={3}>
                        <SingleBook
                          book={book}
                          cambiaasin={this.changeAsin}
                          asinLibroSelezionato={this.state.asin}
                        />
                      </Col>
                    ))}
                  </Row>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>

          {/* CommentArea a destra */}
          <Col xs={12} md={3} className="bg-dark text-light p-4">
            <h4 className="text-center mb-3">Recensioni</h4>
            <CommentArea asin={this.state.asin} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default BookList;
