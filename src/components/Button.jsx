const Button = ({ block, text }) => {
  return <button className={`${block}__btn`}>{text}</button>;
};

export default Button;
