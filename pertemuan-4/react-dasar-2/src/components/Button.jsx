const Button = ({ text, style, handleClick }) => {
  return (
    <button
      className={`py-2 px-4 rounded-md  transition-all font-semibold text-white ${style}`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;
