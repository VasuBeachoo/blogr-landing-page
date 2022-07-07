import TextBlock from "./TextBlock";

const SingleFeature = ({
  block,
  heading,
  paragraph,
  imgSrc,
  imgAlt,
  direction,
}) => {
  return (
    <div
      className={`${block}__single-feature ${block}__single-feature--${direction}`}
    >
      <TextBlock block={block} heading={heading} paragraph={paragraph} />
      <img src={imgSrc} alt={imgAlt} className={`${block}__img`} />
    </div>
  );
};

export default SingleFeature;
