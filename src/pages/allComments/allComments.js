import { nanoid } from "nanoid";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { Post } from "../../components/post/post";

export const AllComments = () => {
  // const getAllComments =()=> {
  //   const res = RequestProcessor({
  //     method: "POST",
  //     url: "post/new"
  //   })
  // }

  const postFromLocal = localStorage.getItem("post")
    ? JSON.parse(localStorage.getItem("post"))
    : [];
  const [postBlock, setPostBlock] = useState(postFromLocal);
  const history = useHistory();

  const handleExpand = (id) => {
    let exactPost = postBlock.find((post) => post.id === id);
    history.push({ pathname: "/singleComment", state: exactPost });
  };

  const newPost = (postEntry) => {
    const postText = {
      id: "post-" + nanoid(),
      comment: postEntry,
      postComments: [],
    };
    setPostBlock([...postBlock, postText]);
  };

  useEffect(() => {
    localStorage.setItem("post", JSON.stringify(postBlock));
  }, [postBlock]);

  return (
    <div className="all-comments">
      <h1>Got a topic worth discussing?</h1>
      <Post newPost={newPost} />
      <h1>All Posts</h1>
      {postBlock.map((item) => (
        <div className="comment-body commnent-wrap" key={item.id} id={item.id}>
          <div className="comment-header">
            <div>Alvin</div>
            <time>10 hours ago</time>
          </div>
          <div className="comment-text all-comments-text">
            <p>{item.comment}</p>
            <div className="all-comments-btn">
              <button type="button" onClick={() => handleExpand(item.id)}>
                Expand
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
