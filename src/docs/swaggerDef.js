const { version } = require('../../package.json');
// const config = require('../config/config');

const swaggerDef = {
  openapi: '3.0.0',
  info: {
    title: 'GoGo travel',
    version,
    license: {
      name: 'Winner',
      url: '',
    },
  },
  servers: [
    {
      // url: `http://103.170.123.36:${config.port}`,
      url: `http://103.170.123.36:5000`,
    },
  ],
};

module.exports = swaggerDef;
