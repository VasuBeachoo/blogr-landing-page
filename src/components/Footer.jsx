import Link from "./Link";
import logo from "../assets/logo.svg";

const Footer = ({ linkColumns }) => {
  const block = "footer";

  return (
    <footer className={`${block}`}>
      <img src={logo} alt="logo" className={`${block}__logo`} />
      {linkColumns.map((column) => (
        <div className={`${block}__container`}>
          <p className={`${block}__paragraph`}>{column.title}</p>
          {column.links.map((link) => (
            <Link block={block} text={link} />
          ))}
        </div>
      ))}
    </footer>
  );
};

export default Footer;
