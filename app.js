import { store } from "./store/index.js"

const app = Vue.createApp({
  data(){
    return {
      title: "Todos os seres humanos nascem livres e iguais em dignidade"
    }
  }
});

app.use(store);

app.mount("#app");
