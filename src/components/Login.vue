<template>
  <div>
    <h1>Login form</h1>
    <div>
      <span class="formLabel">Username</span>
      <input type="text" name="username" v-model="username"/>
    </div>
    <div>
      <span class="formLabel">Password</span>
      <input type="password" name="password" v-model="password"/>
    </div>
    <div>
      <span class="formLabel">Repository</span>
      <input type="text" name="repository" v-model="repository"/>
    </div>
    <button @click="login">Login</button>
  </div>
</template>

<script>
import GitHub from 'github-api';

export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
      repository: '',
    };
  },
  methods: {
    login() {
      window.github = new GitHub({
        username: this.username,
        password: this.password,
        auth: 'basic',
      });

      window.repository = github.getRepo(this.username, this.repository);

      this.$router.push('/editor');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.formLabel {
  display: block;
  margin-top: 8px;
}
</style>
