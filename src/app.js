const OSRM = require('osrm');
const Koa = require('koa');
const router = require('./router');

const createApp = (config) => {
  const app = new Koa();

  app.context.osrm = new OSRM({
    path: config.osrmPath,
    algorithm: config.algorithm,
    shared_memory: config.sharedMemory
  });

  app.use(router.routes()).use(router.allowedMethods());

  return app.callback();
};

module.exports = createApp;
