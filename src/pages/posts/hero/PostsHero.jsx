import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PostsHero = () => {
  const [data, setData] = useState(null);
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/posts")
      .then(res => setData(res.data))
      .catch(err => setErr(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="py-8 pt-30 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6 text-center">Posts</h1>

        {loading && <p className="text-center">Loading...</p>}
        {err && <p className="text-red-500 text-center">{err}</p>}

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {data?.posts?.map((post) => (
            <Link key={post.id} to={`/posts/${post.id}`}>
              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow p-5 flex flex-col h-full min-h-[250px]">
                <div className="mb-4 flex-grow">
                  <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                  <p className="text-gray-600 text-sm overflow-hidden h-[80px]">
                    {post.body}
                  </p>
                </div>

                <div className="flex justify-between items-center mt-auto text-gray-500 text-sm">
                  <span className="flex items-center gap-1">
                    Likes: {post.reactions?.likes || 0}👍
                  </span>
                  <span className="flex items-center gap-1">
                    Dislikes: {post.reactions?.dislikes || 0}👎
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PostsHero;
