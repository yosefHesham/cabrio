import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import "v-calendar/style.css";
import { setupCalendar } from "v-calendar";

const app = createApp(App);
app.use(setupCalendar, {});

app.mount("#app");
