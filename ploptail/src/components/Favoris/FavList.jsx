import FavItem from './FavItem';
import PropTypes from 'prop-types';

const FavList = ({ favoris, setFavoris }) => {
  if (!favoris[0])
    return <h3>You might want to add something to your favorite</h3>;
  else {
    return (
      <div className="fav-body">
        <div className="favorite-list">
          {favoris.map((item) => (
            <div key={item}>
              <FavItem item={item} favoris={favoris} setFavoris={setFavoris} />
            </div>
          ))}
        </div>
      </div>
    );
  }
};

FavList.propTypes = {
  favoris: PropTypes.array,
  setFavoris: PropTypes.func,
};

FavList.defaultProps = {
  favoris: [],
};
export default FavList;
