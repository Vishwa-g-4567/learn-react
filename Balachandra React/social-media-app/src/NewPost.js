import React, { useContext } from "react";
import DataContext from "./context/DataContext";

const NewPost = () => {
  const { handleSubmit, postTitle, postBody, setPostTitle, setPostBody } =
    useContext(DataContext);
  return (
    <main className="w-full flex-grow flex flex-col justify-center items-center p-4">
      <h1>New Post</h1>
      <form className="w-4/5 flex flex-col gap-4" onSubmit={handleSubmit}>
        <label htmlFor="postTitle">Title :</label>
        <input
          type="text"
          id="postTitle"
          className="w-full min-h-12 text-base p-4 rounded mr-1 outline-none"
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
          required
        />
        <label htmlFor="postBody">Post : </label>
        <textarea
          id="postBody"
          className="w-full h-[100px] min-h-12 text-base p-4 rounded mr-1 outline-none resize-none"
          value={postBody}
          onChange={(e) => setPostBody(e.target.value)}
          required
        ></textarea>
        <button
          type="submit"
          className="bg-[#ccc] mt-4 h-12 min-w-12 rounded-lg p-2 "
        >
          Submit
        </button>
      </form>
    </main>
  );
};

export default NewPost;
