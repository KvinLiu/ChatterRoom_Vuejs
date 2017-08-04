<template>
  <div>
    <div id="dashWrap">
      <div class="container">
        <div class="row">
          <div class="col-md-3 col-md-offset-1 col-sm-5">
            <sidebar></sidebar>
          </div>
          <div class="col-md-7 col-sm-7 mainView">
            <transition name="fade">
              <router-view></router-view>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Sidebar from './Sidebar.vue';

  export default {
    name: 'dashboard',
    components: {
      Sidebar
    }
  }
</script>

<style>
  #dashWrap {
    min-height: 100%;
    padding-top: 50px;
    background: #42275a; /* fallback for old browsers */
    background: -webkit-linear-gradient(to left, #42275a, #734b6d);
    background: linear-gradient(to left, #42275a, #734b6d);
  }
  .mainView {
    background: #fff;
    border-radius: 6px;
    padding: 20px;
  }
</style>
