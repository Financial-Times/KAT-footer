import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import KatFooterContainer from './containers/kat-footer';

class KatFooter {
  constructor (options = {}) {
    if (!options.rootEl) {
      options.rootEl = document.body;
    } else if (typeof options.rootEl === 'string') {
      options.rootEl = document.querySelector(options.rootEl);
    }

    if (options.rootEl.hasAttribute('data-kat-footer--js')) {
      return;
    }

    this.rootEl = options.rootEl;
    this.rootEl.removeAttribute('data-kat-footer--no-js');
    this.rootEl.setAttribute('data-kat-footer--js', '');

    const store = configureStore(options.data);

    // const footerProps = {
    //   theme: options.data.KatFooterNs.katFooter.theme,
    //   legalLinks: options.data.KatFooterNs.legalLinks.links,
    //   footerType: options.data.KatFooterNs.katFooter.footerType,
    //   footerPaddingTop: options.data.KatFooterNs.katFooter.footerPaddingTop,
    //   footerContactDetails: options.data.KatFooterNs.footerContactDetails,
    //   footerCopyright: options.data.KatFooterNs.footerCopyright
    // };

    ReactDOM.render(
      <Provider store={store}>
        <KatFooterContainer />
      </Provider>,
      this.rootEl);
  };

  static init (options = {}) {
    if (!options.rootEl) {
      options.rootEl = document.body;
    } else if (typeof options.rootEl === 'string') {
      options.rootEl = document.querySelector(options.rootEl);
    }

    if (!options.rootEl.hasAttribute('data-kat-footer--js')) {
      return new KatFooter(options);
    }
  }
};

export default KatFooter;
