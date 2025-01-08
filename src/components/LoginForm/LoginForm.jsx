import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { validateEmailAndPassword } from "../../utils/validate";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";

const LoginForm = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const message = validateEmailAndPassword(email, password);
    // console.log("error message", message);
    if (message) {
      setErrorMessage(message);
      //   console.log("error", errorMessage); //remember react state is async so react will not update the state immediately but in the next render cycle. Alternatively, you can use either useEffect to watch for changes in errorMessage or console the message directly.
    } else {
      setErrorMessage(null);
    }

    login(email, password);
  };

  const login = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("user info", user);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("error code", errorCode);
      console.log("error message", errorMessage);
      setErrorMessage(errorMessage);
    }
  }

  return (
    <div className="bg-gray-800 p-8 rounded-lg shadow-md min-w-[25%] relative">
      <h2 className="text-orange-400 text-2xl font-bold text-center mb-4">
        Log In
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-orange-200 text-sm font-semibold mb-2"
          >
            Email Address
          </label>
          <input
            ref={emailRef}
            type="email"
            id="email"
            placeholder="Enter your email"
            required
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
            ref={passwordRef}
            type="password"
            id="password"
            required
            placeholder="Enter your password"
            className="w-full p-3 rounded-md bg-gray-700 text-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          {errorMessage && (
            <p className="text-red-400 text-sm mt-1">{errorMessage}</p>
          )}
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
