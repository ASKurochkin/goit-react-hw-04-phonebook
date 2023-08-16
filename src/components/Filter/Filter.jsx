import React, { Component } from 'react';
import PropTypes from 'prop-types';

import css from './Filter.module.css'

class Filter extends Component {
  static propTypes = {
    onFilterChange: PropTypes.func.isRequired,
  };

  handleChange = (event) => {
    const filterValue = event.target.value.toLowerCase();
    this.props.onFilterChange(filterValue);
  };

  render() {
    return (
      <div className={css.filterInput}>
        <label htmlFor="filter">Find contacts by name:</label>
        <input
          type="text"
          id="filter"
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Filter;
