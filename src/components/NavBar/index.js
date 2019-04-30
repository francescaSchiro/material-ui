import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { LinkTab, TabContainer } from './styles';
import ExpansionPanels from '../ExpansionPanels';
import Toolbar from '@material-ui/core/Toolbar';
// // import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// // import MenuIcon from '@material-ui/icons/Menu';
// import Icon from '@material-ui/core/Icon';
import NoSsr from '@material-ui/core/NoSsr';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import PhoneIcon from '@material-ui/icons/Phone';
import RoomIcon from '@material-ui/icons/Room';
import FaceIcon from '@material-ui/icons/Face';


import styles from './styles';




class NavBar extends React.Component {
    state = { value: 0, };

    handleChange = (e, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <NoSsr>
                <div className={classes.root}>
                    <AppBar position="static">
                        <Toolbar className={classes.toolBar}>
                            <Typography variant="h6" color="inherit" className={classes.grow}>
                                Title
                    </Typography>
                            <Tabs variant="fullWidth" value={value} onChange={this.handleChange}>
                                <LinkTab icon={<FaceIcon />} href="page1" />
                                <LinkTab icon={<RestaurantIcon />} href="page2" />
                                <LinkTab icon={<RoomIcon />} href="page3" />
                                <LinkTab icon={<PhoneIcon />} href="page4" />
                            </Tabs>
                        </Toolbar>
                        {value === 0 && <TabContainer>Page One</TabContainer>}
                        {value === 1 &&
                            <TabContainer>
                                <ExpansionPanels />
                            </TabContainer>
                        }
                        {value === 2 && <TabContainer>Page Three</TabContainer>}
                        {value === 3 && <TabContainer>Page Four</TabContainer>}

                    </AppBar>
                </div>
            </NoSsr>
        );

    }
};
export default withStyles(styles)(NavBar);

                // <Toolbar className={classes.toolBar}>
                //     {/* <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                //         <MenuIcon />
                //     </IconButton> */}
                //     <Typography variant="h6" color="inherit" className={classes.grow}>
                //         Title
                //     </Typography>
                //     <IconButton className={classes.menuSectionButton}>
                //         menu
                //         <Icon >restaurant</Icon>
                //     </IconButton>
                //     <IconButton className={classes.menuSectionButton}>
                //         <Icon >face</Icon>
                //     </IconButton>
                //     <IconButton className={classes.menuSectionButton}>
                //         <Icon >room</Icon>
                //     </IconButton>
                // </Toolbar>