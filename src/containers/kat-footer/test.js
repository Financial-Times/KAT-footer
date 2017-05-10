import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import KatFooterContainer from './index.js';
import thunk from 'redux-thunk';

describe('KatFooterContainer', () => {
  const testData = {
    katFooter: {
      theme : 'test test',
      footerType: 'test test',
      footerPaddingTop: parseInt(10, 10),
    },
    legalLinks: {
      links: [
        {
          href: 'test test',
          label: 'test test'
        },
        {
          href: 'test test',
          label: 'test test'
        },
        {
          href: 'test test',
          label: 'test test'
        },
        {
          href: 'test test',
          label: 'test test'
        },
        {
          href: 'test test',
          label: 'test test'
        }
      ]
    },
    footerContactDetails: {
        intro: 'test test',
        ukPhoneNumber: 'test test',
        phoneDelimiter: 'test test',
        usPhoneNumber: 'test test',
        email: 'test test'
    },
    footerCopyright: {
        abbr: {
          title: 'test test',
          abbr: 'test test',
          label: 'test test',
          text: 'test test'
        },
        footer: 'test test',
        footerLink: {
          link: 'test test',
          text: 'test test'
        }
    }
  };

  const KatFooterNs = (state = testData, action={}) => {
    return state;
  };

  const KatFooterApp = combineReducers(Object.assign({}, { KatFooterNs }));

  const store = createStore(
    KatFooterApp,
    applyMiddleware(thunk)
  );

  test('renders without crashing', () => {
    shallow(<Provider store={store}>
      <KatFooterContainer />
    </Provider>);
  });

  describe('component', () => {
    const wrapper = mount(<Provider store={store}>
      <KatFooterContainer />
    </Provider>);

    const footerClass = "kat-footer o-footer o-footer--theme-dark"+store.theme;
    const footerType = "type";

    test('has necessary elements', () => {
      expect(wrapper.contains(<div ref="theFooterPadding"></div>)).to.equal(true);
      // expect(wrapper.contains(<footer data-o-component="o-footer" ref="theFooter"></footer>)).to.equal(true);
    });
  });
});

// <div>
//   <div ref="theFooterPadding"></div>
//   <footer className={footerClass} data-o-component="o-footer" ref="theFooter">
//     <div className="kat-footer__contact-wrapper">
//       <div className="o-footer__container">
//         <FooterContactDetails />
//       </div>
//     </div>
//     <div className="o-footer__container">
//       {footerType}
//       <FooterCopyright/>
//     </div>
//     <FooterBrand/>
//   </footer>
// </div>
