<template>
  <div class="alerts">
      <h2>开发自定义组件//公共组件可直接在任意地方调用</h2>

       <button @click="clicks()">点击我试一下</button>  

  </div>
</template>

<script>
    export default {
        name: 'bar',
        data() {
            return {
              
            }
        },
        
     methods:{
          clicks(){
              alert("我是公共的组件！（插件）")
          }
    },
 }
</script>

<style scoped>

</style>