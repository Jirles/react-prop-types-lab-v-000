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
          <li>Watermark: {this.props.hasWatermark}</li>
          <li>Paper Color: {this.props.color}</li>
          <li>Paper Weight: {this.props.weight}</li>
        </ul>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: function(weight){
    if (weight < 80 || weight > 300){
      return new Error('Prop weight must be a number ranged between 80 and 300.')
    }
  }
}
