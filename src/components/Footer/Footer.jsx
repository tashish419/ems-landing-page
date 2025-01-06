import {
  resourcesLinks,
  platformLinks,
  companyLinks,
  ContactUsLinks,
} from "../../constants";
import { Mail, Phone, MapPin } from 'lucide-react';
import PropTypes from 'prop-types';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-orange-100 py-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 border-t border-orange-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <FooterSection title="Resources" links={resourcesLinks} />
          <FooterSection title="Platform" links={platformLinks} />
          <FooterSection title="Company" links={companyLinks} />
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-400">Contact Us</h3>
            <ul className="space-y-3">
              {ContactUsLinks.map((link, index) => (
                <li key={index} className="flex items-start">
                  {getIcon(link.icon)}
                  <p className="text-orange-200 hover:text-orange-400 transition duration-300 ml-2">
                    {link.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-orange-800/30 text-center text-orange-300">
          <p>&copy; {new Date().getFullYear()} Finwell. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const FooterSection = ({ title, links }) => (
  <div>
    <h3 className="text-lg font-semibold mb-4 text-orange-400">{title}</h3>
    <ul className="space-y-2">
      {links.map((link, index) => (
        <li key={index}>
          <a
            href={link.href}
            className="text-orange-200 hover:text-orange-400 transition duration-300"
          >
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const getIcon = (iconName) => {
  switch (iconName) {
    case 'Mail':
      return <Mail className="w-5 h-5 text-orange-400" />;
    case 'Phone':
      return <Phone className="w-5 h-5 text-orange-400" />;
    case 'MapPin':
      return <MapPin className="w-8 h-8 text-orange-400" />;
    default:
      return null;
  }
};

export default Footer;

FooterSection.propTypes ={
  title: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.shape({
    href: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
};

