import { NavLink } from 'react-router-dom';
import { Home, PieChart, User, Settings, HelpCircle } from 'lucide-react';
import PropTypes from 'prop-types';

const Sidebar = () => {
  const navItems = [
    { icon: Home, text: 'Home', to: '' },
    { icon: PieChart, text: 'Analytics', to: 'analytics' },
    { icon: User, text: 'Profile', to: 'profile' },
    { icon: Settings, text: 'Settings', to: 'settings' },
    { icon: HelpCircle, text: 'Help', to: 'help' },
  ];

  return (
    <div className="flex flex-col w-64 bg-gray-800 border-r border-orange-800/30">
      <div className="flex flex-col flex-1 overflow-y-auto">
        <nav className="flex-1 px-2 py-4 space-y-2">
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.to}
              end={item.to === ''}
              className={({ isActive }) =>
                `flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-150 ease-in-out ${
                  isActive
                    ? 'bg-orange-500 text-gray-900'
                    : 'text-orange-200 hover:bg-gray-700 hover:text-orange-400'
                }`
              }
            >
              <item.icon className="w-5 h-5 mr-3" />
              <span>{item.text}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  storeName: PropTypes.string.isRequired,
};

export default Sidebar;