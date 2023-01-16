import React from 'react';

const SearchBox = ({ searchChange }) => {
  return (
    <div className='pa3'>
      <input
        className='f4 w-30 ba  b--green bg-white right'
        type='search'
        placeholder=' '
        onChange={searchChange}
      />
    </div>
  );
}
// f4 pa2  right
export default SearchBox;