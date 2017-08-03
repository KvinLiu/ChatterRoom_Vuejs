<template>
  <div id="auth">
    <div class="container">
      <div class="row">
        <div class="col-md-4 col-md-offset-4 authForm">
          <h2 class="text-center">Beeper</h2>
          <transition name="fade">
            <router-view></router-view>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'auth'
  }
</script>

<style scoped="true">
  #auth {
    display: flex;
    height: 100%;
    margin-top: 25vh;
  }
  .authForm {
    background: #fff;
    padding-bottom: 15px;
    padding-top: 10px;
    border-radius: 10px;
  }
</style>
