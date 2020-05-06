<template>
    <div id="app" class="container">
        <img src="./assets/img/page.png">
        <p class="p-test">{{ greeting }} world!!!</p>
    </div>
</template>
<script>
export default {
    name: 'App',
    components: {},
    props: {},
    data() {
        return {
            greeting: "Hello"
        };
    },
    computed: {},
    watch: {},
    created() {},
    mounted() {},
    methods: {},
}
</script>
<style lang="less">
.container{ 
    .p-test{
        color: red
    }
}
</style>