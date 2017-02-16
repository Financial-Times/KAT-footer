import { combineReducers } from 'redux';
import helpers from './helpers';
import externalLink from './external-link';
import matrix from './matrix';
import footerCopyright from './footer-copyright';
import katFooter from './kat-footer';

const mainReducers = {
  externalLink,
  matrix,
  footerCopyright,
  katFooter,
  helpers
};

// combine the app reducers
const KatFooterNs = combineReducers(mainReducers);

// create a namespace for this app store
const KatFooterApp = combineReducers(Object.assign({}, {KatFooterNs}));

export { KatFooterNs };
export default KatFooterApp;
