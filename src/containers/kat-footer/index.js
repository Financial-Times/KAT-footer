import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import FooterRow from './../footer-row'; //full o-footer
import LegalLinks from './../../components/legal-links'; //short o-footer
import FooterCopyright from './../footer-copyright';
import FooterContactDetails from './../footer-contact-details';
import FooterBrand from './../../components/footer-brand';

class KatFooterContainer extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    // only render if the props (state) have changed
    return JSON.stringify(nextProps) !== JSON.stringify(this.props);
  }

  render() {
    const footerClass = "kat-footer o-footer o-footer--" + this.props.theme;
    let footerType;
    if (this.props.footerType === 'full') {
      footerType = (<FooterRow />);
    }
    else {
      footerType = (<LegalLinks linksData={this.props.legalLinks} />);
    }

    return (
      <div>
        <footer className={footerClass} data-o-component="o-footer">
          <div className="kat-footer__contact-wrapper">
            <div className="o-footer__container">
              <FooterContactDetails />
            </div>
          </div>
          <div className="o-footer__container">
            {footerType}
            <FooterCopyright />
          </div>
          <FooterBrand />
        </footer>
      </div>
    );
  }
}

KatFooterContainer.propTypes = {
  theme: PropTypes.string.isRequired,
  legalLinks: PropTypes.array,
  footerType: PropTypes.string.isRequired,
  footerPaddingTop: PropTypes.number.isRequired
};

const mapStateToProps = (store) => {
  return {
    theme: store.KatFooterNs.katFooter.theme,
    legalLinks: store.KatFooterNs.legalLinks.links,
    footerType: store.KatFooterNs.katFooter.footerType,
    footerPaddingTop: store.KatFooterNs.katFooter.footerPaddingTop,
  };
};

export default connect(mapStateToProps)(KatFooterContainer);
