import { makeStyles } from "@mui/styles";


const drawerWidth=240;
export default makeStyles((theme) =>({
    toolbar:{
        height:'100px',
        display:'flex',
        justifyContent:'space-between',
        marginLeft:'300px',
        [theme.breakpoints.down('sm')]:{
            marginLeft:0,
            flexWrap:'wrap',
         
        },
    },
    menuBotton:{
        marginRight:theme.spacing(2),
        [theme.breakpoints.up('sm')]:{
         display:'none',   
        },

    },
    drawer:{
        [theme.breakpoints.up('sm')]:{
        width:drawerWidth,
        flexShrink:0,  
        },
    },
    drawerPaper:{
        width:drawerWidth,
    },
    linkButton:{
       '&:hover':{
        color:'white !important',
        textDecoration:'none',
       }, 
    },
}));