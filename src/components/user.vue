<template>
  <div class="user">
    <p> user组件</p>

        <ul>
            <p>此处是路由</p>
            <li><router-link to="/foo">foo</router-link></li>
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