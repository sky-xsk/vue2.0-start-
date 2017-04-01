<template>
  <div class="parent">
        <h2>$parent</h2>
        <button @click="visted()">parent组件访问父组件的某个值</button>

        <button @click="vistedFun()">parent组件访问父组件的方法</button>

        <p><b>{{sef}}</b>访问值 computed计算属性</p>

  </div> 
</template>

<script>

    export default {
        name: 'parent',
        components: {
           
        },
        data() {
            return {
                chis:"我是子组件里的方法",
            }
        },

        computed:{
            sef(){   //访问父组件里面的值
                return this.$parent.message
            }
        },

        methods:{
            visted(){
                alert(this.$parent.message);
            },

             vistedFun(){
                this.$parent.parents();
            },

           

        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>