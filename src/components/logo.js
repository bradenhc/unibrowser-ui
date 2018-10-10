import React from 'react';
import logo from '../../assets/img/logo.png';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    logo: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        padding: '20px',
    }
});

let Logo = ({ height, classes }) => (
	<div className={classes.logo}>
        <img src={logo} style={{width: 'auto', height: height + 'px'}}/>
	</div>
);

export default withStyles(styles)(Logo);
