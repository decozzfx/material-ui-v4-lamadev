import React from "react";
import { Container, makeStyles, Typography } from "@material-ui/core";
import { Bookmark, ExitToApp, Home, List, Person, PhotoCamera, PlayCircleOutline, Settings, Storefront, TabletMac } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  container: {
      height : '100vh',
      color : 'white',
      paddingTop: theme.spacing(2),
      backgroundColor: theme.palette.primary.main,
      position : 'sticky',
      top : 0,
      [theme.breakpoints.up('md')] : {
         backgroundColor : 'white',
         color : '#555',
         border : '1px solid #ece7e7'
      }
  },
  item: {
      display: "flex",
      alignItems: "center",
      marginBottom: theme.spacing(4),
      [theme.breakpoints.up("sm")]: {
         marginBottom: theme.spacing(4),
         cursor : 'pointer',
      },
      [theme.breakpoints.down("sm")]: {
         justifyContent : 'center'
      }
  },
  text : {
     fontSize : '18px',
     fontWeight : '500',
      [theme.breakpoints.down('sm')] : {
         display : 'none',
      }
  },
  iconLeftbar: {
     marginRight : theme.spacing(2),
     [theme.breakpoints.up('sm')] : {
        fontSize : '22px'
     }
  }
}));

const Leftbar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <div className={classes.item}>
        <Home className={classes.iconLeftbar}/>
        <Typography className={classes.text}>Homepage</Typography>
      </div>
      <div className={classes.item}>
        <Person className={classes.iconLeftbar}/>
        <Typography className={classes.text}>Friends</Typography>
      </div>
      <div className={classes.item}>
        <List className={classes.iconLeftbar}/>
        <Typography className={classes.text}>Lists</Typography>
      </div>
      <div className={classes.item}>
        <PhotoCamera className={classes.iconLeftbar}/>
        <Typography className={classes.text}>Camera</Typography>
      </div>
      <div className={classes.item}>
        <PlayCircleOutline className={classes.iconLeftbar}/>
        <Typography className={classes.text}>Videos</Typography>
      </div>
      <div className={classes.item}>
        <TabletMac className={classes.iconLeftbar}/>
        <Typography className={classes.text}>Apps</Typography>
      </div>
      <div className={classes.item}>
        <Bookmark className={classes.iconLeftbar}/>
        <Typography className={classes.text}>Collection</Typography>
      </div>
      <div className={classes.item}>
        <Storefront className={classes.iconLeftbar}/>
        <Typography className={classes.text}>Market Place</Typography>
      </div>
      <div className={classes.item}>
        <Settings className={classes.iconLeftbar}/>
        <Typography className={classes.text}>Settings</Typography>
      </div>
      <div className={classes.item}>
        <ExitToApp className={classes.iconLeftbar}/>
        <Typography className={classes.text}>Logout</Typography>
      </div>
    </Container>
  );
};

export default Leftbar;
