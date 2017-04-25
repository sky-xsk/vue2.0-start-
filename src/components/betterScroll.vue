<template>
  <div class="bs">
      <p>betterScroll插件，，按住鼠标在此处上下滑动即可看到效果</p>
        <div id="wrapper">
            <ul>
                <li v-for="item in list12">{{item}}</li>
            </ul>
        </div>
  </div>
</template>

<script>
    import BScroll from 'better-scroll';
    export default {
    data() {
        return {
            list12:["实例1","实例1","实例1","实例1","实例1","实例1","实例1","实例1","实例1","实例1","实例1","实例1","实例1","实例1","实例1","实例1","实例1","实例1"],
        }
    },

    mounted() {
        this. scrolls();
    },
    created(){
    //  DOM 还没有更新
    //  Vue.nextTick(function () {
    //    DOM 更新了
    // })
    } ,

     methods: {
        scrolls() {
           let scroll = new BScroll(document.getElementById('wrapper'), {
                startX: 0,
                startY: 0,
                // startY: 0 开始的Y轴位置
                // scrollY: true 滚动方向为 Y 轴
                // scrollX: 'true' 滚动方向为 X 轴
                // click: true 是否派发click事件
                // directionLockThreshold: 5
                // momentum: true 当快速滑动时是否开启滑动惯性
                 bounce: true, //是否启用回弹动画效果
                 selectedIndex: 0 //wheel 为 true 时有效，表示被选中的 wheel 索引
                // rotate: 25 wheel 为 true 时有效，表示被选中的 wheel 每一层的旋转角度
                // wheel: false 该属性是给 picker 组件使用的，普通的列表滚动不需要配置
                // snap: false 是否开启捕捉元素，当为 true 时，捕捉的元素会根据可滚动的位置和滚动区域计算得到可滑动几页。
                // snapLoop: false 是否创建当前滚动元素子集的拷贝
                // snapThreshold: 0.1 滑动切换的比例，大于这个比例就是滑动的下一页
                // swipeTime: 2500 swipe 持续时间
                // bounceTime: 700 弹力动画持续的毫秒数
                // adjustTime: 400 wheel 为 true 有用，调整停留位置的时间
                // swipeBounceTime: 1200 swipe 回弹 时间
                // deceleration: 0.001 滚动动量减速越大越快，建议不大于0.01
                // momentumLimitTime: 300 符合惯性拖动的最大时间
                // momentumLimitDistance: 15 符合惯性拖动的最小拖动距离
                // resizePolling: 60 重新调整窗口大小时，重新计算better-scroll的时间间隔
                // preventDefault: true 是否阻止默认事件
                // preventDefaultException: { tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/ } 阻止默认事件
                // HWCompositing: true 是否启用硬件加速
                // useTransition: true 是否使用CSS3的Transition属性
                // useTransform: true 是否使用CSS3的Transform属性
                // probeType: 1 滚动的时候会派发scroll事件，会截流。2滚动的时候实时派发scroll事件，不会截流。 3除了实时派发scroll事件，在swipe的情况下仍然能实时派发scroll事件
             })
        },

     },

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#wrapper{ width: 100%; height: 200px; overflow:hidden;  border: 1px solid #ccc; position: relative;}
</style>