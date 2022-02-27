import React from 'react';
import Banniere from '../Banniere';
import Footer from '../Footer';
import Navbar from '../Navbar';
import Search from './Search';
import PropTypes from 'prop-types';
const Recherche = ({ allDrinks, favoris, setFavoris }) => {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Banniere title="Looking for something in particular ?" />
        <Search drinks={allDrinks} favoris={favoris} setFavoris={setFavoris} />
      </div>
      <Navbar />
      <Footer />
    </div>
  );
};

Recherche.propTypes = {
  drinks: PropTypes.array,
  favoris: PropTypes.array,
  setFavoris: PropTypes.func,
};

Recherche.defaultProps = {
  drinks: [],
  favoris: PropTypes.array,
};
export default Recherche;
