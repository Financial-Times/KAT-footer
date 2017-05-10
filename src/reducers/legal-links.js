const defaultState = {
  links: [
    {
      href: "http://help.ft.com/help/legal-privacy/terms-conditions/",
      label: "Terms & Conditions"
    },
    {
      href: "http://help.ft.com/help/legal-privacy/privacy/",
      label: "Privacy"
    },
    {
      href: "http://help.ft.com/help/legal-privacy/cookies/",
      label: "Cookies"
    },
    {
      href:"http://help.ft.com/help/legal-privacy/copyright/copyright-policy/",
      label: "Copyright"
    },
    {
      href: window.FOOTER_HELP_LINK || "http://help.ft.com/help/b2b-support/knowledge-administration-tool/",
      label: "Help"
    }
  ]
};

const legalLinks = (state = defaultState, action={} ) => {
  return state;
};

export default legalLinks;
