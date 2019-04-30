import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import Icon from '@material-ui/core/Icon';

import styles from './styles';


function NavBar(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar className={classes.toolBar}>
                    {/* <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton> */}
                    <Typography variant="h6" color="inherit" className={classes.grow}>
                        Title
                    </Typography>
                    <IconButton className={classes.menuSectionButton}>
                        menu
                        <Icon >restaurant</Icon>
                    </IconButton>
                    <IconButton className={classes.menuSectionButton}>
                        <Icon >face</Icon>
                    </IconButton>
                    <IconButton className={classes.menuSectionButton}>
                        <Icon >room</Icon>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default withStyles(styles)(NavBar);
