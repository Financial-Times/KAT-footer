import React, { Component, PropTypes } from 'react';
// import React, { Component } from 'react';
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
      // <div className="o-footer__copyright kat-footer__copyright" role="contentinfo">
      //   <small>
      //     <abbr title={this.props.footerCopyright.abbr.title} aria-label={this.props.footerCopyright.abbr.abbr}> {this.props.footerCopyright.abbr.label} </abbr> {this.props.footerCopyright.abbr.text}. {this.props.footerCopyright.footer} <a href={this.props.footerCopyright.footerLink.link} aria-label="F T Editorial Code of Practice">{this.props.footerCopyright.footerLink.text}</a>
      //   </small>
      // </div>
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
// export default FooterContactDetails;
