<template>
  <form>
    <div class="first">
      <label for="name">Full Name</label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="John Smith"
        v-model="user"
      />
    </div>
    <div class="second">
      <label for="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="john.smith@gmail.com"
        v-model="email"
      />
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      user: this.$store.state.users[0].name,
      email: this.$store.state.users[0].email,
    };
  },
  created() {},
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
</style>
