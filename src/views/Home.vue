<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <card :show="show">
    </card>
    {{ show }}
    <button is-link @click="show = !show">展示弹出层</button>
    <button @click="toAbout">跳转about页面</button>
    <!-- <van-popup position="bottom" v-model="show" :style="{ height: '50vh'}">
      <button @click="toAbout">跳转about页面</button>
    </van-popup> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Card from './card.vue'
export default {
  name: 'Home',
  components: {
    // HelloWorld,
    Card
  },
  data () {
    return {
      title: 'asd',
      show: false
    }
  },
  watch: {
    show: (newVal) => {
      console.log('parent value', newVal)
    }
  },
  // beforeRouteUpdate (to, from, next) {
  //   this.date = to.params.date
  //   console.log(to, from, next, 'beforeRouteUpdate')
  // },
  methods: {
    toAbout () {
      // 用settimeout 可以解决
      // setTimeout(() => {
      //   this.$router.push({
      //     name: 'About'
      //   })
      // }, 0)
      // this.show = false
      // 引发问题的代码
      this.$nextTick(() => {
        console.log('parent nextTick', this.show)
        this.$router.push({
          name: 'About'
        })
      })
      // this.$router.push({
      //   name: 'About'
      // })
      this.show = false
    },
    changeRouter () {
      this.$router.push({
        name: 'Home',
        params: {
          date: +new Date()
        }
      })
    }
  },
  deactivated () {
    console.log(this.show)
    debugger
  }
  // beforeDestroy () {
  //   console.log('home beforeDestroy')
  // },
  // activated () {
  //   this.$root.$on('onShow', () => {
  //     console.log('activated home')
  //     console.log('home onshow')
  //   })
  //   // alert('activated home')
  // },
  // mounted () {
  //   console.log('mounted', this.date)
  //   // alert('mounted home')
  // }
}
</script>
