import React from "react";
import { ListGroup } from "react-bootstrap";

const SingleComment = function (props) {
  return (
    <ListGroup.Item className="d-flex justify-content-between">
      <div className="d-flex flex-wrap align-content-center">
        {props.comments.comment} | {props.comments.rate}/5
      </div>
    </ListGroup.Item>
  );
};

export default SingleComment;
//IIDS