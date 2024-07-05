import { useState, useEffect } from 'react';
import BorderedText from '../../atoms/BorderedText/BorderedText';
import List from '../../atoms/List/List';
import CirclePortal from '../CirclePortal/CirclePortal';
import placeholder from '../../../assets/placeholder.jpeg';
import './Card.styles.scss';

const Card = ({ title, image, description, id }) => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const img = new Image();
    img.src = image;
    img.onload = () => setLoaded(true);
  }, [image]);

  const style = {
    backgroundImage: `url('${loaded ? image : placeholder}')`,
    transition: 'background-image 0.5s ease-in-out',
  };

  const TitleMarkup = <BorderedText Children={title} size={'medium'} />;
  const ImageMarkup = <div className="Card__picture" style={style}></div>;
  const DescriptionMarkup = <List listItems={description} />;
  const PortalMarkup = <CirclePortal text={id} />;
  return (
    <div className="Card">
      {TitleMarkup}
      {ImageMarkup}
      {DescriptionMarkup}
      {PortalMarkup}
    </div>
  );
};

export default Card;
