<template>
  <div class="about">
    <h1>This is an about page</h1>
    <!-- {{ $route.query }} -->
    <!-- <timeline></timeline> -->
    <button @click="toHome">asdasd</button>
  </div>
</template>

<script>
// import Timeline from '../components/timeline.vue'
export default {
  name: 'asd',
  components: {
    // Timeline
  },
  // activated () {
  //   console.log('activated about')
  //   // alert('about activated')
  // },
  // mounted () {
  //   this.$root.$on('onShow', () => {
  //     console.log('about onshow')
  //   })
  //   // alert('about mounted')
  // },
  // beforeRouteLeave (to, from, next) {
  //   // next()
  // },
  beforeDestroy () {
    console.log('about beforeDestroy')
  },
  methods: {
    toHome () {
      this.$router.push({
        path: '/',
        name: 'Home'
      })
    }
  },
  watch: {
    $route: {
      handler (newVal) {
        console.log(newVal.query, 'query')
      }
    }
  }
}
</script>
