<template>
  <div>
    <h3 class="text-center">Login</h3>
    <input
      type="text"
      class="form-control m-b-15"
      placeholder="Username"
      v-model="user.username"
    >
    <input
      type="password"
      class="form-control"
      placeholder="Password"
      v-model="user.password">
    <hr>
    <button
      class="btn btn-large btn-primary btn-block m-b-15"
      @click="login"
    >Sign in</button>
    <p class="text-center">
      Don't have an account? <router-link to="/auth/register">Sign Up !</router-link>
    </p>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data () {
      return {
        user: {
          username: '',
          password: ''
        }
      }
    },
    methods: {
      login () {
        this.$http.post('/auth', this.user)
          .then((res) => {
            this.$auth.setToken(res.body.token, Date.now() + 14400000 ) // + 4 hours
            this.$router.push('/newsfeed')
          })
      }
    }
  }
</script>

<style>

</style>
