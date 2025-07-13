// Composant Button réutilisable
const MyButton = ({ children, onClick, variant = 'primary', className = '' }) => {
  const baseStyle = 'px-6 py-3 rounded-full font-semibold transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg';
  const variants = {
    primary: 'bg-indigo-600 text-white hover:bg-indigo-700',
    secondary: 'bg-white text-indigo-600 border border-indigo-600 hover:bg-indigo-50',
    outline: 'bg-transparent text-indigo-600 border border-indigo-600 hover:bg-indigo-600 hover:text-white',
  };
  return (
    <button onClick={onClick} className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};
export default  MyButton;
