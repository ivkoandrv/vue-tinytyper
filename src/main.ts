import { App } from "vue";
import * as components from "./components";

function install(app: App) {
  for (const key in components) {
    if (components.hasOwnProperty(key)) {
      app.component(key, (components as any)[key]);
    }
  }
}

import "./assets/styles/index.scss";

export default { install };

export * from "./components";
/*
can export everything you register
 */
