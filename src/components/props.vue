<template>
  <div class="props">
        <p>此处是props组件</p>
        <span>子组件<b>{{zi}}</b></span>
        <input type="button" value="子组件向父组件传值" @click="send">

  </div>
</template>

<script>
    export default {
        data() {
            return {
               zi:"我是props子组件的数据", 
            }
        },
         methods:{
            send(){
                this.$emit('childmsg',this.zi); //子组件分发事件
            },

         },
    }
</script>

<style scoped>

</style>