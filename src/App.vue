<template>
  <div id="app">
  <h3>vue2.0 教程/仔细研究完，你可以做项目了！</h3>
    <good :total="total" v-on:message="recieveMessage"></good>
    
     <h4>看地址处有使用动态路由</h4>
    <div class="test">
        <ul>
            <p>此处是路由<b>{{$route.name}}</b>通过路由传递参数</p>
            <li> <router-link to="/Hello">Hello</router-link></li>
            <li> <router-link to="/Hello/foo">Hello/foo</router-link></li>
            <li><router-link to="/world">world</router-link></li>
            <li><router-link to="/good">good</router-link></li>
            <li><router-link to="/user">user</router-link></li>
        </ul>

        <!--
            <router-link>
            1.设置 replace 属性的话，当点击时，会调用 router.replace() 而不是 router.push()，于是导航后不会留下 history 记录。
            2.设置 append 属性后，则在当前（相对）路径前添加基路径。例如，我们从 /a 导航到一个相对路径 b，如果没有配置 append，则路径为 /b，如果配了，则为 /a/b。
            3.有时候想要 <router-link> 渲染成某种标签，例如 <li>。 于是我们使用 tag prop 类指定何种标签，同样它还是会监听点击，触发导航。
            4.exact,"是否激活" 默认类名的依据是 inclusive match （全包含匹配）。 举个栗子，如果当前的路径是 /a 开头的，那么 <router-link to="/a"> 也会被设置 CSS 类名。
        -->

        <div class="pp">父组件待传的值{{total}}</div>
        <button class="btn">在此接受good组件的值：{{ll}}</button>
    </div>
    <!--<router-view>有个name属性，如果 <router-view>设置了名称，则会渲染对应的路由配置中 components 下的相应组件。-->
    <router-view :total="total" v-on:message="recieveMessage" v-on:cz="czs" ></router-view>

    <div class="teanistions">
       <button @click="shiw">点击我，你就会看到动态的效果</button>
       <transition name="fade">
            <div class="tran" v-show='toggle'></div>
       </transition>
    </div>

    <div class="tests"></div>
    
    <div v-cloak>{{ message}}sdfsdf</div>

    <Hello ref="ss" :total="total" v-on:cz="czs"></Hello>
    <p>从hello传过来的值{{lll}}</p>
    <button type="button" @click="btnhello">点击此处，父组件就会调用子组件hello的方法</button>    

    <p>此处是watch数据监测api，去看console</p>
    <input v-model="example0"/>


    <p>通过ref访问dom，并改变其中的颜色；ref的用法；在test()的方法参见</p>
    <div ref="example">我变成红色了！</div>

    <p>一些事件修饰符</p>
    <!-- 阻止单击事件冒泡 -->
    <a v-on:click.stop="doThis"></a>

    <!-- 提交事件不再重载页面 -->
    <form v-on:submit.prevent="onSubmit"></form>

    <!-- 修饰符可以串联  -->
    <a v-on:click.stop.prevent="doThat"></a>

    <!-- 只有修饰符 -->
    <form v-on:submit.prevent></form>
    <form v-on:submit.prvevnt></form> 

    <!-- 添加事件侦听器时使用事件捕获模式 -->
    <div v-on:click.capture="doThis">...</div>

    <!-- 只当事件在该元素本身（而不是子元素）触发时触发回调 -->
    <div v-on:click.self="doThat">...</div>

     <p>一些按键事件,方法参见submit</p>
     <input v-on:keyup.enter="submit">

     <p>如果要控制多个按键直接可以看下面的写法</p>
     <input v-on:keyup.enter.shift="submit">
     
     <el-button type="primary">主要按钮</el-button>

    <p></p>

   <bar></bar>

   <jsonp></jsonp>

   <h2>子组件向父组件传值的小示例</h2>

    <span>我是父组件 <b> {{fu}} </b> 看此处值的变化</span>
    
    <props @childmsg="get"></props>


    <h2>vue2.0动画的高级探索//运动函数//请看控制台</h2>

    <p><el-button type="primary" @click="shows=!shows">运动按钮</el-button></p>
    <transition name="fades"
            @before-enter="beforeEnter"
            @enter="enter"
            @after-enter="afterEnter"
            @before-leave="beforeLeave"
            @leave="leave"
            @after-leave="afterLeave">
        <div class="diva" v-show="shows" ></div>
    </transition>
    

    <h1>vuex 状态管理</h1>
        <p>
            <button>访问状态1：{{$store.state.size}}</button>
            <!-- 1.<button>访问状态2：{{see}}</button>-->
            2.<button>访问状态2：{{sizes}}</button>
        </p> 
        <p>
            <p>载荷，说白了就是传的一个参数,payload是一个对象；</p>
            <button @click="$store.commit('jia', {n:10})">增加+</button>
            <button @click="jian">减少- </button>
        </p>

          <p>
            <button @click="jiaplus">+plus</button>
            <button @click="jianplus">-plus</button>  
         </p>

        <hr />  
     <p>
        此处开发的alerts组件，相当于一个插件的形式，就是说你直接在main.js中引用过之后，可在任意页面或组件中使用，和vue-resource的用法相同（公共组件），
        这个组件我并没有在components里注册；
     </p>  

     <alerts></alerts>
     <alerts></alerts>
      
     <hr />

     <h2>$parent</h2>
         <button @click="parents()">点击我$parent</button>
         
     <parent></parent>

    <hr />
         <markdown></markdown>     
    <hr />

    <button @click="showsd()">试试用vuex处理显示隐藏</button>
    <transition enter-active-class="zoomInLeft" leave-active-class="zoomOutRight">
        <div class="showToggle animated" v-show="testshow">试试用vuex处理显示隐藏</div>  
    </transition>

    <hr /> 
    
    <todolist></todolist>

    <hr />

     <scripts>
        <p>分发</p>
    </scripts>
    <button  v-on:click="childs()">点击显示子组件的信息child</button>

     <hr />
     <h2>用一下better-scroll插件</h2>
     <betterScroll></betterScroll>

      <hr />

    <h2>来来，再来弄一下，vuex</h2>
    <h4>读出来数据</h4>    
    <button type="button">计算属性1：{{$store.state.muconut}}</button>
    <button>计算属性2：{{muconuts}}</button>   
    <p>触发的动作按钮</p>
    <button @click="active1()">触发按钮 {{muconuts}}</button>

    <el-button type="danger" @click="getBook()">异步获取数据,点击有惊喜！</el-button>
    <div class="book">
        <ul>
            <li v-for="itemsd in novel">
                    <p><span><img :src="itemsd.image"></span></p>
                    <p><span><b>编号：</b>{{itemsd.id}}</span></p>
                    <p><span><b>名称：</b>{{itemsd.title}}</span></p>
                    <p><span><b>评分：</b>{{itemsd.rating.average}}</span></p>
            </li>
        </ul>
    </p>
</div>
  <hr />
     <!--获取数据的写法
    <h3>vuex的形式写的数据交互</h3>
   <el-button type="danger" @click="getuser()">异步获取数据,获取用户</el-button>
        <ul style="max-height:300px; min-height:5px; overflow-y:auto">
            <li v-for="its in user">
                <p><span><b>id：</b>{{its.id}}</span></p>
                <p><span><b>姓名</b>{{its.username}}</span></p>
                <p><span><b>email：</b>{{its.email}}</span></p>
            </li>
        </ul>
   -->
  <hr />

    <h2>v-if.....v-else//此处和v-show有点类似</h2>
    <p>如果满足条件则不被隐藏，反之被隐藏</p>
    <div v-if="Math.random() > 0.5"><b>现在没有被隐藏起来</b></div>
    <div v-else><b>现在被隐藏起来了</b></div>

   <hr />   
  <h3>此处的值为传过去的值，不同的页面用的同一个组件，但是弹出的内容是不同的</h3> 
  <alertip v-show="alertipShow" @closeTip="alertipShow = false" :alertText="alertText"></alertip> 
  <el-button type="primary" @click="alerts()">点击此按钮，出现浮动窗口</el-button>

  <hr/>
  <h3>点击切换文字</h3>
 <el-button type="primary" @click="qie()">{{loginWay? "密码登陆":"短信登陆"}}</el-button>

 <hr/>

 <h3>上拉刷新，下拉加载</h3>
    <refreseloading v-show="showLoading"></refreseloading>
    <button type="primary" @click="showrefresh()"><a href="#">点击显示上拉刷新下拉加载,此处样式没有精修，只展示写法</a></button>

 <hr />
 <h3>slot</h3>
    <slots>
        <!--这里的slot与组件里的name一一对应-->
        <div slot="CPU">Intel Core i7</div>
        <div slot="GPU">GTX980Ti</div>
        <div slot="Memory">Kingston 32G</div>
        <div slot="Hard-drive">Samsung SSD 1T</divt>
    </slots>    
<hr />

<h3>再谈动画 A better tool for cubic-bezier() easing 可以实现动画的展现的速度曲线运动；网址：http://cubic-bezier.com</h3>
<transition1></transition1>

<hr />
<directives></directives>
<!--
 //内置组件
<component :is="componentId"></component>
<keep-alive></keep-alive>
-->

<hr />

<p>/////////////////////////////////////////////////////////////////////</p>
<el-button type="primary" @click="aboutClick()">点击弹出，弹出框</el-button>
<el-button type="primary" @click="echartClick()">点击弹出，弹出框，弹出图表</el-button>

<dialogs :is-show="isShowAboutDialog" @on-close="closeDialog('isShowAboutDialog')">
    <p>利用同一个组件，dialogs，但是显示的内容是不同的，实现组件的高度复用</p>
</dialogs>

<dialogs :is-show="isShowEchartDialog" @on-close="closeDialog('isShowEchartDialog')">
    <p>数据可视化</p>
    <echarts></echarts>
</dialogs>
<p>/////////////////////////////////////////////////////////////////////</p>

</div>

</template>
<script>
    import good from './components/good.vue';
    import user from './components/user.vue';
    import Hello from './components/Hello.vue';
    import bar from './components/bar.vue';
    import jsonp from './components/jsonp.vue';
    import props from './components/props.vue';
    import parent from './components/parent.vue';
    import markdown from './components/markdown.vue';
    import todolist from './components/todolist.vue';
    import scripts from './components/scripts.vue';
    import betterScroll from './components/betterScroll.vue';
    import alertip from './components/alertip.vue';
    import refreseloading from './components/refreseloading.vue';
    import slots from './components/slots.vue';
    import transition1 from './components/transition1.vue';
    import directives from './components/directives.vue';
    import echarts from './components/echarts.vue';
    import apitest from './components/apitest.vue';
    import apidetail from './components/apidetail.vue';
    import dialogs from './components/dialogs.vue';
    import Vue from 'vue';
    import {mapState,mapMutations,mapGetters,mapActions} from 'vuex';
    export default {
        name: 'app',
        components: {
            good,
            user,
            Hello,
            bar,
            jsonp,
            props,
            parent,
            markdown,
            todolist,
            scripts,
            betterScroll,
            alertip,
            refreseloading,
            slots,
            transition1,
            directives,
            echarts,
            apitest,
            apidetail,
            dialogs
        },
       
        data() {
            return {
                total: 2000,
                ll: '',
                lll:'',
                toggle: false,
                message: 'asdasdas',
                example0: "",
                fu:'我是父组件的数据', 
                shows:false,
                see:0,
                alertipShow:false,
                alertText:'',
                loginWay:true,
                showLoading:false,
                isShowAboutDialog: false,
                isShowEchartDialog: false,

            }
        },
        
        created(){

          
        },

        computed:{
            //vuex
            //第一种方法；
            // see(){
            //      return this.$store.state.sizes;
            // },
            //第二种方法,推荐此种方法
             ...mapState(['sizes']),
             ...mapState(['testshow']),
             ...mapState(['novel']),
             //获取数据的写法
            // ...mapState(['user']),
       
             muconuts(){
                 return this.$store.state.muconut;
             },
              
            //第一种方法；
            // sizes(){
            //     return this.$store.getters.sizes;
            // },
            //第二种方法,推荐此种方法
            ...mapGetters(['sizes']),//注意默认的值
        },
   
        mounted() {
            this.tests(); 
        },
        //数据监测
        watch: {　　　　　　　　
            example0(curVal, oldVal) {　　　　
                console.log(curVal, oldVal);　　　　　　　　
            },

            //监测路由的变化，平时也会用到
            $route(from,to){
                console.log(from.path);
                console.log(to.path);
                if(to.path == '/world'){
                    console.log('检测成功world')
                }else if(from.path == '/Hello'){
                    console.log('检测成功Hello')
                }
            }

        },
        methods: {
            //组件弹窗开始
            aboutClick () {
                this.isShowAboutDialog = true
            },
            closeDialog (attr) {
                 this[attr] = false
            },

            echartClick(){
                this.isShowEchartDialog = true;
            },
            //组件弹窗结束
            
            showrefresh(){
                this.showLoading=true;
            },
            //
            qie(){
               this.loginWay = !this.loginWay;
            },
            //
            alerts(){
                this.alertText="此处的值为传过去的值，不同的页面用的同一个组件，但是弹出的内容是不同的！,这个信息在app组件里"
                this.alertipShow = true;
            },
            //child
            childs(){
                for (var i = 0; i < this.$children.length; i++) {
                    if(this.$children[i].msgs === 'child'){
                        console.log(this.$children[i].msgs)
                    }
                 }
            },
            //
            parents(){
                alert("parent")
            },

            
            //注意mapMutations的引入方式
             ...mapMutations(['jian','jia']), 
             ...mapMutations(['active1']), 
             ...mapMutations(['getBook']), 
              //获取数据的写法
             //...mapMutations(['getuser']), 
            //结合设置的数据，注意数字的变化
            ...mapActions(['jiaplus','jianplus']),
            ...mapActions(['showsd']),
            ...mapActions(['getBook']),
             //获取数据的写法
            //...mapActions(['getuser']),
            //
             beforeEnter(el){
                console.log('动画enter之前');
            },
            enter(el){
                console.log('动画enter进入');
            },
            afterEnter(el){
                console.log('动画进入之后');
                el.style.background='blue';
            },
            beforeLeave(el){
                console.log('动画leave之前');
            },
            leave(el){
                console.log('动画leave');
            },
            afterLeave(el){
                console.log('动画leave之后');
                el.style.background='red';
            },
        
            //传值
            get(msg){
                this.fu = msg;
            },
            submit(){
                alert(0);
            },
            //
            tests() {
                this.$refs.example.style.color='red';
            },
            //父组件调用子组件的方法
            btnhello() {
                this.$refs.ss.alerts();
            },

            recieveMessage(text) {
                this.ll = text
            },

            czs(cz){
                this.lll = cz;
            },

            shiw() {
                if (!this.toggle) {
                    this.toggle = true
                } else if (this.toggle) {
                    this.toggle = false
                }
            },
        },
    }
</script>

<style scope>
.li{float: left; border: 1px solid #ccc; width: 140px;   margin:1px; cursor: pointer;}
.titlt{ height: 24px; }
.showToggle{ width: 300px; height: 30px; background: #f60; color: #fff;  line-height: 30px; margin-top: 10px;margin: 0 auto;}
.diva{ width: 300px; height: 200px; background: seagreen};
.fades-enter-active, .fades-leave-active{transition: 1s all ease;}
.fades-enter-active{opacity:1; transform: translate3d(0,0 ,0);}
.fades-leave-active{opacity:0;transform: translate3d(100px,0,0);}
.fades-leave{opacity:0;transform: translate3d(100px,0 ,0);}
.fades-enter{opacity:0;transform: translate3d(0,0,0);}
.tests {width: 100%;margin-top: 300px;}
.tests ul li {height: 30px;}
.sd {margin-top: 100px;}
.cont {margin-top: 50px;}
.cont>ul {display: flex;}
.cont > ul > li {float: left;flex: 1;list-style: none;}
.example {width: 100%;height: 300px;border: 1px solid #999;margin-top: 300px;}
.btn {margin-top: 20px;}
.teanistions {margin-top: 20px;}
.tran {widows: 200px;height: 50px;background: #2c3e50;margin-top: 10px;}
.fade-enter-active {transition: all .8s ease;}
.fade-leave-active {transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);}
.fade-enter, .fade-leave-active {transform: translateY(20px);opacity: 0;}
#app {font-family: 'Avenir', Helvetica, Arial, sans-serif;-webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale;text-align: center;color: #2c3e50;}
.test {width: 100%;height: 48px;background: #ccc;}
.test ul {display: flex;}
.test ul li {list-style: none;float: left;flex: 1;line-height: 48px;text-align: center;cursor: pointer;}
.pp {width: 100%;height: 30px;border: 1px solid #ccc;margin-top: 300px;line-height: 30px;}
.book{ width: 100%; overflow: hidden;}
.book ul li{ list-style: none; float: left; margin-left: 100px; height: 300px;}
</style>