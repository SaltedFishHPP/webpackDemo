<template>
  <div
    id="app"
    class="container"
  >
    <p class="p-test">
      {{ greeting }} vue
    </p>

    <router-view />
  </div>
</template>
<script>

export default {
  name: 'App',
  props: {},
  data () {
    return {
      greeting: 'Hello'

    }
  },
  computed: {},
  watch: {},
  created () {
  },
  mounted () {},
  methods: {
  }
}
</script>
<style lang="less">
@import 'static/style/common.less';
.container{
    .p-test{
        color: red
    }
}
</style>
