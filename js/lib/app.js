class App {
  constructor() {
    this.components = {};
    this.states = {};
    this.currentComponent = null;
  }
  mount(selector) {
    this.appElement = document.querySelector(selector);
    this.updateView();
  }
  addComponent(component) {
    this.components[component.name] = component;

    if(component.model) {
      component.model = this.proxify(component.model);
    }

    component.view = component.view.bind(component.model);

    if(component.controller) {
      component.controller = component.controller.bind(component.model);
    }
  }
  updateView() {
    this.appElement.innerHTML = this.getView();
  }
  getView() {
    if(this.currentComponent) {
      return this.currentComponent.view();
    } else {
      return '<h2>Not Found</h2>'
    }
  }
  showComponent(componentName) {
    this.currentComponent = this.components[componentName];
    this.updateView();
    if(this.currentComponent && this.currentComponent.controller) {
      this.currentComponent.controller();
    }
  }
  proxify(model) {
    const app = this;
    return new Proxy(model, {
      set(target, property, value, receiver) {
        target[property] = value;
        app.updateView();
        return true;
      }
    });
  }
}
