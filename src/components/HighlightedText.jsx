export const HighlightedText = ({ text }) => {
  return <span dangerouslySetInnerHTML={{ __html: text }} />;
};
