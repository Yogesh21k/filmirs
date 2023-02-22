import { makeStyles } from "@mui/styles";



export default makeStyles((theme) =>({
    toolbar:{
        height:'110px',
        display:'flex',
        justifyContent:'space-between',
        marginLeft:'240px',
        [theme.breakpoints.down('sm')]:{
            marginLeft:0,
            flexWrap:'wrap',
         
        },
    },
    menuBotton:{
        marginRight:theme.spacing(2),
        [theme.breakpoints.up('sm')]:{
         display:'none',   
        }

    }
}));