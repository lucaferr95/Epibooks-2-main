import React, { Component } from "react";
import CommentList from "../components/CommentLists";
import AddComment from "../components/AddComments";
const URL = `https://striveschool-api.herokuapp.com/api/comments`;


class CommentArea extends Component {
  state = {
    comments: [],
  };

  getComments = () => {
    fetch(URL + "/" + this.props.asin, {
      headers: {
        authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWJiYWIwMjViMjYxNTAwMTk4YTY5NmEiLCJpYXQiOjE3NDM2OTM5NzksImV4cCI6MTc0NDkwMzU3OX0.lwf-ZIFoaovBa04KJbdJgNOkivE8F7TkiASjtoOsHWs',
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
  componentDidMount = () => {
    this.getComments();
  };
  render() {
    return (
      <div className="comment-area mt-3">
       
        <AddComment
          asin={this.props.asin}

        />
         <CommentList comments={this.state.comments} />
      </div>
    );
  }
}

export default CommentArea;
