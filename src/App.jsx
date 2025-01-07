import { useState } from "react";
import { Footer, Header } from "./components";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";

function App() {
  const { isLoading, setIsLoading } = useState(false);

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div className="min-h-screen">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
