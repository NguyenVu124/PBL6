const { version } = require('../../package.json');
const config = require('../config/config');

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
      url: `localhost:${config.port}`,
    },
  ],
};

module.exports = swaggerDef;
