import React, { useState } from 'react';
import SearchResult from './SearchResult';
import PropTypes from 'prop-types';

const Search = ({ drinks, favoris, setFavoris }) => {
  const [searchValue, setSearchValue] = useState('');
  const [checkedList, setCheckedList] = useState([]);
  const handleCheck = (checkedItem) => {
    if (checkedList.includes(checkedItem)) {
      setCheckedList(checkedList.filter((item) => item !== checkedItem));
    } else setCheckedList([...checkedList, checkedItem]);
  };
  return (
    <div className="search-body">
      <input
        className="search-bar"
        type="text"
        placeholder="Search your cocktail here"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <div className="search-checkbox-area">
        <div>
          <input
            type="checkbox"
            name="checkbox1"
            onChange={() => (handleCheck('Lemon'), handleCheck('lemon'))}
          />
          <label htmlFor="checkbox1">Lemon</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="checkbox2"
            onChange={() => handleCheck('Soda Water')}
          />
          <label htmlFor="checkbox2">Soda Water</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="checkbox3"
            onChange={() => handleCheck('Orange Juice')}
          />
          <label htmlFor="checkbox3">Orange Juice</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="checkbox4"
            onChange={() => handleCheck('Honey')}
          />
          <label htmlFor="checkbox4">Honey</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="checkbox5"
            onChange={() => handleCheck('Grenadine')}
          />
          <label htmlFor="checkbox5">Grenadine</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="checkbox6"
            onChange={() => handleCheck('Sugar Syrup')}
          />
          <label htmlFor="checkbox6">Sugar Syrup</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="checkbox7"
            onChange={() => (handleCheck('Lime'), handleCheck('Lime Juice'))}
          />
          <label htmlFor="checkbox7">Lime</label>
        </div>
      </div>
      <SearchResult
        data={drinks.filter((drink) =>
          drink[1].toLowerCase().includes(searchValue.toLowerCase())
        )}
        favoris={favoris}
        setFavoris={setFavoris}
        checkedList={checkedList}
      />
    </div>
  );
};

Search.propTypes = {
  drinks: PropTypes.array,
  favoris: PropTypes.array,
  setFavoris: PropTypes.func,
};

Search.defaultProps = {
  drinks: [],
  favoris: PropTypes.array,
};
export default Search;
