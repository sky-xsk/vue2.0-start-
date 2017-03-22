<template>
  <div class="bar">
      <p>此处是btn组件 生命周期</p>
      <span>{{myMessage}}</span>
  </div>
</template>

<script>
    export default {
         name: 'bar',
         props: ['myMessage'],
        data() {
            return {
               
            }
        },
    }
</script>

<style scoped>

</style>