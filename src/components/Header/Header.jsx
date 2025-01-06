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

  return (
    // <nav className="sticky top-0 z-50 py-2 backdrop-blur-lg border-b border-neutral-700/80">
    //   <div className="px-4 md:px-10 flex justify-between">
    //     <div className="flex items-center">
    //       <img src={logoImage} alt="logo" className="w-14 h-14 mr-2" />
    //       <span className="text-orange-400 text-2xl font-semibold">Finwell</span>
    //     </div>

    //     <ul className="hidden md:flex items-center">
    //       {navItems.map((item, index) => {
    //         return (
    //           <li key={index} className="inline-block text-orange-200 hover:text-orange-400 transition duration-300 mx-4">
    //             <Link to={item.href}>{item.title}</Link>
    //           </li>
    //         );
    //       })}
    //     </ul>

    //     <div className="hidden md:flex items-center">
    //       <button className="py-2 px-4 bg-orange-400 rounded-lg text-black hover:bg-orange-500 mx-4">
    //         Log In
    //       </button>
    //       <button className="py-2 px-4 border border-orange-400 rounded-lg hover:bg-orange-400 hover:rounded-lg hover:text-black mx-4">
    //         Sign Up
    //       </button>
    //     </div>

    //     <div className="md:hidden flex items-center">
    //       <button onClick={handleToggleDrawer}>
    //         {!mobileDrawerOpen && <Menu />}
    //       </button>
    //     </div>

    //     {mobileDrawerOpen && (
    //       <div className="fixed z-20 right-0 w-[95%] flex flex-col bg-neutral-900 md:hidden h-[100vh]">
    //         <button
    //           onClick={handleToggleDrawer}
    //           className="flex justify-end mr-2 my-2"
    //         >
    //           <X />
    //         </button>
    //         <ul className="flex flex-col gap-6 px-8 py-6">
    //           {navItems.map((item, index) => {
    //             return (
    //               <li key={index}>
    //                 <Link to={item.href}>{item.title}</Link>
    //               </li>
    //             );
    //           })}
    //         </ul>
    //         <div className="flex flex-col px-8 mb-4 gap-6">
    //           <button className="py-2 px-4 border border-orange-400 rounded-lg">
    //             Sign Up
    //           </button>
    //           <button className="py-2 px-4 bg-orange-400 rounded-lg text-black">
    //             Log In
    //           </button>
    //         </div>
    //       </div>
    //     )}
    //   </div>
    // </nav>
    <nav className="sticky top-0 z-50 py-2 bg-gray-900 bg-opacity-90 backdrop-blur-lg border-b border-orange-800/30">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center">
          <img src={logoImage} alt="Finwell logo" className="w-10 h-10 mr-2" />
          <span className="text-orange-400 text-xl font-bold">Finwell</span>
        </div>

        <ul className="hidden lg:flex items-center space-x-6">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.href}
                className="text-orange-200 hover:text-orange-400 transition duration-300"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center space-x-4">
          <button className="py-2 px-4 bg-orange-500 rounded-full text-gray-900 font-semibold hover:bg-orange-400 transition duration-300">
            Log In
          </button>
          <button className="py-2 px-4 border border-orange-500 text-orange-400 rounded-full hover:bg-orange-500 hover:text-gray-900 transition duration-300">
            Sign Up
          </button>
        </div>

        <button
          onClick={handleToggleDrawer}
          className="lg:hidden text-orange-400 hover:text-orange-300 transition duration-300"
          aria-label={mobileDrawerOpen ? "Close menu" : "Open menu"}
        >
          {mobileDrawerOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {mobileDrawerOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <div
              className="fixed inset-0 bg-gray-900 bg-opacity-75 backdrop-blur-sm"
              onClick={handleToggleDrawer}
            ></div>
            <div className="fixed right-0 top-0 bottom-0 w-64 bg-gray-800 p-6 overflow-y-auto">
              <div className="flex justify-end mb-6">
                <button
                  onClick={handleToggleDrawer}
                  className="text-orange-400 hover:text-orange-300 transition duration-300"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>
              <ul className="space-y-4 mb-6">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.href}
                      className="block text-orange-200 hover:text-orange-400 transition duration-300"
                      onClick={handleToggleDrawer}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="space-y-4">
                <button className="w-full py-2 px-4 bg-orange-500 rounded-full text-gray-900 font-semibold hover:bg-orange-400 transition duration-300">
                  Log In
                </button>
                <button className="w-full py-2 px-4 border border-orange-500 text-orange-400 rounded-full hover:bg-orange-500 hover:text-gray-900 transition duration-300">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
