import React, { Component } from 'react';
import ReactMapboxGl, { Layer, Marker } from "react-mapbox-gl";
import { EpisodeTag } from '../components/EpisodeTag';
class WorldMap extends Component {

    state = {
        Episodes: [],
        center: [8.975918, 4.184438],
        zoom: [1.09]
    }

    componentDidMount(){
        fetch('http://localhost:3000/')
        .then(response => response.json())
        .then(data => this.setState({ Episodes: data.episodes }));
    }

    render(){
    
        const Map = ReactMapboxGl({
            accessToken: process.env.MAPBOX,
          });

        return Map? (
        <Map
          style={"mapbox://styles/kristenleach/cjowhw8p5419f2srpcpfhmp5s"}
          containerStyle={{
            height: "100vh",
            width: "100vw",
            center: this.state.center,
            zoom: this.state.zoom
          }}>
        </Map>
        ): null
    }
}

export default WorldMap