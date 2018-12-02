import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from './professor-styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import FaqListView from '../faq-list';

let FaqView = ({results}) => (
    <FaqListView results={results}/>
)

export default withStyles(styles)(FaqView);
