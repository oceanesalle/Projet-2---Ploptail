import React, { useState } from 'react';
import Item from './Item';

const Random = ({ allDrinks }) => {
  const [cocktailIndex, setCocktailIndex] = useState('');
  const [buttonText, setButtonText] = useState(`Click Here !`);

  const getRandomCocktail = () => {
    setCocktailIndex(Math.floor(Math.random() * allDrinks.length));
    setButtonText(`Again`);
  };

  return (
    <div className="random-div">
      <div className="random-item">
        {cocktailIndex !== '' ? (
          <Item
            name={allDrinks[cocktailIndex][1]}
            img={allDrinks[cocktailIndex][16]}
            id={allDrinks[cocktailIndex][0]}
          />
        ) : (
          <h4>Feeling lucky ? Try your luck !</h4>
        )}
        <button className="random-button" onClick={getRandomCocktail}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Random;
