<template>
  <div class="trans">
       <el-button type="primary" @click="start()">{{texts}}</el-button>
        <transition name="move">
            <div class="menu" v-show="tr_shows">
                <div class="inner inner-1">1</div>
            </div>
        </transition>
  </div>
</template>

<script>
    
    export default {
        name: 'trans',
      
        data() {
            return {
                tr_shows:false
            }
        },
        computed: {
            texts(){
                 return this.tr_shows ? '收' : '开';
            } 
        },
        methods:{
           start(){
                this.tr_shows = !this.tr_shows;
           },
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.menu{ width: 300px; margin: 0 auto; transition: all .7s; position: relative;}
.inner{ width: 50px; height: 50px; border-radius:50%; background: #f60; line-height: 50px; color: #fff; }
.move-enter-active{ transform: translate3d(0, 0, 0); transition-timing-function: cubic-bezier(0, .57, .44, 1.97);}
.inner-1{ transform: translate3d(0, 0, 0); transition-timing-function: cubic-bezier(0, .57, .44, 1.97); transition-delay: 0.5s;transition-duration:1s;}
.move-enter,.move-leave-active{transform: translate3d(200px, 0px, 0px); transition-timing-function: cubic-bezier(0, .57, .44, 1.97); opacity: 0;}

</style>