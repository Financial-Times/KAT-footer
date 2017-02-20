import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Footer from 'o-footer';
import FooterRow from './../footer-row'; //full o-footer
import LegalLinks from './../../components/legal-links'; //short o-footer
import FooterCopyright from './../footer-copyright';
import FooterBrand from './../../components/footer-brand';


class KatFooterContainer extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    // only render if the props (state) have changed
    return JSON.stringify(nextProps) !== JSON.stringify(this.props);
  }

  componentDidMount() {
    Footer.init();
  }

  render() {
    let footerClass = "kat-footer o-footer o-footer--" + this.props.theme;
    let footerType;
    if (this.props.footerType === 'full') {
      footerType = (<FooterRow/>);
    }
    else {
      footerType = (<LegalLinks linksData={this.props.legalLinks}/>);
    }

    return (
      <footer className={footerClass} data-o-component="o-footer">
        <div className="o-footer__container">
          {footerType}
          <FooterCopyright/>
        </div>
        <FooterBrand/>
      </footer>
    );
  }
}

KatFooterContainer.propTypes = {
  theme: PropTypes.string.isRequired,
  legalLinks: PropTypes.array,
  footerType: PropTypes.string.isRequired
};

const mapStateToProps = (store) => {
  return {
    theme: store.KatFooterNs.katFooter.theme,
    legalLinks: store.KatFooterNs.legalLinks.links,
    footerType: store.KatFooterNs.katFooter.footerType
  };
};

export default connect(mapStateToProps)(KatFooterContainer);
