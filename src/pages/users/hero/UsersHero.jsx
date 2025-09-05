import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UsersHero = () => {
  const [data, setData] = useState(null);
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/users")
      .then(res => setData(res.data))
      .catch(err => setErr(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="py-8 pt-30 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="mb-10 text-center text-black text-3xl font-bold">Users</h2>
        {loading && <p className="text-center">Loading...</p>}
        {err && <p className="text-red-500 text-center">{err}</p>}

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data?.users?.map((user) => (
            <Link key={user.id} to={`/users/${user.id}`}>
              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow p-5 flex flex-col items-center text-center">
                <img
                  src={user.image}
                  alt="user img"
                  className="w-24 h-24 rounded-full object-cover mb-4"
                />
                <h2 className="text-xl font-semibold">
                  {user.firstName} {user.lastName}
                </h2>
                <p className="text-gray-500 text-sm mb-2">{user.email}</p>
                <p className="text-gray-500 text-sm mb-2">Age: {user.age}</p>
                <p className="text-gray-500 text-sm">
                  {user.address?.city}, {user.address?.state}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UsersHero;
