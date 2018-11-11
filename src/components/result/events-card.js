import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from './events-card-styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

const StyledEventImage = styled.div`
    display: flex;
    padding: 10px;
    width: 80px;
    justify-content: center;
    img {
        display: flex;
        height: 80px;
        width: 80px;
        border-radius: 40px;
    }
`

const StyledInfo = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    flex-basis: 80%;
    max-width: 80%;

    div {
        padding: 10px;
        padding-left: 0;
    }

    .title {
        color: #d74009;
        font-size: 24px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        cursor: pointer;
    }

    .description {
        max-height: 100px;
        overflow: hidden;
    }

    .date-time {
        margin-top: auto;
        i {
            margin-right: 5px;
        }
    }

    .location {
        margin-top: auto;
        color: #d74009;
        cursor: pointer;
        i {
            margin-right: 5px;
        }
    }
`

const EventImage = ({image}) => (
    <StyledEventImage>
        <img src={image || ""}></img>
    </StyledEventImage>
)

const onTitleClick = (link) => {
    window.open(link, "_blank");
}

const Info = ({result}) => (
    <StyledInfo>
        <div className="title" onClick={() => onTitleClick(result.link)}>
            {result && result.tags[0].term ? result.tags[0].term : ""}
        </div>
        <div className="description">
            {result && result.title ? result.title : ""}
        </div>
        <div style={{marginTop: 'auto'}}>
            <div className="date-time">
                <i className="fas fa-clock"></i><span>{result && (result.published_parsed[1] + "/" + result.published_parsed[2] + "/" + result.published_parsed[0]) ? result.published_parsed : "--"}</span>
            </div>
        </div>
    </StyledInfo>
)




let EventsCard = ({classes, result}) => (
    <div className={classes.root}>
        <Paper className={classes.paper} elevation={1}>
            <EventImage image={result.media_content[0].url}/>
            <Info result={result.title} />
        </Paper>
    </div>
)

EventsCard.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EventsCard);
