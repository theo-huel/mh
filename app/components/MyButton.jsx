// Composant Button réutilisable
const MyButton = ({ children, onClick, variant = 'primary', className = '' }) => {
  const baseStyle = 'px-6 py-3 rounded-full font-semibold transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg';
const variants = {
  primary: 'bg-[#AD9452] text-white hover:bg-[#8A7641]',
  secondary: 'bg-white text-[#AD9452] border border-[#96806E] hover:bg-[#F5F1E6]',
  outline: 'bg-transparent text-[#AD9452] border border-[#AD9452] hover:bg-[#96806E] hover:text-white',

  };
  return (
    <button onClick={onClick} className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};
export default  MyButton;
