const Button = ({ block, text, type }) => {
  return (
    <button className={`${block}__btn ${block}__btn--${type}`}>{text}</button>
  );
};

export default Button;
