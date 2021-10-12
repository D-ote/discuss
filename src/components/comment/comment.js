import { nanoid } from "nanoid";
import React, { useState } from "react";
import { ReplyResponse } from "../replyResponse/replyResponse";

export const Comment = (props) => {
  const [reply, setReplyState] = useState(false);
  const [replyText, setReplyText] = useState("");
  const [item, setItem] = useState(props.item);

  let comment = JSON.parse(localStorage.getItem("comment"));

  const stateUpdate = (newItem) => {
    let tempArray = comment;
    let i = tempArray.findIndex((x) => x.id === newItem.id);
    tempArray[i] = newItem;
    localStorage.setItem("comment", JSON.stringify(tempArray));
  };

  const responseData = item?.reply?.map((response) => (
    <ReplyResponse
      id={response.id}
      key={response.id}
      reply={response.reply}
      time={response.time}
    />
  ));

  const handleChange = (e) => {
    e.preventDefault();
    setReplyText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let tape = { id: "item-" + nanoid(), reply: replyText, time: "9 hrs ago" };
    setItem({ ...item, reply: [...item.reply, tape] });
    stateUpdate({ ...item, reply: [...item.reply, tape] });
    setReplyText("")
    setReplyState(false);
  };

  const handleCancelReplyState =(e)=> {
    e.preventDefault();
    setReplyState(false)
    setReplyText("")
  }

  const replyComment = (
    <form className="comments-form">
      <div className="avatar">
        <span>D</span>
      </div>
      <div className="comment-input">
        <input
          type="text"
          id="new-todo-input"
          className="comment-reply"
          placeholder="Leave a reply"
          name="text"
          autoComplete="off"
          value={replyText}
          onChange={handleChange}
        />
        <div className="reply-btns">
          <div className="comment-btn">
            <button
              type="button"
              className="btn btn__primary btn__lg"
              onClick={handleCancelReplyState}
            >
              cancel
            </button>
          </div>
          <div className="comment-btn">
            <button
              type="button"
              className="btn btn__primary btn__lg"
              onClick={handleSubmit}
            >
              Reply
            </button>
          </div>
        </div>
      </div>
    </form>
  );

  return (
    <div className="d-flex comment-section" key={props.id} id={props.id}>
      <div className="avatar">
        <span>D</span>
      </div>
      <div className="comment-body">
        <div className="comment-header">
          <div>Dooter Ior</div>
          <time>{props.time} hours ago</time>
        </div>
        <div className="comment-text">
          <p>{props.commentEntry}</p>
          <button type="submit" onClick={() => setReplyState(true)}>
            REPLY
          </button>
          {reply ? replyComment : ""}
          {responseData ?? ""}
        </div>
      </div>
    </div>
  );
};
