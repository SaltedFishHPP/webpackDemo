<template>
    <div id="app" class="container">
        <img src="./assets/img/page.png">
        <img :src="imgs" alt="">
        <img :src="imgs2" alt="">
        <p class="p-test">{{ greeting }} world!ddd!!</p>
        <home></home>
    </div>
</template>
<script>
import imgs from '@/assets/img/page.png'
import imgs2 from 'static/img/finger.png'
import home from '@/pages/home'
export default {
    name: 'App',
    components: { home },
    props: {},
    data() {


        return {
            imgs: imgs,
            imgs2: imgs2,
            greeting: "Hello",
        };
    },
    computed: {},
    watch: {},
    created() {
    },
    mounted() {},
    methods: {},
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