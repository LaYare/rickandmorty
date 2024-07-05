import Input from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';
import './SearchBar.styles.scss';
import status from '../../../utils/status';
import genders from '../../../utils/genders';
import Select from '../../atoms/Select/Select';

const SearchBar = ({ onChange, onSearch, onChangeStatus, onChangeGender }) => {
  return (
    <div className="SearchBar">
      <Input onChange={onChange} />
      <Select options={status} onChange={onChangeStatus} />
      <Select options={genders} onChange={onChangeGender} />
      <Button onClick={onSearch} text={'Search'} />
    </div>
  );
};

export default SearchBar;
