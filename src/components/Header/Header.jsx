import { Link } from "react-router-dom";
import logoImage from "../../../src/assets/images/logo.png";
import { navItems } from "../../constants";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const handleToggleDrawer = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const handleLogin = () => {
    window.location.href = "/login";
  }

  const handleSignUp = () => {
    window.location.href = "/signup";
  }

  return (
    <nav className="sticky top-0 z-50 py-2 bg-gray-900 bg-opacity-90 backdrop-blur-lg border-b border-orange-800/30">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 flex justify-between">
        <div className="flex items-center">
          <img src={logoImage} alt="Finwell logo" className="w-10 h-10 mr-2" />
          <span className="text-orange-400 text-xl font-bold">Finwell</span>
        </div>

        <ul className="hidden lg:flex items-center space-x-6">
          {navItems.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.href} className="text-orange-200 hover:text-orange-400 transtion duration-300">{item.title}</Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:flex items-center space-x-4">
          <button onClick={handleLogin} className="py-2 px-4 bg-orange-500 rounded-full text-gray-900 font-semibold hover:bg-orange-400 transition duration-300">
            Log In
          </button>
          <button onClick={handleSignUp} className="py-2 px-4 border border-orange-500 text-orange-400 rounded-full hover:bg-orange-500  hover:text-gray-900 transition duration-300">
            Sign Up
          </button>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={handleToggleDrawer}>
            {!mobileDrawerOpen && <Menu className="text-orange-400" />}
          </button>
        </div>

        {mobileDrawerOpen && (
          <div className="fixed z-20 right-0 w-[95%] flex flex-col bg-gray-900 md:hidden h-[100vh]">
            <button
              onClick={handleToggleDrawer}
              className="flex justify-end mr-2 my-2 text-orange-400"
            >
              <X />
            </button>
            <ul className="flex flex-col gap-6 px-8 py-6 text-orange-200">
              {navItems.map((item, index) => {
                return (
                  <li key={index}>
                    <Link to={item.href}>{item.title}</Link>
                  </li>
                );
              })}
            </ul>
            <div className="flex flex-col px-8 mb-4 gap-6">
              <button onClick={handleSignUp} className="py-3 border border-orange-400 rounded-lg text-orange-200">
                Sign Up
              </button>
              <button onClick={handleLogin} className="py-3 bg-orange-400 rounded-lg text-black font-semibold">
                Log In
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;

