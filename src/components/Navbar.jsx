import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { alpha, AppBar, Avatar, Badge, InputBase, Toolbar, Typography } from '@material-ui/core'
import { Cancel, Mail, Menu, Notifications, Search } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
    toolbar: {
        display : 'flex',
        justifyContent : 'space-between',
    },
    menu: {
        display : 'flex',
        alignItems : 'center'
    },
    search: {
        display : 'flex',
        alignItems : 'center',
        backgroundColor : alpha(theme.palette.common.white, 0.15),
        '&:hover' : {
            backgroundColor : alpha(theme.palette.common.white, 0.25)
        },
        borderRadius : theme.shape.borderRadius,
        width : '50%',
        marginLeft : '20px',
        [theme.breakpoints.only('xs')] : {
            display : (props) => props.open ? 'flex' : 'none' ,
            width : '70%'
        }
    },
    logoLg: {
        display : 'none',
        [theme.breakpoints.up('sm')]: {
            display : 'block'
        }
    },
    logoSm: {
        display : 'block',
        [theme.breakpoints.up('sm')]: {
            display : 'none'
        }
    },
    inputbase: {
        color : 'white',
    },
    cancel: {
        marginRight : '5px'
    },
    icons: {
        alignItems : 'center',
        display : (props) => props.open ? 'none' : 'flex'
    },
    badge: {
        marginRight : theme.spacing(2)
    },
    searchButton: {
        marginRight : theme.spacing(2),
        display : 'block',
        [theme.breakpoints.up('sm')] : {
            display : 'none'
        }
    }
}))

const Navbar = () => {
    const [ open, setOpen ] = useState(false)
    const [search, setSearch] = useState('')
    const classes = useStyles({open})

  return (
    <AppBar position='static'>
        <Toolbar className={classes.toolbar}>
            <div className={classes.menu}>
                {/* <Menu style={{ marginRight : '20px' }} /> */}
                <Typography variant='h6' className={classes.logoLg}>
                    Projects
                </Typography>          
                <Typography variant='h6' className={classes.logoSm}>
                    Project
                </Typography>          
            </div>
            <div className={classes.search}>
                <Search style={{ marginRight: '5px', marginLeft : '5px' }} />
                <InputBase placeholder='Search...' className={classes.inputbase} fullWidth/>
                <Cancel className={classes.cancel} onClick={() => setOpen(false, () => setSearch(''))} />
            </div>
            <div className={classes.icons}>
                <Search className={classes.searchButton} onClick={() => setOpen(true)} />
                <Badge badgeContent={4} color='secondary' className={classes.badge} >
                    <Mail />
                </Badge>
                <Badge badgeContent={2} color='secondary' className={classes.badge} >
                    <Notifications />
                </Badge>
                <Avatar alt='avatar icon' src='https://source.unsplash.com/random' />
            </div>
        </Toolbar>
    </AppBar>
  )
}

export default Navbar