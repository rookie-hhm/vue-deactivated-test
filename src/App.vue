<template>
  <div id="app">
    <!-- <div id="nav"> -->
      <!-- <router-link to="/">Go to Home</router-link>
      <router-link to="/about">Go to About</router-link> -->
      <!-- <router-link :to="{ path: '/test' }">Test</router-link> -->
    <!-- </div> -->
    <keep-alive :include="keepalive">
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // keepalive: ['Home', 'About', 'Test']
      keepalive: ['Home']
    }
  },
  mounted () {
    setTimeout(() => {
      // this.$root.$emit('onShow')
    }, 10000)
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

#nav {
  padding: 30px;
  margin-top: 100px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
