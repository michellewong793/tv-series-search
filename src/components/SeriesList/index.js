import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './styles.css';
import SeriesImage from '../SeriesImage';

const SeriesListItem = ({series}) => (
    <li className="series-list-item">
         <Link to={`/series/${series.show.id}`}> {series.show.name} </Link>
    </li>
)

class SeriesList extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
            return (
                <div> 
                    <ul className="series-list">
                        {this.props.list.map(series => (
                            <div>
                            <SeriesListItem series={series} key={series.show.id} />
                            <SeriesImage series={series} imageLink={series.show.image ? series.show.image.medium :""}/>
                            </div>
                        ))}
        
                    </ul>
                </div>
            ) 
        }  
    }
   


export default SeriesList;
