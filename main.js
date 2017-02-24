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
              "href": "http://help.ft.com/help/legal-privacy/terms-conditions/",
              "label": "Terms & Conditions"
            },
            {
              "href": "http://help.ft.com/help/legal-privacy/privacy/",
              "label": "Privacy"
            },
            {
              "href": "http://help.ft.com/help/legal-privacy/cookies/",
              "label": "Cookies"
            },
            {
              "href":"http://help.ft.com/help/legal-privacy/copyright/copyright-policy/",
              "label": "Copyright"
            },
            {
              "href": "http://help.ft.com/",
              "label": "Help"
            }
          ]
        },
        "footerCopyright": {
          "header": "Markets data delayed by at least 15 minutes. © THE FINANCIAL TIMES LTD 2017.",
          "abbr": {
            "title": "Financial Times",
            "abbr": "F T",
            "label": " FT ",
            "text": "and \"Financial Times\" are trademarks of The Financial Times Ltd"
          },
          "footer": "The Financial Times and its journalism are subject to a self-regulation regime under the ",
          "footerLink": {
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
