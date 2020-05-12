<template>
  <div>
    <img :src="imgs2">
    通过vue-router进入了B页面
  </div>
</template>

<script>
import imgs2 from 'static/img/finger.png'
export default {
  data () {
    return {
      imgs2: imgs2

    }
  }
}
</script>

<style>

</style>
