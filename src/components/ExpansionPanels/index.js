import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightBold,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'left',
        color: theme.palette.text.secondary,
        border: 'none',
        boxShadow: 'none',
    },
    Title: {
        padding: theme.spacing.unit * 2,
        textAlign: 'left',
        color: theme.palette.text.secondary,
        border: 'none',
        boxShadow: 'none',
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        textTransform: 'uppercase',
    },
    SubTitle: {
        paddingLeft: theme.spacing.unit * 2,

        textAlign: 'left',
        color: theme.palette.text.secondary,
        border: 'none',
        boxShadow: 'none',
        fontWeight: 'regular',
        fontFamily: 'Roboto',
    },
    Price: {
        padding: theme.spacing.unit * 2,
        textAlign: 'right',
        color: theme.palette.text.secondary,
        border: 'none',
        boxShadow: 'none',
        fontWeight: 'regular',
        fontFamily: 'Roboto',
    },
});

function ExpansionPanels(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>

            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography className={classes.heading}>Expansion Panel 1</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Grid item xs={12} sm={8}>
                        <Typography className={classes.Title}>ciaonoen dhewufh  sdh ejejjke con oaoi rutifj</Typography>
                        <Typography className={classes.SubTitle}>Ciaonoen, dhewufh, sdh ejejjke con oaoi, rutifjfh di fhirhgu tlsnchf jk kd</Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography className={classes.Price}>d 21343.53</Typography>
                    </Grid>
                </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography className={classes.heading}>Expansion Panel 2</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
          </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>

        </div>
    );
}

ExpansionPanels.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ExpansionPanels);