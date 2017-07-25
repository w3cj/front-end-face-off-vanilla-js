const api = new API();
const app = new App();

app.mount('#app');

const router = new Router(app, '/');
router.addRoute('^/$', 'home');
router.addRoute('^/dogs$', 'dogs');
router.addRoute('^/dogs/(.*)$', 'dog');
