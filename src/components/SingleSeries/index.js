import React, {Component} from 'react';
import SeriesImage from '../SeriesImage';
import "./styles.scss";
class SingleSeries extends Component {
    state = {
        show: null
    }

    componentDidMount() { 
        const { id } = this.props.match.params; 
        fetch(`http://api.tvmaze.com/shows/${id}`)
        .then(response => response.json())
        .then(json => this.setState({ show: json }))
    }

    render(){
        const { show } = this.state;
        return (
        <div>
            { show !== null && 
            <div className="show-container">
                <h2> Show Name: {show.name} </h2>
                <div className="show-image-description"> 
                    <SeriesImage imageLink={show.image ? show.image.medium :""}/>
                    <p> Summary: {show.summary.replace(/<p>|<b>|<\/b>|<\/p>|<\/br>/g,"")} </p>
                </div> 
                <div className="show-details">
                <p> Premiered: {show.premiered} </p>
                { show.officialSite && 
                <h4>
                    <a href={show.officialSite}>{show.officialSite}</a>
                </h4> }
                </div>
               
            </div>
            }


        </div>
        )
    }
}

export default SingleSeries; 
