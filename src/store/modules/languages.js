const module = {
    state: { 
        languages: [],
    },
    getters: { },
    mutations: { 
        setLanguage(state, payload) {
            state.languages = payload;
        }
     },
    actions: { 
       async getLanguages(context, payload) {
        let res = await fetch('https://restcountries.com/v3.1/all');
        let data= await res.json();
        context.commit('setLanguage', data)
       } 
     },
  }

  export default module;