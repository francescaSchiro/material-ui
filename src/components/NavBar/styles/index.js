import React from 'react';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';


const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
        // textAlign: 'center',
        // padding: '16px',
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    menuSectionButton: {
        color: 'white',
        label: 'white',
        fontSize: '13px',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        letterSpacing: '.5px',
        textTransform: 'uppercase',
    },
    toolBar: {
        backgroundColor: '#004c18',
        height: '100%',
    },
};
export default styles;


export function LinkTab(props) {
    return <Tab
        icon={props.icon}
        component="a"
        onClick={event => event.preventDefault()}
        {...props}
        style={{ padding: '5px' }}
    />
    // return <Tab icon={props.icon} label={props.label} component="a" onClick={event => event.preventDefault()} {...props} />

};

export function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3, backgroundColor: 'white', }}>
            {props.children}
        </Typography>
    );
}