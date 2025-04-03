import React from "react";
import SingleComment from "./SingleComment";
import { ListGroup } from "react-bootstrap";

const CommentsList = function (props) {
  return (
    <ListGroup>
      {props.comments.map((comments) => {
        return <SingleComment comments={comments} key={comments._id} />;
      })}
    </ListGroup>
  );
};

export default CommentsList;
