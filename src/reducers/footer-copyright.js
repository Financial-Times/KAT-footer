// import {PropTypes} from 'react';

const defaultState = {
      abbr: {
        title: "Financial Times",
        abbr: "F T",
        label: " FT ",
        text: 'and "Financial Times" are trademarks of The Financial Times Ltd'
      },
      footer: 'The Financial Times and its journalism are subject to a self-regulation regime under the ',
      footerLink: {
        link: 'http://www.ft.com/editorialcode',
        text: 'FT Editorial Code of Practice'
      }
};

const footerCopyright = (state = defaultState, action={}) => {
  return state;
};

export default footerCopyright;
