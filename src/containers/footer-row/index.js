import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import FooterMatrix from './../footer-matrix';
import ExternalLink from './../external-link';

class FooterRow extends Component {

  constructor(props){
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    // only render if the props (state) have changed
    return JSON.stringify(nextProps) !== JSON.stringify(this.props);
  }

  componentDidMount(){

  }

  render(){
    return(
            <div className="o-footer__row">
              <FooterMatrix/>
              <ExternalLink/>
            </div>      
      );
  }
}

export default FooterRow;