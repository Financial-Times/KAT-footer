# kat-footer [![Circle CI](https://circleci.com/gh/Financial-Times/kat-footer.svg?style=svg)](https://circleci.com/gh/Financial-Times/kat-footer)

Footer component for KMT app


## Building this project
`npm start` should run a gulp based build before serving up the an example of the page.
However if you see an error like:
`Error: Node Sass does not yet support your current environment: OS X 64-bit with Unsupported runtime`
You will probably need to run `npm rebuild node-sass` to overcome this. You should probably update `origami-build-tools` at the same time.

###Installation:
```
bower install --S kat-footer
```
=======

###Usage:
#####Load the CSS:
```scss
@import '../bower_components/kat-footer/main';
```

#####Load the JS:
* **Inside** React Redux app:
```js
// first add the footer reducers to the parent app reducers
import { KatFooterNs } from "kat-footer/main";
//...
combineReducers(Object.assign({}, parentAppReducers, { KatFooterNs }));
```
```js
// then include and use in a component/container
import { KatFooterContainer } from "kat-footer/main";
//...
<KatFooterContainer />
```

* **Outside** React Redux app (normal standalone use):
```js
// include and use in a component/container
import KatFooter from "kat-footer/main";
//...
KatFooter.init(options);
```
=======

###Options:
* React Redux store data (both for when **Inside** and **Outside** React Redux app):
```js
defaultOptions = {
  "rootEl": "#root",
  {
    "KatFooterNs": {
      "externalLink": {
        "label": "More from the FT Group",
        "href": "http://ft.com/more-from-ft-group"
      },
      "matrix": {
        "matrix": [
          {
            "title": "Support",
            "items": [
              {
                "text": "Help",
                "href": "//www.ft.com/help"
              },
              {
                "text": "About Us",
                "href": "//www.ft.com/aboutus"
              }
            ]
          },
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
                "text": "Individual Subscriptions",
                "href": "//sub.ft.com/spa_5"
              },
              {
                "text": "Group Subscriptions",
                "href": "//enterprise.ft.com/en-gb/services/group-subscriptions/"
              },
              {
                "text": "Republishing",
                "href": "//enterprise.ft.com/en-gb/services/republishing/"
              },
              {
                "text": "Contracts & Tenders",
                "href": "//www.businessesforsale.com/ft2/notices"
              },
              {
                "text": "Analysts Research",
                "href": "//commerce.uk.reuters.com/purchase/mostPopular.do?rpc&#x3D;471"
              },
              {
                "text": "Executive Job Search",
                "href": "//www.exec-appointments.com/"
              },
              {
                "text": "Advertise with the FT",
                "href": "//fttoolkit.co.uk/d/",
                "aria-label": "Advertise with the F T"
              },
              {
                "text": "Follow the FT on Twitter",
                "href": "//twitter.com/ft",
                "aria-label": "Follow the F T on Twitter"
              }
            ]
          },
          {
            "title": "Tools",
            "items": [
              {
                "text": "Portfolio",
                "href": "//markets.ft.com/data/portfolio/dashboard"
              },
              {
                "text": "Today's Paper",
                "href": "//ftepaper.ft.com"
              },
              {
                "text": "Alerts Hub",
                "href": "//markets.ft.com/data/alerts/"
              },
              {
                "text": "Lexicon",
                "href": "//lexicon.ft.com/"
              },
              {
                "text": "MBA Rankings",
                "href": "//rankings.ft.com/businessschoolrankings/global-mba-ranking-2016"
              },
              {
                "text": "Economic Calendar",
                "href": "//markets.ft.com/Research/Economic-Calendar"
              },
              {
                "text": "Newsletters",
                "href": "//nbe.ft.com/nbe/profile.cfm"
              },
              {
                "text": "Currency Converter",
                "href": "//markets.ft.com/research/Markets/Currencies?segid&#x3D;70113"
              },
              {
                "text": "Ebooks",
                "href": "//www.ft.com/ebooks",
                "aria-label": "E-books"
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
      "katFooter": {
        "theme": "theme-dark"
      },
      "helpers": {}
    }
  }
}
```

* Normal standalone use:
```js
rootEl: "#root" // {String|DOM element} - optional - Query string or DOM element inside which the KMT Header will be placed.
```

```js
// Example
const options = {
  rootEl: "#root",
  data: {
    KmtHeaderNs: {
      headerTitle: {
        label: "KMT",
        summary: "KNOWLEDGE MANAGER TOOLS"
      }
    }
  }
};

KmtHeader.init(options);
```
