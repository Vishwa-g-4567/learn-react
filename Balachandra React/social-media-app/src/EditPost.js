import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import DataContext from "./context/DataContext";

const EditPost = () => {
  const {
    posts,
    handleEdit,
    postEditTitle,
    setPostEditTitle,
    postEditBody,
    setPostEditBody,
  } = useContext(DataContext);
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);
  useEffect(() => {
    if (post) {
      setPostEditTitle(post.title);
      setPostEditBody(post.body);
    }
  }, [setPostEditTitle, setPostEditBody]);
  return (
    <main className="w-full flex-grow flex flex-col justify-center items-center p-4">
      {postEditTitle && (
        <>
          <h1>Edit Post</h1>
          <form
            className="w-4/5 flex flex-col gap-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <label htmlFor="postTitle">Title :</label>
            <input
              type="text"
              id="postTitle"
              className="w-full min-h-12 text-base p-4 rounded mr-1 outline-none"
              value={postEditTitle}
              onChange={(e) => setPostEditTitle(e.target.value)}
              required
            />
            <label htmlFor="postBody">Post : </label>
            <textarea
              id="postBody"
              className="w-full h-[100px] min-h-12 text-base p-4 rounded mr-1 outline-none resize-none"
              value={postEditBody}
              onChange={(e) => setPostEditBody(e.target.value)}
              required
            ></textarea>
            <button
              type="submit"
              className="bg-[#ccc] mt-4 h-12 min-w-12 rounded-lg p-2 "
              onClick={() => handleEdit(post.id)}
            >
              Save Changes
            </button>
          </form>
        </>
      )}
      {!postEditTitle && (
        <>
          <h2>Page Not Found</h2>
          <p className="mt-4">Well, that's disappointing.</p>
          <p className="mt-4">
            <Link to="/">Visit Our HomePage</Link>
          </p>
        </>
      )}
    </main>
  );
};

export default EditPost;
