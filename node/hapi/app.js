const Hapi = require('hapi');
const routesHelloHapi = require('./routes/hello-hapi');
const routeShop = require('./routes/shops');
const routesOrders = require('./routes/orders');
const server = new Hapi.Server();
const pluginHapiSwagger = require('./plugins/hapi-swagger');
const config = require('./config');
// 配置服务器启动 host 与端口
server.connection({
  port: config.port,
  host: config.host,
});

const init = async () => {
  await server.register([
    ...pluginHapiSwagger
  ])
  server.route([
    // 创建一个简单的 hello hapi 接口
    ...routesHelloHapi,
    ...routeShop,
    ...routesOrders
  ]);
  // 启动服务
  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

init();
