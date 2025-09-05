import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const PostsDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/posts/${id}`)
      .then(res => setPost(res.data))
      .catch(err => setErr(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (err) return <p className="text-center mt-10 text-red-500">{err}</p>;

  return (
    <section className="py-10 pt-30 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <Link to="/posts" className="text-blue-600 underline mb-6 inline-block">
          ← Back to Posts
        </Link>

        <div className="bg-white rounded-2xl shadow-md p-6">
          <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
          <p className="text-gray-700 mb-4">{post.body}</p>
          <div className="flex gap-4 text-gray-500">
            <span>Likes: {post.reactions?.likes || 0} 👍</span>
            <span>Dislikes: {post.reactions?.dislikes || 0} 👎</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostsDetail;
