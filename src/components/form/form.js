import React, { useState } from 'react'

export const Form = (props) => {
    const [comment, setNewComment] = useState("");

    const handleChange =(e)=> {
        e.preventDefault();
        setNewComment(e.target.value)
    }

    const handleSubmit =(e)=> {
        e.preventDefault()
        props.addComment(comment)
        setNewComment("")
        props.setReplyState(false)
    }

    return (
        <form onSubmit={handleSubmit} className="comments-form">
          <div className="avatar">
            <span>D</span>
          </div>
          <div className="comment-input">
            <input
              type="text"
              id="new-todo-input"
              className="input input__lg"
              placeholder="Leave a comment"
              name="text"
              autoComplete="off"
              value={comment}
              onChange={handleChange}
            />
            <div className="comment-btn">
              <button
                type="submit"
                className="btn btn__primary btn__lg"
              >
                  Comment
              </button>
            </div>
          </div>
        </form>
    )
}
