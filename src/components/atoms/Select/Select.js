import './Select.styles.scss';

const Select = ({ options, onChange }) => {
  const optionListMarkup =
    options &&
    options.map((option) => {
      return <option value={option}>{option}</option>;
    });
  return (
    options && (
      <select className="Select" onChange={onChange}>
        <option value="">none</option>
        {optionListMarkup}
      </select>
    )
  );
};

export default Select;
