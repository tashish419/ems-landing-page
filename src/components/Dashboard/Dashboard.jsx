import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";


const Dashboard = () => {
  const { displayName } = useSelector(state => state.auth?.user);
  return (
    <div className="flex h-screen bg-gray-900">
      <Sidebar storeName={displayName}/>
      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-900">
        <div className="container mx-auto px-6 py-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
