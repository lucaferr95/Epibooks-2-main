import { Component } from "react";

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

class SingleBook extends Component {
  state = {
    selected: false,
  };
  toggleSelection = () => {
    this.setState((prevState) => ({ selected: !prevState.selected }));
  };
  render() {
    return (
      <div
        className={`card h-100 bg-info opacity-75 card-body d-flex flex-column justify-content-between" style={{ minHeight: "200px" }}>
 ${
          this.state.selected ? "border border-danger " : ""
        }`}
        onClick={this.toggleSelection}
      >
        <img
          src={this.props.book.img}
          alt={"immagine di " + this.props.book.title}
          className=" mx-auto"
          onClick={() => {
            this.props.cambiaasin(this.props.book.asin);
          }}
          style={{
            width: "100%",
            height: "300px",
            objectFit: "cover",
          }}
        />
        <div className="card-body d-flex flex-column justify-content-between">
          <h5 className="d-flex flex-column flex-grow-1">
            {this.props.book.title}
          </h5>
          <h6 className="card-title">{this.props.book.description}</h6>
          <p className="mb-0">€ {this.props.book.price}</p>
          <button className="bg-black opacity-75">
            <a
              href={this.props.book.shoplink}
              className="text-white text-decoration-none"
            >
              ACQUISTA ORA
            </a>
          </button>
        </div>
      </div>
    );
  }
}

export default SingleBook;
