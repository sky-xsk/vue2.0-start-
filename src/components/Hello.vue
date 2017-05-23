<template>
  <div class="hello">
     <p> hello组件 {{$route.params.id}}</p>
     <h3>从app组件里传过来的值{{total}}</h3>
     <el-button type="primary" @click="h_cz">hello的值{{msgs}}</el-button> 

  </div>
</template>

<script>
    export default {
        name: 'hello',
        data() {
            return {
                msgs:33
            }
        },

     props:{
        total: {
                type: Number
            }
      },

   

    methods: {


        alerts() {
            alert("我是子组件的一个方法")
        },

        //
        h_cz(){
            this.$emit('cz',this.msgs);
        },
        //
        
    },

    }
</script>

<style scoped>

</style>