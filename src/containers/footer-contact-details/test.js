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
    phoneDelimiter: ' or ',
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

    const content = <div className="kat-footer__contact-container">
      <div className="kat-footer__contact-item">{testData.intro}</div>
      <div className="kat-footer__contact-item">
        <a href={`tel: ${testData.ukPhoneNumber}`}>{testData.ukPhoneNumber}</a>
        <span>{testData.phoneDelimiter}</span>
        <a href={`tel: ${testData.usPhoneNumber}`}>{testData.usPhoneNumber}</a>
      </div>
      <div className="kat-footer__contact-item">
        <a href={`mailto: ${testData.email}`}>{testData.email}</a>
      </div>
      <br></br>
    </div>;

    test('has the right content', () => {
      expect(wrapper.contains(content)).to.equal(true);
    });
  });
});
