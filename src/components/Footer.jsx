import Link from "./Link";
import logo from "../assets/logo.svg";

const Footer = ({ linkColumns }) => {
  const block = "footer";
  let key = 0;

  return (
    <footer className={`${block}`}>
      <img src={logo} alt="logo" className={`${block}__logo`} />
      {linkColumns.map((column) => (
        <div key={key++} className={`${block}__column`}>
          <p className={`${block}__column-title`}>{column.title}</p>
          {column.links.map((link) => (
            <Link key={key++} className={`${block}__link`} text={link} />
          ))}
        </div>
      ))}
    </footer>
  );
};

export default Footer;
