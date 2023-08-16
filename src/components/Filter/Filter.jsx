import React from 'react';
import PropTypes from 'prop-types';

import css from './Filter.module.css'

export default function Filter ({onFilterChange}) {

  const handleChange = (event) => {
    const filterValue = event.target.value.toLowerCase();
    onFilterChange(filterValue);
  };

    return (
      <div className={css.filterInput}>
        <label htmlFor="filter">Find contacts by name:</label>
        <input
          type="text"
          id="filter"
          onChange={handleChange}
        />
      </div>
    );
}

Filter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};