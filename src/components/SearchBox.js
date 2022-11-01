import React from 'react';

const SearchBox = ({ inputChange }) => {
    return (
        <div className='pa2 mb4'>
            <input 
            className='pa3 br3 ba bw1 w-40 b--blue bg-lightest-blue'
            type="search" 
            placeholder="search robots..."
            onChange={inputChange}
            />
        </div>
        
    );
}

export default SearchBox;