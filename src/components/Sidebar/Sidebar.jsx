import React,{useEffect} from 'react'
import{Divider,List,ListItemButton,ListItem,ListSubheader,ListItemIcon,Box,CircularProgress, ListItemText, Button} from '@mui/material';
import{Form, Link} from 'react-router-dom';
import{useTheme} from '@mui/styles'
import {DarkThemeFont ,LightThemeFont} from '../index';


import useStyles from './styles';

//const DarkThemeFont='https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png';
//const LightThemeFont='https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png'
const Categories=[
  {label:'Popular',value:'popular'},
  {label:'Top Rated',value:'top-rated'},
  {label:'upcoming',value:'upcoming'},
]
const demoCategories= [
  {label:'Comedy',value:'comedy'},
  {label:'Action',value:'action'},
  {label:'Horror',value:'horror'},
  {label:'Animation',value:'animation'},
];
const Sidebar = ({setMobileOpen}) => {
    const theme=useTheme();
    const classes= useStyles();
  return (
    <>
        <Link to ="/" className={classes.imageLink}>
         <img
          className={classes.image}
          src={theme.palette.mode==='light'? LightThemeFont:DarkThemeFont}
    alt="Filmirs logo"
    />
    
    </Link>
    <Divider />
      <List>
        <ListSubheader>
          Categories
        </ListSubheader>
        {Categories.map(({label,value})=>(
          <Link key={value} className={classes.links} to="/">
            <ListItemButton alignItems='center' onClick={()=>{} } >
             {/* <ListItemIcon>
              <img src={LightThemeFont} className={classes.genreImages} height={30}/>
            </ListItemIcon>  */}
            <ListItemText primary={label}/>
            </ListItemButton>
          </Link>

        ))}
      </List>
    <Divider />
    <List>
        <ListSubheader>
          Genres
        </ListSubheader>
        {demoCategories.map(({label,value})=>(
          <Link key={value} className={classes.links} to="/">
            <ListItemButton onClick={()=>{} } >
            {/* <ListItemIcon>
              <img src={LightThemeFont} className={classes.genreImages} height={30}/>
            </ListItemIcon> */}
            <ListItemText primary={label}/>
            </ListItemButton>
          </Link>
          
        ))}
      </List>
     </>
    
  )
}

export default Sidebar;