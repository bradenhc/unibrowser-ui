/* eslint-disable */
import React, {Component} from "react";
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            lat_lngs: []
        };

        this.callApi = this.callApi.bind(this);
    }

    async componentDidMount() {
        try {
            let res = await this.callApi();
            this.setState({lat_lngs: res});
        } catch (e) {
            console.log(e);
        }
    }

    async callApi() {
        const response = await fetch('http://localhost:8080/get_locations');
        const body = await response.json();

        if (response.status !== 200) throw Error(body.message);

        return body;
    }

    render() {
        return (
            <Map
                google={this.props.google}
                style={{width: '100%', height: '100%', position: 'relative'}}
                initialCenter={{
                    lat: 44.5649418,
                    lng: -123.2655627
                }}
                zoom={15}>
                {this.state.lat_lngs && this.state.lat_lngs.map((lat_lng, index) => {
                    return <Marker name={'Dolores park'} position={{lat: lat_lng['lat'], lng: lat_lng['lng']}} />;
                })}
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: process.env.GOOGLE_API_KEY
})(MapContainer)
