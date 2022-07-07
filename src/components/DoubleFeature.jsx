import TextBlock from "./TextBlock";

const DoubleFeature = ({
  block = "features",
  topHeading,
  topParagraph,
  bottomHeading,
  bottomParagraph,
  imgSrc,
  imgAlt,
  direction,
}) => {
  return (
    <div
      className={`${block}__double-feature ${block}__double-feature--${direction}`}
    >
      <div className={`${block}__text-container`}>
        <TextBlock
          block={block}
          heading={topHeading}
          paragraph={topParagraph}
        />
        <TextBlock
          block={block}
          heading={bottomHeading}
          paragraph={bottomParagraph}
        />
      </div>
      <img src={imgSrc} alt={imgAlt} className={`${block}__img`} />
    </div>
  );
};

export default DoubleFeature;
