import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import Banniere from '../Banniere';
import Footer from '../Footer';
import Navbar from '../Navbar';

const Ingredients = ({ ingr }) => {
  const ingredients = [];
  for (let i = 17; i <= 31; i++) {
    if (ingr[i] !== '' && ingr[i] !== null) {
      ingredients.push(ingr[i]);
    }
  }
  return (
    <>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index} className="details-li">
            {ingredient}
          </li>
        ))}
      </ul>
    </>
  );
};

const Dosage = ({ dose }) => {
  const dosage = [];
  for (let i = 32; i <= 46; i++) {
    if (dose[i] !== '' && dose[i] !== null) {
      dosage.push(dose[i]);
    }
  }
  return (
    <>
      <ul>
        {dosage.map((dosage, index) => (
          <li key={index} className="details-li">
            {dosage}
          </li>
        ))}
      </ul>
    </>
  );
};

const Details = () => {
  const { drink } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drink}`
    ).then((response) =>
      response.json().then((data) => setData(Object.values(data.drinks[0])))
    );
  }, [drink]);

  if (data === []) return <p>Loading...</p>;
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Banniere title="Cocktail recipe" />
        <div className="details-content">
          <div className="details-text">
            <p>{data[1]}</p>
          </div>
          <div className="details-img">
            <img src={data[16]} alt="" />
          </div>
          <div className="details-comp">
            <Ingredients ingr={data} />
            <Dosage dose={data} />
          </div>
          <div className="details-text">
            <p>Glass Used : {data[8]}</p>
          </div>
          <div className="details-text">
            <p>{data[9]}</p>
          </div>
        </div>
      </div>
      <Navbar />
      <Footer />
    </div>
  );
};

Details.propTypes = {
  data: PropTypes.array,
};

Details.defaultProps = {
  data: [],
};

Ingredients.propTypes = {
  ingr: PropTypes.array,
};

Ingredients.defaultProps = {
  ingr: [],
};

Dosage.propTypes = {
  dose: PropTypes.array,
};

Dosage.defaultProps = {
  dose: [],
};

export default Details;
