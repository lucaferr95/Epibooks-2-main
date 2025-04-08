import { useState } from "react";

/*import CommentArea from "../components/CommentArea";
//QUI ABBIAMO IL SINGLE BOOK CON FUNCTION
/*const SingleBook = function (props) {

  return (
    <div className="card h-100 bg-info opacity-75">
    <img
      src={props.book.img}
      alt={"immagine di " + props.book.title}
      className="d-block mx-auto "
      style={{
        width: "100%",
        height: "300px",
        objectFit: "cover",
      }}
    />
    <div className="card-body d-flex flex-column justify-content-between">
    <h5 className="d-flex flex-column  flex-grow-1">{props.book.title}</h5>
    <p className="mb-0">€ {props.book.price}</p>
   <button className="bg-black opacity-75 "><a href={props.book.shoplink}>ACQUISTA ORA</a></button>
  </div>
  </div>
  );
};

export default SingleBook;
/ */

//QUA ANDIAMO A FARE IL SINGLEBOOK CON CLASS (GLI HO DATO GIA' L'IMPOSTAZIONE CON LE CARDS PERSONALIZZATE)

const SingleBook = function (props) {
  return (
    <div
      className={`card h-100 bg-info opacity-75 card-body d-flex flex-column justify-content-between ${
        props.isSelected ? "border-danger" : ""
      }`}
      onClick={() => props.onSelect(props.book.asin)}
      style={{ minHeight: "200px", cursor: "pointer" }}
    >
      <img
        src={props.book.img}
        alt={"immagine di " + props.book.title}
        className=" mx-auto"
        onClick={() => {
          props.cambiaasin(props.book.asin);
        }}
        style={{
          width: "100%",
          height: "300px",
          objectFit: "cover",
        }}
      />
      <div className="card-body d-flex flex-column justify-content-between">
        <h5 className="d-flex flex-column flex-grow-1">{props.book.title}</h5>
        <h6 className="card-title">{props.book.description}</h6>
        <p className="mb-0">€ {props.book.price}</p>
        <button className="bg-black opacity-75">
          <a
            href={props.book.shoplink}
            className="text-white text-decoration-none"
          >
            ACQUISTA ORA
          </a>
        </button>
      </div>
    </div>
  );
};

export default SingleBook;
