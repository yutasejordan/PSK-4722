const Button = ({ bgColor, text, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className={`${bgColor}  py-1.5 px-5 text-white font-medium rounded-md transition-all`}
      type="submit"
    >
      {text}
    </button>
  );
};

export default Button;
