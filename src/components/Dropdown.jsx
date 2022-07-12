import { useState } from "react";
import Link from "./Link";
import lightArrowIcon from "../assets/icon-arrow-light.svg";
import darkArrowIcon from "../assets/icon-arrow-dark.svg";

const Dropdown = ({ block, title, dropdownLinks, type }) => {
  const [dropdown, setDropdown] = useState(false);
  let key = 0;

  if (type === "hover")
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
  else if (type === "expand")
    return (
      <div className={`${block}__dropdown`}>
        <div className={`${block}__dropdown-container`}>
          <p
            className={`${block}__dropdown-title`}
            onClick={() => setDropdown(!dropdown)}
          >
            {title}
          </p>
          {dropdown ? (
            <img
              src={darkArrowIcon}
              alt="up-arrow"
              className={`${block}__up-arrow`}
            />
          ) : (
            <img
              src={darkArrowIcon}
              alt="down-arrow"
              className={`${block}__down-arrow`}
            />
          )}
        </div>
        {dropdown && (
          <div className={`${block}__dropdown-menu`}>
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
