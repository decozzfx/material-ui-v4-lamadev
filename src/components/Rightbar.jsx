import React from "react";
import { Avatar, Container, makeStyles, Typography } from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(2),
  },
}));

const Rightbar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Typography>Online Friends</Typography>
      <AvatarGroup max={5}>
         { friends.map(friend => (
         <Avatar alt={friend.alt} src={friend.src} key={friend.alt} />
         )) }
      </AvatarGroup>
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
]

export default Rightbar;
