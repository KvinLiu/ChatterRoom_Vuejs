<template>
  <div>
    <div id="beepsWraper">
      <beep v-for="beep in beeps" :beep="beep"></beep>
      <div v-if="beepsLoading" id="beepsLoading" class="text-center">
        <i class="fa fa-spin fa-spinner"></i>
      </div>
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
        beeps: [],
        page: {},
        beepsLoading: false
      }
    },
    methods: {
      getBeeps(page) {
        this.beepsLoading = true;
        this.$http.get(`/beeps?page=${page}`)
          .then((res) => {
            this.beeps = this.beeps.concat(res.body.data);
            this.page = {current: res.body.current_page, last: res.body.last_page};
            this.beepsLoading = false;
          })
          .catch(() => {
            this.beepsLoading = false;
          });

      },
      handleScroll() {
        if (document.body.scrollHeight - window.innerHeight - document.body.scrollTop === 0) {
          if (this.page.current < this.page.last)
            this.getBeeps(this.page.current + 1);
        }
      }
    },
    created () {
      this.beeps = [];
      this.getBeeps(1);
      window.addEventListener('scroll', this.handleScroll)
    },
    destroyed (){
      window.removeEventListener('scroll', this.handleScroll)
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
