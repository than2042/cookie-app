import "./button.scss";

const Button = ({ children, onClick, className }) => {
  return (
    <div>
      <button className={`btn ${className}`} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
