<template>
  <div class="timeline-wrapper">
    <ul class="list" @touchstart="onTouchStart" @touchmove="onTouchMove" @touchend="onTouchEnd">
      <li @click="onClick" class="item" v-for="(item, index) in timelineList" :key="index">
        <i class="icon"></i>
        <div class="tail"></div>
        <div class="item-content-wrapper">
          <p>{{ item.name }}</p>
          <p>{{ item.date }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      timelineList: [
        { name: '123', dateL: '123' }
      ]
    }
  },
  methods: {
    onClick () {
      if (this.isMoving) {
        this.isMoving = false
        console.log(this.isMoving, 'onclick')
        return
      }
      console.log('onClick')
    },
    onTouchStart (e) {
      console.log('onTouchStart')
      // e.preventDefault()
    },
    onTouchMove () {
      console.log('moving')
      this.isMoving = true
    },
    onTouchEnd () {
      console.log('end')
    }
  }
}
</script>

<style lang='scss' scoped>
ul, li {
  list-style: none;
  margin: 0;
  padding: 0;
}
.timeline-wrapper {
  .list {
    .item {
      position: relative;
      padding-bottom: 20px;
      position: relative;
      .icon {
        position: absolute;
        left: -4px;
        width: 10px;
        height: 10px;
        background-color: blue;
      }
      .tail {
        position: absolute;
        left: 4px;
        height: 100%;
        background-color: red;
      }
      .item-content-wrapper {
        padding-left: 10px;
      }
    }
  }
}
</style>
