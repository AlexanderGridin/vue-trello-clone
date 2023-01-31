import { createApp } from "vue";
import { createPinia } from "pinia";

import "@/main.css";
import App from "@/App/App.vue";
import router from "@app/router/router";

const app = createApp(App);
app.use(createPinia());
app.use(router);

app.mount("#app");
