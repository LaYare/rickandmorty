import './Input.styles.scss';

const Input = ({ onChange, type = 'text' }) => {
  return (
    <input
      placeholder="Write a name"
      className="Input"
      onChange={onChange}
      type={type}
    />
  );
};

export default Input;
