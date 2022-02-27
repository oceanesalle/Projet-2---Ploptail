import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Item = ({ name, img, id, favoris, setFavoris }) => {
  const handleUnfav = (id) => {
    setFavoris(favoris.filter((item) => item !== id));
  };

  const handleFav = (id) => {
    setFavoris([...favoris, id]);
  };
  return (
    <div className="itemContent">
      {favoris.includes(id) ? (
        <div
          className="isFavorite"
          aria-hidden="true"
          onClick={() => handleUnfav(id)}
        />
      ) : (
        <div
          className="notFavorite"
          aria-hidden="true"
          onClick={() => handleFav(id)}
        />
      )}

      <h4 className="center">{name}</h4>
      <Link to={`/${id}`}>
        <img src={img} alt="" className="center" />
      </Link>
    </div>
  );
};

Item.propTypes = {
  id: PropTypes.string,
  img: PropTypes.string,
  name: PropTypes.string,
  favoris: PropTypes.array,
  setFavoris: PropTypes.func,
};

Item.defaultProps = {
  id: '',
  img: '',
  name: '',
  favoris: [],
};

export default Item;
