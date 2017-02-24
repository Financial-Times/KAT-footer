const fs = require('fs');

require('dotenv').config({silent: true});

const config = {
  "NODE_ENV": process.env.NODE_ENV || "development",
  "BASE_PATH_URL": process.env.BASE_PATH_URL || "",
  "API_PATH_URL": process.env.API_PATH_URL || "",
  "FOOTER_THEME": process.env.FOOTER_THEME || 'theme-light',
  "FOOTER_TYPE": process.env.FOOTER_TYPE || 'short',
  "FOOTER_PADDING_TOP" : process.env.FOOTER_PADDING_TOP || 0,
  "FOOTER_HELP_LINK" : process.env.FOOTER_HELP_LINK || "http://help.ft.com/"
};

fs.writeFileSync('config.js', `module.exports=${JSON.stringify(config)};`);
