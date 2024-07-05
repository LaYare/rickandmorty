import Logo from '../../atoms/Logo/Logo';
import SearchBar from '../../molecules/SearchBar/SearchBar';
import './HeaderSection.styles.scss';

const Header = ({ onChange, onSearch, onChangeGender, onChangeStatus }) => {
  const LogoMarkup = <Logo />;
  const SearchMarkup = (
    <SearchBar
      onChange={onChange}
      onSearch={onSearch}
      onChangeStatus={onChangeStatus}
      onChangeGender={onChangeGender}
    />
  );
  return (
    <header className="Header">
      {LogoMarkup}
      {SearchMarkup}
    </header>
  );
};

export default Header;
