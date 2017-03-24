<template>
  <div id="app">
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

        <div class="pp">父组件待传的值{{total}}</div>
        <button class="btn">在此接受good组件的值：{{ll}}</button>
    </div>
    <router-view :total="total" v-on:message="recieveMessage" v-on:cz="czs"></router-view>

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
   

<!--   <div class="vuex">
        <h1>vuex 访问状态对象</h1>
        <p>{{counts}}</p>
        <p>
            <button @click="jiaplus">+plus</button> 
            <button @click="jianplus">-plus</button>
        </p>
   </div>


   <div class="vuex">
        <h1>vuex 访问状态对象</h1>
        <p>{{counts}}</p>
        <p>
            <button @click="$store.commit('jia',{a:10})">+</button> 
            <button @click="$store.commit('jian')">-</button>
        </p>
   </div>
 -->  
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
            @after-leave="afterLeave"
     >
        <div class="diva" v-show="shows" ></div>
    </transition>
    







  </div>
</template>


<script>
    import good from './components/good.vue';
    import user from './components/user.vue';
    import Hello from './components/Hello.vue';
    import bar from './components/bar.vue';
    import jsonp from './components/jsonp.vue';
    import props from './components/props.vue';
    import Vue from 'vue';
   // import {mapState,mapGetters,mapMutations,mapActions} from 'vuex';
    export default {
        name: 'app',
        components: {
            good,
            user,
            Hello,
            bar,
            jsonp,
            props
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


                //
                //counts:0,
                //
            }
        },

        //计算属性
        // computed:{
        //      count(){
        //          return this.$store.state.count+1;
        //      },

        // },

        // computed:mapState({
        //     count:function(state){
        //         return state.count+2
        //     }
        // }),

        // computed:{
        //     ...mapState(
        //         ["counts"]
        //     ),

        //     // counts(){
        //     //     return this.$store.getters.counts
        //     // },
        //     ...mapGetters(
        //         ["counts"]
        //     ),

        // },

        // methods:{
        //     ...mapMutations([
        //         'jia',
        //         'jian'
        //     ]),
        //     ...mapActions([
        //         'jiaplus',
        //         'jianplus',
        //     ])
        // },

        mounted() {
            this.tests(); 
        
        },
        //数据监测
        watch: {　　　　　　　　
            example0(curVal, oldVal) {　　　　
                console.log(curVal, oldVal);　　　　　　　　
            },
        },

        methods: {
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
            //
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

<style>
       .diva{ width: 300px; height: 200px; background: seagreen};

        .fades-enter-active, .fades-leave-active{
            transition: 1s all ease;
        }

      .fades-enter-active{
            opacity:1; 
            transform: translate3d(0,0 ,0);
          
        }
        .fades-leave-active{
            opacity:0;
             transform: translate3d(100px,0,0);
        }
         .fades-leave{
            opacity:0;
            transform: translate3d(100px,0 ,0);
           
        }
        .fades-enter{
            opacity:0;
            transform: translate3d(0,0,0);
        }

    .tests {
        width: 100%;
        margin-top: 300px;
    }
    
    .tests ul li {
        height: 30px;
    }
    
    .sd {
        margin-top: 100px;
    }
    
    .cont {
        margin-top: 50px;
    }
    
    .cont>ul {
        display: flex;
    }
    
    .cont > ul > li {
        float: left;
        flex: 1;
        list-style: none;
    }
    
    .example {
        width: 100%;
        height: 300px;
        border: 1px solid #999;
        margin-top: 300px;
    }
    
    .btn {
        margin-top: 20px;
    }
    
    .teanistions {
        margin-top: 20px;
    }
    
    .tran {
        widows: 200px;
        height: 50px;
        background: #2c3e50;
        margin-top: 10px;
    }
    
    .fade-enter-active {
        transition: all .8s ease;
    }
    
    .fade-leave-active {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    
    .fade-enter,
    .fade-leave-active {
        transform: translateY(20px);
        opacity: 0;
    }
    
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
    
    .test {
        width: 100%;
        height: 48px;
        background: #ccc;
    }
    
    .test ul {
        display: flex;
    }
    
    .test ul li {
        list-style: none;
        float: left;
        flex: 1;
        line-height: 48px;
        text-align: center;
        cursor: pointer;
    }
    
    .pp {
        width: 100%;
        height: 30px;
        border: 1px solid #ccc;
        margin-top: 300px;
        line-height: 30px;
    }
</style>