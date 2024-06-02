import React from 'react';
import { TextField } from '@mui/material';

const SearchBar = ({ onSearch }) => {
  const handleInputChange = (event) => {
    onSearch(event.target.value.toLowerCase());
  };

  return (
    <>
        <TextField id="outlined-basic searchbar" label="Pesquisar" type="text" onChange={handleInputChange}  variant="outlined" color="success" sx={{ width: "50%" , margin:'15px 0px' }}/>
    </>
    
  );
};

export default SearchBar;
