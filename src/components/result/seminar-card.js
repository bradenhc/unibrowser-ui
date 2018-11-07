import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from './seminar-card-styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

let SeminarCard = ({classes, result}) => (
    <div className={classes.root}>
        <Paper className={classes.paper} elevation={1}>
            <div>
                Test
            </div>
        </Paper>
    </div>
)

SeminarCard.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SeminarCard);