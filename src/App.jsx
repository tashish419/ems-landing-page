import { useEffect, useState } from "react";
import { Dashboard, Footer, Header } from "./components";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/firebase";
import { useDispatch } from "react-redux";
import { addUser, clearUser } from "./utils/store/authSlice";
import { AVATAR_URL } from "./constants";
// import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const { isLoading, setIsLoading } = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { displayName, email, uid, photoURL } = user;
        // dispatching the user to the store
        dispatch(
          addUser({
            displayName: displayName || "guest",
            email,
            uid,
            photoURL: photoURL || AVATAR_URL,
          })
        );
      } else {
        dispatch(clearUser());
      }
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/:storename/dashboard"
            element={
              // <ProtectedRoute>
                <Dashboard />
              // </ProtectedRoute>
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
