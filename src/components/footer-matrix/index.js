import React, { Component, PropTypes } from 'react';
import MatrixGroup from './../matrix-group';

class FooterMatrix extends Component {
  constructor (props) {
    super(props);
    this.buildMatrixColumns = this.buildMatrixColumns.bind(this);
  }

  shouldComponentUpdate (nextProps) {
    return JSON.stringify(nextProps) !== JSON.stringify(this.props);
  }

  buildMatrixColumns (props) {
    if ( Array.isArray(props.matrix) && (props.matrix.length > 0) ){
      return props.matrix.map((data, index) => {
        return <MatrixGroup groupData={data} key={index} index={index}/>;
      });
    }
    return null;
  }

  render () {
    return(
      <nav className='o-footer__matrix' role='navigation' aria-label='Useful links'>
        { this.buildMatrixColumns(this.props) }
      </nav>
      );
  }
}

FooterMatrix.propTypes = {
  matrix: PropTypes.array.isRequired
};

export default FooterMatrix;
