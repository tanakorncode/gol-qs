import { createApp, ref } from "vue"

import App from "./App.vue"
import Hello from "./components/Hello.vue"

// import { createBootstrap } from "bootstrap-vue-next"

const app = createApp(App)
// app.use(createBootstrap({ components: true, directives: true }))
app.component("Hello", Hello)
app.mount("#app")
