import React from 'react';
import { Logo } from "../../styles/componentStyles";
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    justifyContent: 'space-between',
    position: "fixed",
    left: "0",
    bottom: "0",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root} >
      <ExpansionPanel style={{backgroundColor: 'rgba(238,245,244,0.867)', borderBottom: 'rgb(115,162,175) solid 2px', borderTop: 'rgb(115,162,175) solid 2px'}}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}><Logo style={{fontSize: '15px'}}>Cantina &copy; 2020</Logo><Typography>Expand for Contact Details</Typography></Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            This is App was Developed by Zeb, Amit & Andrew
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
     
    </div>
  );
}