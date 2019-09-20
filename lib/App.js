class App {
  constructor(selector) {
    this.appElement = document.querySelector(selector);
    this.components = {};
  }
  addComponent(component) {
    this.components[component.name] = component;
    component.model = this.proxify(component.model);
  }
  showComponent(name) {
    this.currentComponent = this.components[name];
    this.updateView();
    if (this.currentComponent) {
      this.currentComponent.controller(this.currentComponent.model);
    }
  }
  updateView() {
    if (this.currentComponent) {
      this.appElement.innerHTML = this.currentComponent.view(this.currentComponent.model);
    }
  }
  proxify(model) {
    return new Proxy(model, {
      set: (target, property, value) => {
        console.log('Changing', property, 'from', target[property], 'to', value);
        target[property] = value;
        this.updateView();
        return true;
      }
    });
  }
}

export default App;