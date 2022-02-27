import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const FavItem = ({ item, favoris, setFavoris }) => {
  const [data, setData] = useState([]);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${item}`
    ).then((response) =>
      response.json().then((response) => {
        setData(Object.values(response.drinks[0]));
        setReady(true);
      })
    );
  }, [item]);

  const handleUnfav = (id) => {
    setFavoris(favoris.filter((item) => item !== id));
  };

  if (ready === false) return <p>Loading...</p>;
  else {
    return (
      <div className="fav-item">
        <div
          className="isFavorite"
          role="button"
          onClick={() => handleUnfav(item)}
          tabIndex={0}
          aria-hidden="true"
        />
        <p className="fav-text">{data[1]}</p>
        <Link to={`/${data[0]}`}>
          <img className="fav-img" src={data[16]} alt="cocktail" />
        </Link>
      </div>
    );
  }
};

export default FavItem;
