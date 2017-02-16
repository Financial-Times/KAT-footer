import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import MatrixGroup from './../../components/matrix-group';

class FooterMatrix extends Component {

  constructor(props){
    super(props);
    this.buildMatrixColumns = this.buildMatrixColumns.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState){
    return JSON.stringify(nextProps) !== JSON.stringify(this.props);
  }

  componentDidMount(){

  }

  buildMatrixColumns(props){
    if ( Array.isArray(props.matrix) && (props.matrix.length > 0) ){
      const matrix = props.matrix;
      return matrix.map((data, index) => {
        return <MatrixGroup groupData={data} key={index}/>
      });
    }
    return null;
  }

  render(){
    return(
      <nav className="o-footer__matrix" role="navigation" aria-label="Useful links">
        { this.buildMatrixColumns(this.props) }
      </nav>
      );
  }
}

const mapStateToProps = (store) => {
  return store.KatFooterNs.matrix;
};

export default connect(mapStateToProps)(FooterMatrix);