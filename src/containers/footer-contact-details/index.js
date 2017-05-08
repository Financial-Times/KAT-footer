// import React, { Component, PropTypes } from 'react';
import React, { Component } from 'react';
// import { connect } from 'react-redux';

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
      // <div>
      <div className="kat-footer__contact-details">
        <p className="kat-footer__contact-details-item">Any questions? Contact Us</p>
        <p className="kat-footer__contact-details-item"><strong>+44 (0)20 7873 4001</strong> or <strong>+1 877 843 3399</strong></p>
        <p className="kat-footer__contact-details-item"><strong>customersuccess@ft.com</strong></p>
        <br></br>
      </div>
      // <div>
      );
  }
}

// FooterCopyright.propTypes = {
//   footerCopyright: PropTypes.object.isRequired
// };

// const mapStateToProps = (store) => {
//   return {
//     footerCopyright: store.KatFooterNs.footerCopyright
//   };
// };

// export default connect(mapStateToProps)(FooterCopyright);
export default FooterContactDetails;
