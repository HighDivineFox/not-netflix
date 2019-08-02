import React, { Component } from 'react';

class MediaItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageLoaded: false,
            url: this.getRandomImageUrl(),
            showF: Math.random(),
            title: ""
        }
    }
    
    render() {

        // This solution for lazy loading the image works but I don't like it.
        if(!this.state.imageLoaded){
            return(
                <div style={{display: 'none'}}>
                    <img src={this.state.url} className="media-item-img" onLoad={this.handleImageLoaded.bind(this)} onError={this.addDefaultSrc} alt="Media Thumbnail" />
                </div>
            )
        }

        if(this.state.showF >= 0.5){
            return (
                <div className="rel media-item">
                    <div className="media-item-title">{this.state.title}</div>
                    <img src={this.state.url} className="media-item-img" onLoad={this.handleImageLoaded.bind(this)} onError={this.addDefaultSrc} alt="Media Thumbnail" />
                </div>
            )
        }else{
            return (
                <div className="rel media-item">
                    <div className="media-logo">F</div>
                    <div className="media-item-title">{this.state.title}</div>
                    <img src={this.state.url} className="media-item-img" onLoad={this.handleImageLoaded.bind(this)} onError={this.addDefaultSrc} alt="Media Thumbnail" />
                </div>
            )
        }
    }

    componentDidMount(){
        this.getTitle()
    }

    addDefaultSrc(ev){
        ev.target.src = "https://picsum.photos/350/200"
    }

    handleImageLoaded(){
        this.setState({
            imageLoaded: true
        })
    }

    getRandomImageUrl(){
        let imageID = Math.ceil(Math.random() * 1000)
        return "https://picsum.photos/id/" + imageID + "/350/200"
    }

    getTitle(){

        fetch('https://baconipsum.com/api/?type=meat-and-filler')
            .then((response) => {

                if(response !== 200){
                    console.log('API Error')
                }

                response.json()
                    .then((data) => {
                        let text = data[0]

                        text = text.split(' ').slice(0, 2).join(' ');

                        this.setState({
                            title: text
                        })
                    })
            })
    }
}

export default MediaItem;