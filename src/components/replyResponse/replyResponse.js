import React from "react";

export const ReplyResponse = (props) => {
  return (
    <div className="d-flex comment-section" id={props.id}>
      <div className="avatar">
        <span>D</span>
      </div>
      <div className="comment-body">
        <div className="comment-header">
          <div>Dooter Ior</div>
          <time>{props.time}</time>
        </div>
        <div className="comment-text">
          <p>{props.reply}</p>
        </div>
      </div>
    </div>
  );
};
