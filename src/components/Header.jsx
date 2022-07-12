import NavMenu from "./NavMenu";
import logo from "../assets/logo.svg";
import menuOpenIcon from "../assets/icon-hamburger.svg";
import menuCloseIcon from "../assets/icon-close.svg";

const Header = ({ dropdowns, mobile, menu, setMenu }) => {
  const block = "header";

  return (
    <header className={`${block}`}>
      <img src={logo} alt="logo" className={`${block}__logo`} />
      {mobile ? (
        menu ? (
          <>
            <img
              src={menuCloseIcon}
              alt="close-menu"
              className={`${block}__menu-close`}
              onClick={() => setMenu(false)}
            />
            <NavMenu dropdowns={dropdowns} btnType="gradient" type="expand" />
          </>
        ) : (
          <img
            src={menuOpenIcon}
            alt="open-menu"
            className={`${block}__menu-open`}
            onClick={() => setMenu(true)}
          />
        )
      ) : (
        <NavMenu dropdowns={dropdowns} btnType="solid" type="hover" />
      )}
    </header>
  );
};

export default Header;
