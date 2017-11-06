<template>
  <div> 

       <p>state：{{$store.state.a}}</p>
       <p>getter:{{$store.getters.a}}</p> 
       <button @click="vueadd()">增加</button>
       <button @click="vueaddsaction()">异步增加</button>
   
  </div>
</template>

<script>
    import {mapState,mapMutations,mapGetters,mapActions} from 'vuex';
    export default {
        data() {
            return {
                
            }
        },
        computed:{
            ...mapGetters(['a']),
        },
        methods:{
           ...mapMutations(['vueadd']), 
           ...mapActions(['vueaddsaction']), 
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>