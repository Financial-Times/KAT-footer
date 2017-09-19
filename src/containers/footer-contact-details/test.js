/* eslint-env jest */

import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { mount, shallow } from 'enzyme';
import FooterContactDetails from './index.js';
import thunk from 'redux-thunk';

describe('FooterContactDetails', () => {
  const testData = {
    intro: 'test intro',
    ukPhoneNumber: 'test uk phone number',
    phoneDelimiter: ' or ',
    usPhoneNumber: 'test us phone number',
    email: 'test email'
  };

  const footerContactDetails = (state = testData) => {
    return state;
  };

  const reducers = {
    footerContactDetails
  };

  const KatFooterNs = combineReducers(reducers);

  const KatFooterApp = combineReducers(Object.assign({}, { KatFooterNs }));

  const store = createStore(
    KatFooterApp,
    applyMiddleware(thunk)
  );

  test('renders without crashing', () => {
    shallow(<Provider store={store}>
      <FooterContactDetails />
    </Provider>);
  });


  test('matches snapshot', () => {
    const wrapper = shallow(<Provider store={store}>
      <FooterContactDetails />
    </Provider>);
    expect(wrapper.debug()).toMatchSnapshot();
  });

  describe('component', () => {
    const wrapper = mount(<Provider store={store}>
      <FooterContactDetails />
    </Provider>);

    const content = <div className="kat-footer__contact-container">
      <div className="kat-footer__contact-item">{testData.intro}</div>
      <div className="kat-footer__contact-item">
        <a data-trackable="contact-phone-uk" href={`tel: ${testData.ukPhoneNumber}`}>{testData.ukPhoneNumber}</a>
        <span>{testData.phoneDelimiter}</span>
        <a data-trackable="contact-phone-us" href={`tel: ${testData.usPhoneNumber}`}>{testData.usPhoneNumber}</a>
      </div>
      <div className="kat-footer__contact-item">
        <a data-trackable="contact-email" href={`mailto: ${testData.email}`}>{testData.email}</a>
      </div>
    </div>;

    test('has the right content', () => {
      expect(wrapper.contains(content)).toEqual(true);
    });
  });
});
