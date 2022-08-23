import { createStore } from "vuex";

const store = createStore({
  state: {
    users: [
      { name: "Mahmut Akay", email: "mahmut@gmail.com", active: true },
      { name: "Emrullah Tastan", email: "emrullah@gmail.com", active: false },
      { name: "John Smith", email: "john@gmail.com", active: true },
    ],
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});

export default store;
