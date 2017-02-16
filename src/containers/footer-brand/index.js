import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';

class FooterBrand extends Component {

  constructor(props){
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState){
    return JSON.stringify(nextProps) !== JSON.stringify(this.props);
  }

  componentDidMount(){

  }

  render(){
    return(
      <div className="o-footer__brand">
        <div className="o-footer__container">
          <div className="o-footer__brand-logo"></div>
        </div>
      </div>
      );
  }
}

export default FooterBrand;