import React, { Component } from "react";
import CommentList from "../components/CommentLists";
import AddComment from "../components/AddComments";
const URL = `https://striveschool-api.herokuapp.com/api/comments`;
const TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2RkOGE1NjM4MzRiZjAwMTUwMDA5ZWIiLCJpYXQiOjE3NDM2ODA5NTUsImV4cCI6MTc0NDg5MDU1NX0.eUEdO6Xo7sMCUSlmWNQm_vy_Xz7ezGpz1chLlenM-iI";

class CommentArea extends Component {
  state = {
    comments: [],
  };

  getComments = () => {
    fetch(URL + this.props.asin, {
      headers: {
        Authorization: TOKEN,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Boom");
        }
      })
      .then((data) => {
        console.log("DATA", data);
        this.setState({ comments: data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  componetDidMount = () => {
    this.getComments();
  };
  render() {
    return (
      <div className="comment-area mt-3">
        <CommentList comments={this.state.comments} />
        <AddComment
          asin={this.props.asin}
          onCommentAdded={this.addComment}
        />
      </div>
    );
  }
}

export default CommentArea;
