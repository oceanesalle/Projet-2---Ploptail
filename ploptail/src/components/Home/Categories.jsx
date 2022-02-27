import PropTypes from 'prop-types';
import Item from './Item';
import { useState } from 'react';
const Categories = ({ title, item, favoris, setFavoris }) => {
  const [index, setIndex] = useState(0);
  const next = () => {
    if (index >= item.length - 1) {
      setIndex(0);
      return 0;
    }
    setIndex(index + 1);
  };

  const previous = () => {
    if (index <= 0) {
      setIndex(item.length - 1);
      return 0;
    }
    setIndex(index - 1);
  };

  return (
    <>
      <div className="home-article">
        <h1 className="article-name">{`${title} Cocktails`}</h1>
        <div className="item">
          <button className="arrow-left" onClick={previous}></button>
          {item[0] ? (
            <Item
              name={item[index][1]}
              img={item[index][16]}
              id={item[index][0]}
              favoris={favoris}
              setFavoris={setFavoris}
            />
          ) : null}
          <button className="arrow-right" onClick={next}></button>
        </div>
      </div>
    </>
  );
};

Categories.propTypes = {
  title: PropTypes.string,
  item: PropTypes.array,
};

Categories.defaultProps = {
  title: 'title',
  item: [],
};

export default Categories;
