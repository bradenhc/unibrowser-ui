import React from "react";
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import styled from 'styled-components'

const localizer = BigCalendar.momentLocalizer(moment) 

const StyledCalendar  = styled.div`
  height: 100%;
`
const start  = new Date(new Date().getTime()+1000*60*60*24);
const EventCalendar = props => (
  <StyledCalendar>
    <BigCalendar
      localizer={localizer}
      events={[{start: start, end: new Date(start.getTime()+1000*60*60*3), title: "Test Event"}]}
      startAccessor="start"
      endAccessor="end"
    />
  </StyledCalendar>
)

export default EventCalendar;