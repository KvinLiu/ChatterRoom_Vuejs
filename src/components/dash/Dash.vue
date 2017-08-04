<template>
  <div>
    <sidebar></sidebar>
    <router-view></router-view>
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

</style>
