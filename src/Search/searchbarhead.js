import React from 'react';
import { TextField } from '@mui/material';
import './Head.css'
export const SearchBarhead = ({ onSearch }) => {
  const handleInputChange = (event) => {
    onSearch(event.target.value.toLowerCase());
  };

  return (
    <>
        <TextField id="outlined-basic searchbar" label="Pesquisar" type="text" onChange={handleInputChange}  variant="outlined" color="primary"  sx={{
          width: "100%",
          margin: '15px 0px',
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'white', // Cor da borda padrão
            },
            '&:hover fieldset': {
              borderColor: 'white', // Cor da borda ao passar o mouse
            },
            '&.Mui-focused fieldset': {
              borderColor: 'white', // Cor da borda ao focar no campo
            },
            '& .MuiInputLabel-root': {
                color: 'white', // Cor padrão da label
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: 'white', // Cor da label ao focar no campo
              },
          },
        }}/>
    </>
    
  );
};
