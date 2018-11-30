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
        let resp = fetch(`http://localhost:8080/api/${category}?query=${query}`);
        return resp
    }

    componentDidMount(){
        try{
            let dataPromise = null;
            console.log("Calender categories\n")
            console.log(calenderCategories)
            calenderCategories.forEach((category, key)=>{
                dataPromise =  this.getData({category: category.value, query: ""})
                dataPromise.then((data)=>{
                    try{
                        let json = data.json()
                        json.then((result)=>{
                            console.log(result);
                        }).catch((e)=>{
                            console.log("Json error")
                            console.log(`In Error Category ${category.value}`);
                            let mock = null;
                            if(category.value === "sports") mock = sportsMock;
                            if(category.value === "freefood") mock = freeFoodMock;
                            if(category.value === "events") mock = eventsMock;
                            console.log(mock)
                            this.state.events.push(mock);
                        })
                    } catch(e){
                        debugger;
                        throw e
                    }
                }).catch((error)=>{
                    debugger;

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
                <div>
                    {this.state.events}
                </div>
            </StyledCalendar>
        ); 
    }

}