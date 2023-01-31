import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "@/App/App.vue";
import router from "./starter/router";

import "@/main.css";

const app = createApp(App);
app.use(createPinia());
app.use(router);

app.mount("#app");
