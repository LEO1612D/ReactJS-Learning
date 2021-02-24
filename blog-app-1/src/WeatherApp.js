import React, { Component } from 'react'

export default class WeatherApp extends Component {
    constructor(props){

        super(props);

        this.state = {
            lat:null
        }

        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat:position.coords.latitude}),
            err => console.log(err)
        );

    }
    render() {
        return (
            <div>
                <h1>
                    lat : {this.state.lat}
                </h1>
            </div>
        )
    }
}
