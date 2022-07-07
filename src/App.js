import Header from "./components/Header";
import Button from "./components/Button";
import SingleFeature from "./components/SingleFeature";
import DoubleFeature from "./components/DoubleFeature";
import Footer from "./components/Footer";

const App = () => {
  const SINGLE_FEATURE = "single";
  const DOUBLE_FEATURE = "double";

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
    },
    {
      type: SINGLE_FEATURE,
      heading: "State of the Art Infrastructure",
      paragraph:
        "With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.",
    },
    {
      type: DOUBLE_FEATURE,
      topHeading: "Free, open, simple",
      topParagraph:
        "Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.",
      bottomHeading: "Powerful tooling",
      bottomParagraph:
        "Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites.",
    },
  ];

  function renderFeatures(block, features) {
    return features.map((feature) => {
      const type = feature.type;
      if (type === SINGLE_FEATURE)
        return (
          <SingleFeature
            block={block}
            heading={feature.heading}
            paragraph={feature.paragraph}
          />
        );
      else if (type === DOUBLE_FEATURE)
        return (
          <DoubleFeature
            block={block}
            topHeading={feature.topHeading}
            topParagraph={feature.topParagraph}
            bottomHeading={feature.bottomHeading}
            bottomParagraph={feature.bottomParagraph}
          />
        );
      else return <></>;
    });
  }

  return (
    <div className="page-container">
      <div className="page">
        <section className="intro">
          <Header dropdowns={navLinks} />
          <h1 className="intro__header">A modern publishing platform</h1>
          <p className="intro__paragraph">
            Grow your audience and build your online brand
          </p>
          <div className="intro__btn-container">
            <Button block="intro" text="Start For Free" />
            <Button block="intro" text="Learn More" />
          </div>
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
