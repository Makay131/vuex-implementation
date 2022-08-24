import { createStore } from "vuex";
import languages from './modules/languages'

const store = createStore({
  state: {
    users: [
      { name: "Mahmut Akay", email: "mahmut@gmail.com", active: true, score: 0, },
      { name: "Emrullah Tastan", email: "emrullah@gmail.com", active: false, score: 0 },
      { name: "John Smith", email: "john@gmail.com", active: true, score: 0 },
      { name: "Mary Boore", email: "mary@gmail.com", active: true, score: 0 },
    ],
  },
  getters: {
    getNames(state) {
      const names = state.users.map(u=> u.name);
      return names;
    },
    getOnlineUsers(state) {
      const online = state.users.filter(u=> u.active).map(u=> u.name.split(' ')[0]);
      return online;
    },
    numOnlineUsers(state, getters) {
      return getters.getOnlineUsers.length;
    },
    showData(){
      console.log(languages);
    }
  },
  mutations: {
    login(state, payload) {
      const index= state.users.findIndex(u=> u.name === payload.name);
      state.users[index].active= true;
    },
    logout(state, payload) {
      const index= state.users.findIndex(u=> u.name === payload.name);
      state.users[index].active= false;
    },
    increment(state, payload) {
      state.users.forEach(u=> u.score += payload.amount)
    },
    add(state, payload) {
      state.users.map(u => u.score += payload)
    }
  },
  actions: {
    incrementAct(context, payload){
      setTimeout(() => {
        context.commit('add', payload);
      }, 2000);
      
    }
  },
  modules: { languages },
});

export default store;
