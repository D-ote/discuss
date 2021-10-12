import { Form } from "../../components/form/form";
import { Comment } from "../../components/comment/comment";
import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { useLocalStorage } from "../../components/utils/useLocalStorage/useLocalStorage";
import { useHistory } from "react-router";
import back from "../../assets/backIcon.svg";

export const SingleComment = () => {
  const history = useHistory();
  const { location } = useHistory();

  const [data, setData] = useState({});
  console.log(data.postComments, "data");

  // const [comment, setNewComment] = useLocalStorage("comment", []);
  const [comment, setNewComment] = useState([]);

  const getCurrentCommentForPost =(currentData)=>{
    let comments = localStorage.getItem("comment") ? JSON.parse(localStorage.getItem("comment")) : [];

    let commentQ = [];

    for (let i = 0; i < currentData.postComments.length; i++) {
      for (let j = 0; j < comments.length; j++) {
        if(currentData.postComments[i] === comments[j].id){
          commentQ.push(comments[j])
        }
      }
    }

    console.log(`commentQ`, commentQ)
    setNewComment([...comment, ...commentQ])
    // return commentQ
  }

  console.log(`comment`, comment)
  const [replyState, setReplyState] = useState(false);

  const today = new Date();
  const time = today.getHours();
  
  const post = JSON.parse(localStorage.getItem("post"))
  const updatePost = (commentId) => {
    let tempArray = post;
    let i = tempArray.findIndex((x) => x.id === data.id);
    let updateData = {...data, postComments: [...data.postComments, commentId]};
    tempArray[i] = updateData
    localStorage.setItem("post", JSON.stringify(tempArray));
  };

  const addComment = (entry) => {
    const newEntry = { id: "id-" + nanoid(), comment: entry, reply: [] };
    updatePost(newEntry.id)
    setNewComment([...comment, newEntry]);
    localStorage.setItem("comment", JSON.stringify([...comment, newEntry]))
  };

  const commentList = comment.map((item) => (
    <Comment
      id={item.id}
      key={item.id}
      commentEntry={item.comment}
      time={time}
      item={item}
    />
  ));

  const handleReplyState = (e) => {
    e.preventDefault();
    setReplyState(true);
  };

  const handleReturnToAllCommentsPage = (e) => {
    e.preventDefault();
    history.push("/");
  };

  useEffect(() => {
    if (location.state) {
      setData(location.state);
      getCurrentCommentForPost(location.state)
    }
  }, [location]);

  return (
    <div className="App">
      <div className="backIcon" onClick={handleReturnToAllCommentsPage}>
        <img src={back} alt="backIcon" />
      </div>
      <div className="d-flex comment-section" id={data.id}>
        <div className="avatar">
          <span>A</span>
        </div>
        <div className="comment-body">
          <div className="comment-header">
            <div>Alvin</div>
            <time>10 hours ago</time>
          </div>
          <div className="comment-text">
            <p>{data.comment}</p>
            <button type="button" onClick={handleReplyState}>
              COMMENT
            </button>
            {replyState ? (
              <div>
                <Form addComment={addComment} setReplyState={setReplyState} />
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <h1>All Comments</h1>
      {commentList}
    </div>
  );
};
