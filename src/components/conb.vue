<template>

  <div class="context-box-b">

   <h4> 组件 B</h4>

    {{show}}

  </div>

</template>

<script>

  import bus from './bus.js';

  export default {
    data(){
        return {'show' : 0}
    },

    mounted(){
      var that = this;
      bus.$on('event-name', function (msg) {
         that.show = msg;
      });

    }
  }
</script>