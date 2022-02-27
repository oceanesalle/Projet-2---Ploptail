import Banniere from '../Banniere';
import Footer from '../Footer';
import FavList from './FavList';
import PropTypes from 'prop-types';
import Navbar from '../Navbar';

const Favoris = ({ favoris, setFavoris }) => {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Banniere title="Find your favorites here !" />
        <FavList favoris={favoris} setFavoris={setFavoris} />
      </div>
      <Navbar />
      <Footer />
    </div>
  );
};

Favoris.propTypes = {
  favoris: PropTypes.array,
  setFavoris: PropTypes.func,
};

Favoris.defaultProps = {
  favoris: [],
};

export default Favoris;
