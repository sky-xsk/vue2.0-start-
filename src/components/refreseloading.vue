<template>
  <div class="refreseloading">
      
    <scroller class="bj" :on-refresh="refresh"
                :on-infinite="infinite"
                style="padding-top: 44px;">
        <div v-for="(item, index) in items" class="row" :class="{'grey-bg': index % 2 == 0}">
            {{ item }}
        </div>
    </scroller>
   
  </div>
</template>

<script>
import Vue from 'vue'
import VueScroller from 'vue-scroller'
    export default {
        name:'refreseloading',
        components: {
           
        },
        data() {
            return {
               items: []
            }
        },
         mounted: function () {
            for (var i = 1; i <= 20; i++) {
            this.items.push(i + ' - keep walking, be 2 with you.');
            }
            this.top = 1;
            this.bottom = 20;
        },
        methods:{
             refresh: function (done) {
                var self = this
                setTimeout(function () {
                    var start = self.top - 1
                    for (var i = start; i > start - 10; i--) {
                    self.items.splice(0, 0, i + ' - keep walking, be 2 with you.');
                    }
                    self.top = self.top - 10;
                    done();
                }, 1500)
            },

             infinite: function (done) {
                var self = this
                setTimeout(function () {
                    var start = self.bottom + 1;
                    for (var i = start; i < start + 10; i++) {
                    self.items.push(i + ' - keep walking, be 2 with you.');
                    }
                    self.bottom = self.bottom + 10;
                    done();
                }, 1500)
              }

           
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bj{box-sizing: border-box; background: #fff; border: 1px solid #ccc; }
</style>