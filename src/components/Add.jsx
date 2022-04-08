import React, { useState } from 'react'
import { Button, Container, Fab, FormControlLabel, FormLabel, makeStyles, MenuItem, Modal, Radio, RadioGroup, Snackbar, TextField, Tooltip } from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert'
import { Add as AddIcon } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
    fab: {
        position : 'fixed',
        bottom : 30,
        right : 30
    },
    container: {
        width : 500,
        height : 550,
        backgroundColor : 'white',
        position : 'absolute',
        top : 0,
        right : 0,
        bottom : 0,
        left: 0,
        margin : 'auto',
        [theme.breakpoints.down('xs')] : {
            width : '100%',
            height : '100vh',
        }
    },
    form: {
        padding : theme.spacing(2)
    },
    item: {
        marginBottom : theme.spacing(3)
    }
}))

function Alert(props){
    return <MuiAlert elevation={6} variant='filled' {...props} />
}

const Add = () => {
    const classes = useStyles()
    const [ openModal , setOpenModal ] = useState(false)
    const [ openAlert, setOpenAlert ] = useState(false)

    function handleClose(event, reason){
        if(reason === 'clickaway'){
            return
        }
        setOpenAlert(false)
    }

  return (
    <>
        <Tooltip title='Add' aria-label='add' onClick={() => setOpenModal(true)} >
            <Fab color='primary'  className={classes.fab}>
                <AddIcon />
            </Fab>    
        </Tooltip>   
        <Modal open={openModal}>
            <Container className={classes.container}>
                <form className={classes.form} autoComplete='off' >
                    <div className={classes.item}>
                        <TextField id='standart-basic' label='Title' size='small' fullWidth />
                    </div>
                    <div className={classes.item}>
                        <TextField 
                        id='outlined-multiline-static'
                        multiline
                        rows={4}
                        variant='outlined'
                        placeholder='Tell your story...'
                        label='Description' 
                        size='small' 
                        fullWidth />
                    </div>
                    <div className={classes.item}>
                        <TextField select label='Visibility' value='Public' style={{ width : '50%' }}>
                            <MenuItem value='Public'>Public</MenuItem>
                            <MenuItem value='Private'>Private</MenuItem>
                            <MenuItem value='Unlisted'>Unlisted</MenuItem>
                        </TextField>
                    </div>
                    <div className={classes.item}>
                        <FormLabel component='legend'>Who can comment?</FormLabel>
                            <RadioGroup>
                                <FormControlLabel value='Everybody' control={<Radio size='small' />} label='Everybody' />
                                <FormControlLabel value='My Friends' control={<Radio size='small' />} label='My Friends' />
                                <FormControlLabel value='Only Me' control={<Radio size='small' />} label='Only Me' />
                            </RadioGroup>
                    </div>
                    <div className={classes.item}>
                        <Button variant='outlined' color='primary' style={{ marginRight : 20 }} onClick={() => setOpenAlert(true, setOpenModal(false))} >Create</Button>
                        <Button variant='outlined' color='secondary' onClick={() => setOpenModal(false)} >Cancel</Button>
                    </div>
                </form>
            </Container>
        </Modal>
        <Snackbar open={openAlert} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{ vertical : 'bottom', horizontal : 'left' }}>
            <Alert>
                Your story has been posted successfully
            </Alert>
        </Snackbar>
    </>
  )
}

export default Add