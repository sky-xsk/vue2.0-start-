<template>
  <div class="world">
     <p>world组件</p>  
     <p>此处是组件的嵌套</p>  
     <Hello></Hello>
  </div>
</template>

<script>
    import Hello from './Hello.vue';
    export default {
        name: 'world',
        components: {
            'Hello': Hello,
        },
        data() {
            return {

            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>