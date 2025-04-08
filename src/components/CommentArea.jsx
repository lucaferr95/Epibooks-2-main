import React, { Component } from "react";
import CommentList from "../components/CommentLists";
import AddComment from "../components/AddComments";
const URL = `https://striveschool-api.herokuapp.com/api/comments`;

class CommentArea extends Component {
  state = {
    comments: [],
  };

  getComments = () => {
    if (!this.props.asin) return; // <-- evita fetch inutili
  
    fetch(URL + "/" + this.props.asin, {
      headers: {
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2Y0ZWJhNzgxYjBkZDAwMTUwYTdhM2UiLCJpYXQiOjE3NDQxMDQzNTksImV4cCI6MTc0NTMxMzk1OX0.NHMyM-ReX8Ho5M5EHi7i6ItGTvUfxV6FlNuaX9cS3-c",
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
        console.log("DATA", data); // verifica che arrivi un array
        this.setState({ comments: data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  

  componentDidUpdate = (prevProps) => {
    if (prevProps.asin !== this.props.asin) {
      console.log("ASIN aggiornato!", this.props.asin);
      this.getComments();
    }
  };
  render() {
    return (
      <div className="comment-area mt-3">
        <AddComment asin={this.props.asin} />
        <CommentList comments={this.state.comments} />
      </div>
    );
  }
}

export default CommentArea;
