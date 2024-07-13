import React, { useContext } from "react";
import DataContext from "./context/DataContext";
import { Link, useParams } from "react-router-dom";

const Posts = () => {
  const { posts, handleDelete } = useContext(DataContext);
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);
  return (
    <main className="w-full flex-grow">
      <article className="p-4">
        {post && (
          <>
            <h2>{post.title}</h2>
            <p className="text-xs">{post.datetime}</p>
            <p className="mt-4">{post.body}</p>
            <Link to={`/edit/${post.id}`}>
              <button className="bg-blue-500 mt-4 mr-4 px-4 py-2 rounded-lg">
                Edit Post
              </button>
            </Link>
            <button
              className="bg-red-500 mt-4 px-4 py-2 rounded-lg"
              onClick={() => handleDelete(post.id)}
            >
              Delete Post
            </button>
          </>
        )}
        {!post && (
          <>
            <h2>Page Not Found</h2>
            <p className="mt-4">Well, that's disappointing.</p>
            <p className="mt-4">
              <Link to="/">Visit Our HomePage</Link>
            </p>
          </>
        )}
      </article>
    </main>
  );
};

export default Posts;
