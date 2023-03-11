import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";
import axios from "./http-common";

const toastOptions = {
  // You can set your default options here
  position: "top-right",
  timeout: 3000,
  hideProgressBar: false,
  icon: true,
  closeButton: false,
  pauseOnHover: true,
  closeOnClick: true,
};

loadFonts();

axios.interceptors.request.use((config) => {
  // console.log(config);
  return config;
});

axios.interceptors.response.use((response) => {
  // console.log(response);
  return response;
});

createApp(App)
  .use(router)
  .use(createPinia())
  .use(vuetify)
  .use(Toast, toastOptions)
  .mount("#app");
