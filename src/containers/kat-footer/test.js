/* eslint-env jest */

import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { mount, shallow } from 'enzyme';
import thunk from 'redux-thunk';


import KatFooterContainer from './index.js';

import LegalLinks from './../../components/legal-links';
import FooterCopyright from './../footer-copyright';
import FooterContactDetails from './../footer-contact-details';
import FooterBrand from './../../components/footer-brand';

describe('KatFooterContainer', () => {
  const testData = {
    katFooter: {
      theme : 'test',
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

  const KatFooterNs = (state = testData) => {
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

  test('matches snapshot', () => {
    const wrapper = shallow(<Provider store={store}>
      <KatFooterContainer />
    </Provider>);
    expect(wrapper.debug()).toMatchSnapshot();
  });

  describe('component', () => {
    const wrapper = mount(<Provider store={store}>
      <KatFooterContainer />
    </Provider>);

    const content =
    <div>
      <div ref='theFooterPadding'></div>
      <footer className='kat-footer o-footer o-footer--test' data-o-component='o-footer' ref='theFooter'>
        <div className='kat-footer__contact-wrapper'>
          <div className='o-footer__container'>
            <FooterContactDetails />
          </div>
        </div>
        <div className='o-footer__container'>
          <LegalLinks linksData={testData.legalLinks.links} />
          <FooterCopyright />
        </div>
        <FooterBrand />
      </footer>
    </div>;

    test('has content', () => {
      expect(wrapper.contains(content)).toEqual(true);
    });
  });
});
