// import KatFooter from './src';
import KatFooterContainer from './src/containers/kat-footer';
import { KatFooterNs } from './src/reducers';

// const initKatFooter = () => {
//   const theOptions = {
//     "rootEl": "#root",
//     "data": {
//       "KatFooterNs": {
//         "katFooter": {
//           "theme": 'theme-dark',
//           "footerType": 'short',
//           "footerPaddingTop": 10
//         },
//         "legalLinks": {
//           "links": [
//             {
//               "href": "http://help.ft.com/help/legal-privacy/terms-conditions/",
//               "label": "Terms & Conditions"
//             },
//             {
//               "href": "https://help.ft.com/help/legal/slavery-statement/",
//               "label": "Slavery Statement"
//             },
//             {
//               "href": "http://help.ft.com/help/legal-privacy/privacy/",
//               "label": "Privacy"
//             },
//             {
//               "href": "http://help.ft.com/help/legal-privacy/cookies/",
//               "label": "Cookies"
//             },
//             {
//               "href":"http://help.ft.com/help/legal-privacy/copyright/copyright-policy/",
//               "label": "Copyright"
//             },
//             {
//               "href": "http://help.ft.com/help/b2b-support/knowledge-administration-tool/",
//               "label": "Help"
//             }
//           ]
//         },
//         "footerContactDetails": {
//           "intro": "Any questions? Contact Us",
//           "ukPhoneNumber": "+44 (0)20 7873 4001",
//           "phoneDelimiter": " or ",
//           "usPhoneNumber": "+1 877 843 3399",
//           "email": "customersuccess@ft.com"
//         },
//         "footerCopyright": {
//           "abbr": {
//             "title": "Financial Times",
//             "abbr": "F T",
//             "label": " FT ",
//             "text": "and \"Financial Times\" are trademarks of The Financial Times Ltd"
//           },
//           "footer": "The Financial Times and its journalism are subject to a self-regulation regime under the ",
//           "footerLink": {
//             "link": "http://www.ft.com/editorialcode",
//             "text": "FT Editorial Code of Practice"
//           }
//         }
//       }
//     }
//   };
//   KatFooter.init(theOptions);
//   document.removeEventListener('kat.DOMContentLoaded', initKatFooter);
// };

// document.addEventListener('kat.DOMContentLoaded', initKatFooter);

export {KatFooterContainer, KatFooterNs};
// export default KatFooter;
