import { Link } from 'react-router-dom';

const SearchResult = ({ data, favoris, setFavoris, checkedList }) => {
  const handleFav = (id) => {
    setFavoris([...favoris, id]);
  };
  const handleUnfav = (id) => {
    setFavoris(favoris.filter((item) => item !== id));
  };
  let filterResult = data;
  checkedList.map(
    (ingredient) =>
      (filterResult = filterResult.filter((drink) =>
        drink.includes(ingredient)
      ))
  );
  return (
    <div className="search-listResult">
      {filterResult.map((drink, idx) => (
        <div className="search-items" key={idx}>
          {favoris.includes(drink[0]) ? (
            <div
              className="isFavorite"
              aria-hidden="true"
              onClick={() => handleUnfav(drink[0])}
            />
          ) : (
            <div
              className="notFavorite"
              aria-hidden="true"
              onClick={() => handleFav(drink[0])}
            />
          )}
          <>
            <p>{drink[1]}</p>
            <Link to={`/${drink[0]}`}>
              <img src={drink[16]} alt="" />
            </Link>
          </>
        </div>
      ))}
    </div>
  );
};

export default SearchResult;
