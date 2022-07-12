import { useState, useEffect } from "react";
import Header from "./components/Header";
import Button from "./components/Button";
import SingleFeature from "./components/SingleFeature";
import DoubleFeature from "./components/DoubleFeature";
import Footer from "./components/Footer";
import "./css/style.css";
import introBg from "./assets/bg-pattern-intro-desktop.svg";
import editorDesktopImg from "./assets/illustration-editor-desktop.svg";
import phonesDesktopImg from "./assets/illustration-phones.svg";
import circlePattern from "./assets/bg-pattern-circles.svg";
import laptopDesktopImg from "./assets/illustration-laptop-desktop.svg";

const App = () => {
  const [mobile, setMobile] = useState(false);
  const [menu, setMenu] = useState(false);

  const SINGLE_FEATURE = "single";
  const DOUBLE_FEATURE = "double";
  const NORMAL_DIRECTION = "normal-dir";
  const REVERSE_DIRECTION = "reverse-dir";
  const SOLID_BTN = "solid";
  const LIGHT_BTN = "light";

  const navLinks = [
    {
      title: "Product",
      links: ["Overview", "Pricing", "Marketplace", "Features", "Integrations"],
    },
    {
      title: "Company",
      links: ["About", "Team", "Blog", "Careers"],
    },
    {
      title: "Connect",
      links: ["Contact", "Newsletter", "LinkedIn"],
    },
  ];

  const features = [
    {
      type: DOUBLE_FEATURE,
      topHeading: "Introducing an extensible editor",
      topParagraph:
        "Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.",
      bottomHeading: "Robust content management",
      bottomParagraph:
        "Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you're in full control.",
      imgSrc: editorDesktopImg,
      imgAlt: "editor-desktop",
      direction: NORMAL_DIRECTION,
    },
    {
      type: SINGLE_FEATURE,
      heading: "State of the Art Infrastructure",
      paragraph:
        "With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.",
      imgSrc: phonesDesktopImg,
      imgAlt: "phones-desktop",
      direction: REVERSE_DIRECTION,
      bgImg: circlePattern,
    },
    {
      type: DOUBLE_FEATURE,
      topHeading: "Free, open, simple",
      topParagraph:
        "Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.",
      bottomHeading: "Powerful tooling",
      bottomParagraph:
        "Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites.",
      imgSrc: laptopDesktopImg,
      imgAlt: "laptop-desktop",
      direction: REVERSE_DIRECTION,
    },
  ];

  function renderFeatures(block, features) {
    let key = 0;

    return features.map((feature) => {
      const type = feature.type;
      if (type === SINGLE_FEATURE)
        return (
          <SingleFeature
            key={key++}
            block={block}
            heading={feature.heading}
            paragraph={feature.paragraph}
            imgSrc={feature.imgSrc}
            imgAlt={feature.imgAlt}
            direction={feature.direction}
            bgImg={feature.bgImg}
          />
        );
      else if (type === DOUBLE_FEATURE)
        return (
          <DoubleFeature
            key={key++}
            block={block}
            topHeading={feature.topHeading}
            topParagraph={feature.topParagraph}
            bottomHeading={feature.bottomHeading}
            bottomParagraph={feature.bottomParagraph}
            imgSrc={feature.imgSrc}
            imgAlt={feature.imgAlt}
            direction={feature.direction}
          />
        );
      else return <></>;
    });
  }

  function handleResize() {
    if (window.innerWidth <= 1150) setMobile(true);
    else {
      setMenu(false);
      setMobile(false);
    }
  }

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  return (
    <div className="page-container">
      <div className="page">
        <section className="intro">
          <Header
            dropdowns={navLinks}
            mobile={mobile}
            menu={menu}
            setMenu={setMenu}
          />
          <h1 className="intro__heading">A modern publishing platform</h1>
          <p className="intro__paragraph">
            Grow your audience and build your online brand
          </p>
          <div className="intro__btn-container">
            <Button block="intro" text="Start For Free" type={SOLID_BTN} />
            <Button block="intro" text="Learn More" type={LIGHT_BTN} />
          </div>
          <img src={introBg} alt="intro-background" className="intro__bg-img" />
        </section>
        <section className="features">
          <h2 className="features__section-heading">Designed for the future</h2>
          {renderFeatures("features", features)}
        </section>
        <Footer linkColumns={navLinks} />
      </div>
    </div>
  );
};

export default App;
