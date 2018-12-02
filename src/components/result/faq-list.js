import React from 'react';
import PropTypes from 'prop-types';
import { withStyles} from '@material-ui/core/styles';
import styles from './faq-card-list-styles';
import FaqCard from './faq-card';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

const FaqContainer = styled.div`
    display: flex;
    flex-direction: column;
    overflow: visible;
`

let FaqListView = ({classes, results, onResultSelect}) => (
    <FaqContainer>
        {
            results && results.length?
            results.map((r, i)=>{
                return (<FaqCard result={r} key={i}>
                </FaqCard>)
            }):
            <div></div>
        }
    </FaqContainer>
);

FaqListView.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FaqListView);