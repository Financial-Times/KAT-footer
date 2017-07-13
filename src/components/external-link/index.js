import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ExternalLink extends Component {
  constructor(props){
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState){
    return JSON.stringify(nextProps) !== JSON.stringify(this.props);
  }

  render(){
    return(
        <h6 className="o-footer__external-link o-footer__matrix-title">
          <a className="o-footer__more-from-ft o-footer__matrix-title" href={this.props.href}>{this.props.label}</a>
        </h6>
      );
  }

}

ExternalLink.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired
};

export default ExternalLink;
