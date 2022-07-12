import { useState } from "react";
import Link from "./Link";
import lightArrowIcon from "../assets/icon-arrow-light.svg";

const Dropdown = ({ block, title, dropdownLinks }) => {
  const [dropdown, setDropdown] = useState(false);
  let key = 0;

  return (
    <div className={`${block}__dropdown`}>
      <div className={`${block}__dropdown-container`}>
        <p
          className={`${block}__dropdown-title`}
          onMouseEnter={() => setDropdown(true)}
          onMouseLeave={() => setDropdown(false)}
        >
          {title}
        </p>
        {dropdown ? (
          <img
            src={lightArrowIcon}
            alt="up-arrow"
            className={`${block}__up-arrow`}
          />
        ) : (
          <img
            src={lightArrowIcon}
            alt="down-arrow"
            className={`${block}__down-arrow`}
          />
        )}
      </div>
      {dropdown && (
        <div
          className={`${block}__dropdown-menu`}
          onMouseEnter={() => setDropdown(true)}
          onMouseOver={() => setDropdown(true)}
          onMouseLeave={() => setDropdown(false)}
        >
          {dropdownLinks.map((link) => (
            <Link
              key={key++}
              className={`${block}__dropdown-link`}
              text={link}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
