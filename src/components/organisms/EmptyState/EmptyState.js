import BorderedText from '../../atoms/BorderedText/BorderedText';
import './EmptyState.styles.scss';

const EmptyState = () => {
  return (
    <div className="EmptyState">
      <BorderedText
        Children={
          'There are approximately 1,500 aliens in Manhattan... but there are none here...'
        }
        size={'x-large'}
      />
    </div>
  );
};

export default EmptyState;
