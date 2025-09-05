import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/users/${id}`)
      .then(res => setUser(res.data))
      .catch(err => setErr(err.message))
      .finally(() => setLoading(false));
  }, [id]); 

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (err) return <p className="text-center mt-10 text-red-500">{err}</p>;

  return (
    <section className="py-10 pt-30 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <Link to="/users" className="text-blue-600 underline mb-6 inline-block">
          ← Back to Users
        </Link>

        <div className="bg-white mx-auto w-[400px] rounded-2xl shadow-md p-6 flex flex-col items-center text-center">
          <img
            src={user?.image}
            alt="user img"
            className="w-32 h-32 rounded-full object-cover mb-4"
          />
          <h1 className="text-3xl font-bold mb-2">
            {user.firstName} {user.lastName}
          </h1>
          <p className="text-gray-600 mb-2">{user.email}</p>
          <p className="text-gray-600 mb-2">Username: {user.username}</p>
          <p className="text-gray-600 mb-2">Age: {user.age}</p>
          <p className="text-gray-600 mb-2">Gender: {user.gender}</p>
          <p className="text-gray-600 mb-2">Birth Date: {user.birthDate}</p>
          <p className="text-gray-600 mb-2">
            {user.address?.city}, {user.address?.state}
          </p>
          <p className="text-gray-600">Phone: {user.phone}</p>
        </div>
      </div>
    </section>
  );
};

export default UserDetail;
