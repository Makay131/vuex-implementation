<template>
  <form>
    <div class="first">
      <label for="name">Full Name</label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="John Smith"
        
      />
    </div>
    <div class="second">
      <label for="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="john.smith@gmail.com"
        
      />
    </div>
  </form>
  <div class="list">
    <div>
      <button @click="score(8)">Score</button>
      <button @click="() => add(4)">Add</button>
    
    <h2>Users: {{numUsers}}</h2>
    <p>{{ scoreMax }}</p>
    
    <div v-for="name in namesArray" :key="name">
      <li style="list-style: none">{{name}}</li>
      <button @click="()=> log(name)">Logout</button>
    </div>
    </div>
    <div>
        <h2>Online: {{onlineUsers}}</h2>
      <div v-for="name in onlineArray" :key="name">
        <li style="list-style: none">{{name}}</li>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      //user: this.$store.state.users[0].name,
      //email: this.$store.state.users[0].email,
      numUsers: this.$store.getters.getNames.length,
      namesArray: this.$store.getters.getNames,
      scoreMax: this.$store.state.users[0].score
    };
  },
  computed: {
    ...mapGetters({
      onlineArray: 'getOnlineUsers',
      onlineUsers: 'numOnlineUsers',
    })
  },
  methods: {
    login(name) {
      this.$store.commit('login', {name});
      
    },
    log(name) {
      this.$store.commit('logout', {name});
    },
    score(amount) {
      this.$store.commit('increment', {amount})
    },
    ...mapActions([
      'incrementAct'
      ]
    ),
    add(payload) {
      this.$store.dispatch('incrementAct', payload);
    },
    
  },
  async mounted() {
      console.log('step 1')
      await this.$store.dispatch('getLanguages', { key: 'a'})
    }
};
</script>

<style scoped>
label {
  font-size: 14px;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 4px 8px;
}

input::placeholder {
  color: #999;
  opacity: 0.7;
}

.first {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 10px;
}

.second {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.list {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
}
</style>
