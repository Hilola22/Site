import { CornerUpLeft, House } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-tr from-pink-400 to-blue-500 relative">
      <div className="absolute top-5 left-5 text-white">
        <button
          onClick={() => navigate("/")}
          className="flex items-center flex-col select-none mb-[10px]"
        >
          <House size={35} />
        </button>
        <button
          onClick={() => navigate(-1)}
          className="flex items-center flex-col select-none"
        >
          <CornerUpLeft size={28} />
        </button>
      </div>
      <div className="w-[350px] bg-white rounded-md p-8 shadow-lg">
        <h2 className="text-center text-2xl font-semibold mb-6">Login Form</h2>
        <form>
          <label className="block text-sm mb-1 font-sans">Email or Phone</label>
          <input
            type="text"
            required
            className="w-full h-10 mb-4 px-3 border border-gray-300 rounded-sm focus:outline-none focus:border-gray-400"
          />

          <label className="block text-sm mb-1 font-sans">Password</label>
          <input
            type="password"
            required
            minLength="6"
            maxLength="12"
            className="w-full h-10 mb-2 px-3 border border-gray-300 rounded-sm focus:outline-none focus:border-gray-400"
          />

          <a
            href="#"
            className="block text-sm text-blue-500 hover:underline mb-5"
          >
            Forgot Password?
          </a>

          <button
            type="submit"
            className="w-full py-2 bg-gradient-to-tr from-pink-400 to-blue-500 text-white font-bold uppercase rounded-sm hover:opacity-90 transition"
          >
            Login
          </button>

          <p className="text-center text-sm mt-4">
            Not a member?{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Signup now
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
