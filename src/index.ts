import App from './main';
import { ComponentManager, setPropertyDidChange } from '@glimmer/component';

const app = new App();
const containerElement = document.getElementById('app');

setPropertyDidChange(() => {
  app.scheduleRerender();
});

app.registerInitializer({
  initialize(registry) {
    registry.register(`environment:/${app.rootName}/main/main`, Environment);
    registry.register(`component-manager:/${app.rootName}/component-managers/main`, ComponentManager);
  },
});

app.renderComponent('my-app', containerElement, null);

class Environment {
  static create() {
    debugger;
  }
}

app.boot();
