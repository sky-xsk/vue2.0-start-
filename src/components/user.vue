<template>
  <div class="user">
    <p> user组件</p>

        <ul>
            <p>此处是路由，仔细观察地址栏 </p>
            <li v-for="item in routeData"><router-link :to="{name: 'foo', params: {id: item.id}}"><span>{{item.name}}</span></router-link></li>
        </ul>
        <transition name = 'fade'>
            <router-view></router-view>
        </transition>

  </div>
</template>

<script>
    import foo from './foo.vue';
    export default {
        name: 'user',
        data() {
            return {
             routeData: [{
                    id: 1,
                    name: '路由1',
                },{
                    id: 2,
                    name: '路由2',
                },{
                    id: 3,
                    name: '路由3',
                }]
            }
        },

    }
</script> 

<style scoped>
    .fade-enter-active {
        transition: all .8s ease;
    }
    
    .fade-leave-active {
        transform: rotate(180deg);
    }
    
    .fade-enter,
    .fade-leave {
        transform: rotate(180deg);
        transition: all .8s ease;
    }
</style>