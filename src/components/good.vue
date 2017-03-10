<template>
  <div class="good">
     <p>good组件</p>
     <p>已接受父组件app传的值：{{total}}</p>

     <button @click="output">点击我，子组件的值就会传给父组件，good组件的值{{msg}}</button>

    
    
  </div>
</template>

<script>
    export default {
        name: 'good',
        props: {
            total: {
                type: Number
            }
        },
        data() {
            return {
                msg: 500,
            }
        },
     
        mounted() {
           
        },
        //
        methods: {
            output() {
                this.$emit('message', this.msg);
            }

        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>