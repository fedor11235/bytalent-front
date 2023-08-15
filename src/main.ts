import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";

import "./styles/main.scss";

const pinia = createPinia();

console.log(process.env.NODE_ENV === 'development')

createApp(App).use(router).use(pinia).mount("#app");
