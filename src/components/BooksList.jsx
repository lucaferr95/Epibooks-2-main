import React from "react";
import { Col, Container, Row, Carousel } from "react-bootstrap";
import SingleBook from "./SingleBook";

const BookList = ({ BooksArray, selectedBook, setSelectedBook, className }) => {
  const chunkArray = (array, chunkSize) => {
    return array.reduce((result, item, index) => {
      const chunkIndex = Math.floor(index / chunkSize);
      if (!result[chunkIndex]) {
        result[chunkIndex] = [];
      }
      result[chunkIndex].push(item);
      return result;
    }, []);
  };

  const chunkedBooks = chunkArray(BooksArray, 4);

  return (
    <Container className={className}>
      <Row className="justify-content-center">
        <Col xs={12} md={9} lg={9} className="text-center w-100 bg-black">
          <Carousel
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
                <Row className="d-flex justify-content-center">
                  {bookGroup.map((book) => (
                    <Col key={book.asin} xs={12} md={3} lg={3}>
                      <SingleBook
                        book={book}
                        isSelected={selectedBook === book.asin}
                        setSelectedBook={setSelectedBook}
                      />
                    </Col>
                  ))}
                </Row>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default BookList;
