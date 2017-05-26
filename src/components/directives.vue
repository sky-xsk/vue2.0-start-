<template>
  <div class="directive">
        <h2>自定义指令 directive/注意看console.log</h2>    
        <p v-dir="result">显示：{{result}}</p>
        <button @click="update">更新</button>
        <button @click="uninstall">卸载</button>
        <button @click="install">安装</button>
        <hr />
  </div>
</template>

<script>
    
    export default {
        components: {
            
        },
        data() {
            return {
                result:'hiww'
            }
        },
        directives:{
             dir:{
                 bind: function (el) {
                    console.log(el.parentNode)
                    console.log('bind')
                },
                inserted: function (el) {
                    console.log(el.parentNode)
                    console.log('inserted')
                },
                update: function (el) {
                    console.log(el.innerHTML)
                    console.log('update')
                },
                componentUpdated: function (el) {
                    console.log(el.innerHTML)
                    console.log('componentUpdated')
                },
                unbind: function (el) {
                    console.log('unbind')
                }
             }
        },
        methods:{
             update: function() {
                this.result = 'Hi'
            },
            uninstall: function() {
                this.result = ''
            },
            install: function() {
                this.result = 'Hello'
            }
         
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>