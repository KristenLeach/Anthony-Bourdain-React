import React, { Component } from 'react';
import { Label } from 'semantic-ui-react'

class EpisodeTag extends Component {

    render(){
        return (
            <div>
                <Label as= "a" basic pointing>
                this.props.city
                </Label>
            </div>
        )
    }
}

export default EpisodeTag