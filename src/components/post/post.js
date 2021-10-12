import React, { useState } from "react";

export const Post = (props) => {
    const [post, setPost] = useState("")

    const handleChange =(e)=> {
        e.preventDefault();
        setPost(e.target.value)
    }

    const handleSubmit =(e)=> {
        e.preventDefault()
        props.newPost(post)
        setPost("")
    }

  return (
    <form onSubmit={handleSubmit} className="comments-form">
      <div className="avatar allcomment-avatar">
        <span>A</span>
      </div>
      <div className="comment-input">
        <input
          type="text"
          id="new-todo-input"
          className="input allcomments-input"
          placeholder="Leave a comment"
          name="text"
          autoComplete="off"
          value={post}
          onChange={handleChange}
        />
        <div className="comment-btn">
          <button
            type="submit"
            className="btn btn__primary btn__lg allcomment-avatar"
            disabled={post === "" ? true : false}
          >
            Post
          </button>
        </div>
      </div>
    </form>
  );
};
