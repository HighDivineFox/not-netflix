import React, { Component } from 'react';

class Showcase extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showcaseImageUrl: this.getShowcaseImage(),
            showCaseTitle: "",
            showCaseSummary: " "
        }

        this.loadShowcaseItem()
    }
    
    render() {
        return (
            <div className="showcaseWrapper">
                <div id="showcaseImage">
                <div className="showcaseInformationWrapper">
                    <div className="showcaseTitle">{this.state.showCaseTitle}</div>
                        <div className="showcaseSummary" dangerouslySetInnerHTML={{__html:this.state.showCaseSummary}}></div>
                        <div>
                            <div>
                                <input className="button" type="button" value="Play" />
                                <input className="button" type="button" value="My List" />
                            </div>
                        </div>
                    </div>
                    <img src={this.state.showcaseImageUrl} className="showcase-img" alt="Large media thumbnail" onLoad={this.handleImageLoaded.bind(this)} onError={this.handleImageError.bind(this)} />
                </div>
            </div>
        );
    }

    componentDidMount(){
        document.getElementById("showcaseImage").style.display = "none"
    }

    handleImageLoaded(){
        document.getElementById("showcaseImage").style.display = ""
    }

    handleImageError(){
        console.log('Showcase Image didn\'t load');
        
        this.setState({
            showcaseImageUrl: "https://picsum.photos/" + window.innerWidth + "/650"
        })
    }

    getShowcaseImage(){
        return "https://picsum.photos/" + window.innerWidth + "/650"
    }

    loadShowcaseItem(){
        let randomIndex = Math.ceil(Math.random() * 10000)
        let url = "https://api.tvmaze.com/shows/" + randomIndex

        fetch(url, {mode: 'cors'})
            .then((response) => {

                if(response.status !== 200){
                    console.log('API Error')
                    console.log(response.statusText)                    
                }

                response.json()
                    .then((data) => {
                        //console.log(data);

                        let sum = data.summary

                        sum = sum.split(".", 1) + "."
                        
                        this.setState({
                            showCaseTitle: data.name,
                            showCaseSummary: sum
                        })
                    })
            }).catch((err) => {
                console.log("API Error: Something went wrong")
                console.log(err)
            })
    }
}

export default Showcase;