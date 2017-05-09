import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import FooterContactDetails from './index.js';
import thunk from 'redux-thunk';

describe('FooterContactDetails', () => {
  const testData = {
    intro: 'test intro',
    ukPhoneNumber: 'test uk phone number',
    or: ' or ',
    usPhoneNumber: 'test us phone number',
    email: 'test email'
  };

  const footerContactDetails = (state = testData, action={}) => {
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

  it('renders without crashing', () => {
    shallow(<Provider store={store}>
      <FooterContactDetails />
    </Provider>);
  });

  describe('component', () => {
    const wrapper = mount(<Provider store={store}>
      <FooterContactDetails />
    </Provider>);

    const content = <div className="kat-footer__contact-details">
      <p className="kat-footer__contact-details-item">{testData.intro}</p>
      <p className="kat-footer__contact-details-item"><strong>{testData.ukPhoneNumber}</strong>{testData.or}<strong>{testData.usPhoneNumber}</strong></p>
      <p className="kat-footer__contact-details-item"><strong>{testData.email}</strong></p>
      <br></br>
    </div>;

    test('has the right content', () => {
      expect(wrapper.contains(content)).to.equal(true);
    });
  });
});
