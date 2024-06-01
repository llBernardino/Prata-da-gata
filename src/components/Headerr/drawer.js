import React, { useState } from "react";
import {
  Button,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tab,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from '@mui/icons-material/Person';
import { Link } from "react-router-dom";

export const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  
  return (
    <React.Fragment >
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
            <ListItemButton>
              <ListItemIcon>
                <ListItemText>
                  <Link to='/Hero'>
                    <Tab sx={{ fontWeight:'600', fontSize:'14px', fontFamily:'"Roboto", Sans-serif', color:'#7a7a7a'}}  label="Home" /></Link></ListItemText>
              </ListItemIcon>
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <ListItemText><Link to='/About'>
                    <Tab sx={{ fontWeight:'600', fontSize:'14px', fontFamily:'"Roboto", Sans-serif', color:'#7a7a7a'}}  label="Quem Somos" />
                  </Link></ListItemText>
              </ListItemIcon>
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <ListItemText><Link to='/Services'>
                    <Tab sx={{ fontWeight:'600', fontSize:'14px', fontFamily:'"Roboto", Sans-serif', color:'#7a7a7a'}}  label="Serviços" />
                  </Link></ListItemText>
              </ListItemIcon>
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <ListItemText><Link to='/Products'>
                    <Tab sx={{ fontWeight:'600', fontSize:'14px', fontFamily:'"Roboto", Sans-serif', color:'#7a7a7a'}}  label="Produtos" />
                  </Link></ListItemText>
              </ListItemIcon>
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <ListItemText><Link to='/Plans'>
                    <Tab sx={{ fontWeight:'600', fontSize:'14px', fontFamily:'"Roboto", Sans-serif', color:'#7a7a7a'}}  label="Planos" />
                  </Link></ListItemText>
              </ListItemIcon>
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <ListItemText><Link to='/Blog'>
                    <Tab sx={{ fontWeight:'600', fontSize:'14px', fontFamily:'"Roboto", Sans-serif', color:'#7a7a7a'}}  label="Blog" />
                  </Link></ListItemText>
              </ListItemIcon>
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <ListItemText><Link to='/Contact'>
                    <Tab sx={{ fontWeight:'600', fontSize:'14px', fontFamily:'"Roboto", Sans-serif', color:'#7a7a7a'}}  label="Contato" />
                  </Link></ListItemText>
              </ListItemIcon>
            </ListItemButton>
        </List>
        <List>
            <ListItemButton >
              <ListItemIcon>
                <ListItemText><Button sx={{ marginLeft: "auto", color:"white" }} variant="contained" color="success" startIcon={< PersonIcon/>}>
                Área do cliente
              </Button></ListItemText>
              </ListItemIcon>
            </ListItemButton>
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "white", }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon color="success" sx={{ padding: "0", paddingRight:"35px" }} />
      </IconButton>
    </React.Fragment>
  );
};


