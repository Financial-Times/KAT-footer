const defaultState = {
  links: [
    {
      'data-trackable': 'terms-and-conditions',
      href: "http://help.ft.com/help/legal-privacy/terms-conditions/",
      label: "Terms & Conditions"
    },
    {
      'data-trackable': 'slavery-statement',
      "href": "https://help.ft.com/help/legal/slavery-statement/",
      "label": "Slavery Statement"
    },
    {
      'data-trackable': 'privacy',
      href: "http://help.ft.com/help/legal-privacy/privacy/",
      label: "Privacy"
    },
    {
      'data-trackable': 'cookies',
      href: "http://help.ft.com/help/legal-privacy/cookies/",
      label: "Cookies"
    },
    {
      'data-trackable': 'copyright',
      href: "http://help.ft.com/help/legal-privacy/copyright/copyright-policy/",
      label: "Copyright"
    },
    {
      'data-trackable': 'help',
      href: window.FOOTER_HELP_LINK || "http://help.ft.com/help/b2b-support/knowledge-administration-tool/",
      label: "Help"
    }
  ]
};

const legalLinks = (state = defaultState, action={} ) => {
  return state;
};

export default legalLinks;
