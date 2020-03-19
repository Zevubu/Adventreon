import React from "react";
import {DivWBorder, H1T} from "../../styles/homeStyle"
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
        root: {
          display: 'flex',
          flexWrap: 'wrap',
          '& > *': {
            margin: theme.spacing(10),
            width: theme.spacing(300),
            height: theme.spacing(16),
          },
        },
      }));

function HomePage (){
const classes = useStyles();

    return(
        <div style={{width: '75%' }} className={classes.root}>
            <Paper elavation={3}>
            
                    <H1T>Home page</H1T>
                    
            </Paper>
        </div>
    )
}

export default HomePage;