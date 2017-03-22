<template>
  <div class="bar">
      <p>此处是bar组件 生命周期</p>
      
      <p>
        <ul>
            <li v-for="(item,index) in dataseta ">{{index+1}}{{item.message}}</li>
        </ul>
      </p>

      <p>{{testdata}}</p>
      <p v-once>{{testdata}}</p>
      <button type="button" @click="addone()">点击加1</button>
      

      <p>
         <btn v-bind:myMessage="btnText"></btn> 
      </p>

      <p>
         <input type="text" v-model="btnText">
      </p>

  </div>
</template>

<script>
 import btn from './btn.vue';
    export default {
         components: {
            btn,
        },
       
        name: 'bar',
        data() {
            return {
                btnText:'helloworldsdfsd',
                dataseta:[
                    {message:"firstss"},
                    {message:"second"},
                    {message:"three"}
                ],
                testdata:1000,
            }
        },
        
        methods:{
            addone(){
                this.testdata +=1; 
            },
        },

        beforeCreate(){
            console.log('在初始化之后加载')
        },
        created(){
             console.log('创建完成')
        },
        beforeMount(){
            console.log('挂载之前')
        },
        mounted(){
            console.log('被创建')
        },
        beforeUpdate(){
            console.log('数据更新前')
        },
        updated(){
            console.log('被更新后')
        },
        //keep-alive的时候触发
        activated(){
            console.log('')
        },
        deactivated(){
            console.log('')
        },
        //
        beforeDestroy(){
            console.log('销毁之前')
        },
        destroyed(){
            console.log('销毁之后')
        },


    }
</script>

<style scoped>

</style>