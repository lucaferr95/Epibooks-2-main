import React, { useState, useEffect } from "react";
import CommentList from "../components/CommentLists";
import AddComment from "../components/AddComments";
const URL = `https://striveschool-api.herokuapp.com/api/comments`;

const CommentArea = function (props) {
  const [comments, setComments] = useState([]);

  const getComments = () => {
    if (!props.asin) return; // <-- evita fetch inutili

    fetch(URL + "/" + props.asin, {
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
        setComments(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(
    function () {
      getComments();
    },
    [props.asin]
  );

  return (
    <div className="comment-area mt-3">
      <AddComment asin={props.asin} />
      <CommentList comments={comments} />
    </div>
  );
};

export default CommentArea;
