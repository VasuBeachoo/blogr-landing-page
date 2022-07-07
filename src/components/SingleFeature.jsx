import TextBlock from "./TextBlock";

const SingleFeature = ({ block, heading, paragraph }) => {
  return (
    <div className={`${block}__single-feature`}>
      <TextBlock block={block} heading={heading} paragraph={paragraph} />
    </div>
  );
};

export default SingleFeature;
