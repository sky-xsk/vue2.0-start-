<template>
  <div class="slot">
    <div>
        <slot name="CPU">这儿插你的CPU</slot>
        <slot name="GPU">这儿插你的显卡</slot>
        <slot name="Memory">这儿插你的内存</slot>
        <slot name="Hard-drive">这儿插你的硬盘</slot>
    </div>
  </div>
</template>

<script>
  
    export default {
        data() {
            return {
                
            }
        },
        methods:{
             //
            
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>