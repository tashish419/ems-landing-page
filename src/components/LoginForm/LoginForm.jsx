import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <div className="bg-gray-800 p-8 rounded-lg shadow-md min-w-[25%]">
      <h2 className="text-orange-400 text-2xl font-bold text-center mb-4">
        Log In
      </h2>
      <form>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-orange-200 text-sm font-semibold mb-2"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full p-3 rounded-md bg-gray-700 text-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-orange-200 text-sm font-semibold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="w-full p-3 rounded-md bg-gray-700 text-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-orange-500 text-gray-900 rounded-md font-semibold hover:bg-orange-400 transition duration-300"
        >
          Log In
        </button>
      </form>
      <p className="text-center text-orange-200 text-sm mt-4">
        New User?{" "}
        <Link to="/signup" className="text-orange-400 hover:underline">
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
