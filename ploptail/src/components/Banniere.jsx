import React from 'react';
import PropTypes from 'prop-types';

const Banniere = ({ title }) => {
  return (
    <div className="banniere">
      <h1 className="banniere-h1">{title}</h1>
    </div>
  );
};

Banniere.propTypes = {
  title: PropTypes.string,
};

Banniere.defaultProps = {
  title: 'john',
};
export default Banniere;
