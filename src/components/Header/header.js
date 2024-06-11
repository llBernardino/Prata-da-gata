import React, { useState } from "react";
import {
  AppBar,
  Box,
  Tab,
  Tabs,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import {Image,CarrinhoText,Figure,Line} from './style'
import logoheader from '../../img/logoprata62.png';
import {DrawerComp} from "./drawer";
import { ThemeProvider } from '@mui/material/styles';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CallIcon from '@mui/icons-material/Call';
import {theme} from '../../themes/themes'
import { Link } from "react-router-dom";
import { SearchBarhead } from "../../Search/searchbarhead.js";
export const Headerr = () => {
  const [value, setValue] = useState();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  console.log(isMatch);
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <AppBar sx={{ background: "#011516"  ,opacity: 1}}>
          <Toolbar sx={{ maxWidth:'1110px', margin:'0px auto', width:'100%' , display:"block", textAlign:"center"}}>
            <Box sx={{ display:"flex", alignItems:"center", justifyContent:"space-between"}} >
              <Box sx={{maxWidth:223}}>
                <SearchBarhead />
              </Box>
              <Link to='/Home' sx={{TextDecoder:'none'}}>
                <Figure >
                  <Image alt="Prata da gata" src={logoheader} width={110} height='auto' />
                </Figure>
              </Link>
              <Box sx={{display:"flex", justifyContent:"space-around", maxWidth:223, width:'100%'}}>
                <Link to="/cart">
                  <CarrinhoText>
                    <AddShoppingCartIcon sx={{margin:'0px 5px'}}/>
                    <br></br>
                    Meu Carrinho
                  </CarrinhoText>
                </Link>
                <CarrinhoText>
                  <CallIcon sx={{margin:'0px 5px'}}/>
                  <br></br>
                  Contato
                </CarrinhoText>
              </Box>
            </Box>
            <Line/>
              {isMatch ? (
                <>
                  <DrawerComp />
                </>
              ) : (
              <>
                <Tabs sx={{ padding: "0px auto", color:'white'}} indicatorColor="secondary" textColor="secondary" value={value} onChange={(e, value) => setValue(value)}>
                  <Tab component={Link} to='/Home' sx={{ fontWeight: '600', fontSize: '12px', fontFamily: '"Roboto", Sans-serif', color: '#ffffff' }} label="Home"/>
                  <Tab component={Link} to='/Produtos' sx={{ fontWeight: '600', fontSize: '12px', fontFamily: '"Roboto", Sans-serif', color: '#ffffff' }} label="Produtos" />
                  <Tab component={Link} to='/Anéis' sx={{ fontWeight: '600', fontSize: '12px', fontFamily: '"Roboto", Sans-serif', color: '#ffffff' }} label="Anéis" />
                  <Tab component={Link} to='/Brincos' sx={{ fontWeight: '600', fontSize: '12px', fontFamily: '"Roboto", Sans-serif', color: '#ffffff' }} label="Brincos" />
                  <Tab component={Link} to='/Pulseiras' sx={{ fontWeight: '600', fontSize: '12px', fontFamily: '"Roboto", Sans-serif', color: '#ffffff' }} label="Pulseiras" />
                  <Tab component={Link} to='/Colares' sx={{ fontWeight: '600', fontSize: '12px', fontFamily: '"Roboto", Sans-serif', color: '#ffffff' }} label="Colares"/>
                  <Tab component={Link} to='/Conjuntos' sx={{ fontWeight: '600', fontSize: '12px', fontFamily: '"Roboto", Sans-serif', color: '#ffffff' }} label="Conjuntos"/>
                  <Tab component={Link} to='/Coleções' sx={{ fontWeight: '600', fontSize: '12px', fontFamily: '"Roboto", Sans-serif', color: '#ffffff' }} label="Coleções"/>
                  <Tab component={Link} to='/Contato' sx={{ fontWeight: '600', fontSize: '12px', fontFamily: '"Roboto", Sans-serif', color: '#ffffff' }} label="Contato" />
                </Tabs>
              </>
            )}
          </Toolbar>
        </AppBar>
      </React.Fragment>
    </ThemeProvider>
  );
};


