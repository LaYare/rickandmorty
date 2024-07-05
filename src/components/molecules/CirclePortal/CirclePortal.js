import BorderedText from '../../atoms/BorderedText/BorderedText';
import './CirclePortal.styles.scss';

const CirclePortal = ({ text }) => {
  return (
    <div className="CirclePortal">
      <BorderedText Children={text} size={'large'} />
    </div>
  );
};

export default CirclePortal;
