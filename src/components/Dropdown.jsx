import lightArrowIcon from "../assets/icon-arrow-light.svg";

const Dropdown = ({ block, title }) => {
  return (
    <div className={`${block}__dropdown`}>
      <div className={`${block}__dropdown-container`}>
        <p className={`${block}__dropdown-title`}>{title}</p>
        <img
          src={lightArrowIcon}
          alt="down-arrow"
          className={`${block}__down-arrow`}
        />
      </div>
    </div>
  );
};

export default Dropdown;
