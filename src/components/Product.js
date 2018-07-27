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
  name: PropType.string.isRequired,
  producer: PropType.string,
  hasWatermark: PropType.bool,
  color: PropType.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
}
