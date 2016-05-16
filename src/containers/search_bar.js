import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
    // bind this.onInputChange to the SearchBar
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
      this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    // stops enter key or click of search bar to submit form
    event.preventDefault();

    //here is where we want to go and fetch data
    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
  }

  render() {
    return (
      <form onSubmit={ this.onFormSubmit } className='input-group'>
        <input
          placeholder='Get a five-day forecast in you favorite cities' className='form-control'
          value={this.state.term}
          onChange={this.onInputChange} />
        <span className="input-group-btn">
          <button type="submit" className='btn btn-secondary'>Submit</button>
        </span>
      </form>
    );
  }
}

function mapDispactchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispactchToProps)(SearchBar);
