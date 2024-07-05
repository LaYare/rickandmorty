import './Input.styles.scss';

const Input = ({ onChange, type = 'text' }) => {
  return <input className="Input" onChange={onChange} type={type} />;
};

export default Input;
