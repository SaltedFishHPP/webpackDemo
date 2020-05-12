<template>
  <div class="home-container">
    <img src="@/assets/img/page.png">
    <p>
      <router-link to="/pageA">
        Go to pageA
      </router-link>
    </p>
    <p>
      <router-link to="/pageB">
        Go to pageB
      </router-link>
    </p>

    <router-view />
  </div>
</template>
<script>
export default {
  components: {},
  props: {},
  data () {
    return {
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>
<style lang="less">
.home-container{

}
</style>
