<template>

  <div class="context-box-a">
   <h4>组件A</h4>

    <input type="text" v-model="message">
    <button @click="send"> 发送 </button>


    <p>{{$store.state.a}}</p>




  </div>

</template>

<script>

  import bus from './bus.js';

  export default {

    data(){
        return {message:""}
    },

    methods:{
      send(){
        bus.$emit('event-name', this.message);
      }
    }
  }
</script>