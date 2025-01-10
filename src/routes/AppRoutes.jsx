import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import { Dashboard } from "../components";
import DashboardHome from "../pages/Dashboard/DashboardHome";
import DashboardProfile from "../pages/Dashboard/DashboardProfile";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/:storeName/dashboard" element={<Dashboard />}>
          <Route index element={<DashboardHome />} />
          {/* <Route path="analytics" element={<DashboardAnalytics />} /> */}
          <Route path="profile" element={<DashboardProfile />} />
          {/* <Route path="settings" element={<DashboardSettings />} />
          <Route path="help" element={<DashboardHelp />} /> */}
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
