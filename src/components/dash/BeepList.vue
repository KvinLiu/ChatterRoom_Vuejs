<template>
  <div>
    <div id="beepsWraper">
      <beep v-for="beep in beeps" :beep="beep"></beep>
    </div>
  </div>
</template>

<script>
  import Beep from './Beep.vue';
    export default {
    name: 'BeepList',
    components: {
      Beep
    },

    data () {
      return {
        beeps: []
      }
    },
    methods: {
      getBeeps () {
        this.$http.get('/beeps')
          .then((res) => {
            this.beeps = res.body.data;
          })
      }
    },
    created () {
      this.beeps = [];
      this.getBeeps();
    }
  }
</script>

<style scoped>
    #beepsWraper {
        margin: 0 -20px;
    }

    #beepsLoading {
        padding: 40px;
    }

    #beepsLoading i {
        font-size: 40px;
    }
</style>
