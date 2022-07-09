import Dropdown from "./Dropdown";
import Link from "./Link";
import Button from "./Button";
import logo from "../assets/logo.svg";

const Header = ({ dropdowns, btnType }) => {
  const block = "header";
  let key = 0;

  return (
    <header className={`${block}`}>
      <img src={logo} alt="logo" className={`${block}__logo`} />
      <div className={`${block}__dropdowns`}>
        {dropdowns.map((dropdown) => (
          <Dropdown key={key++} block={block} title={dropdown.title} />
        ))}
      </div>
      <div className={`${block}__links`}>
        <Link block={block} text="Login" />
        <Button block={block} text="Sign Up" type={btnType} />
      </div>
    </header>
  );
};

export default Header;
