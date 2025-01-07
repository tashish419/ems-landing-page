import { Link } from "react-router-dom";

const SignUpForm = () => {
  return (
    <div className="w-[25%] bg-gray-800 rounded-lg p-8 shadow-md ">
      <h2 className="text-center text-orange-400 font-bold text-2xl mb-4">
        Sign Up
      </h2>
      <form>
        <div className="mb-4 flex gap-2">
          <div>
            <label
              htmlFor="first_name"
              className="text-orange-200 text-sm font-semibold mb-2 block"
            >
              First Name
            </label>
            <input
              type="text"
              id="first_name"
              placeholder="Jack"
              className="p-3 w-full bg-gray-700 text-orange-200 focus:ring-orange-400 focus:ring-2 focus:outline-none rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="last_name"
              className="text-orange-200 text-sm font-semibold mb-2 block"
            >
              Last Name
            </label>
            <input
              type="text"
              id="last_name"
              placeholder="Ma"
              className="p-3 w-full bg-gray-700 text-orange-200 focus:ring-orange-400 focus:ring-2 focus:outline-none rounded-md"
            />
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="text-orange-200 text-sm font-semibold mb-2 block"
          >
            Email Address
          </label>
          <input
            type="text"
            id="email"
            placeholder="john@gmail.com"
            className="p-3 w-full bg-gray-700 text-orange-200 focus:ring-orange-400 focus:ring-2 focus:outline-none rounded-md"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="text-orange-200 text-sm font-semibold mb-2 block"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="********"
            className="p-3 w-full bg-gray-700 text-orange-200 focus:ring-orange-400 focus:ring-2 focus:outline-none rounded-md"
          />
        </div>
        <button
          type="submit"
          className="py-3 w-full bg-orange-500 hover:bg-orange-400 transition transition-duration-300 rounded-lg text-gray-900 font-semibold mb-4"
        >
          Sign Up
        </button>
      </form>
      <p className="text-sm text-orange-200 text-center">
        Already have an account?{" "}
        <Link to="/login" className="text-orange-400 hover:underline">
          Log In
        </Link>
      </p>
    </div>
  );
};

export default SignUpForm;
