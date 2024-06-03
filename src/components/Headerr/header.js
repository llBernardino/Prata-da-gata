import React, { useState } from "react";
import {
  AppBar,
  Box,
  Tab,
  Tabs,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import {Image,CarrinhoText,Figure} from './style'
import logoheader from '../../img/logoprata5.png';
import {DrawerComp} from "./drawer";
import { ThemeProvider } from '@mui/material/styles';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CallIcon from '@mui/icons-material/Call';
import {theme} from '../../themes/themes'
import { Link } from "react-router-dom";
import { SearchBar } from "../../Search/searchbar";
export const Headerr = () => {
  const [value, setValue] = useState();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  console.log(isMatch);
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <AppBar sx={{ background: "#FFFFFF" , padding:'8px 0px' ,opacity: 0.9}}>
          <Toolbar sx={{ maxWidth:'1110px', margin:'0px auto', width:'100%' , display:"block", textAlign:"center"}}>
            <Box sx={{ display:"flex", alignItems:"center", justifyContent:"space-between"}} >
              <Box sx={{maxWidth:223}}>
               <SearchBar/>
              </Box>
              <Figure>
                <Image alt="Prata da gata" src={logoheader} width={100} height={115} />
              </Figure>
              <Box sx={{display:"flex", justifyContent:"space-around", maxWidth:223, width:'100%'}}>
                <CarrinhoText>
                  <AddShoppingCartIcon sx={{margin:'0px 5px'}}/>
                  <br></br>
                  Meu Carrinho
                </CarrinhoText>
                <CarrinhoText>
                  <CallIcon sx={{margin:'0px 5px'}}/>
                  <br></br>
                  Contato
                </CarrinhoText>
              </Box>
            </Box>
           
              {isMatch ? (
                <>
                  <DrawerComp />
                </>
              ) : (
              <>
                <Tabs sx={{ padding: "0px auto"}} indicatorColor="secondary" textColor="secondary" value={value} onChange={(e, value) => setValue(value)}>
                  <Tab component={Link} to='/Hero' sx={{ fontWeight: '600', fontSize: '12px', fontFamily: '"Roboto", Sans-serif', color: '#7a7a7a' }} label="Home"/>
                  <Tab component={Link} to='/Products' sx={{ fontWeight: '600', fontSize: '12px', fontFamily: '"Roboto", Sans-serif', color: '#7a7a7a' }} label="Produtos" />
                  <Tab component={Link} to='/About' sx={{ fontWeight: '600', fontSize: '12px', fontFamily: '"Roboto", Sans-serif', color: '#7a7a7a' }} label="Anéis" />
                  <Tab component={Link} to='/Services' sx={{ fontWeight: '600', fontSize: '12px', fontFamily: '"Roboto", Sans-serif', color: '#7a7a7a' }} label="Brincos" />
                  <Tab component={Link} to='/Services' sx={{ fontWeight: '600', fontSize: '12px', fontFamily: '"Roboto", Sans-serif', color: '#7a7a7a' }} label="Pulseiras" />
                  <Tab component={Link} to='/Services' sx={{ fontWeight: '600', fontSize: '12px', fontFamily: '"Roboto", Sans-serif', color: '#7a7a7a' }} label="Colares"/>
                  <Tab component={Link} to='/Services' sx={{ fontWeight: '600', fontSize: '12px', fontFamily: '"Roboto", Sans-serif', color: '#7a7a7a' }} label="Conjuntos"/>
                  <Tab component={Link} to='/Services' sx={{ fontWeight: '600', fontSize: '12px', fontFamily: '"Roboto", Sans-serif', color: '#7a7a7a' }} label="Coleções"/>
                  <Tab component={Link} to='/Contact' sx={{ fontWeight: '600', fontSize: '12px', fontFamily: '"Roboto", Sans-serif', color: '#7a7a7a' }} label="Contato" />
                </Tabs>
              </>
            )}
          </Toolbar>
        </AppBar>
      </React.Fragment>
    </ThemeProvider>
  );
};


