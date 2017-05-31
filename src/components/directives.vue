<template>
  <div class="directive">
        <h2>自定义指令 directive/注意看console.log</h2>    
        <p v-dir="result">显示：{{result}}</p>
        <button @click="update">更新</button>
        <button @click="uninstall">卸载</button>
        <button @click="install">安装</button>
        <hr />

        <div>
           页面加载，焦点在输入框内：<input v-focus>
        </div>
      <hr />
        <div id="hook-arguments-example" v-demo-directive:white="message"></div>
    <hr />
        <div id="hook-arguments-example1" v-demo-directiveq="{ color: 'white', text: 'hello!' }"></div>
  </div>
</template>

<script>
    export default {
        components: {
            
        },
        
        data() {
            return {
                result:'hiww',
                message:'hello'
            }
        },
        directives:{
            demoDirectiveq:{
                bind:function(el, binding, vnode){
                    console.log(binding.value.color);
                    console.log(binding.value.text);
                }
            },
            demoDirective:{
                bind: function(el, binding, vnode){
                el.style.color = '#000'
                el.style.backgroundColor = binding.arg
                el.innerHTML = 
                    '指令名name - '       + binding.name + '<br>' +
                    '指令绑定值value - '      + binding.value + '<br>' +
                    '指令绑定表达式expression - ' + binding.expression + '<br>' +
                    '传入指令的参数argument - '   + binding.arg + '<br>'
                },
            },
            /////////
            focus:{
               // 当绑定元素插入到DOM中
                inserted: function (el) {
                // 聚焦元素
                el.focus()
                }
            },
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