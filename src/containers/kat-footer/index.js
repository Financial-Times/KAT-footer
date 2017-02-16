import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Footer from 'o-footer';
import FooterRow from './../footer-row';
import FooterCopyright from './../footer-copyright';
import FooterBrand from './../footer-brand';

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
    let footerClass = "o-footer o-footer--" + this.props.theme;
    return (
      <div>
        <footer className={footerClass}  data-o-component="o-footer">
          <div className="o-footer__container">
            <FooterRow/>
            <FooterCopyright/>
          </div>
          <FooterBrand/>
        </footer>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  console.log('kat-footer store view: ', store);
  console.log(JSON.stringify(store));
  return {
    theme: store.KatFooterNs.katFooter.theme
  };
};

export default connect(mapStateToProps)(KatFooterContainer);
