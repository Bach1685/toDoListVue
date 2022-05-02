import { createApp } from "vue";
import createStore from "../store/index";
import "es6-promise/auto";

import App from "./App.vue";

const app = createApp(App);

// const store = createStore({
//     state() {
//       return {
//         count: 1,
//       };
//     },
//   });
app.use(createStore);

app.mount("#app");
