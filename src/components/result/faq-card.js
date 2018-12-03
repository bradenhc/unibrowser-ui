import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from './faq-card-styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

const StyledFaqCard = styled.div`
    display: flex;
    flex-direction: column;
    margin: 5px;
    padding: 5px;
    width: 90%;
    min-height: 200px;
    overflow: hidden;
`

const Question = styled.div`
    display: flex;
    font-size: 1.6em;
`

const Answer = styled.div`
    display: flex;
    padding-top: 10px;
    color: #adadad;
`

let FaqCard = ({classes, result}) => (
    <StyledFaqCard>
        <Question>
            <span>{result.title}</span>
        </Question>
        <Answer>
            <span>{result.answer}</span>
        </Answer>
    </StyledFaqCard>
)

FaqCard.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FaqCard);