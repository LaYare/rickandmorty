import './List.styles.scss';

const List = ({ listItems }) => {
  const listItemsMarkup = listItems?.map((item) => {
    return (
      <li>
        <b>{item.name}:</b> {item.value}
      </li>
    );
  });
  return listItems && <ul className="List"> {listItemsMarkup}</ul>;
};

export default List;
