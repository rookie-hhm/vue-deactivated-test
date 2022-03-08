<template>
  <div>
    <slot>
      card子组件
    </slot>
  </div>
</template>

<script>
export default {
  name: '',
  props: {
    show: {
      type: Boolean
    }
  },
  watch: {
    show (newVal) {
      console.log('card child', newVal)
    }
  },
  updated () {
    console.log('card updated')
  },
  deactivated () {
    console.log('card deactivated')
  },
  data () {
    return {

    }
  }
}
</script>

<style lang='scss' scoped>

</style>
