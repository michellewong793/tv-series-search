import React, {Component} from 'react';
import 'whatwg-fetch';
import SeriesList from '../SeriesList';
import './styles.css';

class Form extends Component { 
  state = {
    series: [],
    isFetching: false,
    seriesName: '',
  }
  
  onSeriesInputChange = (e) => {
    this.setState( { seriesName: e.target.value, isFetching: true} );
    fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
      .then(response => response.json())
      .then(json => this.setState({ series: json, isFetching: false}))
      .then(console.log(this.state.series))
     
  }

  render() {
    return (
      <div>
        <label>
          Which show are you looking for?
          <input type="text" placeholder="Search TV Guide..." onChange={this.onSeriesInputChange}></input>
        </label>
        <SeriesList list={this.state.series}></SeriesList>
      </div>
    )
  }
}
  

export default Form; 
