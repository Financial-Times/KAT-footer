import {PropTypes} from 'react';

const defaultState = {
  label: 'More from the FT Group',
  href: 'http://ft.com/more-from-ft-group'
};

const externalLink = (state = defaultState, action = {}) => {
  return state;
};

export default externalLink;