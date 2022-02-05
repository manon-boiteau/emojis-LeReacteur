const Line = ({ text, className, symbol, title }) => {
  // Function to copy/paste emojis
  const textCopy = (event) => {
    event.preventDefault();
    navigator.clipboard.writeText(symbol);
  };

  return (
    <div className={className} onClick={textCopy}>
      <div>
        <span>{symbol}</span>
        <span>{title}</span>
      </div>
      <span className="hidden">{text}</span>
    </div>
  );
};

export default Line;
