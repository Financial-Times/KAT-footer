const defaultState = {
  theme : window.FOOTER_THEME || 'theme-light',
  footerType: window.FOOTER_TYPE || 'short',
  footerPaddingTop: parseInt(window.FOOTER_PADDING_TOP || 10, 10)
};

const katFooter = (state = defaultState, action={}) => {
  return state;
};

export default katFooter;
