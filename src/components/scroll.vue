<template>
  <div class="wrapper" ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
const DIRECTION_H = 'horizontal'
const DIRECTION_V = 'vertical'
export default {
  name: 'BaseScroll',
  props: {
    probeType: {
      type: Number,
      default: 1
    },
    click: {
      type: Boolean,
      default: true
    },
    direction: {
      type: 'String',
      default: 'horizontal'
    },
    data: {
      type: Array,
      default: null
    }
  },
  data () {
    return {

    }
  },
  mounted () {
    if (!this.$refs.wrapper) return
    this.$nextTick(() => {
      this.scroll = new BScroll('.wrapper', {
        click: true,
        eventPassthrough: this.direction === DIRECTION_H ? DIRECTION_V : DIRECTION_H
      })
    })
  }
}
</script>

<style lang='scss' scoped>

</style>
