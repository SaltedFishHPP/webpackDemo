<template>
    <div id="app" class="container">
        <p class="p-test">{{ greeting }} world!!!</p>
    </div>
</template>
<script>
export default {
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
.p-test{
    color: blue
}
</style>