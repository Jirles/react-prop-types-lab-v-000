// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

export default class Product extends React.Component {
  render(){
    return(
      <div>
        <h3>{this.props.name}</h3>
        <small>{this.props.producer}</small>
        <ul>
          <li>{}</li>
        </ul>
      </div>
    )
  }
}
