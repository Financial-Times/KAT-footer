import { combineReducers } from 'redux';

const defaultFooterState = {
	"katFooter": {
		"theme": 'theme-dark',
		"footerType": 'short',
		"footerPaddingTop": 10
	},
	"legalLinks": {
		"links": [
			{
				"data-trackable": "terms-and-conditions",
				"href": "http://help.ft.com/help/legal-privacy/terms-conditions/",
				"label": "Terms & Conditions"
			},
			{
				"data-trackable": "slavery-statement",
				"href": "https://help.ft.com/help/legal/slavery-statement/",
				"label": "Slavery Statement"
			},
			{
				"data-trackable": "privacy",
				"href": "http://help.ft.com/help/legal-privacy/privacy/",
				"label": "Privacy"
			},
			{
				"data-trackable": "cookies",
				"href": "http://help.ft.com/help/legal-privacy/cookies/",
				"label": "Cookies"
			},
			{
				"data-trackable": "copyright",
				"href":"http://help.ft.com/help/legal-privacy/copyright/copyright-policy/",
				"label": "Copyright"
			},
			{
				"data-trackable": "help",
				"href": "http://help.ft.com/help/b2b-support/knowledge-administration-tool/",
				"label": "Help"
			}
		]
	},
	"footerContactDetails": {
		"intro": "Any questions? Contact Us",
		"ukPhoneNumber": "+44 (0)20 7873 4001",
		"phoneDelimiter": " or ",
		"usPhoneNumber": "+1 877 843 3399",
		"email": "customersuccess@ft.com"
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
			"link": "http://www.ft.com/editorialcode",
			"text": "FT Editorial Code of Practice"
		}
	}
};

function KatFooterNs(state = {}) {
	return Object.assign({}, defaultFooterState, state);
};

// create a namespace for this app store
const KatFooterApp = combineReducers(Object.assign({}, {KatFooterNs}));

export { KatFooterNs };
export default KatFooterApp;
