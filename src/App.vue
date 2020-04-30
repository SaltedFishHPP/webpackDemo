<template>
    <div id="app" class="container">
        <p>{{ greeting }} world!</p>
    </div>
</template>
<script>
module.exports= {
// export default {
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
// };
}
</script>
<style lang="less">
.container{
    p{
        color: red
    }
}
</style>