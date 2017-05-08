<template>
  <div class="world">
     <p>world组件</p>  
     <p>此处是组件的嵌套</p>  
     <Hello></Hello>

    <alertip  v-show="alertipShow" @closeTip="alertipShow = false" :alertText="alertText"></alertip>
    <el-button type="primary" @click="alerts()" style="margin-top:5px;">点击此按钮，出现浮动窗口</el-button>
   
  </div>
</template>

<script>
    import Hello from './Hello.vue';
    import alertip from './alertip.vue';
    export default {
        name: 'world',
        components: {
            'Hello': Hello,
             alertip,
        },
        data() {
            return {
                alertipShow:false,
                alertText:''
            }
        },
        methods:{
             //
            alerts(){
                this.alertText="此处的值为传过去的值，不同的页面用的同一个组件，但是弹出的内容是不同的！这个信息在world组件里"
                this.alertipShow = true;
            },
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>