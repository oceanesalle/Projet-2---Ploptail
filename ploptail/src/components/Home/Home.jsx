import React from 'react';
import Categories from './Categories';
import PropTypes from 'prop-types';
import Banniere from '../Banniere';
import Footer from '../Footer';
import Random from './Random';
import Navbar from '../Navbar';

const Home = ({ data, allDrinks, favoris, setFavoris }) => {
  const alcools = ['Vodka', 'Gin', 'Whisky', 'Rhum', 'Rest'];
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Banniere title="Looking for a cocktail ? Here are some samples." />
        <div className="home-articles">
          {alcools.map((alcool, idx) => (
            <Categories
              key={alcool}
              title={alcool}
              item={data[idx]}
              favoris={favoris}
              setFavoris={setFavoris}
              fa
            />
          ))}
        </div>
        <Random allDrinks={allDrinks} />
      </div>
      <Navbar />
      <Footer />
    </div>
  );
};

Home.propTypes = {
  data: PropTypes.array,
};

Home.defaultProps = {
  data: [],
};
export default Home;
