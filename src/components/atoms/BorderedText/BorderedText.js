import './BorderedText.styles.scss';

const BorderedText = ({ Children, size }) => {
  return <p className={`BorderedText BorderedText--${size}`}>{Children}</p>;
};

export default BorderedText;
