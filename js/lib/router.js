class Router {
  constructor(app, defaultUrl) {
    this.app = app;
    this.defaultUrl = defaultUrl;
    this.routes = [];

    const doHashChange = () => {
      this.hashChange();
    };

    window.addEventListener('hashchange', doHashChange);
    document.addEventListener('DOMContentLoaded', doHashChange);
  }
  addRoute(url, name) {
    this.routes.push({
      url,
      name
    });
  }
  hashChange() {
    let url = window.location.hash.substring(1);
    if(!url) {
      url = this.defaultUrl;
      window.location.hash = '#' + url;
    }

    const routes = this.routes.filter(route => url.match(new RegExp(route.url, 'gi')));
    if(routes.length > 0) {
      const route = routes[0];
      this.params = new RegExp(route.url, 'gi').exec(url).slice(1);
      app.showComponent(route.name);
    } else {
      app.showComponent();
    }
  }
}
