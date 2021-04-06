import React from 'react'
import {Grid ,Container,Typography, makeStyles, Paper, Box, Button, Card,CardHeader,CardContent, List, ListSubheader, ListItem, ListItemText, ListItemIcon, Avatar, Table, TableContainer, TableHead, TableRow, TableCell, TableBody, CardMedia, LinearProgress} from '@material-ui/core';
import A from '../../Asset/images/img-7.jpg';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

import B from '../../Asset/img-5.jpg'
import C from '../../Asset/coding.jpg'
import D from '../../Asset/eng.jpg'
import math from '../../Asset/math.jpg'
import phy from '../../Asset/phy.jpg';
import Ab from '../../Asset/img-7.jpg'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';

import ChartPart from './ChartPart';

const styles=makeStyles((theme)=>({
    root:{
        display:'flex',
        flexGrow: 1,
        padding: theme.spacing(1),
    },
    firstItem:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        
        background:'white'
    }, paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        background:'linear-gradient(34deg,#0aebff,#ebe98d)'  
      },
      firstCard:{
          display:'flex',
          flexDirection:'row',
          justifyContent:'space-between',
          margin:'8px 0px'
      },
      leaderBoad:{
          display:'flex',
          justifyContent:'space-between',
          alignItems:'center',
          alignContent:'center'
        //   padding: theme.spacing(1)
          
      },
      mycourses:{
          display:'flex',
          justifyContent:'space-between',
          alignItems:'center',
          alignContent:'center',
          
      },
      cardmedia:{
        height:100,
        // padding:theme.spacing(1)
    },
    card:{
        Width:345,
        opacity:'0.8',
        margin:'5px 5px',
        cursor:'pointer',
        '&:hover':{
            opacity:'1'
        }
    },
    content:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
      },
      paperGraph:{
          width:'100%',
          padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        background:'linear-gradient(34deg,#0aebff,#ebe98d)'
      }
    
}))
export default function MiddleSection() {

    
    const upcomingLesson=[{date:'April 8  4:00 pm',subject:'ALGEBRA 2 MATHS '},{date:'April 10  4:00 pm',subject:'JAVASCRIPT '},
    {date:'April 11  2:00 pm',subject:'PHYSICS'},{date:'April 12  10:00 am',subject:'REACT.JS'}]

   const todoList=[{todo:"Maths Homework"},{todo:"Solving Question in Gravity (Physic)"},{todo:"Making Dashboard"},{todo:"Completing on Time"}]

    const leaderBoardData=[{name:'Rajat Arya',rank:1,pic:A},{name:'Rajesh Gangwar',rank:2,pic:A},
    {name:'Ramesh Kumar',rank:3,pic:A}]
    
    const cardData=[{teacherName:'Alice White',picTeacher:B,lecture:'340 Lecture',cardPic:math},
    {teacherName:'Julia Venice',picTeacher:Ab,lecture:'340 Lecture',cardPic:phy},{teacherName:'Alice White',picTeacher:B,lecture:'340 Lecture',cardPic:C},
    {teacherName:'Julia Venice',picTeacher:Ab,lecture:'340 Lecture',cardPic:D}]
    
    const homeworkProgress=[{subject:'MATHS',bar:50},{subject:'PHYSICS',bar:'80'},{subject:'CHEMISTRY',bar:'30'},
    {subject:'HTML',bar:'70'},{subject:'CSS',bar:'40'},{subject:'JAVASCRIPT',bar:'100'},{subject:'REACT.JS',bar:'80'}]
    const classes=styles();
    return (
        <div  className={classes.root}>
            <Container>

            
          <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>
              <Typography>UPCOMING LESSON</Typography>
              {
  upcomingLesson.map(e=>(
<Card className={classes.firstCard} key={e.subject}>
                  <CardContent>{e.date}</CardContent>
                  <CardContent>{e.subject}</CardContent>
                  <Button>Pic</Button>
              </Card>
  ))
              }
              
          </Paper>
        </Grid>


        <Grid item xs>
          <Paper className={classes.paper}>
              
              <List
              component="nav"
              aria-labelledby="nested-list-subheader"
              subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                  <Typography>Task Todo</Typography>
                </ListSubheader>
              }
              >
                  
                  {
                      todoList.map(e=>(
                        <ListItem button key={e.todo}>
                        <ListItemText primary={e.todo} />
                        <ListItemIcon><CheckIcon/></ListItemIcon><CloseIcon/>
                        </ListItem>
                      ))
                  }
              </List>
          </Paper>
        </Grid>



        <Grid item xs>
          <Paper className={classes.paper}>
              <Typography>LEADERBOARD</Typography>
                <TableContainer className={classes.leaderBoard}>
                    <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">PROFILE PIC</TableCell>
                            <TableCell align="left">NAME</TableCell>
                            <TableCell align="left">RANK</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            leaderBoardData.map((r)=>(
                                <TableRow key={r.name}>
                                    <TableCell><Avatar src={r.pic}/></TableCell>
                                    <TableCell>{r.name}</TableCell>
                                    <TableCell>{r.rank}</TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                    </Table>
                    
                </TableContainer>
          </Paper>
        </Grid>
      </Grid>




      <Grid container spacing={3}>

        {/* <Grid item md={9} xs={12} lg={8}> */}
        <Grid item md={12} xs={12} lg={8}>
          <Paper className={classes.paper}>
              
                  <div className={classes.mycourses}>
                  <Typography>MY COURSES</Typography>
                  <Button>SEE ALL</Button>
                  </div>
                   

                  <Grid container>
                         {
                             cardData.map(e=>(
                                
                                <Grid item md={6} xs={12} lg={6}>
                                <Card className={classes.card}  >
            
                                <CardMedia image={e.cardPic} className={classes.cardmedia}>
                                    
                                     </CardMedia>
                    
                                <CardContent className={classes.content}>
                                    <Typography >{e.lecture} by {e.teacherName}</Typography>
                                    <VideoLibraryIcon/>
                                     
                                     
                                </CardContent>
                              </Card>
                              </Grid>
                  
                             ))
                         }
                         </Grid>
                          
                        
                        


          </Paper>
        </Grid>
        



        <Grid item lg={4} sm={12} md={12}>
          <Paper className={classes.paper}>
          <List
              component="nav"
              aria-labelledby="nested-list-subheader"
              subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                  <Typography>HOMEWORK PROGRESS</Typography>
                </ListSubheader>
              }
              >
                  {
                      homeworkProgress.map(e=>(

                         <ListItem key={e.subject}>
                             
                             <ListItemText>{e.subject} <LinearProgress variant="determinate" value={e.bar} /></ListItemText>   
                         </ListItem>
                      ))
                  }
                  </List>
          </Paper>
        </Grid>

        
      </Grid>

      <Grid container spacing={3}>
           <Grid item  md={12} lg={7} xs={12}>
          <Paper className={classes.paperGraph}>  
              <ChartPart/>
          </Paper>
        </Grid>  
      </Grid>
      </Container> 
        </div>
    )
}




