<template>
  <!-- <About /> -->
  <div class="wrapper" ref="wrapper">
    <!-- <div ref="child1" class="wrapper-1"></div>
    <div ref="child2" class="wrapper-2"></div>
    <div ref="child3" class="wrapper-3"></div> -->
    <div class="button">
      了解方案
      <!-- <div class='x-container'>
        <div class='y-container'></div>
    </div> -->
      <div class="item right">
        <div class="inner"></div>
      </div>
      <div class="item left">
          <div class="inner"></div>
        </div>
    </div>
  </div>
</template>

<script>
// import About from './About.vue'
export default {
  name: 'Test'
  // components: {
  //   // About
  // },
  // activated () {
  //   console.log('activated Test')
  // },
  // mounted () {
  //   this.$nextTick(() => {
  //     const { child1, child2, child3 } = this.$refs
  //     console.log(child1, 'child1')
  //     console.log(child1.offsetTop, child2.offsetTop, child3.offsetTop)
  //   })
  //   this.$refs.wrapper.addEventListener('scroll', e => {
  //     console.log(e.target.scrollTop, 'scrollTop')
  //   })
  // }
}
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;
  // height: 400px;
  // overflow-y: scroll;
  &-1 {
    height: 200px;
    background-color: red;
  }
  &-2 {
    background-color: blue;
    height: 400px;
  }
  &-3 {
    background-color: black;
    height: 500px;
  }
  .button {
    position: relative;
    overflow: hidden;
    width: 274px;
    height: 44px;
    line-height: 44px;
    text-align: center;
    background: #1C43AF;
    color: #fff;
    border-radius: 25px;
    .item {
      position: absolute;
      width: 90px;
      height: 38px;
      // background: #1E61D4;
      // background-color: black;
      filter: blur(14px);
      border-radius: 50%;
      // z-index: 1;
      .inner {
        width: 90px;
        height: 38px;
        // background-color: black;
        border-radius: 50%;
        background: rgba(56, 115, 224, 1);
        opacity: 1;
        // filter: blur(14px);
        // filter: blur(14px);
        // background: radial-gradient(#1E61D4, #fff, transparent);
        // box-shadow: 0 0 0 2px #1E61D4;
      }
    }
    .left {
      left: 0;
      top: 0;
      animation: moveX 4s cubic-bezier(.25,.42,.74,.96) infinite;
      .inner {
        animation: moveY 4s cubic-bezier(.25,.42,.74,.96) infinite;
      }
    }
    .right {
      right: 0;
      bottom: 0;
      animation: moveRX 4s cubic-bezier(.25,.42,.74,.96) infinite;
      .inner {
        animation: moveRY 4s cubic-bezier(.25,.42,.74,.96) infinite;
      }
    }
  }
}
    @keyframes moveX {
      from {
        // transform: translate3d(0, 0, 0);
        transform: translateX(-100%);
      }
      55% {
        transform: translateX(80px);
        // background-color: white;
      }
      to {
        transform: translateX(140px);
      }
    }
    @keyframes moveY {
      from {
        // transform: translate3d(0, 0, 0);
        transform: translateY(-100%);
      }
      30% {
        transform: translateY(25px);
      }
      // 50% {
      //   // transform: translateY(15x);
      // }
      80% {
        // transform: translateY(10x);
        background-color: white;
      }
      to {
        transform: translateY(8px);
        opacity: 0;
      }
    }
    @keyframes moveRX {
      from {
        // transform: translate3d(0, 0, 0);
        transform: translateX(100%);
      }
      // 20% {
      //   transform: translateX(-20px);
      // }
      50% {
        transform: translateX(-80px);
        // background-color: white;
      }
      to {
        transform: translateX(-140px);
      }
    }
    @keyframes moveRY {
      from {
        // transform: translate3d(0, 0, 0);
        transform: translateY(100%);
      }
      20% {
        transform: translateY(-25px);
      }
      // 50% {
      //   // transform: translateY(15x);
      // }
      80% {
        // transform: translateY(-10x);
        background-color: white;
      }
      to {
        transform: translateY(-8px);
        opacity: 0;
      }
    }
.x-container {
  position: absolute;
  top: 0;
  left: 0;
    width: 50px;
    height: 50px;
    animation: xMove 2s linear infinite;
}
.y-container {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #000;
    animation: yMove 2s cubic-bezier(.98,.03,.91,.77) infinite;
}
@keyframes xMove {
    0% {
    }
    100% {
      transform: translateX(400px);
    }
}
@keyframes yMove {
    0% {
    }
    100% {
      transform: translateY(400px);
    }
}
</style>
