import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from './details-styles';

let DetailsView = ({classes}) => (
    <div>Hello, world!</div>
);

DetailsView.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DetailsView);