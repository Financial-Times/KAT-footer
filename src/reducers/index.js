import { combineReducers } from 'redux';

const mainReducers = {
	reducer: (state = {}) => state
};

// combine the app reducers
const KatFooterNs = combineReducers(mainReducers);

// create a namespace for this app store
const KatFooterApp = combineReducers(Object.assign({}, {KatFooterNs}));

export { KatFooterNs };
export default KatFooterApp;
