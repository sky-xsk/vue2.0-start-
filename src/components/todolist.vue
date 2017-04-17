<template>
  <div class="todo">
        <h2>todolist</h2>
        <div class="t_input">
            <span><input type="text"  class="t_titles"  placeholder="请输入。。。" v-model="text" @keyup.13="add()"></span>
            <span><button class="t_add" @click="add()">添加</button></span>
        </div>

        <div class="t-cont">
            <ul>
                <li v-for="(item,index) in todolist" track-by = "$index">
                     <input type="checkbox" v-model="item.state" class="checkbox"/>
                    {{`${index+1}. `}}  {{item.value}}
                    <span @click = "del(index)">删除</span>
                    <span @click = "edit(index)">编辑</span>
                </li>
                <div class="check_che" @click="remove()" v-show="select.length > 0" >删除选中</div>
                <p v-show="todolist.length == 0">暂无数据！</p>

            </ul>
        </div>    
  </div>
</template>

<script>
    export default {
        name: 'world',
        components: {
            
        },
        data() {
            return {
                todolist:[],
                text:'',
                state: false,
                
            }
        },
        methods:{
            add(){
                if(this.text == ''){
                    return 
                }else{
                        this.todolist.push ({
                        value:this.text,
                        state: false,
                    })
                }  
                this.text='';
            },

            del(index){
                this.todolist.splice(index,1);
            },

            remove(){
                this.todolist = this.todolist.filter((index) => !index.state)
            },
            edit(index){
               
                this.text = this.todolist[index].value;
                 this.todolist.splice(index,1);
            }
        },

         computed: {
            select() {
                return this.todolist.filter((index) => index.state == true)
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.t_titles{ width: 400px; height: 35px; font-size: 16px; padding-left: 10px;}
.t_add{ width: 60px; height:40px; font-size: 16px; vertical-align: middle;}
.t-cont{ width:100%; margin-top: 20px; margin: 0 auto;}
.t-cont ul li{list-style: none; height: 30px; border: 1px solid #ccc; line-height: 30px; text-align: left; padding-left: 10px;}
.t-cont ul li span{float: right; cursor: pointer; padding-right: 10px;}
.t-cont ul li input{padding-top: 5px;}
.checks{ width: 15px; height: 15px; border-radius:50%; border: 1px solid #ccc; display: inline-block;margin-top: 5px; cursor: pointer; }
.checkbox { width: 18px; height: 18px;border: 1px solid #ccc; border-radius: 100%; position: relative; margin-right: 6px; vertical-align: middle;  }
.checkbox:checked {border-color: deepskyblue;}
.checkbox:checked:before { content: ''; display: block; width: 80%; height: 80%; position: absolute; left: 50%; top: 50%;transform: translate(-50%, -50%); background: deepskyblue; border-radius: 100%;}
.check_che{border: 1px solid #ccc; padding:10px;}
</style>