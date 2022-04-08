import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Leftbar from "./components/Leftbar";
import Rightbar from "./components/Rightbar";
import Navbar from "./components/Navbar";
import Feed from './components/Feed'
import Add from "./components/Add";

const useStyles = makeStyles((theme) => ({
   rightbar : {
      [theme.breakpoints.down('sm')] : {
         display : 'none'
      }
   }
}));

const App = () => {
  const classes = useStyles();

  return (
    <div>
      <Navbar />
      <Grid container>
         <Grid item xs={2} sm={2}>
            <Leftbar />
         </Grid>
         <Grid item xs={10} sm={7}>
            <Feed />
         </Grid>
         <Grid item sm={3} className={classes.rightbar}>
            <Rightbar />
         </Grid>
      </Grid>
      <Add />
    </div>
  );
};

export default App;
