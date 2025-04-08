import React from "react";
import SingleComment from "./SingleComment";
import { ListGroup } from "react-bootstrap";

const CommentsList = function (props) {
 
  
  return (
    <ListGroup>
      {props.comments.map((comment) => {
        return <SingleComment comments={comment} key={comment._id}  onDelete={props.onNewComment} />;
      })}
    </ListGroup>
  );
};

export default CommentsList;
