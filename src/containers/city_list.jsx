import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import City from './city'
import { setCities } from '../actions/index.js';


class CityList extends Component {
  componentWillMount() {
    this.props.setCities();
  }

  renderList = () => {
    return this.props.cities.map((city, index) =>
      <City key={index} name={city.name} city={city}/>
    )
  }

  render() {
    return (
      <div className="cities">
        <ul className="list-group">
          {this.renderList()}
        </ul>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setCities: setCities },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    cities: state.cities
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CityList);
