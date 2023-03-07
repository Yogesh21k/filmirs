import { makeStyles } from "@mui/styles";


export default makeStyles((theme) =>({
    imagelink:{
        display:'flex',
        justifyContent:'center',
        padding:'10% 0',
    
    },
    image:{
        display:'flex',
        justifyContent:'center',
        width:'180px' ,
        height:'100px',
        padding:'10px',
        
        
    },
    links:{
        color:theme.palette.text.primary,
        textDecoration:'none',
    },
    genreImage:{
        filter:theme.palette.mode==='dark'?'dark':'invert(1)',
    },
}));