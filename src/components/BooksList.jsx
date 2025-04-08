import React, { useState } from "react";
import { Col, Container, Row, Carousel } from "react-bootstrap";
import SingleBook from "./SingleBook";
import CommentArea from "./CommentArea";

const BookList = function(props){
 // state = {
   // asin: "",
 // };
const [asin, setAsin] = useState()
  const changeAsin = (newAsin) => {
   setAsin(newAsin );
  };

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


    const { BooksArray } = props;
    const chunkedBooks = chunkArray(BooksArray, 4);

    return (
      <Container fluid className="py-4 d-flex w-100 justify-content-center align-items-stretch">
        <Row className="d-md-flex justify-content-center ">
          {/* Carousel a sinistra */}
          <Col xs={12} md={8} className=" bg-black text-light">
            <h3 className="text-center mb-4 special-elite-regular text-white">Seleziona un libro</h3>
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
                <Carousel.Item style={{ minHeight: "500px" }}
key={index}>
                  <Row className="justify-content-center">
                    {bookGroup.map((book) => (
                      <Col key={book.asin} xs={12} md={3}>
                        <SingleBook
                          book={book}
                          cambiaasin={changeAsin}
                          asinLibroSelezionato={asin}
                        />
                      </Col>
                    ))}
                  </Row>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>

          {/* CommentArea a destra */}
          <Col xs={12} md={4} className="bg-dark text-light p-4">
            <h4 className="text-center mb-3">Recensioni</h4>
            <CommentArea asin={asin} />
          </Col>
        </Row>
      </Container>
    );
  }

export default BookList;