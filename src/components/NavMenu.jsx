import Dropdown from "./Dropdown";
import Link from "./Link";
import Button from "./Button";

const NavMenu = ({ dropdowns, btnType, type }) => {
  const block = "header";
  let key = 0;

  return (
    <div className={`${block}__nav-menu`}>
      <div className={`${block}__dropdowns`}>
        {dropdowns.map((dropdown) => (
          <Dropdown
            key={key++}
            block={block}
            title={dropdown.title}
            dropdownLinks={dropdown.links}
            type={type}
          />
        ))}
      </div>
      <hr className={`${block}__divider`} />
      <div className={`${block}__links`}>
        <Link className={`${block}__link`} text="Login" />
        <Button block={block} text="Sign Up" type={btnType} />
      </div>
    </div>
  );
};

export default NavMenu;
