import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { mount, shallow } from 'enzyme';
import thunk from 'redux-thunk';

import FooterRow from './index.js';
import FooterMatrix from './../../components/footer-matrix';
// import ExternalLink from './../../components/external-link';

describe('FooterRow', () => {
  const matrixTestData = {
    matrix: [
      {
        "title": "Support",
        "items": [
          { "text": "Help", "href": "//www.ft.com/help" },
          { "text": "About Us", "href": "//www.ft.com/aboutus" }
        ]
      },
      {
        "title": "Legal & Privacy",
        "items": [
          { "text": "Terms & Conditions", "href": "//www.ft.com/servicestools/help/terms" },
          { "text": "Privacy", "href": "//www.ft.com/servicestools/help/privacy" },
          { "text": "Cookies", "href": "//www.ft.com/cookiepolicy" },
          { "text": "Copyright", "href": "//www.ft.com/servicestools/help/copyright" }
        ]
      },
      {
        "title": "Services",
        "items": [
          { "text": "Individual Subscriptions", "href": "//sub.ft.com/spa_5" },
          { "text": "Group Subscriptions", "href": "//enterprise.ft.com/en-gb/services/group-subscriptions/" },
          { "text": "Republishing", "href": "//enterprise.ft.com/en-gb/services/republishing/" },
          { "text": "Contracts & Tenders", "href": "//www.businessesforsale.com/ft2/notices" },
          { "text": "Analysts Research", "href": "//commerce.uk.reuters.com/purchase/mostPopular.do?rpc&#x3D;471" },
          { "text": "Executive Job Search", "href": "//www.exec-appointments.com/" },
          { "text": "Advertise with the FT", "href": "//fttoolkit.co.uk/d/", "aria-label": "Advertise with the F T" },
          { "text": "Follow the FT on Twitter", "href": "//twitter.com/ft", "aria-label": "Follow the F T on Twitter" }
        ]
      },
      {
        "title": "Tools",
        "items": [
          { "text": "Portfolio", "href": "//markets.ft.com/data/portfolio/dashboard" },
          { "text": "Today's Paper", "href": "//ftepaper.ft.com" },
          { "text": "Alerts Hub", "href": "//markets.ft.com/data/alerts/" },
          { "text": "Lexicon", "href": "//lexicon.ft.com/" },
          { "text": "MBA Rankings", "href": "//rankings.ft.com/businessschoolrankings/global-mba-ranking-2016" },
          { "text": "Economic Calendar", "href": "//markets.ft.com/Research/Economic-Calendar" },
          { "text": "Newsletters", "href": "//nbe.ft.com/nbe/profile.cfm" },
          { "text": "Currency Converter", "href": "//markets.ft.com/research/Markets/Currencies?segid&#x3D;70113" },
          { "text": "Ebooks", "href": "//www.ft.com/ebooks", "aria-label": "E-books" }
        ]
      }
    ]
  };

  const matrix = (state = matrixTestData, action={}) => {
    return state;
  };

  const externalLinkTestData = {
    externalLink: {
      label: 'Test Test',
      href: 'testtest'
    }
  };

  const externalLink = (state = externalLinkTestData, action={}) => {
    return state;
  };

  const reducers = {
    matrix,
    externalLink
  };

  const KatFooterNs = combineReducers(reducers);

  const KatFooterApp = combineReducers(Object.assign({}, { KatFooterNs }));

  const store = createStore(
    KatFooterApp,
    applyMiddleware(thunk)
  );

  test('renders without crashing', () => {
    shallow(<Provider store={store}>
      <FooterRow />
    </Provider>);
  });

  test('matches snapshot', () => {
    const wrapper = shallow(<Provider store={store}>
      <FooterRow />
    </Provider>);
    expect(wrapper.debug()).toMatchSnapshot();
  });

  describe('component has the right content', () => {
    const wrapper = mount(<Provider store={store}>
      <FooterRow />
    </Provider>);

    test('FooterMatrix container', () => {
      const content = <FooterMatrix matrix={store.getState().KatFooterNs.matrix.matrix} />;
      expect(wrapper.contains(content)).toEqual(true);
    });

    test('ExternalLink container', () => {
      // TBD
    });

    test('div of o-footer__row class', () => {
      expect(wrapper.find('.o-footer__row').length).toEqual(1);
    });
  });
});
