<template>
  <div id="profile">
    <div>
      <p class="text-center"><img :src="user.avatar" class="img-circle"></p>
      <h2 class="text-center">@{{user.username}}</h2>
      <hr>
      <p class="text-center m-b-20">{{user.about}}</p>
      <beep-list :endpoint="`/users/${this.$route.params.username}/beeps`" :showUserInfo="false"></beep-list>
    </div>
  </div>
</template>

<script>
  import BeepList from './BeepList.vue';

  export default {
    name: 'profile',
    data () {
      return {
        user: {}
      }
    },
    methods: {
      getUser () {
        this.$http.get('/users/' + this.$route.params.username)
          .then(function (res) {
            this.user = res.body;
          })
      }
    },
    components: {
      BeepList
    },
    created () {
      this.getUser();
    },
    watch: {
      // call again the method if the route changes
      $route: 'getUser'
    }
  }
</script>

<style scoped>
  #profile img{
    max-width: 200px;
  }
</style>
