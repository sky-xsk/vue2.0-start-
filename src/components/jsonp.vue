<template>
  <div class="bar">
      <div id="box">
        <h1>jsonp请求百度接口 btn组件中</h1>
        <input type="text" v-model="t1" @keyup="get($event)" placeholder="请输入您要搜索的关键词" class="input_s"  @keydown.down="changeDown()" @keydown.up.prevent="changeUp()">
        <ul class="ul_se">
            <li v-for="(value,$index) in myData" :class="{gray:$index==now}" @click="clickChose($index)">
                {{value}}
            </li>
        </ul>
        <p v-show="myData.length==0">暂无数据...</p>
    </div>

  </div>
</template>

<script>
    export default {
        data() {
            return {
                myData:[],
                    t1:'',
                    now:-1,
            }
        },
         methods:{
             get(ev){
                  if(ev.keyCode==38 || ev.keyCode==40)return;
                 if(ev.keyCode==13){
                       window.open('https://www.baidu.com/s?wd='+this.t1);
                       this.t1='';
                }
                this.$http.jsonp("https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su", //跨域请求接口
                    {
                    params: {
                        wd:this.t1,
                    },
                    jsonp:'cb'
                }).then(function(res){
                    this.myData = JSON.parse(res.bodyText).s
                },function(){
                    console.log("请求失败！！！")
                });
              },

             changeDown(){
                this.now++;
                if(this.now==this.myData.length)this.now=-1;
                this.t1=this.myData[this.now];
            },

            changeUp(){
                this.now--;
                if(this.now==-2)this.now=this.myData.length-1;
                this.t1=this.myData[this.now];
            },
             clickChose($index){
                this.now = $index;
                this.t1=this.myData[this.now];
                window.open('https://www.baidu.com/s?wd='+this.t1);
            },

       },
    }
</script>

<style scoped>
.ul_se{ background: #fff; border: 1px solid #ccc; width: 100%;}
.ul_se li{list-style: none; height: 30px; line-height: 30px; cursor: pointer;}
.input_s{width: 400px; height: 30px; padding-left: 10px;}
.gray{background: deepskyblue; color: #fff;}
.ul_se li:hover{background: deepskyblue; color: #fff;}
</style>