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

  it('renders without crashing', () => {
    shallow(<Provider store={store}>
      <KatFooterContainer />
    </Provider>);
  });

  describe('component', () => {
    const wrapper = mount(<Provider store={store}>
      <KatFooterContainer />
    </Provider>);
  });
});
