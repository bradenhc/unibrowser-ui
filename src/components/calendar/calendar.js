import React, {Component} from "react";
import styled from 'styled-components';
import EventCalendar from './calendar_component';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import {calenderCategories} from '../../model/categories';
import mock, {sportsMock, seminarMock, freeFoodMock, eventsMock} from '../../model/results';

const StyledCalendar = styled.div`
    height: 100%;
`




export default class Calendar extends Component {

    constructor(props) {
        super(props);
        let data = [];

        this.state = {
            events: []
        };
    }

    getData({category, query}) {
        let resp = fetch(`http://localhost:8081/api/${category}?query=${query}`);
        return resp
    }
    transformDataForEvents(tempEvents){
        let events = []
        tempEvents.map((tEvent, key)=>{
            if(tEvent.category=="sports"){
                tEvent.list.matches.forEach((match, k)=>{
                    let title = match.sport;
                    let date = new Date(`${match.date} ${match.time}`)
                    if (match.alt_title) {
                        title = title + " " + match.alt_title;
                    }
                    if(match.home && match.home.name){
                        title = `${title}: ${match.home.name} vs ${match.away.name}`;
                    }
                    //Oct 27 2018 12:00 PM PST
                    events.push({title: title, start: date});
                })
            }else if(tEvent.category=="freefood"){
                tEvent.list.forEach((event, key)=>{
                    events.push({title: `Free Food ${event.screen_name}`, start: new Date(event.event_date)})
                })
            }else if(tEvent.category=="events"){
                tEvent.list.forEach((event, key)=>{
                    let date = new Date(event.published_parsed[0], 
                        event.published_parsed[1]-1, 
                        event.published_parsed[2], 
                        event.published_parsed[3], 
                        event.published_parsed[4],
                        event.published_parsed[5]);
                    events.push({title: event.title, start: date});
                })
            }
        })
        this.setState({events: [...this.state.events, ...events]})
    }

    async componentDidMount(){
        try{
            let dataPromise = null;

            console.log("Calender categories\n")
            console.log(calenderCategories)
            let tempEvents = []
            const transformDataForEvents = this.transformDataForEvents
            let component = this;
            calenderCategories.forEach((category, key)=>{
                dataPromise =  this.getData({category: category.value, query: ""})
                dataPromise.then((data)=>{
                    try{
                        let json = data.json()
                        json.then((result)=>{
                            if(category.value === "sports") data = sportsMock;
                            if(category.value === "freefood") data = freeFoodMock;
                            if(category.value === "events") data = eventsMock;
                            data = {list: data, category: category.value};
                            this.transformDataForEvents([data])
                        }).catch((e)=>{
                
                            console.log("Json error")
                            console.log(`In Error Category ${category.value}`);
                            let mock = null;
                            if(category.value === "sports") mock = sportsMock;
                            if(category.value === "freefood") mock = freeFoodMock;
                            if(category.value === "events") mock = eventsMock;
                            mock = {list: mock, category: category.value};
                            console.log(mock)
                            tempEvents.push(mock);
                        })
                    } catch(e){
            
                        throw e
                    }
                }).catch((error)=>{
        

                })
            })
        }catch(e){
            console.log("Outside error",e)
        }
    }

    // async componentDidMount(){
	// 	let results = await this.retrieveSearchResults(this.state.category, this.state.query);
	// 	this.setState({results: results});
	// }

	// async retrieveSearchResults(category="events", query=""){
	// 	try {
	// 		let resp = await fetch(`http://localhost:8080/api/${category}?query=${query}`);
	// 		let data = await resp.json();
	// 		return data;
	// 	} catch(e) {
	// 		console.log(e);
	// 		console.log(sportsMock);
	// 		if(category === "sports") return sportsMock;
	// 		if(category === "seminars") return seminarMock;
	// 		if(category === "freefood") return freeFoodMock;
	// 		if(category === "events") return eventsMock;
	// 		return mock;
	// 	}
	// }

    render() {
        return (
            <StyledCalendar>
                <EventCalendar events={this.state.events}/>
            </StyledCalendar>
        ); 
    }

}