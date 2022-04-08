import React from "react";
import { Avatar, Container, Divider, ImageList, ImageListItem, Link, makeStyles, Typography } from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(2),
    position : 'sticky',
    top : 0
  },
  title : {
     fontSize : 18,
     fontWeight : 500,
      color    : '#555',
  },
  avatar : { 
     marginBottom : theme.spacing(3)
  },
  link : {
     marginRight : theme.spacing(2),
     color : '#555',
     fontSize : 18
  }
}));

const Rightbar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Typography gutterBottom className={classes.title}>Online Friends</Typography>
      <AvatarGroup max={5} className={classes.avatar} >
         { friends.map(friend => (
            <Avatar alt={friend.alt} src={friend.src} key={friend.alt} />
            )) }
      </AvatarGroup>
      <Typography gutterBottom className={classes.title}>Galery</Typography>
      <ImageList cols={2} rowHeight={100} style={{ marginBottom : 20 }}>
         { galery.map((img, i) => (
            <ImageListItem>
               <img alt={i} key={i} src={img.src} />
            </ImageListItem>
         )) }
      </ImageList>
      <Typography gutterBottom className={classes.title}>Categories</Typography>
      <Link href='#' className={classes.link} variant='body2' >
            Sport
      </Link>
      <Link href='#' className={classes.link} variant='body2' >
            Food
      </Link>
      <Link href='#' className={classes.link} variant='body2' >
            Movies
      </Link>
      <Divider flexItem style={{ marginBottom : 5 }} />
      <Link href='#' className={classes.link} variant='body2' >
            Science
      </Link>
      <Link href='#' className={classes.link} variant='body2' >
            Hobbies
      </Link>
    </Container>
  );
};

const friends = [
   {
      alt : 'remi',
      src : 'https://material-ui.com/static/images/avatar/1.jpg'
   },
   {
      alt : 'travis',
      src : 'https://material-ui.com/static/images/avatar/2.jpg'
   },
   {
      alt : 'cindy',
      src : 'https://material-ui.com/static/images/avatar/3.jpg'
   },
   {
      alt : 'agnes',
      src : 'https://material-ui.com/static/images/avatar/4.jpg'
   },
   {
      alt : 'trevor',
      src : 'https://material-ui.com/static/images/avatar/5.jpg'
   },
   {
      alt : 'trevor',
      src : 'https://material-ui.com/static/images/avatar/6.jpg'
   },
   {
      alt : 'trevor',
      src : 'https://material-ui.com/static/images/avatar/7.jpg'
   },
]

const galery = [
   {
      src : 'https://v4.mui.com/static/images/image-list/breakfast.jpg'
   },
   {
      src : 'https://v4.mui.com/static/images/image-list/burgers.jpg'
   },
   {
      src : 'https://v4.mui.com/static/images/image-list/hats.jpg'
   },
   {
      src : 'https://v4.mui.com/static/images/image-list/morning.jpg'
   },
   {
      src : 'https://v4.mui.com/static/images/image-list/camera.jpg'
   },
   {
      src : 'https://v4.mui.com/static/images/image-list/vegetables.jpg'
   },

]

export default Rightbar;
