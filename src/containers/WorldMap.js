import React, { Component } from 'react';
import ReactMapboxGl, { Layer, Marker } from "react-mapbox-gl";
import { EpisodeTag } from '../components/EpisodeTag';
// require('dotenv').config();
class WorldMap extends Component {

    state = {
        Episodes: []
    }

    render(){
    
        const Map = ReactMapboxGl({
            accessToken: process.env.MAPBOX
          });

        return Map? (
        <Map
          style={"mapbox://styles/kristenleach/cjowhw8p5419f2srpcpfhmp5s"}
          containerStyle={{
            height: "100%",
            width: "100%",
          }}>
        </Map>
        ): null
    }
}

export default WorldMap