import React, { Component } from 'react';
import { Label } from 'semantic-ui-react'

class EpisodeTag extends Component {

    render(props){
        return (
            <div>
                <Label as= "a" basic pointing>
                {this.props.episode}
                </Label>
            </div>
        )
    }
}

export default EpisodeTag