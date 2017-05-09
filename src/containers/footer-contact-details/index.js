import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class FooterContactDetails extends Component {

  constructor(props){
    super(props);
  }

  shoudlComponentUpdate(nextProps, nextState){
    return JSON.stringify(nextProps) !== JSON.stringify(this.props);
  }

  render(){
    return(
      <div className="kat-footer__contact-details">
        <p className="kat-footer__contact-details-item">{this.props.footerContactDetails.intro}</p>
        <p className="kat-footer__contact-details-item"><strong>{this.props.footerContactDetails.ukPhoneNumber}</strong>{this.props.footerContactDetails.or}<strong>{this.props.footerContactDetails.usPhoneNumber}</strong></p>
        <p className="kat-footer__contact-details-item"><strong>{this.props.footerContactDetails.email}</strong></p>
        <br></br>
      </div>
      );
  }
}

FooterContactDetails.propTypes = {
  footerContactDetails: PropTypes.object.isRequired
};

const mapStateToProps = (store) => {
  return {
    footerContactDetails: store.KatFooterNs.footerContactDetails
  };
};

export default connect(mapStateToProps)(FooterContactDetails);
