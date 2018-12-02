import React from "react";
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import styled from 'styled-components'

const localizer = BigCalendar.momentLocalizer(moment) 

const StyledCalendar  = styled.div`
  height: 100%;
`
//{start: start, end: new Date(start.getTime()+1000*60*60*3), title: "Test Event"}]
//const start  = new Date(new Date().getTime()+1000*60*60*24);
const EventCalendar = props => (
  <StyledCalendar>
    <BigCalendar
      localizer={localizer}
      events={props.events.map((e, k)=>{
        return {...e, end: new Date(e.start.getTime()+1000*60*60*3)}
      })}
      startAccessor="start"
      endAccessor="end"
    />
  </StyledCalendar>
)

export default EventCalendar;