import TextBlock from "./TextBlock";

const DoubleFeature = ({
  block = "features",
  topHeading,
  topParagraph,
  bottomHeading,
  bottomParagraph,
}) => {
  return (
    <div className={`${block}__double-feature`}>
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
      <div className={`${block}__img-container`}></div>
    </div>
  );
};

export default DoubleFeature;
