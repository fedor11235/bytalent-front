import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import VueMapboxTs from "vue-mapbox-ts";
import PrimeVue from "primevue/config";
import "primevue/resources/themes/lara-light-indigo/theme.css";

import "./styles/main.scss";

const pinia = createPinia();

createApp(App)
  .use(router)
  .use(pinia)
  .use(PrimeVue)
  .use(VueMapboxTs)
  .mount("#app");
