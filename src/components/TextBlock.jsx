const TextBlock = ({ block, heading, paragraph }) => {
  return (
    <div className={`${block}__text-block`}>
      <h3 className={`${block}__heading`}>{heading}</h3>
      <p className={`${block}__paragraph`}>{paragraph}</p>
    </div>
  );
};

export default TextBlock;
