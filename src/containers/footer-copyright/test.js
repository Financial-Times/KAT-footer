import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { mount, shallow } from 'enzyme';
import FooterCopyright from './index.js';
import thunk from 'redux-thunk';

describe('FooterCopyright', () => {
  const testData = {
    abbr: {
      title: "test test",
      abbr: "F T",
      label: " FT ",
      text: 'test test'
    },
    footer: 'test test',
    footerLink: {
      link: 'test test',
      text: 'test test'
    }
  };

  const footerCopyright = (state = testData, action={}) => {
    return state;
  };

  const reducers = {
    footerCopyright
  };

  const KatFooterNs = combineReducers(reducers);

  const KatFooterApp = combineReducers(Object.assign({}, { KatFooterNs }));

  const store = createStore(
    KatFooterApp,
    applyMiddleware(thunk)
  );

  test('renders without crashing', () => {
    shallow(<Provider store={store}>
      <FooterCopyright />
    </Provider>);
  });

  test('matches snapshot', () => {
    const wrapper = shallow(<Provider store={store}>
      <FooterCopyright />
    </Provider>);
    expect(wrapper.debug()).toMatchSnapshot();
  });

  describe('component', () => {
    const wrapper = mount(<Provider store={store}>
      <FooterCopyright />
    </Provider>);

    const content = <div className="o-footer__copyright kat-footer__copyright" role="contentinfo">
      <small>
        <abbr title={testData.abbr.title} aria-label={testData.abbr.abbr}> {testData.abbr.label} </abbr> {testData.abbr.text}. {testData.footer} <a href={testData.footerLink.link} aria-label="F T Editorial Code of Practice">{testData.footerLink.text}</a>
      </small>
    </div>;

    test('has the right content', () => {
      expect(wrapper.contains(content)).toEqual(true);
    });
  });
});
