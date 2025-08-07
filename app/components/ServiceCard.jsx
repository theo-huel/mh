import Icon from './Icon.jsx';

const ServiceCard = ({ iconName, title, subtitle, description, isOpen, onToggle, onClick }) => (
  <div
    onClick={onClick || onToggle}
    className="bg-white rounded-xl shadow-lg p-8 transform transition duration-300 ease-in-out hover:scale-105 border border-gray-100 cursor-pointer"
  >
    <div className="text-[#AD9551] mb-6 text-5xl flex justify-center">
      <Icon name={iconName} className="w-16 h-16" />
    </div>
    <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">{title}</h3>
    {subtitle && <h4 className="text-sm text-[#AD9551] mb-4 text-center">{subtitle}</h4>}

    {isOpen && (
      <p className="text-gray-600 text-center whitespace-pre-line transition-all duration-300 ease-in-out mt-4">
        {description}
      </p>
    )}
  </div>
);

export default ServiceCard;
