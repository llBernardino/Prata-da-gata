import React, { useState } from "react";
import {
  AppBar,
  Tab,
  Tabs,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import {Image} from './style'
import logoheader from '../../img/logoprata.jpg';
import {DrawerComp} from "./drawer";
import { ThemeProvider } from '@mui/material/styles';
import {theme} from '../../themes/themes'
import { Link } from "react-router-dom";
export const Headerr = () => {
  const [value, setValue] = useState();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <AppBar sx={{ background: "#FFFFFF" , paddingTop:'13px',paddingBottom:'13px' ,opacity: 0.9}}>
          <Toolbar sx={{ maxWidth:'1110px', margin:'0px auto', width:'100%' , justifyContent:'space-between'}}>
            <Image alt="Virtus" src={logoheader} width={100} height={100} />
              {isMatch ? (
                <>
                  <DrawerComp />
                </>
              ) : (
              <>
                <Tabs sx={{ padding: "0px auto" }} indicatorColor="secondary" textColor="secondary" value={value} onChange={(e, value) => setValue(value)}>
                  <Tab component={Link} to='/Hero' sx={{ fontWeight: '600', fontSize: '14px', fontFamily: '"Roboto", Sans-serif', color: '#7a7a7a' }} label="Home" />
                  <Tab component={Link} to='/About' sx={{ fontWeight: '600', fontSize: '14px', fontFamily: '"Roboto", Sans-serif', color: '#7a7a7a' }} label="Quem Somos" />
                  <Tab component={Link} to='/Services' sx={{ fontWeight: '600', fontSize: '14px', fontFamily: '"Roboto", Sans-serif', color: '#7a7a7a' }} label="Serviços" />
                  <Tab component={Link} to='/Products' sx={{ fontWeight: '600', fontSize: '14px', fontFamily: '"Roboto", Sans-serif', color: '#7a7a7a' }} label="Produtos" />
                  <Tab component={Link} to='/Contact' sx={{ fontWeight: '600', fontSize: '14px', fontFamily: '"Roboto", Sans-serif', color: '#7a7a7a' }} label="Contato" />
                </Tabs>
              </>
            )}
          </Toolbar>
        </AppBar>
      </React.Fragment>
    </ThemeProvider>
  );
};


