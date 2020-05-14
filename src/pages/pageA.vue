<template>
  <div>
    <img :src="imgs">
    通过vue-router进入了A页面
  </div>
</template>

<script>
import imgs from '@/assets/img/page.png'

export default {
  data () {
    return {
      imgs: imgs

    }
  }
}
</script>

<style>

</style>
