'use strict';

import React from 'react';

const FilterInput = ({handleChange}) => {
  return (
    <form className="form-group" style={{marginTop: '20px'}}>
      <input className="form-control"
        placeholder="Search for artist"
        onChange={handleChange} />
    </form>
  );
}

export default FilterInput;