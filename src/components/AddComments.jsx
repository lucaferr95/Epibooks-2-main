import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";

const URL = 'https://striveschool-api.herokuapp.com/api/comments/'
const TOKEN = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWJiYWIwMjViMjYxNTAwMTk4YTY5NmEiLCJpYXQiOjE3NDM2OTM5NzksImV4cCI6MTc0NDkwMzU3OX0.lwf-ZIFoaovBa04KJbdJgNOkivE8F7TkiASjtoOsHWs";

class AddComment extends Component {
  state = {
    comments: { comment: "", rate: "", elementId: this.props.asin || "" },
  };

  sendComments = (e) => {
    e.preventDefault();
    e.stopPropagation(); // Mantiene la stopPropagation()

    console.log("Dati inviati:", this.state.comments);

    fetch(URL, {
      method: "POST",
      body: JSON.stringify(this.state.comments),
      headers: { "Content-Type": "application/json", authorization: TOKEN },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nell'invio del commento");
        }
      })
      .then((data) => {
        console.log("Commento inviato con successo:", data);
        this.setState({
          comments: { comment: "", rate: "", elementId: this.props.asin },
        });
      })
      .catch((err) => {
        console.error("Errore:", err);
      });
  };

  render() {
    return (
      <div onClick={(e) => e.stopPropagation()}>
        <form onSubmit={this.sendComments}>
          <div className="form-group">
            <label htmlFor="comment">Aggiungi un commento</label>
            <textarea
              id="comment"
              className="form-control"
              value={this.state.comments.comment}
              required
              onClick={(e) => e.stopPropagation()} // Mantiene stopPropagation nel textarea
              onChange={(e) =>
                this.setState({ comments: { ...this.state.comments, comment: e.target.value } })
              }
            ></textarea>
          </div>
          <div className="form-group">
            <Form.Group className="mb-3">
              <Form.Label>Voto (1-5)</Form.Label>
              <Form.Select
                id="rating"
                value={this.state.comments.rate}
                required
                onClick={(e) => e.stopPropagation()} // Mantiene stopPropagation nel select
                onChange={(e) =>
                  this.setState({ comments: { ...this.state.comments, rate: Number(e.target.value) } })
                }
              >
                <option value="">Seleziona un voto</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </Form.Select>
            </Form.Group>
          </div>
          <Button type="submit" className="bg-black opacity-75 text-light mt-3">
            Aggiungi Commento
          </Button>
        </form>
      </div>
    );
  }
}

export default AddComment;


