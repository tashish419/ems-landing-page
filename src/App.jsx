import { useEffect, useState } from "react";
import { Footer, Header } from "./components";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/firebase";
import { useDispatch } from "react-redux";
import { addUser, clearUser } from "./store/authSlice";
import { AVATAR_URL } from "./constants";
import AppRoutes from "./routes/AppRoutes";
import { useNavigate } from "react-router-dom";

function App() {
  const { isLoading, setIsLoading } = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { displayName, email, uid, photoURL } = user;
        // dispatching the user to the store
        console.log("user info", user);
        dispatch(
          addUser({
            displayName: displayName || "guest",
            email,
            uid,
            photoURL: photoURL || AVATAR_URL,
          })
        );
        navigate(`/${(displayName || "guest").replace(/\s+/g, "")}/dashboard`);
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
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
}

export default App;
