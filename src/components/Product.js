// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

export default class Product extends React.Component {
  render(){
    return(
      <h3>{this.props.name}</h3>
      <small>{this.props.producer}</small>
      <ul>
        <li>Watermark: {this.props.hasWatermark}</li>
        <li>Paper color: {this.props.color}</li>
        <li>Paper weight:{this.props.weight}</li>
    )
  }
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: function(weight){
    if (weight < 80 || weight > 300){
      return new Error("Weight prop must be a number ranging between 80 and 300")
    }
  }
}

Product.defaultProps = {
  hasWatermark: false
}
