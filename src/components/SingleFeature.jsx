import TextBlock from "./TextBlock";

const SingleFeature = ({
  block,
  heading,
  paragraph,
  imgSrc,
  imgAlt,
  direction,
  bgImg,
}) => {
  return (
    <div
      className={`${block}__single-feature ${block}__single-feature--${direction}`}
    >
      <TextBlock block={block} heading={heading} paragraph={paragraph} />
      <img src={imgSrc} alt={imgAlt} className={`${block}__single-img`} />
      {bgImg && (
        <div className={`${block}__bg-container`}>
          <img
            src={bgImg}
            alt="feature-pattern"
            className={`${block}__bg-img ${block}__bg-img--${direction}`}
          />
        </div>
      )}
    </div>
  );
};

export default SingleFeature;
