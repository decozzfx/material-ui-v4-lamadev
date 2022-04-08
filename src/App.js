import './App.css';
import React from 'react'

import { Button } from "@material-ui/core";
import { Person } from "@material-ui/icons";
import { makeStyles} from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    color : 'white',
    backgroundColor : theme.palette.success.dark
  }
}))

function App() {
  const classes = useStyles()

  return (
    <div className="App">
      <Button
    variant='contained'
    color='primary'
    size='large'
    startIcon={<Person />}
    className={classes.button}
    >
      Save
    </Button>
    </div>
  );
}

export default App;
