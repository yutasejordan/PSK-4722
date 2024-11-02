const Button = ({ bgColor, text }) => {
  return (
    <button
      className={`${bgColor}  py-1.5 px-5 text-white font-medium rounded-md transition-all`}
    >
      {text}
    </button>
  );
};

export default Button;
