<template>
  <div class="scripts">
        <p>子组件信息：{{msgs}}</p>	
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