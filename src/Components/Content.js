import React, { Component } from 'react'
import ContentRow from './ContentRow'
import Showcase from './Showcase';

class Content extends Component {
    // MAKE SHOWCASE ITS OWN COMPONENT
    constructor(props) {
        super(props);
        this.state = {
            showcaseImageUrl: this.getShowcaseImage()
        }
    }
    
    render() {
        if(!this.props.isLoggedIn){
            return null
        }else{
            return (
                <div>
                    <Showcase />
                    
                    <ContentRow title="Popular"/>
                    <ContentRow title="Action"/>
                    <ContentRow title="Comedy"/>
                </div>
            )
        }
    }

    getShowcaseImage(){
        return "https://picsum.photos/" + window.innerWidth + "/650"
    }
}

export default Content;