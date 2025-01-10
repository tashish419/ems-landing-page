import { useDispatch, useSelector } from 'react-redux';
import { LogOut, Bell } from 'lucide-react';
import { signOut } from 'firebase/auth';
import { clearUser } from '../../store/authSlice';
import { auth } from '../../config/firebase';
import { useNavigate } from 'react-router-dom';


const DashboardHeader = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      dispatch(clearUser());
      // Redirect to home page or login page
      navigate("/login")
    } catch (error) {
      console.error('Logout failed', error);
    }
  };

  return (
    <header className="bg-gray-800 border-b border-orange-800/30">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-orange-400 text-xl font-semibold">Dashboard</span>
          </div>
          <div className="flex items-center">
            <button className="p-1 mr-4 text-orange-400 hover:text-orange-300 transition-colors duration-150 ease-in-out">
              <Bell className="w-6 h-6" />
            </button>
            <span className="text-orange-200 mr-4">{user?.email}</span>
            <button
              onClick={handleLogout}
              className="flex items-center px-3 py-2 bg-orange-500 text-gray-900 rounded-lg hover:bg-orange-400 transition-colors duration-150 ease-in-out"
            >
              <LogOut className="w-5 h-5 mr-2" />
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;

