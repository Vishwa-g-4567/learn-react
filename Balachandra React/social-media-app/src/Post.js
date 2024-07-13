import React from "react";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  return (
    <article className="w-full pt-4 border-b border-slate-400 last:border-b-0">
      <Link to={`posts/${post.id}`}>
        <h1>{post.title}</h1>
        <p className="mt-1 text-xs">{post.datetime}</p>
      </Link>
      <p className="my-4">
        {post.body.length <= 100 ? post.body : `${post.body.slice(0, 100)}...`}
      </p>
    </article>
  );
};

export default Post;
