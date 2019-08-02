import React, { Component } from 'react';
import MediaItem from './MediaItem'

class ContentRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [0, 1, 2, 3, 4, 5, 6]
        }
    }
    

    render() {
        return (
            <div className="content-row">
                <h1>{this.props.title}</h1>
                <div className="flexRow non-wrapped">
                    {this.state.items.map((index) => (
                        <MediaItem key={index}/>
                    ))}
                </div>
            </div>
        );
    }
}

export default ContentRow;