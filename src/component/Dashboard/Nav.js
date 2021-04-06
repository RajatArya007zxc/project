import React from 'react'
import {AppBar,Toolbar,Avatar,Typography,Button, IconButton,List, Badge,Container, Paper,Drawer, Grid, Box} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles';
import NotificationsIcon from '@material-ui/icons/Notifications';
import A from '../../Asset/images/img-7.jpg';
import Drwser from './Drwser';

import PolymerIcon from '@material-ui/icons/Polymer';



const drawerWidth = 260;

const styles=makeStyles((theme)=>({
    root:{
        display:'flex',
        justifyContent:'space-between',

        overflow:'hidden'
    },
    appbar:{
        backgroundColor: '#FBAB7E',
        backgroundImage: 'linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)',
        display:'flex',
        justifyContent:'space-between'
        
    },
    appWrapper:{
        display:'flex',
        justifyContent:'flex-end',
        alignContent:'flex-end',
        alignItems:'center',
        flexDirection:'flex-end',
        marginRight:theme.spacing(5),
        flexGrow:'1'
        
        
    },
    logo:{
       position:'absolute',
       left:'0',
       top:'10px',
       width:'90px'
    },

    leftSideNav:{
        display:'flex',
        justifyContent:'space-between',
        width:'auto',
        padding:'0px 12px',
        
        alignItems:'center',
        backgroundColor:'white',
        borderRadius:'20px',
        opacity:'0.7',
        '&:hover':{
            opacity:'1'
        }
      
    },
    drwr:{
       
        width: drawerWidth,
        flexShrink: 0,
        
       
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: '#FBAB7E',
        // backgroundImage: 'linear-gradient(62deg, #F7CE68 100%, #FBAB7E 0%)',
        backgroundImage:`url(${A})`,
        backgroundSize:'cover',
        alignItems:'center',
        justifyContent:'center'
      },
      gifs:{
        //   display:'flex',
        //   justifyContent:'center',
        //   alignItems:'center',
        //   alignContent:'center',
        //   flexDirection:'column'
        color:'white'
      },
      icon:{
          position:'absolute',
          left:'14%',
          top:'0'
      },
    
}))
export default function Nav() {
    const classes=styles();
   

    return (
        <div className={classes.root}>
            <AppBar elevation={0} position="static" className={classes.appbar}>
            
            
            <Toolbar className={classes.appWrapper} >
          
           <PolymerIcon className={classes.logo}/>
          
            
  <Paper className={classes.leftSideNav} elevation={1}>
  <IconButton aria-label="show 17 new notifications" color="inherit">
  <Badge badgeContent={17} color="secondary">
    <NotificationsIcon />
  </Badge>
</IconButton>

  
   <Button  color="textPrimary">Rajat Arya</Button>
   

    <Avatar src={A} ></Avatar>
    <Drwser/>
  </Paper>

    
</Toolbar>
            
           
        </AppBar> 
            </div>
            
    )
}
