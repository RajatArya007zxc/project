import React from 'react'

import Nav from './component/Dashboard/Nav'

import {makeStyles} from '@material-ui/core/styles';
import MiddleSection from './component/Dashboard/MiddleSection'




const  style=makeStyles(()=>({
  root:{
    backgroundColor: '#FBAB7E',
        backgroundImage: 'linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)',
        width:'100%',
        height:'100%',
        // fontFamily:'Poppins, sans-serif',
        overflow:'hidden'
       
  }
}))
export default function App() {
  const classes=style();
  return (
    <div className={classes.root}>
      
      <Nav/>
      <MiddleSection/>
    
      
    </div>
  )
}
