import KatFooter from './src';
import KatFooterContainer from './src/containers/kat-footer';
import { KatFooterNs } from './src/reducers';

const initKatFooter = () => { 

  // console.log(KatFooterNs);
  // const theOptions = {
  //   rootEl: "#root",
  //   data: {
  //     KatFooterNs: {
  //       headerTitle: {// custom header title
  //         label: "Knowledge & Administration Tools",
  //         summary: ""
  //       },
  //       mainMenu: {
  //         items: [
  //           {
  //             label: "myFT",
  //             href: "#",
  //             active: true
  //           }, {
  //             label: "USERS",
  //             href: "#"
  //           }
  //           // {
  //           //   label: "Feedback",
  //           //   href: "#",
  //           //   cls: "kat-feedback__btn",
  //           //   last: true
  //           // }
  //         ],
  //         enableMobile: true
  //       },
  //       helpers: {
  //         doRequest: (theUrl, options) => { return new Promise((res) => { return res(theUrl); }); }
  //       }
  //     }
  //   }
  // };
const theOptions = {
  "rootEl": "#root",
  "KatFooterNs": {
    
    "katFooter" : {
      "theme": "theme-light",
    },
    "externalLink": {
      "label": "More from the FT Group",
      "href": "http://ft.com/more-from-ft-group"
    },
    "matrix": {
      "matrix": [
        {
          "title": "Legal & Privacy",
          "items": [
            {
              "text": "Terms & Conditions",
              "href": "//www.ft.com/servicestools/help/terms"
            },
            {
              "text": "Privacy",
              "href": "//www.ft.com/servicestools/help/privacy"
            },
            {
              "text": "Cookies",
              "href": "//www.ft.com/cookiepolicy"
            },
            {
              "text": "Copyright",
              "href": "//www.ft.com/servicestools/help/copyright"
            }
          ]
        },
        {
          "title": "Services",
          "items": [
            {
              "text": "Republishing",
              "href": "//enterprise.ft.com/en-gb/services/republishing/"
            },
            {
              "text": "Contracts & Tenders",
              "href": "//www.businessesforsale.com/ft2/notices"
            }
          ]
        }
      ]
    },
    "footerCopyright": {
      "header": "Markets data delayed by at least 15 minutes. © THE FINANCIAL TIMES LTD 2017.",
      "abbr": {
        "title": "Financial Times",
        "abbr": "F T",
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

  KatFooter.init(theOptions);
  document.removeEventListener('kat.DOMContentLoaded', initKatFooter);
};



document.addEventListener('kat.DOMContentLoaded', initKatFooter);

export {KatFooterContainer, KatFooterNs};
export default KatFooter;
