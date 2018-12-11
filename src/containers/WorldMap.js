import React, { Component } from 'react';
import ReactMapboxGl from "react-mapbox-gl";
import { EpisodeTag } from '../components/EpisodeTag';
class WorldMap extends Component {

    state = {
        Episodes: [],
        center: [29.370660, 12.125000],
        zoom: [1.19],
        viewport: {
            height: "100vh",
            width: "100vw",
            
        }
    }

    componentDidMount(){
        fetch('http://localhost:3000/')
        .then(response => response.json())
        .then(data => this.setState({ Episodes: data.episodes }));
        console.log(this.state)
    }

    render(){
            const { center, zoom } = this.state
            const Map = ReactMapboxGl({
                accessToken: process.env.MAPBOX
              });
    
            return Map? (
           <Map
             style={"mapbox://styles/kristenleach/cjowhw8p5419f2srpcpfhmp5s"}
             containerStyle={{
               height: "100vh",
               width: "100vw",
             }} center={center} zoom={zoom}>
              </Map>
        ): null
    }
}

export default WorldMap