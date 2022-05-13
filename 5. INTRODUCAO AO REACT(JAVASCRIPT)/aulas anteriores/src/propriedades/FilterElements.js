import React from 'react';

const FilterElements = ({ addProduts }) => {
  return (
    <div>
      <button onClick={addProduts}>Add produts</button>
    </div>
  );
};

export default FilterElements;
