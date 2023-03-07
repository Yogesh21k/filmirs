import React,{useState} from "react";
import { AppBar, IconButton ,Toolbar, Drawer, Button, Avatar, useMediaQuery } from "@mui/material";
import { Menu, AccountCircle, Brightness4, Brightness7, Mode } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

import usestyles from "./styles";
import {Sidebar} from '../index'

const Navbar = () => {

    const classes=usestyles();
    const Authenticated =true;
    const mobile=useMediaQuery('(max-width:600px)');
    const Theme=useTheme();
    const [mobileOpen,setMobileOpen]=useState(false);
    console.log('Navbar');
    return(
    <>
        <AppBar position="fixed" style={{ background: '#99004d' }}>
            <Toolbar className={classes.toolbar}>
            {mobile&&(
                <IconButton
                color="inherit"
                edge="start"
                style={{outline:'none'}}
                onClick={()=>setMobileOpen((prevMobileOpen)=>!prevMobileOpen)}
                className={classes.menuButton} >
                    <Menu />
                </IconButton>
            )}
            <IconButton 
            color="inherit" 
            sx={{marginLeft:1}}
            onClick={()=>{}}>
            {Theme.palette.mode==='dark'?<Brightness7/>:<Brightness4/>}
            </IconButton>
            {!mobile&& 'Search...'}
            <div>
                {!Authenticated ? (
                    <Button colour ="inherit" onClick={()=>{}}>
                        Login &nbsp; <AccountCircle/>
                    </Button>

                ):(
                    <Button
                    color="inherit"
                    component={Link}
                    to={`/Profile/:id`}
                    className={classes.linkButton}
                    onClick={()=>{}}
                    >
                    {!mobile&&<>My Movies &nbsp;</>}
                    <Avatar
                     style={{width:30,height:30}}
                     alt="Profile"
                     src='https://png.pngtree.com/png-clipart/20210129/ourmid/pngtree-default-male-avatar-png-image_2811083.jpg'
                     />
                    </Button>
                )}
            </div> 
            {mobile&& 'Search...'}
            </Toolbar>
        </AppBar>
        <div>
            <nav className={classes.drawer}>
              {mobile?(
               <Drawer
               variant="temporary"
               anchor="right"
               open={mobileOpen}
               onClose={()=>setMobileOpen((prevMobileOpen)=>!prevMobileOpen)}
               className={classes.drawerBackground}
               classes={{paper:classes.drawerPaper}}
               ModalProps={{keepMounted:true}}
               >
               <Sidebar setMobileOpen={setMobileOpen}/>
               </Drawer>
              ):(
                <Drawer 
                className={{paper:classes.drawerPaper}}
                variant='permanent' open>
                    <Sidebar setMobileOpen={setMobileOpen} />
                </Drawer>

              )}
            </nav>     
        </div>
        
    </>
    )
};

export default Navbar;