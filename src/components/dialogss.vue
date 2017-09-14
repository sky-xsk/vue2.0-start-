<template>
    <div class="conts" v-show="dialogShow">
         <div class="cont_cont">
             <slot>暂时没有数据！</slot>
         </div>
         <p><el-button type="danger" @click="dialogClose()">关闭</el-button></p>
    </div>
</template>

<script>
   
    export default {
        name: '',
       
        data() {
            return {
              dialogShow:false,
            }
        },
        methods:{
            dialogClose(){
                 this.$emit('closeDialogs');
            },
        }
    }
</script>

<style scoped>
.conts{ width: 400px; height: 300px; background: #ccc; position: fixed;
left:50%; top:50%; margin-left: -200px; margin-top: -150px; overflow: hidden; z-index: 200}
.cont_cont{ width: 100%; height: 250px; overflow: hidden; border-bottom: 1px solid #000;}
.conts p{padding: 0;  margin-top: 8px;}

</style>