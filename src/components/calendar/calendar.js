import React, {Component} from "react";
import styled from 'styled-components';
import EventCalendar from './calendar_component';
import 'react-big-calendar/lib/css/react-big-calendar.css'

const StyledCalendar = styled.div`
    height: 100%;
`

export default class Calendar extends Component {

    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        return (
            <StyledCalendar>
                <EventCalendar />
            </StyledCalendar>
        ); 
    }

}