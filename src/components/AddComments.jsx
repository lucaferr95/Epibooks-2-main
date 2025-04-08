import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";

// URL dell'API per i commenti
const URL = "https://striveschool-api.herokuapp.com/api/comments/";

const AddComment = function (props) {
  const [comments, setComments] = useState({
    comment: "",
    rate: "",
    elementId: props.asin, // assicuriamoci che l'asin venga passato come props
  });

  // Aggiorna l'elementId quando asin cambia
  useEffect(() => {
    setComments((prevData) => ({
      ...prevData,
      elementId: props.asin,
    }));
  }, [props.asin]);

  // Funzione per inviare il commento
  const sendComments = (e) => {
    e.preventDefault();
    e.stopPropagation();

    console.log("Dati inviati:", comments);

    fetch(URL, {
      method: "POST",
      body: JSON.stringify(comments),
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2Y0ZWJhNzgxYjBkZDAwMTUwYTdhM2UiLCJpYXQiOjE3NDQxNDYyNjAsImV4cCI6MTc0NTM1NTg2MH0.Vi1qyyeKsYpOGYsG5rdiWOiR6BhX8fVdxXQZ3sXiUr0", // Sostituisci con il token giusto
      },
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
        // Reset dei campi dopo il successo
        setComments({
          comment: "",
          rate: "",
          elementId: props.asin,
        });
      })
      .catch((err) => {
        console.error("Errore:", err);
      });
  };

  return (
    <div onClick={(e) => e.stopPropagation()}>
      <form onSubmit={sendComments}>
        <div className="form-group">
          <label htmlFor="comment">Aggiungi un commento</label>
          <textarea
            id="comment"
            className="form-control"
            value={comments.comment}
            required
            onClick={(e) => e.stopPropagation()} // Mantiene stopPropagation nel textarea
            onChange={(e) =>
              setComments({ ...comments, comment: e.target.value })
            }
          ></textarea>
        </div>
        <div className="form-group">
          <Form.Group className="mb-3">
            <Form.Label>Voto (1-5)</Form.Label>
            <Form.Select
              id="rating"
              value={comments.rate}
              required
              onClick={(e) => e.stopPropagation()} // Mantiene stopPropagation nel select
              onChange={(e) =>
                setComments({ ...comments, rate: e.target.value })
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
};

export default AddComment;
