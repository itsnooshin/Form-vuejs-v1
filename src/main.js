import { createApp } from "vue";
import "./style/style.css";
import "./style/font.css";
import App from "./App.vue";
import router from "./router";
import "leaflet/dist/leaflet.css";

const app = createApp(App);
app.use(router);

app.mount("#app");
