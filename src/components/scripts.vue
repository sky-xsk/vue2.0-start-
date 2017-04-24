<template>
  <div class="scripts">
        <p>子组件信息：{{msgs}}</p>	
        <slot>如果没有分发内容，则显示slot中的内容</slot>
  </div>
</template>

<script>
    export default {
        name: 'scripts',
      
        data() {
            return {
                msgs:'child'
            }
        },
      
        methods: {
       
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>