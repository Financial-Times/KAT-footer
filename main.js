import KatFooter from './src';
import KatFooterContainer from './src/containers/kat-footer';
import { KatFooterNs } from './src/reducers';

const initKatFooter = () => {
  const theOptions = {
    "rootEl": "#root",
    "data": {
      "KatFooterNs": {
        "legalLinks": {
          "links": [
            {
              'data-trackable': 'terms-and-conditions',
              "href": "http://help.ft.com/help/legal-privacy/terms-conditions/",
              "label": "Terms & Conditions"
            },
            {
              'data-trackable': 'slavery-statement',
              "href": "https://help.ft.com/help/legal/slavery-statement/",
              "label": "Slavery Statement"
            },
            {
              'data-trackable': 'privacy',
              "href": "http://help.ft.com/help/legal-privacy/privacy/",
              "label": "Privacy"
            },
            {
              'data-trackable': 'cookies',
              "href": "http://help.ft.com/help/legal-privacy/cookies/",
              "label": "Cookies"
            },
            {
              'data-trackable': 'copyright',
              "href":"http://help.ft.com/help/legal-privacy/copyright/copyright-policy/",
              "label": "Copyright"
            },
            {
              'data-trackable': 'help',
              "href": "http://help.ft.com/help/b2b-support/knowledge-administration-tool/",
              "label": "Help"
            }
          ]
        },
        "footerCopyright": {
          "abbr": {
            "title": "Financial Times",
            "abbr": "F T",
            "label": " FT ",
            "text": "and \"Financial Times\" are trademarks of The Financial Times Ltd"
          },
          "footer": "The Financial Times and its journalism are subject to a self-regulation regime under the ",
          "footerLink": {
            'data-trackable': 'editorial-cop',
            "link": "http://www.ft.com/editorialcode",
            "text": "FT Editorial Code of Practice"
          }
        },
        "helpers": {}
      }
    }
  };
  KatFooter.init(theOptions);
  document.removeEventListener('kat.DOMContentLoaded', initKatFooter);
};

document.addEventListener('kat.DOMContentLoaded', initKatFooter);

export {KatFooterContainer, KatFooterNs};
export default KatFooter;
