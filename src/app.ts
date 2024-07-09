import { createApp, ref } from "vue"

import App from "./App.vue"
import Hello from "./components/Hello.vue"

declare global {
  interface Window {
    initGloQuestion: () => void;
  }
}

// import { createBootstrap } from "bootstrap-vue-next"

function init() {
  const app = createApp(App)
  // app.use(createBootstrap({ components: true, directives: true }))
  app.component("Hello", Hello)
  app.mount("#app")
}

window.initGloQuestion = init;

function webLoad() {
  console.log("webLoad");
  window.initGloQuestion()
}

document.addEventListener("DOMContentLoaded", webLoad, true);