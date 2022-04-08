import React from 'react'
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    card : {
        marginBottom : theme.spacing(5)
    },
    media : {
        height : 250,
        [theme.breakpoints.down('sm')] : {
            height : 150
        }
    },
}))

const Post = () => {
  const classes = useStyles()

  return (
    <Card className={classes.card}> 
        <CardActionArea>
            <CardMedia 
                className={classes.media} 
                image='https://source.unsplash.com/random'
                title='My Post'
            />  
            <CardContent>
                <Typography variant='h5' gutterBottom>My First Post</Typography>
                <Typography variant='body2'>Non fugiat est ut do. Nisi officia proident et nulla ea. Proident proident est consequat commodo ad aliqua sit non. Nostrud nostrud veniam commodo esse et esse. Est consectetur excepteur aliqua dolore mollit fugiat qui aliquip. Enim amet fugiat aliqua dolor fugiat cillum eu qui non.
                Non fugiat est ut do. Nisi officia proident et nulla ea. Proident proident est consequat commodo ad aliqua sit non. Nostrud nostrud veniam commodo esse et esse. Est consectetur excepteur aliqua dolore mollit fugiat qui aliquip. Enim amet fugiat aliqua dolor fugiat cillum eu qui non.
                </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size='small' color='primary' >Share</Button>
            <Button size='small' color='primary' >Learn More</Button>
        </CardActions>
    </Card>
  )
}

export default Post