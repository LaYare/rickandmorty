import Card from '../../molecules/Card/Card';
import './CardList.styles.scss';

const CardList = ({ characters }) => {
  const descriptionList = (description) => {
    const filteredAttributes = Object.entries(description)
      .filter(
        ([key, value]) =>
          !['name', 'image', 'id', 'url', 'episode', 'created'].includes(key) &&
          value !== ''
      )
      .map(([key, value]) => ({
        name: key,
        value: value.name || String(value),
      }));
    return filteredAttributes;
  };

  const CardListMarkup = characters?.map((character) => (
    <Card
      title={character.name}
      image={character.image}
      description={descriptionList(character)}
      id={character.id}
    />
  ));

  return <div className="CardList">{CardListMarkup}</div>;
};

export default CardList;
