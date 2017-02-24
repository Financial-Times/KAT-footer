// import {PropTypes} from 'react';
import config from './../../config';

const defaultState = {
  theme : config.FOOTER_THEME || 'theme-light',
  footerType: config.FOOTER_TYPE || 'short',
  footerPaddingTop: parseInt(config.FOOTER_PADDING_TOP || 10, 10)
};

const katFooter = (state = defaultState, action={}) => {
  return state;
};

export default katFooter;