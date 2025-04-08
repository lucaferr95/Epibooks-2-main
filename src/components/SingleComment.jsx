import React from "react";
import { ListGroup, Button } from "react-bootstrap";

const URL = "https://striveschool-api.herokuapp.com/api/comments/";
const SingleComment = function (props) {
  const deleteComment= ()=>{
  
    fetch(URL + props.comments._id, {
      method: "DELETE",
 
      headers: {
        
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2Y0ZWJhNzgxYjBkZDAwMTUwYTdhM2UiLCJpYXQiOjE3NDQxNDYyNjAsImV4cCI6MTc0NTM1NTg2MH0.Vi1qyyeKsYpOGYsG5rdiWOiR6BhX8fVdxXQZ3sXiUr0", // Sostituisci con il token giusto
      },
    })
      .then((response) => {
        if (response.ok) {
          props.onDelete();
        } else {
          throw new Error("Errore nell'invio del commento");
        }
      })
      

      .catch((err) => {
        console.error("Errore:", err);
      })
    }
  
  return (
    <ListGroup.Item className="d-flex justify-content-between bg-black text-white fst-italic pt-2 border-top border-danger mb-1">

      <div className="d-flex flex-wrap align-content-center  ">
        {props.comments.comment} | {props.comments.rate}/5
      </div>
      <Button variant="danger" size="sm" onClick={deleteComment}>
        Elimina
      </Button>
    </ListGroup.Item>
  );
};

export default SingleComment;
