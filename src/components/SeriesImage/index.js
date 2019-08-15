import React, {Component} from 'react';
import "./styles.css";

const SeriesImage = (props) => {
    return (
        <div>
            <img src={props.imageLink}></img> 
        </div> 
        
    )
}

export default SeriesImage;