import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import FooterContactDetails from './index.js';
import thunk from 'redux-thunk'

describe('FooterContactDetails', () => {
  it ('test', () => {
    expect(true).to.equal(true);
  });

  const footerContactDetails = {
    intro: 'test intro',
    ukPhoneNumber: 'test uk phone number',
    or: ' or ',
    usPhoneNumber: 'test us phone number',
    email: 'test email'
  };

  const testReducer = (state = footerContactDetails, action={}) => {
    return state;
  };

  // console.log(testReducer);

  const reducers = {
    testReducer
  };

  const KatFooterNs = combineReducers(reducers);

  // console.log(KatFooterNs);

  const KatFooterApp = combineReducers(Object.assign({}, { KatFooterNs }));

  // console.log(KatFooterApp);

  const store = createStore(
    // KatFooterApp,
    KatFooterNs,
    applyMiddleware(thunk)
  );

  console.log(store.getState());

  // console.log(store.getState());

  it('renders without crashing', () => {
    shallow(<Provider store={store}>
      <FooterContactDetails />
    </Provider>);
  });

  // console.log(wrapper);

  describe('component', () => {
    const wrapper = shallow(<Provider store={store}>
      <FooterContactDetails />
    </Provider>);

    test('has the right content', () => {
      // [TBD]
    });
  });
});
