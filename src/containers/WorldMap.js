import React, { Component } from 'react';
import ReactMapboxGl, { Layer, Marker } from "react-mapbox-gl";
import { EpisodeTag } from '../components/EpisodeTag';

class WorldMap extends Component {

    state = {
        Map: null,
        Episodes: []
    }

    componentWillMount(){
        return fetch("Node API Link here")
        .then(response => response.json())
        .then(data => this.setState({
            Episodes: data
        }))

    }

    componentDidMount(){
        if (process.env.MAPBOXKEY){
            this.setState({
                Map: ReactMapboxGl({
                    accessToken: process.env.MAPBOXKEY
                })
            })
        }
    }
    render(){
    
        const {Map} = this.state

        return Map? (
        <Map
          style={"mapbox://styles/kristenleach/cjowhw8p5419f2srpcpfhmp5s"}
          containerStyle={{
            height: "300px",
            width: "400px",
          }}>
        </Map>
        ): null
    }
}

export default WorldMap