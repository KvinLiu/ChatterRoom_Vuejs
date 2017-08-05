<template>
  <div>
    <div id="beepsWraper">
      <beep v-for="beep in beeps" :beep="beep" :showUserInfo="showUserInfo"></beep>
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
    props: {
      endpoint: { type: String, default: "/beeps"},
      showUserInfo: { type: Boolean, default: true}
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
        this.$http.get(`${this.endpoint}?page=${page}`)
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
    watch: {
      endpoint () {
        this.beeps = [];
        this.getBeeps();
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
