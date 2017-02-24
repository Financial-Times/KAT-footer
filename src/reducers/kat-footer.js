// import {PropTypes} from 'react';
import config from './../../config';

const defaultState = {
  theme : config.FOOTER_THEME,
  footerType: config.FOOTER_TYPE,
  footerPaddingTop: parseInt(config.FOOTER_PADDING_TOP, 10)
};

const katFooter = (state = defaultState, action={}) => {
  return state;
};

export default katFooter;